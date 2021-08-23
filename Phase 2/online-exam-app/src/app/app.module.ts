import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizService } from './quiz.service';
import { BackgroundDirective } from './background.directive';
import { HeaderComponent } from './header/header.component';
import{ HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    BackgroundDirective,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [QuizService,HttpClientModule,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
