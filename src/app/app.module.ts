import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { appRoutes} from '../app.routes'

import { AppComponent } from './app.component';
import { PersonalInformationFormComponent } from './personal-information-form/personal-information-form.component';
import { ApolloModule } from 'apollo-angular';
import {provideRouter, RouterModule, Routes} from '@angular/router';
import { NameListComponent } from './name-list/name-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [	
    AppComponent,
      PersonalInformationFormComponent,
      NameListComponent,
      PageNotFoundComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    ApolloModule,
    RouterModule.forRoot(appRoutes, {
      initialNavigation: 'enabledNonBlocking',
      onSameUrlNavigation: 'reload',
      enableTracing: true,
    }),
  ],
  providers: [
    //add the provider router line here
    provideRouter(appRoutes)
  ],
  bootstrap: [PersonalInformationFormComponent]
})
export class AppModule { }
