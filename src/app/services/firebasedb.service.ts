import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FirebasedbService {

  constructor(public database:AngularFireDatabase) {}

  infodata(){
    return this.database.list("users");
  }
}
