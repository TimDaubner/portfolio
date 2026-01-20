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
    this.translate.get(['FORM.NAME', 'FORM.EMAIL', 'FORM.MSG']).subscribe(translations => {
      this.placeholders = [
        translations['FORM.NAME'],
        translations['FORM.EMAIL'],
        translations['FORM.MSG']
      ];
    });
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
            this.onSubmitSend();
            setTimeout(() => {
              ngForm.resetForm();
              this.onResetForm();
            }, 2000);
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      this.onResetForm();
      ngForm.resetForm();
    }
  }

  onSubmitSend() {
    for (let i = 0; i < this.placeholders.length; i++) {
      switch (i) {
        case 0:
          this.placeholders[i] = this.translate.instant('FORM.SEND_NAME');
          this.inputStyles[i] = "placeholder-success";
          break;
        case 1:
          this.placeholders[i] = this.translate.instant('FORM.SEND_EMAIL');
          this.inputStyles[i] = "placeholder-success";
          break;
        case 2:
          this.placeholders[i] = this.translate.instant('FORM.SEND_MSG');
          this.inputStyles[i] = "placeholder-success";
          break;
      }
    }
  }

  onResetForm() {
    this.resetController();
    for (let i = 0; i < this.placeholders.length; i++) {
      switch (i) {
        case 0:
          this.placeholders[i] = this.translate.instant('FORM.NAME');
          this.inputStyles[i] = "placeholders-default";
          break;
        case 1:
          this.placeholders[i] = this.translate.instant('FORM.EMAIL');
          this.inputStyles[i] = "placeholders-default";
          break;
        case 2:
          this.placeholders[i] = this.translate.instant('FORM.MSG');
          this.inputStyles[i] = "placeholders-default";
          break;
      }

    }
  }

  resetController() {
    this.name.control.markAsUntouched();
    this.name.control.markAsPristine();
    this.email.control.markAsUntouched();
    this.email.control.markAsPristine();
    this.msg.control.markAsUntouched();
    this.msg.control.markAsPristine();
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
