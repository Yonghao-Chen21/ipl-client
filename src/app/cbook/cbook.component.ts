import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Contact } from '../model/contact.model';

@Component({
  selector: 'app-cbook',
  templateUrl: './cbook.component.html',
  styleUrls: ['./cbook.component.css']
})
export class CbookComponent implements OnInit {

  statusFlag = true;
  submitted = false;
  contacts:Contact[] = [
      {
        "name":"Krirsh",
        "email":"krish.t@gmail.com",
        "mobile":"9876543211",
        "city":"Bangalore"
      },
      {
        "name":"Manoj",
        "email":"manoj.pvn@gmail.com",
        "mobile":"9876543111",
        "city":"Bangalore"
      },
      {
        "name":"Balu",
        "email":"balu.m@gmail.com",
        "mobile":"9876541111",
        "city":"Bangalore"
      }
  ]
  contact = this.fb.group({
    name: ['',Validators.required],
    email: ['',Validators.required],
    mobile:['',Validators.required],
    city:['']
  });
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  addContact(){
      this.submitted = true;
      let userContact:Contact=this.contact.value;
      this.contacts.push(userContact);
      this.contact.reset();
      this.submitted = false;
  }
  deleteContact(email:string){
      let index = this.indexOf(email);

      if(index != -1){
        let flag=window.confirm("Are you sure do you want to delete "+email);
        if(flag){
          this.contacts.splice(index,1);
        }
      }
  }
  editContact(econtact:Contact){
    
      if(this.statusFlag){
        this.statusFlag = false;
      }
      this.contact.setValue(econtact);
  }
  updateContact(){
    let index = this.indexOf(this.contact.value.email);

      if(index != -1){
        this.contacts[index] = this.contact.value;
        this.statusFlag = !this.statusFlag;
        this.contact.reset();
      }
     
      
  }
  indexOf(email:string){
      let index=-1;
      for(let i=0;i<this.contacts.length;i++){
          let contact = this.contacts[i];
          if(contact.email === email){
              index = i;
              return index;
          }
      }
      return index;

  }

  get f(){
    return this.contact.controls;
  }

}
