import { Message, MessageEmbed } from "discord.js";

export const throwSuccess = (msg: Message, successMessage: string) => {
  msg.channel.send(
    new MessageEmbed()
      .setTitle("Success!")
      .setDescription(successMessage)
      .setColor(0x4fee54)
  );
};
