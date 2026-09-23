
# How To Use GitHub

### 1. What is GitHub?

- GitHub is a cloud-based platform that lets developers store, share, and manage their software code
- It hosts code, tracks changes using Git and aids collaboration by allowing teams to work on the same project at the same time without compromising each other's work
- GitHub is the second hosting platform MGISS uses, alongside Azure DevOps. In this context, it may be used for pen-source dependencies, interacting with external collaborators or testing repos

### 2. Some Handy Definitions:
- **Clone vs Fork** = Clone creates a local copy of a repository you already have access to (similar to Azure DevOps). Fork creates your own remote copy of someone else's repository on GitHub, which you can then clone locally and contribute back from via a Pull Request.
- **Pull Request (PR)** = A request to merge changes from one branch into another, typically reviewed by a colleague before being accepted. This is the same concept as Azure DevOps' Pull Request, just presented through GitHub's own interface.
- **Merge** = Combining changes from one branch into another once a Pull Request is approved.
- **Merge Conflict** = Occurs when Git cannot automatically combine changes (e.g. two people editing the same line of the same file), requiring manual resolution before the merge can complete.
- **.gitignore** = A file listing files/folders Git should not track (e.g. local settings, secrets, build artefacts) — prevents them from being committed or pushed.

### 3. Setting Up:
- Navigate to **[GitHub](https://github.com/)** and sign in as the JCR Webmaster
- Install Git locally:
  - Download the installer from **[here](https://git-scm.com/downloads)** 
  - Run the installer, accepting the default option (setting Git up in Windows PowerShell)
  - Confirm the installer has worked by running the following command in PowerShell: `git --version`

### 4. Using GitHub:
- Clone the given repository, either via SourceTree or by inputting the following command into PowerShell: `git clone <url>`
- Create a branch, if necessary
- stage, commit and push
- On GitHub, open a pull request 
- Code review/requested changes 
- Merge the pull request to see the changes appear on the live version after a few minutes

### 5. After You've Finished:
- Pull the latest changes to ensure your branch is up to date (i.e. in case anyone else has been working on the same repo)
- Delete any merged branches 
- If you have created a fork that is part of the workflow, ensure you keep it in sync with upstream changes 

### 6. Further Information:

- If you need further assistance, head to **[GitHub's own docs](https://docs.github.com)** for the most updated information
