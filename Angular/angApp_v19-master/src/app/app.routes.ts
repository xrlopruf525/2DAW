import { Routes } from '@angular/router';
import { EmpleadoComponent } from './empleado/empleado.component';
import { HomeComponent } from './home/home.component';
import { AlumnoDAWComponent } from './alumno-daw/alumno-daw.component';

export const routes: Routes = [
    {path:'', redirectTo: '/home', pathMatch: 'full'},
    {path:'home', component: HomeComponent},
    {path:'empleado', component: EmpleadoComponent},
    {path:'alumno-daw', component: AlumnoDAWComponent},
    {path:'**', redirectTo: '/home', pathMatch: 'full'},
];
