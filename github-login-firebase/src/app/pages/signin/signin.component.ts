import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    const { email, password } = f.form.value

    // Validations goes here
    if (!f.form.valid) {
      throw this.toastr.error('Please fill all the fields carefully', 'Validation failed!')
    }

    this.auth.signin(email, password)
      .then(res => {
        this.router.navigateByUrl('/')
        console.log(res);
        this.toastr.success('Signin Successfull!')
      })
      .catch(error => {
        console.error(error);
        this.toastr.error("Something went wrong! \n", error.message)
      })
  }

}
