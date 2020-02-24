import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent implements OnInit {

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
    {
      id: 94,
      name: 'Sunrise',
    },
    {
      id: 95,
      name: 'Sunrise',
    },
    {
      id: 96,
      name: 'Sunrise',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }



}
