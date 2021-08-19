import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../account.service';
import { PortfolioModel } from '../portfoliomodel.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  public user = null

  portfolioArray: Array<PortfolioModel> = [];

  PortfolioRef = new FormGroup({
    name: new FormControl("", [Validators.required]),
    number: new FormControl("", [Validators.required]),

  });

  constructor(public accSer: AccountService) { }

  onProfileChange = (user: any) => {
    console.log("onProfileChange", user)
    this.user = user.user;
   
  }

  ngOnInit(): void {
    this.accSer.onUpdate(this.onProfileChange);
  }

  onSubmit(profile:any) {
    console.log("on submit was called",profile);
    this.portfolioArray.push(profile);
    this.accSer.storePortfolioData(profile);
  }

onShowData(){
  this.portfolioArray = this.accSer.getContactData();
}


}