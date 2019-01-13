import {bindable, bindingMode} from 'aurelia-framework';

export class FurnitureTable {
  constructor() {
    this.furnituresSelected = [];
  }

  @bindable({ defaultBindingMode: bindingMode.twoWay }) furnitures;

  get volumeTotal() {
    return this.furnitures.reduce((total, furniture) => total + furniture.volume, 0) || 0;
  }

  furnitureMatcher(a, b) {
    return a.isEqual(b);
  }

  removeFurniture(furniture) {
    let index = this.furnitures.indexOf(furniture);
    if (index !== -1) {
      this.furnitures.splice(index, 1);
    }
  }

  removeSelectedFurnitures() {
    for (let i = 0; i < this.furnituresSelected.length; i += 1) {
      for (let j = 0; j < this.furnitures.length;) {
        if (this.furnituresSelected[i].isEqual(this.furnitures[j])) {
          this.furnitures.splice(j, 1);
          break;
        }
        j += 1;
      }
    }
    this.furnituresSelected = [];
  }
}
