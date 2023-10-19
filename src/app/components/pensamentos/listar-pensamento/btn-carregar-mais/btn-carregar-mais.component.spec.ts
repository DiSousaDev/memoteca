import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnCarregarMaisComponent } from './btn-carregar-mais.component';

describe('BtnCarregarMaisComponent', () => {
  let component: BtnCarregarMaisComponent;
  let fixture: ComponentFixture<BtnCarregarMaisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnCarregarMaisComponent]
    });
    fixture = TestBed.createComponent(BtnCarregarMaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
