const Discord = require('discord.js');
const client = new Discord.Client();
const convert = require("hh-mm-ss")
const dateFormat = require('dateformat');
const fs = require('fs');
const pretty = require('pretty-ms');
const rn = require('random-number');
const moment = require('moment');
const Canvas = require('canvas')
const jimp = require('jimp')
const sql = require('sqlite')
const ytdl = require("ytdl-core");

client.on('ready', () => {
  console.log('╔[════════════════════════════════════]╗');
  console.log('')
  console.log('            ╔[════════════]╗')
  console.log('              Bot Is Online')
  console.log('            ╚[════════════]╝')
  console.log('')
  console.log('\x1b[35m%s\x1b[0m', `Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('\x1b[33m%s\x1b[0m', `servers! [ " ${client.guilds.size} " ]`);
  console.log('')
  console.log('\x1b[34m%s\x1b[0m', `Users! [ " ${client.users.size} " ]`);
  console.log('')
  console.log('╚[════════════════════════════════════]╝')
});



client.on('guildMemberAdd', member => {

    const channel = member.guild.channels.find('name', 'CHANNEL NAME');
  
    const millis = new Date().getTime() - member.user.createdAt.getTime();
    const now = new Date();
    const createdAt = millis / 1000 / 60 / 60 / 24;




  
    const embed = new Discord.RichEmbed()
    
    .setColor("black")
    .setDescription(`**تاريخ دخولك للدسكورد منذ ${createdAt.toFixed(0)} يوم**`)
    .setAuthor(member.user.tag, member.user.avatarURL);
    channel.sendEmbed(embed);

  
});

var dat = JSON.parse("{}");
function forEachObject(obj, func) {
    Object.keys(obj).forEach(function (key) { func(key, obj[key]) });
}
client.on("ready", () => {
    var guild;
    while (!guild)
        guild = client.guilds.get("SERVER ID");
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            dat[Inv] = Invite.uses;
        });
    });
});



client.on("guildMemberAdd", (member) => {
    let channel = member.guild.channels.get("CHANNEL ID");
    if (!channel) {
        console.log("!the channel id it's not correct");
        return;
    }
    if (member.id == client.user.id) {
        return;
    }
    console.log('-');
    			 	         var currentTime = new Date(),
		  hours = currentTime.getHours() + 4 ,
          hours2 = currentTime.getHours() + 1 ,             
		   minutes = currentTime.getMinutes(),             
		   seconds = currentTime.getSeconds(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();
             if(hours2 > 12) {
               hours2 -= 12;
            } else if(hours2 == 0) {
                hours2 = "12";
            
            }  
            var suffix = 'AM';
            if (hours >= 12) {
                suffix = 'PM';
                hours = hours - 12;	
            }
            if (hours == 0) {
                hours = 12;
            }
         var ee = member.user;
    var guild;
    while (!guild)
        guild = client.guilds.get("SERVER ID");
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            if (dat[Inv])
                if (dat[Inv] < Invite.uses) {
 channel.send(`**Join By :** ${Invite.inviter} `) ;         
 }
            dat[Inv] = Invite.uses;
       
       });
    });
});


client.on('guildMemberAdd', member => {
var Canvas = require('canvas') //npm i canvas
var jimp = require('jimp') //npm i jimp

const w = ['welcome.png'];  

        let Image = Canvas.Image,
            canvas = new Canvas(400, 174),
            
            ctx = canvas.getContext('2d');
        ctx.patternQuality = 'bilinear';
        ctx.filter = 'bilinear';
        ctx.antialias = 'subpixel';
        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 400, 174);

})

                let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".png" : member.user.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);

                        

                        //ur name
                        ctx.font = "bold 20px Arial";
                        ctx.fontSize = '24px';
                        ctx.fillStyle = "#a2a3c8";
                        ctx.textAlign = "center";
                        ctx.fillText(member.user.username, /* Right & Left */ 250, /* Top & Down */ 125);
                        
                        //Avatar
                                               //Avatar
             let Avatar = Canvas.Image;
                           let ava = new Avatar;
                           ava.src = buf;
                           ctx.beginPath();
                           ctx.arc(/* Right & Left */ 86, /* Top & Down */ 85, 80, 0, Math.PI*2);
                           ctx.closePath();
                           ctx.clip();
                           ctx.drawImage(ava, 0, 0, 170, 170);  

member.guild.channels.get('CHANNEL ID').sendFile(canvas.toBuffer());




})
})

});

bot.on('voiceStateUpdate', (old, now) => {
  const channel = bot.channels.get("VOICE CHANNEL ID");
  const currentSize = channel.guild.members.filter(m => m.voiceChannel).size;
  const size = channel.name.match(/\[\s(\d+)\s\]/);
  if (!size) return channel.setName(`Voice Online : ${currentSize}`);
  if (currentSize !== size) channel.setName(`Voice Online : ${currentSize}`);
});

client.on('message', async message => {
    var prefix = "+";
    if (message.content.startsWith("#!bc")) {
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(':x: **للأسف لا تمتلك صلاحية** `ADMINISTRATOR`');
        let filter = m => m.author.id === message.author.id;
        let thisMessage;
        let thisFalse;
        message.channel.send(':speech_balloon: **ارسل الرسالة الان**').then(msg => {

            let awaitM = message.channel.awaitMessages(filter, {
                    max: 1,
                    time: 20000,
                    errors: ['time']
                })
                .then(collected => {
                    collected.first().delete();
                    thisMessage = collected.first().content;
                    msg.edit(':o: **هل انت متأكد؟**');
                    let awaitY = message.channel.awaitMessages(response => response.content === 'نعم' || 'لا' && filter, {
                            max: 1,
                            time: 20000,
                            errors: ['time']
                        })
                .then(collected => {
                    if (collected.first().content === 'لا') {
                            msg.delete();
                            message.delete();
                            thisFalse = false;
                    }
                    if (collected.first().content === 'نعم') {
                            if (thisFalse === false) return;
                                message.guild.members.forEach(member => {
                                    msg.edit(`:white_check_mark: لقد تم ارسال هذه الرسالة الى **${message.guild.memberCount} عضو**`);
                                    collected.first().delete();
                                    member.send(`${thisMessage}`);
                                    console.log("لقد تم ارسال هذه الرسالة الى **${message.guild.memberCount} اعضاء**")
                                });
                            }
                        });
                });
        });
    }
});

client.login("");