import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductFormComponent } from './products/product-form/product-form.component';


const routes: Routes = [
  {path:'', redirectTo:'/products', pathMatch:'full'},
  {path:'products', component:ProductListComponent},
  {path:'products/create', component:ProductFormComponent},
  {path:'products/edit/:id', component:ProductFormComponent},
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
