import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router'; 
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { OrderConfirmComponent } from './order-confirm/order-confirm.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
    declarations: [		 
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        OrderComponent,
        OrderConfirmComponent,
        DetailProductComponent,
      LoginComponent,
      RegisterComponent
   ],
    imports: [ CommonModule, FormsModule,RouterLink ],
    exports: [        
        HeaderComponent,
        FooterComponent, 
    ],
    providers: [],
    bootstrap:[]
})
export class AppModule {}