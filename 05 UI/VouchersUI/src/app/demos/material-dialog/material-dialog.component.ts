import { Component, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material";
import { MatStepper } from "@angular/material/stepper";
import { CalculatorComponent } from "./calculator/calculator.component";

@Component({
  selector: "app-material-dialog",
  templateUrl: "./material-dialog.component.html",
  styleUrls: ["./material-dialog.component.scss"]
})
export class MaterialDialogComponent implements OnInit {
  ngOnInit(): void {}
  @ViewChild("stepper", { static: true }) stepper: MatStepper;

  amount: number = 100;
  name: string;
  calculated: boolean = false;
  msg: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    let dialogRef = this.dialog.open(CalculatorComponent, {
      width: "40vw",
      data: { name: "Customer", amount: this.amount }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.msg = `Thank you for exchanging ${result} €`;
      this.calculated = true;
      this.stepper.next();
    });
  }
}
