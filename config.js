const dbConfig = {
    user: 'admin',
    password: 'system',
    database: 'asset_management',
    host: 'localhost',
    port: 5432,
    max: 10, // maximum number of clients in the pool
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
  };
  
  module.exports = dbConfig;
  