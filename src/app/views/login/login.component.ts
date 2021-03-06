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
  loading = false;
  constructor(private authService: AuthService,
    private userService: UserService,
    private router: Router) { }
  signInWithGoogle(): void {
    if (this.user != null) {
      this.authService.signOut();
    }
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then(userData => {
        this.user = userData;
        if (this.user != null) {
          sessionStorage.setItem('photoUrl', userData.photoUrl);
          const socialUser = {
            idToken: this.user.idToken,
            email: this.user.email
          };
          this.loading = true;
          this.userService.login(socialUser)
            .subscribe(res => {
              console.log(res);
              sessionStorage.setItem('accessToken', res.accessToken);
              sessionStorage.setItem('accountID', res.id + '');
              sessionStorage.setItem('role', res.role);
              this.loading = false;
              if (res.role === 'Admin') {
                this.router.navigate(['/dashboard']);
              } else {
                this.router.navigate(['/approved-request']);
              }
            });
        }
      });
  }

  ngOnInit() {
    const accessToken = sessionStorage.getItem('accessToken');
    if (accessToken != null) {
      this.router.navigate(['/dashboard']);
    }
  }
}
