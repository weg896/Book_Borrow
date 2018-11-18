import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateARequestPage } from './create-arequest.page';

describe('CreateARequestPage', () => {
  let component: CreateARequestPage;
  let fixture: ComponentFixture<CreateARequestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateARequestPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateARequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
