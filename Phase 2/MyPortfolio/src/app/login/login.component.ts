import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

import { AccountService } from '../account.service';
import { User } from '../user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 //@Input() public handleChangeFrom: (type: any)=> void

  loginRef = new FormGroup({
    user:new FormControl("",[Validators.required]),
    pass:new FormControl("", [Validators.required])
  })
  // registerformflag=false;
  //  flag=true;

    msg:string="";

  constructor(public accSer:AccountService) { }

  ngOnInit(): void {

  }


  onSubmit(value:any){
    console.log("calling on suvmit",value)
   const data = this.accSer.getData();
   if(!data)  return;
   if(data.user.user === value.user && data.user.pass=== value.pass){
    alert("login success go to portfolio")
    data.callback(data.user)
   }


  }
  // callService(){
  //   this.accSer.test()
  // }
  // checkUser(userRef:any, passRef:any){
    
  //   let userz = userRef.value;
  //   let passz = passRef.value;
  //   console.log(userz,passz);
  //   let flag=0;
  //   this.accSer.checkUserInfo().subscribe((userArray: any) =>{
 
  //     for(let ll of userArray){
  //       if(ll.user==userz.user && ll.pass ==passz.pass){
  //         flag++;
  //       }
  //     }
  //     if(flag>0){
  //       console.log("sucess")
  //             }else {
  //               console.log("failure")
  //             }
        
  //           });
  //           flag=0;
  //         }

          




//   checkUser(loginRef:NgForm){
//     let login = loginRef.value;
//     let flag=0;
//     this.loginSer.checkUserInfo().subscribe(result =>{
//       for(let ll of result){
//         if(ll.user==login.user && ll.pass ==login.pass){
//           flag++;
//         }
//       }

//       if(flag>0){
// console.log("sucess")
//       }else {
//         console.log("failure")
//       }

//     });
//     flag=0;
//   }

// checkUser2(userRef:any, passRef:any){
//   let arrayU = this.accSer.userArray;
//   let flag =0;


//   if(arrayU.values ==userRef && arrayU.values ==passRef){
//     flag++;

//      }
  

//    if(flag>0){
//       console.log("sucess")
//             }else {
//               console.log("failure")
//             }
      
   
//           flag=0;
//           console.log(arrayU)
//         }



// }

  // checkUser(loginRef:NgForm) {
  //   let login = loginRef.value;
  //   let flag=0;
  //   let arrayU = this.accSer.userArray;
  //   console.log(arrayU)
  // }
  //   // console.log(login)

  //   //   if(arrayU.user==login.user && arrayU.pass ==login.pass){
  //   //     flag++;
  //   //   }
    

  //   // if(flag>0){
  //   //   console.log("sucess")
  //   //         }else {
  //   //           console.log("failure")
  //   //         }
      
   
  //   //       flag=0;
  //   //     }
    
 
}
