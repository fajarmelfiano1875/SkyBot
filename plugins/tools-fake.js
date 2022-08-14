import fetch from 'node-fetch'
import fs from 'fs'

let handler = async (m, { conn, command, args, text}) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let name = await conn.getName(who)
    let pepe = await conn.profilePictureUrl(who).catch(_ => './src/avatar_contact.png')
  let baper = await fetch(pepe).then(a => a.buffer())
 const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = (await import('@adiwajshing/baileys')).default
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./thumbnail.jpg') }, { upload: conn.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "5838766206142201",
"title": name,
"description": wm,
"currencyCode": "IDR",
"bodyText": wm,
"footerText": wm,
"priceAmount1000": "20000000",
"productImageCount": 100,
"firstImageId": 1,
"salePriceAmount1000": "30000000",
"retailerId": wm,
"url": "wa.me/6282195322106"
},
"businessOwnerJid": "6282195322106@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: ftroli })
conn.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
  }
handler.command = ['tescat']

export default handler

function pickRandom(list) {
        return list[Math.floor(Math.random() * list.length)]
    }