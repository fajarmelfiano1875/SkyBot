let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (m.isGroup && m.chat.includes('120363041604217979')) return null
    let user = global.db.data.users[m.sender]
    user.afk = + new Date
    user.afkReason = text
    let caption = `*${conn.getName(m.sender)}* Sekarang lagi AFK${text ? ': ' + text : ''}`
    let kataafk = ['mau turu', 'mau nyolong', 'Ke rumah ayang', 'jagain lilin', 'beli pop es', 'kawin lari', 'main kelereng', 'petak umpet', 'push renk', 'push up joni', 'olahraga', 'onani', 'beraq', 'open bo', 'di suruh emak', 'kerja']
conn.sendButton(m.chat, caption, author, null, [
        ['Ikut Afk', '.afk ' + kataafk.getRandom()]
    ], m)
}
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^afk$/i

export default handler
//tes