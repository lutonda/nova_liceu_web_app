import { HttpErrorResponse } from '@angular/common/http';
import { AcademiClass } from './../../../Entity/acdemiClass';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/services/data.service';

@Component({
  selector: 'app-list-class',
  templateUrl: './list-class.component.html',
  styleUrls: ['./list-class.component.scss']
})
export class ListClassComponent implements OnInit {
  isLoading = true;
  classes = Array<AcademiClass>()
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.dataService.get('pedagogy/academiclass').subscribe((data: any) => {
      this.classes = data;
      // this.isLoading = false;
    },
    (err: HttpErrorResponse) => {
       // this.isLoginError = true;
       // this.isLoading = false;
    });
  }

}
