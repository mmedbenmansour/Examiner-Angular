import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationcodeComponent } from './verificationcode.component';

describe('VerificationcodeComponent', () => {
  let component: VerificationcodeComponent;
  let fixture: ComponentFixture<VerificationcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificationcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificationcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
