import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { SideNavComponent } from "../side-nav/side-nav.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-layout',
    standalone: true,
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css'],
    imports: [CommonModule, RouterOutlet, HeaderComponent, SideNavComponent, FooterComponent]
})
export class LayoutComponent {

}
