import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateClientePage } from './update-cliente.page';

describe('UpdateClientePage', () => {
  let component: UpdateClientePage;
  let fixture: ComponentFixture<UpdateClientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateClientePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
