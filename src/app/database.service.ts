import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }

  getDataFromDB(): Observable<any> {
    return this.http.get('http://localhost:3000/programming-languages');
  }

  postDataToDB(requestBody: any): Observable<any> {
    return this.http.post('http://localhost:3000/programming-languages', requestBody);
  }

}
