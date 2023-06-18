export class Packagist {
  env: string;
  constructor(n: string) {
    this.env = n;
  }
  init(): string {
    return this.env;
  }
}
