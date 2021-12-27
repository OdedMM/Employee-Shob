import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="http://localhost:33237/api";
  
  constructor(private http:HttpClient) { }

  getRoleList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Role');
  }

  addRole(val:any){
    return this.http.post(this.APIUrl+'/Role',val);
  }

  updateRole(val:any){
    return this.http.put(this.APIUrl+'/Role',val);
  }

  deleteRole(val:any){
    return this.http.delete(this.APIUrl+'/Role/'+val);
  }


  getEmpList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Employee');
  }

  addEmployee(val:any){
    return this.http.post(this.APIUrl+'/Employee',val);
  }

  updateEmployee(val:any){
    return this.http.put(this.APIUrl+'/Employee',val);
  }

  deleteEmployee(val:any){
    return this.http.delete(this.APIUrl+'/Employee/'+val);
  }


  getEmpRoleList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Employeerole');
  }

  addEmpRole(val:any){
    return this.http.post(this.APIUrl+'/Employeerole',val);
  }

  updateEmpRole(val:any){
    return this.http.put(this.APIUrl+'/Employeerole',val);
  }


  getAttendance():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Attendance');
  }

  addAttendance(val:any){
    return this.http.post(this.APIUrl+'/Attendance',val);
  }

  updateAttendance(val:any){
    return this.http.put(this.APIUrl+'/Attendance',val);
  }
}
