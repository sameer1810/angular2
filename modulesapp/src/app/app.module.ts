import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './home';
import { ContactusComponent } from './home';
import { HomeComponent } from './home';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent},
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contactus', component: ContactusComponent }
];

@NgModule({
  declarations: [
    HomeComponent,
    AboutusComponent,
    ContactusComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
