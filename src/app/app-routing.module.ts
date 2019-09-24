import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './components/global/home/home.component';
import {SizeComponent} from './components/steps/size/size.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { IntensityComponent } from './intensity/intensity.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { ToppingsComponent } from './toppings/toppings.component';
import { OrderComponent } from './order/order.component';


const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'taille', component: SizeComponent},
    {path: 'categorie', component: ProductCategoryComponent},
    {path: 'produit', component: ProductItemComponent},
    {path: 'intensite', component: IntensityComponent},
    {path: 'ingredients', component: IngredientsComponent},
    {path: 'nappage', component: ToppingsComponent},
    {path: 'commande', component: OrderComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
