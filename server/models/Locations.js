const mongoose = require('mongoose')

const { Schema } = mongoose

const LocationsSchema = new Schema({
  country: String,
  city: String,
  address: String,
  zipCode: String,
  parkName: String
})

LocationsSchema.method.toJSON = function() {
  return {
    _id: this._id,
    country: this.country,
    city: this.city,
    address: this.address,
    zipCode: this.zipCode,
    parkName: this.parkName
  }
}

mongoose.model('Locations', LocationsSchema)
