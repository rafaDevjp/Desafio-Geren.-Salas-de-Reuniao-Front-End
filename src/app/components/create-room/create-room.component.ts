import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Room } from 'src/app/model/room';
import { RoomService } from 'src/app/services/room.service';

@Component({
	selector: 'app-create-room',
	templateUrl: './create-room.component.html',
	styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {

	room: Room;
	submited = false;
	constructor(private roomService: RoomService, private router: Router) { }

	ngOnInit() {

	}

	save() {
		this.roomService.createRoom(this.room)
			.subscribe(res => 
				console.log(res),
					error => console.log(error)
			)
	}

}
