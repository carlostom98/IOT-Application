import { Component } from '@angular/core';
import { FirebasedbService } from './services/firebasedb.service';

interface FbData {
  Valor: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'IoT Aplicacion';
  fbResponse;
  fbDataList: FbData[];

  constructor(fbservice: FirebasedbService) {
    this.fbResponse = fbservice
      .infodata()
      .valueChanges()
      .subscribe((res) => {
        this.fbDataList = res as FbData[];
        console.log(res);
        console.log(this.fbDataList);
      });
    console.log(this.fbResponse);
  }
}
