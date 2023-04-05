import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { TraitementComponent } from './traitement/traitement.component';
import { FirstComponent } from './first/first.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { DetailProductComponent } from './gestionproduit/detail-product/detail-product.component';
import { AddproductComponent } from './gestionproduit/addproduct/addproduct.component';

const r: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
 // {path:'',component:FirstComponent},
 {path:'add',component:AddproductComponent},
 {path:'detail/:id',component:DetailProductComponent},
  {path:'login',component:LoginComponent},
  {path:'test',component:TestComponent},
  {path:'tr',component:TraitementComponent},
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(r)],
exports: [RouterModule]
})
export class AppRoutingModule { }
