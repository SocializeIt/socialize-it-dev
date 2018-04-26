import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Authenticate, User } from '@socialise-it/data-models';
import { auth } from 'firebase';
import { AuthService } from '@socialise-it/auth';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  constructor(private router: Router, private authSrv: AuthService) {}

  ngOnInit() {}

  login(authenticate) {
    this.authSrv.login(authenticate).then(u => {
      this.router.navigate([`/user-profile/${u.id}`]);
    });
  }
}
