import {Player} from "../models/player/player";

export interface IPlayerDialog {
  title: string;
  saveButtonText: string;
  cancelButtonText?: string;
  player: Player;
}
