# cHarris_WorkDay_Planner

## PROJECT DESCRIPTION
A simple calendar application that allows a user to save events for each hour of a typical working day

### USER STORY
- **AS AN** employee with a busy schedule
- **I WANT** to add important events to a daily planner
- **SO THAT** I can manage my time effectively

### ACCEPTANCE CRITERIA
GIVEN I am using a daily planner to create a schedule
- **WHEN** I open the planner, **THEN** the current day is displayed at the top of the calendar
- **WHEN** I scroll down, **THEN** I am presented with time blocks for standard business hours of 9am to 5pm
- **WHEN** I view the time blocks for that day, **THEN** each time block is color-coded to indicate whether it is in the past, present, or future
- **WHEN** I click into a time block, **THEN** I can enter an event
- **WHEN** I click the save button for that time block, **THEN** the text for that event is saved in local storage
- **WHEN** I refresh the page, **THEN** the saved events persist

## TECHNOLOGY
- DayJS - https://day.js.org/

## USAGE
- Displays the current date at the top of the screen using DayJS
[OVERVIEW](/Assets/Images/SchedulerOverview.png)

- Uses local storage to set and get items saved by the user
[LOCALSTORAGE](/Assets/Images/LocalStorage.png)

- Sets classes based on time-based validation, using military time
- Changes military time to standard time using switch.

### GITHUB REPO
- [https://github.com/FourStringFunk/charris_code_quiz](https://github.com/FourStringFunk/cHarris_WorkDay_Planner)

### LIVE SITE
- https://fourstringfunk.github.io/cHarris_WorkDay_Planner/

## CREDITS
N/A

## LICENSE
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## BADGES
N/A

## FEATURES
N/A

## HOW TO CONTRIBUTE
**Email:** cHarris505@gmail.com

## TESTS
N/A
