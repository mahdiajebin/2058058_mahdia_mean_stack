import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ITask } from '../interfaces/itask';
import { MatSort } from '@angular/material/sort';

import { MatTableDataSource } from '@angular/material/table';
import { NgForm } from '@angular/forms';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../task.service';
import { DataSource } from '@angular/cdk/table';

import * as moment from 'moment'






@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})



export class TaskFormComponent implements OnInit {

  displayedColumns: string[] = ['idToAdd', 'nameToAdd', 'taskToAdd', 'dateToAdd', 'resetId'];


  constructor(public ser: TaskService) { }


  TaskArray: Array<ITask> = [];

  toDoTaskRef = new FormGroup({
    idToAdd: new FormControl("", [Validators.required]),
    nameToAdd: new FormControl("", [Validators.required]),
    taskToAdd: new FormControl("", [Validators.required]),
    dateToAdd: new FormControl("", [Validators.required])

  });



  onSubmit(values: any) {
    const task: ITask = {
      resetId: this.TaskArray.length + 1,
      idToAdd: values.idToAdd,
      nameToAdd: values.nameToAdd,
      taskToAdd: values.taskToAdd,
      dateToAdd: moment(values.dateToAdd).format('L')

    }
    console.log("on submit was called", task);


    this.TaskArray = [...this.TaskArray, task] // creating new array to store from the previews array //copy
    this.ser.storeData(task);
  }

  removeTask(resetId: number) {
    this.TaskArray = this.TaskArray.filter((task) => task.resetId !== resetId)
    this.ser.storeDatas(this.TaskArray)

  }

  ngOnInit(): void {
    this.TaskArray = this.ser.getData();
  }

}
