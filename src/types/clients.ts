export type ClientType = {
    id: String,
    name: String,
    cellphone: String,
    email: String,
    lat: Number,
    log: Number,
    created_at: Date,
    updated_at: Date
}

export type ListClientsProps = {
    clients: ClientType[];
};