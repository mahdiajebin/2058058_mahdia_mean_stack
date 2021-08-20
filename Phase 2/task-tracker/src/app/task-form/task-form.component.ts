import { Component, OnInit, AfterViewInit,ViewChild } from '@angular/core';
import { ITask } from '../interfaces/itask';
import {MatSort} from '@angular/material/sort';

import {MatTableDataSource} from '@angular/material/table';
import { NgForm } from '@angular/forms';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})



export class TaskFormComponent implements OnInit{


  constructor(public ser:TaskService) { }


  public TaskArray:Array<ITask> =  [];

toDoTaskRef = new FormGroup({
  idToAdd:new FormControl("",[Validators.required]),
  nameToAdd:new FormControl("",[Validators.required]),
  taskToAdd:new FormControl("", [Validators.required]),
  dateToAdd:new  FormControl("", [Validators.required])
});



onSubmit(tasks:any) {

  console.log("on submit was called",tasks);
  this.ser.storeData(tasks);

  const myData = this.ser.getData();
  this.TaskArray = myData;

    
}


ngOnInit(): void {

}



 







  
  
}
