import { ContactComponent } from './container-components/contact/contact.component';
import { CharactersComponent } from './container-components/characters/characters.component';
import { HomeComponent } from './container-components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'chars',
        component: CharactersComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'home'
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
