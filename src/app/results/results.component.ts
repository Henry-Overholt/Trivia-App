import { Component, OnInit } from "@angular/core";
import { QuizService } from "./../quiz.service";
// import { questionList } from "./../quiz/quiz.component";

@Component({
  selector: "app-results",
  templateUrl: "./results.component.html",
  styleUrls: ["./results.component.css"]
})
export class ResultsComponent implements OnInit {
  questionList: any[];
  answers: any[];
  user: object;
  constructor(private quizService: QuizService) {}

  ngOnInit() {
    (this.questionList = this.quizService.showQuestions()),
      (this.answers = this.quizService.showAnswers()),
      (this.user = this.quizService.getScoreUser());
  }
}
