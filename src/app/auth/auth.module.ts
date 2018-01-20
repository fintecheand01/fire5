import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { SignInComponent } from './components/sign-in';
import { FormsModule } from '@angular/forms';

// modules
import { AuthRoutesModule } from './auth.routes';

// services
import { RequireAuthGuard, RequireUnauthGuard, AdminGuard, EditorGuard } from './guards';
import { AuthService } from './auth.service';



@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    AuthRoutesModule,
    FormsModule
  ],
  providers: [
    AuthService,
    RequireAuthGuard,
    RequireUnauthGuard,
    AdminGuard,
    EditorGuard
  ]
})
export class AuthModule { }
