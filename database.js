const { Database } = require('quickmongo');
const chalk = require('chalk')
const db = new Database('mongodb+srv://Bunkey:kasi@2008@bunkey.5whuy.mongodb.net/Bunkey');

db.on('ready', () => {
    console.log(chalk.yellowBright(`Connected to database`))
})

module.exports = db;