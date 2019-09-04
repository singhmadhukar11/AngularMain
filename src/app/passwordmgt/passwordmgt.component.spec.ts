import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordmgtComponent } from './passwordmgt.component';

describe('PasswordmgtComponent', () => {
  let component: PasswordmgtComponent;
  let fixture: ComponentFixture<PasswordmgtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordmgtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordmgtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
