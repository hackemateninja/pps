import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-title-container',
  templateUrl: './title-container.component.html',
  styleUrls: ['./title-container.component.scss']
})
export class TitleContainerComponent implements OnInit {

  @Input() title: string;
  @Input() description: string;
  constructor() { }

  ngOnInit(): void {
  }

}
