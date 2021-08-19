import { Component,OnInit} from '@angular/core';
import { AccountService } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyPortfolio';
  public form = "login";

  public handleChangeFrom = (type:any) => {
    this.form = type
  }

  registerForm :boolean = true;
  loginForm: boolean = true;
  togglePortfolio:boolean = false;



 constructor(public ser:AccountService){

 }

  // onSubmit(): void {
  //   this.ser.onToggle()
  // }




  // regisBclicked:boolean = true;
  // loginform:boolean=false;

}





