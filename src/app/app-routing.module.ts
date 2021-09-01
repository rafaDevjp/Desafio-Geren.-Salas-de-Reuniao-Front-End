import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RoomListComponent } from './components/room-list/room-list.component';
import { RoomDetailsComponent } from './components/room-details/room-details.component';
import { CreateRoomComponent } from './components/create-room/create-room.component';
import { RoomUpdateComponent } from './components/room-update/room-update.component';

const routes:Routes = [

   { 
     path: "", 
     component: RoomListComponent,
     children:[
      { path: "create-room", component: CreateRoomComponent},
      { path: "components/room-update/:id", component: RoomUpdateComponent},
      { path: "components/room-details/:id", component: RoomDetailsComponent},
     ]
    },
   
   

]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
