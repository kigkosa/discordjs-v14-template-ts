import { SlashCommandBuilder, ChannelType, TextChannel, EmbedBuilder } from "discord.js"
import { getThemeColor } from "../functions";
import { SlashCommand } from "../types";

const command : SlashCommand = {
    command: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Shows the bot's ping")
    ,
    execute: interaction => {
        interaction.reply({
            content:"pong",ephemeral: true
        })
    },
    cooldown: 10
}

export default command