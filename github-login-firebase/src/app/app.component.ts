import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'github-login-firebase';


  constructor(private auth: AuthService) {
    auth.getUser().subscribe(
      (user) => {
        console.log(user);
      },
      (error) => {
        console.error(error);
      }
    )
  }
}
