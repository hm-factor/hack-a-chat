module.exports = function(controller) {

  controller.on('welcome_back', async(bot, message) => {
    // do somethign using bot and message like...
    // await bot.reply(message,'You have returned!');
    await bot.reply(message,{
      text: 'Welcome back! What would you like to know about a human being?',
      quick_replies: [
        {
          title: 'Academia',
          payload: 'Academia',
        },
        {
          title: 'Work Experience',
          payload: 'Work Experience',
        },
        {
          title: 'Skills',
          payload: 'Skills'
        },
        {
          title: 'Contact',
          payload: 'Contact'
        }
      ]
    });
  });

}