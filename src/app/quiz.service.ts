import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class QuizService {
  form: any[];
  questionList: any[];
  newScore: object;
  correct: number;
  username: string;
  constructor(private http: HttpClient, private router: Router) {}
  getQuestions(): Observable<any> {
    return this.http.get("http://localhost:8000/questions");
  }

  getScores(): Observable<any> {
    return this.http.get("http://localhost:8000/scores");
  }
  postScores(newScore: object): Observable<any> {
    console.log("Score was poster");
    return this.http.post("http://localhost:8000/scores", newScore);
  }
  calcScores(form: any, questionList: any[]): any {
    this.form = form;
    this.questionList = questionList;
    this.correct = 0;
    for (let i = 0; i < 10; i++) {
      if (form[i] === questionList[i].answer) {
        this.correct += 10;
      }
    }
    this.newScore = { username: form.username, score: this.correct };
    console.log(this.newScore);
    this.postScores(this.newScore).subscribe();
    this.router.navigateByUrl("/results");
  }
  showQuestions(): any[] {
    console.log(this.questionList);
    return this.questionList;
  }
  showAnswers(): any[] {
    console.log(this.form);
    return this.form;
  }
  getScoreUser(): object {
    return this.newScore;
  }
  //
}
