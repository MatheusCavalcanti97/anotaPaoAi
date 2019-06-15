import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDoProdutoPage } from './page-do-produto.page';

describe('PageDoProdutoPage', () => {
  let component: PageDoProdutoPage;
  let fixture: ComponentFixture<PageDoProdutoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDoProdutoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDoProdutoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
