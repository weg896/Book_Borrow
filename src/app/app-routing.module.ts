import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'userProfile', loadChildren: './user-profile/user-profile.module#UserProfilePageModule' },
  { path: 'createAccount', loadChildren: './create-account/create-account.module#CreateAccountPageModule' },
  { path: 'postAShare', loadChildren: './post-ashare/post-ashare.module#PostASharePageModule' },
  { path: 'createARequest', loadChildren: './create-arequest/create-arequest.module#CreateARequestPageModule' },
  { path: 'availableForBorrow', loadChildren: './available-for-borrow/available-for-borrow.module#AvailableForBorrowPageModule' },
  { path: 'aboutApp', loadChildren: './about-app/about-app.module#AboutAppPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
