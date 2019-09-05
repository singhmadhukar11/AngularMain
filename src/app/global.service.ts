import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
@Injectable({
  providedIn: 'root'
})
export class GlobalService {
constructor(private db: AngularFireDatabase) { }
private basePath = '/details';
private passPath = '/password';
dataApi = "https://jsonplaceholder.typicode.com/todos";

 addFunction(data) {
  const obj = this.db.database.ref(this.basePath);
  obj.push(data);
  console.log('Success');
  }

passwordFunction(data) {
  const obj = this.db.database.ref(this.passPath);
  debugger;
  obj.push(data);
  console.log('Success');
  }


}
