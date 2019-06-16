import { Component, OnInit } from "@angular/core";
import { BalanceAccount, Voucher, VoucherDetail } from "../../shared/index";
import { VouchersService } from "../voucher.service";
import { ActivatedRoute } from "@angular/router";
import { PersonService } from "../../demos/persons/person.service";

@Component({
  selector: "app-voucher",
  templateUrl: "./voucher.component.html",
  styleUrls: ["./voucher.component.css"],
  providers: [PersonService]
})
export class VoucherComponent implements OnInit {
  voucher: Voucher;

  //Alternative to avoid syntax like: [ngModel]="voucher?.Date"
  // voucher: Voucher = {
  //   ID: 0,
  //   Text: "",
  //   Date: new Date().toString(),
  //   Amount: 0,
  //   Paid: false,
  //   Expense: false,
  //   Remark: false
  // };

  accounts: BalanceAccount[];
  currentDetail: VoucherDetail;

  constructor(private vs: VouchersService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.vs.getVoucher(this.route.snapshot.params["id"]).subscribe(data => {
      this.voucher = data;
      if (this.voucher.Details != null) {
        this.currentDetail = this.voucher.Details[0];
      }
    });

    //Accessing Query Params
    var readonly = this.route.snapshot.queryParams["readonly"];
    console.log(`Page is readonly: ${readonly}`);

    //Accessing Fragments
    var section = this.route.snapshot.fragment;
    if (section != undefined) {
      console.log(`Section to navigate to: ${section}`);
    }
  }

  saveVoucher() {}

  selectDetail(detail) {
    this.currentDetail = detail;
  }

  saveDetail(detail) {
    if (this.voucher.Details.includes(detail)) {
    } else {
      this.voucher.Details.push(detail);
    }
  }
}
