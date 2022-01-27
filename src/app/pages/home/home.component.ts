import { DialogComponent } from '../../common/dialog/dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PlayerServices } from '../../services/players.services';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = ['No', 'Player', 'Class', 'Role', 'Action'];
  dataSource: any[] = [];
  playerName: string = '';
  playerClass: string = '';
  playerRole: string = '';

  constructor(
    private playerService: PlayerServices,
    private http: HttpClient,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.gettingPlayer();
  }

  gettingPlayer(): any {
    this.playerService.getPlayers().subscribe((data: any) => {
      if (data.length > 0) {
        this.dataSource = data;
      }
    }, (err) => {
      console.log(err.message);
    })
  }

  addPlayer(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: { title: 'Enter The Detail', AddOrEdit: 'Add' },
    });

    dialogRef.afterClosed().subscribe(result => {
      this.addingPlayer(result);
    });
  }

  addingPlayer(data: any): any {
    this.playerService.addPlayer(data).subscribe((data: any) => {
      console.log(data)
      console.log("Player Added");
      this.gettingPlayer();
    }, (err: any) => {
      console.log(err.message);
    });
  }

  editPlayer(element: any): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: { AddOrEdit: 'Save', title: 'Edit The Detail', id: element.id, playerName: element.name, playerClass: element.playerClass, playerRole: element.role },
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      this.editingPlayer(result);
    });
  }

  editingPlayer(data: any) {
    this.playerService.editPlayer(data).subscribe((data: any) => {
      console.log("Player Edited");
      this.gettingPlayer();
    }, (err: any) => {
      console.log(err.message);
    });
  }

  deletePlayer(id: any) {
    this.playerService.deletePlayer(id).subscribe((data: any) => {
      console.log("Player Deleted");
      this.gettingPlayer();
    }, (err: any) => {
      console.log(err.message);
    });
  }

}
