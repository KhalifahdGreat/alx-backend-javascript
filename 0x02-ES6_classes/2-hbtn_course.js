export default class ALXCourse {
  constructor(name, length, students) {
    if (typeof name !== "string") throw new TypeError("Name must be a string");
    if (typeof length !== "number")
      throw new TypeError("Length must be a number");
    if (!Array.isArray(students))
      throw new TypeError("Students must be an array");

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(val) {
    if (typeof val !== "string") throw new TypeError("Name must be a string");
    this._name = val;
  }

  get length() {
    return this._length;
  }

  set length(val) {
    if (typeof val !== "number") throw new TypeError("Length must be a number");
    this._length = val;
  }

  get students() {
    return this._students;
  }

  set students(val) {
    if (!Array.isArray(val)) throw new TypeError("Students must be an array");
    this._students = val;
  }
}
