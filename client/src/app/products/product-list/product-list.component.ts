import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../interface/product';
import {Router} from '@angular/router'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
   products:any=[];
  constructor(private productService: ProductService, private router:Router) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(){
    this.productService.getProduct().subscribe(
      res=>{
        this.products= res;
        console.log(this.products)
      },
      err=>console.log(err)
    )
  }


  deleteProduct(id:string){
    this.productService.deleteProduct(id).subscribe(
      res=>{
        console.log(res)
        this.router.navigate(['/products'])
        this.getProduct();
      },
      err=>console.log(err)
    )
  }

 

}
