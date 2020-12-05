import { Component, OnInit, Input, OnChanges, ChangeDetectorRef } from '@angular/core';
import { GithubService } from 'src/app/services/github.service'

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss']
})
export class ReposComponent implements OnInit, OnChanges {
  @Input() repoUrl: string = ''
  repos: any[] = []

  constructor(private githubService: GithubService, private changeRef: ChangeDetectorRef) { }

  ngOnInit(): void { }

  ngOnChanges(): void {
    if (this.repoUrl) {
      this.githubService.getUserRepo(this.repoUrl).subscribe(
        (repos: any) => {
          this.repos = repos
          this.changeRef.detectChanges()
        },
        (error) => { console.error(error) }
      )
    }
  }

}
