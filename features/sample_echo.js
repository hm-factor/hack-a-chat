/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

module.exports = function(controller) {

    controller.on('message,direct_message', async(bot, message) => {
        await bot.reply(message, `I dont' understand what you mean by ${ message.text }`);
    });

    controller.hears('academia', 'message', async(bot, message) => {
      await bot.reply(message, 'Here you find info about academic history.');
    });

    controller.hears('skills', 'message', async(bot, message) => {
      await bot.reply(message, 'Here you find info about the languages I am proficient in.');
    });

    controller.hears('work experience', 'message', async(bot, message) => {
      await bot.reply(message, 'Here you will find my job history.');
    });

    controller.hears('contact', 'message', async(bot, message) => {
      await bot.reply(message, 'Here you will find how to contact me.')
    });
}
