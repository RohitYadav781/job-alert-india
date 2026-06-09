import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddJobComponent } from './pages/add-job/add-job.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add-job', component: AddJobComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
