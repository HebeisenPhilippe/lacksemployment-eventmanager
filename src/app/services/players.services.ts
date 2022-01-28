import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
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


      const options = {
        headers: new HttpHeaders({
          Authentication: 'Bearer ' + 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJGVjZlRWUxMHFlT0d1dk9xSEh6OERNQUVnMzZlUmZuZXZNeTJzdHJkcXdnIn0.eyJleHAiOjE2NDMyMjAyMjMsImlhdCI6MTY0MzIwOTQyMywianRpIjoiOWI1ZDg4ZWEtOTgzNC00MzJkLWIzNTctZTE0M2FhMjNkNzg2IiwiaXNzIjoiaHR0cHM6Ly9hcHAucGxlYXNlLW9wZW4uaXQvYXV0aC9yZWFsbXMvNTFhMjU5MWMtOGRmOC00YTdiLWE2ZmQtNmQ4MGRkMTViMWNiIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjIxNzhkNmQ1LTk0MWYtNDYwNS1iYzkwLTBjNDIyYmEwYTlmNSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImJhY2tlbmQtc2VydmljZS1ldmVudG1hbmFnZXIiLCJzZXNzaW9uX3N0YXRlIjoiZGQ5OGIzMWMtMTIwMC00ZmQ0LWE2ZjctNjE0OWEyOGE0N2IwIiwiYWNyIjoiMSIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsImRlZmF1bHQtcm9sZXMtNTFhMjU5MWMtOGRmOC00YTdiLWE2ZmQtNmQ4MGRkMTViMWNiIiwiYWRtaW4iLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoicHJvZmlsZSBlbWFpbCIsInNpZCI6ImRkOThiMzFjLTEyMDAtNGZkNC1hNmY3LTYxNDlhMjhhNDdiMCIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwicHJlZmVycmVkX3VzZXJuYW1lIjoic2ltZW9udGVzdGVyIn0.vsYZf3KOANepuJkik98B5tKPaWRkfqiGedsAluKjTfOfPMsIdZPsmBYh1v_187h8IV3avlTXWPQqbEBJ2dEORH3gfcaWRi7wp3tjOs6YSWEfhDKa9nOg0VoeLGCGoM8yokF1F3SuaDlWsRFLrv-kmm_7F88_SU9d6eAJ9iHtdEou2ukKMlTIXYk6MhI-11ujmrf5G1zqXrp7rQKbVnPjfQ6Z1WK0CiPg8e2IqLQWOWjxL4b39BfJlB1CzT6Hu6AT-g0lQ9hHyBP7dh0Vbw7iOWD7BLeJYkcZ_dUO8FmLpg2L9urWtYP9hzBZVf8Z11LgJn3vY1RclUrxYz3VdveV1A',
        }),
      };

      return this.http.delete(environment.apiUrl + endPoint.editPlayer+ '/' + id, options)
    }


}
