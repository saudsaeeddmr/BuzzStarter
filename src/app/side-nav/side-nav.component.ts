import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit{

tabOpen: boolean = false;
subTab: boolean = false;

marketData = [
      { sportname : "criket1" },
      { sportname : "criket2" },
      { sportname : "criket3" },
      { sportname : "criket4" },
      { sportname : "criket5" },
      { sportname : "criket6" },
      { sportname : "criket7" },
      { sportname : "criket8" },
      
];
  
ngOnInit(): void {
  console.log('asdfghjhgfd',this.marketData);
}
goToNxtTab() {
this.tabOpen = true; 
}
goToPrivous(){
  // console.log('========',this.subTab);
  this.tabOpen = false;
}
goToPrivousSub(){
  // console.log('========',this.subTab);
  // this.tabOpen = false;
  this.subTab = false;

}
goToSubTab(){
  // this.tabOpen = false;
  this.subTab = true
}

}
