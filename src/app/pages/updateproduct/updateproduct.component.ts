import { ActivatedRoute, Router} from '@angular/router';
import { ProductsService } from './../../services/products.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.scss']
})
export class UpdateproductComponent {
  productForm!: FormGroup;
  id: number = this.productService.id;
  updatedProduct: any = this.productService.product;

  constructor(private formBuilder: FormBuilder, private productService: ProductsService, private router: Router){

  }
  ngOnInit(): void {

    this.productForm = this.formBuilder.group({
      name: [this.updatedProduct.name, [Validators.required, Validators.minLength(3)]],
      price: [this.updatedProduct.price, [Validators.required]],
      imgUrl: [this.updatedProduct.imgUrl, [Validators.required]],
      stars: [this.updatedProduct.starts, [Validators.required]]
    })

    this.productForm!.valueChanges.subscribe(changes => {
      this.updatedProduct = changes;
    })
  }
  onSubmit(){
    console.log(this.updatedProduct);
    this.productService.putProduct(this.updatedProduct, this.id).subscribe((data) =>{
      console.log(data);
      
    })
    this.productForm.reset();
    this.router.navigate([`/product/${this.id}`]);

  }
}
