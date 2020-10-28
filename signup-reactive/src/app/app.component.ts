import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { passwordChecker } from './custom-validators/password-checker'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'signup-reactive'

  signupForm: FormGroup
  submitted = false

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      acceptTandC: [false, Validators.requiredTrue]
    }, {
      validators: passwordChecker('password', 'confirmPassword')
    })
  }

  get h() {
    return this.signupForm.controls;
  }

  onSubmit() {
    this.submitted = true
    if (this.signupForm.invalid) {
      return
    }

    console.table(this.signupForm.value)
    console.table(this.signupForm)

    console.log("Success Signup\n" + JSON.stringify(this.signupForm.value));
  }

  onReset() {
    this.submitted = false
    this.signupForm.reset()
  }
}
