import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDoClientePage } from './page-do-cliente.page';

describe('PageDoClientePage', () => {
  let component: PageDoClientePage;
  let fixture: ComponentFixture<PageDoClientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDoClientePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDoClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
