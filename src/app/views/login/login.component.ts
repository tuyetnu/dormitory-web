import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
  private user: SocialUser;
  private loggedIn: boolean;
  constructor(private authService: AuthService,
    private userService: UserService,
    private router: Router) { }
  signInWithGoogle(): void {
    if (this.user != null) {
      this.signOut();
    } this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  signOut(): void {
    this.authService.signOut();
  }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      if (this.loggedIn) {
        console.log(this.user);
        sessionStorage.setItem('photoUrl', user.photoUrl);
        const socialUser = {
          idToken: this.user.idToken,
          email: this.user.email
        };
        this.userService.login(socialUser)
          .subscribe(res => {
            console.log(res);
            sessionStorage.setItem('accessToken', res.accessToken);
            // check role to route
            this.router.navigate(['/dashboard']);
          });
      }
    });
  }
}
