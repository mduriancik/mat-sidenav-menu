import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavMenuComponent } from './menu';

describe('SideNavMenuComponent', () => {
  let component: SideNavMenuComponent;
  let fixture: ComponentFixture<SideNavMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
