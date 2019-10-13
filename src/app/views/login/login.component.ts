import { Component } from '@angular/core';
import { AuthService } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent { 
  private user: SocialUser;
  private loggedIn: boolean;
 
  constructor(private authService: AuthService ) { }
 
  signInWithGoogle(): void {
    if (this.user != null) {
      this.signOut();
    }
    
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
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
      }
    });
  }
}
