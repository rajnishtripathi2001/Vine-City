# Vine City The Virtual Nation

Code for official Vine City website

## Getting Started
run `npm install` to install all dependencies
run `npm start` to start the server
run `npm run build` to build the project
run `npm run deploy` to deploy the project to github pages
run `npm run deploy:prod` to deploy the project to production
run `npm run deploy:dev` to deploy the project to development
run `npm run deploy:staging` to deploy the project to staging
run `npm run deploy:local` to deploy the project to local
run `npm run deploy:local:prod` to deploy the project to local production

### Prerequisites

What things you need to install the software and how to install them

``` 
Node.js
```
#### Installing

A step by step series of examples that tell you how to get a development env running

```    
npm install
```
### Running the tests

Explain how to run the automated tests for this system

```  
npm test
```
### And coding style tests

Explain what these tests test and why

``` 
Give an example
```
## Deployment

Add additional notes about how to deploy this on a live system  

## Built With

* [React](https://reactjs.org/) - The web framework used
* [Redux](https://redux.js.org/) - State Management
* [React Router](https://reacttraining.com/react-router/) - Routing
* [React Router Redux]
* [React Router Dom]
* [React Router Redux]

### Dev Dependencies

you can find the full list of dependencies in the package.json file

update the package.json file with the new dependencies

install the new dependencies with `npm install` OR
install the new dependencies with `npm install --save-dev` OR
install the new dependencies with `npm install --save` OR
install the new dependencies with `npm install --save-optional` OR
install the new dependencies with `npm install --save-exact` OR
install the new dependencies with `npm install --no-save` OR
install the new dependencies with `npm install --dry-run` OR
install the new dependencies with `npm install --no-package-lock` OR
install the new dependencies with `npm install --no-shrinkwrap` OR

### Contributing

Please read [CONTRIBUTING.md]
Please read [CODE_OF_CONDUCT.md]
Please read [SECURITY.md]
Please read [SUPPORT.md]
Please read [LICENSE.md]
Please read [CHANGELOG.md]
Please read [CONTRIBUTORS.md]
Please read [AUTHORS.md]
Please read [MAINTAINERS.md]

### Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository]
see the [releases on this repository] documentation for details.
History of the project can be found in the [CHANGELOG.md] file
Just a reminder that the [CHANGELOG.md] file is a log of all notable changes made to a project. The log is ordered chronologically, most recent on top, and breaking changes are noted with the label breaking change. This log is for humans, not machines.
Keep a [CHANGELOG.md] file in the root directory of a project. (or other location if required)
Look the [CHANGELOG.md] file over before you push, and add your changes to the top of the file. (Unreleased section if required)
Write all dates in the [CHANGELOG.md] in the ISO 8601 format YYYY-MM-DD.
List releases and changes in the [CHANGELOG.md] file in reverse chronological order (newest on top).
Write all things in the [CHANGELOG.md] in English.
Reference issues and pull requests liberally in the [CHANGELOG.md], like GitHub does.
Reference any other projects that are part of the release, like the [CHANGELOG.md] does.
Use the present tense ("Add feature" not "Added feature").
Use the imperative mood ("Move cursor to..." not "Moves cursor to...").
Limit the first line to 72 characters or less.
Reference issues and pull requests liberally after the first line.
Consider starting the commit message with an applicable emoji: ⚡
keep the [CHANGELOG.md] file clean and tidy
keep the [CHANGELOG.md] file up to date
Zappr will check the [CHANGELOG.md] file for you
Zero tolerance for typos and spelling errors.
Zero tolerance for grammar mistakes.
Zero tolerance for punctuation errors.
Zero tolerance for formatting errors.
Zero tolerance for capitalization errors.
Zero tolerance for spacing errors.
Zero tolerance for indentation errors.
Zero tolerance for line length errors.
Zero tolerance for trailing whitespace errors.
Zero tolerance for blank line errors.
Zero tolerance for comment errors.
Zero tolerance for console errors.
Zero tolerance for debugger errors.
Zero tolerance for alert errors.
Zero tolerance for prompt errors.
Zero tolerance for confirm errors.
Zero tolerance for todo errors.
Zero tolerance for fixme errors.

commit messages should be in the following format
`<type>(<scope>): <subject>`
`<BLANK LINE>`
`<body>`
`<BLANK LINE>`
`<footer>`
The `<type>` and `<subject>` fields are mandatory.
The `<scope>` field is optional.
Any line of the commit message cannot be longer 100 characters!
This allows the message to be easier to read on GitHub as well as in various git tools.
The `<footer>` field is optional. It is used to reference issue tracker IDs.
valid types are
`feat` - A new feature
`fix` - A bug fix
`docs` - Documentation only changes
`style` - Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
`refactor` - A code change that neither fixes a bug nor adds a feature
`perf` - A code change that improves performance
`test` - Adding missing tests
`chore` - Changes to the build process or auxiliary tools and libraries such as documentation generation
`revert` - Reverts a previous commit
`WIP` - Work in progress

breaking changes should be in the following format
`BREAKING CHANGE: <description>`
A BREAKING CHANGE can be part of commits of any type.
Examples of commits that will trigger major, minor, and patch releases:
`fix: correct minor typos in code`
`feat: allow provided config object to extend other configs`
`feat: close #1234 by migrating to angular 5`
`perf: remove unncessary code from core`
`BREAKING CHANGE: The Change is huge.`
`fix: correct minor typos in code`
`feat: allow provided config object to extend other configs`
`feat: close #1234 by migrating to angular 5`
`perf: remove unncessary code from core`
`BREAKING CHANGE: The Change is huge.`
A text that starts with BREAKING CHANGE: will be used as the release title. A commit contains a breaking change if it introduces a breaking change, or modifies existing code in a way that it introduces a breaking change later.

note: you can use the following commands to generate the changelog
`npm run changelog`
`npm run changelog:minor`
`npm run changelog:major`
`npm run changelog:patch`
`npm run changelog:prerelease`
`npm run changelog:release`

### Branching

Branches are an important part of working with Git. No matter what your workflow, it is important that you understand how branches work, and how to use them effectively.
Branches are pointers to a specific commit. The default branch name in Git is master. As you start making commits, you’re given a master branch that points to the last commit you made. Every time you commit, the master branch pointer moves forward automatically.
Branches are cheap. They are just pointers to a specific commit. Creating a new branch is as quick and simple as writing a 41 byte file to disk. Because of this, branches are also disposable. You can create them, merge them, delete them, and throw them away, all without worrying about losing your code.

master branch
The master branch is the default branch when you create a repository. It’s up to you whether you use this branch or another for development. You can rename your master branch to main if you choose.
The master branch should be used for production code only. This is the branch that is deployed to production. It should not be used for development or testing.
The master branch should be protected. This means that no one can push directly to the master branch. All changes must be made through a pull request. This ensures that all code is reviewed before it is deployed.