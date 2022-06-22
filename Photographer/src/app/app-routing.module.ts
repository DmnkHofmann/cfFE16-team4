import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AnimalPhotosComponent } from './animal-photos/animal-photos.component';
import { AwardsComponent } from './awards/awards.component';
import { CelebrityPhotosComponent } from './celebrity-photos/celebrity-photos.component';
import { ContactComponent } from './contact/contact.component';
import { CustomerComponent } from './customer/customer.component';
import { MainComponent } from './main/main.component';
import { ModelPhotosComponent } from './model-photos/model-photos.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { StreetPhotosComponent } from './street-photos/street-photos.component';
import { TravelPhotosComponent } from './travel-photos/travel-photos.component';

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
  },
  {
    path:"street", component:StreetPhotosComponent
  },
  {
    path:"animal", component:AnimalPhotosComponent
  },
  {
    path:"cele", component:CelebrityPhotosComponent
  },
  {
    path:"model", component:ModelPhotosComponent
  },
  {
    path:"travel", component:TravelPhotosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
