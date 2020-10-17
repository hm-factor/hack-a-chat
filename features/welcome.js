module.exports = function(controller) {

  controller.on('welcome_back', async(bot, message) => {
    // do somethign using bot and message like...
    // await bot.reply(message,'You have returned!');
    await bot.reply(message,{
      text: 'Here are some quick replies',
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
        }
      ]
    });
  });

}