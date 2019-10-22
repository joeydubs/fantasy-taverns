import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ITavern {
  ID: string,
  TavernName: string,
}

export interface IRoom {
  ID: string,
  RoomName: string,
  RoomStatus: string,
  tavernID: string,
  DailyRate: string,
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
    return this.http.get<ITavern>('http://localhost:3000/my-taverns')
  }

  getTavernRooms(): Observable<IRoom[]> {
    return this.http.get<IRoom[]>('http://localhost:3000/tavern-rooms')
  }
}
