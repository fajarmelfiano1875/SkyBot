let handler = async (m, { conn, text }) => {
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
    try {
    conn.sendFile(m.chat, global.API('https://api.lolhuman.xyz/api/attp?apikey=23da99980e886110feac66dd&text=${text}'), m, false, { asSticker: true })
    } catch {
    conn.sendFile(m.chat, global.API(`https://anabotofc.herokuapp.com/api/maker/attp?apikey=AnaBot&text=${teks}`), 'attp.webp', '', m, false, { asSticker: true })
    }
    
}
handler.help = ['attp <teks>']
handler.tags = ['sticker']

handler.command = /^attp$/i

export default handler