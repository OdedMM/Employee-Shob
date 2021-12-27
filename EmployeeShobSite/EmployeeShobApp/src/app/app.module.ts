import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoleComponent } from './role/role.component';
import { ShowRoleComponent } from './role/show-role/show-role.component';
import { AddEditRoleComponent } from './role/add-edit-role/add-edit-role.component';
import { EmployeeComponent } from './employee/employee.component';
import { ShowEmpComponent } from './employee/show-emp/show-emp.component';
import { AddEditEmpComponent } from './employee/add-edit-emp/add-edit-emp.component';
import { EmployeeroleComponent } from './employeerole/employeerole.component';
import { ShowEmproleComponent } from './employeerole/show-emprole/show-emprole.component';
import { AddEditEmproleComponent } from './employeerole/add-edit-emprole/add-edit-emprole.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { ShowAttComponent } from './attendance/show-att/show-att.component';
import { AddEditAttComponent } from './attendance/add-edit-att/add-edit-att.component';

import { SharedService } from './shared.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RoleComponent,
    ShowRoleComponent,
    AddEditRoleComponent,
    EmployeeComponent,
    ShowEmpComponent,
    AddEditEmpComponent,
    EmployeeroleComponent,
    ShowEmproleComponent,
    AddEditEmproleComponent,
    AttendanceComponent,
    ShowAttComponent,
    AddEditAttComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
