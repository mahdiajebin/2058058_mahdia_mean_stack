import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import { Quiz } from '../quiz';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quizzes: Quiz[] = [];
  currentQuiz = 0;
  answerSelected = false;
  correctAnswers = 0;
  incorrectAnswers = 0;
  result = false;


  //randomize: number = 0;




  constructor(public qSer: QuizService) { }

  ngOnInit(): void {
    this.quizzes = this.qSer.getQuizzes();
   // this.randomize - Math.floor(Math.random() * this.quizzes.length);
  }


  onAnswer(correct: boolean) {
    this.answerSelected = true;

    if (correct) {
      this.correctAnswers++;
    } else {
      this.incorrectAnswers++;
    }
  }


  nextQuestion() {
    this.answerSelected = false;
    this.currentQuiz++;
  }

  showResult() {
    this.result = true;
  }


}
