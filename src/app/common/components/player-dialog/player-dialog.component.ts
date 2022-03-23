import {AfterViewInit, Component, Inject, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {IPlayerDialog} from "../../interfaces/player-dialog";
import {PlayerService} from "../../services/player.service";
import {PlayerRole} from "../../models/player/player-role";
import {NgForm} from "@angular/forms";
import {IPlayerForm} from "../../interfaces/player-form";

@Component({
  selector: 'app-player-dialog',
  templateUrl: './player-dialog.component.html',
  styleUrls: ['./player-dialog.component.css']
})
export class PlayerDialogComponent implements AfterViewInit {
  @ViewChild('playerForm') playerForm: NgForm | undefined;
  roles: PlayerRole[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IPlayerDialog,
    private playerService: PlayerService,
    private dialogRef: MatDialogRef<PlayerDialogComponent>
  ) {
    this.roles = this.playerService.getRoles();
  }

  ngAfterViewInit(): void {
    const formData: IPlayerForm = {
      name: this.data.player.name,
      role: this.data.player.role.name,
      playerClass: this.data.player.playerClass
    }
    setTimeout(() => {
      this.playerForm?.resetForm(formData)
    })
  }

  dismiss() {
    const responseData: IPlayerForm = this.playerForm?.value;
    responseData.id = this.data.player.id;
    this.dialogRef.close(responseData);
  }

}
