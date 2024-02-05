import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeDetallesComponent } from './poke-detalles.component';

describe('PokeDetallesComponent', () => {
  let component: PokeDetallesComponent;
  let fixture: ComponentFixture<PokeDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokeDetallesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokeDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
