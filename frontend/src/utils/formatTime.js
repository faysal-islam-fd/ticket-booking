

export function formatTime(timeInput) {
    // Convert timeInput to a Date object if it's not already
    const date = timeInput instanceof Date ? timeInput : new Date(`1970-01-01T${timeInput}`);

    // Extract hours and minutes
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");

    // Determine AM or PM suffix
    const period = hours >= 12 ? "PM" : "AM";

    // Convert to 12-hour format
    hours = hours % 12 || 12; // Converts "0" to "12" for midnight and noon

    // Format time with hours, minutes, and AM/PM
    
    return `${hours}:${minutes} ${period}`;
}
