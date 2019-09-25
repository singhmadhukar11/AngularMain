import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpchildComponent } from './helpchild.component';

describe('HelpchildComponent', () => {
  let component: HelpchildComponent;
  let fixture: ComponentFixture<HelpchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
