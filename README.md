# Jeopardy Board

Jeopardy! The great American quiz show has been a staple of network television since the 60s. In this project we will be creating our own Jeopardy board which we will build the functionality for in later weeks. For now we're going to focus on site design and navigation.

This site will consist of 4 pages: a landing page, a first round page, a second round page, and a final round page.

## Wireframes

At the following link, you will find a Figma containing the four wireframes necessary for this project.

**[Link to Project Wireframes](https://www.figma.com/file/w9CN0fvM7gqYtKiGYXxvXv/jeopardy-wireframes?node-id=0%3A1)**

## Stories

## The Landing Page

**Given** an `index.html` file exists.

**When** the user visits the `index.html` file.

**Then** they should see the landing page.

**And** there should be a centered title at the top of the page.

**And** a centered image that represents your Jeopardy game.

**And** a "Play" button centered below the image.

**And** a footer displaying site information.

## Navigation to First Round

**Given** the user is on the landing page.

**When** they click the "Play" button.

**Then** they should be routed to the first round page.

## First Round

**Given** the user is on the first round page.

**Then** they should see a title, that indicates it's the first round.

**And** they should see a subtitle that indicates whose turn it is.

**And** a 6X6 grid with category names across the top row, and points from 200 - 1000 below each category, doubling in each row.

**And** the grid should be centered on the page.

**And** they should see a box to enter their input, a Guess button, a Pass button.

**And** they should see the scores of Player 1 and Player 2 displayed.

**And** a button to navigate to the next round.

**And** a footer displaying site information.

## Second Round Navigation

**Given** the user is on the first round page.

**When** they click the button to navigate to the second round page.

**Then** they should be taken to the second round page.

## Second Round Page

**Given** the user is on the second round page.

**Then** they should see a title, that indicates it's the second round.

**And** they should see a subtitle that indicates whose turn it is.

**And** a 6X6 grid with category names across the top row, and points from 400 - 2000 below each category, doubling in each row.

**And** the grid should be centered on the page

**And** they should see a box to enter their input, a Guess button, a Pass button.

**And** they should see the scores of Player 1 and Player 2 displayed.

**And** a button to navigate to the next round.

**And** a footer displaying site information.

## Final Jeopardy Navigation

**Given** the user is on the second round page.

**When** they click the button to the next round.

**Then** they should be taken to the Final Round page.

## Final Round

**Given** the user is on the Final Round page.

**Then** they should see a title indicating it's the Final Round.

**And** a single final category with a single final question.

**And** Two forms:

- One with a field for the amount you want to bet.
- One for the final answer, the button for which should be disabled

## Icebox

- Create your own theme for your site.
- Make the site fully mobile responsive.
- The site should have animated elements. Libraries are allowed.
