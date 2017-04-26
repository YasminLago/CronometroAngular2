import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { AppComponent } from './app.component';
import { CronometroComponent } from './components/cronometro/cronometro.component';
import { RelojFactory } from './services/relojFactory';

@NgModule({
  declarations: [
    AppComponent,
    CronometroComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule, 
  ],
  providers: [RelojFactory],
  bootstrap: [AppComponent],
})

export class AppModule { }
