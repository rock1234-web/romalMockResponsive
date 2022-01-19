import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'my-bootsrap-app';
  evenNumber: number[] = [];
  oddNumber: number[] = [];
  constructor(private router: Router) {}
  ngOnInit() {}
  onFired(NO: number) {
    console.log(NO);
    if (NO % 2 === 0) {
      this.evenNumber.push(NO);
    } else {
      this.oddNumber.push(NO);
    }
  }
}
