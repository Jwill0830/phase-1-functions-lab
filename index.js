// Code your solution in this file!

// helpers.js is required at the top of your test file, so I assume it sets up the testing environment.
// If it also includes the 'expect' function, then you don't need to require it separately.

function distanceFromHqInBlocks(blockNumber) {
    return Math.abs(42 - blockNumber);
  }
  
  function distanceFromHqInFeet(blockNumber) {
    return distanceFromHqInBlocks(blockNumber) * 264;
  }
  
  function distanceTravelledInFeet(start, end) {
    return Math.abs(start - end) * 264;
  }
  
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }
  
  // You can export these functions if you need to use them in other files
  module.exports = {
    distanceFromHqInBlocks,
    distanceFromHqInFeet,
    distanceTravelledInFeet,
    calculatesFarePrice
  };
  