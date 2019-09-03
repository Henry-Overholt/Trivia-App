import { Component, OnInit } from "@angular/core";
import { QuizService } from "./../quiz.service";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-quiz",
  templateUrl: "./quiz.component.html",
  styleUrls: ["./quiz.component.css"]
})
export class QuizComponent implements OnInit {
  questionList: any[];
  show: boolean = false;

  constructor(private quizService: QuizService) {}

  ngOnInit() {
    this.quizService.getQuestions().subscribe(response => {
      this.questionList = response;
    });
  }
  showForm(): void {
    this.show = !this.show;
  }
  handleQuestions(questionForm: NgForm): void {
    this.quizService.calcScores(questionForm.value, this.questionList);
    this.show = !this.show;
  }
}
