class Classroom {
  constructor(className, classUnit, classCapacity) {
    this.className = className;
    this.classUnit = classUnit;
    this.classCapacity = classCapacity;
  }
}
class softEngineeringClass extends Classroom {
  constructor(className, classUnit, classCapacity, project) {
    super(className, classUnit, classCapacity);
    this.project = project;
  }
}
class networkClass extends Classroom {
  constructor(className, classUnit, classCapacity, book) {
    super(className, classUnit, classCapacity);
    this.book = book;
  }
}
const softEngineering = new softEngineeringClass("sofEngineering", 3, 50, true);
const network = new networkClass("network", 3, 30, "network-book");

console.log(softEngineering);
console.log(network);
