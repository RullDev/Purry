let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./sticker/napa.webp')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*Kenapa Bang ?..*', 'status@broadcast')
}

handler.customPrefix = /^(apaan|apa)$/i
handler.command = new RegExp

module.exports = handler
