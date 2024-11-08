{
  class Car {
    constructor(public make: string, public model: string, public year: number) {}
    getCarAge() {
      const crntYear = new Date().getFullYear();
      return crntYear - this.year;
    }
  }

  // Sample Input 1:
  const car = new Car("Honda", "Civic", 2018);
  console.log(car.getCarAge());
  //   car.getCarAge();
}
