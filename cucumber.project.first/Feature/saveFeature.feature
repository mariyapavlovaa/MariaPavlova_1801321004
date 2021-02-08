
Feature: Запазване на билет за филм от приложението MyMovie

    Scenario: Запазване на билет с дата, час и място на прожекцията и данни за клиента
    Given Клиентът натиска полето на избрания от него резултат чрез клик.
    When Въвежда своите имена в полето в отворилия се екземпляр "Мария Павлова"
    And Добавя дата от падащия календар "01.02.2021"
    And Добавя час от менюто с часовника "20:00"
    And Добавя ред и място в даденото поле "7,17"
    And Натиска бутон за запазване
    Then Показва съобщение "Успешна резервация с цялата информация". 
    
 
    Scenario: Запазване на билет с некоректна име
    Given Клиентът натиска полето на избрания от него резултат чрез клик.
    When Въвежда своите имена в полето в отворилия се екземпляр "@"
    And Добавя дата от падащия календар "01.02.2021"
    And Добавя час от менюто с часовника "20:00"
    And Добавя ред и място в даденото поле "7,17"
    And Натиска бутон за запазване
    Then Показва съобщение "неуспешна резервация поради грешно име".
    
    Scenario: Запазване на билет с некоректна дата
    Given Клиентът натиска полето на избрания от него резултат чрез клик.
    When Въвежда своите имена в полето в отворилия се екземпляр "Мария Павлова"
    And Добавя дата от падащия календар "31.02.2021"
    And Добавя час от менюто с часовника "20:00"
    And Добавя ред и място в даденото поле "7,17"
    And Натиска бутон за запазване
    Then Показва съобщение "неуспешна резервация поради грешна дата". 
    
    Scenario: Запазване на билет с некоректен час
    Given Клиентът натиска полето на избрания от него резултат чрез клик.
    When Въвежда своите имена в полето в отворилия се екземпляр "Мария Павлова"
    And Добавя дата от падащия календар "01.02.2021"
    And Добавя час от менюто с часовника "25:61"
    And Добавя ред и място в даденото поле "7,17"
    And Натиска бутон за запазване
    Then Показва съобщение "неуспешна резервация поради грешен час". 
    
     Scenario: Запазване на билет с некоректно място
    Given Клиентът натиска полето на избрания от него резултат чрез клик.
    When Въвежда своите имена в полето в отворилия се екземпляр "Мария Павлова"
    And Добавя дата от падащия календар "01.02.2021"
    And Добавя час от менюто с часовника "20:00"
    And Добавя ред и място в даденото поле "1001,1005"
    And Натиска бутон за запазване
    Then Показва съобщение "неуспешна резервация поради грешно място". 