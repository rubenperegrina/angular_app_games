import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '@app/_services';
import { Game } from '@app/_models';

@Component({ templateUrl: 'detail.component.html' })
export class DetailComponent implements OnInit {
    id: string;
    game: Game = {
        id: 0,
        name: '',
        difficulty: 0,
        description: '',
        img: '',
    };
    games = null;

    constructor(
        private route: ActivatedRoute,
        private gameService: GameService
    ) {}

    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        
         this.gameService.getAll()
            .subscribe(
                (resp) => {this.games = resp;
                    for (var i = 0; i < this.games.length; i++){
                        if (this.games[i].id == this.id){
                            this.game = this.games[i];
                        }
                      }
                }
            );
    }
}