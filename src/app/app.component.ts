import { Component, Inject } from '@angular/core';
import { LotteryService } from 'src/app/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-new-angular-app'; 
  // defined properties like 'any' type. I could set like list of integers, that will be -> number[] 
  numbers : any;
  winNumbers : any;

  // Empty constructor with service like parameter
  constructor(@Inject(LotteryService) private service : LotteryService) {

  }

  // ngOnInit function who executes when we get app.component.html page - in this app that is home page.
  // Here, we are calling our service, function GetNumbers() and when it executed we are that value set for our 'numbers' property
  ngOnInit() {
    this.service.GetNumbers().subscribe((response) => {
      console.log(response);
      this.numbers = response
    });
  }

  // Same process like in previous method/function. We are calling service to get win numbers with service's method -> GetWinNumbers
  // When we get response (list of win numbers), we set that value in property 'winNumbers'
  getWinNumbers() {
    this.service.GetWinNumbers().subscribe((response) => {
      this.winNumbers = response
    });
  }

  // Help function for setting background color for all numbers
  // This method is so simple developed. In some other case - i will create in backend model with two properties: Value and Color. 
  // For example, we can set Color like Enum property where 1 - 5 would be colors from text in task. 
  // Here, we could in app.component.html we would set -> n.Color in [ngStyle]
  public getColor(index :number) : string {
    if(index > 0 && index <= 8) {
      index = 0;
    }
    if(index >= 9 && index <= 18) {
      index = 1;
    }
    if(index >= 19 && index <= 28) {
      index = 2;
    }
    if(index >= 29 && index <= 38) {
      index = 3;
    }
    if(index >= 39 && index <= 48) {
      index = 4;
    }
    switch(index) { 
      case 0 : return "#808080"
      case 1 : return "#6495ED"
      case 2 : return "#FFC0CB" 
      case 3 : return "#7FFF00"
      case 4 : return "#FFFF00"
      default: return "#abc"
    }
  }
}
