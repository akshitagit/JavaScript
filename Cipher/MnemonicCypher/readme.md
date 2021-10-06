# Mnemonic Cypher
The Mnemonic Cypher is a package that encrypts and decrypts data using mnemonic phrases. 

The package implements an AES-256 encryption algorithm for data encryption and decryption. Although the mnemonic phrase is passed to the `encrypt()` and `decrypt()` methods, it isn't used as the secret key in the process. You can think of the mnemonic phrases as a public key through which the cypher algorithm can regenerate the secret key.

## Usage
*Step 1:* Import the Cypher class into your project like so
```js
    const {Cypher} = require("mnemonic-cypher");
```
*Step 2:* Then create an instance of the `Cypher` class like so
```js
    const cypher = new Cypher()
```
The `Cypher` class constructor accepts an optional *`wordLength`* argument of type integer (but defaults to 12) which specifies the number of words in the mnemonic phrase to be generated.
```js
    //...
    const cypher = new Cypher()
    const { mnemonics } = cypher.genMnemonics()
    console.log("Mnemonics =>", mnemonics)
```
The above snippet generates a mnemonic phrase of 12 randomly selected words from the dictionary.

*Step 3:* Encrypt or decrypt data using the generated `mnemonic` phrase
```js
    //...
    const testObj = {name: "Efezino", age: 28}
    // Encrypt data
    const testEnc = cypher.encrypt(testObj, mnemonics)
    // decrypt hex string
    const testDec = cypher.decrypt(testEnc, mnemonics)
```

## Miscellaneous
The `Cypher` class instance exposes a couple of helper methods as listed below.

- `setWordLength(len)`:- This method accepts a single integer argument and sets the number of words to be generated in the mnemonic phrase. It is typically used before calling the `genMnemonics()` method.

- `secretFromPhrase(phrase)`:- Returns a string of the secret equivalent of the mnemonic phrase provided

- `phraseFromSecret(secret)`:- Returns a mnemonic phrase generated from the provided secret