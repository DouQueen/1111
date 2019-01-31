import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent }  from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { LoginComponent }  from  "./login/login.component"
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {
    path: 'dashboard',
    component: DashboardComponent,
    children:[
      {
        path: 'detail',
        component: HeroDetailComponent
      },
      {
        path: 'heroes',
        component: HeroesComponent
      },
    ]
  },

  { path: 'dashboard', component: DashboardComponent },
  // { path: 'detail', component: HeroDetailComponent },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
