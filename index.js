const Discord = require('discord.js');
const prefix = '/';
const token = process.env.token
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Bot is ready.')
    client.user.setActivity('Imperial Chicken', { type: 'WATCHING' })
})

client.on('message', message => {
    
    if (message.content.startsWith(`${prefix}commands`)) {
        const ThisEmbed = new Discord.RichEmbed()
            .setTitle(':wave: List of Commands - Smart Chicken :wave:')
            .setDescription('These are some commands that I accept!')
            .addField('`/rsstart <time starting>`', 'Announces a recruitment session that is starting! Make sure to provide the starting time and timezone. \ni.e. /rsstart 18:00 GMT', false)
            .addField('`/dsstart <time starting>`', 'Announces a dining session that is starting! Make sure to provide the starting time and timezone. \ni.e. /dsstart 18:00 GMT', false)
            .addField('`/ctstart <time starting>`', 'Announces a cooking training that is starting! Make sure to provide the starting time and timezone. \ni.e. /ctstart 18:00 GMT', false)
            .addField('`/btstart <time starting>`', 'Announces a basic training that is starting! Make sure to provide the starting time and timezone. \ni.e. /btstart 18:00 GMT', false)
            .addField('`/scrimmagestart <time starting>`', 'Announces a dining scrimmage that is starting! Make sure to provide the starting time and timezone. \ni.e. /scrimmagestart 18:00 GMT', false)
            .addField('`/rsend`', 'Announces the end of a recruitment session.', false)
            .addField('`/dsend`', 'Announces the end of a dining session.', false)
            .addField('`/ctend`', 'Announces the end of a cooking training.', false)
            .addField('`/btend`', 'Announces the end of a basic training.', false)
            .addField('`/scrimmageend`', 'Announces the end of a dining scrimmage.', false)
            .setFooter('Bot created by CanadianJudgement | Judgement#3155 for help')
        message.channel.send('Check your DMs, '+message.author+'!')
        message.react('✅')
        message.author.send(ThisEmbed)
    }

    if(message.content.startsWith(`${prefix}rsstart`)) {
        if(message.member.roles.has('674421724921724940')) {
            var thisArg = message.content.split(' ')
            thisArg.shift()
            var finalArg = thisArg.join(' ')
            const rsStart = new Discord.RichEmbed()
                .setTitle(':alarm_clock: Recruitment Session Starting! :alarm_clock:')
                .setDescription('A recruitment session is starting soon!')
                .addField('Host', message.author, false)
                .addField('Starting At', finalArg, false)
                .setFooter('Bot created by CanadianJudgement | Judgement#3155 for help')
            var eventChannel = client.channels.get('668503492788224030')
            eventChannel.send(rsStart)
            message.channel.send(':white_check_mark: Event start message successfully posted! '+message.author)
        }

        else {
            message.channel.send(':x: Insufficient permissions. If this may be an error, contact Judgement#3155. '+message.author)
        }

    }

    if(message.content.startsWith(`${prefix}dsstart`)) {
        if(message.member.roles.has('674421724921724940')) {
            var thisArg = message.content.split(' ')
            thisArg.shift()
            var finalArg = thisArg.join(' ')
            const dsStart = new Discord.RichEmbed()
                .setTitle(':alarm_clock: Dining Session Starting! :alarm_clock:')
                .setDescription('A dining session is starting soon!')
                .addField('Host', message.author, false)
                .addField('Starting At', finalArg, false)
                .setFooter('Bot created by CanadianJudgement | Judgement#3155 for help')
            var eventChannel = client.channels.get('668503492788224030')
            eventChannel.send(dsStart)
            message.channel.send(':white_check_mark: Event start message successfully posted! '+message.author)
        }

        else {
            message.channel.send(':x: Insufficient permissions. If this may be an error, contact Judgement#3155. '+message.author)
        }
    }

    if(message.content.startsWith(`${prefix}ctstart`)) {
        if(message.member.roles.has('674421724921724940')) {
            var thisArg = message.content.split(' ')
            thisArg.shift()
            var finalArg = thisArg.join(' ')
            const ctStart = new Discord.RichEmbed()
                .setTitle(':alarm_clock: Cooking Training Starting! :alarm_clock:')
                .setDescription('A cooking training is starting soon!')
                .addField('Host', message.author, false)
                .addField('Starting At', finalArg, false)
                .setFooter('Bot created by CanadianJudgement | Judgement#3155 for help')
            var eventChannel = client.channels.get('668503492788224030')
            eventChannel.send(ctStart)
            message.channel.send(':white_check_mark: Event start message successfully posted! '+message.author)
        }

        else {
            message.channel.send(':x: Insufficient permissions. If this may be an error, contact Judgement#3155. '+message.author)
        }
    }

    if(message.content.startsWith(`${prefix}btstart`)) {
        if(message.member.roles.has('674421724921724940')) {
            var thisArg = message.content.split(' ')
            thisArg.shift()
            var finalArg = thisArg.join(' ')
            const btStart = new Discord.RichEmbed()
                .setTitle(':alarm_clock: Basic Training Starting! :alarm_clock:')
                .setDescription('A basic training is starting soon!')
                .addField('Host', message.author, false)
                .addField('Starting At', finalArg, false)
                .setFooter('Bot created by CanadianJudgement | Judgement#3155 for help')
            var eventChannel = client.channels.get('668503492788224030')
            eventChannel.send(btStart)
            message.channel.send(':white_check_mark: Event start message successfully posted! '+message.author)
        }

        else {
            message.channel.send(':x: Insufficient permissions. If this may be an error, contact Judgement#3155. '+message.author)
        }
    }

    if(message.content.startsWith(`${prefix}scrimmagestart`)) {
        if(message.member.roles.has('674421724921724940')) {
            var thisArg = message.content.split(' ')
            thisArg.shift()
            var finalArg = thisArg.join(' ')
            const scrimmageStart = new Discord.RichEmbed()
                .setTitle(':alarm_clock: Dining Scrimmage Starting! :alarm_clock:')
                .setDescription('A dining scrimmage is starting soon!')
                .addField('Host', message.author, false)
                .addField('Starting At', finalArg, false)
                .setFooter('Bot created by CanadianJudgement | Judgement#3155 for help')
            var eventChannel = client.channels.get('668503492788224030')
            eventChannel.send(scrimmageStart)
            message.channel.send(':white_check_mark: Event start message successfully posted! '+message.author)
        }

        else {
            message.channel.send(':x: Insufficient permissions. If this may be an error, contact Judgement#3155. '+message.author)
        }
    }

    if(message.content.startsWith(`${prefix}rsend`)) {
        if(message.member.roles.has('674421724921724940')) {
            const rsEnd = new Discord.RichEmbed()
                .setTitle('Recruitment Session Ended')
                .setDescription('A recruitment session has ended.')
                .addField('Host', message.author, false)
                .setFooter('Bot created by CanadianJudgement | Judgement#3155 for help')
            var eventChannel = client.channels.get('668503492788224030')
            eventChannel.send(rsEnd)
            message.channel.send(':white_check_mark: Event end message successfully posted! '+message.author)
        }

        else {
            message.channel.send(':x: Insufficient permissions. If this may be an error, contact Judgement#3155. '+message.author)
        }
    }
    
    if(message.content.startsWith(`${prefix}dsend`)) {
        if(message.member.roles.has('674421724921724940')) {
            const dsEnd = new Discord.RichEmbed()
                .setTitle('Dining Session Ended')
                .setDescription('A dining session has ended.')
                .addField('Host', message.author, false)
                .setFooter('Bot created by CanadianJudgement | Judgement#3155 for help')
            var eventChannel = client.channels.get('668503492788224030')
            eventChannel.send(dsEnd)
            message.channel.send(':white_check_mark: Event end message successfully posted! '+message.author)
        }

        else {
            message.channel.send(':x: Insufficient permissions. If this may be an error, contact Judgement#3155. '+message.author)
        }
    }

    if(message.content.startsWith(`${prefix}ctend`)) {
        if(message.member.roles.has('674421724921724940')) {
            const ctEnd = new Discord.RichEmbed()
                .setTitle('Cooking Training Ended')
                .setDescription('A cooking training has ended.')
                .addField('Host', message.author, false)
                .setFooter('Bot created by CanadianJudgement | Judgement#3155 for help')
            var eventChannel = client.channels.get('668503492788224030')
            eventChannel.send(ctEnd)
            message.channel.send(':white_check_mark: Event end message successfully posted! '+message.author)
        }

        else {
            message.channel.send(':x: Insufficient permissions. If this may be an error, contact Judgement#3155. '+message.author)
        }
    }

    if(message.content.startsWith(`${prefix}btend`)) {
        if(message.member.roles.has('674421724921724940')) {
            const btEnd = new Discord.RichEmbed()
                .setTitle('Basic Training Ended')
                .setDescription('A basic training has ended.')
                .addField('Host', message.author, false)
                .setFooter('Bot created by CanadianJudgement | Judgement#3155 for help')
            var eventChannel = client.channels.get('668503492788224030')
            eventChannel.send(btEnd)
            message.channel.send(':white_check_mark: Event end message successfully posted! '+message.author)
        }

        else {
            message.channel.send(':x: Insufficient permissions. If this may be an error, contact Judgement#3155. '+message.author)
        }
    }

    if(message.content.startsWith(`${prefix}scrimmageend`)) {
        if(message.member.roles.has('674421724921724940')) {
            const scrimmageEnd = new Discord.RichEmbed()
                .setTitle('Dining Scrimmage Ended')
                .setDescription('A dining scrimmage has ended.')
                .addField('Host', message.author, false)
                .setFooter('Bot created by CanadianJudgement | Judgement#3155 for help')
            var eventChannel = client.channels.get('668503492788224030')
            eventChannel.send(scrimmageEnd)
            message.channel.send(':white_check_mark: Event end message successfully posted! '+message.author)
        }

        else {
            message.channel.send(':x: Insufficient permissions. If this may be an error, contact Judgement#3155. '+message.author)
        }
    }


})

client.login(token)
