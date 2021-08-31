import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private baseUrl = 'http://localhost:8080/api/v1/rooms';

  constructor(private httpCliente: HttpClient) { }


  createRoom(room:object): Observable<object>{
    return this.httpCliente.post<object>(`${this.baseUrl}`, room)
  }
  getRoomList(): Observable<any>{
    return this.httpCliente.get<any>(`${this.baseUrl}`)
  }

  getRoomId(id: number): Observable<any>{
    return this.httpCliente.get<any>(`${this.baseUrl}/ ${id}`)
  }

  upadateRoom(id: number, value: object): Observable<object> {
    return this.httpCliente.put<object>(`${this.baseUrl}/${id}`, value)
  }

  deleteRoom(id:number): Observable<any>{
    return this.httpCliente.delete<any>(`${this.baseUrl}/${id}`)
  }


}
