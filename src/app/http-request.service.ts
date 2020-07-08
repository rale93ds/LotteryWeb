import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, ResponseContentType } from '@angular/http';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class HttpRequestService {

  constructor(
    private http: Http,
    private router: Router,
  ) { }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body || JSON.stringify(body);
      errMsg = err.message;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }

    return throwError({ status: error.status, message: errMsg });
  }

  get(url: string, showSuccessToast?: boolean, toastMessage?: string, title?: string) {
    return this.http.get(url, this.getOptions())
      .pipe(
        map((response: Response) => {
          if (response == null) {
            return null;
          } else {

            return response.json();
          }
        }), catchError((response) => this.handleError(response)));
  }

  getOptions(): RequestOptions {
    const headers = new Headers({ 'Content-Type': 'application/json' });

    return new RequestOptions({ headers: headers });
  }

}
