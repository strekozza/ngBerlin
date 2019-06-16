import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Person } from "../person";

@Component({
  selector: "app-forms-builder",
  templateUrl: "./forms-builder.component.html",
  styleUrls: ["./forms-builder.component.css"]
})
export class FormsBuilderComponent implements OnInit {
  personForm: FormGroup;
  person: Person = {
    name: "Heinz",
    gender: "male",
    age: 12,
    email: "derschoeneheinz@xyz.at"
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.personForm = this.fb.group({
      name: [this.person.name, Validators.required],
      age: [this.person.age],
      gender: [this.person.gender]
    });

    setTimeout(() => {
      this.person = {
        name: "Heinrich",
        gender: "male",
        age: 12
      };
      this.personForm.setValue(this.person);
      console.log("Heinz changed to Heinrich");
    }, 2000);
  }

  savePerson(formValues) {
    console.log("saving person with values: ");
    console.log(formValues);
    //does not work because of current structure of person obj
    //let person: Person = <Person>formValues;
  }
}
