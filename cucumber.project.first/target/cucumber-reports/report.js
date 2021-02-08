$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("saveFeature.feature");
formatter.feature({
  "line": 2,
  "name": "Запазване на билет за филм от приложението MyMovie",
  "description": "",
  "id": "запазване-на-билет-за-филм-от-приложението-mymovie",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Запазване на билет с дата, час и място на прожекцията и данни за клиента",
  "description": "",
  "id": "запазване-на-билет-за-филм-от-приложението-mymovie;запазване-на-билет-с-дата,-час-и-място-на-прожекцията-и-данни-за-клиента",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Клиентът натиска полето на избрания от него резултат чрез клик.",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Въвежда своите имена в полето в отворилия се екземпляр \"Мария Павлова\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Добавя дата от падащия календар \"01.02.2021\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Добавя час от менюто с часовника \"20:00\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Добавя ред и място в даденото поле \"7,17\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Натиска бутон за запазване",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Показва съобщение \"Успешна резервация с цялата информация\".",
  "keyword": "Then "
});
formatter.match({
  "location": "saveSteps.selectResult()"
});
formatter.result({
  "duration": 138496000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Мария Павлова",
      "offset": 56
    }
  ],
  "location": "saveSteps.addPersonalNames(String)"
});
formatter.result({
  "duration": 1182800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "01.02.2021",
      "offset": 33
    }
  ],
  "location": "saveSteps.selectDate(String)"
});
formatter.result({
  "duration": 31900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20:00",
      "offset": 34
    }
  ],
  "location": "saveSteps.selectTime(String)"
});
formatter.result({
  "duration": 34000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7,17",
      "offset": 36
    }
  ],
  "location": "saveSteps.addRowAndSeat(String)"
});
formatter.result({
  "duration": 27500,
  "status": "passed"
});
formatter.match({
  "location": "saveSteps.addRowAndSeat()"
});
formatter.result({
  "duration": 1493500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Успешна резервация с цялата информация",
      "offset": 19
    }
  ],
  "location": "saveSteps.checkSaveMessage(String)"
});
formatter.result({
  "duration": 1098300,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Запазване на билет с некоректна име",
  "description": "",
  "id": "запазване-на-билет-за-филм-от-приложението-mymovie;запазване-на-билет-с-некоректна-име",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "Клиентът натиска полето на избрания от него резултат чрез клик.",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "Въвежда своите имена в полето в отворилия се екземпляр \"@\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Добавя дата от падащия календар \"01.02.2021\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Добавя час от менюто с часовника \"20:00\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Добавя ред и място в даденото поле \"7,17\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Натиска бутон за запазване",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Показва съобщение \"неуспешна резервация поради грешно име\".",
  "keyword": "Then "
});
formatter.match({
  "location": "saveSteps.selectResult()"
});
formatter.result({
  "duration": 39100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "@",
      "offset": 56
    }
  ],
  "location": "saveSteps.addPersonalNames(String)"
});
formatter.result({
  "duration": 62300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "01.02.2021",
      "offset": 33
    }
  ],
  "location": "saveSteps.selectDate(String)"
});
formatter.result({
  "duration": 30600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20:00",
      "offset": 34
    }
  ],
  "location": "saveSteps.selectTime(String)"
});
formatter.result({
  "duration": 22300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7,17",
      "offset": 36
    }
  ],
  "location": "saveSteps.addRowAndSeat(String)"
});
formatter.result({
  "duration": 23000,
  "status": "passed"
});
formatter.match({
  "location": "saveSteps.addRowAndSeat()"
});
formatter.result({
  "duration": 343500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "неуспешна резервация поради грешно име",
      "offset": 19
    }
  ],
  "location": "saveSteps.checkSaveMessage(String)"
});
formatter.result({
  "duration": 31000,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Запазване на билет с некоректна дата",
  "description": "",
  "id": "запазване-на-билет-за-филм-от-приложението-mymovie;запазване-на-билет-с-некоректна-дата",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "Клиентът натиска полето на избрания от него резултат чрез клик.",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "Въвежда своите имена в полето в отворилия се екземпляр \"Мария Павлова\"",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Добавя дата от падащия календар \"31.02.2021\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Добавя час от менюто с часовника \"20:00\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Добавя ред и място в даденото поле \"7,17\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Натиска бутон за запазване",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Показва съобщение \"неуспешна резервация поради грешна дата\".",
  "keyword": "Then "
});
formatter.match({
  "location": "saveSteps.selectResult()"
});
formatter.result({
  "duration": 40000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Мария Павлова",
      "offset": 56
    }
  ],
  "location": "saveSteps.addPersonalNames(String)"
});
formatter.result({
  "duration": 34700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "31.02.2021",
      "offset": 33
    }
  ],
  "location": "saveSteps.selectDate(String)"
});
formatter.result({
  "duration": 28100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20:00",
      "offset": 34
    }
  ],
  "location": "saveSteps.selectTime(String)"
});
formatter.result({
  "duration": 22600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7,17",
      "offset": 36
    }
  ],
  "location": "saveSteps.addRowAndSeat(String)"
});
formatter.result({
  "duration": 22700,
  "status": "passed"
});
formatter.match({
  "location": "saveSteps.addRowAndSeat()"
});
formatter.result({
  "duration": 498800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "неуспешна резервация поради грешна дата",
      "offset": 19
    }
  ],
  "location": "saveSteps.checkSaveMessage(String)"
});
formatter.result({
  "duration": 28200,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Запазване на билет с некоректен час",
  "description": "",
  "id": "запазване-на-билет-за-филм-от-приложението-mymovie;запазване-на-билет-с-некоректен-час",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 33,
  "name": "Клиентът натиска полето на избрания от него резултат чрез клик.",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "Въвежда своите имена в полето в отворилия се екземпляр \"Мария Павлова\"",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "Добавя дата от падащия календар \"01.02.2021\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Добавя час от менюто с часовника \"25:61\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Добавя ред и място в даденото поле \"7,17\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Натиска бутон за запазване",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Показва съобщение \"неуспешна резервация поради грешен час\".",
  "keyword": "Then "
});
formatter.match({
  "location": "saveSteps.selectResult()"
});
formatter.result({
  "duration": 38100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Мария Павлова",
      "offset": 56
    }
  ],
  "location": "saveSteps.addPersonalNames(String)"
});
formatter.result({
  "duration": 46000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "01.02.2021",
      "offset": 33
    }
  ],
  "location": "saveSteps.selectDate(String)"
});
formatter.result({
  "duration": 46000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25:61",
      "offset": 34
    }
  ],
  "location": "saveSteps.selectTime(String)"
});
formatter.result({
  "duration": 28700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7,17",
      "offset": 36
    }
  ],
  "location": "saveSteps.addRowAndSeat(String)"
});
formatter.result({
  "duration": 24300,
  "status": "passed"
});
formatter.match({
  "location": "saveSteps.addRowAndSeat()"
});
formatter.result({
  "duration": 36400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "неуспешна резервация поради грешен час",
      "offset": 19
    }
  ],
  "location": "saveSteps.checkSaveMessage(String)"
});
formatter.result({
  "duration": 35500,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Запазване на билет с некоректно място",
  "description": "",
  "id": "запазване-на-билет-за-филм-от-приложението-mymovie;запазване-на-билет-с-некоректно-място",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 42,
  "name": "Клиентът натиска полето на избрания от него резултат чрез клик.",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "Въвежда своите имена в полето в отворилия се екземпляр \"Мария Павлова\"",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "Добавя дата от падащия календар \"01.02.2021\"",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Добавя час от менюто с часовника \"20:00\"",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Добавя ред и място в даденото поле \"1001,1005\"",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Натиска бутон за запазване",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "Показва съобщение \"неуспешна резервация поради грешно място\".",
  "keyword": "Then "
});
formatter.match({
  "location": "saveSteps.selectResult()"
});
formatter.result({
  "duration": 51800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Мария Павлова",
      "offset": 56
    }
  ],
  "location": "saveSteps.addPersonalNames(String)"
});
formatter.result({
  "duration": 40000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "01.02.2021",
      "offset": 33
    }
  ],
  "location": "saveSteps.selectDate(String)"
});
formatter.result({
  "duration": 49300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20:00",
      "offset": 34
    }
  ],
  "location": "saveSteps.selectTime(String)"
});
formatter.result({
  "duration": 66900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1001,1005",
      "offset": 36
    }
  ],
  "location": "saveSteps.addRowAndSeat(String)"
});
formatter.result({
  "duration": 32000,
  "status": "passed"
});
formatter.match({
  "location": "saveSteps.addRowAndSeat()"
});
formatter.result({
  "duration": 365200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "неуспешна резервация поради грешно място",
      "offset": 19
    }
  ],
  "location": "saveSteps.checkSaveMessage(String)"
});
formatter.result({
  "duration": 66900,
  "status": "passed"
});
formatter.uri("searchFeature.feature");
formatter.feature({
  "line": 1,
  "name": "Търсене на кинопрожекция от приложението MyMovie",
  "description": "",
  "id": "търсене-на-кинопрожекция-от-приложението-mymovie",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Използване на инструмента търсачка за откриване на дадена прожекция в различни киносалони",
  "description": "",
  "id": "търсене-на-кинопрожекция-от-приложението-mymovie;използване-на-инструмента-търсачка-за-откриване-на-дадена-прожекция-в-различни-киносалони",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Клиентът стартира бутона за търсене.",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Въвежда името на филма, който иска да намери в полето за търсене \"Harry Potter\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Натиска лупичката на бутона за търсене с въведената информация.",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Вижда съобщение \"MovieResultsAreFine\".",
  "keyword": "Then "
});
formatter.match({
  "location": "searchSteps.clickSearchButton()"
});
formatter.result({
  "duration": 103100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter",
      "offset": 66
    }
  ],
  "location": "searchSteps.addMovieTitle(String)"
});
formatter.result({
  "duration": 76300,
  "status": "passed"
});
formatter.match({
  "location": "searchSteps.clickMagnifyingGlassButton()"
});
formatter.result({
  "duration": 470200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MovieResultsAreFine",
      "offset": 17
    }
  ],
  "location": "searchSteps.displayResults(String)"
});
formatter.result({
  "duration": 50200,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Търсене на филм с неналични прожекции",
  "description": "",
  "id": "търсене-на-кинопрожекция-от-приложението-mymovie;търсене-на-филм-с-неналични-прожекции",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "Клиентът стартира бутона за търсене.",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Въвежда името на филма, който иска да намери в полето за търсене \"Star Wars\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Натиска лупичката на бутона за търсене с въведената информация.",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Вижда съобщение \"Неналични прожекции\".",
  "keyword": "Then "
});
formatter.match({
  "location": "searchSteps.clickSearchButton()"
});
formatter.result({
  "duration": 28800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Star Wars",
      "offset": 66
    }
  ],
  "location": "searchSteps.addMovieTitle(String)"
});
formatter.result({
  "duration": 47000,
  "status": "passed"
});
formatter.match({
  "location": "searchSteps.clickMagnifyingGlassButton()"
});
formatter.result({
  "duration": 28100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Неналични прожекции",
      "offset": 17
    }
  ],
  "location": "searchSteps.displayResults(String)"
});
formatter.result({
  "duration": 38600,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Търсене на филм с липса на въведени данни",
  "description": "",
  "id": "търсене-на-кинопрожекция-от-приложението-mymovie;търсене-на-филм-с-липса-на-въведени-данни",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "Клиентът стартира бутона за търсене.",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "Натиска лупичката на бутона за търсене без въведената информация.",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Вижда съобщение \"Въведете името на филма\".",
  "keyword": "Then "
});
formatter.match({
  "location": "searchSteps.clickSearchButton()"
});
formatter.result({
  "duration": 24200,
  "status": "passed"
});
formatter.match({
  "location": "searchSteps.clickSearchButtonWithoutInput()"
});
formatter.result({
  "duration": 21900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Въведете името на филма",
      "offset": 17
    }
  ],
  "location": "searchSteps.displayResults(String)"
});
formatter.result({
  "duration": 40200,
  "status": "passed"
});
});