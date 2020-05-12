import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-upc-modal',
  templateUrl: './upc-modal.component.html',
  styleUrls: ['./upc-modal.component.scss']
})
export class UpcModalComponent implements OnInit {

  showAlert = false;
  alertMessage = "";
  alertType = "";
  @Input() upc: object;
  @Input() showModal: boolean;
  @Output() closeModalEmmit= new EventEmitter<boolean>();
  @Output() validUpc = false;
  valueUPC = "";

  constructor() { }

  ngOnInit(): void {

  }

  closeModal(option: boolean) {
    this.closeModalEmmit.emit(!option)
  }

  validateUPC(){
    // @ts-ignore
    const {upcs} = this.upc;
    if (this.valueUPC.toString() === upcs.toString()){
      this.showAlert = true;
      this.alertMessage = "Validate succes";
      this.alertType = "success";
      setTimeout(()=>{
        this.valueUPC = "";
        this.showAlert = false
        this.closeModal(this.showModal)
      },1000)
      return this.validUpc = true;
    }else {
      this.showAlert = true;
      this.alertMessage = "UPC invalid";
      this.alertType = "danger";
      this.valueUPC = "";
      return this.validUpc = false;
    }
  }

}
