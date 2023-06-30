import { Component } from '@angular/core';
//import {FormsModule} from '@angular/forms';
import {TODO} from "./Todo";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularProjectHitesh';
  date = new Date();
  todoValue:string;
  list:TODO[];
  isDisabled:boolean =true;
  ngOnInit()
  {
    this.list = [];
    this.todoValue="";
  }

  addItem()
  {
    if (this.todoValue !=="")
    {
      const newItem:TODO = {
        id:Date.now(),
        value:this.todoValue,
        isDone:false 
      };
      this.list.push(newItem);
    }
    this.todoValue = "";
  }

  deleteItem(id:number)
  {
    this.list = this.list.filter(item=> item.id!==id);
  }

  Oncheck()
  {
    console.log("Its checked",this.isDisabled);
    this.isDisabled = false;
  }

  GFG_Fun() {
    let up = document.getElementById('GFG_UP');
    let string = document.getElementsByTagName('html')[0].innerHTML
    let base64String = window.btoa(string);//innerHTML;
    //alert(string);
    console.log(base64String)
    alert(base64String);

  }
}
