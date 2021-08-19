import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { User } from '../user.model';
import { AccountService } from '../account.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
 
  // registerformflag:boolean=true;

// flag=false;

userArray:Array<User> = new Array();


  RegistrationRef = new FormGroup({
    name:new FormControl("",[Validators.required]),
    user:new FormControl("",[Validators.required]),
    pass:new FormControl("", [Validators.required])
  })

  constructor(public accSer:AccountService) {



   }

  ngOnInit(): void {
  }

  // get f() { return this.RegistrationRef.controls; }

  onSubmit() {
  
 console.log("on submit was called");
 alert("sign up success go to login")

  }



  // addUser(nameRef:any,userRef:any,passRef:any){
  //   var userobj = {
  //     name:nameRef.value,
  //     user:userRef.value,
  //     pass:passRef.value

  // };

 storeRegData(nameRef:any,userRef:any,passRef:any){
    this.accSer.storeData(nameRef,userRef,passRef);

  }


//   this.userArray.push(userobj);
// // store form data in local storage 


// localStorage.setItem("proObj", JSON.stringify(userobj));
//     console.log(userobj);
//     console.log("Data stored in local storage");
//   }


  // runToggle(){
  //   this.accSer.toggle()
  
  // }

  // signUp() {
  // console.log("signup func")
  // }


  // toggleregistrationsubmit(){
  //   if(this.regisBclicked){
  //     this.regisBclicked=false;
  //      this.loginform=true;
  //   }else{
  //     this.regisBclicked=true;
  //     this.loginform=false;
    
  //   }
  //   console.log("toggle reg clicked")
  // }
  }
 

