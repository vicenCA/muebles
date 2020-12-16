import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers.component';
import { HomeComponent } from './screens/home/home.component';

const routes: Routes = [
  {
    path: '', component: CustomersComponent,
    children:[
      {
        path: 'home', component: HomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
