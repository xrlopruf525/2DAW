import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoDAWComponent } from './alumno-daw.component';

describe('AlumnoDAWComponent', () => {
  let component: AlumnoDAWComponent;
  let fixture: ComponentFixture<AlumnoDAWComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlumnoDAWComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnoDAWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
