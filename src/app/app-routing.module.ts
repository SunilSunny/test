import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: 'contact',
    loadChildren: 'app/contact/contact.module#ContactModule'
  },
  {
    path: 'about',
    loadChildren: 'app/about/about.module#AboutModule'
  },
  {
    path: '',
    redirectTo: '/about',
    pathMatch: 'full'
  }
];

@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports : [RouterModule]
})
export class AppRoutingModule { }
