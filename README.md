Prerequisites
1. Install Node.js (includes node, npm, npx), any version 20+ https://nodejs.org

To start the app
1. `npm ci` (`npm install` if packages are being modified)
2. `npm run dev`

Application on http://localhost:5173/

Naming conventions for syncing with Jira:

 * **Branch names**: use the format feature/SCRUM-[Number]-description or bugfix/SCRUM-[Number]-description.
    * Example: `feature/SCRUM-40-GitHub-and-Jira-Sync`
* **Commit messages**: Include the Jira issue key at the start of the commit message.
    * Example: `SCRUM-40: Added issue syncing for GitHub and Jira`
* **Pull request titles** Include the Jira issue key at the start of the title.
    * Example: `SCRUM-40: Create syncing for jira`

