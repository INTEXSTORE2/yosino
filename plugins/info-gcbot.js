import fs from 'fs'
import fetch from 'node-fetch'
 let handler = async(m, { conn }) => { 

         let pp = fs.readFileSync('./thumbnail.jpg')
         let gc1 = 'https://chat.whatsapp.com/JUasnSIppUK8WL1BSHWvX3'
         let caption = `*Mʏ Gᴄ Oғғɪᴄɪᴀʟ*`
         await conn.sendButtonDoc(m.chat, caption, wm, 'Owner', '.owner', m, { contextInfo: { 
             externalAdReply: {
               sourceUrl: `${gc1}`,
               title: 'My Group Official', 
               body: '𝙓𝙔𝙉𝙊𝙎 𝘽𝙊𝙏𝙕𝙕',
               thumbnail: pp
             } 
         }})
         }
 handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^gcbot$/i
 export default handler
