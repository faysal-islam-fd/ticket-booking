export function formatDate(dateInput) {
    // Convert dateInput to a Date object if it's not already
    const date = dateInput instanceof Date ? dateInput : new Date(dateInput);

    // Array of days and months for formatting
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    // Extract day of the week, date, and month
    const dayOfWeek = days[date.getDay()];
    const day = String(date.getDate()).padStart(2, "0");
    const month = months[date.getMonth()];

    // Format the date as "Day, DD MMM"
    return `${dayOfWeek}, ${day} ${month}`;
}

