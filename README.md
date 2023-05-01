# NotesAI
<h1 align="center">Welcome to NotesAi :wave:</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.0-blue.svg?cacheSeconds=2592000" />
</p>

## About

> NotesAI is the best place to jot down quick thoughts, or to save longer notes from your classes
## Install
```sh
npm install
```
## Run tests
```sh
npm run test
```
## Author
:silhouette: **Lewis Silvia Erhan Vitali**
## Show your support
Give a :star:️ if this project helped you!

## Site directory

| Page | Description|
|------|------------|
| Login/Register | Responsive pages that allow users to login and register |
| Notes | Main site page where users can view all their notes through AI summaries with random questions dynamically rendered based on those notes. |
| Notes/:id | Users can view their note with options to highlight text for definition and quiz themselves on said note. link to update note is also found here. | 
| Note | Users can create a new note at which point an AI summary is generated along with a title if none is provided. If accesed via update button then fields will be
prepopulated.|

## Required software & accounts
- [VSCode](https://code.visualstudio.com/) or any desired IDE
- [Node.js](https://nodejs.org/en)
- [Npm.js](https://www.npmjs.com)

## Installation

1. To get the repository set up on your computer, open your terminal and move into your desired directory using the `cd` command.
2. From the Code button copy the HTTPS/SSH key and run the command `git clone` followed by the key you copied.
3. Run `npm install` to install the necessary dependencies.
5. Create a new instance with Elephant SQL (or another PostgreSQL site) and copy the instance link created.
6. In the root folder create a **.env** file and add the following lines:
- [x] VITE_chatGPT_KEY=<ChatGPT API Key>   

Make sure there are no spaces between the content on each line and ensure you don't add any commas or any other punctuation at the end of each line.

### Libraries

## Usage

### Login/Register page:

When users first go to the site they are greeted with the landing page from which they are directed to either register or login. If the user doesn't have an account to begin with they are able to create an account.

<p align="center">
<img src="https://github.com/Vitali-G/NotesAI---Client/blob/lewis/documentation/Landing.png" width=75% height=75%>
</p>
<br>

Registering redirects to the login page when successful and Login redirects to the notes page.

<p align="center">
<img src="https://github.com/Vitali-G/NotesAI---Client/blob/lewis/documentation/Register.png" width=75% height=75%>
</p>
<br>


## Main page:

The notes page displays all user notes along with questions based on said notes, navigation seen above changes dynamically based on the current page.

<p align="center">
<img src="https://github.com/Vitali-G/NotesAI---Client/blob/lewis/documentation/Notes.png" width=75% height=75%>
</p>
<br>

## Viewing items:

When a user clicks on an note on the main page they are redirected to the individual note page. The notes details are displayed here along with buttons that allow the
user to utilise AI to understand and question themselves on their note.

<p align="center">
<img src="https://github.com/Vitali-G/NotesAI---Client/blob/lewis/documentation/Notes-id.png" width=75% height=75%>
</p>
<br>

<p align="center">
<img src="https://github.com/Vitali-G/NotesAI---Client/blob/lewis/documentation/AI-Highlight.png" width=75% height=75%>
</p>
<br>

<p align="center">
<img src="https://github.com/Vitali-G/NotesAI---Client/blob/lewis/documentation/AI-Questions.png" width=75% height=75%>
</p>
<br>

## Creating a note:

The create note page allows users to create add their own note to the application with at which point the AI generates a summary and title if none is provided. This
page dynamically adds the contents of a note if accesed with the update button the note page.

<p align="center">
<img src="https://github.com/Vitali-G/NotesAI---Client/blob/lewis/documentation/Create.png" width=75% height=75%>
</p>
<br>

<p align="center">
<img src="https://github.com/Vitali-G/NotesAI---Client/blob/lewis/documentation/Update.png" width=75% height=75%>
</p>
<br>
