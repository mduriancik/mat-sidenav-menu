// const fsx = require('fs-extra');
import fsx from 'fs-extra';

fsx.removeSync('dist');
console.log('cleaning ...');