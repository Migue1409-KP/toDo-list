//requiere modules:
const { argv } = require('process');
const optionSelect = require('./taskFunction')

//execute the code and receive argument to options execute
optionSelect(argv[2]);