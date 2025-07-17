# Fullstack Open Exercises Solutions - Part1

## 1.6: unicafe step 1

Like most companies, the student restaurant of the University of Helsinki Unicafe collects feedback from its customers. Your task is to implement a web application for collecting customer feedback. There are only three options for feedback: good, neutral, and bad.

The application must display the total number of collected feedback for each category. Your final application could look like this:
![unicafe-img-step1](https://fullstackopen.com/static/d4fe767d6d8eb46f1dd21334f5f9e46e/5a190/13e.png)

## 1.7: unicafe step 2

Expand your application so that it shows more statistics about the gathered feedback: the total number of collected feedback, the average score (the feedback values are: good 1, neutral 0, bad -1) and the percentage of positive feedback.

![unicafe-img-step2](https://fullstackopen.com/static/0a5d15ae9f055a15cb469b9c9223df41/5a190/14e.png)

## 1.8: unicafe step 3

Refactor your application so that displaying the statistics is extracted into its own Statistics component. The state of the application should remain in the App root component.

## 1.9: unicafe step 4

Change your application to display statistics only once feedback has been gathered.

![unicafe-img-step4](https://fullstackopen.com/static/b453d7533ae85dcaf3eccf342a353c58/5a190/15e.png)

## 1.10: unicafe step 5

Let's continue refactoring the application. Extract the following two components:

- Button handles the functionality of each feedback submission button.
- StatisticLine for displaying a single statistic, e.g. the average score.

## 1.11: unicafe step 6

Display the statistics in an HTML table, so that your application looks roughly like this:

![unicafe-img-step6](https://fullstackopen.com/static/a74acccc17aafb02b3801ffa1fcc0fdc/5a190/16e.png)

## 1.12: anecdotes step 1

The world of software engineering is filled with anecdotes that distill timeless truths from our field into short one-liners.

Expand the following application by adding a button that can be clicked to display a random anecdote from the field of software engineering

Your finished application could look something like this:
![anecdotes-img-step1](https://fullstackopen.com/static/8577fa00fc4d946e2322de9b2707c89c/5a190/18a.png)

## 1.13: anecdotes step 2

Expand your application so that you can vote for the displayed anecdote.
![anecdotes-img-step2](https://fullstackopen.com/static/06f95cb43a18bd6429174200a8d17cff/5a190/19a.png)

## 1.14: anecdotes step 3

Now implement the final version of the application that displays the anecdote with the largest number of votes:
![anecdotes-img-step3](https://fullstackopen.com/static/3e8638efbbbbcabac7bb79466ab3a5f6/5a190/20a.png)

If multiple anecdotes are tied for first place it is sufficient to just show one of them.
