import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from '../../environments/environment';
import { endPoint } from '../common/endpoints';

@Injectable()
export class PlayerServices {

    constructor(private http: HttpClient) {}

    getPlayers(): Observable<any> {
      return this.http.get(environment.apiUrl + endPoint.getPlayer);
    }

    addPlayer(data: any): Observable<any> {
      const body = {
        name: data.playerName,
        playerClass: data.playerClass,
        role: data.playerRole
      }
      return this.http.post(environment.apiUrl + endPoint.addPlayer, body);
    }

    editPlayer(data: any): Observable<any> {
      const body = {
        id: data.id,
        name: data.playerName,
        playerClass: data.playerClass,
        role: data.playerRole
      }
      return this.http.put(environment.apiUrl + endPoint.editPlayer+ '/' + data.id, body);
    }

    deletePlayer(id: any): Observable<any> {
      return this.http.delete(environment.apiUrl + endPoint.editPlayer+ '/' + id);
    }

}
