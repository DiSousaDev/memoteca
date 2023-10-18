import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PensamentoComponentComponent } from './pensamento-component.component';

describe('PensamentoComponentComponent', () => {
  let component: PensamentoComponentComponent;
  let fixture: ComponentFixture<PensamentoComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PensamentoComponentComponent]
    });
    fixture = TestBed.createComponent(PensamentoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
