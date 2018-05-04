class Rocket {
  constructor(fuel, metal){
    this.fuel = fuel
    this.metal = metal
  }

  makeRocket() {
    var fuel_count = Math.floor(this.fuel / 3)
    var metal_count = Math.floor(this.metal / 4)
    if (fuel_count < metal_count){
      console.log(fuel_count)
      return fuel_count
    }else{
      console.log(metal_count)
      return metal_count
    }
  }
}

class SpaceShattle extends Rocket
{
  constructor(fuel, metal){
   super(fuel, metal)
  }

  launch() {
   var rocket_number = super.makeRocket()
   alert(`スペースシャトルを${rocket_number}つ打ち上げた`)
  }
}