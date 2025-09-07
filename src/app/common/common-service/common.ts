import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';
import { combineLatest, combineLatestWith, concatMap, mergeMap, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Common {
  
  constructor(private http: HttpClient) { 

  }
  getProducts(){
    return this.http.get('https://dummyjson.com/invalid');
  }


  getEmployee(){
    return this.http.get('https://dummy.restapiexample.com/api/v1/employees');
  }


  getUsers(){
    return this.http.get('https://dummyjson.com/users');
  }

  getPosts(){
    return this.http.get('https://dummyjson.com/posts');
  }

  getQuotes(){
    return this.http.get('https://dummyjson.com/quotes');
  }

  
  }

