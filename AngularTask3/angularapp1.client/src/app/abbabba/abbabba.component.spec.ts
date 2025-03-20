import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbbabbaComponent } from './abbabba.component';

describe('AbbabbaComponent', () => {
  let component: AbbabbaComponent;
  let fixture: ComponentFixture<AbbabbaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AbbabbaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbbabbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
