/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

module.exports = function(controller) {

    controller.hears('sample','message,direct_message', async(bot, message) => {
        await bot.reply(message, 'I heard a sample message.');
    });

    controller.on('message,direct_message', async(bot, message) => {
        await bot.reply(message, `Echo: ${ message.text }`);
    });

    controller.hears('academia', 'message', async(bot, message) => {
      await bot.reply(message, 'shits dumb');
    });

    controller.hears('skills', 'message', async(bot, message) => {
      await bot.reply(message, 'many languages and frameworks that you look for in your servants');
    });

    controller.hears('work experience', 'message', async(bot, message) => {
      await bot.reply(message, 'tutoring i guess');
    });

}
