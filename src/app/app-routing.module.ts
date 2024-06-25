import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationPageComponent } from './authentification-page/authentification-page.component';
import { ReinitialisationMDPComponent } from './reinitialisation-mdp/reinitialisation-mdp.component';


const routes: Routes = [
  {
    path:'',
    component: AuthentificationPageComponent 
  },
  {
    path:'reinitialisation-mdp',
    component: ReinitialisationMDPComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
