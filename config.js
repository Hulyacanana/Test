const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "IKFjwKiS#sNX0GfjK6qxZOPEzdEPvbNqHFmKnb__Dwy4KtR_n7zo",
ALIVE_IMG : process.env.ALIVE_IMG || "https://i.ibb.co/jqN8NHQ/4838.jpg",
ALIVE_MSG : process.env.ALIVE_MSG || "*🤖 💃𝐇𝐞𝐲 𝐈'𝐦 EᗰᗪI Eᑎ᙭KIᒪᒪEᖇ  𝐖𝐚 𝐁𝐨T 𝐈'𝐦 𝐀𝐥𝐢𝐯𝐞 𝐍𝐨𝐰🎠𝙲𝚛𝚎𝚊𝚝𝚎𝚍 𝚋𝚢 𝙳𝚒𝚕𝚊 𝚊𝚗𝚍 𝚆𝚒𝚜𝚑𝚠𝚊𝚓𝚒𝚝𝚑. 𝚃𝚑𝚊𝚗𝚔𝚜 𝚏𝚘𝚛 𝚞𝚜𝚒𝚗𝚐 𝚖𝚎. 𝙼𝚢 𝚖𝚊𝚒𝚗 𝚑𝚘𝚙𝚎 𝚒𝚜 𝚑𝚎𝚕𝚙 𝚝𝚘 𝚢𝚘𝚞. 𝙼𝚢 𝚟𝚎𝚛𝚜𝚒𝚘𝚗 𝚒𝚜 1.0. 𝙸𝚏 𝚢𝚘𝚞 𝚠𝚊𝚗𝚝 𝚝𝚘 𝚍𝚎𝚙𝚕𝚘𝚢 𝚖𝚎 𝚐𝚎𝚝 𝚖𝚢 𝚛𝚎𝚙𝚘𝚜𝚒𝚝𝚘𝚛𝚢. 𝙴𝚗𝚓𝚘𝚢 𝚋𝚎𝚜𝚝✨©ᴘᴏᴡᴇʀᴇᴅ ʙʏ Dila & wishwajit",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY EMDI ENXKILLER 🤍*",
// set the auto reply massage on status reply  
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "simi md",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "simi md",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "☣,☢,🤴,😈,👾",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "true",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "94760224138",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "simi md ",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ dila*",
// add bot owner name    

LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar *simi md*⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "true",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "true",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "true",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "94760224138",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log", 
// change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "true"
// make it true for auto recoding 
};
   
