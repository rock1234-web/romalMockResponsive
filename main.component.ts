import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from   '@angular/core';
import { Subscription } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  [x: string]: any;
  public searchSubscription!: Subscription;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.searchSubscription = this.fetchProvidersWithLocation().subscribe(
      () => {
        
      },
      () => {
        
      }
    );
  }
  fetchProvidersWithLocation(){
           let headers = new HttpHeaders();
           headers = headers.append(
             'AuthRequired',
             'yes'
           );
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
