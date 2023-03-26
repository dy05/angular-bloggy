import { Component } from '@angular/core';
import {AppComponent} from "../app.component";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  loading = false;
  showAnswer = false;
  error: string | null = null;
  answer: FormControl;
  loginForm: FormGroup;

  constructor(private router: Router) {
    this.answer = new FormControl('', [Validators.required, Validators.maxLength(6)])
    this.loginForm = new FormGroup({
      'password': this.answer
    })
  }

  showError(): boolean {
    return this.error != null
  }

  setError(error: string | null = null) {
    this.error = error
  }

  getCorrectAnswer() {
    return AppComponent.correctUser
  }

  validateFormExtra() {
    this.answer.setValue(this.getCorrectAnswer())
    this.validateForm()
  }

  validateForm() {
    this.setError()
    this.loading = true

    if (this.answer?.value == this.getCorrectAnswer()) {
      AppComponent.user = this.getCorrectAnswer()
      this.loading = false
      this.router.navigate(['/'])
    }

    this.loading = false
    this.setError("Matricule incorrect, le matricule est a present affiche a cote")
    if (!this.showAnswer) {
      this.showAnswer = true
    }
  }
}
