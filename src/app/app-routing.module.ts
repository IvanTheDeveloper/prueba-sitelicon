import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DetailedFugitiveComponent } from './components/detailed-fugitive/detailed-fugitive.component';

const routes: Routes = [
  { path: "", redirectTo: "/fugitives", pathMatch: "full" },
  { path: "fugitives", component: HomeComponent },
  { path: "fugitives/:id", component: DetailedFugitiveComponent },
  { path: "about", component: AboutComponent },
  { path: "**", redirectTo: "/fugitives" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
