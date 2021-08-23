

import { Injectable } from '@angular/core';
import { ITask } from './interfaces/itask';






@Injectable()

export class TaskService {

//storing task 
  storeData(task: ITask) {
    var tasks = this.getData();
    tasks.push(task)
    localStorage.setItem("taskObj", JSON.stringify(tasks));

  }


  getData(): ITask[] {
    var retrivedData = localStorage.getItem("taskObj");
    console.log(retrivedData);
    if (!retrivedData) return [];
    return JSON.parse(retrivedData);
  }

//strong an task array 
  storeDatas(tasks: ITask[]){
    localStorage.setItem("taskObj", JSON.stringify(tasks));
  }


}







