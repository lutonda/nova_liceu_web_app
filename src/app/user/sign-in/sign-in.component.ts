import { UserService } from './../../services/user.service';
import { User } from './../user.model';
// import { UserService } from './../../shared/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit, Optional } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  providers: [ UserService ]
})
export class SignInComponent implements OnInit {
  isLoginError = false;
  // userService = UserService;
  constructor(
    private userService: UserService, private router: Router) {}

  ngOnInit() {
  }

  OnSubmit(userName, password) {
     this.userService.userAuthentication(userName, password).subscribe((data: any) => {
      this.userService.storeAuth(data);
      this.router.navigate(['/dashboard']);
    },
    (err: HttpErrorResponse) => {
       this.isLoginError = true;
    });
  }
}

