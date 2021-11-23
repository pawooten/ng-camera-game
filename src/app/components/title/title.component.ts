import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  appBaseHref = environment.appBaseHref;
  title = environment.appTitle;
  version = environment.appVersion;
  copyrightText = `Copyright ${environment.appAuthor} 2021`;
  
  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
  }

}
