import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchCnpjService {
  public uri = 'https://receitaws.com.br/v1/cnpj/';
  public token = '6c7b309cad5835be39c88d93a8ebb783733ee64732e0cf79cd540fec0827f53c';

  constructor(
    private http: HttpClient
  ) { }

  search(term: string): Observable<any> {
    return this.http.jsonp(this.uri + term, 'callback');
  }
}
