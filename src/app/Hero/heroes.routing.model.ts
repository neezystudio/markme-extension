import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NameListComponent } from '../name-list/name-list.component';
import { IconsDetailComponent } from './Icons-detail/Icons-detail.component';

const IconsRoutes: Routes = [
  { path: 'Icons', redirectTo: '/superIcons' },
  { path: 'Icons/:id', redirectTo: '/superIcons/:id' },
  { path: 'superIcons',  component: NameListComponent, data: { animation: 'names' } },
  { path: 'superIcons/:id', component: IconsDetailComponent, data: { animation: 'Icons' } }
];

@NgModule({
  imports: [
    RouterModule.forChild(IconsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class IconsRoutingModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/