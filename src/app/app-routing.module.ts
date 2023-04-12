import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { TraitementComponent } from './traitement/traitement.component';
import { FirstComponent } from './first/first.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { DetailProductComponent } from './gestionproduit/detail-product/detail-product.component';
import { AddproductComponent } from './gestionproduit/addproduct/addproduct.component';
import { OffresEmploiComponent } from './offres-emploi/offres-emploi.component';
import { ProductsComponent } from './gestionproduit/products/products.component';
import { RemoveproductComponent } from './gestionproduit/removeproduct/removeproduct.component';
import { UpdateproductComponent } from './gestionproduit/updateproduct/updateproduct.component';

const r: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
 // {path:'',component:FirstComponent},
 {path:'add',component:AddproductComponent},
 {path:'products',component:ProductsComponent},
 {path:'offre',component:OffresEmploiComponent},
 {path:'update/:id',component:UpdateproductComponent},
 {path:'remove/:id',component:RemoveproductComponent},
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
