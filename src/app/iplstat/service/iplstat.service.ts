import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from 'src/app/model/player.model';
import { RoleAmount } from 'src/app/model/roleAmount.module';
import { TeamAmount } from 'src/app/model/teamamount.model';

@Injectable({
  providedIn: 'root'
})
export class IplstatService {

  constructor(private http: HttpClient) { }

  getTeamAmountDetails(): Observable<TeamAmount[]> {
    return this.http.get<TeamAmount[]>('https://yhc-ipl-api.herokuapp.com/ipl/stat/amountbyeachlabel');
  }
  getRoleAmountDetails(label:string):Observable<RoleAmount[]> {
    return this.http.get<RoleAmount[]>('https://yhc-ipl-api.herokuapp.com/ipl/stat/amountcountbyeachteamrole?label='+label);
  }

  getPlayers(label:string):Observable<Player[]> {
    return this.http.get<Player[]>('https://yhc-ipl-api.herokuapp.com/ipl/stat/playersbylabel?label='+label);
  }
}
