import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopnavComponent } from "../topnav/topnav.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    imports: [CommonModule, TopnavComponent]
})
export class HeaderComponent {

}
