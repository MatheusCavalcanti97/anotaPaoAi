import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDaCategoriaProdutoPage } from './page-da-categoria-produto.page';

describe('PageDaCategoriaProdutoPage', () => {
  let component: PageDaCategoriaProdutoPage;
  let fixture: ComponentFixture<PageDaCategoriaProdutoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDaCategoriaProdutoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDaCategoriaProdutoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
