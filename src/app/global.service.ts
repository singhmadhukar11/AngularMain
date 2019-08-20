import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
@Injectable({
  providedIn: 'root'
})
export class GlobalService {
constructor(private db: AngularFireDatabase) { }
private basePath = '/details';
dataApi = "https://jsonplaceholder.typicode.com/todos";

 submitFunction(data) {
 	debugger;
  const obj = this.db.database.ref(this.basePath);
  obj.push(data);
  console.log('Success');
  }


}
