import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    @Inject('apiUrl') private apiUrl: string,
    private http: HttpClient) {}

  get(url: string) {
    return this.http.get(`${this.apiUrl}${url}`);
  }

  post(url: string, data?: any) {
    return this.http.post(`${this.apiUrl}${url}`, data)
  }

  put(url :string, data?: any) {
    return this.http.put(`${this.apiUrl}${url}`, data)
  }

  delete(url :string) {
    return this.http.delete(`${this.apiUrl}${url}`)
  }
}
