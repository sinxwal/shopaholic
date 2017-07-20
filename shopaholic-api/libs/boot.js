module.exports = app => {
    app.listen(app.get("port"), () => {
        console.log("Server started at PORT " + app.get("port"));
    });
};