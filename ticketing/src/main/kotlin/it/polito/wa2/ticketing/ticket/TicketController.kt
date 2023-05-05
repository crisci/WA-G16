package it.polito.wa2.ticketing.ticket

import it.polito.wa2.ticketing.message.Message
import it.polito.wa2.ticketing.utils.TicketStatus
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.*

@RestController
class TicketController(val ticketService: TicketService) {
    @PutMapping("/tickets/{idExpert}/{ticketId}/stop")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    fun ticketMakeReassignable(@PathVariable("idExpert") idExpert : Long,@PathVariable("ticketId") ticketId : Long){
        //ToDo("check the idExpert")
        return ticketService.reassignTicket(ticketId,idExpert)
    }
    @PutMapping("/tickets/{idExpert}/{ticketId}/close")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    fun ticketCloseByExpert(@PathVariable("idExpert") idExpert : Long,@PathVariable("ticketId") ticketId : Long){
        //ToDo("check the idExpert")
        return ticketService.closeTicket(ticketId,idExpert)
    }
    @GetMapping("/tickets/{idExpert}/{ticketId}/messages")
    @ResponseStatus(HttpStatus.OK)
    fun getMessages(@PathVariable("idExpert") idExpert : Long,@PathVariable("ticketId") ticketId : Long): List<Message> {
        //ToDo("check the idExpert")
        return ticketService.getMessages(ticketId,idExpert)
    }
    @GetMapping("/tickets/{idExpert}/{ticketId}/status")
    @ResponseStatus(HttpStatus.OK)
    fun getStatus(@PathVariable("idExpert") idExpert : Long,@PathVariable("ticketId") ticketId : Long): TicketStatus {
        //ToDo("check the idExpert")
        return ticketService.getStatus(ticketId,idExpert)
    }
}