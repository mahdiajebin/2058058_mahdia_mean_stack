import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { ITask } from '../interfaces/itask';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(public ser:TaskService) { }
  ngOnInit(): void {


  }




}
