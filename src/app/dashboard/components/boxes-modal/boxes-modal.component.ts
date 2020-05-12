import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

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
  @Output() closeModalEmmit = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  closeModal(option: boolean){
    this.closeModalEmmit.emit(option);
  }

  setBoxes(){
    this.closeModal(this.showModal);
  }

}
