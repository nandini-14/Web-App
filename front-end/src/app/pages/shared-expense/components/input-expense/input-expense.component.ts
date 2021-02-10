import { Component, OnInit, Input, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {SplitByComponent} from '../split-by/split-by.component';

export interface ExpenseData {
  name: string;
  category: string;
  amount: string;
  friend: string;
}

@Component({
  selector: 'app-input-expense',
  templateUrl: './input-expense.component.html',
  styleUrls: ['./input-expense.component.scss']
})

export class InputExpenseComponent implements OnInit {

  categories = ['Food', 'Travel', 'Shopping', 'Others'];
  category = 'Others';
  friend = "";

  friends = ['Anusha', 'Mehul']

  @Input() updateExpense: boolean;
  @Input() split_by_method = "";
  
  constructor(public dialog: MatDialog,
    public dialogRef: MatDialogRef<SplitByComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ExpenseData) {
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }  

  addExpense():void {
    this.data.category = this.category;
    this.data.friend = this.friend;
    console.log(this.data);
  }

  SplitByPopUp() {
    console.log("split");
    const dialogRef = this.dialog.open(SplitByComponent, {
      width: '500px',
      data: {split_by_method: this.split_by_method}
    });
    console.log(this.split_by_method);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

