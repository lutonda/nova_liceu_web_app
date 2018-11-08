import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit {
  user: User;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

  constructor() { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form !== null) {
      form.reset();
    }
    this.user = {
      Username: '',
      Password: '',
      Email: '',
      FirstName: '',
      LastName: ''
    }
  }
/*
  OnSubmit(form: NgForm) {
    this.userService.registerUser(form.value)
      .subscribe((data: any) => {
        if (data.Succeeded === true) {
          this.resetForm(form);
          // this.toastr.success('User registration successful');
        } else {
          // this.toastr.error(data.Errors[0]);
        }
      });
  }
*/
}
