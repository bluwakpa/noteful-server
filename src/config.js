module.exports = {
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    DATABASE_URL: process.env.DATABASE_URL || 'postgres://ligrgkbzvzywgv:ba397808a2bedbd5e84cb575c0c79008e28844a57767d50d884d1fb2f89e4098@ec2-52-71-231-37.compute-1.amazonaws.com:5432/djsp12hb80hjk',
    TEST_DATABASE_URL: process.env.TEST_DATABASE_URL || 'postgresql://postgres@localhost/noteful-test'
}