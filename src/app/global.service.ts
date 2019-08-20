import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
constructor() { }
dataApi = "https://jsonplaceholder.typicode.com/todos";



}
