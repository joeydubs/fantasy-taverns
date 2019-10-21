import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ITavern {
  ID: string,
  TavernName: string,
}

@Injectable({
  providedIn: 'root'
})
export class TavernService {

  constructor(private http: HttpClient) { }

  getAllTaverns(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/tavernList');
  }

  getMyTaverns(): Observable<ITavern> {
    return this.http.get<ITavern>('http://localhost:3000/myTaverns')
  }
}
