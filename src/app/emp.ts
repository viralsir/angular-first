export class Emp{

   constructor(public name:string,public age:any,public salary:number) {
   }

   calculateDA():number{
     return this.salary*0.10;
   }



}
