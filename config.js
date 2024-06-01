const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "13156132504";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_37_06_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDMzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjksXG4gICAgICAgIDEyMixcbiAgICAgICAgMjM2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODksXG4gICAgICAgIDg3LFxuICAgICAgICAyMDksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQwLFxuICAgICAgICA4NixcbiAgICAgICAgMTE2LFxuICAgICAgICA5LFxuICAgICAgICAyMDksXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDUyLFxuICAgICAgICA3NSxcbiAgICAgICAgNyxcbiAgICAgICAgMTAzLFxuICAgICAgICA2NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzksXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjksXG4gICAgICAgIDk3LFxuICAgICAgICAyNSxcbiAgICAgICAgMjM2LFxuICAgICAgICA3OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAzLFxuICAgICAgICAyNixcbiAgICAgICAgNDgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTY3LFxuICAgICAgICA0MixcbiAgICAgICAgNTMsXG4gICAgICAgIDczLFxuICAgICAgICAyMjksXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE2LFxuICAgICAgICA0OSxcbiAgICAgICAgODYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzgsXG4gICAgICAgIDI5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDQ0LFxuICAgICAgICA1NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzksXG4gICAgICAgIDYzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAxODMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDUwLFxuICAgICAgICAxODUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDgwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDI1MixcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTI1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDc4LFxuICAgICAgICAyMDksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0NixcbiAgICAgICAgNjMsXG4gICAgICAgIDgyLFxuICAgICAgICAyMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDczLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIsXG4gICAgICAgIDgyLFxuICAgICAgICA3NixcbiAgICAgICAgNjksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNjhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgODksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA4MixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTEwLFxuICAgICAgICA3OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDI4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI5LFxuICAgICAgICAyNCxcbiAgICAgICAgMjUyLFxuICAgICAgICA1OSxcbiAgICAgICAgMjAwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTkwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNixcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTksXG4gICAgICAgIDIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDcyLFxuICAgICAgICA1NixcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDc3LFxuICAgICAgICAzMixcbiAgICAgICAgMjQzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTYxLFxuICAgICAgICA2NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxODIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDQzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjI5LFxuICBcImFkdlNlY3JldEtleVwiOiBcImhrSDhuWXFGbE9Yc013R3Z1WnhiL28xMGVoa2pTdkRYUVNMZTdKRjdVNzg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMTMxNTYxMzI1MDRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkU4MjU5NjE0REM2QTVENTcyOTA1NTY2N0IxQkY0ODFGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNzI1OTgyNFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJFTE4zY1hzb1RVLVRQcGtkOEFiS1lnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjQxZDBmNzlkLWQ5MmMtNDkyZS1hMDNhLWQ2ZTg1MzNlNjEyMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyLFxuICAgICAgMTc0LFxuICAgICAgMTMzLFxuICAgICAgMjA2LFxuICAgICAgNDIsXG4gICAgICAyOCxcbiAgICAgIDEyMSxcbiAgICAgIDI2LFxuICAgICAgMTI2LFxuICAgICAgNzUsXG4gICAgICAxMjcsXG4gICAgICA1NSxcbiAgICAgIDI1MSxcbiAgICAgIDEyOSxcbiAgICAgIDE1NyxcbiAgICAgIDEzNCxcbiAgICAgIDE4MCxcbiAgICAgIDE0MixcbiAgICAgIDgxLFxuICAgICAgMjI5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNyxcbiAgICAgIDI0MCxcbiAgICAgIDE4MyxcbiAgICAgIDE5NCxcbiAgICAgIDQ4LFxuICAgICAgMTE2LFxuICAgICAgNzgsXG4gICAgICAyNyxcbiAgICAgIDMwLFxuICAgICAgMTg0LFxuICAgICAgMjIyLFxuICAgICAgMjUwLFxuICAgICAgMTksXG4gICAgICAxNjcsXG4gICAgICA1OSxcbiAgICAgIDEzMSxcbiAgICAgIDExMixcbiAgICAgIDE2LFxuICAgICAgNzIsXG4gICAgICAyMzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPSFptcU1GRUttYzdiSUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkZqanU5bWx4V3owWmxERkxFZStOdjZBR1VsZGZrY0lCenYxL0t1UzV3d0E9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiS1RuNjM3MHVMV3ZFanVhTkhNbzVKcGJnUUJqS3ZJSFlIS0JqcmVCYnpCelp1V2JlT2pZc1dWdXZPYndYbzhjQjVYbnk0THI5Y3ZiSWo0MllId0NlQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRU1kdlJJMlp5cXdWU0NXdmRUdW40NnFyY1k0ZzREK1RVTHlVSEJWbk51b29Xd0lvRnZjM3IzMFZxSE9ZWDZkbjJDWWxlOUxQNUwvenkzY2tpTFNaQkE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIxMzE1NjEzMjUwNDoxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjQ4NDUxMzkyNjM5MDYzOjE2QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIuaCssmq4bSb4bSn4bSEypzJquOKnVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMTMxNTYxMzI1MDQ6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTcyNTk4MjAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLUk1cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtSSi5qc29uIjogIntcImtleURhdGFcIjpcImQzL1Q1ZWpqdkRiNkpqZWFFYVBRMnloZFdlYjdUUWV0Wm1Ia251OXJPWDA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQxNjAxNTA2NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS1JLLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNm5iYTM4anlONm5sUXpaMVFxS1FxZGMyWEFWT1owS3JlYzUyQXhSb2h3Zz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDE2MDE1MDY4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLUkwuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJneFR4SEpOdlVDOFpWdWNMbk80T2pUekxLZFgzL0J2Tmo3Z1l0NHN0eW9NPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0MTYwMTUwNjgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTcyNDAwMjAwMzRcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLUk0uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJVL2tiWlc1N1RsSDZ0RUcyNzhOSElUa3pIRjFaTytFSTR1UTVZR3ZZdFBJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0MTYwMTUwNjksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNzI1NTQ5MDc1MVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtSTi5qc29uIjogIntcImtleURhdGFcIjpcIks4blE0Y21Hb2NDZTY4VFFESzJmYmFmc2xkeVkxR1RVeE9hRFFsSGJDelk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQxNjAxNTA3MSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTcyNTc0Njg5NDBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLUk8uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJtVXJwVGYrUldITnlGNFlyb2VHOUVnaDgrbURjWmw3eTczWnFua2NvZ1RBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0MTYwMTUwNzEsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtSUC5qc29uIjogIntcImtleURhdGFcIjpcImVQS2F1dlpTcU0rZ05NbUcwUlR4bnptZVFTR09IVU1sYStvaDU1Wk53eXM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQxNjAxNTA3MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE3MjU5NDczODgwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
