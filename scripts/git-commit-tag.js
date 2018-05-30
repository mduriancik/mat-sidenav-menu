const sgit = require('simple-git')('.');
var fs = require('fs');

const pkg = fs.readFileSync('./dist/mat-sidenav-menu/package.json', 'utf8');
const version = JSON.parse(pkg).version;


// TODO: add+commit package.json

sgit.addTag('v' + version, r => {
    console.log(r);
})
