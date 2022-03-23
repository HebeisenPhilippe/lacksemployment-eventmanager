import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table'
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { PlayerDialogComponent } from './components/player-dialog/player-dialog.component';
import {FormsModule} from "@angular/forms";
import {CommonModule as AngularCommon} from "@angular/common";
import { LoadingDialogComponent } from './components/loading-dialog/loading-dialog.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";
import {TranslateModule} from "@ngx-translate/core";

const modules = [
  MatTableModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatButtonModule,
  MatSelectModule,
  MatProgressSpinnerModule,
  FormsModule,
  AngularCommon,
  MatToolbarModule,
  MatMenuModule,
  TranslateModule
]


@NgModule({
  imports: [...modules],
  exports: [...modules],
  declarations: [
    PlayerDialogComponent,
    LoadingDialogComponent,
    ConfirmDialogComponent
  ]
})

export class CommonModule { }
