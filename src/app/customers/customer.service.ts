import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Customer} from './customer';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customersUrl: string;
  constructor(private http: HttpClient) {
    this.customersUrl = 'https://customers-backend-demo.herokuapp.com/customers';
  }

  public findAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.customersUrl);
  }
}
