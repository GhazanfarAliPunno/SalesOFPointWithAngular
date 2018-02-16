import { Component } from '@angular/core';
import { itemDiscription } from './itemdetail.model'
import { stockList } from './stockCalculation.model'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app';
  currentSelectedItem: itemDiscription = new itemDiscription('', 0);
  quantity: number = 0;
  index: number;
  item: string = '';
  dropDownValue = '';
  itmName: string = '';
  itmPrice: number;
  srNumber: number = 1;
  totalItemPrice: number;
  netPrice: number = 0;

  startValueOfDropDown: string = 'Select Items'
  stockCalculation: stockList[] = [];
  //kia ma is appcomponent class k bhr bh ye necha wali class ki array create kr skta hn?
  //ma ny agr object bnana ho model class ka to wo kia asa bna ga itemDiscrition a=new itemDiscription();

  itemsList: itemDiscription[] = [
    { itemName: 'Soup', itemPrice: 10 },
    { itemName: 'Biscuit', itemPrice: 20 },
    { itemName: 'Shampo', itemPrice: 30 },
    { itemName: 'Perfume', itemPrice: 40 }
  ];

  onDropdownChange(dropValue: Event) {
    console.log(dropValue);
  
    this.index = (<HTMLSelectElement>dropValue.target).selectedIndex;
    console.log(this.index);
    if(this.index==0)
    {
      alert("Please select valid item");
    }
    else{
      this.currentSelectedItem = this.itemsList[this.index-1];
      
      this.itmName = this.currentSelectedItem.itemName;
      this.itmPrice = this.currentSelectedItem.itemPrice;
    }
    
    
   
   

  }

  addItemsDetails(even: Event) {

    if (this.index>=1)
    {
    this.totalItemPrice = this.itmPrice * this.quantity;
    this.netPrice = this.netPrice + this.totalItemPrice;
    console.log(this.stockCalculation);
    this.stockCalculation.push(new stockList(this.srNumber, this.itmName, this.itmPrice, this.quantity, this.netPrice));
    this.srNumber = this.srNumber + 1;
    this.totalItemPrice = 0;
    }
    else{
      alert("Please Select valid Item")
    }

  }
}




