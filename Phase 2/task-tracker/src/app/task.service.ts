

import { Injectable } from '@angular/core';
import { ITask } from './interfaces/itask';






@Injectable()

export class TaskService{


    TaskArray: Array<ITask> = new Array();

    storeData(tasks:any) {
      var profiles = this.getData();
      profiles.push(tasks)
      localStorage.setItem("taskObj", JSON.stringify(profiles));
    }
    
    
    getData():any{
      var retrivedData = localStorage.getItem("taskObj");
      if (!retrivedData) return [];
      return JSON.parse(retrivedData);
      
    
    }
      

}





  