import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HelloFrontend';
  constructor(private appService: AppService) { }
  showExample() {
    this.appService.getHttp()
    .subscribe(response =>{
      console.log(response)
    })
  }
  postExample() {
    this.appService.postHttp()
    .subscribe(response =>{
      console.log(response)
    })
  }
}
