const { connect } = require('./client');

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function (data) {
  if (data === '\u0003') {
    console.log("thanks for playing, bye bye! \n");
    process.exit();
  }
};

console.log("Connecting ...");
setupInput();
connect();