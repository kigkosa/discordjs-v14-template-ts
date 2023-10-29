const { ActivityType } = require("discord.js");
import { Client} from "discord.js";
import { color } from "../functions";
module.exports = (client: Client) => {
    client.on("ready", (client) => {    
        client.user.setStatus("online");
        client.user.setActivity( "Sponser by Rezicx",{type: ActivityType.Playing});
        console.log(color("text",`🗽 Status has been ${color("variable", "set.")}`));
      });
}