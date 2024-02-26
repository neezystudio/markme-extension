import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PersonalInformationFormComponent } from './personal-information-form/personal-information-form.component';
import { ApolloModule } from 'apollo-angular';

@NgModule({
  declarations: [	
    AppComponent,
      PersonalInformationFormComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    ApolloModule
  ],
  providers: [],
  bootstrap: [PersonalInformationFormComponent]
})
export class AppModule { }
