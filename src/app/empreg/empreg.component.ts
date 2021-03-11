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
  key: any;


  constructor(public regService: RegistrationService,
    public dialog: MatDialog) { }
  
  getEmpList() {
    this.regService.getEmployeesList().subscribe(data=> {
      this.emplists = data;
    })
  }
  
  //Submit the Data
  onSubmit() {

    if (this.regService.reactiveForm.valid) {
      this.regService.insertEmployee(this.regService.reactiveForm.validator)
      this.regService.reactiveForm.reset();
      this.regService.initialization();
  }
  }

  //Reset The Data fields
  onReset() {
    this.regService.reactiveForm.reset();
    this.regService.initialization();  //for initial Default Values
  
  }
  ngOnInit(): void {
    this.getEmpList()
    this.regService.getEmployees();
  }

}
