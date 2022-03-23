import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {Observable} from "rxjs";
import {Player} from "../models/player/player";
import {map} from "rxjs/operators";
import {PlayerRole} from "../models/player/player-role";
import {IPlayerForm} from "../interfaces/player-form";

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private apiService: ApiService) {}

  getRoles(): PlayerRole[] {
    return [
      new PlayerRole({name: 'RANGED'}),
      new PlayerRole({name: 'MELEE'}),
      new PlayerRole({name: 'HEALER'}),
      new PlayerRole({name: 'TANK'}),
    ]
  }

  getPlayers(): Observable<Player[]> {
    return this.apiService.get('/api/v1/eventmanager/players')
      .pipe(
        map((response: any) => response.map((player: any) => new Player(player)))
      )
  }

  store(formData: IPlayerForm): Observable<any> {
    // endpoint should be POST /api/v1/eventmanager/players
    return this.apiService.post('/api/v1/eventmanager/player/add', formData)
  }

  update(formData: IPlayerForm): Observable<any> {
    // endpoint should be PUT /api/v1/eventmanager/players/:playerId
    return this.apiService.put(`/api/v1/eventmanager/player/${formData.id}`, formData)
  }

  delete(player: Player): Observable<any> {
    // endpoint should be DELETE /api/v1/eventmanager/players/:playerId
    return this.apiService.delete(`/api/v1/eventmanager/player/${player.id}`)
  }
}
