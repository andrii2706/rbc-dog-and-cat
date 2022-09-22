import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HomeComponent} from "./home/component/home/home.component";
import { NotificationComponent } from './notification/notification/notification.component';
import {HttpClientModule} from "@angular/common/http";
import {MatDialogModule} from "@angular/material/dialog";
import { CardOfAnimalComponent } from './home/component/card-of-animal/card-of-animal.component';
import {NavigationComponent} from "./navigation/navigation.component";
import { AnimalsComponent } from './home/component/animals/animals.component';
import {FilterPipe} from "./pipe/filter.pipe";
import {MatCardModule} from "@angular/material/card";
import { AnimalComponent } from './home/component/animals/animal/animal.component';
import { AnimalsDetailsComponent } from './home/component/animals/animal/animals-details/animals-details.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {NgxPaginationModule} from "ngx-pagination";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    NotificationComponent,
    CardOfAnimalComponent,
    NavigationComponent,
    AnimalsComponent,
    FilterPipe,
    AnimalComponent,
    AnimalsDetailsComponent
  ],
  imports: [
    MatDialogModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatPaginatorModule,
    NgxPaginationModule,
  ],
    providers: [],

    bootstrap: [AppComponent]
})
export class AppModule { }
