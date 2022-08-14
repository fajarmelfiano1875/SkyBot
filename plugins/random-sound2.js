import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
m.reply('𝐖𝐚𝐢𝐭, *𝑻𝒖𝒏𝒈𝒈𝒖 𝑺𝒆𝒃𝒆𝒏𝒕𝒂𝒓 𝑲𝒂𝒌*')
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

let audio = `https://raw.githubusercontent.com/saipulanuar/Api-Github/main/audio/${command}.mp3`
await conn.sendFile(m.chat, audio, audio + '.mp3', wm, m, null, { fileLength: fsizedoc, seconds: fsizedoc, mimetype: 'audio/mp4', contextInfo: {
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' + ucapan,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: audio
     }}
  })
}

handler.command = handler.help = [
'anjay2',
'ara-ara2',
'ara-ara-cowok2',
'ara-ara3',
'arigatou2',
'assalamualaikum2',
'asu2',
'ayank2',
'aku-ngakak2',
'bacot2',
'bahagia-aku2',
'baka2',
'bansos2',
'beat-box2',
'beat-box2',
'biasalah2',
'bidadari2',
'bot2',
'buka-pintu2',
'canda-anjing2',
'cepetan2',
'cuekin-terus2',
'daisuki-dayo2',
'daisuki2',
'dengan-mu2',
'gaboleh-gitu2',
'gak-lucu2',
'gamau2',
'gay2',
'gelay2',
'gitar2',
'gomenasai2',
'hai-bot2',
'hampa2',
'hayo2',
'hp-iphone2',
'i-like-you2',
'ih-wibu2',
'india2',
'karna-lo-wibu2',
'kiss2',
'kontol2',
'ku-coba2',
'maju-wibu2',
'makasih2',
'mastah2',
'nande-nande2',
'nani2',
'ngadi-ngadi2',
'nikah2', 'nuina2',
'onichan2',
'owner-sange2',
'ownerku2',
'pak-sapardi2',
'pale2',
'pantek2',
'pasi-pasi2',
'punten2',
'sayang2',
'siapa-sih2',
'sudah-biasa2',
'summertime2',
'tanya-bapak-lu2',
'to-the-bone2',
'wajib2',
'waku2',
'woi2',
'yamete2',
'yowaimo2',
'yoyowaimo2'
]
handler.tags = ['random']
handler.owner = false
export default handler