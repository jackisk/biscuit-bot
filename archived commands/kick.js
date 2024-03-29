exports.run = (client, message, args) => {
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        
         // Kick the member
         // Make sure you run this on a member, not a user!
         // There are big differences between a user and a member
         
        member
          .kick('They poop.')
          .then(() => {
            // We let the message author know we were able to kick the person
            message.reply(`you've **kicked** ${user.tag}, are you happy?`);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to kick the member,
            // either due to missing permissions or role hierarchy
            message.reply(`I can't even do this though.`);
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.reply("that person isn't even in this server, you can't just remove them from Discord you know.");
      }
      // Otherwise, if no user was mentioned
    } else {
      message.reply("come on, you didn't mention the user to kick!");
    }
  };