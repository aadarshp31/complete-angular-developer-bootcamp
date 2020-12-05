import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr'
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  email: any = null

  constructor(
    private auth: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.auth.getUser().subscribe(user => {
      this.email = user?.email
    })
  }

  ngOnInit(): void { }

  async handleSignout() {
    try {
      await this.auth.signout()
      this.router.navigateByUrl('/signin')
      this.toastr.info('Sign in again to continue')
      this.email = null
    } catch (error) {
      this.toastr.error('Something went wrong')
    }
  }

}
