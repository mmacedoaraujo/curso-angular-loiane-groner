import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoDeDetalheComponent } from './curso-de-detalhe.component';

describe('CursoDeDetalheComponent', () => {
  let component: CursoDeDetalheComponent;
  let fixture: ComponentFixture<CursoDeDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoDeDetalheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursoDeDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
