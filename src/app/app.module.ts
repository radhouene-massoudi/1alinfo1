import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { TraitementComponent } from './traitement/traitement.component';
import { TestComponent } from './test/test.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { DetailProductComponent } from './gestionproduit/detail-product/detail-product.component';
import { AddproductComponent } from './gestionproduit/addproduct/addproduct.component';
import { OffresEmploiComponent } from './offres-emploi/offres-emploi.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './gestionproduit/products/products.component';
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    TraitementComponent,
    TestComponent,
    NotfoundComponent,
    LoginComponent,
    DetailProductComponent,
    AddproductComponent,
    OffresEmploiComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
