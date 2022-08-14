import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let name = await conn.getName(who)
    let thumbnail = fs.readFileSync('./thumbnail.jpg')
    let ke1 = global.db.data.users[who].limit
    let ke2 = global.db.data.users[who].exp
    let ke3 = global.db.data.users[who].money
    
    conn.sendButton(m.chat, ` *Halo* ${name.split("@")[0]} ${ucapan()}
${htki} Sisa Limit/Money ${htka}
❏––––––––––––––––––––·•
┊🌌 Limit : ${ke1}
┊✨ Exp : ${ke2}
┊💵 Money : ${ke3}
•·–––––––––––––––––––––·•
┊Kamu dapat membeli limit dengan 
┊#buy limit *jumlah* 
•·–––––––––––––––––––––·•
┊ *Example :*
┊#buy limit 1
•·–––––––––––––––––––––·•
┊ *Note :*
┊• Harga 1 limit = $2500 Money 
❏–––––––––––––––––––––·•

Jan Spam!!`, author, hwaifu.getRandom(), [
        ['Beli', '.buy'],
        ['Menu', `${usedPrefix}menu`]
    ], m, {quoted: fgif})
}
handler.help = ['limit [@user]']
handler.tags = ['xp']
handler.command = /^(limit)$/i
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

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}