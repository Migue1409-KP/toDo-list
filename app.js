//requiere modules:
const { argv } = require('process');
const optionSelect = require('./taskFunction')

//execute the code and receive argument to options execute
let option = argv[2];
argv.splice(0,3);
optionSelect(option, argv);
