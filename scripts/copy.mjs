import fsx from 'fs-extra';

fsx.copySync('./projects/mat-sidenav-menu/src/lib/mat-sidenav-menu-theme.scss', './dist/mat-sidenav-menu/mat-sidenav-menu-theme.scss');
fsx.copySync('./README.md', './dist/mat-sidenav-menu/README.md');

console.log('copying mat-sidenav-menu-theme.scss ...');
