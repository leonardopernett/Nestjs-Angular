import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Product } from './interface/product';
import {environment} from '../../environments/environment'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
   API = environment.URL;

  constructor(private readonly http:HttpClient) { }

   getProduct():Observable<Product>{
     return this.http.get<Product>(`${this.API}/products`)
   }

   getOneProduct(id:String):Observable<Product>{
    return this.http.get<Product>(`${this.API}/products/${id}`)
   }

   deleteProduct(id:string):Observable<Product>{
    return this.http.delete<Product>(`${this.API}/products/delete?productID=${id}`)
   }

   createProduct(product:Product):Observable<Product>{
     const formdata = new FormData();
     formdata.append('name', product.name);
     formdata.append('description', product.description);
     formdata.append('image', product.imageUrl);
     formdata.append('price', product.price);
    return this.http.post<Product>(`${this.API}/products/create`,formdata)
   }

   updatedProduct(id:string, product:Product):Observable<Product>{
     const formdata = new FormData();
     formdata.append('name', product.name);
     formdata.append('description', product.description);
     formdata.append('image', product.imageUrl);
     formdata.append('price', product.price);
    return  this.http.put<Product>(`${this.API}/products/${id}/edit`, formdata)
   }
}
