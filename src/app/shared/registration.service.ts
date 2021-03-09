import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(public http:HttpClient) { }

  reactiveForm:FormGroup = new FormGroup({
    $key:new FormControl(null),
    Name: new FormControl('', [Validators.required]),
    Password: new FormControl(''),
    Father: new FormControl('',),
    Gender: new FormControl('1'),
    Phone: new FormControl('', [Validators.required]),
    Email: new FormControl('', [Validators.required]),
    Age: new FormControl(''),
    Address: new FormControl(''),
    isPerimenent: new FormControl(false),
    City: new FormControl(0),
    DOB: new FormControl('')
  })


  getEmployeesList() {
  return this.http.get("http://localhost:3000/employee")
  }
  postEmployee(postEmp: any) {
  return this.http.post("http://localhost:3000/employee/", postEmp);
    
  }




}
