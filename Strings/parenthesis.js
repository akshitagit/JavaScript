function checkParenthesis(input = "") {
  var open = [];
  for (var i = 0; i < input.length; i++) {
    switch (input[i]) {
      case "]":
        if ("[" == open[open.length - 1]) {
          open.pop();
        }
      case "}":
        if ("{" == open[open.length - 1]) {
          open.pop();
        }
      case ")":
        if ("(" == open[open.length - 1]) {
          open.pop();
        }
        break;
      default:
        open.push(input[i]);
        break;
    }
  }
  if (open.length == 0) console.log("Yes");
  else console.log("No");
}

checkParenthesis("({}[])");
