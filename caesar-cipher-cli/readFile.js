const fs = require('fs');
// First I want to read the file
fs.readFile('./hello.txt', (err, data) => {
  if (err) {
    throw err;
  }
  const content = data;

  // Invoke the next step here however you like
  console.log(content); // Put all of the code here (not the best solution)
  processFile(content); // Or put the next step in a function and invoke it
});

function processFile(content) {
  console.log(content);
}

// _____________
process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write(`data: ${chunk}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('end');
});
