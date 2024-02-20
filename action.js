const core = require('@actions/core');
const github = require('@actions/github');

const botToken = core.getInput('bot_token');
const userId = core.getInput('user_id');

if (!botToken) {
  return core.setFailed('BOT_TOKEN is not defined!');
}

if (!userId) {
  return core.setFailed('USER_ID is not defined!');
}

const subject = github.context.payload.pull_request ?? github.context.payload.issue;

const type = github.context.payload.pull_request ? 'pull request' : 'issue';
const text = `🙋‍♂️ A new <b>${type}</b> by <b>${subject.user.login}</b>:\n<a href="${subject.html_url}">${subject.title}</a>`;

const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    text: text,
    chat_id: userId,
    parse_mode: 'html'
  })
});

if (!response.ok) {
  const jsonResponse = await response.json();
  core.setFailed(jsonResponse);
}
