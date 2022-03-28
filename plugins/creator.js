let fs = require('fs')
let handler = async function (m) {
	const fakegrup = {
	key : {
fromMe: false,
participant : '0@s.whatsapp.net',
remoteJid: 'status@broadcast'
},
message: {
locationMessage: {
name: 'Ini Nomor Orang',
jpegThumbnail: fs.readFileSync('./src/IMG-20220322-WA0026.jpg')
  }
 }
}
let list = []
  for (let i of owner.map(v => v + '@s.whatsapp.net')) {
  list.push({
            "displayName": this.getName(i),
            "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${this.getName(i)}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ini Nomor Orang\nEND:VCARD`
          })
  }
        test = await this.sendMessage(m.chat, {
        "displayName": `${list.length} Contact`,
        "contacts": list 
        }, 'contactsArrayMessage', { quoted: fakegrup })
          let buttons = [
  {buttonId: '#menu', buttonText: {displayText: 'Menu'}, type: 1},
  {buttonId: '#donasi', buttonText: {displayText: 'Donasi'}, type: 1},
]
const buttonsMessage = {
    contentText: `
Ini adalah *Owner, Pemilik Bot*. Jadi jangan kira ini bot, itu nomor manusia.
`.trim(),    footerText: `~~~~~`,
    buttons: buttons,
  headerType: 'EMPTY'
}
conn.sendMessage(m.chat, buttonsMessage, 'buttonsMessage', { quoted: test})
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
