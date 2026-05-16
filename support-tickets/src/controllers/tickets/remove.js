export function remove ({ request, response, database }) {
    const { id } = request.params
    
    database.delete("tickets", id)

    return response.end(`Ticket: ${id}, foi removido com sucesso!`)
}