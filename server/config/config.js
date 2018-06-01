const dbSettings = {
  database    : process.env.RDS_DB_DATABASE || 'test',
  username    : process.env.RDS_DB_USERNAME || 'test',
  password    : process.env.RDS_DB_PASSWORD || 'test',
  options: {
    host    : process.env.RDS_DB_HOST || 'test',
    port    : process.env.RDS_DB_PORT || 'test',
    dialect : 'mssql',
    dialectOptions:{
      encrypt : process.env.DB_ENCRYPT || false
    },
    pool: {
      min : 10,
      max : 300,
      idle: 30000,
    },
    // logging: process.env.NODE_ENV !== 'test' // disable query logging during testing
  }
}




const oktaSettings = {
  orgUrl: process.env.OKTA_ORGANIZATION_URL    || 'test',
  clientId: process.env.OKTA_CLIENT_ID         || 'test',
  clientSecret: process.env.OKTA_CLIENT_SECRET || 'test',
  apiToken: process.env.OKTA_API_TOKEN         || 'test',
}



module.exports = Object.assign({}, { dbSettings, oktaSettings });
