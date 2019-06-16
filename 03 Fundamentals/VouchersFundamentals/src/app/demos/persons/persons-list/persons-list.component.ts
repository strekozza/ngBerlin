import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Person } from "../person";

@Component({
  selector: "app-persons-list",
  templateUrl: "./persons-list.component.html",
  styleUrls: ["./persons-list.component.css"]
})
export class PersonsListComponent implements OnInit {
  constructor() {}

  @Input()
  persons: Person[];
  @Output()
  personSelected: EventEmitter<Person> = new EventEmitter();

  ngOnInit() {}

  selectPerson(p: Person) {
    this.personSelected.emit(p);
  }
}
