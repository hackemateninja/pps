import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-boxes-modal',
  templateUrl: './boxes-modal.component.html',
  styleUrls: ['./boxes-modal.component.scss']
})
export class BoxesModalComponent implements OnInit {

  @Input() showModal: boolean;
  numberOfBoxes: number;
  alertType: string;
  alertMessage: string;
  showAlert = false;

  constructor() { }

  ngOnInit(): void {
  }

  setBoxes(){

  }

}
