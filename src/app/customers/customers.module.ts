import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersRoutingModule } from './customers-routing.module';
/* COMPONENTS */
import { HomeComponent } from './screens/home/home.component';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from "./components/footer/footer.component";
import { CustomersComponent } from "./customers.component";

@NgModule({
  declarations: [ 
    HomeComponent,
    NavbarComponent,
    CardComponent,
    FooterComponent,
    CustomersComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CustomersModule { }
