import { UpdateproductComponent } from './pages/updateproduct/updateproduct.component';
import { NewproductComponent } from './pages/newproduct/newproduct.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductsComponent } from './pages/products/products.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
  path: '', component: ProductsComponent
},
{
  path: 'product/:id', component: ProductComponent
},
{
  path: 'newProduct', component: NewproductComponent
},
{
  path: 'updateProduct/:id', component: UpdateproductComponent
},
{
  path: 'home', component: HomeComponent
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
