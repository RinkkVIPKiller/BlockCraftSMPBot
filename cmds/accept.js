const Discord = require("discord.js")
module.exports.run = async(bot, message, prefix) =>{
  let msg = message.content.toLowerCase();
  if (bot.user.id === message.author.id) { return }
  let Owner = await message.guild.roles.find(r => r.name == "Owner")    
  let Staff = await message.guild.roles.find(r => r.name == "Staff")
  let AcceptedRole = await message.guild.roles.find(r => r.name == "Accepted")
  let pending = await message.guild.roles.get("469489009106616331")    
  const channelinfo = message.guild.channels.find(c => c.name == "info");
  const channelannounce = message.guild.channels.find(c => c.name == "announcements");
  const channelfaq = message.guild.channels.find(c => c.name == "faq");
  const channelideas = message.guild.channels.find(c => c.name == "ideas");
  let args = msg.split(" ").slice(1)
  let rUser = await message.guild.member(await message.mentions.users.first() || await message.guild.members.get(args[0]))
  message.delete(1000)
  if (!message.member.roles.has(Owner.id) && !message.member.roles.has(Staff.id)) return message.channel.send("You do not have access to this command")
  if (!rUser) return message.channel.send('This user doesn\'t exist')
  rUser.roles.add(AcceptedRole.id);
  rUser.roles.remove(pending.id);
  message.guild.channels.find(c => c.name == "general").send(`Welcome our newest member, ${rUser}! \n\n You will be whitelisted soon. Make sure to check the ${channelinfo}, ${channelfaq} and ${channelannounce} channels, for any updates, throw your ideas on ${channelideas}, if you have any questions tag Rinkky and have a good one!`)
  
}
