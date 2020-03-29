const { program } = require('commander');

program
  .requiredOption('-s, --shift <number>', 'a shift')
  .requiredOption('-a, --action [type],', 'an action encode/decode')
  .option('-i, --input <filename>', 'an input file')
  .option('-o, --output <filename>', 'an output file');

program.parse(process.argv);

console.log(program.shift);
console.log(program.action);
console.log(program.input);
console.log(program.output);
