import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegistrationService } from '../shared/registration.service';

@Component({
  selector: 'app-empreg',
  templateUrl: './empreg.component.html',
  styleUrls: ['./empreg.component.css']
})
export class EmpregComponent implements OnInit {
//Filtering For City Dropdownlist 
  cities = [
    {id:"1",name:"Hyderabad"},
    {id:"2",name:"Gachobowli"},
    {id:"3",name:"Waverocks"},
    {id:"4",name:"Silparawam"}
  ]
  postemps: any;
  emplists: any;
  Father: any;
  Name: any;
  Email: any;
  Phone: any;
  Gender: any;
  City: any;
  IsPermanent: any;


  constructor(public regService: RegistrationService,
    public dialog: MatDialog) { }
  
  getEmpList() {
    this.regService.getEmployeesList().subscribe(data=> {
      this.emplists = data;
    })
  }
  
  
  onSubmit() {
    this.postemps = {
      Father  : this.Father,
      Email : this.Email,
      Name  : this.Name,
      Phone : this.Phone,
      Gender  : this.Gender,
      City  : this.City,
      IsPermanent:this.IsPermanent   
    }
    this.regService.postEmployee(this.postemps).subscribe(res => {
      this.getEmpList();
      console.log(this.postemps)
    })
  }
  

  ngOnInit(): void {
    this.getEmpList()
  }

}
