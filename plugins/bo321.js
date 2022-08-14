let handler = async (m, { conn }) => {		
conn.sendButton(m.chat, ` _*On Kak!!*_ `, author, null, [
        ['Menu', `#menu`]
        ], m, {quoted: ftroli})
}
handler.customPrefix = /^(bot|bott)$/i
handler.command = new RegExp

export default handler