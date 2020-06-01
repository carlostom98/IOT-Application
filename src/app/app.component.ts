import { Component } from '@angular/core';
import { FirebasedbService } from './services/firebasedb.service';
import { Chart } from 'chart.js';
import { database } from 'firebase';

interface FbData {
  Valor: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'IoT Aplicacion';
  fbResponse: any;
  fbDataList: number[];
  lineChart: any;

  constructor(fbservice: FirebasedbService) {
    fbservice
      .infodata()
      .valueChanges()
      .subscribe((res) => {
        let temp = res as FbData[];
        this.fbDataList = temp.map((data) => +data.Valor.replace(/\n/g, ''));
        this.draw();
      });
  }

  /**
   * This function draws the chart when data changes
   */
  draw() {
    this.lineChart = new Chart('fbChart', {
      type: 'line',
      data: {
        labels: this.fbDataList,
        datasets: [
          {
            label: 'Grafica de...',
            backgroundColor: 'rgb(25, 99, 132)',
            borderColor: 'rgb(25, 99, 132)',
            data: this.fbDataList,
          },
        ],
      },
    });
  }
}
