function Class(className, classUnit, classCapacity) {
  this.className = className;
  this.classUnit = classUnit;
  this.classCapacity = classCapacity;
}
const softEngineeringClass = new Class("sofEngineering", 3, 50);
const networkClass = new Class("network", 5, 20);

console.log(softEngineeringClass);
console.log(networkClass);
