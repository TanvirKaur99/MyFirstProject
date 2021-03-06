import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SliderAreaComponent } from './slider-area/slider-area.component';
import { TeamProfileComponent } from './team-profile/team-profile.component';
import { TrustedAreaComponent } from './trusted-area/trusted-area.component';
import { RecentAreaComponent } from './recent-area/recent-area.component';
import { RequestBackComponent } from './request-back/request-back.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { QuestionsComponent } from './questions/questions.component';
import { ContactComponent } from './contact/contact.component';
import { HelpComponent } from './help/help.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AnswersComponent } from './answers/answers.component';
import { AddQuestionComponent } from './add-question/add-question.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import{FormsModule} from '@angular/forms';
//material modules
import{MaterialModule} from './material.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SliderAreaComponent,
    TeamProfileComponent,
    TrustedAreaComponent,
    RecentAreaComponent,
    RequestBackComponent,
    LandingpageComponent,
    LoginComponent,
    RegisterComponent,
    QuestionsComponent,
    ContactComponent,
    HelpComponent,
    UserProfileComponent,
    AnswersComponent,
    AddQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
