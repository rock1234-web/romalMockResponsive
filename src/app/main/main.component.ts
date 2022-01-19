import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  [x: string]: any;
  public searchSubscription!: Subscription;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchProvidersWithLocation().subscribe(
      (result: any) => {
        console.log(result);
      },
      (error: any) => {}
    );
  }
  fetchProvidersWithLocation() {
    const authheader =
      'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ4eXpAaW5kYnl0ZXMuY29tIiwidXNlclJvbGUiOiIxIiwiZXhwIjoxNjQyNTY5OTMzLCJ1c2VySWQiOjY5MiwiaWF0IjoxNjQwNzY5OTMzfQ.UumkBqHdVL3L_alRIHgbTeKlfOEnXlTr7uUi73jG1nM';

    let headers = new HttpHeaders({
      AuthRequired: 'yes',
      Authorization: authheader,
    });

    const fetchServiceURL =
      'https://sfv6kakwjb.execute-api.ap-south-1.amazonaws.com/dev/smiley_admin/spelling-bee/viewAll';
    // return the http request
    return this.http.get(fetchServiceURL, {
      headers: headers,

      observe: 'response',

      withCredentials: true,
    });
  }
}
