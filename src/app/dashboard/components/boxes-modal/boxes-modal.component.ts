import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-boxes-modal',
  templateUrl: './boxes-modal.component.html',
  styleUrls: ['./boxes-modal.component.scss']
})
export class BoxesModalComponent implements OnInit {

  alertType: string;
  alertMessage: string;
  showAlert = false;
  numberOfBoxes: string;
  @Output() closeModalEmmit = new EventEmitter<boolean>();
  @Output() numberBoxesEmmit = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  closeModal(){
    this.closeModalEmmit.emit();
  }

  setBoxes(){
    console.log(this.numberBoxesEmmit.emit(this.numberOfBoxes))
    return this.numberBoxesEmmit.emit(this.numberOfBoxes);
  }

}
