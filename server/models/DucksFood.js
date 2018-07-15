const mongoose = require('mongoose')

const { Schema } = mongoose

const DucksFoodSchema = new Schema({
  name: String,
  type: String
})

DucksFoodSchema.method.toJSON = function() {
  return {
    _id: this._id,
    name: this.name,
    type: this.type
  }
}

mongoose.model('DucksFood', DucksFoodSchema)
