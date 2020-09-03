import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { Game } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class GameService {

    constructor(
        private http: HttpClient
    ) {
    }

    getAll() {
        return this.http.get('../../assets/gamesList.json');
    }
}