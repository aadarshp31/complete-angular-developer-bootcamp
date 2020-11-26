import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service'
import { ToastrService } from 'ngx-toastr'
import {
  faEnvelope,
  faMapMarkedAlt,
  faPhone,
  faDatabase
} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  // user object
  @Input() user

  // icons
  faEnvelope = faEnvelope
  faMapMarkedAlt = faMapMarkedAlt
  faPhone = faPhone
  faDatabase = faDatabase


  constructor(private userService: UserService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  getNewUser() {
    this.userService.getUser().subscribe(
      (user: any) => {
        this.user = user.results[0]
      },
      (error) => {
        this.toastr.error(error, "Something went wrong")
      }
    )
  }

}
