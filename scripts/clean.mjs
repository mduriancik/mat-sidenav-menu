// const fsx = require('fs-extra');
import fsx from 'fs-extra';

fsx.removeSync('dist');
console.log('cleaning ...');
fsx.mkdirSync('dist');
fsx.mkdirSync('dist/mat-sidenav-menu');
console.log('./dist/mat-sidenav-menu created ...');
