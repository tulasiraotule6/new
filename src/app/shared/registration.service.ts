import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

    employeeList:AngularFireList<any>;


  constructor(public firebase: AngularFireDatabase,
    public datePipe:DatePipe,
    public http: HttpClient) {
    }
  
  
  //Object Reference For Reactive Form
  reactiveForm: FormGroup = new FormGroup({
    $key:new FormControl(null),
    Name: new FormControl('', [Validators.required]),
    Father: new FormControl(''),
    Gender: new FormControl('1'),
    Phone: new FormControl('', [Validators.required]),
    Email: new FormControl('', [Validators.required]),
    isPerimenent: new FormControl(false),
    City: new FormControl(0),
    DOB: new FormControl('')
  })


  getEmployeesList() {
  return this.http.get("http://localhost:3000/employee")
  }

//For Defaulat Values
  initialization() {
    this.reactiveForm.setValue({
      $key:null,
      Name: '',
      Father: '',
      Gender:'1',
      Email: '',
      Phone: '',
      isPerimenent: false,
      City: '',
      DOB:''
      
    })
  }


//Get Employees Form Firebase Database

  getEmployees() {
    this.employeeList = this.firebase.list('employee');
    return this.employeeList.snapshotChanges();
  }
  //Save Employees
  insertEmployee(emp:any) {
    this.employeeList.push({
      Name: emp.Name,
      Father: emp.Father,
      Gender:emp.Gender,
      Email:emp.Email,
      Phone:emp.Phone,
      isPerimenent:emp.isPerimenent,
      City: emp.City,
      DOB: emp.DOB == "" ? "": this.datePipe.transform(emp.DOB, 'yyyy-MM-dd')
    })
  }
//Update Employees
  updateemployee(emp:any) {
    this.employeeList.update(emp.$key, {
      Name: emp.Name,
      Father: emp.Father,
      Gender:emp.Gender,
      Email:emp.Email,
      Phone:emp.Phone,
      isPerimenent:emp.isPerimenent,
      City: emp.City,
      DOB: emp.DOB == "" ? "": this.datePipe.transform(emp.DOB, 'yyyy-MM-dd')
    })
  }

  //Delete Employee
  deleteEmployee($key:string) {
    this.employeeList.remove($key);
  }


}
