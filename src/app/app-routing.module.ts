import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './services/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { NoteAddEditComponent } from './note-add-edit/note-add-edit.component';
import { NoteListComponent } from './note-list/note-list.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'note-list', component: NoteListComponent, canActivate: [AuthGuard] },
  { path: 'note-add-edit', component: NoteAddEditComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
