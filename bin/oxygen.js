#!/usr/bin/env node

/**
 * Module dependencies
 */

var fs = require('fs');
var program = require('commander');

// options

program
  .version(require('../package.json').version)
  .usage('[options] command [args]')
  .option('-S, --sample <sample>', 'sample option')

program.on('--help', function(){
  console.log('  Help is comming!');
});

program.parse(process.argv);

// first non-option parameter trated as command
var command = program.args.shift()

// the rest are command parameters
var args = program.args;

var cmd = {
  command: command,
  args: args,
  sample: program.sample || ''
};

console.log(cmd);
