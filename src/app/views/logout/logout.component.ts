import { Component, OnInit } from '@angular/core';
import { AuthService } from 'angularx-social-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    sessionStorage.clear();
    this.authService.signOut()
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
    // this.router.navigate(['/login']);
  }

}
