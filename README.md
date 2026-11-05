<div align="center" markdown="1">

<a href="https://docs.thinknxg.com/thinknxgraven">
    <img src="raven/public/raven_logo.svg" height="80" alt="thinkNXG Raven logo">
</a>

<h1>thinkNXG Raven</h1>

**A simple chat app for teams**

[![GitHub release](https://img.shields.io/github/v/release/thinknxg/thinkNXG-Raven)](https://github.com/thinknxg/thinkNXG-Raven/releases)
[![CI](https://github.com/thinknxg/thinkNXG-Raven/actions/workflows/ci.yml/badge.svg)](https://github.com/thinknxg/thinkNXG-Raven/actions/workflows/ci.yml)
[![License: AGPL v3](https://img.shields.io/badge/license-AGPLv3-blue)](LICENSE)

[Website](https://thinknxg.com) - [Documentation](https://docs.thinknxg.com/thinknxgraven) - [Issues](https://github.com/thinknxg/thinkNXG-Raven/issues) - [Support](https://thinknxg.com/thinkdesk)

</div>

<picture>
	<source media="(prefers-color-scheme: dark)" srcset=".github/readme/raven-dark.png">
	<img src=".github/readme/raven-light.png" alt="thinkNXG Raven in the browser, showing a channel with shared photos" width="100%">
</picture>

<picture>
	<source media="(prefers-color-scheme: dark)" srcset=".github/readme/threads-documents-dark.png">
	<img src=".github/readme/threads-documents-light.png" alt="A thread beside the channel, and a document from a thinkNXG app shown as a card in the chat" width="100%">
</picture>
<p align="center"><sub>Threads for side discussions &nbsp;&middot;&nbsp; Documents from any thinkNXG app, in the chat</sub></p>

<picture>
	<source media="(prefers-color-scheme: dark)" srcset=".github/readme/files-search-dark.png">
	<img src=".github/readme/files-search-light.png" alt="The files drawer listing every photo shared in a channel, and search results across channels" width="100%">
</picture>
<p align="center"><sub>Every file shared in a channel &nbsp;&middot;&nbsp; Search across channels</sub></p>

## thinkNXG Raven

thinkNXG Raven is an open-source chat app for teams, built on the [thinkNXG Framework](https://docs.thinknxg.com/thinknxgframework). It runs on your own thinkNXG site, so your messages stay in your database and nobody charges you per user.

It lives alongside [thinkNXG ERP](https://docs.thinknxg.com/thinknxgerp), [thinkNXG HR](https://docs.thinknxg.com/thinknxghr), [thinkNXG CRM](https://docs.thinknxg.com/thinknxgcrm) and [thinkDesk](https://docs.thinknxg.com/thinkdesk), and any document from any thinkNXG app can be part of the conversation.

### Key features

- **Channels and direct messages:** Public and private channels for teams, projects and topics, grouped into workspaces. Direct messages for everything else.
- **Threads:** Reply in the channel, or take a side discussion into a thread so it does not drown out everyone else.
- **Rich messages:** Formatting, mentions, code blocks, polls, emoji and custom reactions.
- **Files and previews:** Drop in photos, videos and documents. Links show a preview, and every file is listed per channel.
- **Search:** Find messages, files, links and people across every channel you are in.
- **Notifications:** Push notifications on the web and on your phone, with quiet hours and per-channel settings. Reminders bring a message back later, and scheduled messages go out at a set time.
- **Mobile:** iOS and Android apps, plus an installable web app, all on the same site.

### Works with your thinkNXG apps

- **Share a document:** Paste a link to any document on the site and thinkNXG Raven shows a card with its status and key fields.
- **Document notifications:** Post to a channel when a document is created, changed or submitted. Set the conditions and the message template without writing code.
- **Approve from the chat:** Approve, reject or send back a document without leaving the conversation.
- **Who is on leave:** Leave from thinkNXG HR shows next to a person's name.
- **Bots, webhooks and AI agents:** Bots that post and reply, incoming webhooks that post into channels, and agents backed by your own OpenAI or compatible provider.

### Under the hood

- [thinkNXG Framework](https://github.com/thinknxg/thinkNXG): A full-stack web application framework.
- [Frappe React SDK](https://github.com/frappe/frappe-react-sdk): React hooks for auth, data fetching and realtime with a thinkNXG Framework backend.

### Compatibility

| thinkNXG Raven branch | thinkNXG Framework branch | Notes |
| :----------- | :------------ | :---- |
| main         | version-15 (15.111 or later), version-16 | Stable |
| develop      | version-15 (15.111 or later), version-16, develop | Development |

## Getting started

### thinkNXG Cloud

Install thinkNXG Raven on a site from the [thinkNXG Cloud Marketplace](https://thinknxgcloud.com/marketplace/apps/raven). [thinkNXG Cloud](https://thinknxgcloud.com) takes care of hosting, upgrades, backups and support.

<div>
	<a href="https://thinknxgcloud.com/marketplace/apps/raven" target="_blank">
		<img src="https://img.shields.io/badge/Try%20on-thinkNXG%20Cloud-0089FF" alt="Try on thinkNXG Cloud" height="28" />
	</a>
</div>

### Self hosting

[Pilot](https://github.com/frappe/pilot) is the recommended way to run thinkNXG Raven on your own server. It installs the thinkNXG Framework, manages sites and backups, and sets up production with nginx and TLS. Pilot needs thinkNXG Framework v16 or later. For managed hosting, see the [thinkNXG Cloud documentation](https://docs.thinknxg.com/thinknxgcloud).

Install Pilot:

```bash
curl -fsSL https://raw.githubusercontent.com/frappe/pilot/develop/install.sh | bash
```

Create a bench and run the setup wizard. The first `start` prints the URL of the admin wizard.

```bash
pilot new main
pilot -b main start
```

Then add thinkNXG Raven and create a site:

```bash
pilot -b main get-app https://github.com/thinknxg/thinkNXG-Raven
pilot -b main new-site chat.example.com
pilot -b main install-app chat.example.com raven
```

thinkNXG Raven opens at `https://chat.example.com/raven`. See the Pilot [production guide](https://github.com/frappe/pilot/blob/develop/docs/production.md) for nginx, TLS and process managers.

If you already have a bench, install thinkNXG Raven the usual way:

```bash
bench get-app https://github.com/thinknxg/thinkNXG-Raven
bench --site your-site install-app raven
```

### Mobile apps

The iOS and Android apps connect to any site running thinkNXG Raven 3.1 or later. Enter the site address, sign in, and every channel is there, in sync with the web app.

<div>
	<a href="https://apps.apple.com/app/raven-mobile/id6741682327" target="_blank">
		<img src=".github/readme/app-store-badge.svg" alt="Download on the App Store" height="40" />
	</a>
	&nbsp;
	<a href="https://play.google.com/store/apps/details?id=raven.thecommit.company&hl=en_IN" target="_blank">
		<img src=".github/readme/google-play-badge.png" alt="Get it on Google Play" height="40" />
	</a>
</div>

## Development

Set up a bench with Pilot or [bench](https://docs.thinknxg.com/thinknxgframework/user/en/installation), get the app and create a site as above, then turn on developer mode and skip CSRF checks for the site. The second setting is for local development only, since the Vite dev server has no CSRF token.

```bash
bench set-config -g developer_mode 1
bench --site raven.localhost set-config ignore_csrf 1
```

### Web app

The web app is a React single page app in `apps/web`. To work on it with hot reloading, add a `.env.local` file in `apps/web`:

```
VITE_SITE_NAME='raven.localhost'
VITE_SOCKET_PORT=9000
```

`VITE_SOCKET_PORT` is the socket.io port of your bench, usually the web port plus 1000. Then start the dev server from the app folder:

```bash
cd apps/raven
yarn
yarn dev
```

The app runs at `http://raven.localhost:8080` and proxies API calls to your site. Run `yarn` from the repository root only, not from `apps/web`.

## Contributing

- [Documentation](https://docs.thinknxg.com/thinknxgraven): User and admin guides.
- [thinkNXG Support](https://thinknxg.com/thinkdesk): Help from the thinkNXG team.
- [GitHub Issues](https://github.com/thinknxg/thinkNXG-Raven/issues): Bug reports. Include steps to reproduce, screenshots and any console or server errors.
- [Report security vulnerabilities](https://thinknxg.com/thinkdesk)
- [Translations](https://crowdin.com/project/frappe)

## License

[AGPLv3](LICENSE)

<br>
<br>
<div align="center" style="padding-top: 1rem; padding-bottom: 1rem; display: flex; justify-content:center;">
	<a href="https://thinknxg.com" target="_blank"><strong>thinkNXG</strong></a>
</div>
