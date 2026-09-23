
# Cloning a Repository & Making Changes To The Website

Cloning a repository downloads a complete, local copy of a project's codebase and entire version history to your local computer. This allows you to test and write new code safely offline, without altering the original live project.

### 1. Adding The GitHub Repo To SourceTree (or an equivalent valid Git Client)
- Copy the GitHub URL/download a ZIP file on the JCR website GitHub page
- Navigate to the **+** or **clone repository** option on your git client
- Paste the link/navigate to the folder and clone the repository


### 2. Add The Cloned Repository To PyCharm (or other valid IDE)
Within PyCharm, navigate to the burger menu → File → Open → Select the respective file from your local drive (i.e. The folder saved from Sourcetree)

You should now be able to access the newly-cloned repository

### 3. Making Valid Changes To The Clone in Pycharm (Or Other IDE)

Now that you have successfully set up the repository clone in PyCharm, you can begin to edit, stage, commit and push new code/changes to the appropriate branch:

- Make changes within Markdown in PyCharm 
- Navigate to 'unstaged files' in Sourcetree and 'stage selected' files (for example, any changes to text in Markdown will appear as 'README.md')
- Once staged, commit (icon in the top left hand corner) the selected files and include an appropriate comment when prompted 
- Once the selected files have been commited, push to the appropriate branch (i.e. dev)

### 4. Merge Pull Request
- On GitHub, navigate to **[pull requests](https://github.com/christsjcr/website/pulls)** and create a new pull request
- Switch the base branch to 'production' and create the pull request
- Once GitHub has checked to make sure the pull request can be merged, hit **merge pull request**



