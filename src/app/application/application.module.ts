import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassComponent } from './class/class.component';
import { ListClassComponent } from './class/list-class/list-class.component';
import { AddClassComponent } from './class/add-class/add-class.component';
import { UpdateClassComponent } from './class/update-class/update-class.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
/*  declarations: [ClassComponent, ListClassComponent, AddClassComponent, UpdateClassComponent],
exports: [ClassComponent, ListClassComponent, AddClassComponent, UpdateClassComponent]*/
})
export class ApplicationModule { }
