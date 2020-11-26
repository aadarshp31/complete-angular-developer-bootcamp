import { Component, OnInit } from '@angular/core'
import { UserService } from 'src/app/services/user.service'
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'random-card'
  user: any

  constructor(private userService: UserService, private toastr: ToastrService) { }

  ngOnInit() {
    this.userService.getUser().subscribe(
      (user: any) => {
        console.log(user);
        this.user = user.results[0]
      },
      (error) => {
        this.toastr.error(error.status, "Something went wrong!")
      }
    )
  }
}
