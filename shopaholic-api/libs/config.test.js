module.exports = {
    database: "shopaholic_test",
    username: "",
    password: "",
    params: {
        dialect: "sqlite",
        storage: "shopaholic.sqlite",
        logging: false,
        define: {
            underscored: true
        }
    },
    jwtSecret: "Ntdf@48ofdvn3S3FGff34REFSd@",
    jwtSession: {session: false},
};