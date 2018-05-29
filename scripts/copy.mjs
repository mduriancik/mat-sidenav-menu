import fsx from 'fs-extra';

fsx.copySync('./projects/mat-sidenav-menu/src/lib/mat-sidenav-menu-theme.scss', './dist/mat-sidenav-menu/mat-sidenav-menu-theme.scss');

console.log('copying mat-sidenav-menu-theme.scss ...');