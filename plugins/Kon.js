let handler = async (m, { conn }) => {		
conn.sendButton(m.chat, ` Memek Mu Basah Ya, Memek Kek Memek Ya? `, author, null, [
        ['Coli', `coli`],
        ['Colmek', `colmek`]
        ], m, {quoted: ftroli})
}
handler.command = /^(memek)$/i

export default handler