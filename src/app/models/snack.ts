export class Snack {
  calCount: number;
  date: String;
  returnCals() {
    return this.calCount;
  }
  setCalCount(calCount: number) {
    this.calCount = calCount;
  }
  setDate(date: String){
    this.date = date;
  }
}
