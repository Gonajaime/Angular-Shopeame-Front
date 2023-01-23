import { Router } from '@angular/router';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.scss']
})
export class NewproductComponent implements OnInit{
  productForm!: FormGroup;
  newProduct: any = {
    name: '',
      price: '',
      imgUrl: '',
      stars:0
  }
  constructor(private formBuilder: FormBuilder, private productsService: ProductsService, private router: Router){}
  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', [Validators.required]],
      imgUrl: ['', [Validators.required]],
      stars: [0, [Validators.required]]
    })

    this.productForm.valueChanges.subscribe(changes => {
      this.newProduct = changes;
    })
  }
  onSubmit(){
    this.productsService.postProduct(this.newProduct).subscribe((data) =>{
      console.log(data);
      
    })
    this.productForm.reset();
    this.router.navigate([`/`]);

  }


}
