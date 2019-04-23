const Discord = require("discord.js")
module.exports.run = async(bot, message, prefix) =>{
  let msg = message.content.toLowerCase();
  if (bot.user.id === message.author.id) { return }
  let Owner = message.guild.roles.find(r => r.name == "Owner")    
  let Staff = message.guild.roles.find(r => r.name == "Staff")
  let AcceptedRole = message.guild.roles.find(r => r.name == "Accepted")
  let pending = message.guild.roles.find(r => r.name == "In-Progress")    
  let args = msg.split(" ").slice(1)
  let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
  message.delete(1000)
  if (!message.member.roles.has(Owner.id) && !message.member.roles.has(Staff.id)) return message.channel.send("You do not have access to this command")
  if (!rUser) return message.channel.send('This user doesn\'t exist')
  rUser.addRole(AcceptedRole.id);
  rUser.removeRole(pending.id);
  message.guild.channels.find(c => c.name == "general").send(`Welcome our newest member, ${rUser}! \n\n You will be whitelisted 1 week before the reset, and will be able to roam around in spectator mode! Make sure to check the #info, #faq and #announcements channels, for any updates, throw your ideas on #ideas, if you have any questions tag Rinkky and have a good one!`)
  
}
