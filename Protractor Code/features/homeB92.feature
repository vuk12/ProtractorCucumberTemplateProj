
Feature: First tests

Scenario: Just click on one tab in 
Given Navigate to b92 site
When Click on tab
Then Sport is displayed


#To implement
Scenario Outline: eating
  Given there are <start> cucumbers
  When I eat <eat> cucumbers
  Then I should have <left> cucumbers

  Examples:
    | start | eat | left |
    |    12 |   5 |    7 |
    |    20 |   5 |   15 |