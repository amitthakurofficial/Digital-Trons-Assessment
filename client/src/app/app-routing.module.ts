import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';

const routes: Routes = [ 
  { path : '' , redirectTo : 'slots', pathMatch : 'full'},
  { path : 'slots' , component : HomepageComponent , pathMatch : 'full'},
  { path : 'slots/:id' , component:UserDetailsComponent , pathMatch : 'full'},
  { path : 'user/:id' , component:UpdateUserComponent , pathMatch : 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
