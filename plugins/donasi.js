import fetch from 'node-fetch'
let handler = async (m, { conn, command, usedPrefix }) => {
let pp = 'https://telegra.ph/file/8aa7bc27b227bd7307b54.jpg'
let pepe = pp ? await (await fetch(pp)).buffer() : Buffer.alloc(0)
let str = ` ${conn.getName(m.sender)} Want Support Bot?

❏═┅═━–〈 *PAYMENT ↓* }–═┅═━┅
┊
┊ • _*Pulsa/pulse(Tri):*_ ${pulsa}
┊
┊ • _*Dana:*_ ${dana}
┊ • _*Gopay:*_ ${gopay}
┊ • _*Saweria:*_ https://saweria.co/arifzyn
❏━═┅═━––––––๑
*Setelah Melakukan Donasi Kirim Bukti Pembayaran Ke Owner!!*
`
conn.sendHydrated(m.chat, str, author, pepe, 'https://github.com/ArifXZ/', '𝙶𝙸𝚃𝙷𝚄𝙱', null, null, [
['𝙼𝙴𝙽𝚄', '/menu'],
['ᴏᴡɴᴇʀ', '/owner']
], m, {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: wm,jpegThumbnail: Buffer.alloc(0)}}}})

}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler