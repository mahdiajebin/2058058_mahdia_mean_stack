import { Injectable } from '@angular/core';
import { Quiz } from './quiz';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import quizzes from quiz json file 

@Injectable({
  providedIn: 'root'
})
export class QuizService {
//
//allQuestion:Quiz[]= quizes
allQuestion:Quiz[]=
 [
   {
  question:'whats the first letter of z',
  answer:[
    {option:'v',correct:false},
    {option:'a', correct:true},
    {option:'c', correct:false},
    {option:'e', correct:false}
  ]
},
{
  question:'whats the first letter of act',
  answer:[
    {option:'v',correct:false},
    {option:'a', correct:true},
    {option:'c', correct:false},
    {option:'e', correct:false}
  ]
},
{
  question:'whats the first letter of g',
  answer:[
    {option:'v',correct:false},
    {option:'a', correct:true},
    {option:'c', correct:false},
    {option:'e', correct:false}
  ]
},
{
  question:'whats the first letter of f',
  answer:[
    {option:'v',correct:false},
    {option:'a', correct:true},
    {option:'c', correct:false},
    {option:'e', correct:false}
  ]
}
]



// quizzes : Quiz[] = [];


//   constructor(public http:HttpClient) { }

// checkQuection():Observable<Quiz[]>{
//   return this.http.get<Quiz[]>("/quizQuestion.json");
// }


getQuizzes(){


 return this.allQuestion;

}







}
