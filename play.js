const { connect } = require('./client');
const { setupInput } = require("./input");
const { connectInitial } = require("./constants");

// Client first connect message
console.log(connectInitial);
// return conn into constant
const conn = connect();
// reference to conn into setupInput
setupInput(conn);