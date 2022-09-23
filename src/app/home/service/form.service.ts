import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {UserInfo} from "../interfaces/UserInfo";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private postRequest = '/userInfo'

  constructor (public httpClient:HttpClient) { }
  // sendUserInfo(userInfo:UserInfo) : Observable<UserInfo>{
  //   this.httpClient.post<UserInfo>(`${environment.API}${this.postRequest}`,userInfo)
  // }
}
