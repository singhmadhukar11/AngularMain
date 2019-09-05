import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';  
import { GlobalService } from '../global.service';
import { AngularFireDatabase } from '@angular/fire/database';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
export interface DialogData {
  username: any;
  password: any;
  comments: any;
}
export interface Food {
  value: string;
  viewValue: string;
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
  type: any;
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
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '350px',
      data: {name: this.name,username: this.username, password: this.password, comments:this.comments, type:this.type}
    });


    dialogRef.afterClosed().subscribe(result => {
      this.data = result;
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