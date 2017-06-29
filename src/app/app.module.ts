import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AlertComponent } from './alert/alert.component';
import { HomeComponent } from './home/home.component';

import { routing }        from './app.routing';

import { AlertService } from './alert.service';
import { AuthGuard } from './auth.guard';
import { AuthenticationService } from './authentication.service';
import { UserService } from './user.service';
import { RegisterComponent } from './register/register.component';
import { PostComponent } from './post/post.component';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';
import { LandingComponent } from './landing/landing.component';
import { LandingEnComponent } from './landing-en/landing-en.component';
import { LandingTrComponent } from './landing-tr/landing-tr.component';
import { LandingBrComponent } from './landing-br/landing-br.component';
import { LandingIdComponent } from './landing-id/landing-id.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AlertComponent,
    HomeComponent,
    RegisterComponent,
    PostComponent,
    ImageUploaderComponent,
    LandingComponent,
    LandingEnComponent,
    LandingTrComponent,
    LandingBrComponent,
    LandingIdComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    AlertService,
    AuthGuard,
    AuthenticationService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
