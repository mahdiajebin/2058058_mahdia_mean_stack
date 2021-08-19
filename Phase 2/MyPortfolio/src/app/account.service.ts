import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RegistrationComponent } from './registration/registration.component';
import { User } from './user.model'
import { PortfolioModel } from './portfoliomodel.model';
import { ReturnStatement, ThrowStmt } from '@angular/compiler';



@Injectable()
export class AccountService {
  callback = null;
  userArray: Array<User> = new Array();
  portfolioArray: Array<PortfolioModel> = new Array();

  constructor(public http: HttpClient) {

  }

  onUpdate(callback: any) {
    this.callback = callback
  }


  //  this.portfolioArray.push(portfolioObj);

  storeData(nameRef: any, userRef: any, passRef: any) {

    var userobj = {
      name: nameRef.value,
      user: userRef.value,
      pass: passRef.value
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
  getData(): any {
    var retrivedData = localStorage.getItem("proObj");
    if (!retrivedData) return false;
    this.userArray = JSON.parse(retrivedData);
    return { user: this.userArray, callback: this.callback };
  }

  storePortfolioData(profile:any) {
    const profiles = this.getContactData();
    profiles.push(profile)
    localStorage.setItem("portObj", JSON.stringify(profiles));
  }

  getContactData(): any {
    var retrivedData = localStorage.getItem("portObj");
    if (!retrivedData) return [];
    return JSON.parse(retrivedData);
  }



 
   
  
  
  


  // getValueFromObservable():Observable<string> {
  //   return this.store.map(res => res.json());
  // }

  // return this.getContactData();


  //  console.log("get data")
}

      //sending request
      // loadContactArray():Observable<PortfolioModel[]>{


      // }



    //this.portfolioArray[].contactName,this.portfolioArray[].phoneNumber




//}