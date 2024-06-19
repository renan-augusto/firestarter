import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }





// import { NgModule } from '@angularcore';
// import { Routes, RouterModule } from '@angularrouter';
// import { HomePageComponent } from '.home-pagehome-page.component';


// const routes Routes = [
//   { path '', component HomePageComponent }
// ];

// @NgModule({
//   imports [RouterModule.forRoot(routes)],
//   exports [RouterModule]
// })
// export class AppRoutingModule { }
