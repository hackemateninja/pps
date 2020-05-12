import {Component, Input, OnInit, Output} from '@angular/core';


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
  @Output() validUpc = false;
  valueUPC = "";

  constructor() { }

  ngOnInit(): void {

  }

  validateUPC(){
    // @ts-ignore
    const {upcs} = this.upc;
    if (this.valueUPC.toString() === upcs.toString()){
      this.showAlert = true;
      this.alertMessage = "Validate succes";
      this.alertType = "success";
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
