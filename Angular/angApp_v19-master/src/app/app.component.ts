import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmpleadoComponent } from './empleado/empleado.component';
import { AlumnoDAWComponent } from './alumno-daw/alumno-daw.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,EmpleadoComponent, AlumnoDAWComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angApp_v19';
}
