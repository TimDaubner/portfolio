import { NgClass } from '@angular/common';
import { Component, inject, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { LangChangeEvent, TranslatePipe, TranslateService } from '@ngx-translate/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
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

  @ViewChild('name') name!: NgModel;
  @ViewChild('email') email!: NgModel;
  @ViewChild('msg') msg!: NgModel;

  isCommitted = false;

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
    'FORM.NAME',
    'FORM.EMAIL',
    'FORM.MSG'
  ]

  inputStyles: string[] = [
    'placeholder-default', 'placeholder-default', 'placeholder-default'
  ];

  mailTest = false;

  post = {
    endPoint: 'https://tim-daubner.de/api/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  langSub: any;

  ngOnInit() {
    this.langSub = this.translate.onLangChange.subscribe(() => {
      this.updatePlaceholders();
    });

    this.updatePlaceholders();
  }

  ngOnDestroy() {
    this.langSub.unsubscribe();
  }

  updatePlaceholders() {
    this.placeholders = [
      this.translate.instant('FORM.NAME'),
      this.translate.instant('FORM.EMAIL'),
      this.translate.instant('FORM.MSG')
    ];

    this.inputStyles = ['placeholder-default', 'placeholder-default', 'placeholder-default'];
  }

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.isCommitted = true;
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
    this.isCommitted = false;
    switch (index) {
      case 0:
        if (this.name.valid) return;
        this.placeholders[index] = this.translate.instant('FORM.NAME_REQUIRED');
        this.inputStyles[index] = "placeholder-error";
        break;
      case 1:
        if (this.email.valid) return;
        this.placeholders[index] = this.translate.instant('FORM.EMAIL_REQUIRED');
        this.inputStyles[index] = "placeholder-error";
        break;
      case 2:
        if (this.msg.valid) return;
        this.placeholders[index] = this.translate.instant('FORM.MSG_REQUIRED');
        this.inputStyles[index] = "placeholder-error";
        break;
      default:
        break;
    }
  }
}
