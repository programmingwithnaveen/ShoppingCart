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

  postShoppingCart(resource: string, data: any) {
    return this.http.post(baseURL + resource, data, httpOptions).map((res) => res);
  }

  putProductDetails(resource: string, data: any) {
    return this.http.put(baseURL + resource, data, httpOptions).map((res) => res);
  }

  postProductDetails(resource: string, data: any) {
    return this.http.post(baseURL + resource, data, httpOptions).map((res) => res);
  }

  deleteProductDetails(resource: string) {
    return this.http.delete(baseURL + resource, httpOptions).map((res) => res);
  }

  postPasswordMatch(resource: string, data: any) {
    return this.http.post(baseURL + resource, data, httpOptions).map((res) => res);
  }

  getUserProfile(resource: string) {
    return this.http.get(baseURL + resource).map((res) => res);
  }

  putUserProfile(resource: string, data: any) {
    return this.http.put(baseURL + resource, data, httpOptions).map((res) => res);
  }
}
