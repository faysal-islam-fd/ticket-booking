

export const generateSeats =  ( rows, cols) => {
    const seats = [];
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const seat = {
                number: `${String.fromCharCode(65 + i)}${j + 1}`,
                status: Math.random() > 0.3 ? 'available' : 'booked',
            };
            seats.push(seat);
        }
    }
    return seats;
}