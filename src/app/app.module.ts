import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HealthComponent } from './HealthComponets/health/health.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DiabetesComponent } from './disease-cards/diabetes/diabetes.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatIconModule} from '@angular/material/icon';
import { HeartComponent } from './disease-cards/heart/heart.component';
import { ParkinsonComponent } from './disease-cards/parkinson/parkinson.component';
import { CovidComponent } from './disease-cards/covid/covid.component'
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { OnedisComponent } from './snackbar/onedis/onedis.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CallerbuttonComponent } from './callerbutton/callerbutton.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    HealthComponent,
    DiabetesComponent,
    HeartComponent,
    ParkinsonComponent,
    CovidComponent,
    OnedisComponent,
    CallerbuttonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatSnackBarModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
