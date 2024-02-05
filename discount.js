function discountTicketPrice(totalTicket){
    const first100Price = 100;
    const second100Price = 90;
    const remainingPrice = 70;

    if(totalTicket <= 0){
        return "We haven't any ticket to give you."
    }
    else if(totalTicket <= 100){
        const totalPrice = totalTicket * first100Price;
        return totalPrice;
    }
    else if(totalTicket >= 101 && totalTicket <= 200){
        const ticketUpTo100 = totalTicket - 100;
        const ticketUpTo100Price = ticketUpTo100 * second100Price;
        console.log("Total Up To  100 Price is:", ticketUpTo100Price);

        const total100TicketPrice = 100 * first100Price;
        const totalPrice = total100TicketPrice + ticketUpTo100Price;
        console.log("Total 100 Ticket Price Is:", total100TicketPrice);
        return totalPrice;
    }
    else if(totalTicket > 200){
        const ticketUpTo200 = totalTicket - 200;
        const ticketUpTo200Price = ticketUpTo200 * remainingPrice;
        console.log("Total Up To  200 Price is:", ticketUpTo200Price);

        const total101To200TicketPrice = 100 * second100Price;
        console.log("Total 101 To 200 Ticket Price Is:", total101To200TicketPrice);

        const total100TicketPrice = 100 * first100Price;
        console.log("Total 100 Ticket Price Is:", total100TicketPrice);

        const totalPrice = total100TicketPrice + total101To200TicketPrice + ticketUpTo200Price;
        return totalPrice;
    }
}
const perTicket = 220;
const result = discountTicketPrice(perTicket);
console.log(result);