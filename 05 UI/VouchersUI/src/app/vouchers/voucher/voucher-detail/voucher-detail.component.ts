import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { VoucherDetail, BalanceAccount } from '../../../shared/index';

@Component({
  selector: 'app-voucher-detail',
  templateUrl: './voucher-detail.component.html',
  styleUrls: ['./voucher-detail.component.css']
})
export class VoucherDetailComponent implements OnInit {
  @Input() detail : VoucherDetail;
  @Input() accounts: BalanceAccount[];
  @Output() detailSaved : EventEmitter<VoucherDetail> = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
    console.log(this.accounts)
  }

  saveDetail(d: VoucherDetail){
    this.detailSaved.emit(d);
  }

}
