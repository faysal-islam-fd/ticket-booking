

export function calculateTimeDifference(departureTime, arrivalTime) {
    // Convert time strings to Date objects on the same day for easier calculation
    const departure = new Date(`1970-01-01T${departureTime}`);
    const arrival = new Date(`1970-01-01T${arrivalTime}`);

    // Calculate the difference in milliseconds
    let difference = arrival - departure;

    // If the difference is negative, arrival is on the next day (e.g., overnight trip)
    if (difference < 0) {
        difference += 24 * 60 * 60 * 1000; // Add 24 hours in milliseconds
    }

    // Convert difference to hours and minutes
    const hours = Math.floor(difference / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

    if (minutes === 0) {
        return `${hours}h`;
    } else {
        return `${hours}h ${minutes}m`;
    }
}
