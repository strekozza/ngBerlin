import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BalanceAccount } from "app/shared/model/model";
import { Voucher, VoucherDetail } from "../../shared/index";
import { VouchersService } from "../voucher.service";

@Component({
  selector: "app-voucher",
  templateUrl: "./voucher.component.html",
  styleUrls: ["./voucher.component.css"]
})
export class VoucherComponent implements OnInit {
  voucher: Voucher = {
    ID: 0,
    Text: "",
    Date: new Date().toString(),
    Amount: 0,
    Paid: false,
    Expense: false,
    Remark: false
  };
  accounts: BalanceAccount[];
  currentDetail: VoucherDetail;

  id: number;
  readonly: true;
  fragments: string;

  constructor(private vs: VouchersService, private route: ActivatedRoute) {}

  ngOnInit() {
    //Change comments to see the diffenent options for processing route data

    this.readRoutes();
    //this.readRoutesObs();
    //this.readResolverObs();
    //this.useResolver();
  }

  readRoutes() {
    //Using Snapshot can lead to "refresh"-issues when using Child Routing and Nested Components

    //Access id param
    let id = this.route.snapshot.params["id"];
    this.vs.getVoucher(id).subscribe(data => {
      this.voucher = data;
      this.setDetail(this.voucher);
    });

    //Accessing Query Params
    this.readonly = this.route.snapshot.queryParams["readonly"];
    console.log(`Page is readonly: ${this.readonly}`);

    //Accessing Fragments
    this.fragments = this.route.snapshot.fragment;
    if (this.fragments != undefined) {
      console.log(`Section to navigate to: ${this.fragments}`);
    }
  }

  readRoutesObs() {
    this.route.params.subscribe(params => {
      this.id = params["id"];
      this.vs.getVoucher(this.id).subscribe(data => {
        this.voucher = data;
        this.setDetail(this.voucher);
      });
    });

    this.route.queryParams.subscribe(qps => {
      this.readonly = qps["readonly"];
      console.log(`Page is readonly: ${this.readonly}`);
    });

    this.route.fragment.subscribe(fg => console.log(fg));
  }

  useResolver() {
    this.voucher = this.route.snapshot.data["voucherData"];
    this.setDetail(this.voucher);
  }

  readResolverObs() {
    this.route.data.subscribe(data => (this.voucher = data["voucher"]));
    this.setDetail(this.voucher);
  }

  setDetail(v: Voucher) {
    if (v.Details != null) {
      this.currentDetail = v.Details[0];
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
