import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObtenerPage } from './obtener.page';

describe('ObtenerPage', () => {
  let component: ObtenerPage;
  let fixture: ComponentFixture<ObtenerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObtenerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObtenerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
