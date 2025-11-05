import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-input',
  imports: [FormsModule, NgClass, TranslatePipe],
  standalone: true,
  templateUrl: './input.html',
  styleUrl: './input.scss'
})
export class Input {
  private translate = inject(TranslateService);

  http = inject(HttpClient);

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

  mailTest = true;

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            //create dialog 
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
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
