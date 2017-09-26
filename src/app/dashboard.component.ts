import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-dashboard',
  // template: '<h3>Hello</h3>',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})


export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }
}

// export class DashboardComponent {
// }
//   heroes: Hero[] = [];
//
//   constructor(private heroService: HeroService) { }
//
//   ngOnInit(): void {
//     this.heroService.getHeroes()
//       .then(heroes => this.heroes = heroes.slice(1, 5));
//   }
// }