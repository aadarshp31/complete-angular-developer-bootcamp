import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: any = null
  userName: string = ''
  Error: any = null



  constructor(private githubService: GithubService, private changeRef: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  findGithubUser() {
    this.githubService.getUserByUserName(this.userName).subscribe(
      (user) => {
        this.user = user
        this.Error = null
        this.changeRef.detectChanges()
      },
      (error) => {
        this.Error = "User not found"
        this.user = null
        this.changeRef.detectChanges()

      }
    )
  }

}
