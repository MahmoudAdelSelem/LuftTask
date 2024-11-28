import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OwnerListComponent } from './components/owner-list/owner-list.component';
import { OwnerFormComponent } from './components/owner-form/owner-form.component';


@NgModule({
  declarations: [
    AppComponent,    
    OwnerListComponent,
    OwnerFormComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
