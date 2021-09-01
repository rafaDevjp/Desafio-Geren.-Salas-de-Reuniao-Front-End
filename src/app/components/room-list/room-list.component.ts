import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Room } from 'src/app/model/room';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

  rooms:Room[]=[] ;

  constructor( private roomService:RoomService, private router:Router) { }

  ngOnInit(){
    this.reloadData();
  }

  reloadData(){;
   this.roomService.getRoomList().subscribe(res =>{
       this.rooms = res
       console.log(this.rooms);
   });
  }

  deleteRoom(id: number){
    this.roomService.deleteRoom(id).subscribe(res => {
        console.log(res);
        this.reloadData();
    });
  }

  roomDetails(id: number){
      this.router.navigate(['components/room-details', id])
  }

  updateRoom(id:number){
    this.router.navigate(['components/room-update', id])
  }



}
