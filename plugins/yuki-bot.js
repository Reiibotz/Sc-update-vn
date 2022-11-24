import fetch from 'node-fetch'
import moment from 'moment-timezone'
import fs from 'fs'
let handler = async (m, { conn, command, text }) => {
  let name = await conn.getName(m.sender)
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let pp = await conn.profilePictureUrl(who, 'image').catch((_) => "https://telegra.ph/file/8a1c663c84751c10baf65.jpg")
await conn.sendButton(m.chat, `Halo juga kak ${name} Ada Yang ${await conn.getName(conn.user.jid)} Bisa Bantu?\n`,wm + '\n\n' + botdate, giflogo2, [['MENU','.menu']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: 'https://www.tiktok.com/@always_ntreii?_t=8VvI63a8xaz&_r=1',
                        mediaType: 2,
                        description: 'anu',
                        title: global.titlebot,
                        body: '⚘ ᴄʀᴇᴀᴛᴇ ʙʏ ᴹᴿ᭄ King Of Reii ×፝֟͜×',          previewType: 0,
                        thumbnail: await (await fetch(pp)).buffer(),
                        sourceUrl: 'https://www.tiktok.com/@always_ntreii?_t=8VvI63a8xaz&_r=1'
                      }}
})
}
handler.customPrefix = /^(Hallo|halo|Halo|hallo|hi|helo|hai|hi|Hai|Helo|Hello)$/i
handler.command = new RegExp

export default handler
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Selamat dinihari 🎑"
    if (time >= 4) {
        res = "Good Morning 🌅"
    }
    if (time > 10) {
        res = "Good Afternoon 🏞️"
    }
    if (time >= 15) {
        res = "Good Afternoon 🌇"
    }
    if (time >= 18) {
        res = "Good Evening 🌃" 
    }
    return res
}
