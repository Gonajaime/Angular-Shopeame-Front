import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  id!: number;
  product!: any;
  constructor(private productsService: ProductsService, private activatedRoute: ActivatedRoute, private router: Router){ }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
    })
    this.productsService.getProduct(this.id).subscribe((data: any)=>{
      console.log(data);
      this.product = data;
      this.productsService.setProduct(data);

    })
  }
  deleteProduct() {
    this.productsService.deleteProduct(this.id).subscribe((data:any) => {
      this.router.navigate(['/'])
    })
  }


}
