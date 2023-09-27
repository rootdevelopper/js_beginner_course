
// if, else if, else

const maxSpeed = 100; // Miles per hour

function speeding(actualSpeed){
    let excessOfSpeed = false;

    if( actualSpeed > maxSpeed){
        console.log("You are getting a speeding ticket");
        excessOfSpeed = true;
    } else if(actualSpeed === maxSpeed){
        console.log("You are getting a speeding warning");
        excessOfSpeed = false;
    } else {
        console.log("You were going under the speed limit ");
        excessOfSpeed = false;
    }

    return excessOfSpeed;
}


module.exports = { speeding, }