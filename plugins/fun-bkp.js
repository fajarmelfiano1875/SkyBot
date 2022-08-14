let handler = async (m, { conn }) => {		
let res = await conn.getFile('https://yog-apikey.herokuapp.com/api/bokep?apikey=YogGanz')
conn.sendButton(m.chat, `Result Nih ${command}`.tri(), author, null, [['🔄 Next 🔄', `/${command}`]], m)}
}
handler.help = ['bkp']
handler.tags = ['bokep']

handler.command = /^(bkp)$/i
handler.premium = false
handler.register = true
handler.limit = 20

export default handler