import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { bootstrap} from 'bootstrap'

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss', '../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor() { }

  ngOnInit() {
  }

}
