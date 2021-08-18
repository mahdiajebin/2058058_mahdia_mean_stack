import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RegistrationComponent } from './registration/registration.component';
import { User } from './user.model'



@Injectable()
export class AccountService {
    userArray:Array<User> = new Array();
  
    
    constructor(){
        
      
    }

storeData(nameRef:any,userRef:any,passRef:any){


 var userobj = {
          name:nameRef.value,
          user:userRef.value,
          pass:passRef.value
    
        };
      this.userArray.push(userobj);
// store form data in local storage 

localStorage.setItem("proObj", JSON.stringify(userobj));
    console.log(userobj);
    console.log("Data stored in local storage");
  }



//   checkUserInfo():Observable<Login[]>{
//     return this.http.get<Login[]>("/assets/login.json")

//   }

//geting data from storage
   getData(){
        var retrivedData = localStorage.getItem("proObj");
        if(retrivedData != null)
        this.userArray = JSON.parse(retrivedData);
    
    console.log("get data")
      }

    
     



}