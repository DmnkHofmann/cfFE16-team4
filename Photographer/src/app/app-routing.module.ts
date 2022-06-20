import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AwardsComponent } from './awards/awards.component';
import { ContactComponent } from './contact/contact.component';
import { CustomerComponent } from './customer/customer.component';
import { MainComponent } from './main/main.component';
import { ReviewsComponent } from './reviews/reviews.component';

const routes: Routes = [
  {
    path:"", component:MainComponent
  },
  {
    path:"about", component:AboutComponent
  },
  {
    path:"awards", component:AwardsComponent
  },
  {
    path:"contact", component:ContactComponent
  },
  {
    path:"customer", component:CustomerComponent
  },
  {
    path:"reviews", component:ReviewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
