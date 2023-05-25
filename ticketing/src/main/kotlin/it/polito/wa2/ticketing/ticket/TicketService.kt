package it.polito.wa2.ticketing.ticket

import it.polito.wa2.ticketing.message.MessageDTO
import it.polito.wa2.ticketing.utils.TicketStatus
import java.util.UUID

interface TicketService {
    fun getTicketsWithMessagesByCustomerId(customerId: UUID): Set<TicketWithMessagesDTO>?
    fun reassignTicket(ticketId: Long, idExpert: UUID)
    fun closeTicket(ticketId: Long, idExpert: UUID)
    fun getMessages(ticketId: Long, idExpert: UUID): List<MessageDTO>
    fun getStatus(ticketId: Long): TicketStatus

}