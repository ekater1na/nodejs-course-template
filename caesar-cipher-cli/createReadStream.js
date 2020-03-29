const fs = require('fs');
// const caesarShift = require('./caesarShift');

const stream = new fs.ReadStream(__filename);

stream.on('readable', () => {
  const data = stream.read();
  console.log(data);
});

stream.on('end', () => {
  console.log('THE END');
});
