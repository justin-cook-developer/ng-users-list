import { Component } from "@angular/core";
import { v4 as uuid } from "uuid";

export class User {
  constructor(
    private _id: string,
    private _firstName: string,
    private _lastName: string,
    private _age: number
  ) {}

  public get id(): string {
    return this._id;
  }

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

  public get age(): number {
    return this._age;
  }

  public set age(age: number) {
    this._age = age;
  }
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  private _users: User[] = [
    new User(uuid(), "Justin", "Cook", 22),
    new User(uuid(), "Blake", "Adams", 21),
  ];

  public get users(): User[] {
    return this._users;
  }

  public set users(users: User[]) {
    this._users = users;
  }

  public addUser(firstName: string, lastName: string, age: number): void {
    this._users.push(new User(uuid(), firstName, lastName, age));
  }

  public deleteUser(user: User): void {
    this.users = this.users.filter((u: User): boolean => u.id !== user.id);
  }
}
