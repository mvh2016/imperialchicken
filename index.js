const Discord = require('discord.js');
const prefix = '/';
const token = process.env.token
const client = new Discord.Client();
const rbx = require('noblox.js')
const snekfetch = require('snekfetch');
const moment = require('moment');

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
            eventChannel.send('<@&668250263651352585>')
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
            eventChannel.send('<@&668250263651352585>')
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
            eventChannel.send('<@&668250263651352585>')
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
            eventChannel.send('<@&668250263651352585>')
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
            eventChannel.send('<@&668250263651352585>')
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
            eventChannel.send('<@&668250263651352585>')
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
            eventChannel.send('<@&668250263651352585>')
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
            eventChannel.send('<@&668250263651352585>')
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

    if (message.channel.id === '668251652821876749') {
        var splitArgs = message.content.split('\n')
        if (splitArgs.length === 2) {
            var getLink = splitArgs[1].split('/')
            console.log(getLink)
            if (getLink.length === 6) {
                var profileID = getLink[4]
                console.log(profileID)
                var user1 = splitArgs[0].split(': ')
                if (user1.length === 2) {
                    console.log(splitArgs)
                    var username1 = splitArgs[0].split(': ')
                    var username = username1[1]
                    console.log(username)
                    rbx.getUsernameFromId(profileID).then(user => {
                        if (user.toString().toLowerCase() === username.toString().toLowerCase()) {
                            rbx.getRankInGroup(5524823, profileID).then(rank => {
                                if (rank != 0) {
                                    rbx.getRankInGroup(872876, profileID).then(async foundRank => {
                                        if (foundRank != 0) {
                                            rbx.getPlayerInfo(profileID).then(info => {
                                                var dateOfJoin = info.joinDate
                                                var dateOfJoinDate = dateOfJoin.getTime();
                                                console.log(dateOfJoinDate)
                                                moment.utc(dateOfJoin).format();
                                                var sixtyAgo = moment().subtract(60, 'days').toDate().getTime();
                                                console.log(sixtyAgo)
                                                if (dateOfJoinDate < sixtyAgo) {
                                                    message.react('✅')
                                                    const accepted = new Discord.RichEmbed()
                                                        .setTitle('Verification Accepted - Imperial Chicken')
                                                        .setDescription('You have been granted access to the IC Discord server. Welcome. \n**Ave The Chicken!**')
                                                    message.author.send(accepted)
                                                    if (message.member.roles.has('668259428260380673')) {
                                                        ;
                                                    } else {
                                                        message.author.addRole('668259428260380673')
                                                    }
                                                } else {
                                                    message.react('❌')
                                                    const denied7 = new Discord.RichEmbed()
                                                    .setTitle('Verification Request Denied')
                                                    .setDescription(`Your account is less than sixty days old! \nYou may reattempt verification after that time has passed. \nThis is to prevent alternate accounts.`)
                                                    message.author.send(denied7)   
                                                }
                                            })
                                        } else {
                                            message.react('❌')
                                            const denied6 = new Discord.RichEmbed()
                                            .setTitle('Verification Request Denied')
                                            .setDescription(`You are not in the IRF group! You must join it to enter!`)
                                            message.author.send(denied6)   
                                        }
                                    })
                                } else {
                                    message.react('❌')
                                    const denied5 = new Discord.RichEmbed()
                                    .setTitle('Verification Request Denied')
                                    .setDescription(`You are not in the Imperial Chicken group! Join now! \nhttps://www.roblox.com/groups/5524823/Imperial-Chicken#!/about`)
                                    message.author.send(denied5)   
                                }
                            })
                        } else {
                            message.react('❌')
                            const denied4 = new Discord.RichEmbed()
                            .setTitle('Verification Request Denied')
                            .setDescription(`The username you declared, ${username}, is not the one on your profile link provided (${user}). Make sure your profile link is correct.`)
                            message.author.send(denied4)   
                        }
                    })
                } else {
                    message.react('❌')
                    const denied3 = new Discord.RichEmbed()
                    .setTitle('Verification Request Denied')
                    .setDescription('You have failed to use proper format. In particular, your username is not correct. Make sure you have a space in between Username: and your username.')
                    message.author.send(denied3)  
                }
            } else {
                message.react('❌')
                const denied2 = new Discord.RichEmbed()
                .setTitle('Verification Request Denied')
                .setDescription('You have failed to use proper format. In particular, your profile link is not correct. Make sure you copy the entire URL as your link.')
                message.author.send(denied2)
            }
        } else {
            message.react('❌')
            const denied = new Discord.RichEmbed()
                .setTitle('Verification Request Denied')
                .setDescription('You have failed to use proper format. Remember, the format is: \nUsername: <your username>\nProfile Link: <your profile link>')
            message.author.send(denied)
        }
    }
})

client.login(token)
