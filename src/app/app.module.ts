import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { UserInputsComponent } from './components/user-inputs/user-inputs.component';
import { MatricesComponent } from './components/matrices/matrices.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ImportFileComponent } from './components/import-file/import-file.component'
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    UserInputsComponent,
    MatricesComponent,
    ImportFileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
