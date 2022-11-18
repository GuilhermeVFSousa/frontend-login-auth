import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http: HttpClient) { }

  getUserData(email: any, password: any) {
    return this.http.get('http://ec2-15-229-28-154.sa-east-1.compute.amazonaws.com:8080/user/'+email+'/'+password);
  }
}
