import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { SideNavComponent } from "../side-nav/side-nav.component";
import { FooterComponent } from "../footer/footer.component";
import { RightblockComponent } from "../rightblock/rightblock.component";

@Component({
    selector: 'app-layout',
    standalone: true,
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css'],
    imports: [CommonModule, RouterOutlet, HeaderComponent, SideNavComponent, FooterComponent, RightblockComponent]
})
export class LayoutComponent {
   home: any;

constructor(private router: Router) { 

    router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
            this.home =  event.url
            // console.log(event.url);
        }
    });
}

}
