import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'bloggy';
  static message: string | null = null
  static user: string | null = null
  static correctUser = "101711"

  hasMessage(): boolean {
    return AppComponent.message != null
  }

  getMessage(): string | null {
    return AppComponent.message
  }

  hasUser(): boolean {
    return AppComponent.user == AppComponent.correctUser
  }

  getUser(): string | null {
    return AppComponent.user
  }
}
