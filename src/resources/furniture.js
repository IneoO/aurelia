export class Furniture {
  constructor(id, name, length, width, height) {
    this.id = id;
    this.name = name;
    this.length = length;
    this.width = width;
    this.height = height;
  }

  isEqual(furniture) {
    return this.id === furniture.id;
  }

  get volume() {
    return this.length * this.width * this.height / 1000000;
  }
  set volume(volume) {
  }
}
