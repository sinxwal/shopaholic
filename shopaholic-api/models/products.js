module.exports = () => {
    return {
        findAll: (params, callback) => {
            return callback([
                { id: 1, name: "Item 1" },
                { id: 2, name: "Item 2" },
                { id: 3, name: "Item 3" },
            ]);
        }
    };
};