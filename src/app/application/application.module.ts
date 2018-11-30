import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassComponent } from './class/class.component';
import { ListClassComponent } from './class/list-class/list-class.component';
import { AddClassComponent } from './class/add-class/add-class.component';
import { UpdateClassComponent } from './class/update-class/update-class.component';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { ListStudentComponent } from './student/list-student/list-student.component';
import { DetailsStudentComponent } from './student/details-student/details-student.component';
import { UpdateStudentComponent } from './student/update-student/update-student.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [],
/*  declarations: [ClassComponent, ListClassComponent, AddClassComponent, UpdateClassComponent],
exports: [ClassComponent, ListClassComponent, AddClassComponent, UpdateClassComponent]*/
})
export class ApplicationModule { }
