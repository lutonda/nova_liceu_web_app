import { Grade } from './../../../Entity/grade';
import { Period } from './../../../Entity/period';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { DataService } from './../../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { AcademiClass } from 'app/Entity/acdemiClass';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Room } from 'app/Entity/room';
import { Subject } from 'app/Entity/subject';
import {MatStepperModule} from '@angular/material/stepper';
@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.scss']
})
export class AddClassComponent implements OnInit {
  model = new AcademiClass();
  toppings = new FormControl();

  subjects: Array<Subject> = [];
  rooms: Room[] = [];
  periods: Period[] = [];
  grades: Grade[] = []
  years: string[] = [];

  //
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  //
  constructor(private dataService: DataService, private _formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
      this.firstFormGroup = this._formBuilder.group({
        firstCtrl: ['', Validators.required]
      });
      this.secondFormGroup = this._formBuilder.group({
        secondCtrl: ['', Validators.required]
      });

   this.dataService.get('pedagogy/academiclass/new').subscribe((data: any) => {
      this.periods = data.periods;
      this.years = data.years
      this.grades = data.grades
      this.rooms = data.room;
      this.subjects = data.subjects;
    },
    (err: HttpErrorResponse) => {
       // this.isLoginError = true;
    });
  }

  onSubmit() {
    // this.model.period = this.periods.find(perio => perio.id === this.model.period)
    this.dataService.post(this.model, 'pedagogy/academiclass').subscribe((data: any) => {
      this.router.navigate(['class/list']);
    },
    (err: HttpErrorResponse) => {
       // this.isLoginError = true;
    });
  }
}
