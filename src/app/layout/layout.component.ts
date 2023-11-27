import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { SideNavComponent } from "../side-nav/side-nav.component";

@Component({
    selector: 'app-layout',
    standalone: true,
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css'],
    imports: [CommonModule, RouterOutlet, HeaderComponent, SideNavComponent]
})
export class LayoutComponent {

}
