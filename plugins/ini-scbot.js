import fetch from 'node-fetch'
import moment from 'moment-timezone'
let handler = async(m, { conn, text, usedPrefix, command }) => {
   let pp = 'https://telegra.ph/file/afe9c325a811bee8c5530.mp4'
let name = await conn.getName(m.sender)
let pepe = pp ? await (await fetch(pp)).buffer() : Buffer.alloc(0)
let str = `${htki} *SCRIPT* ${htka}\n\n${htjava} ${ucapan()} Kak\n${htjava} Name: ${name.split("@")[0]}\n\n𝑺𝒐𝒖𝒓𝒄𝒆 𝑪𝒐𝒅𝒆 𝑰𝒏𝒊 𝑷𝒓𝒊𝒃𝒂𝒅𝒊\n𝑰𝒏𝒈𝒊𝒏 𝑻𝒂𝒉𝒖 𝑳𝒆𝒃𝒊𝒉 𝑳𝒂𝒏𝒋𝒖𝒕 ?\n𝑻𝒆𝒌𝒂𝒏 𝑻𝒐𝒎𝒃𝒐𝒍 𝑫𝒊 𝑩𝒂𝒘𝒂𝒉 .`
conn.sendHydrated(m.chat, str, wm, pepe, 'https://xnxx.com/', 'Source Code', null, null, [
['𝙼𝙴𝙽𝚄', '/menu'],
['\n sᴇʙᴇɴᴀʀɴʏᴀ ɢᴡ sᴀɴɢᴇ\nᴊᴅɪ ᴍᴀ ɢᴀ ɴɢᴡᴇ sᴀᴍᴀ ɢᴡ?','tq'],
], m, {quoted: fgif})
}
handler.command = ['sc']

export default handler

function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    let res = "Selamat malam 🌙"
    if (time >= 4) {
        res = "Selamat pagi 🌄"
    }
    if (time > 10) {
        res = "Selamat siang ☀️"
    }
    if (time >= 15) {
        res = "Selamat sore 🌅"
    }
    if (time >= 18) {
        res = "Selamat malam 🌙"
    }
    return res
}