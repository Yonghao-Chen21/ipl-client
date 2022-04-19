import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  message = "Learning Angular Data Binding";
  url = "https://angular.io/assets/images/logos/angular/logo-nav@2x.png";
  status = "ON";
  username="Please enter your name";

  courses = ["Java","Hadoop","Angular","Spring Boot"];
  statusurl = 'https://www.w3schools.com/Js/pic_bulbon.gif';

  employees = [
          {
            "ename":"Krish",
            "doj":Date.now(),
            "salary":5000
          },
          {
            "ename":"Manoj",
            "doj":Date.now(),
            "salary":8000
          },
          {
            "ename":"Nareen",
            "doj":Date.now(),
            "salary":10000
          }

  ]

  constructor() { }

  ngOnInit(): void {
  }
  changeStatus(){
      this.status = this.status == "ON" ? "OFF" : "ON";
      
  }


}
