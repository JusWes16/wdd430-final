import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TrailsComponent } from './trails/trails.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AccountComponent } from './account/account.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { TrailEditComponent } from './trails/trail-edit/trail-edit.component';
import { TrailDetailsComponent } from './trails/trail-details/trail-details.component';
import { TrailListComponent } from './trails/trail-list/trail-list.component';
import { TrailItemComponent } from './trails/trail-item/trail-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TrailsComponent,
    ReviewsComponent,
    GalleryComponent,
    AccountComponent,
    HomeComponent,
    FooterComponent,
    TrailEditComponent,
    TrailDetailsComponent,
    TrailListComponent,
    TrailItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
