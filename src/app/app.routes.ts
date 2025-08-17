import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HospitalListComponent } from './components/hospital-list/hospital-list.component';
import { PatientListComponent } from './components/patient-list/patient-list.component';

export const routes: Routes = [
    { path:'' , redirectTo:'home' , pathMatch: 'full'},
    { path: 'home' , component: HomeComponent },
    { path: 'appointment' , component: AppointmentListComponent},
    { path: 'dashboard' , component: DashboardComponent},
    { path: 'hospital' , component: HospitalListComponent},
    { path: 'patient' , component: PatientListComponent}
];
