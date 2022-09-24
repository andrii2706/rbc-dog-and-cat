import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {HomeInterface} from "../interfaces/HomeInterface";
import {Animals} from "../interfaces/Animals";

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private homeUrl = '/homes';
  constructor(private httpClient:HttpClient) { }
  getHomeInfo(): Observable<HomeInterface[]>{
    return this.httpClient.get<HomeInterface[]>(`${environment.API}${this.homeUrl}`)
  }

}
