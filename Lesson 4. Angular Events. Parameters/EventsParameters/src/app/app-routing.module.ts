import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddEditCategoryComponent } from './add-edit-category/add-edit-category.component';
import { AddPurchaseComponent } from './add-purchase/add-purchase.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { HomeComponent } from './home/home.component';
import { PurchaseListComponent } from './purchase-list/purchase-list.component';

const routes: Routes = [
  {path: 'purchases', component: PurchaseListComponent},
  {path: 'purchases/add', component: AddPurchaseComponent},
  {path: 'categories', component: CategoryListComponent},
  {path: 'categories/add', component: AddCategoryComponent},
  {path: 'categories/edit/:id', component: EditCategoryComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
