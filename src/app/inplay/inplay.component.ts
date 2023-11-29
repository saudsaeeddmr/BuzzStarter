import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inplay',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inplay.component.html',
  styleUrls: ['./inplay.component.css']
})
export class InplayComponent {

  marketData = [
    {
      odds: [
        { backPrice: 2.96, backVolume: 708.69, layPrice: 2.98, layVolume: 500 },
        { backPrice: 6.6, backVolume: 795.33, layPrice: 6.8, layVolume: 308.49 },
        { backPrice: 1.93, backVolume: 2221.16, layPrice: 1.94, layVolume: 1098.93 }
      ]
    },
  ];
  marketAllData = [
    {
      imagePath: '../../assets/inplay/4.png',
      team: 'Bangladesh v New Zealand',
      date: '28/11/2023, 07:30',
      odds: [
        { backPrice: 2.96, backVolume: 708.69, layPrice: 2.98, layVolume: 500 },
        { backPrice: 6.6, backVolume: 795.33, layPrice: 6.8, layVolume: 308.49 },
        { backPrice: 1.93, backVolume: 2221.16, layPrice: 1.94, layVolume: 1098.93 }
      ]
    },
    {
      imagePath: '../../assets/inplay/4.png',
      team: 'Karachi Region Whites v Hyderabad Region',
      date: '28/11/2023, 14:00',
      odds: [
        { backPrice: 0, backVolume: 0, layPrice: 1.01, layVolume: 5551.09 },
        { backPrice: '-', backVolume: '-', layPrice: '-', layVolume: '-' },
        { backPrice: 110, backVolume: 28.32, layPrice: 1000, layVolume: 1.16 }
      ]
    },
    {
      imagePath: '../../assets/inplay/4.png',
      team: 'SOUTH AFRICA T10 VS ENGLAND T10',
      date: '28/11/2023, 15:25',
      odds: [
        { backPrice: '-', backVolume: '-', layPrice: '-', layVolume: '-' },
        { backPrice: '-', backVolume: '-', layPrice: '-', layVolume: '-' },
        { backPrice: '-', backVolume: '-', layPrice: '-', layVolume: '-' }
      ]
    }
    // Add more market data objects for each market as needed
  ];
  
}
