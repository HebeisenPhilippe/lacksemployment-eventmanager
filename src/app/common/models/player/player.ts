import {PlayerRole} from "./player-role";

export class Player {
  id?: number;
  name: string;
  playerClass: string;
  role: PlayerRole

  constructor(input?: any) {
    if (input) {
      this.id = input.id;
      this.name = input.name;
      this.playerClass = input.playerClass
      this.role = new PlayerRole({name: input.role})
    } else {
      this.name = '';
      this.playerClass = ''
      this.role = new PlayerRole()
    }
  }
}
