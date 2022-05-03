import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BackgroundComponent } from './components/background/background.component';
import { RicettaComponent } from './components/ricetta/ricetta.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './components/modal/modal.component';
import { LoaderComponent } from './components/loader/loader.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddRicettaComponent } from './components/add-ricetta/add-ricetta.component';
import { UpDateComponent } from './components/up-date/up-date.component';
import { DeleteComponent } from './components/delete/delete.component';
import { AppErrorHandler } from './common/app-error-handler';
import { ErrorModalComponent } from './components/error-modal/error-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BackgroundComponent,
    RicettaComponent,
    ModalComponent,
    LoaderComponent,
    AddRicettaComponent,
    UpDateComponent,
    DeleteComponent,
    ErrorModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{provide: ErrorHandler, useClass:AppErrorHandler}],
  bootstrap: [AppComponent]
})
export class AppModule { }
