const mongoose = require('mongoose')

const { Schema } = mongoose

const DucksFoodsSchema = new Schema({
  name: String,
  type: String
})

DucksFoodsSchema.method.toJSON = function() {
  return {
    _id: this._id,
    name: this.name,
    type: this.type
  }
}

mongoose.model('DucksFoods', DucksFoodsSchema)
