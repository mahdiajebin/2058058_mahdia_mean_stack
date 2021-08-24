import { Injectable } from '@angular/core';
import { Quiz } from './quiz';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import  quizes  from  './quizQuestion.json';
//import quizzes from quiz json file 

@Injectable({
  providedIn: 'root'
})
export class QuizService {
//
allQuestion:Quiz[]= quizes








getQuizzes(){


 return this.allQuestion;

}







}
