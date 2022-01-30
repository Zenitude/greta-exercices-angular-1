import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { InfouserComponent } from './infouser/infouser.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path: '', component: AccueilComponent },
  {path: 'users', component: UserComponent},
  {path: 'users/:id', component: InfouserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
