import {Injectable} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ConfirmDialogComponent} from "../components/confirm-dialog/confirm-dialog.component";
import {BehaviorSubject, Observable} from "rxjs";
import {IConfirmDialog} from "../interfaces/confirm-dialog";
import {map} from "rxjs/operators";
import {LoadingDialogComponent} from "../components/loading-dialog/loading-dialog.component";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  isLoading = new BehaviorSubject(false);
  constructor(
    private matDialog: MatDialog
  ) {
    this.isLoading.subscribe((value) => {
      if (value) {
        setTimeout(() => {
          this.matDialog.open(LoadingDialogComponent, {
            hasBackdrop: false
          })
        })
      } else {
        this.matDialog.closeAll();
      }
    })
  }

  showLoader() {
    this.isLoading.next(true);
  }

  hideLoader() {
    this.isLoading.next(false);
  }

  confirm(opts?: IConfirmDialog): Observable<boolean>{
    return this.matDialog.open(ConfirmDialogComponent, {
      data: opts
    }).afterClosed()
      .pipe(
        map((result) => result === 'accept')
      )
  }

}
