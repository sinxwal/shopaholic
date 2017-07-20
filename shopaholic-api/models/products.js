module.exports = (sequelize, DataType) => {

    const Products = sequelize.define("Products", {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
    });

    Products.associate = (models) => {
        Products.belongsTo(models.Users);
    };

    return Products;
};
