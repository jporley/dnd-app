import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TabMetadata } from 'app/interfaces/tab-metadata.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private tabs: TabMetadata[] = [
    {
      name: "Home",
      url: "home",
      active: true
    },
    {
      name: "Characters",
      url: "chars",
      active: false
    },
    {
      name: "Contact",
      url: "contact",
      active: false
    }
  ];

  constructor(private router: Router) { }


  private clickedTab(tab: TabMetadata) {
    if (tab) {
      this.router.navigate([tab.url])
    }
  }

}
