module.exports = {
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    DATABASE_URL: process.env.DATABASE_URL || 'postgres://cyudxoeygssjlj:9c1bb5cabddcd35181203c2c7c4617e278b5fa20fee47f0555e27cfed451b11c@ec2-3-211-245-154.compute-1.amazonaws.com:5432/dd3fqhd1591q3s',
    TEST_DATABASE_URL: process.env.TEST_DATABASE_URL || 'postgresql://postgres@localhost/noteful-test'
}