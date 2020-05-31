import { Component } from '@angular/core';
import {FirebasedbService} from  "./services/firebasedb.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Primera Aplicacion';
  variable;
  minumero: number;

  constructor(fbservice:FirebasedbService){
    this.variable=fbservice.infodata().snapshotChanges();
    console.log(this.variable);
  }
}
