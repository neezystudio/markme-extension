import { Routes } from "@angular/router";
import { NameListComponent } from "./app/name-list/name-list.component";
import { PersonalInformationFormComponent } from "./app/personal-information-form/personal-information-form.component";

export const appRoutes: Routes= [
    { path :'name-list', component:NameListComponent },
    {path : 'personal-information', component: PersonalInformationFormComponent}
  ]