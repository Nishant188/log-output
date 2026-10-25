const { randomUUID } = require('node:crypto');

const id = randomUUID();

function logOutput() {
  console.log(`${new Date().toISOString()}: ${id}`);
}

logOutput();
setInterval(logOutput, 5000);
