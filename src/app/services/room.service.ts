import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http"
import { Room } from '../model/room';



@Injectable({
	providedIn: 'root'
})
export class RoomService {

	
	 baseUrl = 'http://localhost:8080/api/v1/rooms';

	constructor(private http:HttpClient) { }


	createRoom(room: object): Observable<object> {
		return this.http.post(`${this.baseUrl}`, room)
	}

	getRoomList(): Observable<Room[]> {
		return this.http.get<Room[]>(`${this.baseUrl}`)
	}

	getRoomId(id: number): Observable<Room> {
		return this.http.get<Room>(`${this.baseUrl}/ ${id}`)
	}

	upadateRoom(id: number, value: object): Observable<Room> {
		return this.http.put<Room>(`${this.baseUrl}/${id}`, value)
	}

	deleteRoom(id: number): Observable<any> {
		return this.http.delete(`${this.baseUrl}/${id}`)
	}
}
