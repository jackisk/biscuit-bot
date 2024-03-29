exports.run = (client, message, args) => {
        const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        
         // Ban the member
         // Make sure you run this on a member, not a user!
         // There are big differences between a user and a member
         // Read more about what ban options there are over at
         // https://discord.js.org/#/docs/main/master/class/GuildMember?scrollTo=ban
         
        member
          .ban({
            reason: 'They deserved it, I swear!',
          })
          .then(() => {
            // We let the message author know we were able to ban the person
            message.reply(`you've **banned** ${user.tag}, are you happy?`);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to ban the member,
            // either due to missing permissions or role hierarchy
            message.reply(`I can't even do this though.`);
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.reply("that person isn't even in this server, you can't just remove them from Discord you know.");
      }
    } else {
      // Otherwise, if no user was mentioned
      message.reply("you didn't even tell me who to ban!");
    }
  }