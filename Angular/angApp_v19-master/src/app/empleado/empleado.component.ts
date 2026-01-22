import { Component } from '@angular/core';
import { Empleado } from './empleado';

import { Router } from '@angular/router';

@Component({
  selector: 'app-empleado',
  imports: [],
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
})
export class EmpleadoComponent {
  title : string = "Hola empleado";

  public empleado!: Empleado;
  public empleadoExt!: Empleado;
  public trabajadores : Array<Empleado> = [];
  public trabajadorExterno:boolean=true;

  constructor(
    private router: Router
  ){}

  ngOnInit(){
    this.empleado = new Empleado("Juan", 20, "Desarrollador", true);
    this.empleadoExt = new Empleado("Ana", 28, "Diseñadora", true);
    this.trabajadores = [new Empleado("Pepe", 30, "Sistemas", false)]
    this.trabajadores.push(this.empleado);
  }                                            

  cambiarExterno(valor:boolean){
    this.trabajadorExterno = valor;
  }

  navigateToHome(){
    this.router.navigateByUrl('/home');
  }

}
