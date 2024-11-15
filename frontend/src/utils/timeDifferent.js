function convertTo24Hour(time) {
    
    const [timePart, modifier] = time.split(" ");
    
    let [hours, minutes] = timePart.split(":");

    if (hours === "12") {
        hours = "00";
    }
    if (modifier === "PM") {
        hours = parseInt(hours, 10) + 12;
    }
 return `${hours.toString().padStart(2, "0")}:${minutes}`;
}

export function calculateTimeDifference(departureTime, arrivalTime) {
    
    const departure = new Date(`1970-01-01T${convertTo24Hour(departureTime)}:00`);
    const arrival = new Date(`1970-01-01T${convertTo24Hour(arrivalTime)}:00`);

    
    let difference = arrival - departure;
    if (difference < 0) {
   
     difference += 24 * 60 * 60 * 1000;
    }
  const hours = Math.floor(difference / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

    if (minutes === 0) {
        return `${hours}h`;
    } else {
        return `${hours}h ${minutes}m`;
    }
}
