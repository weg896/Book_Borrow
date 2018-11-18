import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostASharePage } from './post-ashare.page';

describe('PostASharePage', () => {
  let component: PostASharePage;
  let fixture: ComponentFixture<PostASharePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostASharePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostASharePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
