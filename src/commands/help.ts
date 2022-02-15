import { CommandInt } from "../interfaces/CommandInt";
import { CommandList } from "./_CommandList";
import { MessageEmbed } from "discord.js";

const help: CommandInt = {
  name: "help",
  description: "Returns information on the bot's available commands.",
  run: async (message) => { 

    const helpEmbed = new MessageEmbed();
    helpEmbed.setTitle("Available commands");
    helpEmbed.setDescription("These are the available commands for this bot.");

    helpEmbed.addField(
      "Commands:",
      CommandList.map((el) => `\`!${el.name}\`: ${el.description}`).join("\n")
    );
   
    await message.channel.send({embeds: [helpEmbed]});
  }
}

export default help;