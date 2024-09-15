import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @ViewChild('registerForm') registerForm!: NgForm;



  email:string;
  password:string;
  retypePassword:string;
  fullName:string;
  address:string;
  isConditon:boolean;
  dateOfBirth:Date

  constructor() {
    this.email=""
    this.password=""
    this.retypePassword=""
    this.fullName=""
    this.dateOfBirth= new Date();
    this.dateOfBirth.setFullYear(this.dateOfBirth.getFullYear()-18)
    this.address=""
    this.isConditon=false;
    
  }

  ngOnInit() {
    
  }

  onEmailChange() {
    console.log(`Email  ${this.email}`);
    
  }

  registerHandle() {
    const message = `phone: ${this.email}` + `phone: ${this.password}`+ `phone: ${this.retypePassword}`+ `phone: ${this.fullName}`+ `phone: ${this.address}`+ `phone: ${this.isConditon}`
    alert(message)
  }

  //how to check password match ?
  checkPasswordMatch() {
    console.log(this.registerForm.form);
    
    if(this.password !== this.retypePassword) {
      console.log('123');
      
      this.registerForm.form.controls["retypePassword"].setErrors({'passwordNotMatch':"Password not matching"})
    } else {
      this.registerForm.form.controls["retypePassword"].setErrors(null);
    }
  }
}
