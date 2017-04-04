/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  template: `
  <div class="page-content-inner" style="background-image: url(../assets/img/temp/login/4.jpg)">

    <!-- Login Omega Page -->
    <div class="single-page-block-header">
      <div class="row">
        <div class="col-lg-4">
          <div class="logo">
            <a href="javascript: history.back();">
              <img src="../assets/img/logo.png" alt="Clean UI Admin Template" />
            </a>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="single-page-block-header-menu">
            <ul class="list-unstyled list-inline">
              <li><a href="javascript: history.back();">&larr; Back</a></li>
              <li class="active"><a href="javascript: void(0);">Login</a></li>
              <li><a href="javascript: void(0);">About</a></li>
              <li><a href="javascript: void(0);">Support</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <main>
      <router-outlet></router-outlet>
    </main>
    </div>
  `
})
export class AppComponent implements OnInit {
  public angularclassLogo = 'assets/img/angularclass-avatar.png';
  public name = 'Angular 2 Webpack Starter';
  public url = 'https://twitter.com/AngularClass';

  constructor(
    public appState: AppState
  ) {}

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
