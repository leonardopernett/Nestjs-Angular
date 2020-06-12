import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { Product } from '../interface/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  product:Product={
    name:'',
    description:'',
    price:null
  }
  imageUrl;
  editing:boolean=false;
  id;
  constructor(private  productsService:ProductService, private router:Router, private activeRoute: ActivatedRoute){

  }
  ngOnInit(): void {
   
     this.activeRoute.paramMap.subscribe(param=>{
       const id = param.get('id')
       this.productsService.getOneProduct(id).subscribe(
         res=>{
           this.product= res
           this.editing= true
           this.id=id
         },
         err=>console.log(err)
       )
     })
  }

  submitProduct(){
    const newProduct= {
      name: this.product.name,
      description:this.product.description,
      imageUrl: this.imageUrl,
      price:this.product.price
    }
    this.productsService.createProduct(newProduct).subscribe(
      res=>{
        console.log(res)
        this.router.navigate(['/products'])
      },
      err=>console.log(err)
    )
  }

  updateProduct(){
    const newProduct={
      name: this.product.name,
      description:this.product.description,
      imageUrl: this.imageUrl,
      price:this.product.price
    }
    delete this.product.createdAt;
   this.productsService.updatedProduct(this.id,newProduct).subscribe(
     res=>{
       console.log(res);
       this.router.navigate(['/products'])
       this.editing= false
     },
     err=>console.log(err)
   )
  }

  onchange(event){
     if(event.target.files && event.target.files.length >0 ){
         this.imageUrl= event.target.files[0]
     }
  }

}
