import { Character } from './../../models/character.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent implements OnInit {

  @Input() character: Character = new Character();

  constructor() { }

  ngOnInit() {
  }

}
