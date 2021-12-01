let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = function (data) {
    if (data === '\u0003') {
      console.log("thanks for playing, bye bye! \n");
      process.exit();
    } else if (data === 'w') {
      conn.write("Move: up");
    } else if (data === 'a') {
      conn.write("Move: left");
    } else if (data === 's') {
      conn.write("Move: down");
    } else if (data === 'd') {
      conn.write("Move: right");
    } else if (data === 'u') {
      conn.write("Say: uwuwuwuwu");
    }

    // const quit = () => {
    //   console.log("thanks for playing, bye bye! \n");
    //   process.exit();
    // };
    // const MOVE_UP_KEY = conn.write("Move: up"); // need to make these functions for them to work
    // const MOVE_LEFT_KEY = conn.write("Move: up");
    // const MOVE_DOWN_KEY = conn.write("Move: up");
    // const MOVE_RIGHT_KEY = conn.write("Move: up");
    // const SPEAK_KEY = conn.write("Say: uwuwuwuwu");
    
    // const keyCommands = {
    //   '\u0003': quit,
    //   'w': MOVE_UP_KEY,
    //   'a': MOVE_LEFT_KEY,
    //   's': MOVE_DOWN_KEY,
    //   'd': MOVE_RIGHT_KEY,
    //   'u': SPEAK_KEY
    // };

    // for (key in keyCommands) {
    //   if (data === key) {
    //     keyCommands[key];
    //   }
    // }
  };

  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = {
  setupInput
};