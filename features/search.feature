Feature: Search a course
    Scenario: positive buy one
        Given user is on main page
        When user buy ticket on the chosen first film
        Then user sees message 'Вы выбрали билеты:'
    Scenario: positive buy two
        Given user is on main page
        When user buy ticket on the chosen second film
        Then user sees new message 'Приятного просмотра!'
    Scenario: negative buy one
        Given user is on main page
        When user buy again ticket on the  second film but on purchased seat
        Then user sees wrong message 'Унесенные ветром.'