$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AddNewConatact.feature");
formatter.feature({
  "line": 2,
  "name": "Free CRM Login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "User is able to create a new contact",
  "description": "",
  "id": "free-crm-login-feature;user-is-able-to-create-a-new-contact",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User is already on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User mouse over on Contact Page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User clicks on new Contact Link",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user Enters \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003ccompany\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User clicks on save button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User verify new conatact is created",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Close The Browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "free-crm-login-feature;user-is-able-to-create-a-new-contact;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "company"
      ],
      "line": 16,
      "id": "free-crm-login-feature;user-is-able-to-create-a-new-contact;;1"
    },
    {
      "cells": [
        "David",
        "Cris",
        "Amazon"
      ],
      "line": 17,
      "id": "free-crm-login-feature;user-is-able-to-create-a-new-contact;;2"
    },
    {
      "cells": [
        "ABHAY",
        "Marathi",
        "Home"
      ],
      "line": 18,
      "id": "free-crm-login-feature;user-is-able-to-create-a-new-contact;;3"
    },
    {
      "cells": [
        "Aditya",
        "Patel",
        "Walmart"
      ],
      "line": 19,
      "id": "free-crm-login-feature;user-is-able-to-create-a-new-contact;;4"
    },
    {
      "cells": [
        "Preet",
        "Gunjariya",
        "Linamar"
      ],
      "line": 20,
      "id": "free-crm-login-feature;user-is-able-to-create-a-new-contact;;5"
    },
    {
      "cells": [
        "Abhishek",
        "Vyas",
        "Home"
      ],
      "line": 21,
      "id": "free-crm-login-feature;user-is-able-to-create-a-new-contact;;6"
    },
    {
      "cells": [
        "Keyur",
        "Bhavsar",
        "CGI"
      ],
      "line": 22,
      "id": "free-crm-login-feature;user-is-able-to-create-a-new-contact;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "User is able to create a new contact",
  "description": "",
  "id": "free-crm-login-feature;user-is-able-to-create-a-new-contact;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    },
    {
      "line": 4,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User is already on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User mouse over on Contact Page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User clicks on new Contact Link",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user Enters \"David\" and \"Cris\" and \"Amazon\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User clicks on save button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User verify new conatact is created",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Close The Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDefinition.user_is_already_on_Home_Page()"
});
formatter.result({
  "duration": 6219060500,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinition.user_mouse_over_on_Contact_Page()"
});
formatter.result({
  "duration": 24977700,
  "error_message": "java.lang.AssertionError: expected [] but found [CRMPRO]\r\n\tat org.testng.Assert.fail(Assert.java:99)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:1037)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:140)\r\n\tat org.testng.Assert.assertEquals(Assert.java:122)\r\n\tat org.testng.Assert.assertEquals(Assert.java:629)\r\n\tat org.testng.Assert.assertEquals(Assert.java:639)\r\n\tat stepDefinations.HomePageStepDefinition.user_mouse_over_on_Contact_Page(HomePageStepDefinition.java:42)\r\n\tat ✽.When User mouse over on Contact Page(AddNewConatact.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "HomePageStepDefinition.user_clicks_on_new_Contact_Link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "David",
      "offset": 13
    },
    {
      "val": "Cris",
      "offset": 25
    },
    {
      "val": "Amazon",
      "offset": 36
    }
  ],
  "location": "HomePageStepDefinition.user_Enters_and_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageStepDefinition.user_clicks_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageStepDefinition.user_verify_new_conatact_is_created()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageStepDefinition.close_The_Browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 18,
  "name": "User is able to create a new contact",
  "description": "",
  "id": "free-crm-login-feature;user-is-able-to-create-a-new-contact;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    },
    {
      "line": 4,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User is already on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User mouse over on Contact Page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User clicks on new Contact Link",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user Enters \"ABHAY\" and \"Marathi\" and \"Home\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User clicks on save button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User verify new conatact is created",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Close The Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDefinition.user_is_already_on_Home_Page()"
});
formatter.result({
  "duration": 2026065900,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d109.0.5414.74)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-47V8HSKJ\u0027, ip: \u0027192.168.2.30\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 109.0.5414.74, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\Keyur\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:62812}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: de37933e31b1d0cba0b90c02592df517\n*** Element info: {Using\u003dname, value\u003dusername}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:404)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:284)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepDefinations.HomePageStepDefinition.user_is_already_on_Home_Page(HomePageStepDefinition.java:30)\r\n\tat ✽.Given User is already on Home Page(AddNewConatact.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "HomePageStepDefinition.user_mouse_over_on_Contact_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageStepDefinition.user_clicks_on_new_Contact_Link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ABHAY",
      "offset": 13
    },
    {
      "val": "Marathi",
      "offset": 25
    },
    {
      "val": "Home",
      "offset": 39
    }
  ],
  "location": "HomePageStepDefinition.user_Enters_and_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageStepDefinition.user_clicks_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageStepDefinition.user_verify_new_conatact_is_created()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageStepDefinition.close_The_Browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 19,
  "name": "User is able to create a new contact",
  "description": "",
  "id": "free-crm-login-feature;user-is-able-to-create-a-new-contact;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    },
    {
      "line": 4,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User is already on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User mouse over on Contact Page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User clicks on new Contact Link",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user Enters \"Aditya\" and \"Patel\" and \"Walmart\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User clicks on save button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User verify new conatact is created",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Close The Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDefinition.user_is_already_on_Home_Page()"
});
