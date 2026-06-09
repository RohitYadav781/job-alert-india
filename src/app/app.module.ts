import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import {MatDividerModule   } from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SearchBarComponent } from './shared/components/search-bar/search-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { NoticeComponent } from './shared/components/notice/notice.component';
import { LatestJobsComponent } from './shared/components/latest-jobs/latest-jobs.component';
import { ResultDeclareComponent } from './shared/components/result-declare/result-declare.component';
import { AdmitCardComponent } from './shared/components/admit-card/admit-card.component';
import { DefenceComponent } from './shared/components/defence/defence.component';
import { RailwayComponent } from './shared/components/railway/railway.component';
import { AddJobComponent } from './pages/add-job/add-job.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchBarComponent,
    HomeComponent,
    NoticeComponent,
    LatestJobsComponent,
    ResultDeclareComponent,
    AdmitCardComponent,
    DefenceComponent,
    RailwayComponent,
    AddJobComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatInputModule,
    MatDividerModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
