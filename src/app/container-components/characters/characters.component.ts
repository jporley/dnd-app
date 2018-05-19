import { Character } from './../../models/character.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  private characters: Character[] = [
    new Character("Ghan","Juan","A ripped, hulking, bald human with a huge axe strapped on his back, finds comfort playing some soothing tunes by himself on his lute. In heavy contrast with this, when it comes to fighting, his strength and rage are something that you’ve hardly seen before. Ghan is a barbarian outcast from the eastern region of Southwood. Looking for a gig to get by, he got an offer he couldn’t resist. A hundred gold pieces in exchange for delivering a package to a place called Vallaki. He gathered provisions and set off to this remote place in a heartbeat, a trip that would prove to be very weird, especially as soon as he met a group of people on the road who for some reason thought he was a zombie…","Lorem Ipsum"),
    new Character("Maisy","Abby","A ripped, hulking, bald human with a huge axe strapped on his back, finds comfort playing some soothing tunes by himself on his lute. In heavy contrast with this, when it comes to fighting, his strength and rage are something that you’ve hardly seen before. Ghan is a barbarian outcast from the eastern region of Southwood. Looking for a gig to get by, he got an offer he couldn’t resist. A hundred gold pieces in exchange for delivering a package to a place called Vallaki. He gathered provisions and set off to this remote place in a heartbeat, a trip that would prove to be very weird, especially as soon as he met a group of people on the road who for some reason thought he was a zombie…","Lorem Ipsum"),
    new Character("Twinnor","Tim","A ripped, hulking, bald human with a huge axe strapped on his back, finds comfort playing some soothing tunes by himself on his lute. In heavy contrast with this, when it comes to fighting, his strength and rage are something that you’ve hardly seen before. Ghan is a barbarian outcast from the eastern region of Southwood. Looking for a gig to get by, he got an offer he couldn’t resist. A hundred gold pieces in exchange for delivering a package to a place called Vallaki. He gathered provisions and set off to this remote place in a heartbeat, a trip that would prove to be very weird, especially as soon as he met a group of people on the road who for some reason thought he was a zombie…","Lorem Ipsum"),
    new Character("Richter","Jack","A ripped, hulking, bald human with a huge axe strapped on his back, finds comfort playing some soothing tunes by himself on his lute. In heavy contrast with this, when it comes to fighting, his strength and rage are something that you’ve hardly seen before. Ghan is a barbarian outcast from the eastern region of Southwood. Looking for a gig to get by, he got an offer he couldn’t resist. A hundred gold pieces in exchange for delivering a package to a place called Vallaki. He gathered provisions and set off to this remote place in a heartbeat, a trip that would prove to be very weird, especially as soon as he met a group of people on the road who for some reason thought he was a zombie…","Lorem Ipsum"),
    new Character("Daeloren","Meg","A ripped, hulking, bald human with a huge axe strapped on his back, finds comfort playing some soothing tunes by himself on his lute. In heavy contrast with this, when it comes to fighting, his strength and rage are something that you’ve hardly seen before. Ghan is a barbarian outcast from the eastern region of Southwood. Looking for a gig to get by, he got an offer he couldn’t resist. A hundred gold pieces in exchange for delivering a package to a place called Vallaki. He gathered provisions and set off to this remote place in a heartbeat, a trip that would prove to be very weird, especially as soon as he met a group of people on the road who for some reason thought he was a zombie…","Lorem Ipsum"),
    new Character("Dungeon Master","Russ","A ripped, hulking, bald human with a huge axe strapped on his back, finds comfort playing some soothing tunes by himself on his lute. In heavy contrast with this, when it comes to fighting, his strength and rage are something that you’ve hardly seen before. Ghan is a barbarian outcast from the eastern region of Southwood. Looking for a gig to get by, he got an offer he couldn’t resist. A hundred gold pieces in exchange for delivering a package to a place called Vallaki. He gathered provisions and set off to this remote place in a heartbeat, a trip that would prove to be very weird, especially as soon as he met a group of people on the road who for some reason thought he was a zombie…","Lorem Ipsum")
  ];

  constructor() { }

  ngOnInit() {
  }

}
