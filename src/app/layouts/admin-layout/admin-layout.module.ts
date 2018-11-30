import { UpdateStudentComponent } from './../../application/student/update-student/update-student.component';
import { ListStudentComponent } from './../../application/student/list-student/list-student.component';
import { UpdateClassComponent } from './../../application/class/update-class/update-class.component';
import { ListClassComponent } from './../../application/class/list-class/list-class.component';
import { ClassComponent } from './../../application/class/class.component';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import {
  MatButtonModule,
  MatInputModule,
  MatDatepickerModule,
  MatDividerModule,
  MatRippleModule,
  MatTooltipModule,
  MatSelectModule,
  MatNativeDateModule,
  MatAutocompleteModule,
  MatTabsModule,
} from '@angular/material';
import { AddClassComponent } from 'app/application/class/add-class/add-class.component';
import { DetailsClassComponent } from 'app/application/class/details-class/details-class.component';
import { AddStudentComponent } from '../../application/student/add-student/add-student.component';
import { DetailsStudentComponent } from '../../application/student/details-student/details-student.component';
import { MatStepperModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatInputModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatTooltipModule,
    MatSelectModule,
    MatStepperModule,
    MatTabsModule,

    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    ClassComponent, ListClassComponent, AddClassComponent, UpdateClassComponent, DetailsClassComponent,
    AddStudentComponent, ListStudentComponent, DetailsStudentComponent, UpdateStudentComponent
  ]
})

export class AdminLayoutModule {}
