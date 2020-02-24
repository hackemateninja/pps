import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  stores = [
    {
      id: 91,
      name: 'Sunrise',
    },
    {
      id: 92,
      name: 'Sunrise',
    },
    {
      id: 93,
      name: 'Sunrise',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
