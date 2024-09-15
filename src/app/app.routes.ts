import { Routes } from '@angular/router';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { OrderConfirmComponent } from './order-confirm/order-confirm.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'login', component: LoginComponent},
    {path:'register', component: RegisterComponent},
    {path:'detail-product/::id', component: DetailProductComponent},
    {path:'home', component: HomeComponent},
    {path:'order', component: OrderComponent},
    {path:'orderConfirm', component: OrderConfirmComponent}
];
