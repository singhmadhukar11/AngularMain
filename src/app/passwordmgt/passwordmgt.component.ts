import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';  
export interface DialogData {
  username: any;
  password: any;
  comments: any;
}
@Component({
  selector: 'app-passwordmgt',
  templateUrl: './passwordmgt.component.html',
  styleUrls: ['./passwordmgt.component.css']
})
export class PasswordmgtComponent implements OnInit {
  name: string;
  username: any;
  password: any;
  comments: any;
  data: DialogData;
  array:[]=[];

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {name: this.name,username: this.username, password: this.password, comments:this.comments}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.data = result;
      this.array.push(this.data);
       });
  }

  ngOnInit() {
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }



}