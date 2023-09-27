
// Switch statement
// Function to determine if a day is a weekday or weekend day
function isWeekday(day) {
    switch (day.toLowerCase()) {
      case "monday":
      case "tuesday":
      case "wednesday":
      case "thursday":
      case "friday":
        return "Weekday";
      case "saturday":
      case "sunday":
        return "Weekend";
      default:
        return "Invalid day";
    }
  }
  
  module.exports = isWeekday;
  