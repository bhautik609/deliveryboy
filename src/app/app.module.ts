import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{MatInputModule}from '@angular/material/input';
import{HttpClientModule}from '@angular/common/http';
import{AppRoutingModule}from'./app-routing.module';
import { AppComponent } from './app.component';
import{ MatFormFieldModule}from '@angular/material/form-field';
import{FormsModule,ReactiveFormsModule}from'@angular/forms';
import { from } from 'rxjs';
import { MatTableModule } from "@angular/material/table";
import{MatCardModule}from '@angular/material/card';
import{MatIconModule}from '@angular/material/icon';
import{MatButtonModule}from '@angular/material/button';
import {BrowserAnimationsModule}from '@angular/platform-browser/animations';
import{MatRadioModule}from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import{MatAutocomplete, MatAutocompleteModule}from'@angular/material/autocomplete';
import{MatSelectModule}from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import{MatChipsModule}from '@angular/material/chips';
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSnackBarModule} from '@angular/material/snack-bar';


import { MatMenuModule } from '@angular/material/menu';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { EditorderComponent } from './editorder/editorder.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    DashbordComponent,
    EditorderComponent,
   
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    AppRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
   MatRadioModule,
   MatDatepickerModule,
   MatAutocompleteModule,
   MatSelectModule,
   MatToolbarModule,
   MatTabsModule,
   MatChipsModule,
   MatDialogModule,
   MatExpansionModule,
   MatSnackBarModule,
   HttpClientModule,
   MatCardModule,
   MatMenuModule,
   MatTableModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
