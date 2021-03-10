import { Message, MessageEmbed } from "discord.js";

export const throwError = (msg: Message, errMessage: string) => {
  msg.channel.send(
    new MessageEmbed()
      .setTitle("Error!")
      .setDescription(errMessage)
      .setColor(0xee4f4f)
  );
};
