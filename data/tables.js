let restaurant = {
    tables: [],
    get reservations() {
        return this.tables
    },
    set reservations(data) {
        this.tables.push(data)
    }
}

module.exports = restaurant