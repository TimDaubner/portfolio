import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [FormsModule, NgStyle,NgClass],
  standalone: true,
  templateUrl: './input.html',
  styleUrl: './input.scss'
})
export class Input {
  contactData: {
    name: string,
    email: string,
    message: string,
    privacy: boolean
  } = {
      name: "",
      email: "",
      message: "",
      privacy: false
    }

  placeholders: string[] = [
    "Your Name",
    "Your Email",
    "Your Message"
  ]

  inputStyles: string[] = [
    'placeholder-default', 'placeholder-default', 'placeholder-default'
  ];

  onSubmit(ngForm: NgForm) {
    if (ngForm.valid) {
      console.log(this.contactData);
    }
  }

  onInputChange(value: string, index: number) {
    if (value != '') return;
    switch (index) {
      case 0:
        this.placeholders[index] = "Your name is required";
        this.inputStyles[index] = "placeholder-error";
        break;
        case 1:
        this.placeholders[index] = "Your email is required";
        this.inputStyles[index] = "placeholder-error";
        break;
        case 2:
        this.placeholders[index] = "Your message is required";
        this.inputStyles[index] = "placeholder-error";
        break;
      default:
        break;
    }
  }
}
