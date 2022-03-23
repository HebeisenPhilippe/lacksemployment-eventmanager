export class PlayerRole {
  name: string;

  constructor(input?: any) {
    if (input) {
      this.name = input.name;
    } else {
      this.name = ''
    }
  }
}
