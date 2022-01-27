import {Component, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HomeComponent } from '../../pages/home/home.component';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent  {

  roles: any[] = [
    {text: 'RANGED', value: 'RANGED'},
    {text: 'MELEE', value:'MELEE'},
    {text: 'HEALER', value:'HEALER'},
    {text: 'TANK', value: 'TANK'},

  ];
  playerRoleChange: any = '';

  constructor(
    public dialogRef: MatDialogRef<HomeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {};

  ngOnInit(): void {
    if(this.data.playerRole) {
      this.playerRoleChange = this.data.playerRole;
    }

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  changeRole(role: any): any {
    this.data.playerRole = role;
  }


}
