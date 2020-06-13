import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable} from 'rxjs';
import { catchError ,retry} from 'rxjs/operators';
import { throwError } from 'rxjs';
import {map} from 'rxjs/operators';
import { filter } from 'rxjs/operators';

 

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class UserIdService{

  constructor(private http: HttpClient){

  }
	getUsers(): Observable<any> {
  return this.http.get('https://jsonplaceholder.typicode.com/posts',httpOptions).pipe(
                    map((response: Response)=>{console.log(response)}),
                    retry(3),
                 // filter(num => num % 2 === 0),
                   catchError(this.errorHandler))

}

errorHandler(error: HttpErrorResponse){
return throwError('Please try again later');
}
}
