const mnemonicWords = require("mnemonic-words");
const Cryptr = require("cryptr");

module.exports.Cypher = class {
  constructor(wordLength) {
    this.dictionary = mnemonicWords;
    this.wordLength = wordLength || 12;
    this.mnemonics = [];
  }

  setWordLength(len) {
    if (typeof len == "number") this.wordLength = len;
  }

  /**
   *
   * @returns Object containing secret and mnemonic
   */
  genMnemonics() {
    this.mnemonics = [];
    while (this.mnemonics.length < this.wordLength) {
      // get a random word from dictionary
      const index = Math.floor(
        Math.random(0, this.dictionary.length) * this.dictionary.length
      );
      this.mnemonics.push({
        index,
        word: this.dictionary[index],
        salt: index * this.dictionary[index].length,
      });
    }
    return {
      secret: this.genSecret(),
      mnemonics: this.mnemonics.map((w) => w.word).join(" "),
    };
  }

  /**
   * @Info Generates a secret string from the mnemoics array
   * @returns String
   */
  genSecret(mnemoics) {
    let data = mnemoics || this.mnemonics;
    if (typeof data == "string") data = data.split(" ");
    if (data instanceof Array) {
      const secret = data.map((w) => `${w.salt}:${w.word.length}`).join("-");
      return secret;
    } else {
      return null;
    }
  }

  /**
   * @Info Generates a secret from seed phrase
   * @param {*} phrase
   * @returns String
   */
  secretFromPhrase(phrase) {
    if (
      typeof phrase !== "string" ||
      phrase.trim().length == 0 ||
      !/^[a-z]+/.test(phrase)
    )
      return null;
    const mnemonics = phrase.split(" ").map((word) => {
      const index = this.dictionary.findIndex((w) => w == word);
      return {
        index,
        word: this.dictionary[index],
        salt: index * this.dictionary[index].length,
      };
    });
    return this.genSecret(mnemonics);
  }

  /**
   * Generates a mnemonic phrase from secret
   * @param {*} secret 
   * @returns String
   */
  phraseFromSecret(secret) {
    if (
      typeof secret !== "string" ||
      secret.trim().length == 0 ||
      !/^\d/.test(secret)
    )
      return null;
    const mnemoics = secret.split("-").map((w) => {
      let word = "";
      // get index for each word
      const keys = w.split(":");
      if (keys.length == 2) {
        const index = Number(keys[0]) / Number(keys[1]);
        word = this.dictionary[index];
      }
      return word;
    });
    return mnemoics.join(" ");
  }

  encrypt(data, phrase) {
    try {
      if (typeof data == "object") data = JSON.stringify(data);
      if (!phrase) phrase = this.genMnemonics().mnemonics;
      const secret = this.secretFromPhrase(phrase);
      const cryptr = new Cryptr(secret);
      const encrypted = cryptr.encrypt(data);
      return encrypted;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  decrypt(hexString, phrase) {
    let decrypted = null;
    try {
      if (!phrase) phrase = this.mnemonics.join(" ");
      if (phrase.trim().length == 0) return null;
      const secret = this.secretFromPhrase(phrase);
      const cryptr = new Cryptr(secret);
      try {
        decrypted = JSON.parse(cryptr.decrypt(hexString));
      } catch (error) {
        decrypted = cryptr.decrypt(hexString);
      }
      return decrypted;
    } catch (error) {
      console.log(error);
      return decrypted;
    }
  }
};
