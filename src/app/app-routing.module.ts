import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import the component to which you want to redirect.
import { ApodComponent } from './apod/apod.component';

const routes: Routes = [
  //redirect an empty route to a given path
  { path: '', redirectTo: '/apod', pathMatch: 'full'},
  //Define the path that will load a given component
  { path: 'apod', component: ApodComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
