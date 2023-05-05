package it.polito.wa2.ticketing.customer

import it.polito.wa2.ticketing.ticket.Ticket
import it.polito.wa2.ticketing.ticket.TicketDTO
import it.polito.wa2.ticketing.ticket.toDTO
import java.time.LocalDate

data class CustomerDTO(
    val id: Long?,
    val first_name: String,
    val last_name: String,
    val email: String,
    val dob: LocalDate?,
    val address: String,
    val phone_number: String,
    val listOfTicket: Set<TicketDTO>
)

fun Customer.toDTO(): CustomerDTO {
    return CustomerDTO(getId(),first_name,last_name,email,dob,address,phone_number,listOfTicket.map { it.toDTO() }.toSet())
}