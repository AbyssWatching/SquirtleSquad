module.exports = (sequelize, Sequelize) => {
    const pokemonCard = sequelize.define("pokemonCard", {
        card_id: {
            type: Sequelize.String,
            primaryKey: true,
            autoIncrement: true
        },
        poke_id: {
            type: Sequelize.String,
            allowNull: false
        },
        name: {
            type: Sequelize.String,
            allowNull: false
        },
        types: {
            type: Sequelize.String,
            allowNull: false
        },
        stats: {
            type: Sequelize.String,
            allowNull: false
        }

    })
}