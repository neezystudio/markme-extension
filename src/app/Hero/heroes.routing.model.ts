import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NameListComponent } from '../name-list/name-list.component';
import { IconsDetailComponent } from './Icons-detail/Icons-detail.component';

const IconsesRoutes: Routes = [
  { path: 'Iconses', redirectTo: '/superIconses' },
  { path: 'Icons/:id', redirectTo: '/superIcons/:id' },
  { path: 'superIconses',  component: NameListComponent, data: { animation: 'names' } },
  { path: 'superIcons/:id', component: IconsDetailComponent, data: { animation: 'Icons' } }
];

@NgModule({
  imports: [
    RouterModule.forChild(IconsesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class IconsesRoutingModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/