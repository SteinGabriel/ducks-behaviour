const mongoose = require('mongoose')

const { Schema } = mongoose

const FedDucksSchema = new Schema(
  {
    food_id: Number,
    location_id: Number,
    foodQty: Number
  },
  { timestamps: true }
)

FedDucksSchema.methods.toJSON = function() {
  return {
    _id: this._id,
    food_id: this.food_id,
    location_id: this.location_id,
    foodQty: this.foodQty,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt
  }
}

mongoose.model('FedDucks', FedDucksSchema)
