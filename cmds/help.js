module.exports.run = async(bot, message, prefix) =>{
	console.log('HELP INITIATED!')
	let sender = message.author; // The person who sent the message
	let msg = message.content.toLowerCase();
	if (bot.user.id === message.author.id) { return }
	let nick = sender.username
	let Owner = message.guild.roles.find(r => r.name == "Owner")    
	let Staff = message.guild.roles.find(r => r.name == "Staff")
	let PlayerRole = message.guild.roles.find(r => r.name == "Player")
	let muted = message.guild.roles.find(r => r.name == "Muted")
	let pingRole = message.guild.roles.find(r => r.name == "Ping")
	let pending = message.guild.roles.find(r => r.name == "In-Progress")    
	let args = msg.split(" ").slice(1)
	const Discord = require("discord.js")
	if(!args[0]){
	  const commands = ["admin","pingrole", "leaderboard", "rpingrole", "botinfo", "serverinfo", "roleinfo", "member", "report", "play", "skip", "volume", "np", "queue"]
		let embed = new Discord.MessageEmbed()
		.setDescription("All available commands")
		.setColor(0x00fff3)
		for(var i = 0; i < commands.length; i++){
			embed.addField("Command:", commands[i])
		}
		await message.channel.send(embed)
		return await message.channel.send("For info on a specific command, do `help (command)")
	}

	if(args[0] === "pingrole"){
		let embed = new Discord.MessageEmbed()
		.setDescription("Ping role")
		.setColor(0x00fff3)
		.addField("Usage:", "`pingrole")
		.addField("Description:", "Get the ping role for the announcements of lesser importance.")
		return await message.channel.send(embed)
	}
	if(args[0] === "rpingrole"){
		let embed = new Discord.MessageEmbed()
		.setDescription("Remove ping role")
		.setColor(0x00fff3)
		.addField("Usage:", "`rpingrole")
		.addField("Description:", "Remove the ping role from yourself.")
		return await message.channel.send(embed)
	}
        if(args[0] === "botinfo"){
		let embed = new Discord.MessageEmbed()
		.setDescription("Bot info")
		.setColor(0x00fff3)
		.addField("Usage:", "`botinfo")
		.addField("Description:", "Retrieve information about the bot.")
		return await message.channel.send(embed)
	}
	if(args[0] === "serverinfo"){
		let embed = new Discord.MessageEmbed()
		.setDescription("Server info")
		.setColor(0x00fff3)
		.addField("Usage:", "`serverinfo")
		.addField("Description:", "Retrieve information about the server.")
		return await message.channel.send(embed)
	}
	if(args[0] === "roleinfo"){
		let embed = new Discord.MessageEmbed()
		.setDescription("Role info")
		.setColor(0x00fff3)
		.addField("Usage:", "`roleinfo @(role)")
		.addField("Description:", "Retrieve information about a role, do not use this excessively!")
		return await message.channel.send(embed)
	}
	if(args[0] === "member"){
		let embed = new Discord.MessageEmbed()
		.setDescription("Member info")
		.setColor(0x00fff3)
		.addField("Usage:", "`memberinfo @(member)")
		.addField("Description:", "Retrieve information about a member, do not over use this!")
		return await message.channel.send(embed)
	}
	if(args[0] === "report"){
		let embed = new Discord.MessageEmbed()
		.setDescription("Report")
		.setColor(0x00fff3)
		.addField("Usage:", "`report @(member) (reason)")
		.addField("Description:", "Report another user.")
		return await message.channel.send(embed)
	}
	if(args[0] === "admin"){
		if (message.author.id === "186487324517859328") {
			let embed = new Discord.MessageEmbed()
			.setDescription("You moron")
			.setColor(0x00fff3)
			.addField("just do `deny <user> <reason> or `accept <user>` for christ's sake!")
			.addField("Description:", "Cant you remember something for once in your miserable life?")
			return await message.channel.send(embed)
		} else if (message.member.roles.has(Owner.id)){
			let embed = new Discord.MessageEmbed()
			.setDescription("Deny and Accept")
			.setColor(0x00fff3)
			.addField("Usage:", "`deny <user> <reason> or `accept <user> kind sir.")
			.addField("Description:", "dont worry, everyone forgets from time to time.")
		}
	}
	if(args[0] === "play"){
		let embed = new Discord.MessageEmbed()
		.setDescription("Play a song")
		.setColor(0x00fff3)
		.addField("Usage:", "`play (Search term/URL)")
		.addField("Description:", "Play some groovy tunes.")
		return await message.channel.send(embed)
	} 
	if(args[0] === "skip"){
		let embed = new Discord.MessageEmbed()
		.setDescription("Skip a song")
		.setColor(0x00fff3)
		.addField("Usage:", "`skip")
		.addField("Description:", "Skip the worst songs, a vote!")
		return await message.channel.send(embed)
	}  
	if(args[0] === "np"){
		let embed = new Discord.MessageEmbed()
		.setDescription("Now playing")
		.setColor(0x00fff3)
		.addField("Usage:", "`np")
		.addField("Description:", "Like this song, check its name.")
		return await message.channel.send(embed)
	}      
	if(args[0] === "volume"){
		let embed = new Discord.MessageEmbed()
		.setDescription("Check/set the volume")
		.setColor(0x00fff3)
		.addField("Usage:", "`volume OR `volume (num)")
		.addField("Description:", "Check/set the volume. Do not do this to ear rape people!")
		return await message.channel.send(embed)
	}  
	if(args[0] === "queue"){
		let embed = new Discord.MessageEmbed()
		.setDescription("List the queue")
		.setColor(0x00fff3)
		.addField("Usage:", "`queue")
		.addField("Description:", "See what tunes are in the queue.")
		return await message.channel.send(embed)
	}
	if(args[0]) return message.channel.send("Hm. Check your spelling and try again!")
}
