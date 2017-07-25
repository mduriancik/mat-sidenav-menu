# mat-sidenav-menu

side-nav menu component based on @angular/material

    <md-sidenav-container style="height:100%">
    <md-sidenav #sidenav mode="over" opened="false">
        <side-nav-menu [sidenav]="sidenav">
        <side-nav-item route="page1" title="Page 1"></side-nav-item>
        <side-nav-item route="page2"   title="Page 2"></side-nav-item>
        <side-nav-item route="page3"  title="Page 3"></side-nav-item>
        </side-nav-menu>
    </md-sidenav>
    
    ...

    </md-sidenav-container>

1. add material icons fonts
2. npm install mat-sidenav-menu --save
3. add SideNavMenuModule