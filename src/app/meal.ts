export class Meal {
 calCount: number;
 date: String;
 mealType: String;
 constructor(){
     

 }

 returnCalCount(){
     return this.calCount;
 }
 setCalCount(calCount: number){
     this.calCount = calCount;
 }
 setDate(date: String){
     this.date = date;

 }
 setMealType(meal: String){
     this.mealType=meal;
 }

}
