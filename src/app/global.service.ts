import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

dataApi = "https://jsonplaceholder.typicode.com/todos";
  constructor() { }
}
