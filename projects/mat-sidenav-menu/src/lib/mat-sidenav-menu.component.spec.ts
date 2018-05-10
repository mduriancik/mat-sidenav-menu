import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatSidenavMenuComponent } from './mat-sidenav-menu.component';

describe('MatSidenavMenuComponent', () => {
  let component: MatSidenavMenuComponent;
  let fixture: ComponentFixture<MatSidenavMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatSidenavMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatSidenavMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
