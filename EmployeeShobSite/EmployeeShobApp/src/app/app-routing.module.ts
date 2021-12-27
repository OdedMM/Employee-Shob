import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {RoleComponent} from './role/role.component';
import {EmployeeComponent} from './employee/employee.component';
import {EmployeeroleComponent} from './employeerole/employeerole.component';
import {AttendanceComponent} from './attendance/attendance.component';


const routes: Routes = [
  {path:'role',component:RoleComponent},
  {path:'employee',component:EmployeeComponent},
  {path:'employeerole',component:EmployeeroleComponent},
  {path:'attendance',component:AttendanceComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
