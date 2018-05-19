import { AppRoutingModule } from './app.route';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TabsComponent } from './presentational-components/tabs/tabs.component';
import { HomeComponent } from './container-components/home/home.component';
import { CharactersComponent } from './container-components/characters/characters.component';
import { ContactComponent } from './container-components/contact/contact.component';
import { CharacterCardComponent } from './presentational-components/character-card/character-card.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    HomeComponent,
    CharactersComponent,
    ContactComponent,
    CharacterCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
