import { Component, OnInit, Inject} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';

export interface DialogData {
  title: string;
  description: string;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  form: FormGroup;
  description = new FormControl('', [Validators.required]);
  priority = new FormControl('', [Validators.required]);
  due = new FormControl('', [Validators.required]);

  task = [];

  constructor(private fb: FormBuilder, public dialog: MatDialog) {
    this.form = fb.group({
      description: this.description,
      priority: this.priority,
      due: this.due
    })
   }

  ngOnInit(): void {
  }

  addTodo() {
    console.info(this.form);
    //Check the Due Date
    let today = moment().startOf('day');
    let selectedDate = moment(this.form.value.due);
    console.info(today);
    console.info(selectedDate);
    if( selectedDate < today)
    {
      const dialogRef = this.dialog.open(AlertDialog, {
        width: '250px',
        data: {title:'Due Date', description: 'Due date is in the Past'}
      });
    }
    else{
      //Add into Task Array
      this.task.push({
        description: this.form.value.description,
        priority: this.form.value.priority,
        due: moment(this.form.value.due).format('MMM DD'),
        completed: false
      });
    }
  }

  toggleTodoComplete(i) {
    this.task[i].completed = true;
  }

  onDeleteTodo(i) {
    this.task.splice(i, 1);
  }
}

@Component({
  selector: 'alert-dialog',
  templateUrl: './alert.dialog.html',
})
export class AlertDialog {

  constructor(
    public dialogRef: MatDialogRef<AlertDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onOkClick(): void {
    this.dialogRef.close();
  }

}
