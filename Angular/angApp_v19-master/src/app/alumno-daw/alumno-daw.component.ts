import { Component } from '@angular/core';
import { AlumnoDAW, Modulo } from './alumnoDaw';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alumno-daw',
  imports: [],
  templateUrl: './alumno-daw.component.html',
  styleUrl: './alumno-daw.component.css'
})
export class AlumnoDAWComponent {

  title: string = 'Hola alumnado DAW';

  public alumno!: AlumnoDAW;
  public alumnado: Array<AlumnoDAW> = [];
  public primerCurso: boolean = true;

  constructor(
    private router: Router
  ) {}

  navigateToHome(){
    this.router.navigateByUrl('/home');
  }
  
  ngOnInit() {

    this.alumno = new AlumnoDAW(
      'Juan',
      'Pérez',
      '12345678A',
      new Date(2004, 5, 10),
      'Sevilla',
      600111222,
      '1º DAW',
      [
        new Modulo('Programación'),
        new Modulo('Bases de Datos')
      ]
    );

    this.alumnado = [
      new AlumnoDAW(
        'Pepe',
        'López',
        '11223344C',
        new Date(2004, 2, 15),
        'Huelva',
        622444555,
        '1º DAW',
        [new Modulo('Lenguajes de Marcas')]
      ),
      new AlumnoDAW(
        'Laura',
        'Gómez',
        '22334455D',
        new Date(2004, 7, 20),
        'Cádiz',
        611222333,
        '1º DAW',
        [new Modulo('Sistemas Informáticos')]
      ),
      new AlumnoDAW(
        'Carlos',
        'Martín',
        '33445566E',
        new Date(2003, 10, 5),
        'Málaga',
        633444555,
        '2º DAW',
        [new Modulo('DWEC'), new Modulo('DWES')]
      )
    ];


    this.alumnado.push(this.alumno);
  }

  cambiarCurso(valor: boolean) {
    this.primerCurso = valor;
  }
}
