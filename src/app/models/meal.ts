export class Meal {
  calCount: number;
  date: string;
  mealType: string;
  constructor() {}

  returnCalCount() {
    return this.calCount;
  }
  setCalCount(calCount: number) {
    this.calCount = calCount;
  }
  setDate(date: string) {
    this.date = date;
  }
  setMealType(meal: string) {
    this.mealType = meal;
  }
}
