import { Component, OnInit } from "@angular/core";
import { ChartingService } from "../charting.service";

@Component({
  selector: "app-using-thirdparty",
  templateUrl: "./charting.component.html",
  styleUrls: ["./charting.component.scss"],
  providers: [ChartingService]
})
export class ChartingComponent implements OnInit {
  constructor(private rs: ChartingService) {}

  data: DiagramData[];
  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = "Month";
  showYAxisLabel = true;
  yAxisLabel = "Revenue / €";

  colorScheme = {
    domain: ["#5AA454", "#A10A28", "#C7B42C", "#AAAAAA"]
  };

  onSelect(event) {
    console.log(event);
  }

  ngOnInit() {
    this.data = this.rs.getData();
  }
}
