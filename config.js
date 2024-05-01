const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "94741897654"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Lahore Pak'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '923184070915' 
global.devs = '923184070915';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUprVU5UdkZHVFFiYnNUSmVvcnlrVFU5V3Z2Y0Iyb2ZzZFpQc25ROTFVTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWU8xaTJiTmZBYm9PNURUZVZvL1kybW45QVFtT1BXWW5PekV5VzhtUC9Cbz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVRUR2d0ZXTnYySm0rWlBKQVdtUDc2NFFhamNRanNnU252ZCtKamJaRUdRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvZGpBdzcyYm56a1JWY21DMEU3VS9XMTBJM1VmYmRoUTFyYlo0UnJXZng0PSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVIZ2dxb1pueWZ1V1pKR2NObFIvTk5HZ0RUY2ZDRFZoSXNKVmYzQjh5bEk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFLRGJqUFU5Qy93bnlwS0lOeDRmOG95U3R2bkF0ZEthU3k1V0VqZlkxUlE9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzRmVnMWpyYVJjZzF2ckN2a040dlR3ZDFDK3l6ZENnQmFSSm05cEtHSFVvQXVDbnpJZXJqaXc0eHFYYVJpNXdveUF3OG04QjJNREVpWWdYTXBFSWpBdz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjE4OCwiYWR2U2VjcmV0S2V5IjoiVEFaVkhyWGg2V0NLRjBycC9xd3NhQXVjYmlhOHZyVkVrTjVJWHZlMEgwbz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiWTNfQ1VxYWdUM1MxckpfczJneFF3ZyIsInBob25lSWQiOiIzYTdlNGYyZS1jYzU2LTQxYjMtYTI0Ni01YTI2Y2Q0Nzg5N2MiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN01nMkc1ei9XM2hCbFZTWU8wRGVoS1ZJRlBJPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrb0hBV3BJWjMwV1AvTHcxeXZNcXlUYlV4dk09In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNJRGRqZWtHRU1PSXlyRUdHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJVbWFjSUU5WmQ5MHZNT053ODZPdlhWbWZGQklzeXFHTG5zeC9pNlZrWlM4PSIsImFjY291bnRTaWduYXR1cmUiOiJ3TXpac05jUzhWdjBKTDVaTWZLMzV6bjFYOFNWSTY1eVJBZldPZHQzUER3Sng2d0JSdFh4VWVVWUg3dDNsdzFxZndXa013QzZoc1hiQUZ2TXRPWWlCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiVEYxVDFRZXErRnF3TzN6TGRpSDA1TVZTWjFKd0U1aWpQbGhUMEwzU0VxK2hzS05XMmJnNTFieXdWSmJvWE5rWkNESDVZM0ljdVlFTmtFcmE2d0pLQnc9PSJ9LCJtZSI6eyJpZCI6Ijk0NzQxODk3NjU0OjIyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ii0+8J2QjC7wnZCRfHwg8J2QkfCdkITwnZCD8J2QiPCdkJjwnZCAPC0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NDE4OTc2NTQ6MjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVkptbkNCUFdYZmRMekRqY1BPanIxMVpueFFTTE1xaGk1N01mNHVsWkdVdiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxNDU4NjY5NH0= ",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  '',
  packname:  process.env.PACK_NAME || '',
   
  botname:   process.env.BOT_NAME === undefined ? "𝐌.𝐑 𝐑𝐄𝐃𝐈𝐘𝐀" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'salmanytofficial' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
