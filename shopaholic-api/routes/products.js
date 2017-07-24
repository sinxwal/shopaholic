module.exports = app => {
    const Products = app.db.models.Products;

    app.route("/products")
        .all(app.auth.authenticate())
        .get((req, res) => {
            // "/products": List products
            Products.findAll({
                where: { user_id: req.user.id }
            })
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({msg: error.message});
                });
        })
        .post((req, res) => {
            // "/products": Save new product
            req.body.user_id = req.user.id;
            Products.create(req.body)
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({msg: error.message});
                });
        });

    app.route("/products/:id")
        .all(app.auth.authenticate())
        .get((req, res) => {
            // "/products/1": Find a product
            Products.findOne({ where: {
                id: req.params.id,
                user_id: req.user.id
            }})
                .then(result => {
                    if (result) {
                        res.json(result);
                    } else {
                        res.sendStatus(404);
                    }
                })
                .catch(error => {
                    res.status(412).json({msg: error.message});
                });
        })
        .put((req, res) => {
            // "/products/1": Update a product
            Products.update(req.body, { where: {
                id: req.params.id,
                user_id: req.user.id
            }})
                .then(result => res.sendStatus(204))
                .catch(error => {
                    res.status(412).json({msg: error.message});
                });
        })
        .delete((req, res) => {
            // "/products/1": Delete a product
            Products.destroy({ where: {
                id: req.params.id,
                user_id: req.user.id
            }})
                .then(result => res.sendStatus(204))
                .catch(error => {
                    res.status(412).json({msg: error.message});
                });
        });
};
