import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {IConfirmDialog} from "../../interfaces/confirm-dialog";
import {marker as _} from "@biesbjerg/ngx-translate-extract-marker";

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent {
  strings: IConfirmDialog = {
    title: _('Are you sure?'),
    confirmButtonText: _('Yes'),
    cancelButtonText: _('No')
  }
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: IConfirmDialog
  ) {
    Object.assign(this, data);
  }


}
