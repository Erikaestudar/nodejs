import { randomUUID } from "node:crypto"

export function create({ request, response }) {
    const { equipment, description, user_name} = request.body

    const ticket = {
        id: randomUUID(),
        equipment,
        description,
        user_name,
        status: "open",
        create_at: new Date(),
        update_at: new Date(),
    }

    return response.end(JSON.stringify(ticket))
}