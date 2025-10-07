module.exports = {
    HOST: "localhost",
    USER: "root",
    //PASSWORD: "javilanz1986.",
    PASSWORD: " ",
    DB: "bickeshop",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    }
};