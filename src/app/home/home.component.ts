import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InplayComponent } from "../inplay/inplay.component";
import { RightblockComponent } from "../rightblock/rightblock.component";
import { TopcarusalComponent } from "../topcarusal/topcarusal.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    imports: [CommonModule, InplayComponent, RightblockComponent, TopcarusalComponent]
})
export class HomeComponent {

}
