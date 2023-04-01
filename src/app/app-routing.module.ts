import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestComponent } from './test/test.component';
import { TraitementComponent } from './traitement/traitement.component';
import { FirstComponent } from './first/first.component';

const r: Routes = [
  {path:'',component:FirstComponent},
  {path:'test',component:TestComponent},
  {path:'tr',component:TraitementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(r)],
exports: [RouterModule]
})
export class AppRoutingModule { }
