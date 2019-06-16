import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) {}

  editorDisplayed: boolean;

  ngOnInit() {
    this.editorDisplayed = false;
  }

  toggelSidebar() {
    this.editorDisplayed = !this.editorDisplayed;
    if (this.editorDisplayed) {
      this.router.navigate(["", { outlets: { sidebaroutlet: "showeditor" } }]);
    } else {
      this.router.navigate(["", { outlets: { sidebaroutlet: null } }]);
    }
  }
}
