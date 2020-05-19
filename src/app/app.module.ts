import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorComponent } from './color/color.component';
import { FilsComponent } from './fils/fils.component';
import { CvComponent } from './cvTech/cv/cv.component';
import { ListeCvComponent } from './cvTech/liste-cv/liste-cv.component';
import { ItemCvComponent } from './cvTech/item-cv/item-cv.component';
import { DetailCvComponent } from './cvTech/detail-cv/detail-cv.component';
import { StyleComponent } from './directive/style/style.component';
import { ClassComponent } from './directive/class/class.component';
import { HighlightDirective } from './directive/highlight.directive';
import { DefaultImagePipe } from './cvTech/default-image.pipe';
import { HireComponent } from './cvTech/hire/hire.component';
import { ROUTING } from './routing';
import { HeaderComponent } from './layout/header/header.component';
import { DetailComponent } from './cvTech/detail/detail.component';
import { AddCVComponent } from './cvTech/add-cv/add-cv.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { ErrorComponent } from './cvTech/error/error.component';
import { HomeComponent } from './cvTech/home/home.component';
import { SearchComponent } from './cvTech/search/search.component';




@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    FilsComponent,
    CvComponent,
    ListeCvComponent,
    ItemCvComponent,
    DetailCvComponent,
    StyleComponent,
    ClassComponent,
    HighlightDirective,
    DefaultImagePipe,
    HireComponent,
    HeaderComponent,
    DetailComponent,
    AddCVComponent,
    ErrorComponent,
    HomeComponent,
    SearchComponent,

  ],
  imports: [
    BrowserModule,
     AppRoutingModule,
     FormsModule,
     ROUTING,
     HttpClientModule,

// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
HttpClientInMemoryWebApiModule.forRoot(
  InMemoryDataService, { dataEncapsulation: false }
)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
