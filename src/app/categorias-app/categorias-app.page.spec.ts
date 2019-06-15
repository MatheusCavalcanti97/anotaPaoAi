import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasAppPage } from './categorias-app.page';

describe('CategoriasAppPage', () => {
  let component: CategoriasAppPage;
  let fixture: ComponentFixture<CategoriasAppPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriasAppPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriasAppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
