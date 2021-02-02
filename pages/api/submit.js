const token = process.env.SLACK_BOT_TOKEN;
const user = process.env.SLACK_USER;
const Slack = require('slack');
const bot = new Slack({ token });

export default (req, res) => {
  let input = req.body;

  if (!input.name || !input.email || !input.comments) {
    return res.redirect(302, '/');
  }

  let resss = bot.chat.postMessage({
    channel: user,
    text: JSON.stringify(input, null, 2),
    as_user: true,
  });

  console.log(resss);
  console.log(input);

  return res.redirect(302, '/');
}
