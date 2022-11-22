import fetch from 'node-fetch'

let handler = async (m) => {
    let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/f38f1ce61e1e674e20e94.png')
    //let wibu = `https://api.zacros.my.id/randomimg/loli`
    let res = await fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/neko.txt')
    let txt = await res.text()
    let arr = txt.split('\n')
    let zeen = arr[Math.floor(Math.random() * arr.length)]
    let thumb = await(await fetch(zeen)).buffer()
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
let tqto = `*▸ - - - —「 BIG THANKS TO 」— - - - ◂*
*❉ Adiwajshing:*
*❉ Nurutomo:*
*❉ Istikmal:* 
*❉ Ariffb:*
*❉ Ilman:*
*❉ Amirul:*
*❉ Rasel:*
*❉ Fatur:*
*❉ Rominaru:*
*❉ Kannachann:*
*❉ The.sad.boy01:*
*❉ Ameliascrf:*
*❉ Fokus ID:*
*❉ Johannes:*
*❉ BrunoSobrino:*
*❉ Krisna:*
*❉ LitRHap:*
*❉ Rlxfly:*
*❉ Aine:*
*❉ Papah-Chan:*
*▸ - - - —「 Penulis Ulang 」— - - - ◂*
*❉ IYAN*
*▸ - - - —「 Thanks For Suhu 」— - - - ◂*
*❉ Kannachan:*
*❉ The.sadboy.01
*❉ Papah-Chan:*
*❉ Johannes:*
*❉ Jarot:*
*❉ Krisna:*
*❉ Oscar-Md:*

`
conn.sendButtonDoc(m.chat, tqto, wm,'Thanks','Bilek', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://Instagram.com/intexstore25",
    mediaType: "VIDEO",
    description: "https://Instagram.com/intexstore25", 
    title: '𝙎𝙚𝙞𝙠𝙖 𝘽𝙤𝙩𝙯𝙯',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sgc
}
} })
        }
handler.help = ['tqto']
handler.tags = ['main','info']
handler.command = /^(credits|credit|thanks|thanksto|tqto)$/i
export default handler
