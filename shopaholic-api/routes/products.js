module.exports = app => {
    const Products = app.db.models.Products;

    app.get("/products", (req, res) => {
        Products.findAll({}).then((products) => {
            res.json({ products });
        });
    });
};
