import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
@Injectable({
  providedIn: 'root'
})
export class GlobalService {
constructor(private db: AngularFireDatabase) { }
public basePath = '/details';
private passPath = '/password';
dataApi = "https://jsonplaceholder.typicode.com/todos";

 addFunction(data) {
  const obj = this.db.database.ref(this.basePath);
  obj.push(data);
  console.log('Success');
  }

  passwordFunction(data) {
  const obj = this.db.database.ref(this.passPath);
  obj.push(data);
  console.log('Success');
  }


}
