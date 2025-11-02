import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './input.html',
  styleUrl: './input.scss'
})
export class Input {
  contactData: {
    name: string,
    email: string,
    message: string
  } = {
      name: "",
      email: "",
      message: ""
    }

  submitted = false;

  onSubmit(ngForm: NgForm) {
    this.submitted = true;
    if (ngForm.valid && ngForm.submitted) {
      console.log(this.contactData);
    }
  }

  onInputChange(){
    console.log("changed");
    
  }
}
