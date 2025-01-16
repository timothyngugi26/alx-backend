#!/usr/bin/node

const redis = require('redis');

// Create a Redis client
const client = redis.createClient();

// Handle connection errors
client.on('error', (err) => {
  console.error('Redis client not connected to the server:', err);
});

// Confirm connection
client.on('connect', () => {
  console.log('Redis client connected to the server');
});

// Function to set a new key-value pair in Redis
function setNewSchool(schoolName, value) {
  client.set(schoolName, value, redis.print); // Use redis.print to log confirmation
}

// Function to display the value of a given key
function displaySchoolValue(schoolName) {
  client.get(schoolName, (err, result) => {
    if (err) {
      console.error('Error retrieving value:', err);
    } else {
      console.log(`${schoolName}: ${result}`);
    }
  });
}

// Call functions as specified
displaySchoolValue('ALX');
setNewSchool('ALXSanFrancisco', '100');
displaySchoolValue('ALXSanFrancisco');

