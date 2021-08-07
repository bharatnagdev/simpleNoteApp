import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteAddEditComponent } from './note-add-edit/note-add-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './services/auth-guard.service';
import { CardHeaderComponent } from './card-header/card-header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NoteListComponent,
    NoteAddEditComponent,
    CardHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
