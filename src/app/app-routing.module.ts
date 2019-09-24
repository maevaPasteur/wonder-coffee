import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './components/global/home/home.component';
import {SizeComponent} from './components/steps/size/size.component';


const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'taille', component: SizeComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
