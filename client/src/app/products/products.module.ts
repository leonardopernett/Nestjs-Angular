import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms'
import { NavbarComponent } from './navbar/navbar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductService } from './product.service';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [NavbarComponent, ProductListComponent, ProductFormComponent],
  imports: [
    CommonModule,HttpClientModule,FormsModule,AppRoutingModule
  ],
  providers:[ProductService],
  exports:[NavbarComponent,ProductListComponent,ProductFormComponent]
})
export class ProductsModule { }
