import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { QuizService } from "./quiz.service";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { QuizComponent } from "./quiz/quiz.component";
import { ResultsComponent } from "./results/results.component";
import { ScoresComponent } from "./scores/scores.component";
import { HttpClientModule } from "@angular/common/http";

const appRoutes: Routes = [
  { path: "quiz", component: QuizComponent },
  { path: "results", component: ResultsComponent },
  { path: "Scores", component: ScoresComponent },
  { path: "", redirectTo: "/quiz", pathMatch: "full" },
  { path: "**", component: QuizComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    ResultsComponent,
    ScoresComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [QuizService],
  bootstrap: [AppComponent]
})
export class AppModule {}
