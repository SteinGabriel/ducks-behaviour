const mongoose = require('mongoose')

const { Schema } = mongoose

const DucksFoodSchema = new Schema({
  name: String,
  type: String,
  quantity: Number
})

DucksFoodSchema.method.toJSON = function() {
  return {
    _id: this._id,
    name: this.name,
    type: this.type,
    quantity: this.quantity
  }
}

mongoose.model('DucksFood', DucksFoodSchema)
