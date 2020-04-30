import {Component, Input, OnInit} from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-printorderlabel',
  templateUrl: './printorderlabel.component.html',
  styleUrls: ['./printorderlabel.component.scss']
})
export class PrintorderlabelComponent implements OnInit {

  @Input() orderInfo: any;
  @Input() orderNumber: string;
  @Input() submittedTime: string;
  @Input() orderState: string;
  @Input() shippingGroup: any;

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

}
