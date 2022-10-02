//═══════════════════════════════════════════════════════//
require('./settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const dgxeon = require('xfarr-api')

//rpg function\\
   const { 
     addInventoriDarah, 
      cekDuluJoinAdaApaKagaDiJson, 
      addDarah, 
      kurangDarah, 
     getDarah 
   }  = require('./storage/user/darah.js')
   const { 
     cekInventoryAdaAtauGak, 
      addInventori,  
       addBesi, 
       addEmas, 
       addEmerald,
       addUmpan,
       addPotion,
       kurangBesi, 
       kurangEmas, 
       kurangEmerald, 
       kurangUmpan,
       kurangPotion,
       getBesi, 
      getEmas, 
     getEmerald,
     getUmpan,
    getPotion
   } = require('./storage/user/alat_tukar.js')
   const { 
    addInventoriMonay, 
    cekDuluJoinAdaApaKagaMonaynyaDiJson, 
    addMonay, 
    kurangMonay, 
   getMonay 
   } = require('./storage/user/monay.js')
   const { 
    addInventoriLimit, 
    cekDuluJoinAdaApaKagaLimitnyaDiJson, 
    addLimit, 
    kurangLimit, 
    getLimit 
   } = require('./storage/user/limit.js')
   const { 
    cekDuluHasilBuruanNya, 
     addInventoriBuruan, 
     addIkan,
      addAyam, 
      addKelinci, 
      addDomba, 
      addSapi,
      addGajah,
      kurangIkan,
      kurangAyam, 
      kurangKelinci, 
      kurangDomba, 
      kurangSapi,
      kurangGajah,
      getIkan,
      getAyam, 
      getKelinci, 
      getDomba,
     getSapi,
    getGajah
   } = require('./storage/user/buruan.js')
   let DarahAwal =  global.rpg.darahawal
   const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)   
   const isCekDarah = getDarah(m.sender)
   const isUmpan = getUmpan(m.sender)
   const isPotion = getPotion(m.sender)
   const isIkan = getIkan(m.sender)
   const isAyam = getAyam(m.sender)
   const isKelinci = getKelinci(m.sender)
   const isDomba = getDomba(m.sender)
   const isSapi = getSapi(m.sender)
   const isGajah = getGajah(m.sender)
   const isMonay = getMonay(m.sender)
   const isLimit = getLimit(m.sender)
   const isBesi = getBesi(m.sender)
   const isEmas = getEmas(m.sender)
   const isEmerald = getEmerald(m.sender)
   const isInventory = cekInventoryAdaAtauGak(m.sender)
   const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
   const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
   const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
   const ikan = ['🐟','🐠','🐡']   

//rpg database\\
 let _limit = JSON.parse(fs.readFileSync('./storage/user/limit.json'));
 let _buruan = JSON.parse(fs.readFileSync('./storage/user/hasil_buruan.json'));
 let _darahOrg = JSON.parse(fs.readFileSync('./storage/user/darah.json'))

//Database\\
let setik = JSON.parse(fs.readFileSync('./database/setik.json'));
let vien = JSON.parse(fs.readFileSync('./database/vien.json'));
let imagi = JSON.parse(fs.readFileSync('./database/imagi.json'))
let videox = JSON.parse(fs.readFileSync('./database/video.json'))

//read database\\
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

