# mat-sidenav-menu

side-nav menu component based on @angular/material.
It is integrated with the angular router.

## Breaking changes in 0.9.0

* scss import moved: '~mat-sidenav-menu/mat-sidenav-menu-theme.scss'
* module name changed: SideNavMenuModule -> MatSidenavMenuModule

## Usage

```html
<mat-sidenav-container style="height:100%">
    <mat-sidenav #sidenav mode="over" opened="false">
        <side-nav-menu title="Demo Menu" [sidenav]="sidenav">
            <side-nav-item route="/page1" title="Page 1" icon="home"></side-nav-item>
            <side-nav-item route="/page2" title="Page 2" [disabled]="true"></side-nav-item>
            <side-nav-item route="/page3" title="Page 3"></side-nav-item>
            <side-nav-group title="submenu 4">
            <side-nav-item route="/page/4.1" title="Page 4.1 xxxxx"></side-nav-item>
            <side-nav-item route="/page/4.2" title="Page 4.2"></side-nav-item>
            </side-nav-group>
            <side-nav-x-group title="submenu 5">
                <side-nav-item route="/page/5.1" title="Page 5.1"></side-nav-item>
                <side-nav-item route="/page/5.2" title="Page 5.2"></side-nav-item>
            </side-nav-x-group>
        </side-nav-menu>
    </mat-sidenav>
    
    ...

</mat-sidenav-container>
```

1. add material icons font
2. npm install mat-sidenav-menu --save
3. add MatSidenavMenuModule import
4. define routes corresponding to menu items (side-nav-item.route attributes contain corresponding router paths)
5. apply you theme to mat-sidenav-menu:

    styles.scss:

        $demo-app-theme: ...

        ....

        @import '~mat-sidenav-menu/mat-sidenav-menu-theme.scss';
        @include side-nav-menu-theme($demo-app-theme);


The project repository contains a [demo application](https://github.com/mduriancik/mat-sidenav-menu/tree/master/src/app).

__Features__

* disabled items
* items with icons
* item grouping (with or without title)
* expandable menu groups (side-nav-x-group)
* theaming support
