import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const baseURL = 'http://localhost:8080/api/v1/shopping';

@Injectable()
export class ShoppingServices {

  constructor(private http: HttpClient) {
  }

  getProductList(resource: string) {
    return this.http.get(baseURL + resource).map((res) => res);
  }
}
