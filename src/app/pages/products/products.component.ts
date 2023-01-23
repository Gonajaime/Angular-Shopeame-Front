import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  productList: any [] = [];
  paintedProducts: any[] = [];
  constructor(private productsService: ProductsService){}
  ngOnInit(): void {
    this.productsService.getProducts().subscribe((data: any)=> {
      console.log(data);
      this.productList = [...data];
      this.paintedProducts = [...data];      
    })
  }

  filtrar(name: string){
    let filteredProducts = this.productList.filter((product) => product.name.toLowerCase().includes(name.toLowerCase()))
    this.paintedProducts = [...filteredProducts];
  }

  
}