module.exports = XeonBotInc = async (XeonBotInc, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await XeonBotInc.decodeJid(XeonBotInc.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	    const from = mek.key.remoteJid
	    const type = Object.keys(mek.message)[0]        
	    const content = JSON.stringify(mek.message)

        //group\\
        const groupMetadata = m.isGroup ? await XeonBotInc.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
	    
        //member\\
        let picaks = [flaming,fluming,flarun,flasmurf]
		let picak = picaks[Math.floor(Math.random() * picaks.length)]
		
          try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
	
	//group target by xeon\\
const reply = (teks) => {
            XeonBotInc.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": ` Join Bot's Official GC`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./Alexa-New/media/main.jpg`),"sourceUrl": "https://chat.whatsapp.com/LS1Xx3fSqg7FpSYSjKWhL5"}}}, { quoted: m})
        }
        
        const errormsg = (teks) => {
            XeonBotInc.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": ` Join Bot's Official GC`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./Alexa-New/media/main.jpg`),"sourceUrl": "https://chat.whatsapp.com/LS1Xx3fSqg7FpSYSjKWhL5"}}}, { quoted: m})
        }
        
        const replay = (teks) => {
            XeonBotInc.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": ` Join Bot's Official GC`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./Alexa-New/media/main.jpg`),"sourceUrl": "https://chat.whatsapp.com/HYj9wu5Jrv6CROxyeQbHoS"}}}, { quoted: m})
        }
	
        //Public & Self\\
        if (!XeonBotInc.public) {
            if (!m.key.fromMe) return
        }

        //Push Message To Console && Auto Read\\
        if (m.message) {
            XeonBotInc.sendReadReceipt(m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
	
	//reset limit every 12 hours\\
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Limit Reseted')
        }, {
            scheduled: true,
            timezone: "Asia/Kolkata"
        })
        
	//auto set bio\\
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await XeonBotInc.setStatus(`${XeonBotInc.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	
	  //antilink\\
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        reply(`「 ANTI LINK 」\n\nYou have been detected sending a group link, sorry you will be kicked !`)
        if (!isBotAdmins) return reply(`I Am Not An Admin, How Could I Kick Somebody Who Send Link 😒`)
        let gclink = (`https://chat.whatsapp.com/`+await XeonBotInc.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return reply(`Group Is Installed With Anti-Link But I Won't Kick You 😉, Because You Sent This Group Link❤️`)
        if (isAdmins) return reply(`Group Is Installed With Anti-Link But I Won't Kick You 😉, Because You Are An Admin Of The Group❤️`)
        if (isCreator) return reply(`Group Is Installed With Anti-Link But I Won't Kick You 😉, Because You Are My Owner Hahahahah🤣😘, You Think I Will Betray You Huh🐶`)
        XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }

        //auto reply by xeon 🦄
        for (let anji of setik){
				if (budy === anji){
					result = fs.readFileSync(`./Alexa-New/sticker/${anji}.webp`)
					XeonBotInc.sendMessage(m.chat, { sticker: result }, { quoted: m })
					}
			}
			for (let anju of vien){
				if (budy === anju){
					result = fs.readFileSync(`./Alexa-New/vn/${anju}.mp3`)
					XeonBotInc.sendMessage(m.chat, { audio: result, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
					}
			}
			for (let anjh of imagi){
				if (budy === anjh){
					result = fs.readFileSync(`./Alexa-New/image/${anjh}.jpg`)
					XeonBotInc.sendMessage(m.chat, { image: result }, { quoted: m })
					}
			}
					for (let anjh of videox){
				if (budy === anjh){
					result = fs.readFileSync(`./Alexa-New/vid/${anjh}.mp4`)
					XeonBotInc.sendMessage(m.chat, { video: result }, { quoted: m })
					}
				  }

      //Mute Chat\\
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }
        
        //media detect by 🦄xeon\\
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        
        //Respon Cmd with media\\
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: XeonBotInc.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, XeonBotInc.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        XeonBotInc.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?give up|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Answer The Following Questions :\n${room.soal}\n\n\nThere Is ${room.jawaban.length} Answer ${room.jawaban.find(v => v.includes(' ')) ? `(Some Answers Have Spaces)` : ''}
${isWin ? `All Answers Answered` : isSurender ? 'Surrender!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            XeonBotInc.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await XeonBotInc.sendButtonText(m.chat, [{ buttonId: 'guess song', buttonText: { displayText: 'Guess The Song' }, type: 1 }], `🎮 Guess The Music 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, XeonBotInc.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await reply(`🎮 Math Quiz 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Send ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await XeonBotInc.sendButtonText(m.chat, [{ buttonId: 'guess picture', buttonText: { displayText: 'Guess The Picture' }, type: 1 }], `🎮 Guess The Picture 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, XeonBotInc.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await XeonBotInc.sendButtonText(m.chat, [{ buttonId: 'guess word', buttonText: { displayText: 'Guess The Word' }, type: 1 }], `🎮 Guess The Word 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, XeonBotInc.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await XeonBotInc.sendButtonText(m.chat, [{ buttonId: 'guess blank', buttonText: { displayText: 'Guess The Blank' }, type: 1 }], `🎮 Guess The Blank 🎮\n\nCorrect Answer 🎉\n*${deskripsi}*\n\nWant To Play Again? Press The Button Below`, XeonBotInc.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await XeonBotInc.sendButtonText(m.chat, [{ buttonId: 'guess sentence', buttonText: { displayText: 'Guess The Sentence' }, type: 1 }], `🎮 Guess The Sentence 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, XeonBotInc.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await XeonBotInc.sendButtonText(m.chat, [{ buttonId: 'guess lyrics', buttonText: { displayText: 'Guess The Lyrics' }, type: 1 }], `🎮 Guess The Lyrics 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, XeonBotInc.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await XeonBotInc.sendButtonText(m.chat, [{ buttonId: 'guess riddle', buttonText: { displayText: 'Guess The Riddle' }, type: 1 }], `🎮 Guess The Riddle 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, XeonBotInc.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }
        
        //TicTacToe\\
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    //reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?give up|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { 
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    reply({
	    '-3': 'Game Has Ended',
	    '-2': 'Invalid',
	    '-1': 'Invalid Position',
	    0: 'Invalid Position',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Won!` : isTie ? `Game Over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Typed *surrender* to surrender and admited defeat`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await XeonBotInc.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await XeonBotInc.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP\\
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|okay?|reject|no|later|nope(k.)?yes|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|no|later|n|nope(k.)?yes)/i.test(m.text)) {
	    XeonBotInc.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} Refuse Suit, Suit Canceled`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    XeonBotInc.sendText(m.chat, `Suit Has Been Sent To Chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Please Choose A Suit In The Respective Chat"
Click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) XeonBotInc.sendText(roof.p, `Please Select \n\Rock🗿\nPaper📄\nScissors✂️`, m)
	    if (!roof.pilih2) XeonBotInc.sendText(roof.p2, `Please Select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) XeonBotInc.sendText(m.chat, `Both Players Don't Want To Play,\nSuit Canceled`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    XeonBotInc.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} Didn't Choose Suit, Game Over!`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /scissors/i
	    let b = /rock/i
	    let k = /paper/i
	    let reg = /^(scissors|rock|paper)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    reply(`You Have Chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting For The Opponent To Choose` : ''}`)
	    if (!roof.pilih2) XeonBotInc.sendText(roof.p2, '_The Opponent Has Chosen_\nNow It Is Your Turn', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    reply(`You Have Chosen ${m.text} ${!roof.pilih ? `\n\nWaiting For The Opponent To Choose` : ''}`)
	    if (!roof.pilih) XeonBotInc.sendText(roof.p, '_The Opponent Has Chosen_\nNow It Is Your Turn', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    XeonBotInc.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            reply(`
Don't tag him!
He's in AFK/Offline ${reason ? 'dengan alasan ' + reason : 'no reason'}
It's been ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            reply(`
You Came Back Online From AFK${user.afkReason ? ' after ' + user.afkReason : ''}
In ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
switch(command) {
        case 'inventori': case 'inventory': case 'profile':{
if (q.includes('--help')) return reply(examkosong) 
  if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
  if (!isInventory){ addInventori(m.sender) }
  if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }
     
     var xeonbotinc = await getBuffer(picak+`User's Inventory`)
     let teksehmazeh = `_[ 👩🏻‍💼INFO USER👨🏻‍💼 ]_\n\n`
     teksehmazeh += `*❤️Your Blood* : ${getDarah(m.sender)}\n`
     teksehmazeh += `*◻️️Your Iron* : ${getBesi(m.sender)}\n`
     teksehmazeh += `*🌟Your Gold* : ${getEmas(m.sender)}\n`
     teksehmazeh += `*💎Your Emerald* : ${getEmerald(m.sender)}\n`
     teksehmazeh += `*⏺️Your Limit* : ${getLimit(m.sender)}\n`
     teksehmazeh += `*🧪Your Potion* : ${getPotion(m.sender)}\n\n`
     teksehmazeh += `_[ 🐺HUNT RESULT🐺 ]_\n`
     teksehmazeh += `*🐟Fish* : ${getIkan(m.sender)}\n`
     teksehmazeh += `*🐔Chicken* : ${getAyam(m.sender)}\n`
     teksehmazeh += `*🐇Rabbit* : ${getKelinci(m.sender)}\n`
     teksehmazeh += `*🐑Sheep* : ${getDomba(m.sender)}\n`
     teksehmazeh += `*🐄Cow* : ${getSapi(m.sender)}\n`
     teksehmazeh += `*🐘Elephant* : ${getGajah(m.sender)}\n\n`
     teksehmazeh += `_*${pushname}*_`
     await XeonBotInc.send5ButImg(from, `` + '' + teksehmazeh, `© ${footer}`, xeonbotinc, [{"urlButton": {"displayText": "YouTube📍","url": `${myweb}`}}])
  }
  break
        case 'userlimit': 
{      
   let txt = `「 *ALL LIMIT USER* 」\n\n`
     for (let i of _limit){
     txt += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Limit* : ${i.limit}\n`
     }
    reply(txt)       
  }
 break
 case 'leaderboard':
{      
   let txt = `「 *LEADERBOARD* 」\n\n`
     for (let i of _buruan){
     txt += `➸ *ID :* ${i.id}\n`
     txt += `*🐟Fish* : ${i.ikan}\n`
     txt += `*🐔Chicken* : ${i.ayam}\n`
     txt += `*🐇Rabbit* : ${i.kelinci}\n`
     txt += `*🐑Sheep* : ${i.domba}\n`
     txt += `*🐄Cow* : ${i.sapi}\n`
     txt += `*🐘Elephant* : ${i.gajah}\n\n`
     }
    reply(txt)       
  }
 break
case 'mining': case 'mine':{
if (q.includes('--help')) return reply(examkosong) 
  if (!isInventory){ addInventori(m.sender) }
  if (isCekDarah < 1) return reply(`You're Tired!, Try To Heal Using Potions`) 
  let besi = [1,2,5,0,3,0,1,1,4,1,5,0,0]
  let emas = [0,1,2,3,0,0,0,1,1,0,0,2]
  let emerald = [0,0,1,0,0,1,0,2,1,0,0,1]
  var besinya = besi[Math.floor(Math.random() * besi.length)]  
  var emasnya = emas[Math.floor(Math.random() * emas.length)]  
  var emeraldnya = emerald[Math.floor(Math.random() * emerald.length)]  
  setTimeout( () => {
  let caption = `[ MINING RESULT ]\n*Iron* : ${besinya}\n*Gold* : ${emasnya}\n*Emerald* : ${emeraldnya}`
  let buttons = [
      {
       buttonId: `${prefix + command}`, 
       buttonText: {
        displayText: 'Mine Again⛏️'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: './storage/image/tambang.jpg' },
      caption: caption,
      footer: pushname,
      buttons: buttons,
      headerType: 4
     }
     XeonBotInc.sendMessage(from, buttonMessage, { quoted: m })
   
   }, 7000)  
  setTimeout( () => {
  reply(`@${m.sender.split("@")[0]} Started Mining🎣`)     
  }, 1500)
  kurangDarah(m.sender, 10)
  addBesi(m.sender, besinya)
  addEmas(m.sended, emasnya)
  addEmerald(m.sender, emeraldnya)	     
  }   
  break  
  //transaction\\
 case 'beli': case 'buy':{
if (q.includes('--help')) return reply(examkosong) 
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 if (!q) return reply(`What Do You Want To Buy?\n\n1.potion\n2.baitfood\n3.limit\n\nExample: ${prefix + command} baitfood`)
 var anu = args[1]
  if (args[0] === 'potion'){
  let noh = 100000 * anu
 if (!args[1]) return reply(`Example : ${prefix + command} potion 2\n 1 Potion = 100000 Money`)
 if (isMonay < noh) return reply('Your Remaining Money Is Not Sufficient For This Purchase')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addPotion(m.sender, apalu)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Potion* : ${getPotion(m.sender)}`)
  }, 2000) 
 } else 
 if (args[0] === 'baitfood'){
  let noh = 5000 * anu
 if (!args[1]) return reply(`Example : ${prefix + command} baitfood 2\n 1 Bait Food = 2500 Money`)
 if (isMonay < noh) return reply('Your Remaining Money Is Not Sufficient For This Purchase')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addUmpan(m.sender, apalu)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Bait Food* : ${getUmpan(m.sender)}`)
  }, 2000) 
  } else 
  if (args[0] === 'limit'){
  let noh = 35000 * anu
 if (!args[1]) return reply(`Example : ${prefix + command} limit 2\n 1 Limit = 35000 Money`)
 if (isMonay < noh) return reply('Your Remaining Money Is Not Sufficient For This Purchase')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addLimit(m.sender, apalu)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Limit* : ${getLimit(m.sender)}`)
  }, 2000) 
  } else { reply("Incorrect Format!") }
 }
 break
 case 'sel': case 'jual':{
 if (!q) return  reply(`What Do You Want To Sell??\nExample : ${prefix + command} fish 2`)
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 var anu = args[1]
 if (args[0] === 'fish'){
 if (isIkan < anu) return reply(`You Don't Have Enough Fish(es) For This Transaction`)
 if (!args[1]) return reply(`Example : ${prefix + command} fish 2\n 1 Fish = 1500 Money`)
 kurangIkan(m.sender, anu)
 let monaynya = 1500 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Fish(es)* : ${getIkan(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'chicken'){
 if (isAyam < anu) return reply(`You Don't Have Enough Chicken(s) For This Transaction`)
 if (!args[1]) return reply(`Example : ${prefix + command} chicken 2\n 1 Chicken = 2500 Money`)
 kurangAyam(m.sender, anu)
 let monaynya = 2500 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Chicken* : ${getAyam(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'rabbit'){
 if (isKelinci < anu) return reply(`You Don't Have Enough Rabbit(s) For This Transaction`)
 if (!args[1]) return reply(`Example : ${prefix + command} rabbit 2\n 1 Rabbit = 3000 Money`)
 kurangKelinci(m.sender, anu)
 let monaynya = 3000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Rabbit(s)* : ${getKelinci(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'sheep'){
 if (isDomba < anu) return reply(`You Don't Have Enough Sheep(s) For This Transaction`)
 if (!args[1]) return reply(`Example : ${prefix + command} domba 2\n 1 Sheep = 5000 money`)
 kurangDomba(m.sender, anu)
 let monaynya = 5000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Sheep(s)* : ${getDomba(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'cow'){
 if (isSapi < anu) return reply(`You Don't Have Enough Cow(s) For This Transaction`)
 if (!args[1]) return reply(`Example : ${prefix + command} cow 2\n 1 Cow = 10000 Money`)
 kurangSapi(m.sender, anu)
 let monaynya = 10000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Cow(s)* : ${getSapi(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'elephant'){
 if (isGajah < anu) return reply(`You Don't Have Enough Elephant(s) For This Transaction`)
 if (!args[1]) return reply(`Example : ${prefix + command} elephant 2\n 1 Elephant = 15000 Money`)
 kurangGajah(m.sender, anu)
 let monaynya = 15000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Elephant(s)* : ${getGajah(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'iron'){
 if (isBesi < anu) return reply(`You Don't Have Enough Iron(s) For This Transaction`)
 if (!args[1]) return reply(`Example : ${prefix + command} iron 2\n 1 Iron = 15000 Money`)
 kurangBesi(m.sender, anu)
 let monaynya = 16000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*Your Remaining Iron(s)* : ${getBesi(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'gold'){
 if (isEmas < anu) return reply(`You Don't Have Enough Gold(s) For This Transaction`)
 if (!args[1]) return reply(`Example : ${prefix + command} gold 2\n 1 Gold = 50000 Money`)
 kurangEmas(m.sender, anu)
 let monaynya = 50000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Money* : ${getMonay(m.sender)}\n*Your Remaining Gold(s)* : ${getEmas(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'emerald'){
 if (isEmerald < anu) return reply(`You Don't Have Enough Emerald(s) For This Transaction`)
 if (!args[1]) return reply(`Example : ${prefix + command} emerald 2\n 1 Emerald = 100000 Money`)
 kurangEmerald(m.sender, anu)
 let monaynya = 100000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaction Successful ✔️\n*Your Remaining Money* : ${getMonay(m.sender)}\n*You Don't Have Enough Emerald(s) For This Transaction* : ${getEmerald(m.sender)}`)
  }, 2000) 
 } else { reply("Incorrect Format!") }

 }
 break

 case 'heal':{
if (q.includes('--help')) return reply(examkosong) 
 if (!isCekDarah < 1) return reply('You Can Only Heal When Your Blood Is 0')
 if (isCekDarah > 100) return reply('Your Blood Is Full')
 if (isPotion < 1) return reply(`You Don't Have A Potion, Try Buying It This Way #buypotion _amount_`) 
 addDarah(m.sender, 100)
 kurangPotion(m.sender, 1)
 reply('Success! Your Bood Is Full')
 }
 break
 case 'hunt': case 'hunting': {
if (q.includes('--help')) return reply(examkosong) 
 if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
 if (isCekDarah < 1) return reply('Your Blood Is Gone, Try To Heal Using Potions') 
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
  let luka = ["Pierced by a thorn while hunting","Slipped into the abyss while hunting","Scratched by a wild animal","Not careful","Entangled in roots","Fall while hunting"]
  let location = ["Jungle","Amazon forest","Tropical forest","Meadow","African forest","Mountains"]
   var ikanmu = Math.ceil(Math.random() * 10)
   var ayam = Math.ceil(Math.random() * 8)
   var kelinci = Math.ceil(Math.random() * 7)
   var dombanya = [3,0,4,0,5,4,6,0,1,0,2,3,0,3,0,1]
   var sapinya = [2,0,3,0,4,0,5,0,1,0,2,0,3,0,1]
   var gajahnya = [1,0,4,0,2,0,1,0,2,1,3,0,1]
   var domba = dombanya[Math.floor(Math.random() * dombanya.length)] 
   var sapi = sapinya[Math.floor(Math.random() * sapinya.length)] 
   var gajah = gajahnya[Math.floor(Math.random() * gajahnya.length)]    
   var lukanya = luka[Math.floor(Math.random() * luka.length)]
   var lokasinya = location[Math.floor(Math.random() * location.length)]
 if (lokasinya === 'Jungle') {
    var image = './storage/image/rimba.jpg'
   } else
 if (lokasinya === 'Amazon forest') {
    var image =  './storage/image/amazon.jpg'
   } else
 if (lokasinya === 'Tropical forest') {
    var image = './storage/image/tropis.jpg'
   } else
 if (lokasinya === 'Meadow') {
    var image = './storage/image/padang_rumput.jpg'
   } else
 if (lokasinya === 'African forest') {
    var image = './storage/image/afrika.jpg'
   } else
 if (lokasinya === 'Mountains') {
   var image = './storage/image/pegunungan.jpg'
   }
 setTimeout( () => {
  let teksehmazeh = `_[ HUNT RESULT ]_\n`
     teksehmazeh += `*🐟Fish* : ${ikanmu}\n`
     teksehmazeh += `*🐔Chicken* : ${ayam}\n`
     teksehmazeh += `*🐇Rabbit* : ${kelinci}\n`
     teksehmazeh += `*🐑Sheep* : ${domba}\n`
     teksehmazeh += `*🐄Cow* : ${sapi}\n`
     teksehmazeh += `*🐘Elephant* : ${gajah}\n\n`
     teksehmazeh += `_[ INFO ]_\n`
     teksehmazeh += `*Location* : ${lokasinya}\n`
     teksehmazeh += `*Wounded* : ${lukanya}, blood - 10\n`
     teksehmazeh += `*Remaining blood* : ${getDarah(m.sender)}\n`
    let buttons = [
      {
       buttonId: `${prefix + command}`, 
       buttonText: {
        displayText: 'Hunt Again️🏹'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: image },
      caption: teksehmazeh,
      footer: pushname,
      buttons: buttons,
      headerType: 4
     }
     XeonBotInc.sendMessage(from, buttonMessage, { quoted: m })      
  }, 5000)  
 setTimeout( () => {
  reply(`@${m.sender.split("@")[0]} Started Hunting In ${lokasinya}`)     
  }, 1000) 
 addIkan(m.sender, ikanmu) 
   addAyam(m.sender, ayam) 
   addKelinci(m.sender, kelinci)
   addDomba(m.sender, domba)
   addSapi(m.sender, sapi)
  addGajah(m.sender, gajah)
 kurangDarah(m.sender, 10)
 }
 break
	    case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                reply(`${m.pushName} Has Gone Afk/Offline${text ? ': ' + text : ''}`)
            }
            break	
        case 'ttc': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return replay(`You Are Still In The Game`)
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            reply('Partner found!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Waiting @${room.game.currentTurn.split('@')[0]}

Type *surrender* to surrender and admit defeat`
            if (room.x !== room.o) await XeonBotInc.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await XeonBotInc.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            reply('Waiting For Partner' + (text ? ` Type The Command Below ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            XeonBotInc.sendText(m.chat, `Successfully Deleted The TicTacToe Session`, m)
            } else if (!this.game) {
            reply(`TicTacToe🎮 Session Does Not Exist`)
            } else reply('?')
            } catch (e) {
            reply('Damaged')
            }
            }
            break
            case 'suitpvp': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) return replay(`Complete Your Previous Suit`)
	    if (m.mentionedJid[0] === m.sender) return reply(`Can't Play With Myself !`)
            if (!m.mentionedJid[0]) return reply(`_Who Do You Want To Challenge?_\nTag The Person..\n\nExample : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0])))  reply(`The Person You Are Challenging Is Playing Suit With Someone Else :(`)
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} To Play Suit

Please @${m.mentionedJid[0].split`@`[0]} To Type Accept/Reject`
            this.suit[id] = {
            chat: await XeonBotInc.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) XeonBotInc.sendText(m.chat, `_Suit Time Out_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
            case 'chat': {
                if (!isCreator) return replay(`${mess.owner}`)
                if (!q) return replay(`Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete`)
                if (args[0] === 'mute') {
                    XeonBotInc.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    XeonBotInc.chatModify({ mute: null }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    XeonBotInc.chatModify({  archive: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    XeonBotInc.chatModify({ archive: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    XeonBotInc.chatModify({ markRead: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    XeonBotInc.chatModify({ markRead: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    XeonBotInc.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
            }
            break
	    case 'family100': {
                if ('family100'+m.chat in _family100) {
                    reply('There Are Still Unfinished Sessions!')
                    reply(false)
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Answer The Following Questions :*\n${random.soal}\n\nThere Is *${random.jawaban.length}* Answer ${random.jawaban.find(v => v.includes(' ')) ? `(Some Answers Have Spaces)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await XeonBotInc.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!m.quoted && !text) return replay(`Send/Reply Text With Caption ${prefix + command}`)
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'guess': {
                if (!text) return replay(`Example : ${prefix + command} song\n\nOption : \n1. music\n2. picture (indo)\n3. word\n4. sentence\n5. lyrics (indo)\n6. blank (indo)`)
                if (args[0] === "song") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) return replay(`There Are Still Unfinished Sessions`)
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await XeonBotInc.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    XeonBotInc.sendText(m.chat, `What Is The Name Of This Song?\n\nArtist : ${result.artist}\nTime : 60 seconds`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    XeonBotInc.sendButtonText(m.chat, [{ buttonId: 'guess song', buttonText: { displayText: 'Guess The Song' }, type: 1 }], `Time Has Run Out\nAnswer:  ${tebaklagu[m.sender.split('@')[0]]}\n\nWant To Play? Press The Button Below`, XeonBotInc.user.name, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'picture') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) return replay(`There Are Still Unfinished Sessions!`)
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    XeonBotInc.sendImage(m.chat, result.img, `Please Answer The Questions Above\n\nDescription : ${result.deskripsi}\nTime : 60 seconds`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    XeonBotInc.sendButtonText(m.chat, [{ buttonId: 'guess picture', buttonText: { displayText: 'Guess The Picture' }, type: 1 }], `Time Has Run Out\nAnswer:  ${tebakgambar[m.sender.split('@')[0]]}\n\nWant To Play Again? PressThe Button Below`, XeonBotInc.user.name, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'word') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) return replay(`There Are Still Unfinished Sessions!`)
                    let anu = await fetchJson('https://raw.githubusercontent.com/DGXeon/fungames/main/GuessTheWord.js')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    XeonBotInc.sendText(m.chat, `Please Answer The Following Question\n\n${result.soal}\nTime : 60 seconds`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    XeonBotInc.sendButtonText(m.chat, [{ buttonId: 'guess word', buttonText: { displayText: 'Guess The Word' }, type: 1 }], `Time Out\nAnswer:  ${tebakkata[m.sender.split('@')[0]]}\n\nWant To Play Again? PressThe Button Below`, XeonBotInc.user.name, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'sentence') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) return replay(`There Are Still Unfinished Sessions!`)
                    let anu = await fetchJson('https://raw.githubusercontent.com/DGXeon/fungames/main/GuessTheSentence.js')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    XeonBotInc.sendText(m.chat, `Please Answer The Following Question\n\n${result.soal}\nTime : 60 seconds`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    XeonBotInc.sendButtonText(m.chat, [{ buttonId: 'guess sentence', buttonText: { displayText: 'Guess The Sentence' }, type: 1 }], `Time Out\nAnswer:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nWant To Play Again? PressThe Button Below`, XeonBotInc.user.name, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lyrics') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) return replay(`There Are Still Unfinished Sessions!`)
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    XeonBotInc.sendText(m.chat, `These Are The Lyrics Of Which Song? : *${result.soal}*?\nTime : 60 seconds`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    XeonBotInc.sendButtonText(m.chat, [{ buttonId: 'guess lyrics', buttonText: { displayText: 'Guess The Lyrics' }, type: 1 }], `Time Out\nAnswer:  ${tebaklirik[m.sender.split('@')[0]]}\n\Want To Play Again? PressThe Button Below`, XeonBotInc.user.name, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'blank') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) return replay(`There Are Still Unfinished Sessions!`)
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    XeonBotInc.sendText(m.chat, `*Answer The Following Questions :*\n${result.soal}*\nTime : 60 seconds`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    XeonBotInc.sendButtonText(m.chat, [{ buttonId: 'guess blank', buttonText: { displayText: 'Guess The Blank' }, type: 1 }], `Time Out\nAnswer:  ${caklontong[m.sender.split('@')[0]]}\nDescription : ${caklontong_desk[m.sender.split('@')[0]]}\n\Want To Play Again? PressThe Button Below`, XeonBotInc.user.name, m)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
                    }
                }
            }
            break
            case 'kuismath': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) return replay(`There Are Still Unfinished Sessions!`)
                let { genMath, modes } = require('./lib/math')
                if (!text) return replay(`Mode: ${Object.keys(modes).join(' | ')}\nFor Examples: ${prefix}math medium`)
                let result = await genMath(text.toLowerCase())
                XeonBotInc.sendText(m.chat, `*What Is The Result Of: ${result.soal.toLowerCase()}*?\n\nTime: ${(result.waktu / 1000).toFixed(2)} second`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    reply("Time Out\nAnswer: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'mysoulmate': {
            if (!m.isGroup) return replay(`${mess.group}`)
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Your Match Is

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: '❤️', buttonText: { displayText: '❤️' }, type: 1 }
                    ]
                    await XeonBotInc.sendButtonText(m.chat, buttons, jawab, XeonBotInc.user.name, m, {mentions: ments})
            }
            break
            case 'couple': {
            if (!m.isGroup) return replay(`${mess.group}`)
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}
Cieeee, What's Going On❤️💖👀`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: '❤️', buttonText: { displayText: '❤️' }, type: 1 }
                    ]
                    await XeonBotInc.sendButtonText(m.chat, buttons, jawab, XeonBotInc.user.name, m, {mentions: menst})
            }
            break
            case 'is':
				if (!text) return replay(`Use Text, Example : ${prefix + command} he married `)
					const apa = [`Yes`, `No`, `It Could Be`, `Thats right`]
					const kah = apa[Math.floor(Math.random() * apa.length)]
XeonBotInc.sendMessage(from, { text: `Question : Is ${q}\nAnswer : ${kah}` }, { quoted: m })

					break
					            case 'what':
				if (!text) return replay(`Use Text, Example : ${prefix + command} he married `)
					const lel = [`Ask Your Gf`, `I Dont Know`, `I Don't Know, Ask Your Father`]
					const kahk = lel[Math.floor(Math.random() * lel.length)]
XeonBotInc.sendMessage(from, { text: `Question : What ${q}\nAnswer : ${kahk}` }, { quoted: m })

					break
case 'can':
				if (!text) return replay(`Use Text, Example : ${prefix + command} you fuck her lol `)
					const bisa = [`Can`,`Can't`,`Cannot`,`Of Course You Can!!!`]
					const ga = bisa[Math.floor(Math.random() * bisa.length)]
XeonBotInc.sendMessage(from, { text: `Question : Can ${q}\nAnswer : ${ga}` }, { quoted: m })

					break
case 'how':
				if (!text) return replay(`Use Text, Example : ${prefix + command} is my face`)
					const gimana = [`It's Okay`, `It's Difficult Bro`, `Sorry Bot Can't Answer`, `Try Searching On Google`,`Holy Cow! Really???`,`Dizzy Ah`,`Ohhh I See:(`,`The Patient, Boss:(`,`How Are You?`]
					const ya = gimana[Math.floor(Math.random() * gimana.length)]
XeonBotInc.sendMessage(from, { text: `Question : ${q}\nAnswer : How ${ya}` }, { quoted: m })

					break
case 'rate':
				if (!text) return replay(`Use Text, Example : ${prefix + command} My Dp`)
					const ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
XeonBotInc.sendMessage(from, { text: `Rate : ${q}\nAnswer : *${te}%*` }, { quoted: m })

					break
  case 'handsomecheck':
				if (!text) return replay(`Tag Someone, Example : ${prefix + command} @Xeon`)
					const gan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
XeonBotInc.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${teng}%*` }, { quoted: m })

					break
case 'beautifulcheck':
				if (!text) return replay(`Tag Someone, Example : ${prefix + command} @Xeon`)
					const can = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
XeonBotInc.sendMessage(from, { text: `*${command}*\n\nNama : ${q}\nAnswer : *${tik}%*` }, { quoted: m })

					break
case 'awesomecheck':
  case 'greatcheck':
    case 'gaycheck':
      case 'cutecheck':
        case 'lesbicheck':
          case 'lesbiancheck':
             case 'hornycheck':
                 case 'prettycheck':
                    case 'lovelycheck':
                      case 'uglycheck':
				if (!text) return replay(`Tag Someone, Example : ${prefix + command} @Xeon`)
					const sangeh = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
XeonBotInc.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${sange}%*` }, { quoted: m })
					break
					case 'charactercheck':
					//YouTube📍 by xeon⛔\\
					if (!text) return replay(`Tag Someone, Example : ${prefix + command} @Xeon`)
					const xeony =['Compassionate','Generous','Grumpy','Forgiving','Obedient','Good','Simp','Kind-Hearted','patient','UwU','top, anyway','Helpful']
					const taky = xeony[Math.floor(Math.random() * xeony.length)]
					XeonBotInc.sendMessage(from, { text: `Character Check : ${q}\nAnswer : *${taky}*` }, { quoted: m })
				     break
                    case 'stupid':
      case 'foolish':
      case 'smart':
      case 'idiot':
      case 'gay':
      case 'lesbi':
      case 'bastard':
      case 'stubble':
      case 'dog':
      case 'fuck':
      case 'ape':
      case 'noob':
      case 'great':
      case 'horny':
      case 'wibu':
      case 'asshole':
      case 'handsome':
      case 'beautiful':
      case 'cute':
      case 'kind':
      case 'ugly':
      case 'pretty':
      case 'lesbian':
      case 'randi':
      case 'gandu':
      case 'madarchod':
      case 'kala':
      case 'gora':
      case 'chutiya':
      case 'nibba':
      case 'nibbi':
      case 'bhosdiwala':
      case 'chutmarika':
      case 'bokachoda':
      case 'suarerbaccha':
      case 'bolochoda':
      case 'muthal':
      case 'muthbaaz':
      case 'randibaaz':
      case 'topibaaz':
      case 'cunt':
      case 'nerd':
      case 'behenchod':
      case 'behnchoda':
      case 'bhosdika':
      case 'bc':
      case 'nerd':
      case 'mc':
      case 'bsdk':
      case 'bhosdk':
      case 'nigger':
      case 'loda':
      case 'laund':
      case 'nigga':
      case 'sexy':
      case 'hot': {
            if (!m.isGroup) return replay(`${mess.group}`)
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `The Most *${command}* Here Is @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: '👀', buttonText: { displayText: '👀😂' }, type: 1 }
                    ]
                    await XeonBotInc.sendButtonText(m.chat, buttons, jawab, XeonBotInc.user.name, m, {mentions: ments})
            }
            break
case 'when':
				if (!text) return replay(`Use Text, Example : ${prefix + command} will i get married `)
					const kapan = ['5 More Days', '10 More Days', '15 More Days','20 More Days', '25 More Days','30 More Days','35 More Days','40 More Days','45 More Days','50 More Days','55 More Days','60 More Days','65 More Days','70 More Days','75 More Days','80 More Days','85 More Days','90 More Days','100 More Days','5 Months More', '10 Months More', '15 Months More','20 Months More', '25 Months More','30 Months More','35 Months More','40 Months More','45 Months More','50 Months More','55 Months More','60 Months More','65 Months More','70 Months More','75 Months More','80 Months More','85 Months More','90 Months More','100 Months More','1 More Year','2 More Years','3 More Years','4 More Years','5 More Years','Tomorrow','The Day After Tomorrow',`After This Command, You Too ${q}`]
					const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
XeonBotInc.sendMessage(from, { text: `Question : ${q}\nAnswer : *${kapankah}*` }, { quoted: m })
					break
case 'wangy':
              if (!text) return replay(`Use Text, Example : ${prefix + command} cheems`)
              qq = q.toUpperCase()
              awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaah the smell of hair ${qq} smelly i want to smell the fragrance ${qq} AAAAAAAAH ~ Her hair.... aaah i want to stroke her hair too ~~ AAAAAH ${qq} first time out in anime is cute too ❤️ ❤️ ❤️ so AAAAAAAH ${qq} AAAAAA LUCCUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️what ? ${qq} it's not real ? Just HELL you say ? no, no no no no no no no no no no no no no no no !! I DON'T CARE ABOUT THE REALITY, I DON'T CARE. ❤️ ❤️ ❤️ ${qq} me ... ${qq} on the laptop watching me, ${qq} .. you believe in me ? aaaaaaaaaaah thanks ${q} I don't want to give up ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH I STILL HAVE ${qq} ALSO NOT THE SAME AAAAAAAAAAAAAAH`
             reply(awikwok)
              break
case 'checkdeath':
             if (!text) return replay(`Use Someone's Name, Example : ${prefix + command} Xeon`)
              predea = await axios.get(`https://api.agify.io/?name=${q}`)
              reply(`Name : ${predea.data.name}\n*Dead At Age :* ${predea.data.age} Year.\n\n_Quick, Quick, Repent Bro, Because No One Knows About Death_`)
              break
case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!m.quoted && !text) return replay(`Send/Reply Text With Caption ${prefix + command}`)
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'reactxxx': {
                if (!isCreator) return replay(`${mess.owner}`)
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                XeonBotInc.sendMessage(m.chat, reactionMessage)
            }
            break  
            case 'join': {
                if (!isCreator) return replay(`${mess.owner}`)
                if (!text) return replay(`Enter The Group Link!`)
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replay(`Invalid Link!`)
                reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await XeonBotInc.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) return replay(`${mess.owner}`)
                await XeonBotInc.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
            case 'setexif': {
               if (!isCreator) return replay(`${mess.owner}`)
               if (!text) return replay(`Example : ${prefix + command} packname|author`)
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          reply(`Exif Has Been Successfully Changed to\n\n🐶 Packname : ${global.packname}\n🐶 Author : ${global.author}`)
            }
            break
	case 'kick': {
		if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await XeonBotInc.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await XeonBotInc.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await XeonBotInc.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await XeonBotInc.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
        case 'block': {
		if (!isCreator) return replay(`${mess.owner}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await XeonBotInc.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) return replay(`${mess.owner}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await XeonBotInc.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setgcname': case 'setsubject': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) replay(`${mess.admin}`)
                if (!text) replay(`Where Is The Text?`)
                await XeonBotInc.groupUpdateSubject(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) replay(`${mess.admin}`)
                if (!text) replay(`Where Is The Text?`)
                await XeonBotInc.groupUpdateDescription(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
          case 'setbotpp': {
                if (!isCreator) return replay(`${mess.owner}`)
                if (!quoted) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                await XeonBotInc.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
                }
                break
           case 'setgrouppp': case 'setgruppp': case 'setgcpp': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (!quoted) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                await XeonBotInc.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
                }
                break
            case 'tagall': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
let teks = `╚»˙·٠•●👸Queen-Alexa●•٠·˙«╝ 
 
 ➲ *Message : ${q ? q : 'no message'}*\n\n`
                for (let mem of participants) {
                teks += `🐶 @${mem.id.split('@')[0]}\n`
                }
                XeonBotInc.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': {
            if (!m.isGroup) return replay(`${mess.group}`)
            if (!isBotAdmins) return replay(`${mess.botAdmin}`)
            if (!isAdmins) return replay(`${mess.admin}`)
            XeonBotInc.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
	    case 'style': case 'styletext': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //wont response when limit runs out\\
		db.data.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) return replay(`Enter Query Text!`)
                let anu = await styletext(text)
                let teks = `Entered Text ${text}\n\n`
                for (let i of anu) {
                    teks += `🐶 *${i.name}* : ${i.result}\n\n`
                }
                reply(teks)
	    }
	    break
               case 'vote': {
            if (!m.isGroup) return replay(`${mess.group}`)
            if (m.chat in vote) replay(`_There Are Still Votes In This Chat!_\n\n*${prefix}delvote* - To Delete Vote Session`)
            if (!text) return replay(`Enter Reason For Vote, Example: *${prefix + command} Handsome Owner*`)
            reply(`Voting Starts!\n\n*${prefix}upvote* - For Upvote\n*${prefix}devote* - For Devote\n*${prefix}checkvote* - To Check The Vote\n*${prefix}delvote* - To Delete Vote Session`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}delvote* - To Delete Vote Session`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: 'Upvote'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: 'Devote'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: XeonBotInc.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            XeonBotInc.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
            if (!m.isGroup) return replay(`${mess.group}`)
            if (!(m.chat in vote)) return replay(`_*No Voting In This Group!*_\n\n*${prefix}vote* - To Start Voting`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) replay(`You've Voted`)
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}delvote* - To Delete Vote Session`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: 'Upvote'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: 'Devote'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: XeonBotInc.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            XeonBotInc.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
            if (!m.isGroup) return replay(`${mess.group}`)
            if (!(m.chat in vote)) return replay(`_*No Voting In This Group!*_\n\n*${prefix}vote* - To Start Voting`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) return replay(`You've Voted`)
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}delvote* - To Delete Vote Session`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: 'Upvote'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: 'Devote'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: XeonBotInc.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            XeonBotInc.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'checkvote':
if (!m.isGroup) return replay(`${mess.group}`)
if (!(m.chat in vote)) return replay(`_*No Voting In This Group!*_\n\n*${prefix}vote* - To Start Voting`)
teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
┃╠ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
┃╠ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `┃╠ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}delvote* - To Delete Vote Session


©${XeonBotInc.user.id}
`
XeonBotInc.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) return replay(`${mess.group}`)
            if (!(m.chat in vote)) return replay(`_*No Voting In This Group!*_\n\n*${prefix}vote* - To Start Voting`)
            delete vote[m.chat]
            reply('Successfully Deleted The Vote Session In This Group')
	    }
            break
               case 'group': case 'grup': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (args[0] === 'close'){
                    await XeonBotInc.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Successful Closing The Group`)).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await XeonBotInc.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Successful Opening The Group`)).catch((err) => reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await XeonBotInc.sendButtonText(m.chat, buttons, `Group Mode`, XeonBotInc.user.name, m)

             }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
             if (args[0] === 'open'){
                await XeonBotInc.groupSettingUpdate(m.chat, 'unlocked').then((res) => reply(`Successfully Opened Edit Group Info`)).catch((err) => reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await XeonBotInc.groupSettingUpdate(m.chat, 'locked').then((res) => reply(`Successfully Closed Edit Group Info`)).catch((err) => reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await XeonBotInc.sendButtonText(m.chat, buttons, `Mode Edit Info`, XeonBotInc.user.name, m)

            }
            }
            break
            case 'antilink': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antilink) return reply(`Activated`)
                db.data.chats[m.chat].antilink = true
                reply(`Antilink Active !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antilink) return reply(`Deactivated`)
                db.data.chats[m.chat].antilink = false
                reply(`Antilink Inactive !`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await XeonBotInc.sendButtonText(m.chat, buttons, `Antilink Mode`, XeonBotInc.user.name, m)
                }
             }
             break
             case 'mute': {
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return reply(`Previously Active`)
                db.data.chats[m.chat].mute = true
                reply(`${XeonBotInc.user.name} Has Been Muted In This Group !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return reply(`Previously Inactive`)
                db.data.chats[m.chat].mute = false
                reply(`${XeonBotInc.user.name} Has Been Unmuted In This Group!`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await XeonBotInc.sendButtonText(m.chat, buttons, `Mute Bot`, XeonBotInc.user.name, m)
                }
             }
             break
            case 'invite': case 'linkgc': case 'gclink': case 'grouplink': {
                if (!m.isGroup) return replay(`${mess.group}`)
                let response = await XeonBotInc.groupInviteCode(m.chat)
                XeonBotInc.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\n${groupMetadata.subject} Group Link`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
                if (!m.isGroup) replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (!text) return replay(`Enter The enable/disable Values`)
                if (args[0] === 'enable') {
                    await XeonBotInc.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await XeonBotInc.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) reply(false)
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) return replay(`The Message Was Not Sent By A Bot!`)
                XeonBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) return replay(`${mess.owner}`)
                if (!text) return replay(`Where Is The Text?\n\nExample : ${prefix + command} Xeon Handsome`)
                let getGroups = await XeonBotInc.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                reply(`Sent Broadcast To ${anu.length} Group Chat, Finish Time ${anu.length * 1.5} Seconds`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: 'Script🔖',
                                    url: `${sc}`
                                }
                            }, {
                                urlButton: {
                                    displayText: 'YouTube📍',
                                    url: `${myweb}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '🎀Menu🎀',
                                    id: 'menu'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤Owner👤',
                                    id: 'owner'
                                }
                            }]
                      let txt = `「 Cheems Bot Broadcast 」\n\n${text}`
                      XeonBotInc.send5ButImg(i, txt, XeonBotInc.user.name, global.thumb, btn)
                    }
                reply(`Successful Sending Broadcast To ${anu.length} Group(s)`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) return replay(`${mess.owner}`)
                if (!text) return replay(`Where Is The Text?\n\nExample : ${prefix + command} Xeon`)
                let anu = await store.chats.all().map(v => v.id)
                reply(`Send Broadcast To ${anu.length} Chat\nFinish Time ${anu.length * 1.5} Seconds`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                                urlButton: {
                                    displayText: 'Script🔖',
                                    url: `${sc}`
                                }
                            }, {
                                urlButton: {
                                    displayText: 'YouTube📍',
                                    url: `${myweb}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '🎀Menu🎀',
                                    id: 'menu'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '👤Owner👤',
                                    id: 'owner'
                                }
                            }]
                      let txt = `「 Cheems Bot Broadcast 」\n\n${text}`
                      XeonBotInc.send5ButImg(yoi, txt, XeonBotInc.user.name, global.thumb, btn)
		}
		reply('Broadcast Success')
            }
            break
            case 'chatinfo': case 'infochat': {
                if (!m.quoted) return reply(`Reply Message`)
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) return replay(`The Message Was Not Sent By A Bot!`)
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `🐶 @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━🐶 *Time :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} 🐶 *Status :* ${read ? 'Read' : 'Sent'}\n\n`
                }
                XeonBotInc.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case 'q': case 'quoted': {
		if (!m.quoted) return reply('Reply Message!!')
		let wokwol = await XeonBotInc.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return reply('The Message You Replied To Does Not Contain A Reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpc': case 'pclist': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *PERSONAL CHAT LIST*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `🐕 *Name :* ${nama}\n🐕 *User :* @${i.split('@')[0]}\n🐕 *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 XeonBotInc.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': case 'gclist': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *GROUP CHAT LIST*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await XeonBotInc.groupMetadata(i)
                     teks += `🐕 *Name :* ${metadata.subject}\n🐕 *Owner :* @${metadata.owner.split('@')[0]}\n🐕 *ID :* ${metadata.id}\n🐕 *Made :* ${moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n🐕 *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 XeonBotInc.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listonlinexxx': case 'onlinelistxxx': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    XeonBotInc.sendText(m.chat, 'Online List:\n\n' + online.map(v => '🐶 @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) return replay(`Reply Video/Image With Caption ${prefix + command}`)
            reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await XeonBotInc.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 Seconds!')
                let media = await quoted.download()
                let encmedia = await XeonBotInc.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                reply(`Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`)
                }
            }
            break
case 'smemex': case 'stickermemex': case 'stickmemex': {
let { TelegraPh } = require('./lib/uploader')
if (!text) return reply(`Send/Reply Photo With Caption ${prefix + command} *Text*`)
if (text.includes('|')) return reply(`Send/Reply Photo With Caption ${prefix + command} *Text*`)
if (!/image/.test(mime)) return reply(`Send/Reply Photo With Caption ${prefix + command} *Text*`)
reply(mess.wait)
mee = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`
memek = await XeonBotInc.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break
            case 'ebinary': {
            if (!m.quoted.text && !text) return replay(`Reply Text With Caption ${prefix + command}`)
            let { eBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let eb = await eBinary(teks)
            reply(eb)
        }
        break
            case 'dbinary': {
            if (!m.quoted.text && !text) return replay(`Reply Text With Caption ${prefix + command}`)
            let { dBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let db = await dBinary(teks)
            reply(db)
        }
        break
            case 'emojimix': {
	        if (!text) return replay(`Example : ${prefix + command} 😅+🤔`)
		let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await XeonBotInc.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
            case 'toimage': case 'toimg': {
                if (!quoted) return reply(`Reply Image`)
                if (!/webp/.test(mime)) reply(`Reply Sticker With Caption *${prefix + command}*`)
                reply(mess.wait)
                let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) reply(err)
                    let buffer = fs.readFileSync(ran)
                    XeonBotInc.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
                if (!quoted) reply(`Reply Image`)
                if (!/webp/.test(mime)) return replay(`Reply Sticker With Caption *${prefix + command}*`)
                reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await XeonBotInc.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return replay(`Send/Reply Video/Audio You Want To Use As Audio With Caption ${prefix + command}`)
            if (!quoted) return reply(`Send/Reply Video/Audio You Want To Convert To Audio With Caption ${prefix + command}`)
            reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            XeonBotInc.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) return reply(`Send/Reply Video/Audio You Want to Convert Into MP3 With Caption ${prefix + command}`)
            if (!/video/.test(mime) && !/audio/.test(mime)) return replay(`Send/Reply Video/Audio You Want To Convert into MP3 With Caption ${prefix + command}`)
            if (!quoted) return replay(`Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`)
            reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            XeonBotInc.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Converted By ${XeonBotInc.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
            if (!quoted) return reply(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
            reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            XeonBotInc.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
                if (!quoted) return reply(`Reply Image`)
                if (!/webp/.test(mime)) return reply(`Reply Sticker With Caption *${prefix + command}*`)
                reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await XeonBotInc.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
                reply(mess.wait)
		        let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'imagenobgxxx': case 'removebgxxx': case 'remove-bgxxx': {
	    if (!quoted) return replay(`Send/Reply Image With Caption ${prefix + command}`)
	    if (!/image/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
	    if (/webp/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await XeonBotInc.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    XeonBotInc.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	    case 'yt': case 'getvideo': {
                if (!text) return replay(`Example : ${prefix + command} How to create Queen-Alexa Whatsapp user bot`)
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `🌟 No : ${no++}\n🌟 Type : ${i.type}\n🌟 Video ID : ${i.videoId}\n🌟 Title : ${i.title}\n🌟 Views : ${i.views}\n🌟 Duration : ${i.timestamp}\n🌟 Uploaded On : ${i.ago}\n🌟 Author : ${i.author.name}\n🌟 Url : ${i.url}\n\n─────────────────\n\n`
                }
                XeonBotInc.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
        case 'google': {
                if (!text) return reply(`Example : ${prefix + command} cheems shiba inu`)
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search Title : ${text}\n\n`
                for (let g of res) {
                teks += `🐶 *Title* : ${g.title}\n`
                teks += `🐶 *Description* : ${g.snippet}\n`
                teks += `🐶 *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                reply(teks)
                })
                }
                break
        case 'image': case 'img': {
        if (!text) return reply(`Example : ${prefix + command} cheems`)
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `image ${text}`, buttonText: {displayText: '️Next'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*「 @Made by Queen-Alexa 」*`,
                    footer: XeonBotInc.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break
	    case 'play': case 'you tube': case 'search': {
                if (!text) return reply(`Example : ${prefix + command} manike mage hithe`)
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '🎧Audio'}, type: 1},
                    {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '🎬Video️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
🌟 Title : ${anu.title}
🌟 Ext : Search
🌟 ID : ${anu.videoId}
🌟 Duration : ${anu.timestamp}
🌟 Viewes : ${anu.views}
🌟 Uploaded On : ${anu.ago}
🌟 Author : ${anu.author.name}
🌟 Channel : ${anu.author.url}
🌟 Description : ${anu.description}
🌟 Url : ${anu.url}`,
                    footer: XeonBotInc.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	    case 'ytmp3': case 'song': case 'audio': {
                let { yta } = require('./lib/y2mate')
                if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag`)
                let quality = args[1] ? args[1] : '320kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 999999) return reply('File Over Limit '+util.format(media))
                XeonBotInc.sendImage(m.chat, media.thumb, `*🔄Alexa is downloaded you are song*...`, m)
                XeonBotInc.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'ytmp4': case 'mp4': case 'video': {
                let { ytv } = require('./lib/y2mate')
                if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag`)
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 999999) return reply('File Over Limit '+util.format(media))
                XeonBotInc.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `🐶 Title : ${media.title}\n🐶 File Size : ${media.filesizeF}\n🐶 Url : ${isUrl(text)}\n🐶 Ext : MP3\n🐶 Resolution : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
	    case 'getmusicxxx': {
                let { yta } = require('./lib/y2mate')
		let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 100000) return reply('File Over Limit '+util.format(media))
                XeonBotInc.sendImage(m.chat, media.thumb, `🐶 Title : ${media.title}\n🐶 File Size : ${media.filesizeF}\n🐶 Url : ${urls[text - 1]}\n🐶 Ext : MP3\n🐶 Resolution : ${args[1] || '128kbps'}`, m)
                XeonBotInc.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'getvideoxxx': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) throw 'Reply Message'
                if (!m.quoted.isBaileys) throw `Can Only Reply To Meessages From Bots`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw`Maybe The Message You Replied Does Not Contain The Video Search Result`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return reply('File Over Limit '+util.format(media))
                XeonBotInc.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `🐶 Title : ${media.title}\n🐶 File Size : ${media.filesizeF}\n🐶 Url : ${urls[text - 1]}\n🐶 Ext : MP3\n🐶 Resolution : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
            case 'pinterest': {
                reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                XeonBotInc.sendMessage(m.chat, { image: { url: result }, caption: '🐶 Media Url : '+result }, { quoted: m })
            }
            break
case 'webtonsearch': case 'webtoon':
                if (!text) return reply('What Are you Looking For??')
                await reply(mess.wait)
                dgxeon.Webtoons(q).then(async data => {
                    let txt = `*------「 WEBTOONS-SEARCH 」------*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*👍🏻 Like :* ${i.like}\n`
                        txt += `*🤴🏻 Creator :* ${i.creator}\n`
                        txt += `*🎥 Genre :* ${i.genre}\n`
                        txt += `*📚 Url :* ${i.url}\n ----------------------------------------------------------\n`
                    }
                    await reply(txt)
                })
                .catch((err) => {
                    reply(mess.error)
                })
            break
            case 'drakorxxx':
                if (!text) return reply('What Are You Looking For??')
                await reply(mess.wait)
                dgxeon.Drakor(`${text}`).then(async data => {
                    let txt = `*-----「 DRAKOR-SEARCH 」-----*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*📆 Years :* ${i.years}\n`
                        txt += `*🎥 Genre :* ${i.genre}\n`
                        txt += `*📚 Url :* ${i.url}\n-----------------------------------------------------\n`
                    }
                    await sendFileFromUrl(from,data[0].thumbnail,txt,m)
                })
                .catch((err) => {
                    reply(mess.error)
                })
            break
            case 'animexxx':{
                if (!text) return reply(`What Anime Are You Looking For??`)
                await reply(mess.wait)
                dgxeon.Anime(q).then(async data => {
                    let txt = `*-------「 ANIME-SEARCH 」-------*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com',''))
                    var but = [
				{
					"urlButton": {
						"displayText": "Watch🎥",
						"url": `${myweb}`
						}
					}
				]
				await XeonBotInc.send5ButLoc(from, txt , `© ${ownername}`,gam, but , { userJid: m.chat, quoted: m })
                })
                .catch((err) => {
                    reply(mess.error)
                })
                }
            break
            case 'characterxxx': case 'karakterxxx':
                if (!text) return reply(`What Anime Character Are You Looking For??`)
                await reply(mess.wait)
                dgxeon.Character(q).then(async data => {
                    let txt = `*---「 CHARACTER-SEARCH 」---*\n\n`
                    for (let i of data) {
                        txt += `*📫 Character :* ${i.character}\n`
                        txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com',''))
                    var but = [
				{
					"urlButton": {
						"displayText": "YouTube📍",
						"url": `${myweb}`
						}
					}
				]
				await XeonBotInc.send5ButLoc(from, txt , `© ${ownername}`,gam, but , { userJid: m.chat, quoted: m })
                })
                .catch((err) => {
                    reply(mess.error)
                })
            break
            case 'manga':
                if (!text) return reply(`What Manga Are You Looking For??`)
                await reply(mess.wait)
                dgxeon.Manga(`${text}`).then(async data => {
                    let txt = `*------「 MANGA-SEARCH 」------*\n\n`
                    for (let i of data) {
                         txt += `*📫 Title :* ${i.judul}\n`
                         txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com',''))
                    var but = [
				{
					"urlButton": {
						"displayText": "YouTube📍",
						"url": `${myweb}`
						}
					}
				]
				await XeonBotInc.send5ButLoc(from, txt , `© ${ownername}`,gam, but , { userJid: m.chat, quoted: m })
                })
                .catch((err) => {
                    reply(mess.error)
                })
            break
            case 'waifu': case 'husbu': case 'neko': case 'shinobu': case 'megumin': case 'waifus': case 'nekos': case 'trap': case 'blowjob': {
                reply(mess.wait)
                XeonBotInc.sendMessage(m.chat, { image: { url: api('zenz', '/api/random/'+command, {}, 'apikey') }, caption: 'Generated Random ' + command }, { quoted: m })
            }
            break
	    case 'couplepp':  case 'ppcouple': {
                reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                XeonBotInc.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male🙎🏻‍♂️` }, { quoted: m })
                XeonBotInc.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female🙎🏻‍♀️` }, { quoted: m })
            }
	    break
            case 'coffee': case 'kopi': {
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: '➡️Next Image➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ Random Coffee`,
                    footer: XeonBotInc.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wallpaper': {
                if (!text) return reply(`Enter Query Title`)
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: '➡️Next Image➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `🐶 Title : ${result.title}\n🐶 Category : ${result.type}\n🐶 Detail : ${result.source}\n🐶 Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: XeonBotInc.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            case 'alexawallpaper': {
            var r_text = new Array ();

        r_text[0] = "https://images.wallpaperscraft.com/image/trees_pines_lake_198439_4480x6720.jpg";
        r_text[1] = "https://images.wallpaperscraft.com/image/trees_pines_mountains_160486_3648x5472.jpg";
        r_text[2] = "https://images.wallpaperscraft.com/image/trees_pines_path_155613_5504x8256.jpg";
        r_text[3] = "https://images.wallpaperscraft.com/image/trees_pines_sky_196842_2667x4000.jpg";
        r_text[4] = "https://images.wallpaperscraft.com/image/rain_crowd_silhouettes_137826_4000x6000.jpg";
        r_text[5] = "https://images.wallpaperscraft.com/image/night_city_aerial_view_buildings_198434_1350x2400.jpg";
        r_text[6] = "https://images.wallpaperscraft.com/image/night_city_aerial_view_buildings_194665_1350x2400.jpg";
        r_text[7] = "https://images.wallpaperscraft.com/image/night_city_aerial_view_buildings_147623_1350x2400.jpg";
        r_text[8] = "https://images.wallpaperscraft.com/image/night_city_aerial_view_buildings_195654_1350x2400.jpg";
        r_text[9] = "https://images.wallpaperscraft.com/image/glasses_hood_equipment_165388_3435x4668.jpg";
        r_text[10] = "https://images.wallpaperscraft.com/image/glasses_notebook_pen_189578_6144x4098.jpg";
        r_text[11] = "https://images.wallpaperscraft.com/image/glasses_portrait_aviator_162002_5600x3172.jpg";
        r_text[12] = "https://images.wallpaperscraft.com/image/ford_mustang_nissan_gtr_cars_198306_3264x4928.jpg";
        r_text[13] = "https://images.wallpaperscraft.com/image/ford_mustang_ford_cars_traffic_road_99460_2048x1420.jpg";
        r_text[14] = "https://images.wallpaperscraft.com/image/ford_mustang_car_blue_194991_2832x4240.jpg";
        r_text[15] = "https://images.wallpaperscraft.com/image/nebula_stars_space_198413_2160x2160.jpg";
        r_text[16] = "https://images.wallpaperscraft.com/image/nebula_stars_space_189356_5150x3648.jpg";
        r_text[17] = "https://images.wallpaperscraft.com/image/neon_light_long_exposure_198397_4000x6000.jpg";
        r_text[18] = "https://images.wallpaperscraft.com/image/house_mountains_trees_198408_2160x3840.jpg";
        r_text[19] = "https://images.wallpaperscraft.com/image/tower_skyscraper_architecture_198391_2160x3840.jpg";
        r_text[20] = "https://images.wallpaperscraft.com/image/tower_skyscraper_backlight_124786_2160x3840.jpg";
        r_text[21] = "https://images.wallpaperscraft.com/image/tower_skyscraper_architecture_135204_2160x3840.jpg";
        r_text[22] = "https://images.wallpaperscraft.com/image/snow_trees_house_155516_2160x3840.jpg";
        r_text[23] = "https://images.wallpaperscraft.com/image/snow_mountains_peaks_160678_2160x3840.jpg";
        r_text[24] = "https://images.wallpaperscraft.com/image/snow_sun_landscape_147124_2160x3840.jpg";
        r_text[25] = "https://images.wallpaperscraft.com/image/snow_branches_winter_134689_2160x3840.jpg";
        r_text[26] = "https://images.wallpaperscraft.com/image/girl_space_anime_160127_2160x3840.jpg";
        r_text[27] = "https://images.wallpaperscraft.com/image/girl_anime_hat_178724_2160x3840.jpg";
        r_text[28] = "https://images.wallpaperscraft.com/image/girl_umbrella_anime_141156_2160x3840.jpg";
        r_text[29] = "https://images.wallpaperscraft.com/image/silhouette_starry_sky_pillars_134464_2160x3840.jpg";
        r_text[30] = "https://images.wallpaperscraft.com/image/silhouette_starry_sky_dark_165822_2160x3840.jpg";
        r_text[31] = "https://images.wallpaperscraft.com/image/silhouette_starry_sky_stargazing_139774_2160x3840.jpg";
        r_text[32] = "https://images.wallpaperscraft.com/image/face_mitt_inscription_bye_114113_6000x4000.jpg";
        r_text[33] = "https://images.wallpaperscraft.com/image/face_paint_profile_abstraction_95073_1920x1080.jpg";
        r_text[34] = "https://images.wallpaperscraft.com/image/face_paint_lips_burst_dark_61870_2560x1440.jpg";
        r_text[35] = "https://images.wallpaperscraft.com/image/hologram_shimmering_colorful_198479_1350x2400.jpg";
        r_text[36] = "https://images.wallpaperscraft.com/image/cave_puddle_reflection_198472_1350x2400.jpg";
        r_text[37] = "https://images.wallpaperscraft.com/image/cave_rock_darkness_169378_1350x2400.jpg";
        r_text[38] = "https://images.wallpaperscraft.com/image/cave_rock_light_151228_1350x2400.jpg";
        r_text[39] = "https://images.wallpaperscraft.com/image/cave_rock_stones_158178_1350x2400.jpg";
        r_text[40] = "https://images.wallpaperscraft.com/image/cyborg_mask_neon_161237_3840x2160.jpg";
        r_text[41] = "https://images.wallpaperscraft.com/image/anonymous_mask_hood_198441_1350x2400.jpg";
        r_text[42] = "https://images.wallpaperscraft.com/image/anonymous_mask_hood_157796_1350x2400.jpg";
        r_text[43] = "https://images.wallpaperscraft.com/image/anonymous_mask_hood_144336_1350x2400.jpg";
        r_text[44] = "https://images.wallpaperscraft.com/image/anonymous_mask_hood_140068_1350x2400.jpg";
        r_text[45] = "https://images.wallpaperscraft.com/image/ball_planet_colorful_132216_1440x2560.jpg";
        r_text[46] = "https://images.wallpaperscraft.com/image/ball_planet_silhouette_149189_1440x2560.jpg";
        r_text[47] = "https://images.wallpaperscraft.com/image/ball_planet_hands_131055_1440x2560.jpg";
        r_text[48] = "https://images.wallpaperscraft.com/image/ball_planet_shroud_136916_1440x2560.jpg";
        r_text[49] = "https://images.wallpaperscraft.com/image/ball_glow_hand_190683_1440x2560.jpg";
        r_text[50] = "https://images.wallpaperscraft.com/image/ball_hands_glow_166373_1440x2560.jpg";
        r_text[51] = "https://images.wallpaperscraft.com/image/ball_glow_mask_140903_1440x2560.jpg";
        r_text[52] = "https://images.wallpaperscraft.com/image/ball_glow_stone_169306_1440x2560.jpg";
        r_text[53] = "https://images.wallpaperscraft.com/image/ball_glow_reflection_165921_4072x2697.jpg";
        r_text[54] = "https://images.wallpaperscraft.com/image/ball_glow_silhouette_149491_1920x2304.jpg";
        r_text[55] = "https://images.wallpaperscraft.com/image/ball_glow_line_light_28298_1680x1050.jpg";
        r_text[56] = "https://images.wallpaperscraft.com/image/ball_circles_glow_168614_1440x2560.jpg";
        r_text[57] = "https://images.wallpaperscraft.com/image/ball_circles_neon_137700_1440x2560.jpg";
        r_text[58] = "https://images.wallpaperscraft.com/image/ball_neon_backlight_147061_1440x2560.jpg";
        r_text[59] = "https://images.wallpaperscraft.com/image/ball_reflection_neon_168932_1440x2560.jpg";
        r_text[60] = "https://images.wallpaperscraft.com/image/ball_reflection_hand_184546_1440x2560.jpg";
        r_text[61] = "https://images.wallpaperscraft.com/image/crystal_ball_ball_hand_142442_1440x2560.jpg";
        r_text[62] = "https://images.wallpaperscraft.com/image/building_water_minimalism_198457_3145x4718.jpg";
        r_text[63] = "https://images.wallpaperscraft.com/image/triangle_inverted_black_white_92770_2560x1600.jpg";
        r_text[64] = "https://images.wallpaperscraft.com/image/lamp_electricity_minimalism_128251_1440x2560.jpg";
        r_text[65] = "https://images.wallpaperscraft.com/image/lamp_electricity_spiral_luminescence_120309_1440x2560.jpg";
        r_text[66] = "https://images.wallpaperscraft.com/image/lamp_spiral_electricity_light_119929_1440x2560.jpg";
        r_text[67] = "https://images.wallpaperscraft.com/image/skyscraper_building_architecture_sky_bottom_view_118409_1440x2560.jpg";
        r_text[68] = "https://images.wallpaperscraft.com/image/skyscraper_bottom_view_building_187222_1440x2560.jpg";
        r_text[69] = "https://images.wallpaperscraft.com/image/skyscraper_architecture_bottom_view_123571_1440x2560.jpg";
        r_text[70] = "https://images.wallpaperscraft.com/image/skyscraper_architecture_bottom_view_136419_1440x2560.jpg";
        r_text[71] = "https://images.wallpaperscraft.com/image/cherries_cherry_berry_122190_1440x2560.jpg";
        r_text[72] = "https://images.wallpaperscraft.com/image/water_hand_sea_horizon_118181_1440x2560.jpg";
        r_text[73] = "https://images.wallpaperscraft.com/image/water_hand_stones_148518_1440x2560.jpg";
        r_text[74] = "https://images.wallpaperscraft.com/image/water_stream_flow_169694_1440x2560.jpg";
        r_text[75] = "https://images.wallpaperscraft.com/image/water_horizon_dusk_175987_1440x2560.jpg";
        r_text[76] = "https://images.wallpaperscraft.com/image/water_moon_dusk_191709_1440x2560.jpg";
        r_text[77] = "https://images.wallpaperscraft.com/image/water_horizon_sky_164418_1440x2560.jpg";
        r_text[78] = "https://images.wallpaperscraft.com/image/water_sky_horizon_140454_1440x2560.jpg";
        r_text[79] = "https://images.wallpaperscraft.com/image/water_horizon_sunset_168843_1440x2560.jpg";
        r_text[80] = "https://images.wallpaperscraft.com/image/moon_phases_black_175210_3648x5472.jpg";
        r_text[81] = "https://images.wallpaperscraft.com/image/moon_black_sky_191125_2318x2864.jpg";
        r_text[82] = "https://images.wallpaperscraft.com/image/stains_paint_mixing_198500_2160x3840.jpg";
        r_text[83] = "https://images.wallpaperscraft.com/image/stains_paint_mixing_195514_2160x3840.jpg";
        r_text[84] = "https://images.wallpaperscraft.com/image/stains_liquid_paint_191590_2160x3840.jpg";
        r_text[85] = "https://images.wallpaperscraft.com/image/stains_liquid_paint_147522_2160x3840.jpg";
        r_text[86] = "https://images.wallpaperscraft.com/image/stains_liquid_paint_151928_2160x3840.jpg";
        r_text[87] = "https://images.wallpaperscraft.com/image/stains_abstraction_texture_157950_2160x3840.jpg";
        r_text[88] = "https://images.wallpaperscraft.com/image/stains_paint_liquid_146393_2160x3840.jpg";
        r_text[89] = "https://images.wallpaperscraft.com/image/girl_helmet_cyberpunk_194603_2160x3840.jpg";
        r_text[90] = "https://images.wallpaperscraft.com/image/girl_alone_autumn_192003_2160x3840.jpg";
        r_text[91] = "https://images.wallpaperscraft.com/image/girl_loneliness_alone_183388_2160x3840.jpg";
        r_text[92] = "https://images.wallpaperscraft.com/image/girl_silhouette_loneliness_177299_2160x3840.jpg";
        r_text[93] = "https://images.wallpaperscraft.com/image/car_glaciers_scifi_137640_1440x2560.jpg";
        r_text[94] = "https://images.wallpaperscraft.com/image/unicorn_wings_horse_125631_1440x2560.jpg";
        r_text[95] = "https://images.wallpaperscraft.com/image/surrealism_man_door_126312_1440x2560.jpg";
        r_text[96] = "https://images.wallpaperscraft.com/image/surrealism_astronaut_art_121819_1440x2560.jpg";
        r_text[97] = "https://images.wallpaperscraft.com/image/astronaut_giant_art_142663_1440x2560.jpg";
        r_text[98] = "https://images.wallpaperscraft.com/image/astronaut_spaceship_space_147409_1440x2560.jpg";
        r_text[99] = "https://images.wallpaperscraft.com/image/astronaut_cosmonaut_art_131212_1440x2560.jpg";
        r_text[100] = "https://images.wallpaperscraft.com/image/anonymous_mask_hood_140068_1350x2400.jpg";
        r_text[101] = "https://images.wallpaperscraft.com/image/moon_clouds_sky_198436_1600x1200.jpg";
        r_text[102] = "https://images.wallpaperscraft.com/image/moon_clouds_night_134255_1350x2400.jpg";
        r_text[103] = "https://images.wallpaperscraft.com/image/planet_clouds_light_star_94996_1280x1024.jpg";
        r_text[104] = "https://images.wallpaperscraft.com/image/couple_starry_sky_art_123338_1350x2400.jpg";
        r_text[105] = "https://images.wallpaperscraft.com/image/drops_dew_petal_90137_1280x1280.jpg";
        r_text[106] = "https://images.wallpaperscraft.com/image/wolf_silhouette_moon_night_118727_1280x1280.jpg";
        r_text[107] = "https://images.wallpaperscraft.com/image/wolf_moon_night_150508_3415x3415.jpg";
        r_text[108] = "https://images.wallpaperscraft.com/image/neon_lettering_rainbow_128663_3415x3415.jpg";
        r_text[109] = "https://images.wallpaperscraft.com/image/neon_lettering_rainbow_128663_3415x3415.jpg";
        r_text[110] = "https://images.wallpaperscraft.com/image/tree_planet_stars_galaxy_art_117068_2780x2780.jpg";
        r_text[111] = "https://images.wallpaperscraft.com/image/ball_fire_football_122318_3415x3415.jpg";
        r_text[112] = "https://images.wallpaperscraft.com/image/ball_texture_volume_196647_3415x3415.jpg";
        r_text[113] = "https://images.wallpaperscraft.com/image/keyboard_backlight_light_159518_1280x1280.jpg";
        r_text[114] = "https://images.wallpaperscraft.com/image/keyboard_key_backlight_128828_1350x2400.jpg";
        r_text[115] = "https://images.wallpaperscraft.com/image/headphones_keyboard_audio_129691_3415x3415.jpg";
        r_text[116] = "https://images.wallpaperscraft.com/image/cube_figure_dark_142157_1280x1280.jpg";
        r_text[117] = "https://images.wallpaperscraft.com/image/cat_eyes_blue_143433_1350x2400.jpg";
        r_text[118] = "https://images.wallpaperscraft.com/image/city_night_panorama_117682_3415x3415.jpg";
        r_text[119] = "https://images.wallpaperscraft.com/image/city_night_buildings_192988_3415x3415.jpg";
        r_text[120] = "https://images.wallpaperscraft.com/image/city_night_buildings_183963_3415x3415.jpg";
        r_text[121] = "https://images.wallpaperscraft.com/image/city_night_aerial_view_157260_3415x3415.jpg";
        r_text[122] = "https://images.wallpaperscraft.com/image/city_night_aerial_view_191587_3415x3415.jpg";
        r_text[123] = "https://images.wallpaperscraft.com/image/coffee_mug_chair_124443_2780x2780.jpg";
        r_text[124] = "https://images.wallpaperscraft.com/image/coffee_mug_hands_132301_2780x2780.jpg";
        r_text[125] = "https://images.wallpaperscraft.com/image/puppy_husky_down_cute_53643_1280x1280.jpg";
        r_text[126] = "https://images.wallpaperscraft.com/image/cat_lying_kitten_playful_91882_1024x768.jpg";
        r_text[127] = "https://images.wallpaperscraft.com/image/cat_lying_tongue_playful_glass_striped_26572_1280x1280.jpg";
        r_text[128] = "https://images.wallpaperscraft.com/image/match_fire_macro_198486_1280x1280.jpg";
        r_text[129] = "https://images.wallpaperscraft.com/image/match_smoke_macro_133503_3415x3415.jpg";
        r_text[130] = "https://images.wallpaperscraft.com/image/smoke_hood_silhouette_128612_3415x3415.jpg";
        r_text[131] = "https://images.wallpaperscraft.com/image/silhouette_hood_sunset_155194_3415x3415.jpg";
        r_text[132] = "https://images.wallpaperscraft.com/image/silhouette_sunset_dark_141637_3415x3415.jpg";
        r_text[133] = "https://images.wallpaperscraft.com/image/stairs_building_tower_198497_3415x3415.jpg";
        r_text[134] = "https://images.wallpaperscraft.com/image/forest_fog_trees_126479_3415x3415.jpg";
        r_text[135] = "https://images.wallpaperscraft.com/image/forest_fog_trees_173667_3415x3415.jpg";
        r_text[136] = "https://images.wallpaperscraft.com/image/tree_christmas_new_year_132207_3415x3415.jpg";
        r_text[137] = "https://images.wallpaperscraft.com/image/tree_decorations_balls_195401_3415x3415.jpg";
        r_text[138] = "https://images.wallpaperscraft.com/image/book_ring_heart_love_118982_3415x3415.jpg";
        r_text[139] = "https://images.wallpaperscraft.com/image/book_inscription_motivation_195284_3415x3415.jpg";
        r_text[140] = "https://images.wallpaperscraft.com/image/book_branch_dark_165540_3415x3415.jpg";
        r_text[141] = "https://images.wallpaperscraft.com/image/book_cup_coffee_155045_3415x3415.jpg";
        r_text[142] = "https://images.wallpaperscraft.com/image/book_bouquet_cup_147482_3415x3415.jpg";
        r_text[143] = "https://images.wallpaperscraft.com/image/glass_lemon_spray_122158_1350x2400.jpg";
        r_text[144] = "https://images.wallpaperscraft.com/image/glass_drops_spray_162357_1350x2400.jpg";
        r_text[145] = "https://images.wallpaperscraft.com/image/glass_drops_macro_195219_1350x2400.jpg";
        r_text[146] = "https://images.wallpaperscraft.com/image/snowflake_pattern_structure_ice_119262_1350x2400.jpg";
        r_text[147] = "https://images.wallpaperscraft.com/image/snowflake_macro_pattern_162125_1350x2400.jpg";
        r_text[148] = "https://images.wallpaperscraft.com/image/snowflake_decoration_white_196180_1350x2400.jpg";
        r_text[149] = "https://images.wallpaperscraft.com/image/couple_hands_love_tenderness_coffee_118921_3415x3415.jpg";
        r_text[150] = "https://images.wallpaperscraft.com/image/couple_kiss_tenderness_135381_3415x3415.jpg";
        r_text[151] = "https://images.wallpaperscraft.com/image/couple_kiss_romance_love_116829_3415x3415.jpg";
        r_text[152] = "https://images.wallpaperscraft.com/image/motorcyclist_motorcycle_sunset_121025_1280x1280.jpg";
        r_text[153] = "https://images.wallpaperscraft.com/image/motorcyclist_motorcycle_helmet_186641_1280x1280.jpg";
        r_text[154] = "https://images.wallpaperscraft.com/image/motorcyclist_motorcycle_helmet_171640_1280x1280.jpg";
        r_text[155] = "https://images.wallpaperscraft.com/image/headphones_books_education_121501_3415x3415.jpg";
        r_text[156] = "https://images.wallpaperscraft.com/image/headphones_metallic_silver_139878_3415x3415.jpg";
        r_text[157] = "https://images.wallpaperscraft.com/image/ship_sea_sunset_moon_63381_1600x1200.jpg";
        r_text[158] = "https://images.wallpaperscraft.com/image/ship_mast_sunset_sea_116168_1600x1200.jpg";
        r_text[159] = "https://images.wallpaperscraft.com/image/ship_sun_sunset_165669_1600x1200.jpg";
        r_text[160] = "https://images.wallpaperscraft.com/image/ship_sunset_spray_168736_2780x2780.jpg";
        r_text[161] = "https://images.wallpaperscraft.com/image/ship_sea_sunset_shore_115026_2780x2780.jpg";
        r_text[162] = "https://images.wallpaperscraft.com/image/smile_inscription_hand_hello_118043_3415x3415.jpg";
        r_text[163] = "https://images.wallpaperscraft.com/image/smile_smiley_ball_184348_3415x3415.jpg";
        r_text[164] = "https://images.wallpaperscraft.com/image/smile_happiness_ball_125063_3415x3415.jpg";
        r_text[165] = "https://images.wallpaperscraft.com/image/flower_pink_petals_bud_close_up_119905_1280x1280.jpg";
        r_text[166] = "https://images.wallpaperscraft.com/image/rose_flower_close_up_petals_119252_3415x3415.jpg";
        r_text[167] = "https://images.wallpaperscraft.com/image/rose_flower_petals_179553_3415x3415.jpg";
        r_text[168] = "https://images.wallpaperscraft.com/image/rose_flower_red_150623_3415x3415.jpg";
        r_text[169] = "https://images.wallpaperscraft.com/image/rose_flower_red_148978_3415x3415.jpg";
        r_text[170] = "https://images.wallpaperscraft.com/image/unicorn_water_forest_night_magic_68838_1280x1280.jpg";
        r_text[171] = "https://images.wallpaperscraft.com/image/forest_water_spruce_163253_1280x1280.jpg";
        r_text[172] = "https://images.wallpaperscraft.com/image/deer_planet_art_129712_1280x1280.jpg";
        r_text[173] = "https://images.wallpaperscraft.com/image/deer_art_wildlife_121850_1280x1280.jpg";
        r_text[174] = "https://images.wallpaperscraft.com/image/car_sports_car_neon_157154_1280x1280.jpg";
        r_text[175] = "https://images.wallpaperscraft.com/image/car_sportscar_neon_156622_1280x1280.jpg";
        r_text[176] = "https://images.wallpaperscraft.com/image/car_sportscar_road_156718_1600x1200.jpg";
        r_text[177] = "https://images.wallpaperscraft.com/image/lane_night_dark_139408_2780x2780.jpg";
        r_text[178] = "https://images.wallpaperscraft.com/image/night_moon_dark_146181_2780x2780.jpg";
        r_text[179] = "https://images.wallpaperscraft.com/image/ladder_purple_light_118353_1350x2400.jpg";
        r_text[180] = "https://images.wallpaperscraft.com/image/ladder_forest_bamboo_195758_1350x2400.jpg";
        r_text[181] = "https://images.wallpaperscraft.com/image/pluto_planet_dwarf_planet_trans_neptunian_objects_news_97479_1400x1050.jpg";
        r_text[182] = "https://images.wallpaperscraft.com/image/snowboarding_trick_jump_snow_99047_1280x1280.jpg";
        r_text[183] = "https://images.wallpaperscraft.com/image/snowboarding_snowboarder_mountain_snow_slope_110491_1280x1280.jpg";
        r_text[184] = "https://images.wallpaperscraft.com/image/hologram_scheme_scifi_139294_2780x2780.jpg";
        r_text[185] = "https://images.wallpaperscraft.com/image/night_city_buildings_aerial_view_198465_3415x3415.jpg";
        r_text[186] = "https://images.wallpaperscraft.com/image/night_city_buildings_aerial_view_156134_3415x3415.jpg";
        r_text[187] = "https://images.wallpaperscraft.com/image/night_city_buildings_aerial_view_151198_3415x3415.jpg";
        r_text[188] = "https://images.wallpaperscraft.com/image/ladybug_drop_surface_106249_1280x1280.jpg";
        r_text[189] = "https://images.wallpaperscraft.com/image/ladybug_grass_macro_190135_1280x1280.jpg";
        r_text[190] = "https://images.wallpaperscraft.com/image/coffee_grill_cup_110673_3415x3415.jpg";
        r_text[191] = "https://images.wallpaperscraft.com/image/coffee_cup_spoons_191170_3415x3415.jpg";
        r_text[192] = "https://images.wallpaperscraft.com/image/train_subway_underground_120794_3415x3415.jpg";
        r_text[193] = "https://images.wallpaperscraft.com/image/train_railway_buildings_175616_3415x3415.jpg";
        r_text[194] = "https://images.wallpaperscraft.com/image/train_railway_forest_169685_3415x3415.jpg";
        r_text[195] = "https://images.wallpaperscraft.com/image/cosmonaut_space_suit_multicolored_123724_2780x2780.jpg";
        r_text[196] = "https://images.wallpaperscraft.com/image/city_art_retrowave_143233_1280x1280.jpg";
        r_text[197] = "https://images.wallpaperscraft.com/image/city_art_sky_127834_1280x1280.jpg";
        r_text[198] = "https://images.wallpaperscraft.com/image/city_fantasy_art_140441_1280x1280.jpg";
        r_text[199] = "https://images.wallpaperscraft.com/image/city_architecture_buildings_191290_1280x1280.jpg";
        r_text[200] = "https://images.wallpaperscraft.com/image/city_road_cars_185798_1280x1280.jpg";
        r_text[201] = "https://images.wallpaperscraft.com/image/aquilegia_flower_pink_198372_1350x2400.jpg";
        r_text[202] = "https://images.wallpaperscraft.com/image/ice_drop_macro_198291_1350x2400.jpg";
        r_text[203] = "https://images.wallpaperscraft.com/image/plant_succulent_leaves_198231_1350x2400.jpg";
        r_text[204] = "https://images.wallpaperscraft.com/image/bike_cyclist_spray_194016_1350x2400.jpg";
        r_text[205] = "https://images.wallpaperscraft.com/image/football_field_aerial_view_football_196247_1350x2400.jpg";
        r_text[206] = "https://images.wallpaperscraft.com/image/surfer_surfing_water_193190_1350x2400.jpg";
        r_text[207] = "https://images.wallpaperscraft.com/image/basketball_basketball_backboard_net_186633_1350x2400.jpg";
        r_text[208] = "https://images.wallpaperscraft.com/image/surfing_waves_sea_178352_1350x2400.jpg";
        r_text[209] = "https://images.wallpaperscraft.com/image/brick_wall_wall_red_177161_1350x2400.jpg";
        r_text[210] = "https://images.wallpaperscraft.com/image/snowboarder_snowboard_slope_175058_1350x2400.jpg";
        r_text[211] = "https://images.wallpaperscraft.com/image/bicycle_tourist_cyclist_176697_1350x2400.jpg";
        r_text[212] = "https://images.wallpaperscraft.com/image/construction_concrete_architecture_198318_1350x2400.jpg";
        r_text[213] = "https://images.wallpaperscraft.com/image/waves_sand_surface_198035_1350x2400.jpg";
        r_text[214] = "https://images.wallpaperscraft.com/image/wall_brick_white_197530_1350x2400.jpg";
        r_text[215] = "https://images.wallpaperscraft.com/image/laptop_backlight_colorful_194324_1350x2400.jpg";
        r_text[216] = "https://images.wallpaperscraft.com/image/mask_totem_smoke_192795_1350x2400.jpg";
        r_text[217] = "https://images.wallpaperscraft.com/image/code_programming_text_169456_1350x2400.jpg";
        r_text[218] = "https://images.wallpaperscraft.com/image/code_text_programming_146694_1350x2400.jpg";
        r_text[219] = "https://images.wallpaperscraft.com/image/air_balloon_smiley_smile_156188_1350x2400.jpg";
        r_text[220] = "https://images.wallpaperscraft.com/image/balloon_smiley_smile_126654_1350x2400.jpg";
        r_text[221] = "https://images.wallpaperscraft.com/image/balloon_heart_ball_174468_1350x2400.jpg";
        r_text[222] = "https://images.wallpaperscraft.com/image/smile_smiley_sad_156138_1350x2400.jpg";
        r_text[223] = "https://images.wallpaperscraft.com/image/heart_love_colorful_183687_1350x2400.jpg";
        r_text[224] = "https://images.wallpaperscraft.com/image/love_silhouette_fireworks_178667_1350x2400.jpg";
        r_text[225] = "https://images.wallpaperscraft.com/image/silhouette_sunset_birds_145330_1350x2400.jpg";
        r_text[226] = "https://images.wallpaperscraft.com/image/silhouette_love_sunset_174077_1350x2400.jpg";
        r_text[227] = "https://images.wallpaperscraft.com/image/twilight_evening_snow_135246_1350x2400.jpg";
        r_text[228] = "https://images.wallpaperscraft.com/image/twilight_dark_moon_147499_1350x2400.jpg";
        r_text[229] = "https://images.wallpaperscraft.com/image/fireworks_night_mountains_198047_1350x2400.jpg";
        r_text[230] = "https://images.wallpaperscraft.com/image/fireworks_sparks_red_197506_1350x2400.jpg";
        r_text[231] = "https://images.wallpaperscraft.com/image/fireworks_salute_sparks_137774_1350x2400.jpg";
        r_text[232] = "https://images.wallpaperscraft.com/image/fireworks_sparks_colorful_196732_1350x2400.jpg";
        r_text[233] = "https://images.wallpaperscraft.com/image/fireworks_sparks_colorful_196102_1350x2400.jpg";
        r_text[234] = "https://images.wallpaperscraft.com/image/fireworks_sparks_holiday_135883_1350x2400.jpg";
        r_text[235] = "https://images.wallpaperscraft.com/image/fireworks_sparks_yellow_197597_1350x2400.jpg";
        r_text[236] = "https://images.wallpaperscraft.com/image/mugs_hot_chocolate_marshmallow_198277_1350x2400.jpg";
        r_text[237] = "https://images.wallpaperscraft.com/image/mugs_tea_camping_123511_1350x2400.jpg";
        r_text[238] = "https://images.wallpaperscraft.com/image/camping_bonfire_firewood_176339_1350x2400.jpg";
        r_text[239] = "https://images.wallpaperscraft.com/image/camping_tent_forest_186906_1350x2400.jpg";
        r_text[240] = "https://images.wallpaperscraft.com/image/acoustic_guitar_guitar_musical_instrument_198075_1350x2400.jpg";
        r_text[241] = "https://images.wallpaperscraft.com/image/guitar_musical_instrument_neon_196631_1350x2400.jpg";
        r_text[242] = "https://images.wallpaperscraft.com/image/speakers_speaker_music_196514_1350x2400.jpg";
        r_text[243] = "https://images.wallpaperscraft.com/image/anime_schoolgirl_uniform_120955_1080x1920.jpg";
        r_text[244] = "https://images.wallpaperscraft.com/image/anime_girl_leaves_162517_1080x1920.jpg";
        r_text[245] = "https://images.wallpaperscraft.com/image/girl_anime_wind_188165_1080x1920.jpg";
        r_text[246] = "https://images.wallpaperscraft.com/image/girl_anime_guitar_184800_1080x1920.jpg";
        r_text[247] = "https://images.wallpaperscraft.com/image/buildings_river_snow_198357_1350x2400.jpg";
        r_text[248] = "https://images.wallpaperscraft.com/image/ferris_wheel_buildings_skyscrapers_198273_1350x2400.jpg";
        r_text[249] = "https://images.wallpaperscraft.com/image/plane_trail_sky_197126_1350x2400.jpg";
        r_text[250] = "https://images.wallpaperscraft.com/image/arrow_pointer_wall_196731_1350x2400.jpg";
        r_text[251] = "https://images.wallpaperscraft.com/image/tower_building_architecture_196271_1350x2400.jpg";
        r_text[252] = "https://images.wallpaperscraft.com/image/exit_sign_text_198303_1350x2400.jpg";
        r_text[253] = "https://images.wallpaperscraft.com/image/text_neon_word_197314_1350x2400.jpg";
        r_text[254] = "https://images.wallpaperscraft.com/image/text_neon_red_197382_1350x2400.jpg";
        r_text[255] = "https://images.wallpaperscraft.com/image/text_neon_glow_154000_1350x2400.jpg";
        r_text[256] = "https://images.wallpaperscraft.com/image/lines_light_long_exposure_198464_1350x2400.jpg";
        r_text[257] = "https://images.wallpaperscraft.com/image/ripples_distortion_glitch_198376_1350x2400.jpg";
        r_text[258] = "https://images.wallpaperscraft.com/image/glare_circles_bokeh_196930_1350x2400.jpg";
        r_text[259] = "https://images.wallpaperscraft.com/image/glare_drops_glass_184778_1350x2400.jpg";
        r_text[260] = "https://images.wallpaperscraft.com/image/glare_bokeh_glass_135378_1350x2400.jpg";
        r_text[261] = "https://images.wallpaperscraft.com/image/glare_drops_glass_182121_1350x2400.jpg";
        r_text[262] = "https://images.wallpaperscraft.com/image/paint_glitter_glow_198154_1350x2400.jpg";
        r_text[263] = "https://images.wallpaperscraft.com/image/neon_light_lines_198013_1350x2400.jpg";
        r_text[264] = "https://images.wallpaperscraft.com/image/paint_stains_spots_197765_1350x2400.jpg";
        r_text[265] = "https://images.wallpaperscraft.com/image/paint_liquid_stains_197801_1350x2400.jpg";
        r_text[266] = "https://images.wallpaperscraft.com/image/waves_blur_distortion_197664_1350x2400.jpg";
        r_text[267] = "https://images.wallpaperscraft.com/image/light_blur_long_exposure_197601_1350x2400.jpg";
        r_text[268] = "https://images.wallpaperscraft.com/image/paint_stains_colorful_197490_1350x2400.jpg";
        r_text[269] = "https://images.wallpaperscraft.com/image/lines_light_long_exposure_197743_1350x2400.jpg";
        r_text[270] = "https://images.wallpaperscraft.com/image/fractal_kaleidoscope_abstraction_197190_1350x2400.jpg";
        r_text[271] = "https://images.wallpaperscraft.com/image/fractal_kaleidoscope_symmetry_145575_1350x2400.jpg";
        r_text[272] = "https://images.wallpaperscraft.com/image/fractal_kaleidoscope_symmetry_143804_1350x2400.jpg";
        r_text[273] = "https://images.wallpaperscraft.com/image/stains_paint_mixing_197137_1350x2400.jpg";
        r_text[274] = "https://images.wallpaperscraft.com/image/girl_outfit_hat_188185_1350x2400.jpg";
        r_text[275] = "https://images.wallpaperscraft.com/image/girl_shell_hare_167320_1350x2400.jpg";
        r_text[276] = "https://images.wallpaperscraft.com/image/piano_silhouette_space_156662_1350x2400.jpg";
        r_text[277] = "https://images.wallpaperscraft.com/image/girl_umbrella_rain_151317_1350x2400.jpg";
        r_text[278] = "https://images.wallpaperscraft.com/image/girl_bike_night_140306_1350x2400.jpg";
        r_text[279] = "https://images.wallpaperscraft.com/image/girl_kitten_flower_141058_1350x2400.jpg";
        r_text[280] = "https://images.wallpaperscraft.com/image/guy_anime_computer_tears_sadness_room_96990_1350x2400.jpg";
        r_text[281] = "https://images.wallpaperscraft.com/image/girl_silhouette_water_143788_1350x2400.jpg";
        r_text[282] = "https://images.wallpaperscraft.com/image/girl_silhouette_flame_188312_1350x2400.jpg";
        r_text[283] = "https://images.wallpaperscraft.com/image/girl_silhouette_dark_158863_1350x2400.jpg";
        r_text[284] = "https://images.wallpaperscraft.com/image/girl_silhouette_cave_188345_1350x2400.jpg";
        r_text[285] = "https://images.wallpaperscraft.com/image/girl_silhouette_sunset_181444_1350x2400.jpg";
        r_text[286] = "https://images.wallpaperscraft.com/image/girl_silhouette_balloon_161854_1350x2400.jpg";
        r_text[287] = "https://images.wallpaperscraft.com/image/girl_silhouette_tree_198492_1350x2400.jpg";
        r_text[288] = "https://images.wallpaperscraft.com/image/girl_tree_alone_184155_1350x2400.jpg";
        r_text[289] = "https://images.wallpaperscraft.com/image/girl_cat_art_120828_1350x2400.jpg";
        r_text[290] = "https://images.wallpaperscraft.com/image/girl_art_cat_132215_1350x2400.jpg";
        r_text[291] = "https://images.wallpaperscraft.com/image/girl_art_hair_135305_1350x2400.jpg";
        r_text[292] = "https://images.wallpaperscraft.com/image/girl_hat_hair_188730_1350x2400.jpg";
        r_text[293] = "https://images.wallpaperscraft.com/image/girl_hat_grass_163162_1350x2400.jpg";
        r_text[294] = "https://images.wallpaperscraft.com/image/girl_grass_field_179538_1350x2400.jpg";
        r_text[295] = "https://images.wallpaperscraft.com/image/girl_lights_grass_163914_1350x2400.jpg";
        r_text[296] = "https://images.wallpaperscraft.com/image/girl_field_wind_122296_1350x2400.jpg";
        r_text[297] = "https://images.wallpaperscraft.com/image/lines_stripes_black_195706_1350x2400.jpg";
        r_text[298] = "https://images.wallpaperscraft.com/image/lines_stripes_neon_174447_1350x2400.jpg";
        r_text[299] = "https://images.wallpaperscraft.com/image/lines_stripes_neon_175902_1350x2400.jpg";
        r_text[300] = "https://images.wallpaperscraft.com/image/lines_neon_glow_155236_1350x2400.jpg";
        r_text[301] = "https://images.wallpaperscraft.com/image/lines_stripes_glow_173235_1350x2400.jpg";
        r_text[302] = "https://images.wallpaperscraft.com/image/lines_stripes_neon_136043_1350x2400.jpg";
        r_text[303] = "https://images.wallpaperscraft.com/image/circles_rotation_red_136932_1350x2400.jpg";
        r_text[304] = "https://images.wallpaperscraft.com/image/circles_rotation_shadow_background_46830_1350x2400.jpg";
        r_text[305] = "https://images.wallpaperscraft.com/image/circles_rotation_immersion_124444_1350x2400.jpg";
        r_text[306] = "https://images.wallpaperscraft.com/image/universe_galaxy_multicolored_125246_1350x2400.jpg";
        r_text[307] = "https://images.wallpaperscraft.com/image/galaxy_universe_stars_132413_1350x2400.jpg";
        r_text[308] = "https://images.wallpaperscraft.com/image/galaxy_universe_stars_186396_1350x2400.jpg";
        r_text[309] = "https://images.wallpaperscraft.com/image/galaxy_stars_space_183942_1350x2400.jpg";
        r_text[310] = "https://images.wallpaperscraft.com/image/escalator_stairs_legs_198435_1350x2400.jpg";
        r_text[311] = "https://images.wallpaperscraft.com/image/escalator_stairs_room_169068_1350x2400.jpg";
        r_text[312] = "https://images.wallpaperscraft.com/image/escalator_stairs_steps_186414_1350x2400.jpg";
        r_text[313] = "https://images.wallpaperscraft.com/image/escalator_stairs_room_134388_1350x2400.jpg";
        r_text[314] = "https://images.wallpaperscraft.com/image/airplane_forest_aerial_view_198311_1350x2400.jpg";
        r_text[315] = "https://images.wallpaperscraft.com/image/forest_trees_aerial_view_172673_1350x2400.jpg";
        r_text[316] = "https://images.wallpaperscraft.com/image/forest_trees_aerial_view_151178_1350x2400.jpg";
        r_text[317] = "https://images.wallpaperscraft.com/image/kayak_boat_aerial_view_198191_1350x2400.jpg";
        r_text[318] = "https://images.wallpaperscraft.com/image/boat_kayak_sea_173969_1350x2400.jpg";
        r_text[319] = "https://images.wallpaperscraft.com/image/boat_sea_beach_171745_1350x2400.jpg";
        r_text[320] = "https://images.wallpaperscraft.com/image/boat_sunset_sea_182192_1350x2400.jpg";
        r_text[321] = "https://images.wallpaperscraft.com/image/boat_beach_sea_175079_1350x2400.jpg";
        r_text[322] = "https://images.wallpaperscraft.com/image/boat_sea_sunset_water_shine_118003_1350x2400.jpg";
        r_text[323] = "https://images.wallpaperscraft.com/image/boat_sunset_sea_182192_1350x2400.jpg";
        r_text[324] = "https://images.wallpaperscraft.com/image/boat_sea_ocean_130523_1350x2400.jpg";
        r_text[325] = "https://images.wallpaperscraft.com/image/boat_sea_sky_170282_1350x2400.jpg";
        r_text[326] = "https://images.wallpaperscraft.com/image/boat_sea_ocean_130523_1350x2400.jpg";
        r_text[327] = "https://images.wallpaperscraft.com/image/lamp_floor_lamp_grass_198123_1350x2400.jpg";
        r_text[328] = "https://images.wallpaperscraft.com/image/lamp_bw_black_185439_1350x2400.jpg";
        r_text[329] = "https://images.wallpaperscraft.com/image/lamp_blinds_bw_188003_1350x2400.jpg";
        r_text[330] = "https://images.wallpaperscraft.com/image/lamp_sparks_glow_179141_1350x2400.jpg";
        r_text[331] = "https://images.wallpaperscraft.com/image/lamp_glow_dark_187450_1350x2400.jpg";
        r_text[332] = "https://images.wallpaperscraft.com/image/lamp_glow_dark_186870_1350x2400.jpg";
        r_text[333] = "https://images.wallpaperscraft.com/image/lamp_glow_neon_183277_1350x2400.jpg";
        r_text[334] = "https://images.wallpaperscraft.com/image/lamp_neon_glow_182840_1350x2400.jpg";
        r_text[335] = "https://images.wallpaperscraft.com/image/lamp_glow_neon_179705_1350x2400.jpg";
        r_text[336] = "https://images.wallpaperscraft.com/image/lamp_glow_wall_166063_1350x2400.jpg";
        r_text[337] = "https://images.wallpaperscraft.com/image/lamp_glow_leaves_176525_1350x2400.jpg";
        r_text[338] = "https://images.wallpaperscraft.com/image/lamp_neon_glow_178661_1350x2400.jpg";
        r_text[339] = "https://images.wallpaperscraft.com/image/man_loneliness_ferris_wheel_197976_1350x2400.jpg";
        r_text[340] = "https://images.wallpaperscraft.com/image/man_alone_loneliness_184162_1350x2400.jpg";
        r_text[341] = "https://images.wallpaperscraft.com/image/man_loneliness_lonely_186593_1350x2400.jpg";
        r_text[342] = "https://images.wallpaperscraft.com/image/man_loneliness_alone_180150_1350x2400.jpg";
        r_text[343] = "https://images.wallpaperscraft.com/image/man_loneliness_alone_179285_1350x2400.jpg";
        r_text[344] = "https://images.wallpaperscraft.com/image/man_loneliness_alone_186784_1350x2400.jpg";
        r_text[345] = "https://images.wallpaperscraft.com/image/leaf_neon_palm_130066_1350x2400.jpg";
        r_text[346] = "https://images.wallpaperscraft.com/image/car_neon_movement_129990_1350x2400.jpg";
        r_text[347] = "https://images.wallpaperscraft.com/image/car_retro_art_137996_1350x2400.jpg";
        r_text[348] = "https://images.wallpaperscraft.com/image/car_retro_salon_183431_1350x2400.jpg";
        r_text[349] = "https://images.wallpaperscraft.com/image/car_retro_vintage_194425_1350x2400.jpg";
        r_text[350] = "https://images.wallpaperscraft.com/image/car_retro_vintage_180160_1350x2400.jpg";
        r_text[351] = "https://images.wallpaperscraft.com/image/car_mirror_neon_164703_1350x2400.jpg";
        r_text[352] = "https://images.wallpaperscraft.com/image/car_mirror_dark_148206_1350x2400.jpg";
        r_text[353] = "https://images.wallpaperscraft.com/image/car_dark_art_141424_1350x2400.jpg";
        r_text[354] = "https://images.wallpaperscraft.com/image/car_lights_road_168747_1350x2400.jpg";
        r_text[355] = "https://images.wallpaperscraft.com/image/silhouette_cube_neon_131106_1350x2400.jpg";
        r_text[356] = "https://images.wallpaperscraft.com/image/silhouette_neon_glow_140485_1350x2400.jpg";
        r_text[357] = "https://images.wallpaperscraft.com/image/silhouette_glow_passage_168375_1350x2400.jpg";
        r_text[358] = "https://images.wallpaperscraft.com/image/silhouette_ball_glow_140012_1350x2400.jpg";
        r_text[359] = "https://images.wallpaperscraft.com/image/silhouette_ruins_glow_194911_1350x2400.jpg";
        r_text[360] = "https://images.wallpaperscraft.com/image/silhouette_rings_glow_152207_1350x2400.jpg";
        r_text[361] = "https://images.wallpaperscraft.com/image/silhouette_forest_glow_151315_1350x2400.jpg";
        r_text[362] = "https://images.wallpaperscraft.com/image/silhouette_light_spiral_148257_1350x2400.jpg";
        r_text[363] = "https://images.wallpaperscraft.com/image/silhouette_light_sparks_158018_1350x2400.jpg";
        r_text[364] = "https://images.wallpaperscraft.com/image/silhouette_rain_light_130814_1350x2400.jpg";
        r_text[365] = "https://images.wallpaperscraft.com/image/silhouette_rain_loneliness_126652_1350x2400.jpg";
        r_text[366] = "https://images.wallpaperscraft.com/image/silhouette_loneliness_alone_188833_1350x2400.jpg";
        r_text[367] = "https://images.wallpaperscraft.com/image/silhouette_loneliness_art_139903_1350x2400.jpg";
        r_text[368] = "https://images.wallpaperscraft.com/image/silhouette_evening_loneliness_139734_1350x2400.jpg";
        r_text[369] = "https://images.wallpaperscraft.com/image/silhouette_sea_sunset_131899_1350x2400.jpg";
        r_text[370] = "https://images.wallpaperscraft.com/image/silhouette_sea_man_122577_1350x2400.jpg";
        r_text[371] = "https://images.wallpaperscraft.com/image/silhouette_sea_sunset_131996_1350x2400.jpg";
        r_text[372] = "https://images.wallpaperscraft.com/image/silhouette_sea_sunset_131096_1350x2400.jpg";
        r_text[373] = "https://images.wallpaperscraft.com/image/silhouette_sea_sunset_123444_1350x2400.jpg";
        r_text[374] = "https://images.wallpaperscraft.com/image/silhouette_umbrella_loneliness_129903_1350x2400.jpg";
        r_text[375] = "https://images.wallpaperscraft.com/image/silhouette_loneliness_alone_178665_1350x2400.jpg";
        r_text[376] = "https://images.wallpaperscraft.com/image/bridge_road_buildings_198628_1080x1920.jpg";
        r_text[377] = "https://images.wallpaperscraft.com/image/bridge_road_night_149250_1080x1920.jpg";
        r_text[378] = "https://images.wallpaperscraft.com/image/bridge_road_city_177485_1080x1920.jpg";
        r_text[379] = "https://images.wallpaperscraft.com/image/bridge_road_trees_landscape_87106_1080x1920.jpg";
        r_text[380] = "https://images.wallpaperscraft.com/image/field_trees_snow_198625_1440x2560.jpg";
        r_text[381] = "https://images.wallpaperscraft.com/image/field_trees_winter_156237_1440x2560.jpg";
        r_text[382] = "https://images.wallpaperscraft.com/image/field_trees_landscape_86249_1440x2560.jpg";
        r_text[383] = "https://images.wallpaperscraft.com/image/starry_sky_trees_stars_198613_1440x2560.jpg";
        r_text[384] = "https://images.wallpaperscraft.com/image/eye_pupil_macro_198610_1440x2560.jpg";
        r_text[385] = "https://images.wallpaperscraft.com/image/eye_pupil_eyelashes_174969_1440x2560.jpg";
        r_text[386] = "https://images.wallpaperscraft.com/image/eye_pupil_macro_153593_1440x2560.jpg";
        r_text[387] = "https://images.wallpaperscraft.com/image/flowers_berries_branches_198606_1440x2560.jpg";
        r_text[388] = "https://images.wallpaperscraft.com/image/silhouette_alone_northern_lights_198622_1440x2560.jpg";
        r_text[389] = "https://images.wallpaperscraft.com/image/silhouette_alone_sad_158329_1440x2560.jpg";
        r_text[390] = "https://images.wallpaperscraft.com/image/silhouette_alone_beach_158676_1440x2560.jpg";
        r_text[391] = "https://images.wallpaperscraft.com/image/silhouette_alone_sea_196773_1440x2560.jpg";
        r_text[392] = "https://images.wallpaperscraft.com/image/window_smoke_dark_198627_1440x2560.jpg";
        r_text[393] = "https://images.wallpaperscraft.com/image/window_dark_eyes_133034_1440x2560.jpg";
        r_text[394] = "https://images.wallpaperscraft.com/image/window_branches_dark_165733_1440x2560.jpg";
        r_text[395] = "https://images.wallpaperscraft.com/image/window_ivy_leaves_181003_1440x2560.jpg";
        r_text[396] = "https://images.wallpaperscraft.com/image/stains_liquid_paint_198596_1440x2560.jpg";
        r_text[397] = "https://images.wallpaperscraft.com/image/buildings_city_boat_198584_1440x2560.jpg";
        r_text[398] = "https://images.wallpaperscraft.com/image/buildings_city_canal_193837_1440x2560.jpg";
        r_text[399] = "https://images.wallpaperscraft.com/image/buildings_city_ferris_wheel_178120_1440x2560.jpg";
        r_text[400] = "https://images.wallpaperscraft.com/image/buildings_city_horizon_177629_1440x2560.jpg";
        r_text[401] = "https://images.wallpaperscraft.com/image/hearts_origami_paper_198867_1440x2560.jpg";
        r_text[402] = "https://images.wallpaperscraft.com/image/hearts_light_abstraction_157234_1440x2560.jpg";
        r_text[403] = "https://images.wallpaperscraft.com/image/hearts_heart_brick_128782_1440x2560.jpg";
        r_text[404] = "https://images.wallpaperscraft.com/image/girl_tablet_hug_151592_1440x2560.jpg";
        r_text[405] = "https://images.wallpaperscraft.com/image/girl_anime_red_121164_1440x2560.jpg";
        r_text[406] = "https://images.wallpaperscraft.com/image/girl_anime_wings_121613_1440x2560.jpg";
        r_text[407] = "https://images.wallpaperscraft.com/image/girl_anime_smile_136718_1440x2560.jpg";
        r_text[408] = "https://images.wallpaperscraft.com/image/couple_kiss_art_131855_1440x2560.jpg";
        r_text[409] = "https://images.wallpaperscraft.com/image/gardener_anime_guy_123347_1440x2560.jpg";
        r_text[410] = "https://images.wallpaperscraft.com/image/pyramid_ufo_aliens_138737_1440x2560.jpg";
        r_text[411] = "https://images.wallpaperscraft.com/image/silhouette_space_scifi_137307_1440x2560.jpg";
        r_text[412] = "https://images.wallpaperscraft.com/image/bird_fantastic_flight_136785_1440x2560.jpg";
        r_text[413] = "https://images.wallpaperscraft.com/image/dragon_starry_sky_silhouette_133014_1440x2560.jpg";
        r_text[414] = "https://images.wallpaperscraft.com/image/skull_island_mystical_124574_1440x2560.jpg";
        r_text[415] = "https://images.wallpaperscraft.com/image/child_costume_elephant_125371_1440x2560.jpg";
        r_text[416] = "https://images.wallpaperscraft.com/image/dragon_fantasy_art_feathers_98978_1440x2560.jpg";
        r_text[417] = "https://images.wallpaperscraft.com/image/mountains_building_engine_122249_1440x2560.jpg";
        r_text[418] = "https://images.wallpaperscraft.com/image/robots_mechanisms_premises_flame_67034_1440x2560.jpg";
        r_text[419] = "https://images.wallpaperscraft.com/image/robots_cyborg_cyberpunk_152655_1440x2560.jpg";
        r_text[420] = "https://images.wallpaperscraft.com/image/robots_cyborgs_futurism_125441_1440x2560.jpg";
        r_text[421] = "https://images.wallpaperscraft.com/image/wormhole_art_visualization_128753_1440x2560.jpg";
        r_text[422] = "https://images.wallpaperscraft.com/image/futurism_art_skyscrapers_121444_1440x2560.jpg";
        r_text[423] = "https://images.wallpaperscraft.com/image/futurism_future_ball_161311_1440x2560.jpg";
        r_text[424] = "https://images.wallpaperscraft.com/image/future_inscription_text_188673_1440x2560.jpg";
        r_text[425] = "https://images.wallpaperscraft.com/image/future_fantasy_meteorite_179431_1440x2560.jpg";
        r_text[426] = "https://images.wallpaperscraft.com/image/future_glitch_equipment_165261_1440x2560.jpg";
        r_text[427] = "https://images.wallpaperscraft.com/image/future_neon_city_164284_1440x2560.jpg";
        r_text[428] = "https://images.wallpaperscraft.com/image/future_airship_art_166849_1440x2560.jpg";
        r_text[429] = "https://images.wallpaperscraft.com/image/city_night_people_198178_1440x2560.jpg";
        r_text[430] = "https://images.wallpaperscraft.com/image/city_art_cyberpunk_136314_1440x2560.jpg";
        r_text[431] = "https://images.wallpaperscraft.com/image/city_silhouette_art_136751_1440x2560.jpg";
        r_text[432] = "https://images.wallpaperscraft.com/image/city_night_signboard_190660_1440x2560.jpg";
        r_text[433] = "https://images.wallpaperscraft.com/image/city_night_buildings_192988_1440x2560.jpg";
        r_text[434] = "https://images.wallpaperscraft.com/image/city_buildings_architecture_141514_1440x2560.jpg";
        r_text[435] = "https://images.wallpaperscraft.com/image/rock_station_fantasy_197621_1440x2560.jpg";
        r_text[436] = "https://images.wallpaperscraft.com/image/rock_storm_ship_170135_1440x2560.jpg";
        r_text[437] = "https://images.wallpaperscraft.com/image/rock_stone_relief_180239_1440x2560.jpg";
        r_text[438] = "https://images.wallpaperscraft.com/image/rock_stone_nebula_180607_1440x2560.jpg";
        r_text[439] = "https://images.wallpaperscraft.com/image/surface_relief_lines_198566_1440x2560.jpg";
        r_text[440] = "https://images.wallpaperscraft.com/image/railway_tunnel_speed_198565_1440x2560.jpg";
        r_text[441] = "https://images.wallpaperscraft.com/image/railway_light_speed_126633_1440x2560.jpg";
        r_text[442] = "https://images.wallpaperscraft.com/image/railway_rails_station_177675_1440x2560.jpg";
        r_text[443] = "https://images.wallpaperscraft.com/image/whales_water_underwater_195191_1440x2560.jpg";
        r_text[444] = "https://images.wallpaperscraft.com/image/birds_night_art_195388_1440x2560.jpg";
        r_text[445] = "https://images.wallpaperscraft.com/image/rocks_sharp_abstraction_168415_1440x2560.jpg";
        r_text[446] = "https://images.wallpaperscraft.com/image/metal_iron_metallic_171129_1440x2560.jpg";
        r_text[447] = "https://images.wallpaperscraft.com/image/balls_spheres_3d_140601_1440x2560.jpg";
        r_text[448] = "https://images.wallpaperscraft.com/image/balls_spheres_fractal_140689_1440x2560.jpg";
        r_text[449] = "https://images.wallpaperscraft.com/image/balls_three-colored_surface_cubic_15042_1440x2560.jpg";
        r_text[450] = "https://images.wallpaperscraft.com/image/lighthouse_building_sea_193142_1350x2400.jpg";
        r_text[451] = "https://images.wallpaperscraft.com/image/glow_cave_trees_166789_1350x2400.jpg";
        r_text[452] = "https://images.wallpaperscraft.com/image/glow_sparks_lines_176998_1350x2400.jpg";
        r_text[453] = "https://images.wallpaperscraft.com/image/glow_lines_rays_178768_1350x2400.jpg";
        r_text[454] = "https://images.wallpaperscraft.com/image/glow_shine_light_143808_1350x2400.jpg";
        r_text[455] = "https://images.wallpaperscraft.com/image/glow_colorful_nebula_179569_1350x2400.jpg";
        r_text[456] = "https://images.wallpaperscraft.com/image/glow_colorful_bright_141459_1350x2400.jpg";
        r_text[457] = "https://images.wallpaperscraft.com/image/stripes_glow_bright_141320_1350x2400.jpg";
        r_text[458] = "https://images.wallpaperscraft.com/image/question_mark_symbol_neon_197443_1350x2400.jpg";
        r_text[459] = "https://images.wallpaperscraft.com/image/text_neon_dark_154438_1350x2400.jpg";
        r_text[460] = "https://images.wallpaperscraft.com/image/text_neon_light_192409_1350x2400.jpg";
        r_text[461] = "https://images.wallpaperscraft.com/image/moon_night_sky_194399_1350x2400.jpg";
        r_text[462] = "https://images.wallpaperscraft.com/image/moon_black_sky_191125_1350x2400.jpg";
        r_text[463] = "https://images.wallpaperscraft.com/image/heart_garlands_decoration_193198_1350x2400.jpg";
        r_text[464] = "https://images.wallpaperscraft.com/image/shape_neon_black_190383_1350x2400.jpg";
        r_text[465] = "https://images.wallpaperscraft.com/image/shape_glow_blue_136037_1350x2400.jpg";
        r_text[466] = "https://images.wallpaperscraft.com/image/shape_glow_compounds_135467_1350x2400.jpg";
        r_text[467] = "https://images.wallpaperscraft.com/image/figure_symbols_glow_141143_1350x2400.jpg";
        r_text[468] = "https://images.wallpaperscraft.com/image/shape_convex_volumetric_162082_1350x2400.jpg";
        r_text[469] = "https://images.wallpaperscraft.com/image/shape_line_convex_136457_1350x2400.jpg";
        r_text[470] = "https://images.wallpaperscraft.com/image/shape_3d_volume_150572_1350x2400.jpg";
        r_text[471] = "https://images.wallpaperscraft.com/image/shape_pipes_lines_3d_115200_1350x2400.jpg";
        r_text[472] = "https://images.wallpaperscraft.com/image/shape_volume_convex_155268_1350x2400.jpg";
        r_text[473] = "https://images.wallpaperscraft.com/image/volume_circles_multicolored_170811_1350x2400.jpg";
        r_text[474] = "https://images.wallpaperscraft.com/image/volume_figure_square_162305_1350x2400.jpg";
        r_text[475] = "https://images.wallpaperscraft.com/image/figure_structure_tangled_150548_1350x2400.jpg";
        r_text[476] = "https://images.wallpaperscraft.com/image/figure_toy_carrot_eyes_118150_1350x2400.jpg";
        r_text[477] = "https://images.wallpaperscraft.com/image/figure_pattern_glow_168301_1350x2400.jpg";
        r_text[478] = "https://images.wallpaperscraft.com/image/figure_3d_fractal_149664_1350x2400.jpg";
        r_text[479] = "https://images.wallpaperscraft.com/image/figure_faces_tree_168478_1350x2400.jpg";
        r_text[480] = "https://images.wallpaperscraft.com/image/macaw_parrot_bird_198636_1350x2400.jpg";
        r_text[481] = "https://images.wallpaperscraft.com/image/iguana_lizard_reptile_198450_1350x2400.jpg";
        r_text[482] = "https://images.wallpaperscraft.com/image/jellyfish_tentacles_creature_198329_1350x2400.jpg";
        r_text[483] = "https://images.wallpaperscraft.com/image/jellyfish_tentacles_blue_148180_1350x2400.jpg";
        r_text[484] = "https://images.wallpaperscraft.com/image/jellyfish_tentacles_water_150910_1350x2400.jpg";
        r_text[485] = "https://images.wallpaperscraft.com/image/tiger_animal_predator_198197_1350x2400.jpg";
        r_text[486] = "https://images.wallpaperscraft.com/image/kitten_cat_gray_198041_1350x2400.jpg";
        r_text[487] = "https://images.wallpaperscraft.com/image/kitten_cat_glance_145103_1350x2400.jpg";
        r_text[488] = "https://images.wallpaperscraft.com/image/kitten_cat_glance_146907_1350x2400.jpg";
        r_text[489] = "https://images.wallpaperscraft.com/image/kitten_cat_striped_146484_1350x2400.jpg";
        r_text[490] = "https://images.wallpaperscraft.com/image/kitten_cat_cute_167709_1350x2400.jpg";
        r_text[491] = "https://images.wallpaperscraft.com/image/kitten_cat_cute_173869_1350x2400.jpg";
        r_text[492] = "https://images.wallpaperscraft.com/image/kitten_cat_gray_151440_1350x2400.jpg";
        r_text[493] = "https://images.wallpaperscraft.com/image/kitten_cat_wild_144976_1350x2400.jpg";
        r_text[494] = "https://images.wallpaperscraft.com/image/kitten_cat_suitcase_136679_1350x2400.jpg";
        r_text[495] = "https://images.wallpaperscraft.com/image/lion_animal_predator_197099_1350x2400.jpg";
        r_text[496] = "https://images.wallpaperscraft.com/image/lynx_animal_big_cat_196951_1350x2400.jpg";
        r_text[497] = "https://images.wallpaperscraft.com/image/deer_field_mountain_196745_1350x2400.jpg";
        r_text[498] = "https://images.wallpaperscraft.com/image/deer_wildlife_horns_131368_1350x2400.jpg";
        r_text[499] = "https://images.wallpaperscraft.com/image/deer_horns_river_177643_1350x2400.jpg";
        r_text[500] = "https://images.wallpaperscraft.com/image/deer_horns_fantasy_170818_1350x2400.jpg";
        r_text[501] = "https://images.wallpaperscraft.com/image/deer_horns_buildings_176452_1350x2400.jpg";
        r_text[502] = "https://images.wallpaperscraft.com/image/deer_horns_moon_164191_1350x2400.jpg";
        r_text[503] = "https://images.wallpaperscraft.com/image/deer_moon_night_148852_1350x2400.jpg";
        r_text[504] = "https://images.wallpaperscraft.com/image/deer_winter_night_129602_1350x2400.jpg";
        r_text[505] = "https://images.wallpaperscraft.com/image/deer_trees_building_198364_1350x2400.jpg";
        r_text[506] = "https://images.wallpaperscraft.com/image/rocket_launch_space_164664_1350x2400.jpg";
        r_text[507] = "https://images.wallpaperscraft.com/image/rocket_launch_space_166388_1350x2400.jpg";
        r_text[508] = "https://images.wallpaperscraft.com/image/rocket_flight_space_station_123426_1350x2400.jpg";
        r_text[509] = "https://images.wallpaperscraft.com/image/rocket_flight_launch_162464_1350x2400.jpg";
        r_text[510] = "https://images.wallpaperscraft.com/image/rocket_smoke_night_146941_1350x2400.jpg";
        r_text[511] = "https://images.wallpaperscraft.com/image/rocket_smoke_trees_168954_1350x2400.jpg";
        r_text[512] = "https://images.wallpaperscraft.com/image/smoke_silhouette_fog_126092_1350x2400.jpg";
        r_text[513] = "https://images.wallpaperscraft.com/image/smoke_abstraction_colored_191797_1350x2400.jpg";
        r_text[514] = "https://images.wallpaperscraft.com/image/rock_fog_smoke_181643_1350x2400.jpg";
        r_text[515] = "https://images.wallpaperscraft.com/image/rock_cliff_fog_160987_1350x2400.jpg";
        r_text[516] = "https://images.wallpaperscraft.com/image/rock_cliff_man_136744_1350x2400.jpg";
        r_text[517] = "https://images.wallpaperscraft.com/image/rock_cliff_sea_163812_1350x2400.jpg";
        r_text[518] = "https://images.wallpaperscraft.com/image/glass_hand_water_lighting_114510_1350x2400.jpg";
        r_text[519] = "https://images.wallpaperscraft.com/image/glass_water_distortion_180588_1350x2400.jpg";
        r_text[520] = "https://images.wallpaperscraft.com/image/glass_water_macro_158367_1350x2400.jpg";
        r_text[521] = "https://images.wallpaperscraft.com/image/glass_water_drops_135669_1350x2400.jpg";
        r_text[522] = "https://images.wallpaperscraft.com/image/flower_petals_dark_116231_1350x2400.jpg";
        r_text[523] = "https://images.wallpaperscraft.com/image/flower_petals_bud_blue_118382_1350x2400.jpg";
        r_text[524] = "https://images.wallpaperscraft.com/image/flower_bud_petals_130420_1350x2400.jpg";
        r_text[525] = "https://images.wallpaperscraft.com/image/flower_petals_bud_close_up_113143_1350x2400.jpg";
        r_text[526] = "https://images.wallpaperscraft.com/image/plexus_dark_background_light_118228_1350x2400.jpg";
        r_text[527] = "https://images.wallpaperscraft.com/image/crows_wires_birds_118095_1350x2400.jpg";
        r_text[528] = "https://images.wallpaperscraft.com/image/crows_creepy_house_121792_1350x2400.jpg";
        r_text[529] = "https://images.wallpaperscraft.com/image/house_forest_fog_128777_1350x2400.jpg";
        r_text[530] = "https://images.wallpaperscraft.com/image/house_island_lake_169865_1350x2400.jpg";
        r_text[531] = "https://images.wallpaperscraft.com/image/house_lake_shore_187194_1350x2400.jpg";
        r_text[532] = "https://images.wallpaperscraft.com/image/house_glow_road_167522_1350x2400.jpg";
        r_text[533] = "https://images.wallpaperscraft.com/image/house_window_roof_186048_1350x2400.jpg";
        r_text[534] = "https://images.wallpaperscraft.com/image/house_building_spruce_181956_1350x2400.jpg";
        r_text[535] = "https://images.wallpaperscraft.com/image/house_building_trees_179476_1350x2400.jpg";
        r_text[536] = "https://images.wallpaperscraft.com/image/lava_texture_surface_140662_1350x2400.jpg";
        r_text[537] = "https://images.wallpaperscraft.com/image/lava_fiery_surface_131909_1350x2400.jpg";
        r_text[538] = "https://images.wallpaperscraft.com/image/volcano_lava_fiery_132776_1350x2400.jpg";
        r_text[539] = "https://images.wallpaperscraft.com/image/volcano_mountains_snowy_187231_1350x2400.jpg";
        r_text[540] = "https://images.wallpaperscraft.com/image/cyborg_zebra_lava_168664_1350x2400.jpg";
        r_text[541] = "https://images.wallpaperscraft.com/image/cyborg_robot_art_127334_1350x2400.jpg";
        r_text[542] = "https://images.wallpaperscraft.com/image/cyborg_cave_dark_158308_1350x2400.jpg";
        r_text[543] = "https://images.wallpaperscraft.com/image/laboratory_scifi_art_142310_1350x2400.jpg";
        r_text[544] = "https://images.wallpaperscraft.com/image/robot_art_scifi_141698_1350x2400.jpg";
        r_text[545] = "https://images.wallpaperscraft.com/image/robot_mask_wolf_146457_1350x2400.jpg";
        r_text[546] = "https://images.wallpaperscraft.com/image/robot_art_iron_141436_1350x2400.jpg";
        r_text[547] = "https://images.wallpaperscraft.com/image/robot_cyborg_rain_142115_1350x2400.jpg";
        r_text[548] = "https://images.wallpaperscraft.com/image/girl_rain_art_142414_1350x2400.jpg";
        r_text[549] = "https://images.wallpaperscraft.com/image/girl_umbrella_rain_147037_1350x2400.jpg";
        r_text[550] = "https://images.wallpaperscraft.com/image/girl_umbrella_building_125043_1350x2400.jpg";
        r_text[551] = "https://images.wallpaperscraft.com/image/paint_mixing_abstraction_199346_1350x2400.jpg";
        r_text[552] = "https://images.wallpaperscraft.com/image/bmw_x5_bmw_car_199321_1350x2400.jpg";
        r_text[553] = "https://images.wallpaperscraft.com/image/subaru_car_black_199313_1350x2400.jpg";
        r_text[554] = "https://images.wallpaperscraft.com/image/planet_saturn_space_184440_1350x2400.jpg";
        r_text[555] = "https://images.wallpaperscraft.com/image/planet_stars_space_163013_1350x2400.jpg";
        r_text[556] = "https://images.wallpaperscraft.com/image/planet_space_satellites_132279_1350x2400.jpg";
        r_text[557] = "https://images.wallpaperscraft.com/image/planet_earth_stars_133535_1350x2400.jpg";
        r_text[558] = "https://images.wallpaperscraft.com/image/planet_space_universe_123741_1350x2400.jpg";
        r_text[559] = "https://images.wallpaperscraft.com/image/planet_space_atmosphere_134309_1350x2400.jpg";
        r_text[560] = "https://images.wallpaperscraft.com/image/sky_cloud_atmosphere_198729_1350x2400.jpg";
        r_text[561] = "https://images.wallpaperscraft.com/image/sky_clouds_atmosphere_147235_1350x2400.jpg";
        r_text[562] = "https://images.wallpaperscraft.com/image/sky_clouds_moon_144483_1350x2400.jpg";
        r_text[563] = "https://images.wallpaperscraft.com/image/planet_shine_atmosphere_153949_1350x2400.jpg";
        r_text[564] = "https://images.wallpaperscraft.com/image/planet_flash_shine_145875_1350x2400.jpg";
        r_text[565] = "https://images.wallpaperscraft.com/image/planet_explosion_flash_154301_1350x2400.jpg";
        r_text[566] = "https://images.wallpaperscraft.com/image/explosion_flash_colorful_143441_1350x2400.jpg";
        r_text[567] = "https://images.wallpaperscraft.com/image/explosion_rays_fractal_colorful_109219_1350x2400.jpg";
        r_text[568] = "https://images.wallpaperscraft.com/image/flash_space_shards_139360_1350x2400.jpg";
        r_text[569] = "https://images.wallpaperscraft.com/image/flash_clouds_water_156459_1350x2400.jpg";
        r_text[570] = "https://images.wallpaperscraft.com/image/flash_sky_clouds_151221_1350x2400.jpg";
        r_text[571] = "https://images.wallpaperscraft.com/image/ships_sea_storm_explosion_65381_1350x2400.jpg";
        r_text[572] = "https://images.wallpaperscraft.com/image/colorful_bright_circles_texture_line_explosion_112154_1350x2400.jpg";
        r_text[573] = "https://images.wallpaperscraft.com/image/circles_colorful_spotted_139715_1350x2400.jpg";
        r_text[574] = "https://images.wallpaperscraft.com/image/circles_colorful_blurred_168617_1350x2400.jpg";
        r_text[575] = "https://images.wallpaperscraft.com/image/circles_colorful_wavy_124216_1350x2400.jpg";
        r_text[576] = "https://images.wallpaperscraft.com/image/circles_colorful_shine_139367_1350x2400.jpg";
        r_text[577] = "https://images.wallpaperscraft.com/image/circles_patterns_colorful_137786_1350x2400.jpg";
        r_text[578] = "https://images.wallpaperscraft.com/image/circles_patterns_green_rotation_118506_1350x2400.jpg";
        r_text[579] = "https://images.wallpaperscraft.com/image/circles_patterns_colorful_137470_1350x2400.jpg";
        r_text[580] = "https://images.wallpaperscraft.com/image/anime_friends_kids_127896_1350x2400.jpg";
        r_text[581] = "https://images.wallpaperscraft.com/image/magician_stairs_rain_151909_1350x2400.jpg";
        r_text[582] = "https://images.wallpaperscraft.com/image/magician_art_magic_128796_1350x2400.jpg";
        r_text[583] = "https://images.wallpaperscraft.com/image/masks_art_dark_130211_1350x2400.jpg";
        r_text[584] = "https://images.wallpaperscraft.com/image/masks_neon_blur_148099_1350x2400.jpg";
        r_text[585] = "https://images.wallpaperscraft.com/image/neon_glow_colorful_197782_1350x2400.jpg";
        r_text[586] = "https://images.wallpaperscraft.com/image/sky_art_dark_129628_1350x2400.jpg";
        r_text[587] = "https://images.wallpaperscraft.com/image/sky_night_comet_150850_1350x2400.jpg";
        r_text[588] = "https://images.wallpaperscraft.com/image/fox_rain_art_146090_1350x2400.jpg";
        r_text[589] = "https://images.wallpaperscraft.com/image/love_kiss_rain_168495_1350x2400.jpg";
        r_text[590] = "https://images.wallpaperscraft.com/image/love_heart_art_153384_1350x2400.jpg";
        r_text[591] = "https://images.wallpaperscraft.com/image/astronaut_spacesuit_sadness_173223_1350x2400.jpg";
        r_text[592] = "https://images.wallpaperscraft.com/image/astronaut_spacesuit_eye_170804_1350x2400.jpg";
        r_text[593] = "https://images.wallpaperscraft.com/image/guy_silhouette_sunset_118590_1350x2400.jpg";
        r_text[594] = "https://images.wallpaperscraft.com/image/guy_anime_art_122234_1350x2400.jpg";
        r_text[595] = "https://images.wallpaperscraft.com/image/light_bulb_edisons_lamp_electricity_140563_1350x2400.jpg";
        r_text[596] = "https://images.wallpaperscraft.com/image/ice_cranny_surface_196663_1350x2400.jpg";
        r_text[597] = "https://images.wallpaperscraft.com/image/ice_cracks_cranny_197093_1350x2400.jpg";
        r_text[598] = "https://images.wallpaperscraft.com/image/bicycle_art_cyclist_127132_1350x2400.jpg";
        r_text[599] = "https://images.wallpaperscraft.com/image/tower_taipei_art_127317_1350x2400.jpg";
        r_text[600] = "https://images.wallpaperscraft.com/image/monster_art_smile_127610_1350x2400.jpg";
        r_text[601] = "https://images.wallpaperscraft.com/image/boat_silhouettes_sea_127626_1350x2400.jpg";
        r_text[602] = "https://images.wallpaperscraft.com/image/eyes_doodles_art_127935_1350x2400.jpg";
        r_text[603] = "https://images.wallpaperscraft.com/image/deer_silhouette_light_127865_1350x2400.jpg";
        r_text[604] = "https://images.wallpaperscraft.com/image/moon_crescent_stars_127840_1350x2400.jpg";
        r_text[605] = "https://images.wallpaperscraft.com/image/child_art_loneliness_128042_1350x2400.jpg";
        r_text[606] = "https://images.wallpaperscraft.com/image/skull_cap_kerchief_128416_1350x2400.jpg";
        r_text[607] = "https://images.wallpaperscraft.com/image/plane_sky_art_129149_1350x2400.jpg";
        r_text[608] = "https://images.wallpaperscraft.com/image/fish_yin_and_yang_art_129551_1350x2400.jpg";
        r_text[609] = "https://images.wallpaperscraft.com/image/dinosaurs_art_reptiles_129430_1350x2400.jpg";
        r_text[610] = "https://images.wallpaperscraft.com/image/silhouette_sunset_transport_129400_1350x2400.jpg";
        r_text[611] = "https://images.wallpaperscraft.com/image/silhouette_street_art_140261_1350x2400.jpg";
        r_text[612] = "https://images.wallpaperscraft.com/image/skeleton_skull_mantle_130517_1350x2400.jpg";
        r_text[613] = "https://images.wallpaperscraft.com/image/astronaut_cosmonaut_art_131212_1350x2400.jpg";
        r_text[614] = "https://images.wallpaperscraft.com/image/flower_glow_ice_132381_1350x2400.jpg";
        r_text[615] = "https://images.wallpaperscraft.com/image/wolf_grin_predator_134162_1350x2400.jpg";
        r_text[616] = "https://images.wallpaperscraft.com/image/respirator_face_mask_133060_1350x2400.jpg";
        r_text[617] = "https://images.wallpaperscraft.com/image/face_grin_fangs_142734_1350x2400.jpg";
        r_text[618] = "https://images.wallpaperscraft.com/image/face_funny_art_141579_1350x2400.jpg";
        r_text[619] = "https://images.wallpaperscraft.com/image/face_surprise_emotions_141979_1350x2400.jpg";
        r_text[620] = "https://images.wallpaperscraft.com/image/smiley_emotions_minimalism_134124_1350x2400.jpg";
        var i = Math.floor(621*Math.random())
        var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })
        let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `alexawallpaper`, buttonText: {displayText: 'Next️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: respoimage.data },
                    caption: `@Made by Queen-Alexa`,
                    footer: XeonBotInc.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
        }
            break
            case 'wikimedia': {
                if (!text) return reply(`Enter Query Title`)
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `@Made by Queen-Alexa`,
                    footer: XeonBotInc.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'quotesanime': case 'animequotes': case 'animequote': case 'quoteanime': {
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'Next️'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	        case 'motivasi': case 'motivationalquote': case 'bucinquote': case 'katasenja': case 'puisi': {
                let anu = await fetchJson(api('zenz', '/api/'+command, {}, 'apikey'))
                let buttons = [
                    {buttonId: `motivasi`, buttonText: {displayText: '➡️Next➡️'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result.message,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case '3dchristmas': case '3ddeepsea': case 'americanflag': case '3dscifi': case '3drainbow': case '3dwaterpipe': case 'halloweenskeleton': case 'sketch': case 'bluecircuit': case 'space': case 'metallic': case 'fiction': case 'greenhorror': case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dcrackedstone': case '3dneonlight': case 'impressiveglitch': case 'naturalleaves': case 'fireworksparkle': case 'matrix': case 'dropwater':  case 'harrypotter': case 'foggywindow': case 'neondevils': case 'christmasholiday': case '3dgradient': case 'blackpink': case 'gluetext': {
                if (!text) return reply(`Enter Text, Example : ${prefix + command} Xeon`)
                reply(mess.wait)
                XeonBotInc.sendMessage(m.chat, { image: { url: api('zenz', '/textpro/' + command, { text: text }, 'apikey') }, caption: `Text Pro ${command}` }, { quoted: m})
	    }
            break
	    case 'nomerhoki': case 'nomorhoki': {
                if (!Number(text)) return reply(`Example : ${prefix + command} 916909137213`)
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return reply(anu.message)
                XeonBotInc.sendText(m.chat, `🐶 *Phone Number :* ${anu.message.nomer_hp}\n🐶 *Shuzi Angka Figures :* ${anu.message.angka_shuzi}\n🐶 *Positive Energy :*\n- Riches : ${anu.message.energi_positif.kekayaan}\n- Health : ${anu.message.energi_positif.kesehatan}\n- Love : ${anu.message.energi_positif.cinta}\n- Stability : ${anu.message.energi_positif.kestabilan}\n- Percentage : ${anu.message.energi_positif.persentase}\n🐶 *Negative Energy :*\n- Dispute : ${anu.message.energi_negatif.perselisihan}\n- Lost : ${anu.message.energi_negatif.kehilangan}\n- Catastrophe : ${anu.message.energi_negatif.malapetaka}\n- Destruction : ${anu.message.energi_negatif.kehancuran}\n- Percentage : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
                if (!text) return reply(`Example : ${prefix + command} belanja`)
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return reply(anu.message)
                XeonBotInc.sendText(m.chat, `🐶 *Dream :* ${anu.message.mimpi}\n🐶 *Meaning :* ${anu.message.arti}\n🐶 *Solution :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                XeonBotInc.sendText(m.chat, `🐶 *Your Name :* ${anu.message.nama_anda.nama}\n🐶 *Your Birth :* ${anu.message.nama_anda.tgl_lahir}\n🐶 *Couple Name :* ${anu.message.nama_pasangan.nama}\n🐶 *Born Couple :* ${anu.message.nama_pasangan.tgl_lahir}\n🐶 *Results :* ${anu.message.result}\n🐶 *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                XeonBotInc.sendText(m.chat, `🐶 *Your Name :* ${anu.message.nama_anda.nama}\n🐶 *Your Birth :* ${anu.message.nama_anda.tgl_lahir}\n🐶 *Couple Name :* ${anu.message.nama_pasangan.nama}\n🐶 *Born Couple :* ${anu.message.nama_pasangan.tgl_lahir}\n🐶 *Results :* ${anu.message.result}\n🐶 *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                XeonBotInc.sendText(m.chat, `🐶 *Husband's Name :* ${anu.message.suami.nama}\n🐶 *Husband Born :* ${anu.message.suami.tgl_lahir}\n🐶 *Wife's Name :* ${anu.message.istri.nama}\n🐶 *Born Wife :* ${anu.message.istri.tgl_lahir}\n🐶 *Results :* ${anu.message.result}\n🐶 *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                XeonBotInc.sendText(m.chat, `🐶 *Your Name :* ${anu.message.nama_anda.nama}\n🐶 *Your Birth :* ${anu.message.nama_anda.tgl_lahir}\n🐶 *Couple Name :* ${anu.message.nama_pasangan.nama}\n🐶 *Born Couple :* ${anu.message.nama_pasangan.tgl_lahir}\n🐶 *Positive Side :* ${anu.message.sisi_positif}\n🐶 *Negative Side :* ${anu.message.sisi_negatif}\n🐶 *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {
                if (!text) throw `Example : ${prefix + command} Dika Ardianta`
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return reply(anu.message)
                XeonBotInc.sendText(m.chat, `🐶 *Name :* ${anu.message.nama}\n🐶 *Meaning :* ${anu.message.arti}\n🐶 *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                XeonBotInc.sendText(m.chat, `🐶 *Name :* ${anu.message.nama}\n🐶 *Born :* ${anu.message.tgl_lahir}\n🐶 *Life Path :* ${anu.message.life_path}\n🐶 *Destiny :* ${anu.message.destiny}\n🐶 *Destiny Desire :* ${anu.message.destiny_desire}\n🐶 *Personality :* ${anu.message.personality}\n🐶 *Percentage :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
                if (!text) throw `Example : ${prefix + command} Dika|Novia`
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return reply(anu.message)
                XeonBotInc.sendImage(m.chat,  anu.message.gambar, `🐶 *Your Name :* ${anu.message.nama_anda}\n🐶 *Couple Name :* ${anu.message.nama_pasangan}\n🐶 *Positive Side :* ${anu.message.sisi_positif}\n🐶 *Negative Side :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
                if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                XeonBotInc.sendText(m.chat, `🐶 *Wedding Date :* ${anu.message.tanggal}\n🐶 *Characteristics :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
                if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                XeonBotInc.sendText(m.chat, `🐶 *Born :* ${anu.message.hari_lahir}\n🐶 *Business :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                XeonBotInc.sendText(m.chat, `🐶 *Born :* ${anu.message.hari_lahir}\n🐶 *Sustenance :* ${anu.message.rejeki}\n🐶 *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan': case 'kerja': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                XeonBotInc.sendText(m.chat, `🐶 *Born :* ${anu.message.hari_lahir}\n🐶 *Profession :* ${anu.message.pekerjaan}\n🐶 *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
                if (!text) throw `Example : 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                XeonBotInc.sendText(m.chat, `🐶 *Analysis :* ${anu.message.analisa}\n🐶 *Root Number :* ${anu.message.angka_akar}\n🐶 *Nature :* ${anu.message.sifat}\n🐶 *Element :* ${anu.message.elemen}\n🐶 *Lucky Numbers :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                XeonBotInc.sendText(m.chat, `🐶 *Analysis :* ${anu.message.analisa}\n🐶 *Sector :* ${anu.message.sektor}\n?? *Element :* ${anu.message.elemen}\n🐶 *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'artitarot': case 'tarot': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                XeonBotInc.sendImage(m.chat, anu.message.image, `🐶 *Born :* ${anu.message.tgl_lahir}\n🐶 *Tarot Symbol :* ${anu.message.simbol_tarot}\n🐶 *Meaning :* ${anu.message.arti}\n🐶 *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
                if (!text) throw `Example : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Name, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return reply(anu.message)
                XeonBotInc.sendText(m.chat, `🐶 *Name :* ${anu.message.nama}\n🐶 *Born :* ${anu.message.tahun_lahir}\n🐶 *Gender :* ${anu.message.jenis_kelamin}\n🐶 *Kua Number :* ${anu.message.angka_kua}\n🐶 *Group :* ${anu.message.kelompok}\n🐶 *Character :* ${anu.message.karakter}\n🐶 *Good Sector :* ${anu.message.sektor_baik}\n🐶 *Bad Sector :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                XeonBotInc.sendText(m.chat, `🐶 *Born :* ${anu.message.tgl_lahir}\n🐶 *When Challenged :* ${anu.message.kala_tinantang}\n🐶 *Info :* ${anu.message.info}\n🐶 *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar': case 'taliwangke': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                XeonBotInc.sendText(m.chat, `🐶 *Born :* ${anu.message.tgl_lahir}\n🐶 *Results :* ${anu.message.result}\n🐶 *Info :* ${anu.message.info}\n🐶 *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                XeonBotInc.sendText(m.chat, `🐶 *Day Of Birth :* ${anu.message.hari_lahir}\n🐶 *Date Of Birth :* ${anu.message.tgl_lahir}\n🐶 *Fateful Day :* ${anu.message.hari_naas}\n🐶 *Info :* ${anu.message.catatan}\n🐶 *Notes :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                XeonBotInc.sendText(m.chat, `🐶 *Day Of Birth :* ${anu.message.hari_lahir}\n🐶 *Date Of Birth :* ${anu.message.tgl_lahir}\n🐶 *Dragon Day Direction :* ${anu.message.arah_naga_hari}\n🐶 *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                XeonBotInc.sendText(m.chat, `🐶 *Day Of Birth :* ${anu.message.hari_lahir}\n🐶 *Date Of Birth :* ${anu.message.tgl_lahir}\n🐶 *Sustenance Direction :* ${anu.message.arah_rejeki}\n🐶 *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'peruntungan': {
                if (!text) throw `Example : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Name, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return reply(anu.message)
                XeonBotInc.sendText(m.chat, `🐶 *Name :* ${anu.message.nama}\n🐶 *Born :* ${anu.message.tgl_lahir}\n🐶 *Fortune Of The Year :* ${anu.message.peruntungan_tahun}\n🐶 *Results :* ${anu.message.result}\n🐶 *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                XeonBotInc.sendText(m.chat, `🐶 *Date :* ${anu.message.tanggal}\n🐶 *Number Of Neptune :* ${anu.message.jumlah_neptu}\n🐶 *Day Character :* ${anu.message.watak_hari}\n🐶 *Dragon Day :* ${anu.message.naga_hari}\n🐶 *Good Hour :* ${anu.message.jam_baik}\n🐶 *Birth Character :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                XeonBotInc.sendText(m.chat, `🐶 *Name :* ${anu.message.nama}\n🐶 *Born :* ${anu.message.tgl_lahir}\n🐶 *Lifeline :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                XeonBotInc.sendText(m.chat, `🐶 *Name :* ${anu.message.nama}\n🐶 *Born :* ${anu.message.tgl_lahir}\n🐶 *Results :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                XeonBotInc.sendText(m.chat, `🐶 *Date :* ${anu.message.tgl_memancing}\n🐶 *Results :* ${anu.message.result}\n🐶 *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} First Day Of Menstruation Cycle`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return reply(anu.message)
                XeonBotInc.sendText(m.chat, `🐶 *Results :* ${anu.message.result}\n🐶 *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'zodiak': case 'zodiac': {
                if (!text) throw `Example : ${prefix+ command} 7 7 2005`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return reply(anu.message)
                XeonBotInc.sendText(m.chat, `🐶 *Zodiac :* ${anu.message.zodiak}\n🐶 *Number :* ${anu.message.nomor_keberuntungan}\n🐶 *Aroma :* ${anu.message.aroma_keberuntungan}\n🐶 *Planet :* ${anu.message.planet_yang_mengitari}\n🐶 *Flower :* ${anu.message.bunga_keberuntungan}\n🐶 *Color :* ${anu.message.warna_keberuntungan}\n🐶 *Stone :* ${anu.message.batu_keberuntungan}\n🐶 *Element :* ${anu.message.elemen_keberuntungan}\n🐶 *Zodiac Couple :* ${anu.message.pasangan_zodiak}\n🐶 *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'shio': {
                if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
                let anu = await primbon.shio(text)
                if (anu.status == false) return reply(anu.message)
                XeonBotInc.sendText(m.chat, `🐶 *Results :* ${anu.message}`, m)
            }
            break
	    case 'stalker': case 'stalk': {
		if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply('Your Daily Limit Has Expired')
                if (!text) return reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                let [type, id, zone] = args
                if (type.toLowerCase() == 'ff') {
                    if (!id) return reply(`No Query id, Example ${prefix + command} ff 552992060`)
                    let anu = await fetchJson(api('zenz', '/api/nickff', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return reply(anu.result.message)
                    reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ml') {
                    if (!id) return reply(`No Query id, Example : ${prefix + command} ml 214885010 2253`)
                    if (!zone) return reply(`No Query id, Example : ${prefix + command} ml 214885010 2253`)
                    let anu = await fetchJson(api('zenz', '/api/nickml', { apikey: global.APIKeys[global.APIs['zenz']], query: id, query2: zone }))
                    if (anu.status == false) return reply(anu.result.message)
                    reply(`ID : ${anu.result.gameId}\nZone : ${anu.result.zoneId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'aov') {
                    if (!id) return reply(`No Query id, Example ${prefix + command} aov 293306941441181`)
                    let anu = await fetchJson(api('zenz', '/api/nickaov', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return reply(anu.result.message)
                    reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'cod') {
                    if (!id) return reply(`No Query id, Example ${prefix + command} cod 6290150021186841472`)
                    let anu = await fetchJson(api('zenz', '/api/nickcod', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return reply(anu.result.message)
                    reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'pb') {
                    if (!id) return reply(`No Query id, Example ${prefix + command} pb riio46`)
                    let anu = await fetchJson(api('zenz', '/api/nickpb', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return reply(anu.result.message)
                    reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ig') {
                    if (!id) return reply(`No Query username, Example : ${prefix + command} ig josephxeon13`)
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/ig', { username: id }, 'apikey'))
                    if (anu.status == false) return reply(anu.result.message)
                    XeonBotInc.sendMedia(m.chat, anu.caption.profile_hd, '', `🐶 Full Name : ${anu.caption.full_name}\n🐶 User Name : ${anu.caption.user_name}\n🐶 ID ${anu.caption.user_id}\n🐶 Following : ${anu.caption.followers}\n🐶 Followers : ${anu.caption.following}\n🐶 Bussines : ${anu.caption.bussines}\n🐶 Professional : ${anu.caption.profesional}\n🐶 Verified : ${anu.caption.verified}\n🐶 Private : ${anu.caption.private}\n🐶 Bio : ${anu.caption.biography}\n🐶 Bio Url : ${anu.caption.bio_url}`, m)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'npm') {
                    if (!id) return reply(`No Query username, Example : ${prefix + command} npm scrape-primbon`)
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/npm', { query: id }, 'apikey'))
                    if (anu.status == false) return reply(anu.result.message)
                    reply(`🐶 Name : ${anu.name}\n🐶 Version : ${Object.keys(anu.versions)}\n🐶 Created : ${tanggal(anu.time.created)}\n🐶 Modified : ${tanggal(anu.time.modified)}\n🐶 Maintainers :\n ${anu.maintainers.map(v => `- ${v.name} : ${v.email}`).join('\n')}\n\n🐶 Description : ${anu.description}\n🐶 Homepage : ${anu.homepage}\n🐶 Keywords : ${anu.keywords}\n🐶 Author : ${anu.author.name}\n🐶 License : ${anu.license}\n🐶 Readme : ${anu.readme}`)
		    db.data.users[m.sender].limit -= 1
                } else {
                    reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                }
            }
            break
	        case 'tiktokd': case 'tiktoknowmx': {
                if (!text) return reply(`Enter Query Link!`)
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '🥬With Watermark🥬'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '🎵Audio🎵'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.nowatermark },
                    caption: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktok': case 'tiktokwatermarkx': {
                if (!text) return reply(`Enter Query Link!`)
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '🥬No Watermark🥬'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '🎵Audio🎵'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.watermark },
                    caption: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokmp3': case 'tiktokaudiox': {
                if (!text) return reply(`Enter Query Link!`)
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/musically', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '🥬No Watermark🥬'}, type: 1},
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '🥬With Watermark🥬'}, type: 1}
                ]
                let buttonMessage = {
                    text: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                let msg = await XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
                XeonBotInc.sendMessage(m.chat, { audio: { url: anu.result.audio }, mimetype: 'audio/mpeg'}, { quoted: msg })
            }
            break
	        case 'instagram': case 'igx': case 'igdlx': {
                if (!text) return reply(`No Query Url!`)
                reply(mess.wait)
                if (/(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instagram2', { url: isUrl(text)[0] }, 'apikey'))
                    for (let media of anu.data) XeonBotInc.sendMedia(m.chat, media, '', `Download Url Instagram From ${isUrl(text)[0]}`, m)
                } else if (/\/stories\/([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instastory', { url: isUrl(text)[0] }, 'apikey'))
                    XeonBotInc.sendMedia(m.chat, anu.media[0].url, '', `Download Url Instagram From ${isUrl(text)[0]}`, m)
                }
            }
            break
		//Backup, for example, the video above doesn't come out\\
		case 'igeh': case 'instagram2x': case 'ig2': case 'igdl2': {
                if (!text) return reply(`Enter Query Link!`)
                reply(mess.wait)
                
                let anu = await fetchJson(api('zenz', '/downloader/instagram2', { url:text }, 'apikey'))
                XeonBotInc.sendMessage(m.chat, { video: { url: anu.data[0] } }, { quoted: m })
            }
            break
            case 'joox': case 'jooxdl': {
                if (!text) return reply(`No Query Title`)
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/joox', { query: text }, 'apikey'))
                let msg = await XeonBotInc.sendImage(m.chat, anu.result.img, `🐶 Title : ${anu.result.lagu}\n🐶 Album : ${anu.result.album}\n🐶 Singer : ${anu.result.penyanyi}\n🐶 Publish : ${anu.result.publish}\n🐶 Lyrics :\n${anu.result.lirik.result}`, m)
                XeonBotInc.sendMessage(m.chat, { audio: { url: anu.result.mp4aLink }, mimetype: 'audio/mpeg', fileName: anu.result.lagu+'.m4a' }, { quoted: msg })
            }
            break
            case 'soundcloud': case 'scdl': {
                if (!text) return reply(`No Query Title`)
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
                let msg = await XeonBotInc.sendImage(m.chat, anu.result.thumb, `🐶 Title : ${anu.result.title}\n🐶 Url : ${isUrl(text)[0]}`)
                XeonBotInc.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: msg })
            }
            break
	        case 'twitdlx': case 'twitter': {
                if (!text) return reply(`Enter Query Link!`)
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twittermp3 ${text}`, buttonText: {displayText: '🎵Audio🎵'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.HD || anu.result.SD },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'twittermp3': case 'twitteraudio': {
                if (!text) return reply(`Enter Query Link!`)
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twitter ${text}`, buttonText: {displayText: '📽️Video📽️'}, type: 1}
                ]
                let buttonMessage = {
		    image: { url: anu.result.thumb },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 4
                }
                let msg = await XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
                XeonBotInc.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
            }
            break
	        case 'fb': case 'fbx': case 'facebook': {
                if (!text) return reply(`Enter Query Link!`)
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/facebook', { url: text }, 'apikey'))
                XeonBotInc.sendMessage(m.chat, { video: { url: anu.result.url }, caption: `🐶 Title : ${anu.result.title}`}, { quoted: m })
            }
            break
	        case 'pindl': case 'pinterest': {
                if (!text) return reply(`Enter Query Link!`)
                reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/pinterestdl', { url: text }, 'apikey'))
                XeonBotInc.sendMessage(m.chat, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: m })
            }
            break
            case 'umma': case 'ummadl': {
	        if (!text) return reply(`Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`)
                let { umma } = require('./lib) scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '🎵Audio🎵'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '📽️Video📽️'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
🐶 Title : ${anu.title}
🐶 Author : ${anu.author.name}
🐶 Like : ${anu.like}
🐶 Caption : ${anu.caption}
🐶 Url : ${anu.media[0]}
To Download Media, Please Click One Of The Buttons Below Or Enter The ytmp3/ytmp4 Command With The Url Above
`,
			footer: XeonBotInc.user.name,
			buttons,
			headerType: 4
		    }
		    XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        XeonBotInc.sendMessage(m.chat, { image: { url }, caption: `🐶 Title : ${anu.title}\n🐶 Author : ${anu.author.name}\n🐶 Like : ${anu.like}\n🐶 Caption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break
        case 'ringtone': {
		if (!text) return reply(`Example : ${prefix + command} black rover`)
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		XeonBotInc.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
		case 'iqraxxx': {
		oh = `Example : ${prefix + command} 3\n\nIQRA Which Is Available : 1,2,3,4,5,6`
		if (!text) return reply(oh)
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		XeonBotInc.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => reply(oh))
		}
		break
		case 'juzamma': {
		if (args[0] === 'pdf') {
		reply(mess.wait)
		XeonBotInc.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
		} else if (args[0] === 'docx') {
		reply(mess.wait)
		XeonBotInc.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
		} else if (args[0] === 'pptx') {
		reply(mess.wait)
		XeonBotInc.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
		} else if (args[0] === 'xlsx') {
		reply(mess.wait)
		XeonBotInc.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
		} else {
		reply(`What Format Do You Want? ? Example : ${prefix + command} pdf

Available Formats: pdf, docx, pptx, xlsx`)
		}
		}
		break
		case 'hadisxxx': case 'hadistxxx': {
		if (!args[0]) return reply(`Example:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Options Available:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`)
		if (!args[1]) return reply(`Which Hadith??\n\nExample:\n${prefix + command} muslim 1`)
		try {
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
		let { number, arab, id } = res.find(v => v.number == args[1])
		reply(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		reply(`Hadith Not Found !`)
		}
		}
		break
		case 'alquranxxx': {
		if (!args[0]) return reply(`Usage Examples:\n${prefix + command} 1 2\n\nThen The Result Is Surah Al-Fatihah Verse 2 Along With The Audio, And The Verse Is Just 1`)
		if (!args[1]) return reply(`Usage Examples:\n${prefix + command} 1 2\n\nThen The Result Is Surah Al-Fatihah Verse 2 Along With The Audio, And The Verse Is Just 1`)
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		reply(txt)
		XeonBotInc.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		}
		break
		case 'tafsirsurahxxx': {
		if (!args[0]) return reply(`Usage Examples:\n${prefix + command} 1 2\n\nThen The Result Is The Interpretation Of Surah Al-Fatihah Verse 2`)
		if (!args[1]) return reply(`Usage Examples:\n${prefix + command} 1 2\n\nThen The Result Is The Interpretation Of Surah Al-Fatihah Verse 2`)
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `「 *Tafsir Surah*  」

*Short* : ${res.result.data.tafsir.id.short}

*Long* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		reply(txt)
		}
		break
		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                reply(mess.wait)
                let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return reply(err)
                let buff = fs.readFileSync(ran)
                XeonBotInc.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else reply(`Reply To The Audio You Want To Change With Caption *${prefix + command}*`)
                } catch (e) {
                reply(e)
                }
                break
            case 'setcmd': {
                if (!m.quoted) return reply(`Reply Message!`)
                if (!m.quoted.fileSha256) return reply(`SHA256 Hash Missing`)
                if (!text) return reply(`For What Command?`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return reply(`You Have No Permission To Change This Sticker Command`)
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                reply(`Done!`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) return reply(`No Hashes`)
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return reply(`You Have No Permission To Delete This Sticker Command`)
                delete global.db.data.sticker[hash]
                reply(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*Hash List*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                XeonBotInc.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) return replay(`${mess.owner}`)
                if (!m.quoted) return reply(`Reply Message!`)
                if (!m.quoted.fileSha256) return reply(`SHA256 Hash Missing`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) return reply(`Hash Not Found In Database`)
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                reply('Done!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) return reply(`Reply Message You Want To Save In Database`)
                if (!text) return reply(`Example : ${prefix + command} File Name`)
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) return reply(`'${text}' Has Been Registered In The Message List`)
                msgs[text.toLowerCase()] = quoted.fakeObj
reply(`Successfully Added Message In Message List As '${text}'
    
Access With ${prefix}getmsg ${text}

View List Of Messages With ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) return reply(`Example : ${prefix + command} file name\n\nView Message List With ${prefix}listmsg`)
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) return reply(`'${text}' Not Listed In The Message List`)
                XeonBotInc.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./database/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 DATABASE LIST 」\n\n'
		for (let i of seplit) {
		    teks += `🐕 *Name :* ${i.nama}\n🐕 *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return reply(`'${text}' Not Listed In The Message List`)
		delete msgs[text.toLowerCase()]
		reply(`Delete Successfully '${text}' From The Message list`)
            }
	    break
	    case 'anonymous': {
                if (m.isGroup) return reply('Features Cannot Be Used For Groups!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'Start', buttonText: { displayText: '🚶Start🚶' }, type: 1 }
                ]
                XeonBotInc.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await XeonBotInc.getName(m.sender)} Welcome To Anonymous Chat\n\nClick The Button Below To Find A Partner\`\`\``, XeonBotInc.user.name, m)
            }
			break
            case 'keluar': case 'leave': {
                if (m.isGroup) return reply('Features Cannot Be Used For Groups!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: '🚶Start🚶' }, type: 1 }
                    ]
                    await XeonBotInc.sendButtonText(m.chat, buttons, `\`\`\`You Are Not In An Anonymous Session, Press The Button To Find A Partner \`\`\``)
                   reply(false)
                }
                reply('Ok')
                let other = room.other(m.sender)
                if (other) await XeonBotInc.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
                if (m.isGroup) return reply('Features Cannot Be Used For Groups!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: '🛑Stop🛑' }, type: 1 }
                    ]
                    await XeonBotInc.sendButtonText(m.chat, buttons, `\`\`\`You Are Still In An Anonymous Session, Press The Button Below To Terminate Your Anonymous Session\`\`\``, XeonBotInc.user.name, m)
                    reply(false)
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: '⏩Skip⏩' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: '🛑Stop🛑' }, type: 1 }
                    ]
                    await XeonBotInc.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, XeonBotInc.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await XeonBotInc.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, XeonBotInc.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: '🛑Stop🛑' }, type: 1 }
                    ]
                    await XeonBotInc.sendButtonText(m.chat, buttons, `\`\`\`Please Wait, Looking For A Partner\`\`\``, XeonBotInc.user.name, m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return reply('Features Cannot Be Used For Groups!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: '🚶Start🚶' }, type: 1 }
                    ]
                    await XeonBotInc.sendButtonText(m.chat, buttons, `\`\`\`You Are Not In An Anonymous Session, Press The Button To Find A Partner\`\`\``)
                    reply(false)
                }
                let other = romeo.other(m.sender)
                if (other) await XeonBotInc.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: '⏩Skip⏩' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: '🛑Stop🛑' }, type: 1 }
                    ]
                    await XeonBotInc.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, XeonBotInc.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await XeonBotInc.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, XeonBotInc.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: '🛑Stop🛑' }, type: 1 }
                    ]
                    await XeonBotInc.sendButtonText(m.chat, buttons, `\`\`\`Please Wait, Looking For A Partner\`\`\``, XeonBotInc.user.name, m)
                }
                break
            }
            case 'public': {
                if (!isCreator) return replay(`${mess.owner}`)
                XeonBotInc.public = true
                reply('Successful Change To Public Usage')
            }
            break
            case 'self': {
                if (!isCreator) return replay(`${mess.owner}`)
                XeonBotInc.public = false
                reply('Successful Change To Self Usage')
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                reply(respon)
            }
            break
            case 'speedtest': {
            reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) reply(stdout)
        if (stderr.trim()) reply(stderr)
            }
            }
            break
            case 'owner': case 'creator': {
                XeonBotInc.sendContact(m.chat, global.owner, m)
            }
            break
case 'cry':case 'kill':case 'hug':case 'pat':case 'lick':case 'kiss':case 'bite':case 'yeet':case 'neko':case 'bully':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'awoo':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'cuddle':case 'highfive':case 'shinobu':case 'megumin':case 'handhold':
					reply(mess.wait)
					axios.get(`https://api.waifu.pics/sfw/${command}`)
					.then(({data}) => {
						XeonBotInc.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
					})
					break
				case 'waifu': case 'loli':
					reply(mess.wait)
					axios.get(`https://api.waifu.pics/sfw/waifu`)
					.then(({data}) => {
					XeonBotInc.sendImage(m.chat, data.url, mess.success, m)
					})
					break
case "setmenuxxx": 
if (!text) return reply("1. image\n2. list\n3. catalog\n\nExample .setmenu image")
if (q == "image") {
typemenu = 'image'
reply("Success Changing Menu To "+q)
} else if (q == "list") {
typemenu = 'list'
reply("Success Changing Menu To "+q)
} else if (q == "catalog") {
typemenu = 'catalog'
reply("Success Changing Menu To "+q)
}
break
                    case 'bug': case 'report': {
                    	if(!text) return reply(`Enter The Bug\n\nExample: ${command} Menu Error`)
                    	XeonBotInc.sendMessage(`916909137213@s.whatsapp.net`, {text: `*Bug Report From:* wa.me/${m.sender.split("@")[0]}
Report Message: ${text}` })
reply(`Successfully Reported To The Owner\n\nPlease Make Sure The Bug Is Valid, If You Play With This, Use This Feature Again And Again For No Reason, You Will Be Blocked For Sure !`)
                    }
                    break
                    case 'tes': case 'test': case 'onlinebot': case 'bot': case 'robot': case 'ko bot': case 'neutro':{
                           	timestampe = speed();
latensie = speed() - timestampe
 anu = ` ` 
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: $(global.alive_logo)},
                            hydratedFooterText: `┌─❖
│「 Hi 👋 」
└┬❖ 「 ${pushname} 」
┌┤✑  Cheems Bot With You Forever 
││✑  🐶🖐️!!
│└───────────────┈ ⳹
│ 「 BOT INFO 」
│✙ 𝗦𝗽𝗲𝗲𝗱 : ${latensie.toFixed(4)} miliseconds
│✙ 𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
│✙ 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ${global.botname}
│✙ 𝗢𝘄𝗻𝗲𝗿 𝗡𝗮𝗺𝗲 : ${global.ownername}
│✙ 𝗢𝘄𝗻𝗲𝗿 𝗡𝘂𝗺𝗯𝗲𝗿 : ${global.owner}
│✙ 𝗛𝗼𝘀𝘁 𝗡𝗮𝗺𝗲 : ${os.hostname()}
│✙ 𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : ${os.platform()}
│✙ 𝗧𝗼𝘁𝗮𝗹 𝗨𝘀𝗲𝗿 : ${Object.keys(global.db.data.users).length}
└┬──────────────┈ ⳹
   │✑  Please Select The Button Below
   └───────────────┈ ⳹`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'YouTube📍',
                                    url: `${myweb}`
                                }
                            }, {
                            	urlButton: {
                                displayText: 'Script🔖',
                                    url: `${sc}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '🍇All Menu🍇',
                                    id: `${prefix}allmenu`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: '🍒List Menu🍒',
                                    id: `${prefix}command`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: '👤Owner👤',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                XeonBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }
break
            case 'lixt': case 'lizt': case 'help': case 'neutro': {
            	timestampe = speed();
latensie = speed() - timestampe
                anu = ``
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./Alexa-New/media/main.jpg')}, 
                            hydratedFooterText: `
┌─❖
│「 Hi 👋 」
└┬❖ 「 ${pushname} 」
┌┤✑  How Are You? 😄
│└───────────────┈ ⳹
│ 「 BOT INFO 」
│✙ 𝗦𝗽𝗲𝗲𝗱 : ${latensie.toFixed(4)} miliseconds
│✙ 𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
│✙ 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ${global.botname}
│✙ 𝗢𝘄??𝗲𝗿 𝗡𝗮𝗺𝗲 : ${global.ownername}
│✙ 𝗢𝘄𝗻𝗲𝗿 𝗡𝘂𝗺𝗯𝗲𝗿 : ${global.owner}
│✙ 𝗛𝗼𝘀𝘁 𝗡𝗮𝗺𝗲 : ${os.hostname()}
│✙ 𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : ${os.platform()}
│✙ 𝗧𝗼𝘁𝗮𝗹 𝗨𝘀𝗲𝗿 : ${Object.keys(global.db.data.users).length}
└┬──────────────┈ ⳹
   │✑  Please Select The Button Below
   └───────────────┈ ⳹`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'YouTube📍',
                                    url: `${myweb}`
                                }
                            }, {
                            	urlButton: {
                                displayText: 'Script🔖',
                                    url: `${sc}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '🍇All Menu🍇',
                                    id: `${prefix}allmenu`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: '🍒List Menu🍒',
                                    id: `${prefix}command`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: '👤Owner👤',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                XeonBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }
                break
                case 'command': {
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `Hi ${pushname}`,
                    description: `Please Choose The Menu\n\n`,
                    buttonText: "Menu",
                    footerText: `${global.footer}`,
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "Main Features",
								"rows": [
									{
										"title": "Main Menu",
										"description": "Displays The List Of Main Features",
										"rowId": `${prefix}mainmenu`
									}
								]
							},
							{
								"title": "Bot Features",
								"rows": [
									{
										"title": "All Menu",
										"description": "Displays The List Of All The Features!",
										"rowId": `${prefix}allmenu`
									},
									{
										"title": "Owner Menu",
										"description": "Displays The List Of Owner Features",
										"rowId": `${prefix}ownermenu`
										},
									{
										"title": "Group Menu",
										"description": "Displays The List Of Main Features",
										"rowId": `${prefix}groupmenu`
										},
									{
										"title": "Rpg Menu",
										"description": "Displays The List Of Rpg Features",
										"rowId": `${prefix}rpgmenu`
									},
									{
										"title": "Download Menu",
										"description": "Displays The List Of Download Features",
										"rowId": `${prefix}downloadmenu`
									},
									{
										"title": "Search Menu",
										"description": "Displays The List Of Searching Features",
										"rowId": `${prefix}searchmenu`
									},
									{
											"title": "Random Menu",
										"description": "Displays The List Of Random Features",
										"rowId": `${prefix}randommenu`
										},
										{
											"title": "Random Anime Menu",
										"description": "Displays The List Of Random Anime Features",
										"rowId": `${prefix}randomanimemenu`
										},
										{
											"title": "Fun Menu",
										"description": "Displays The List Of Fun Features",
										"rowId": `${prefix}funmenu`
										},
										{
											"title": "Convert Menu",
										"description": "Displays The List Of Convert Features",
										"rowId": `${prefix}convertmenu`
										},
										{
											"title": "Database Menu",
										"description": "Displays The List Of Database Features",
										"rowId": `${prefix}databasemenu`
										},
										{
											"title": "Voice Changer Menu",
										"description": "Displays The List Of Voice Changing Features",
										"rowId": `${prefix}voicechangermenu`
										},
										{
											"title": "Islamic Menu",
										"description": "Displays The List Of Islamic Features",
										"rowId": `${prefix}islamicmenu`
										},
										{
											"title": "Horoscope Menu",
										"description": "Displays The List Of Horoscope Features",
										"rowId": `${prefix}horoscopemenu`
										}
								]
							},
							{
								"title": "Chat With Fellow Users",
								"rows": [
									{
										"title": "Anonymous Chat Menu",
										"description": "Displays The List Of Anonymous Chat Features",
										"rowId": `${prefix}anonymouschatmenu`
									}
								]
							},
							{
								"title": "Credit",
								"rows": [
									{
										"title": "Thanks To",
										"description": "Displays The List Of Credit Of The Bot !!",
										"rowId": `${prefix}tqtt`
									}
								]
							}
						],
          listType: 1
                }
            }), {})
            XeonBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
    case 'donasi': case 'donate': case 'sewabot': case 'sewa': case 'buypremium': case 'donate': {
                XeonBotInc.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/6ba2aed566865a068e91f.jpg' }, caption: `*Hi Bro ${m.pushName}*\n\nDonate Me : \n\n🐶 Fampay : https://telegra.ph/file/6ba2aed566865a068e91f.jpg\n🐶 Paytm : https://telegra.ph/file/577bd4f28d90ca2c7f369.jpg\n\nIf You Want To Donate, Talk With The Owner First\nwa.me/916909137213 (Click To Contact)` }, { quoted: m })
            }
            break
            case 'sc': case 'script': {
                reply(`GitHub : https://github.com/ChamodKeshan\n Dont Forget To Give Star\n\nYouTube : ${myweb}\nDont Forget To Watch Tutorial`)
            }
            break
            case 'clear': case 'alexa': {
                reply(`This commond is not ready\n try to contact alexa owner or alexa team\n\nTeenu : Wa.me/94\nChamod : Wa.me/94702256963\nEn-cuzier : Wa.me/\nTutux : Wa.me94`)
                }
                break
case 'menu': case 'list': case 'help': {
  	anu = `
  *╭─「 ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ」*
 │
 *│ᴛʏᴘᴇ: ${prefix}alexa get full Command list*
 ├─────────●●►
 *│🌼HEY,* User
 *│👤Owner Name:* ChamodKeshan
 *│💎Role:* Developer
 *│📡Server:* Digital Ocean
 *│📦Frameworks:* Nodejs
 *│☬Working As*
 *│🛡️free mode*
 │ _©️ᴀᴍᴀᴢᴏɴᴇ-ᴛᴇᴇɴᴜ_
 ╰──────────●●►

 ╭──────────●●►
*│🛡️BOT COMMANDS*
 │   ───────
 │
 │► ${prefix}alexa [All command list]
 │► ${prefix}alive [Check bot status]
 │► ${prefix}bot [chat with bot]
 │► ${prefix}Admin [ for owner ]
 │► ${prefix}version [check Version 
 │► ${prefix}update [check Update]
 │► ${prefix}update now [get update ]
 │► ${prefix}restart 
 ╰───────────●●►

 ╭───────────●●►
 *│🧜‍♀STICKER COMMANDS*
 │      ───────
 │► ${prefix}attp [text ]
 │► .sticker
 │► ${prefix}photo
 │► ${prefix}listp
 ╰────────────●●►

 ╭────────────●●►
 *│🧞‍♀️TEXT TO IMG*
 │   ───────
 │► ${prefix}textimg 
 │► ${prefix}prologo (unlimited logos)
 │► ${prefix}prologo your Text
 │► ${prefix}moretext 
 │► ${prefix}ffpack [Free fire Logo pack]
 │► ${prefix}ttp [ text ]
 │► ${prefix}dttp [ text ]
 │► ${prefix}trumpsay [ text ]
 │► ${prefix}changesay [ text ]
 │► ${prefix}animesay [ text ]
 │► ${prefix}meme 
 │► ${prefix}listp
 │► ${prefix}mmpack
 ╰────────────●●►

 ╭────────────●●►
 *│💰DOWNLOAD COMMANDS*
 │      ────────
 │► ${prefix}video [ Yt Link]
 │► ${prefix}mp4    [Name]
 │► ${prefix}audio  [yt link ]
 │► ${prefix}download  [status download]
 │► ${prefix}song  [ song name ]
 │► ${prefix}dcsong [ song name ]
 │► ${prefix}img [ name ]
 │► ${prefix}fb  link ]
 │► ${prefix}tiktok [ link ]
 │► ${prefix}igv  [ Insta Video ]
 │► ${prefix}igp [ Insta Photo ]
 │► ${prefix}twt [twitter video Link]
 │► ${prefix}mediafire
 ╰────────────●●►

 ╭────────────●●►
 *│🔍SEARCH COMMANDS*
 │     ──────────
 │► ${prefix}yt [ topic ]
 │► ${prefix}wiki [text ]
 │► ${prefix}movie [ movie name ]
 │► ${prefix}github [ name ]
 │► ${prefix}show [tv series ]
 │► ${prefix}weather [ city ]
 │
 ╰────────────●●►

 ╭────────────●●►
 *│🛸GROUP COMMANDS*
 │  ─────────
 │► ${prefix}rename [change Group name]
 │► ${prefix}rules    [check rules]
 │► ${prefix}info [check details]
 │► ${prefix}tagadmin 
 │► ${prefix}antispm
 │► ${prefix}clear
 │► ${prefix}report
 │► ${prefix}tagall  
 │► ${prefix}ban [ for owner ]
 │► ${prefix}add [ for owner ]
 │► ${prefix}promote [ for owner ]
 │► ${prefix}demote [ for owner ]
 │► ${prefix}invite [ for owner ]
 │► ${prefix}leave [ for owner ]
 │► ${prefix}welcome 
 │► ${prefix}goodbye
 ╰───────────●●►

 ╭───────────●●►
 *│🎨MEDIA TOOLS*
 │      ───────
 │► ${prefix}axmedia [25+ tools]
 │► ${prefix}tblend
 │► ${prefix}ocr [Read Text]
 │► ${prefix}mp3 [Video To mp3]
 │► ${prefix}ffmpeg [fade in:0:30 ]
 │► ${prefix}removebg
 │► ${prefix}spdf [convent site to pdf]
 │► ${prefix}voicy
 │► ${prefix}unvoice [mp3 to voice]
 ╰───────────●●►

 ╭───────────●●►
 *│⚡MORE COMMAND*
 │  ────────
 │► ${prefix}scan
 │► ${prefix}brdmore
 │► ${prefix}rdmore
 │► ${prefix}tts
 │► ${prefix}gm
 │► ${prefix}gn
 │► ${prefix}ftext
 │► ${prefix}wallpaper
 │► ${prefix}anime
 │► ${prefix}listanim
 │► ${prefix}device
 │► ${prefix}currency
 │► ${prefix}ss [link ]
 │► ${prefix}afk [ bot is online ]
 │► ${prefix}short { link ]
 │► ${prefix}wame [ get user link ]
 │► ${prefix}currency
 │► ${prefix}trt { en si }
 │► ${prefix}notes
 │► ${prefix}save
 │► ${prefix}deleteNotes
 │► ${prefix}covid  [ covid LK]
 ╰────────────●●►

 ╭───────────●●►
 *│⚙️BOT SETTINGS*
 │    ───────
 │► ${prefix}pp [set profilr pic]
 │► ${prefix}autobio on/off [change bio ]
 │► ${prefix}whatsblock on [WA link Block]
 │► ${prefix}inblock on /off 
 │► ${prefix}work public /private
 │► ${prefix}setrules
 │► ${prefix}setvar
 │ ▷EMOJI_COMMAND:🛡️ [change Cmd emoj]
 │ ▷EMOJI_DESCRIPTION:  🔍 [change des emoj]
 │ ▷EMOJI_EXAMPLE:🔆 [change ex emoji]
 │ ▷EMOJI_WARNING:⚠️ [change war emoj]
 │ ▷BOT_NAME: <bot name> [change NAME]
 │ ▷BIO: <your Text> [change bio]
 │ ▷MENU_LOGO: <link> [change Logo]
 │ ▷CAPTION: <text> [change caption]
 │ ▷MENUINFO: <text> [change Menu info]
 │ ▷SUDO: <number> [add sudo]
 │    
 │    THANK FOR
 │     USING
 │ AMAZONE ALEXA ✉️
 │©️TEENU-X
 ╰───────────●●►`
    const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./Alexa-New/media/main.jpg')},
                            hydratedFooterText: `${pushname}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'YouTube📍',
                                    url: `${myweb}`
                                }
                            }, {
                            	urlButton: {
                                displayText: 'Script🔖',
                                    url: `${sc}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '🍇All Menu🍇',
                                    id: `${prefix}allmenu`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: '🍒List Menu🍒',
                                    id: `${prefix}command`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: '👤Owner👤',
                                    id: `${prefix}owner`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                XeonBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
break
case 'mainmenu':
var unicorn = await getBuffer(picak+'Main Menu')
await XeonBotInc.send5ButImg(from, `` + '' + ' ', `
┏━「 ${botname} 」━━⭓ 
┃╔═══════✪「 MAIN 」
┃╠ ${prefix}alive
┃╠ ${prefix}script
┃╠ ${prefix}speedtest
┃╠ ${prefix}ping
┃╠ ${prefix}owner
┃╠ ${prefix}menu
┃╠ ${prefix}delete
┃╠ ${prefix}chatinfo
┃╠ ${prefix}quoted
┃╠ ${prefix}listpc
┃╠ ${prefix}listgc
┃╠ ${prefix}donate
┃╠ ${prefix}report [bug]
┃╚═════════════✪
┗━━「 ${pushname} 」━⭓`,unicorn, [{"urlButton": {"displayText": "YouTube 📍","url": `${myweb}`}},{"urlButton": {"displayText": "Script🔖","url": `${sc}`}},{"quickReplyButton": {"displayText": "🍜Donate🍜","id": 'donate'}},{"quickReplyButton": {"displayText": "👤Owner👤","id": 'owner'}}] )
break

case 'grupmenu': case 'groupmenu':
var unicorn = await getBuffer(picak+'Group Menu')
await XeonBotInc.send5ButImg(from, `` + '' + ' ', `
┏━「 ${botname} 」━━⭓ 
┃╔═══════✪「 GROUP 」	        
┃╠${prefix}grouplink
┃╠${prefix}ephemeral [option]
┃╠${prefix}setgcpp [image]
┃╠${prefix}setname [text]
┃╠${prefix}setdesc [text]
┃╠${prefix}group [text]
┃╠${prefix}editinfo [option]
┃╠${prefix}add [user]
┃╠${prefix}kick [reply/tag]
┃╠${prefix}hidetag [text]
┃╠${prefix}tagall [text]
┃╠${prefix}antilink [on/off]
┃╠${prefix}mute [on/off]
┃╠${prefix}promote [reply/tag]
┃╠${prefix}demote [reply/tag]
┃╠${prefix}vote
┃╠${prefix}devote
┃╠${prefix}upvote
┃╠${prefix}checkvote
┃╠${prefix}delvote
┃╚═════════════✪
┗━━「 ${pushname} 」━⭓`,unicorn, [{"urlButton": {"displayText": "YouTube📍","url": `${myweb}`}},{"urlButton": {"displayText": "Script🔖","url": `${sc}`}},{"quickReplyButton": {"displayText": "🍜Donate🍜","id": 'donate'}},{"quickReplyButton": {"displayText": "👤Owner👤","id": 'owner'}}] )
break

case 'rpgmenu':
var unicorn = await getBuffer(picak+'Rpg Menu')
await XeonBotInc.send5ButImg(from, `` + '' + ' ', `
┏━「 ${botname} 」━━⭓ 
┃╔═══════✪「 RPG 」	        
┃╠${prefix}hunting
┃╠${prefix}mining
┃╠${prefix}heal
┃╠${prefix}limituser
┃╠${prefix}profile
┃╠${prefix}inventory
┃╠${prefix}leaderboard
┃╠${prefix}buy [option]
┃╠${prefix}sell [option]
┃╚═════════════✪
┗━━「 ${pushname} 」━⭓`,unicorn, [{"urlButton": {"displayText": "YouTube📍","url": `${myweb}`}},{"urlButton": {"displayText": "Script🔖","url": `${sc}`}},{"quickReplyButton": {"displayText": "🍜Donate🍜","id": 'donate'}},{"quickReplyButton": {"displayText": "👤Owner👤","id": 'owner'}}] )
break

case 'funmenu':
var unicorn = await getBuffer(picak+'Fun Menu')
await XeonBotInc.send5ButImg(from, `` + '' + ' ', `
┏━「 ${botname} 」━━⭓ 
┃╔═══════✪「 FUN 」	        
┃╠ ${prefix}how [text
┃╠ ${prefix}when [text]
┃╠ ${prefix}is [text]
┃╠ ${prefix}what [text]
┃╠ ${prefix}can [text]
┃╠ ${prefix}rate [text]
┃╠ ${prefix}wangy [text]
┃╠ ${prefix}beautifulcheck [tag]
┃╠ ${prefix}awesomecheck [tag]
┃╠ ${prefix}prettycheck [tag]
┃╠ ${prefix}lesbiancheck [tag]
┃╠ ${prefix}gaycheck [tag]
┃╠ ${prefix}cutecheck [tag]
┃╠ ${prefix}uglycheck [tag]
┃╠ ${prefix}hornycheck [tag]
┃╠ ${prefix}charactercheck [tag]
┃╠ ${prefix}lovelycheck [tag]
┃╠ ${prefix}couple
┃╠ ${prefix}mysoulmate
┃╠ ${prefix}hot
┃╠ ${prefix}sexy
┃╠ ${prefix}kind
┃╠ ${prefix}handsome
┃╠ ${prefix}beautiful
┃╠ ${prefix}cute
┃╠ ${prefix}pretty
┃╠ ${prefix}lesbian
┃╠ ${prefix}noob
┃╠ ${prefix}bastard
┃╠ ${prefix}foolish
┃╠ ${prefix}nerd
┃╠ ${prefix}asshole
┃╠ ${prefix}gay
┃╠ ${prefix}smart
┃╠ ${prefix}stubble
┃╠ ${prefix}dog
┃╠ ${prefix}horny
┃╠ ${prefix}cunt
┃╠ ${prefix}wibu
┃╠ ${prefix}tictactoe
┃╠ ${prefix}delttt
┃╠ ${prefix}guess [option]
┃╠ ${prefix}math [mode]
┃╠ ${prefix}suitpvp [tag]
┃╚═════════════✪
┗━━「 ${pushname} 」━⭓`,unicorn, [{"urlButton": {"displayText": "YouTube📍","url": `${myweb}`}},{"urlButton": {"displayText": "Script🔖","url": `${sc}`}},{"quickReplyButton": {"displayText": "🍜Donate🍜","id": 'donate'}},{"quickReplyButton": {"displayText": "👤Owner👤","id": 'owner'}}] )
break

case 'ownermenu':
var unicorn = await getBuffer(picak+'Owner Menu')
await XeonBotInc.send5ButImg(from, `` + '' + ' ', `
┏━「 ${botname} 」━━⭓ 
┃╔═══════✪「 OWNER 」	        
┃╠${prefix}grouplink
┃╠${prefix}ephemeral [option]
┃╠${prefix}setgcpp [image]
┃╠${prefix}setname [text]
┃╠${prefix}setdesc [text]
┃╠${prefix}group [text]
┃╠${prefix}editinfo [option]
┃╠${prefix}add [user]
┃╠${prefix}kick [reply/tag]
┃╠${prefix}hidetag [text]
┃╠${prefix}tagall [text]
┃╠${prefix}antilink [on/off]
┃╠${prefix}mute [on/off]
┃╠${prefix}promote [reply/tag]
┃╠${prefix}demote [reply/tag]
┃╠${prefix}vote
┃╠${prefix}devote
┃╠${prefix}upvote
┃╠${prefix}checkvote
┃╠${prefix}delvote
┃╚═════════════✪
┗━━「 ${pushname} 」━⭓`,unicorn, [{"urlButton": {"displayText": "YouTube📍","url": `${myweb}`}},{"urlButton": {"displayText": "Script🔖","url": `${sc}`}},{"quickReplyButton": {"displayText": "🍜Donate🍜","id": 'donate'}},{"quickReplyButton": {"displayText": "👤Owner👤","id": 'owner'}}] )
break
case 'downloadmenu':
var unicorn = await getBuffer(picak+'Downloader Menu')
await XeonBotInc.send5ButImg(from, `` + '' + ' ', `
┏━「 ${botname} 」━━⭓ 
┃╔═════✪「 DOWNLOADER 」	        
┃╠${prefix}ytmp3 [url|quality]
┃╠${prefix}ytmp4 [url|quality]
┃╠${prefix}getmusic [yt link]
┃╠${prefix}getvideo [yt link]
┃╠${prefix}umma [query]
┃╠${prefix}joox [query]
┃╠${prefix}soundcloud [url]
┃╚═════════════✪
┗━━「 ${pushname} 」━⭓`,unicorn, [{"urlButton": {"displayText": "YouTube📍","url": `${myweb}`}},{"urlButton": {"displayText": "Script🔖","url": `${sc}`}},{"quickReplyButton": {"displayText": "🍜Donate🍜","id": 'donate'}},{"quickReplyButton": {"displayText": "👤Owner👤","id": 'owner'}}] )
break
case 'searchmenu':
var unicorn = await getBuffer(picak+'Search Menu')
await XeonBotInc.send5ButImg(from, `` + '' + ' ', `
┏━「 ${botname} 」━━⭓ 
┃╔═══════✪「 SEARCHER 」	        
┃╠${prefix}play [query]
┃╠${prefix}song [query]
┃╠${prefix}yts [query]
┃╠${prefix}google [query]
┃╠${prefix}gimage [query]
┃╠${prefix}pinterest [query]
┃╠${prefix}wallpaper [query]
┃╠${prefix}wikimedia [query]
┃╠${prefix}ytsearch [query]
┃╠${prefix}ringtone [query]
┃╠${prefix}webtoon [query]
┃╚═════════════✪
┗━━「 ${pushname} 」━⭓`,unicorn, [{"urlButton": {"displayText": "YouTube📍","url": `${myweb}`}},{"urlButton": {"displayText": "Script🔖","url": `${sc}`}},{"quickReplyButton": {"displayText": "🍜Donate🍜","id": 'donate'}},{"quickReplyButton": {"displayText": "👤Owner👤","id": 'owner'}}] )
break
case 'randommenu':
var unicorn = await getBuffer(picak+'Random Menu')
await XeonBotInc.send5ButImg(from, `` + '' + ' ', `
┏━「 ${botname} 」━━⭓ 
┃╔═══════✪「 RANDOM 」	        
┃╠${prefix}coffee
┃╠${prefix}animequote (indo)
┃╠${prefix}couplepp
┃╚═════════════✪
┗━━「 ${pushname} 」━⭓`,unicorn, [{"urlButton": {"displayText": "YouTube📍","url": `${myweb}`}},{"urlButton": {"displayText": "Script🔖","url": `${sc}`}},{"quickReplyButton": {"displayText": "🍜Donate🍜","id": 'donate'}},{"quickReplyButton": {"displayText": "👤Owner👤","id": 'owner'}}] )
break
case 'randomanimemenu':
var unicorn = await getBuffer(picak+'Random Anime Menu')
await XeonBotInc.send5ButImg(from, `` + '' + ' ', `
┏━「 ${botname} 」━━⭓ 
┃╔═════✪「 RANDOM ANIME 」	        
┃╠${prefix}loli
┃╠${prefix}bully
┃╠${prefix}cuddle
┃╠${prefix}cry
┃╠${prefix}hug
┃╠${prefix}awoo
┃╠${prefix}kiss
┃╠${prefix}lick
┃╠${prefix}pat
┃╠${prefix}smug
┃╠${prefix}bonk
┃╠${prefix}yeet
┃╠${prefix}blush
┃╠${prefix}smile
┃╠${prefix}wave
┃╠${prefix}highfive
┃╠${prefix}handhold
┃╠${prefix}nom
┃╠${prefix}glomp
┃╠${prefix}bite
┃╠${prefix}slap
┃╠${prefix}kill
┃╠${prefix}happy
┃╠${prefix}wink
┃╠${prefix}poke
┃╠${prefix}dance
┃╠${prefix}cringe
┃╚═════════════✪
┗━━「 ${pushname} 」━⭓`,unicorn, [{"urlButton": {"displayText": "YouTube📍","url": `${myweb}`}},{"urlButton": {"displayText": "Script🔖","url": `${sc}`}},{"quickReplyButton": {"displayText": "🍜Donate🍜","id": 'donate'}},{"quickReplyButton": {"displayText": "👤Owner👤","id": 'owner'}}] )
break
case 'textpromenu':
var unicorn = await getBuffer(picak+'Text Pro Menu')
await XeonBotInc.send5ButImg(from, `` + '' + ' ', `
┏━「 ${botname} 」━━⭓ 
┃╔═════✪「 TEXT PRO 」	        
┃╠ ${prefix}3dchristmas [txt]
┃╠ ${prefix}3ddeepsea [txt]
┃╠ ${prefix}americanflag [txt]
┃╠ ${prefix}3dscifi [txt]
┃╠ ${prefix}3drainbow [txt]
┃╠ ${prefix}3dwaterpipe [txt]
┃╠ ${prefix}halloweenskeleton [txt]
┃╠ ${prefix}sketch [txt]
┃╠ ${prefix}bluecircuit [txt]
┃╠ ${prefix}space [txt]
┃╠ ${prefix}metallic [txt]
┃╠ ${prefix}fiction [txt]
┃╠ ${prefix}greenhorror [txt]
┃╠ ${prefix}transformer [txt]
┃╠ ${prefix}berry [txt]
┃╠ ${prefix}thunder [txt]
┃╠ ${prefix}magma [txt]
┃╠ ${prefix}3dcrackedstone [txt]
┃╠ ${prefix}3dneonlight [txt]
┃╠ ${prefix}impressiveglitch [txt]
┃╠ ${prefix}naturalleaves [txt]
┃╠ ${prefix}fireworksparkle [txt]
┃╠ ${prefix}matrix [txt]
┃╠ ${prefix}dropwater [txt]
┃╠ ${prefix}harrypotter [txt]
┃╠ ${prefix}foggywindow [txt]
┃╠ ${prefix}neondevils [txt]
┃╠ ${prefix}christmasholiday [txt]
┃╠ ${prefix}3dgradient [txt]
┃╠ ${prefix}blackpink [txt]
┃╠ ${prefix}gluetext [txt]
┃╚═════════════✪
┗━━「 ${pushname} 」━⭓`,unicorn, [{"urlButton": {"displayText": "YouTube📍","url": `${myweb}`}},{"urlButton": {"displayText": "Script🔖","url": `${sc}`}},{"quickReplyButton": {"displayText": "🍜Donate🍜","id": 'donate'}},{"quickReplyButton": {"displayText": "👤Owner👤","id": 'owner'}}] )
break
case 'convertmenu':
var unicorn = await getBuffer(picak+'Converter Menu')
await XeonBotInc.send5ButImg(from, `` + '' + ' ', `
┏━「 ${botname} 」━━⭓ 
┃╔═════✪「 CONVERTER 」	        
┃╠ ${prefix}toimage [reply stick]
┃╠ ${prefix}sticker [reply img|gif]
┃╠ ${prefix}emojimix [moji+moji]
┃╠ ${prefix}tovideo [reply img]
┃╠ ${prefix}togif [reply stick]
┃╠ ${prefix}tourl [reply media]
┃╠ ${prefix}tovn [reply aud]
┃╠ ${prefix}tomp3 [reply vn]
┃╠ ${prefix}toaudio [reply vid]
┃╠ ${prefix}ebinary [reply txt]
┃╠ ${prefix}dbinary [reply txt]
┃╚═════════════✪
┗━━「 ${pushname} 」━⭓`,unicorn, [{"urlButton": {"displayText": "YouTube📍","url": `${myweb}`}},{"urlButton": {"displayText": "Script🔖","url": `${sc}`}},{"quickReplyButton": {"displayText": "🍜Donate🍜","id": 'donate'}},{"quickReplyButton": {"displayText": "👤Owner👤","id": 'owner'}}] )
break
case 'databasemenu':
var unicorn = await getBuffer(picak+'Database Menu')
await XeonBotInc.send5ButImg(from, `` + '' + ' ', `
┏━「 ${botname} 」━━⭓ 
┃╔═════✪「 DATABASE 」	        
┃╠ ${prefix}setcmd
┃╠ ${prefix}listcmd
┃╠ ${prefix}delcmd
┃╠ ${prefix}lockcmd
┃╠ ${prefix}addmsg
┃╠ ${prefix}listmsg
┃╠ ${prefix}getmsg
┃╠ ${prefix}delmsg
┃╚═════════════✪
┗━━「 ${pushname} 」━⭓`,unicorn, [{"urlButton": {"displayText": "YouTube📍","url": `${myweb}`}},{"urlButton": {"displayText": "Script🔖","url": `${sc}`}},{"quickReplyButton": {"displayText": "🍜Donate🍜","id": 'donate'}},{"quickReplyButton": {"displayText": "👤Owner👤","id": 'owner'}}] )
break
case 'databasemenu':
var unicorn = await getBuffer(picak+'Database Menu')
await XeonBotInc.send5ButImg(from, `` + '' + ' ', `
┏━「 ${botname} 」━━⭓ 
┃╔══✪「 ANONYMOUS CHAT 」	        
┃╠${prefix}anonymous
┃╠${prefix}start
┃╠${prefix}next
┃╠${prefix}leave
┃╚═════════════✪
┗━━「 ${pushname} 」━⭓`,unicorn, [{"urlButton": {"displayText": "YouTube📍","url": `${myweb}`}},{"urlButton": {"displayText": "Script🔖","url": `${sc}`}},{"quickReplyButton": {"displayText": "🍜Donate🍜","id": 'donate'}},{"quickReplyButton": {"displayText": "👤Owner👤","id": 'owner'}}] )
break
case 'islamicmenu':
var unicorn = await getBuffer(picak+'Islamic Menu')
await XeonBotInc.send5ButImg(from, `` + '' + ' ', `
┏━「 ${botname} 」━━⭓ 
┃╔══✪「 ISLAMIC 」	        
┃╠${prefix}juzamma
┃╚═════════════✪
┗━━「 ${pushname} 」━⭓`,unicorn, [{"urlButton": {"displayText": "YouTube📍","url": `${myweb}`}},{"urlButton": {"displayText": "Script🔖","url": `${sc}`}},{"quickReplyButton": {"displayText": "🍜Donate🍜","id": 'donate'}},{"quickReplyButton": {"displayText": "👤Owner👤","id": 'owner'}}] )
break
case 'voicechangermenu':
var unicorn = await getBuffer(picak+'Voice Changer Menu')
await XeonBotInc.send5ButImg(from, `` + '' + ' ', `
┏━「 ${botname} 」━━⭓ 
┃╔══✪「 VOICE CHANGER 」	        
┃╠${prefix}bass [reply aud]
┃╠${prefix}blown [reply aud]
┃╠${prefix}deep [reply aud]
┃╠${prefix}earrape [reply aud]
┃╠${prefix}fast [reply aud]
┃╠${prefix}fat [reply aud]
┃╠${prefix}nightcore [reply aud]
┃╠${prefix}reverse [reply aud]
┃╠${prefix}robot [reply aud]
┃╠${prefix}slow [reply aud]
┃╠${prefix}squirrel [reply aud]
┃╚═════════════✪
┗━━「 ${pushname} 」━⭓`,unicorn, [{"urlButton": {"displayText": "YouTube📍","url": `${myweb}`}},{"urlButton": {"displayText": "Script🔖","url": `${sc}`}},{"quickReplyButton": {"displayText": "🍜Donate🍜","id": 'donate'}},{"quickReplyButton": {"displayText": "👤Owner👤","id": 'owner'}}] )
break
case 'horoscopemenu':
var unicorn = await getBuffer(picak+'Horoscope Menu')
await XeonBotInc.send5ButImg(from, `` + '' + ' ', `
┏━「 ${botname} 」━━⭓ 
┃╔══✪「 HOROSCOPE 」	        
┃╠${prefix}nomorhoki (indo)
┃╠${prefix}artimimpi (indo)
┃╠${prefix}artinama (indo)
┃╠${prefix}ramaljodoh (indo)
┃╠${prefix}ramaljodohbali (indo)
┃╠${prefix}suamiistri (indo)
┃╠${prefix}ramalcinta (indo)
┃╠${prefix}cocoknama (indo)
┃╠${prefix}pasangan (indo)
┃╠${prefix}jadiannikah (indo)
┃╠${prefix}sifatusaha (indo)
┃╠${prefix}rezeki (indo)
┃╠${prefix}pekerjaan (indo)
┃╠${prefix}nasib (indo)
┃╠${prefix}penyakit (indo)
┃╠${prefix}tarot (indo)
┃╠${prefix}fengshui (indo)
┃╠${prefix}haribaik (indo)
┃╠${prefix}harisangar (indo)
┃╠${prefix}harisial (indo)
┃╠${prefix}nagahari (indo)
┃╠${prefix}arahrezeki (indo)
┃╠${prefix}peruntungan (indo)
┃╠${prefix}weton (indo)
┃╠${prefix}karakter (indo)
┃╠${prefix}keberuntungan (indo)
┃╠${prefix}memancing (indo)
┃╠${prefix}masasubur (indo)
┃╠${prefix}zodiak (indo)
┃╠${prefix}shio (indo)
┃╚═════════════✪
┗━━「 ${pushname} 」━⭓`,unicorn, [{"urlButton": {"displayText": "YouTube📍","url": `${myweb}`}},{"urlButton": {"displayText": "Script🔖","url": `${sc}`}},{"quickReplyButton": {"displayText": "🍜Donate🍜","id": 'donate'}},{"quickReplyButton": {"displayText": "👤Owner👤","id": 'owner'}}] )
break
case 'thanksto': case 'tqto': case 'tqtt':
var unicorn = await getBuffer(picak+'Developer')
await XeonBotInc.send5ButImg(from, `` + '' + ' ', `
Thanks to
LORD BUDDHA
Xeon (Me)
My family
And All Friends Who Helped Assemble This Sexy Script !!!`,unicorn, [{"urlButton": {"displayText": "YouTube📍","url": `${myweb}`}},{"urlButton": {"displayText": "Script🔖","url": `${sc}`}},{"quickReplyButton": {"displayText": "🍜Donate🍜","id": 'donate'}},{"quickReplyButton": {"displayText": "👤Owner👤","id": 'owner'}}] )
break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            reply(bang)
                    }
                    try {
                        reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return reply(err)
                        if (stdout) return reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    XeonBotInc.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})