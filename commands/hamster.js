exports.run = (client, message, args) => {

     const ytdl = require('ytdl-core');
		if (message.channel.type === 'dm') return;

		const voiceChannel = message.member.voice.channel;

		if (!voiceChannel) {
			return message.reply('please join a voice channel to use this command!');
		}

		voiceChannel.join().then(connection => {
			const stream = ytdl('https://youtu.be/RrE8dtGESz4', { filter: 'audioonly' });
			const dispatcher = connection.play(stream);
		});
	}