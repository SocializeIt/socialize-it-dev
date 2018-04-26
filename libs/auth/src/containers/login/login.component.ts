import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-container',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {}

  login(authenticate: any) {
    this.auth.login(authenticate).then((u) => this.router.navigateByUrl(`/user-profile/${u['uid']}`)); //.then(u => console.log(u));
  }
}
