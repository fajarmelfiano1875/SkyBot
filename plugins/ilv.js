let handler = async (m, { conn }) => {
let caption = `I Love You TO Kak`
await conn.sendButton(m.chat, caption, author, null, [
        ['Menu', `#menu`]
        ], m, {quoted: ftroli})
}
handler.customPrefix = /^(Iloveyou|love)$/i
handler.command = new RegExp

export default handler