import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular 6';
  constructor(private http: HttpClient) { }
  url="https://dev.azure.com/msSREPM/onepm/_apis/wit/workItems/7/comments";
  httpData:any;
  ngOnInit() {
    this.http.get<Kafein[]>(this.url).subscribe(data => {
      this.httpData=data;
    })

  }

}
interface Kafein {
  name:string;
  address:string;
}