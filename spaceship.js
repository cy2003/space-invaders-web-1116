class Spaceship {
  constructor(name, crew, phasers, shields, cloaked = false, warpDrive = `disengaged`, docked = true, phasersCharge = `uncharged`){
  this.name = name
  this.crew = crew
  this.phasers = phasers
  this.shields = shields
  this.cloaked = cloaked
  this.warpDrive = warpDrive
  this.docked = (this.crew.length <= 0 ? true:false)
  this.phasersCharge = phasersCharge

  for (let i = 0; i < this.crew.length; i++){
    this.crew[i].currentShip = this
  }
}

}
  //
  // this.crew.forEach()


//   Dog.prototype.bark = function(){
//   return "Woof!"
// }
  // this.phasersCharge = if (this.crew.length > 0){
  //   (this.crew.forEach(function(element, index, array) {
  //     if (element.position ==== `Gunner`) {
  //       "charged"
  //       }
  //     else {
  //       "uncharged"
  //       }
  //     }))
  // }
