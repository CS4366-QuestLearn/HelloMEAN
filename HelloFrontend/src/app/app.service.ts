import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError, retry } from 'rxjs/operators';
// import { environment } from '../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class AppService {
  exampleUrl = `http://localhost:3000/api/example`;
  constructor(private http: HttpClient) { }
  getHttp() {
    return this.http.get(this.exampleUrl)

  }
  postHttp() {
    return this.http.post(this.exampleUrl, "")

  }
}
