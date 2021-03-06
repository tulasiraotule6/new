import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cities= [
    
    {id:"1",name:"Hyderabad"},
    {id:"2",name:"Gachobowli"},
    {id:"3",name:"Waverocks"},
    {id:"4",name:"Silparawam"}
  ]
showFiller:any = false;
  constructor() { 
  }
  ngOnInit(): void {
  }
  reactiveForm = new FormGroup({
    Name: new FormControl('', [Validators.required]),
    Password: new FormControl(''),
    Father: new FormControl('',),
    Gender: new FormControl('1'),
    Phone: new FormControl('', [Validators.required]),
    Email: new FormControl('', [Validators.required]),
    Age: new FormControl(''),
    Address: new FormControl(''),
    Perimenent: new FormControl(''),
    City: new FormControl(''),
    DOB: new FormControl('')
  })

}
