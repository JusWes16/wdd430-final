import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountComponent } from './account/account.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { TrailDetailsComponent } from './trails/trail-details/trail-details.component';
import { TrailEditComponent } from './trails/trail-edit/trail-edit.component';
import { TrailsComponent } from './trails/trails.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'trails',
    component: TrailsComponent,
    children: [
      { path: 'new', component: TrailEditComponent },
      { path: ':id', component: TrailDetailsComponent },
      { path: ':id/edit', component: TrailEditComponent },
    ],
  },
  { path: 'reviews', component: ReviewsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'account', component: AccountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
