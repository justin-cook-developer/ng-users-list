import { Component, Input } from "@angular/core";

@Component({
  selector: "app-create-user",
  templateUrl: "./create-user.component.html",
  styleUrls: ["./create-user.component.css"],
})
export class CreateUserComponent {
  @Input() addUser: (firstName: string, lastName: string, age: number) => void;

  private _firstName = "";
  private _lastName = "";
  private _age = "";
  private _ageError = "";

  public get firstName(): string {
    return this._firstName;
  }

  public set firstName(firstName: string) {
    this._firstName = firstName;
  }

  public get lastName(): string {
    return this._lastName;
  }

  public set lastName(lastName: string) {
    this._lastName = lastName;
  }

  public get age(): string {
    return this._age;
  }

  public set age(age: string) {
    this._age = age;
  }

  public get ageError(): string {
    return this._ageError;
  }

  public set ageError(ageError: string) {
    this._ageError = ageError;
  }

  private validateAge(age: string): void {
    if (Number.isNaN(parseInt(age, 10))) {
      this.ageError = "Age must be a number.";
    } else {
      this.ageError = "";
    }
  }

  public onAgeChange(age: string): void {
    this.validateAge(age);
    this.age = age;
  }

  public clear(): void {
    this.firstName = "";
    this.lastName = "";
    this.age = "";
  }

  public onSubmit(ev: Event): void {
    ev.preventDefault();

    this.validateAge(this.age);

    if (this.ageError.length === 0) {
      this.addUser(this.firstName, this.lastName, parseInt(this.age, 10));
      this.clear();
    }
  }
}
