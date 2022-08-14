let handler = async (m) => {
    global.db.data.chats[m.chat].isBanned = false
    m.reply(' *𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐧𝐠𝐡𝐢𝐝𝐮𝐩𝐚𝐧 𝐒𝐊𝐘𝐁𝐎𝐓𝐙 🤖* ')
}


handler.tags = ['owner']
handler.command = /^(boton)$/i

handler.group = true
handler.admin = true

export default handler