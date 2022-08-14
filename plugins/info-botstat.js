let handler = async (m, { conn }) => {
    let wm = global.wm
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)

    let info = `
╭─────[ *Status* ]────✧
├❑ Aktif selama ${uptime}
├❑ Mode : ${global.opts['self'] ? 'Self' : 'publik'}
├❑ ${Object.keys(global.db.data.users).length} Pengguna
├❑ ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length} Chat Terbanned
├❑ ${Object.entries(global.db.data.users).filter(user => user[1].banned).length} Pengguna Terbanned
╰────────────···
    `.trim()
conn.sendButton(m.chat, info, wm, 'Info', '.info', 'Owner', '.owner',m)
conn.reply(info)
}
handler.help = ['botstatus']
handler.tags = ['info']
handler.command = /^(bot456)$/i

export default handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}