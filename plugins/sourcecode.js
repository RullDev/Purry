let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'Source code')).buffer(), `
𝖧𝖺𝗁, 𝗌𝖼 ? 𝖼𝗈𝖻𝖺 𝗇𝗎𝗇𝗀𝗀𝗂𝗇𝗀 𝖺𝗃𝖺 𝖽𝖾𝖼𝗄 🐦
`.trim(), 'Lihatlah dia, tahun ini masih ngemis sc wkwk..', 'Owner', '#owner')
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sourcecode|sc|scbot|script|github)$/i

module.exports = handler
