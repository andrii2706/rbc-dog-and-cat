import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Animal, Animals, Params} from "../interfaces/Animals";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {
  public animalsLink = '/animals';
  constructor(private httpClient:HttpClient) { }
  getAllCats(): Observable<Animals[]>{
    return this.httpClient.get<Animals[]>(`${environment.API}${this.animalsLink}`)
  }
  getAnimalsById(id:number): Observable<Animal>{
    return this.httpClient.get<Animal>(`${environment.API}${this.animalsLink}?id=${id}`)
  }
}
