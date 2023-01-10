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
  "duration": 9686838600,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinition.user_mouse_over_on_Contact_Page()"
});
formatter.result({
  "duration": 6308000,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinition.user_clicks_on_new_Contact_Link()"
});
formatter.result({
  "duration": 3770665500,
  "status": "passed"
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
  "duration": 151617000,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinition.user_clicks_on_save_button()"
});
formatter.result({
  "duration": 2300879900,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinition.user_verify_new_conatact_is_created()"
});
formatter.result({
  "duration": 2302430300,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinition.close_The_Browser()"
});
formatter.result({
  "duration": 629974800,
  "status": "passed"
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
  "duration": 7421299900,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinition.user_mouse_over_on_Contact_Page()"
});
formatter.result({
  "duration": 4740100,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinition.user_clicks_on_new_Contact_Link()"
});
formatter.result({
  "duration": 2873814400,
  "status": "passed"
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
  "duration": 133677400,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinition.user_clicks_on_save_button()"
});
formatter.result({
  "duration": 4373215400,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinition.user_verify_new_conatact_is_created()"
});
formatter.result({
  "duration": 5323433900,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinition.close_The_Browser()"
});
formatter.result({
  "duration": 625817400,
  "status": "passed"
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
formatter.result({
  "duration": 7734333100,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinition.user_mouse_over_on_Contact_Page()"
});
formatter.result({
  "duration": 4862200,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinition.user_clicks_on_new_Contact_Link()"
});
formatter.result({
  "duration": 3268031300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Aditya",
      "offset": 13
    },
    {
      "val": "Patel",
      "offset": 26
    },
    {
      "val": "Walmart",
      "offset": 38
    }
  ],
  "location": "HomePageStepDefinition.user_Enters_and_and(String,String,String)"
});
formatter.result({
  "duration": 136190400,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinition.user_clicks_on_save_button()"
});
formatter.result({
  "duration": 2933111500,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinition.user_verify_new_conatact_is_created()"
});
formatter.result({
  "duration": 2174881300,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinition.close_The_Browser()"
});
formatter.result({
  "duration": 630781200,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "User is able to create a new contact",
  "description": "",
  "id": "free-crm-login-feature;user-is-able-to-create-a-new-contact;;5",
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
  "name": "user Enters \"Preet\" and \"Gunjariya\" and \"Linamar\"",
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
  "duration": 8047196100,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinition.user_mouse_over_on_Contact_Page()"
});
formatter.result({
  "duration": 3783800,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinition.user_clicks_on_new_Contact_Link()"
});
formatter.result({
  "duration": 3167489300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Preet",
      "offset": 13
    },
    {
      "val": "Gunjariya",
      "offset": 25
    },
    {
      "val": "Linamar",
      "offset": 41
    }
  ],
  "location": "HomePageStepDefinition.user_Enters_and_and(String,String,String)"
});
formatter.result({
  "duration": 141788100,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinition.user_clicks_on_save_button()"
});
formatter.result({
  "duration": 2107746800,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinition.user_verify_new_conatact_is_created()"
});
formatter.result({
  "duration": 2716084500,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinition.close_The_Browser()"
});
formatter.result({
  "duration": 624798600,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User is able to create a new contact",
  "description": "",
  "id": "free-crm-login-feature;user-is-able-to-create-a-new-contact;;6",
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
  "name": "user Enters \"Abhishek\" and \"Vyas\" and \"Home\"",
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
  "duration": 8843495800,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinition.user_mouse_over_on_Contact_Page()"
});
formatter.result({
  "duration": 4208000,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinition.user_clicks_on_new_Contact_Link()"
});
formatter.result({
  "duration": 3728521100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Abhishek",
      "offset": 13
    },
    {
      "val": "Vyas",
      "offset": 28
    },
    {
      "val": "Home",
      "offset": 39
    }
  ],
  "location": "HomePageStepDefinition.user_Enters_and_and(String,String,String)"
});
formatter.result({
  "duration": 132524400,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinition.user_clicks_on_save_button()"
});
formatter.result({
  "duration": 3320348200,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinition.user_verify_new_conatact_is_created()"
});
formatter.result({
  "duration": 2907832900,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinition.close_The_Browser()"
});
formatter.result({
  "duration": 627439900,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "User is able to create a new contact",
  "description": "",
  "id": "free-crm-login-feature;user-is-able-to-create-a-new-contact;;7",
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
  "name": "user Enters \"Keyur\" and \"Bhavsar\" and \"CGI\"",
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
  "duration": 9147152000,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinition.user_mouse_over_on_Contact_Page()"
});
formatter.result({
  "duration": 4885300,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinition.user_clicks_on_new_Contact_Link()"
});
formatter.result({
  "duration": 3388123400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Keyur",
      "offset": 13
    },
    {
      "val": "Bhavsar",
      "offset": 25
    },
    {
      "val": "CGI",
      "offset": 39
    }
  ],
  "location": "HomePageStepDefinition.user_Enters_and_and(String,String,String)"
});
formatter.result({
  "duration": 127385200,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinition.user_clicks_on_save_button()"
});
formatter.result({
  "duration": 4246599400,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinition.user_verify_new_conatact_is_created()"
});
formatter.result({
  "duration": 1970709000,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinition.close_The_Browser()"
});
formatter.result({
  "duration": 691471000,
  "status": "passed"
});
formatter.uri("Deals.feature");
formatter.feature({
  "line": 2,
  "name": "Free CRM Deals Feature",
  "description": "",
  "id": "free-crm-deals-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Free CRM Deals Test Scenario",
  "description": "",
  "id": "free-crm-deals-feature;free-crm-deals-test-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user login through driver",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user login through credentials",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 10
    },
    {
      "cells": [
        "KeyurAutomation",
        "Test@12345"
      ],
      "line": 11
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user on Home page and click on Deals",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user enters details in New Deal",
  "rows": [
    {
      "cells": [
        "title",
        "amount",
        "probability",
        "commission"
      ],
      "line": 15
    },
    {
      "cells": [
        "test deal1",
        "1000",
        "50",
        "10"
      ],
      "line": 16
    },
    {
      "cells": [
        "test deal2",
        "2000",
        "60",
        "20"
      ],
      "line": 17
    },
    {
      "cells": [
        "test deal3",
        "3000",
        "70",
        "30"
      ],
      "line": 18
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Close this browser",
  "keyword": "Then "
});
formatter.match({
  "location": "DealsPageStepDefinition.user_login_through_driver()"
});
formatter.result({
  "duration": 2773396500,
  "status": "passed"
});
formatter.match({
  "location": "DealsPageStepDefinition.user_login_through_credentials(DataTable)"
});
formatter.result({
  "duration": 5036379200,
  "status": "passed"
});
formatter.match({
  "location": "DealsPageStepDefinition.user_on_Home_page_and_click_on_Deals()"
});
formatter.result({
  "duration": 2834462100,
  "status": "passed"
});
formatter.match({
  "location": "DealsPageStepDefinition.user_enters_details_in_New_Deal(DataTable)"
});
formatter.result({
  "duration": 436330000,
  "status": "passed"
});
formatter.match({
  "location": "DealsPageStepDefinition.close_this_browser()"
});
formatter.result({
  "duration": 634352800,
  "status": "passed"
});
formatter.uri("login.feature");
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
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
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
  "name": "User is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "title of Login Page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User is on Home Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 14,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;1"
    },
    {
      "cells": [
        "KeyurAutomation",
        "Test@12345"
      ],
      "line": 15,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;2"
    },
    {
      "cells": [
        "ShaliniAutomation",
        "Test@1234"
      ],
      "line": 16,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;2",
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
  "name": "User is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "title of Login Page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters \"KeyurAutomation\" and \"Test@12345\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User is on Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepDefination.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 2819080600,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefination.title_of_Login_Page_is_Free_CRM()"
});
formatter.result({
  "duration": 19466100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "KeyurAutomation",
      "offset": 13
    },
    {
      "val": "Test@12345",
      "offset": 35
    }
  ],
  "location": "loginStepDefination.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 126743000,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefination.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 4967338600,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefination.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4033200,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;3",
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
  "name": "User is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "title of Login Page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters \"ShaliniAutomation\" and \"Test@1234\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User is on Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepDefination.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 2925987400,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefination.title_of_Login_Page_is_Free_CRM()"
});
formatter.result({
  "duration": 47652500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ShaliniAutomation",
      "offset": 13
    },
    {
      "val": "Test@1234",
      "offset": 37
    }
  ],
  "location": "loginStepDefination.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 277334600,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefination.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 5903913900,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefination.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4876500,
  "status": "passed"
});
});