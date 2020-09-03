import { Component, OnInit } from '@angular/core';

import { GameService } from '@app/_services';

@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {
    games = null;
    gameToFind: string;

    constructor(private gameService: GameService) {}

    ngOnInit() {
        this.gameService.getAll()
            .subscribe(
                (resp) => {this.games = resp;}
            );
    }

    search(gameToFind:string) {

           const result = this.games.find( ({ name }) => name === gameToFind );
          if (result) {
              this.games = [];
              this.games.push(result);
          } else if (gameToFind === '') {
            this.gameService.getAll()
            .subscribe(
                (resp) => {this.games = resp;}
            );
          }
        }
}