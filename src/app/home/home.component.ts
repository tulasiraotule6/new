import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EmpregComponent } from '../empreg/empreg.component';
import { RegistrationService } from '../shared/registration.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  showFiller: any = false;
  emplists: any;




  constructor(public regService: RegistrationService,
    public dialog: MatDialog
  ) {
  }
  ngOnInit(): void {
    this.getEmpList();
  }
//Get All EmployeeList
  getEmpList() {
    this.regService.getEmployeesList().subscribe(data=> {
      this.emplists = data;
    })
  }


  //The Dialouge Box For Employee Registration
  onCreate() {
    const matDialogconfg = new MatDialogConfig();
    matDialogconfg.disableClose = true;
        matDialogconfg.autoFocus = true;
matDialogconfg.width="50%"
    this.dialog.open(EmpregComponent,matDialogconfg);  
}
  

}














// reactiveForm:FormGroup = new FormGroup({
  //   $key:new FormControl(null),
  //   Name: new FormControl('', [Validators.required]),
  //   Password: new FormControl(''),
  //   Father: new FormControl('',),
  //   Gender: new FormControl('1'),
  //   Phone: new FormControl('', [Validators.required]),
  //   Email: new FormControl('', [Validators.required]),
  //   Age: new FormControl(''),
  //   Address: new FormControl(''),
  //   isPerimenent: new FormControl(false),
  //   City: new FormControl(0),
  //   DOB: new FormControl('')
  // })