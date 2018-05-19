import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TabMetadata } from 'app/interfaces/tab-metadata.interface';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  @Input() data: TabMetadata[] = [];
  @Output() select = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
