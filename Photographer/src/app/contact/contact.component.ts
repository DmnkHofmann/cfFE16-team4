import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact = new FormGroup({
    Name: new FormControl("",[Validators.required, Validators.minLength(3)]),
    eMail: new FormControl("",Validators.required),
    textArea: new FormControl("", [Validators.required, Validators.minLength(2)]),
  })
  
  constructor() { }
  ngOnInit(): void {
  }

submitForm() {
  if (this.contact.valid) {
     var a = this.contact.value;
  console.log(a);
  }
}
}