const { connect } = require('./client');
const { setupInput } = require("./input");

console.log('Connecting ...');
// return conn into constant
const conn = connect();
// ref conn into setupInput
setupInput(conn);