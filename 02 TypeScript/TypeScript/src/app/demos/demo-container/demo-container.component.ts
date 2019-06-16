import { Component, OnInit } from "@angular/core";
import { DemoItem } from "../demo-item";
import { ActivatedRoute, Params } from "@angular/router";
import { DemoService } from "../demo.service";
import { MenuService } from "src/app/shared/menu/menu.service";

@Component({
  selector: "app-demo-container",
  templateUrl: "./demo-container.component.html",
  styleUrls: ["./demo-container.component.scss"]
})
export class DemoContainerComponent implements OnInit {
  title: string = "";
  demoName: string = "";
  componentName: string = "";

  demos: DemoItem[];
  current: DemoItem;
  workbench: any;

  constructor(
    private route: ActivatedRoute,
    private demoService: DemoService,
    public ms: MenuService
  ) {
    this.title = "Building the UI";
  }

  ngOnInit() {
    this.setMenu();
    this.setMetadata();
    this.getWorbenchStyle();
  }

  private setMenu() {
    this.demoService.getItems().subscribe(result => {
      this.demos = result;
    });
  }

  getWorbenchStyle() {
    let result = {};
    this.ms.visible$.subscribe(visible => {
      result = visible
        ? {
            "margin-left": "10px"
          }
        : {};
    });
    return result;
  }

  private setMetadata() {
    this.route.queryParams.subscribe((params: Params) => {
      let c: DemoItem = this.getComponent(params["title"]);
      this.demoName =
        params["title"] != null
          ? `Demo: ${params["title"]} - Component: ${
              c != undefined ? c.component : ""
            }`
          : "Please select a demo";
    });
  }

  // private listenEvents() {
  //   this.events.Panel.subscribe(action => {
  //     switch (action) {
  //       case cmdToggleDemoMenu:
  //         this.showMenu = !this.showMenu;
  //         break;
  //         defaut: break;
  //     }
  //   });
  // }

  getComponent(val): DemoItem {
    if (this.demos != undefined && this.demos != null) {
      return this.demos.find(el => {
        return el.title === val;
      });
    }
  }
}
