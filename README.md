# mat-sidenav-menu

side-nav menu component based on @angular/material.
It is integrated with the angular router.

    <md-sidenav-container style="height:100%">
        <md-sidenav #sidenav mode="over" opened="false">
            <side-nav-menu [sidenav]="sidenav">
            <side-nav-item route="page1" title="Page 1"></side-nav-item>
            <side-nav-item route="page2" title="Page 2"></side-nav-item>
            <side-nav-item route="page3" title="Page 3"></side-nav-item>
            </side-nav-menu>
        </md-sidenav>
    
    ...

    </md-sidenav-container>

1. add material icons font
2. npm install mat-sidenav-menu --save
3. add SideNavMenuModule import
4. define routes corresponding to menu items (side-nav-item.route attributes contain corresponding router paths)

The project repository contains a [demo application](https://github.com/mduriancik/mat-sidenav-menu/tree/master/src/app).