import { Furniture } from './resources/furniture';

export class App {
  constructor() {
    this.name = '';
    this.id = 0;
    this.length = null;
    this.width = null;
    this.height = null;
    this.furnitures = [];
    this.furnituresSelected = [];
  }

  addFurniture() {
    if (this.name && this.length && this.width && this.height) {
      this.furnitures.push(new Furniture(
        this.id,
        this.name,
        this.length,
        this.width,
        this.height)
      );
      this.id += 1;
      this.name = '';
      this.length = '';
      this.width = '';
      this.height = '';
    }
  }

  get volume() {
    if (this.length && this.width && this.height) {
      return `${this.length * this.width * this.height / 1000000} m3`;
    }
    return '';
  }
}
