import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoClientePage } from './novo-cliente.page';

describe('NovoClientePage', () => {
  let component: NovoClientePage;
  let fixture: ComponentFixture<NovoClientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoClientePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
