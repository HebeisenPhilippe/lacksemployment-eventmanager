import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {Player} from "../../common/models/player/player";
import {PlayerService} from "../../common/services/player.service";
import {PlayerDialogComponent} from "../../common/components/player-dialog/player-dialog.component";
import {IPlayerDialog} from "../../common/interfaces/player-dialog";
import {IPlayerForm} from "../../common/interfaces/player-form";
import {AppService} from "../../common/services/app.service";
import { marker as _ } from '@biesbjerg/ngx-translate-extract-marker';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = ['No', 'Player', 'Class', 'Role', 'Action'];
  players: Player[] = [];

  constructor(
    private appService: AppService,
    private playerService: PlayerService,
    private dialog: MatDialog
  ) { }


  ngOnInit(): void {
    this.getPlayers();
  }

  getPlayers(): any {
    this.appService.showLoader();
    this.playerService.getPlayers()
      .subscribe(
        data => this.players = data,
        error => console.log(error.message),
        () => this.appService.hideLoader()
      )
  }

  createPlayer(): void {
    const data: IPlayerDialog = {
      title: _('Create a New Player'),
      saveButtonText: _('Create'),
      player: new Player()
    }
    this.dialog.open(PlayerDialogComponent, {
      width: '250px',
      data
    }).afterClosed()
      .subscribe(
        (formData: IPlayerForm | undefined) => {
          if (formData !== undefined) {
            this.storePlayer(formData);
          }
        },
        error => console.log(error.message)
      );
  }

  editPlayer(player: Player): void {
    const data: IPlayerDialog = {
      title: _(`Edit Player`),
      saveButtonText: _('Update'),
      player
    }
    this.dialog.open(PlayerDialogComponent, {
      width: '250px',
      data
    }).afterClosed().subscribe(
      (formData: IPlayerForm | undefined) => {
        if (formData !== undefined) {
          this.updatePlayer(formData);
        }
      }
    );
  }

  deletePlayer(player: Player): void {
    this.appService.confirm()
      .subscribe((isAccepted) => {
        if (isAccepted) {
          this.removePlayer(player);
        }
      })
  }


  private storePlayer(data: IPlayerForm) {
    this.appService.showLoader();
    this.playerService.store(data).subscribe(
      response => this.getPlayers(),
      error => console.log(error.message),
      () => this.appService.hideLoader()
    )
  }

  private updatePlayer(data: IPlayerForm) {
    this.appService.showLoader();
    this.playerService.update(data).subscribe(
      response => this.getPlayers(),
      error => console.log(error.message),
      () => this.appService.hideLoader()
    )
  }

  private removePlayer(player: Player) {
    this.appService.showLoader();
    this.playerService.delete(player).subscribe(
      response => this.getPlayers(),
      error => console.log(error.message),
      () => this.appService.hideLoader()
    )
  }
}
