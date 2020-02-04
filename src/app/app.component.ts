import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService, MusicService } from './_services';
import { User } from './_models';
import { Track } from './_models';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  currentUser: User;
  title = 'my-app2';

  constructor(
      private router: Router,
      private authenticationService: AuthenticationService,
      private getMusicService: MusicService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
