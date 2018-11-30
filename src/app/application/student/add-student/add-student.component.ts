import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Student } from 'app/Entity/student';
import { Sex } from 'app/Entity/sex';
import { HttpErrorResponse } from '@angular/common/http';
import { IdCardType } from 'app/Entity/idCardType';
import { Contact } from 'app/Entity/contact';
import { ContactType } from 'app/Entity/contactType';
import { Province } from 'app/Entity/province';
import { Township } from '../../../Entity/township';
import { RegistrationClass } from 'app/Entity/registrationClass';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {

  model = new Student();
  sexs: Array<Sex> =  [];
  idCardTypes: Array<IdCardType> = []
  contactType: Array<ContactType> = [];
  townships: Array<Township>;
  id = 0;
  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    const telephone = new Contact();
    const email = new Contact();
    this.model.person.contacts.push(telephone);
    this.model.person.contacts.push(email);

   this.dataService.get('pedagogy/student/new').subscribe((data: any) => {
      this.idCardTypes = data.idCardType
      this.sexs = data.sex;
      this.contactType = data.contacType;
      this.townships = data.township;
      telephone.contactTypeid = this.contactType.find(c => c.code === 'T').id;
      email.contactTypeid = this.contactType.find(c => c.code === 'E').id;
    },
    (err: HttpErrorResponse) => {
       // this.isLoginError = true;
    });
  }

  onSubmit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
   });
    this.dataService.post(this.model, 'pedagogy/student').subscribe((data: any) => {

  const registration: RegistrationClass = new RegistrationClass();
    registration.studentid = data.id;
    registration.academiClassid = this.id + '';
        this.dataService.post(registration, 'pedagogy/registrationclass').subscribe((m: any) => {
          this.router.navigate(['class/details/' + this.id]);
        }, (err: HttpErrorResponse) => {
          // this.isLoginError = true;
       });
    },
    (err: HttpErrorResponse) => {
       // this.isLoginError = true;
    });
  }

}
