import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-role',
  templateUrl: './show-role.component.html',
  styleUrls: ['./show-role.component.css']
})
export class ShowRoleComponent implements OnInit {

  constructor(private service:SharedService) { }

  RolesList:any=[];

  ModalTitle:string="";
  ActivateAddEditRoleComp:boolean=false;
  role:any;

  ngOnInit(): void {
    this.refreshRolesList();
  }

  addClick(){
    this.role={
      RoleId:0,
      RoleDescription:""
    }
    this.ModalTitle="Add Role";
    this.ActivateAddEditRoleComp=true;
  }

  editClick(item: any){
    this.role=item;
    this.ModalTitle="Edit Role";
    this.ActivateAddEditRoleComp=true;
  }

  closeClick(){
    this.ActivateAddEditRoleComp=false;
    this.refreshRolesList();
  }

  refreshRolesList(){
    this.service.getRoleList().subscribe(data=>{
      this.RolesList=data;
    });
  }

}
