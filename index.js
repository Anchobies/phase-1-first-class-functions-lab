// Code your solution in this file!
var returnFirstTwoDrivers = (someArray) => {
    const arrayFunc = function() {
        return someArray.slice(0, 2);
    };

    return arrayFunc(someArray);
}

var returnLastTwoDrivers = (someArray) => {
    const arrayFunc = function() {
        return someArray.slice(-2);
    };

    return arrayFunc(someArray);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

var createFareMultiplier = num => {
    return function(fare) { return fare * num };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (drivers, driverCall) => driverCall(drivers);