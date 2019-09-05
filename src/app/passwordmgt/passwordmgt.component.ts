import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';  
import { GlobalService } from '../global.service';
import { AngularFireDatabase } from '@angular/fire/database';
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
  data: any;
  array:any[]=[];
private passPath = '/password';
passData: any;

  constructor(public dialog: MatDialog,private globalService: GlobalService,private db: AngularFireDatabase) {

  	db.list(this.passPath).valueChanges()
        .subscribe(password => {
            this.passData = password;
        })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {name: this.name,username: this.username, password: this.password, comments:this.comments}
    });


    dialogRef.afterClosed().subscribe(result => {
      this.data = result;
      debugger;
      const obj = this.db.database.ref(this.passPath);
  		obj.push(this.data);
      // this.array.push(this.data);

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