export class Persons {
  id: number;
  firstName: string;
  name: string;
  age: number;
  path: string;
  cin: number;
  job: string;

  constructor(
    id = 0,
    firstName = '',
    name = '',
    age = 0,
    path = '',
    cin = 1,
    job = ''
  ) {
    this.id = id;
    this.firstName = firstName;
    this.name = name;
    this.age = age;
    this.path = path;
    this.cin = cin;
    this.job = job;
  }
}
