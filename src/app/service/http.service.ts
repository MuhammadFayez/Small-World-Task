import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ServerMultipleResponse } from '../interfaces/server-multiple-response';
import { HttpServiceParam } from '../interfaces/http-service-param';
import { URLz } from '../enums/url.enum';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private readonly url: string = environment.API_URL;
  readonly http: HttpClient;

  constructor(injector: Injector) {
    this.http = injector.get(HttpClient);
  }


  gets(param: Partial<HttpServiceParam>): Observable<ServerMultipleResponse> {
    return this.http
      .get<ServerMultipleResponse>(this.finalResult(param))
      .pipe(
        catchError((error) => {
          return this.handleError(error, param)
        })
      );
  }

  private finalResult(param: Partial<HttpServiceParam>, _method: string = ''){
    const result = this.mergeParam(param, _method)
    return this.convertObjectToUrlQueryParameter(result)
  }

  private mergeParam(param: HttpServiceParam, _method: string) {
    const query = {...this.defaultParam.query, ...param.query, _method }
    return { ...this.defaultParam, ...param,  query};
  }

  private convertObjectToUrlQueryParameter(param: Partial<HttpServiceParam>) {
    let result : string | any = '';
    if (param.endpoint == URLz.DEFAULT) result = param.url;
    if (param.endpoint != URLz.DEFAULT) result = param.url + param.endpoint;
    if (param.query != null) result += '?' + this.objToURLQuery(param);
    return result;
  }

  private objToURLQuery(param: Partial<HttpServiceParam>) {
    // For Simple Object Only
    let result = '';
    const obj = param.query;
    // !Array.isArray(obj[key]) && typeof obj[key] != 'object'
    Object.keys(obj).forEach(key => {
      if(obj[key] != null && obj[key] != '' && obj[key] != undefined) {
          result += '&' + key + '=' + obj[key];
      }
    })
    if(result) result = result.substring(1, result.length)
    return result
  }


  private handleError(
    error: HttpErrorResponse | any,
    param: Partial<HttpServiceParam>
  ): Observable<never> {
    console.group(param.endpoint)
    console.error({param, error})
    console.groupEnd()
    if(error.status == 0){
      console.log('Server down please try later.', 'Server Error')
    } else if(error.status == 500) {
      console.log('Internal Server Error', 'Server Error')
    }
    return throwError(() => new HttpErrorResponse(error));
  }

  get defaultParam(): HttpServiceParam {
    return {
      endpoint: '',
      url: this.url,
      query: {}
    };
  }

}
