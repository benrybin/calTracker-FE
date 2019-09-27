export class Snack {
  calCount: number;

  returnCals() {
    return this.calCount;
  }
  setCalCount(calCount: number) {
    this.calCount = calCount;
  }
}
