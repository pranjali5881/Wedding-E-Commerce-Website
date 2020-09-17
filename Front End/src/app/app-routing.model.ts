import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainScreenComponent} from './main-screen/main-screen.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { CartComponent } from './cart/cart.component';
import { ProdcategoryComponent } from './prodcategory/prodcategory.component';
import { MyorderComponent } from './myorder/myorder.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';

const appRoutes:Routes =
[
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    {path:'main',component:MainScreenComponent},
    {path:'product-detail/:id',component:ProductDetailsComponent},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegistrationComponent},
    {path:'mycart',component:CartComponent},
    {path:'procat/:id',component:ProdcategoryComponent},
    {path:'myorders/:id',component:MyorderComponent},
    {path:'aboutus',component:AboutusComponent},
    {path:'contactus',component:ContactusComponent}
    



];


@NgModule({
    imports : [RouterModule.forRoot(appRoutes)],
    exports :[RouterModule]
})

export class AppRoutingModule{

}
