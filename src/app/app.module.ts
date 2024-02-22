import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonalInformationFormComponent } from './personal-information-form/personal-information-form.component';

@NgModule({
  declarations: [	
    AppComponent,
      PersonalInformationFormComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
