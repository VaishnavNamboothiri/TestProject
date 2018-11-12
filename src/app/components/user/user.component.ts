import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
name :string;
email:string;
company:string;
address : Address;
  constructor() {
    console.log(name);
   }

  ngOnInit() {
this.name = 'vaishnav'
this.address = {
  street : 'street 1',
  city : 'city 1',
  state : 'state 1',
  zip : 123456
}
  }

}

interface Address{
  street : string;
  city : string;
  state: string;
  zip : number;
}