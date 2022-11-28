const { Pool } = require("pg")

const pool = new Pool({
    connectionString:process.env.db_url
});

module.exports = pool;
