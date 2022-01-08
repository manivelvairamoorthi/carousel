import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile/profile.component';
import { HomeComponent } from './home/home/home.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';

const routes: Routes = [
 
  { path: '', component: HomeComponent },
  { path: 'Gesture', component: ProfileComponent },
  { path: 'profile', component: ProfileDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
