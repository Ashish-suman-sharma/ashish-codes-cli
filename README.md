# 📦 ashish-codes CLI

A command-line tool to view Ashish Suman's developer portfolio directly in your terminal.

## Installation & Usage

You can run this tool without installing it using npx:

```bash
npx ashish-codes
```

To view the full resume PDF:

```bash
npx ashish-codes resume
```

## Features

- Displays personal information beautifully formatted in the terminal
- Shows ASCII art name using figlet
- Lists education, tech stack, and career goals
- Provides links to GitHub, LinkedIn, portfolio, and LeetCode
- Highlights key projects with repository links
- Option to open full resume PDF directly from the terminal

## Technologies Used

- Node.js
- ES Modules
- npm packages:
  - chalk (terminal coloring)
  - boxen (terminal boxes)
  - figlet (ASCII art text)
  - open (opening files)

## Development

To modify this CLI for your own use:

1. Clone the repository
2. Install dependencies: `npm install`
3. Modify `index.js` with your own information
4. Test locally: `node index.js`

## Publish From GitHub

This repo supports publishing to npm through GitHub Actions (no local terminal publish needed).

1. Create an npm granular token with publish permission and 2FA bypass for publish.
2. In GitHub repo settings, add a secret named `NPM_TOKEN`.
3. Open Actions, run `Publish to npm`, and enter the version (example: `1.0.3`).

You can also publish by creating a GitHub Release with a tag like `v1.0.3`.

## License

MIT License

## Author

Ashish Suman

- GitHub: https://github.com/Ashish-suman-sharma
- LinkedIn: [https://linkedin.com/in/ashishsuman0](https://www.linkedin.com/in/ashishsuman-se/)
- Portfolio: https://ashish-suman-sharma-github-io.vercel.app/
