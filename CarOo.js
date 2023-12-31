class Vehicle
{
    constructor(make,model,year)
    {
        this.make = make
        this.model = model;
        this.year = year;
    }
    honk(){return "Beep";}

    toString(){return this.make,this.model,this.year;}

}

class Car extends Vehicle
{
    constructor(make, model, year, numWheels)
    {
        super(make, model, year, numWheels);
        this.numWheels = 4;
    }
}


class Motorcycle extends Vehicle
{
    constructor(make, model, year, numWheels)
    {
        super(make, model, year, numWheels);
        this.numWheels = 2;
    }

    revEngine(){return "VROOM!";}
}

class Garage extends Vehicle
{
    constructor(vehicles, capacity)
    {
        this.vehicles = [];
        this.capacity = capacity;
    }

    add(newVehicle)
    {
        if (!(newVehicle instanceof Vehicle)) {
            return "Only vehicles are allowed in here!";
          }
          if (this.vehicles.length >= this.capacity) {
            return "Sorry, we're full.";
          }
          this.vehicles.push(newVehicle);
          return "Vehicle added!";
    }
}