import { Component, OnInit } from '@angular/core';

import { AppState } from '../app.service';
@Component({
  selector: 'auth-container',
  template: `     <div class="auth-container">
      <h1>Auth</h1>
    </div>
  `
})

export class AuthComponent implements OnInit {
  // Set our default values
  public localState = { value: '' };
  // TypeScript public modifiers
  constructor(
    public appState: AppState,
  ) {}

  public ngOnInit() {
    console.log('hello `Home` component');
    // this.title.getData().subscribe(data => this.data = data);
  }

  public submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }
}

