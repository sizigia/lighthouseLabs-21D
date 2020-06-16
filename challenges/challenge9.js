/**
 * The function, carPassing(cars, speed), takes in an array of car objects,
 * and the speed of a car as it passes the sensor.
 * It creates a new object with a property called speed,
 * and another property called time 
 * and add it to the cars array. 
 * 
 * @param {*} cars - An array consisting of objects with time and speed properties.
 * @param {*} speed - Integer representing the speed of a car as it passes the sensor.
 */
const carPassing = (cars, speed) => {
    let newCar = {
        time: Date.now(),
        speed: speed,
    };
    cars.push(newCar);

    return cars;
};

module.exports = carPassing;