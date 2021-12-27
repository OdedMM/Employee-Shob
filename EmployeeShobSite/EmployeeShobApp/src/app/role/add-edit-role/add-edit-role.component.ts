import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-role',
  templateUrl: './add-edit-role.component.html',
  styleUrls: ['./add-edit-role.component.css']
})
export class AddEditRoleComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() role:any;
  RoleID:string="";
  RoleDescription:string="";

  ngOnInit(): void {
    this.RoleID=this.role.RoleID;
    this.RoleDescription=this.RoleDescription;
  }

  addRole(){
    var val = {RoleID:this.RoleID,
               RoleDescription:this.RoleDescription}
    this,this.service.addRole(val).subscribe(res =>{
      alert(res.toString());
    });
  }

  updateRole(){
    var val = {RoleID:this.RoleID,
               RoleDescription:this.RoleDescription}
    this,this.service.updateRole(val).subscribe(res =>{
      alert(res.toString());
    });
  }

}
