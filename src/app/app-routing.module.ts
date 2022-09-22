import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/component/home/home.component";
import {AnimalsComponent} from "./home/component/animals/animals.component";
import {AnimalsDetailsComponent} from "./home/component/animals/animal/animals-details/animals-details.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'animals',
    component: AnimalsComponent
  },
  {
    path:'animals/:id',
    component:AnimalsDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
