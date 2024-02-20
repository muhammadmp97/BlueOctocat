# GithubTelegramNotifier
Do you want to receive Telegram notifications, when your repository gets new issues/PRs?

## How to use
1. Create a Telegram bot using [@BotFather](https://core.telegram.org/bots/features#botfather).
2. Open your bot and click on the start button; bots cannot send messages unless your start a conversation with them.
3. Add the required [secrets](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#creating-secrets-for-a-repository) to your repository: BOT_TOKEN and USER_ID. The second one is the receiver's id and you can get yours by using the [@get_id_bot](https://telegram.me/get_id_bot) bot.
4. You may make an issue to test the action.
