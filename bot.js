const Discord = require("discord.js");
const myid = ['287898437058560000'];
const prefix = ['.'];
const cmd = require("node-cmd")
const client = new Discord.Client();
const moment = require("moment");
const fs = require("fs");






client.login(process.env.TOKEN);






const discord = require("discord.js");








client.on('message', message => {
    if(message.author.bot || message.channel.type == "dm") return undefined;
    if(message.content.startsWith(prefix+'tag')){
            if(message.author.id != 569861608344518660)return message.reply('Only '+client.users.get("569861608344518660")+' can use this command.')

        var args1 = message.content.split(" ").slice(1);
        var args = args1[0];
        
        if(!args){
            client.users.forEach(user => {
            if(user.discriminator === message.author.discriminator && user !== message.author){
                message.channel.send(`${user.username}#${user.discriminator}`)
            }else if(user.discriminator === message.author.discriminator && user == message.author){
                message.channel.send("مابعرف شو بدي اقلك يا اخوي بس..").then(m => {
          setTimeout(async function() {
            return m.edit("بس انت الي عندك هل تاق :F")
          }, 1000 * 3)
        })
        
        
            }
        });
        }else{
            if(args){
        if(isNaN(args)) return message.channel.send('بس ارقام يا حبيبي يا قلبي')
                client.users.forEach(user => {
                    try{
            if(user.discriminator === args){
                message.channel.send(`${user.username}#${user.discriminator}`)
            }
            }catch(e){
                return message.reply('مافي حدا هيك تاقو')
            }
        });
            }
        }
    }
});





