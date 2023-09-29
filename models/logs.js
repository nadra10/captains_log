// STEP 1. IMPORT MONGOOSE
const mongoose = require("mongoose");

// STEP 2. CREATE YOU DATA SCHEMA
const logSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  entry: {
    type: String,
    required: true,
  },
  shipIsBroken: {
    type: Boolean,
  }
});

// STEP 3. CREATE YOUR MODEL USING YOUR SCHEMA
const Log = mongoose.model("Log", logSchema);

// STEP 4. EXPORT YOUR NEWLY CREATED MODEL
module.exports = Log;