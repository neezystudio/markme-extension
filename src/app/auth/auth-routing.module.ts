import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  {path: 'compose', component: ComposeMessageComponent, outlet: 'popup'}, {
    path: 'admin',
    loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule),
    canMatch: [authGuard]
  },
  {
    path: 'crisis-center',
    loadChildren: () =>
        import('./crisis-center/crisis-center.module').then(m => m.CrisisCenterModule),
    data: {preload: true}
  },
  {path: '', redirectTo: '/superheroes', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  providers: [
    provideRouter(appRoutes, withComponentInputBinding()),
  ]
})
export class AppRoutingModule {
}