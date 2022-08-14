import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `「 *APA?* 」`
await conn.reply(m.chat, info, m, { quoted: fgif, contextInfo: { externalAdReply: { showAdAttribution: true, title: botdate, body: bottime, sourceUrl: snh, thumbnail: fs.readFileSync('./thumbnail.jpg') }}})
}
handler.customPrefix = /^(p|pe|pee|pp|ppp)$/i
handler.command = new RegExp

export default handler