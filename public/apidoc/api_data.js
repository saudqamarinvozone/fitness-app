define({ "api": [
  {
    "type": "post",
    "url": "/exercises",
    "title": "All Exercises",
    "name": "Get_All_Exercises",
    "group": "Exercises",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization\": \"Bearer 5f048fe\"",
          "type": "Header"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "exercises",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "exercises.id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "exercises.title",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "exercises.description",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "exercises.rating",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "exercises.level",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500 Internal Server Error": [
          {
            "group": "500 Internal Server Error",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>The server encountered an internal error</p>"
          }
        ],
        "401 Unauthorized": [
          {
            "group": "401 Unauthorized",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Unable to access/Access Denied</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Exercises"
  },
  {
    "type": "post",
    "url": "/exercises/featured",
    "title": "Featured Exercises",
    "name": "Get_Featured_Exercises",
    "group": "Exercises",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization\": \"Bearer 5f048fe\"",
          "type": "Header"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "exercises",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "exercises.id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "exercises.title",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "exercises.description",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "exercises.rating",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "exercises.level",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500 Internal Server Error": [
          {
            "group": "500 Internal Server Error",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>The server encountered an internal error</p>"
          }
        ],
        "401 Unauthorized": [
          {
            "group": "401 Unauthorized",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Unable to access/Access Denied</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Exercises"
  },
  {
    "type": "post",
    "url": "/logs",
    "title": "Create Log",
    "name": "Create_Log",
    "group": "Logs",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization\": \"Bearer 5f048fe\"",
          "type": "Header"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "routineId",
            "description": "<p>Id of a routine</p>"
          },
          {
            "group": "Parameter",
            "type": "dateTime",
            "optional": false,
            "field": "date_time",
            "description": "<p>Date time of routine when it will be executed</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "duration",
            "description": "<p>how long user perform a routine</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "dateTime",
            "optional": false,
            "field": "date_time_of_routine",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "duration",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "routine",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "routine.id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "routine.title",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "routine.description",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "routine.rating",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "routine.level",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500 Internal Server Error": [
          {
            "group": "500 Internal Server Error",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>The server encountered an internal error</p>"
          }
        ],
        "401 Unauthorized": [
          {
            "group": "401 Unauthorized",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Unable to access/Access Denied</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Logs"
  },
  {
    "type": "post",
    "url": "/logs/:id",
    "title": "Update Log",
    "name": "Update_Log",
    "group": "Logs",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization\": \"Bearer 5f048fe\"",
          "type": "Header"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>Id of a log</p>"
          },
          {
            "group": "Parameter",
            "type": "dateTime",
            "optional": false,
            "field": "date_time",
            "description": "<p>Date time of routine when it will be executed</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "duration",
            "description": "<p>how long user perform a routine</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "dateTime",
            "optional": false,
            "field": "date_time_of_routine",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "duration",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "routine",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "routine.id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "routine.title",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "routine.description",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "routine.rating",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "routine.level",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500 Internal Server Error": [
          {
            "group": "500 Internal Server Error",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>The server encountered an internal error</p>"
          }
        ],
        "401 Unauthorized": [
          {
            "group": "401 Unauthorized",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Unable to access/Access Denied</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Logs"
  },
  {
    "type": "post",
    "url": "user/routines",
    "title": "Create User Routines",
    "name": "Create_User_Routine",
    "group": "Routines",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization\": \"Bearer 5f048fe\"",
          "type": "Header"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "routineId",
            "description": "<p>Id of a routine</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500 Internal Server Error": [
          {
            "group": "500 Internal Server Error",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>The server encountered an internal error</p>"
          }
        ],
        "401 Unauthorized": [
          {
            "group": "401 Unauthorized",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Unable to access/Access Denied</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Routines"
  },
  {
    "type": "post",
    "url": "/routines",
    "title": "Get All Routines",
    "name": "Get_All_Routines",
    "group": "Routines",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization\": \"Bearer 5f048fe\"",
          "type": "Header"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "routines",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "routines.id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "routines.title",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "routines.description",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "routines.rating",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "routines.level",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "objects[]",
            "optional": false,
            "field": "routines.exercises",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "routines.exercises.id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "routines.exercises.title",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "routines.exercises.description",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "routines.exercises.rating",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "routines.exercises.level",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500 Internal Server Error": [
          {
            "group": "500 Internal Server Error",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>The server encountered an internal error</p>"
          }
        ],
        "401 Unauthorized": [
          {
            "group": "401 Unauthorized",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Unable to access/Access Denied</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Routines"
  },
  {
    "type": "get",
    "url": "/routines",
    "title": "Get Routine",
    "name": "Get_Routine",
    "group": "Routines",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization\": \"Bearer 5f048fe\"",
          "type": "Header"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>Id of a routine</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "rating",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "level",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500 Internal Server Error": [
          {
            "group": "500 Internal Server Error",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>The server encountered an internal error</p>"
          }
        ],
        "401 Unauthorized": [
          {
            "group": "401 Unauthorized",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Unable to access/Access Denied</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Routines"
  },
  {
    "type": "post",
    "url": "/change-password",
    "title": "Change Password",
    "name": "Change_Password",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "email",
            "optional": false,
            "field": "email",
            "description": "<p>Email of a user</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "reset_password_token",
            "description": "<p>Token used for resetting the password</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>New Password of a user</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "confirm_password",
            "description": "<p>Confirm Password of a user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500 Internal Server Error": [
          {
            "group": "500 Internal Server Error",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>The server encountered an internal error</p>"
          }
        ],
        "404 Unauthorized": [
          {
            "group": "404 Unauthorized",
            "optional": false,
            "field": "NotFound",
            "description": "<p>User against email not found</p>"
          }
        ],
        "emailRequired": [
          {
            "group": "emailRequired",
            "optional": false,
            "field": "Email",
            "description": "<p>email field cannot be empty</p>"
          }
        ],
        "tokenRequired": [
          {
            "group": "tokenRequired",
            "optional": false,
            "field": "Token",
            "description": "<p>token field cannot be empty</p>"
          }
        ],
        "PasswordRequired": [
          {
            "group": "PasswordRequired",
            "optional": false,
            "field": "Password",
            "description": "<p>password field cannot be empty</p>"
          }
        ],
        "PasswordValid": [
          {
            "group": "PasswordValid",
            "optional": false,
            "field": "Password",
            "description": "<p>password at least have 8 characters and must have one digit, one special character and one UpperCase letter</p>"
          }
        ],
        "ConfirmPasswordMatch": [
          {
            "group": "ConfirmPasswordMatch",
            "optional": false,
            "field": "ConfirmPassword",
            "description": "<p>confirm_password and password doesn't match</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/login",
    "title": "Login",
    "name": "Login",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "email",
            "optional": false,
            "field": "email",
            "description": "<p>Email of a user</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>Password of a user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "user",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "user.id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "user.name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "user.email",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "user.contact_no",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "user.age",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "access_token",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "401 Unauthorized": [
          {
            "group": "401 Unauthorized",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Invalid credentials</p>"
          }
        ],
        "500 Internal Server Error": [
          {
            "group": "500 Internal Server Error",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>The server encountered an internal error</p>"
          }
        ],
        "EmailRequired": [
          {
            "group": "EmailRequired",
            "optional": false,
            "field": "Email",
            "description": "<p>email field cannot be empty</p>"
          }
        ],
        "EmailValid": [
          {
            "group": "EmailValid",
            "optional": false,
            "field": "Email",
            "description": "<p>email field should be type of email</p>"
          }
        ],
        "Password": [
          {
            "group": "Password",
            "optional": false,
            "field": "Password",
            "description": "<p>password field cannot be empty</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/logout",
    "title": "Logout",
    "name": "Logout",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The token can be generated from your user profile.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Authorization\": \"Bearer 5f048fe\"",
          "type": "Header"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500 Internal Server Error": [
          {
            "group": "500 Internal Server Error",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>The server encountered an internal error</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/reset-password",
    "title": "Reset Password",
    "name": "Reset_Password",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "email",
            "optional": false,
            "field": "email",
            "description": "<p>Email of a user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "404 Unauthorized": [
          {
            "group": "404 Unauthorized",
            "optional": false,
            "field": "NotFound",
            "description": "<p>User against email not found</p>"
          }
        ],
        "500 Internal Server Error": [
          {
            "group": "500 Internal Server Error",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>The server encountered an internal error</p>"
          }
        ],
        "EmailRequired": [
          {
            "group": "EmailRequired",
            "optional": false,
            "field": "Email",
            "description": "<p>email field cannot be empty</p>"
          }
        ],
        "EmailValid": [
          {
            "group": "EmailValid",
            "optional": false,
            "field": "Email",
            "description": "<p>email field should be type of email</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/sign-up",
    "title": "Sign-up",
    "name": "Signup",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>name of a user</p>"
          },
          {
            "group": "Parameter",
            "type": "email",
            "optional": false,
            "field": "email",
            "description": "<p>email of a user</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "contact_no",
            "description": "<p>Contact Number of a user</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "dob",
            "description": "<p>Date of birth of a user</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>Password of a user</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "confirm_password",
            "description": "<p>Password of a user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "user",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "user.id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "user.name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "user.email",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "user.contact_no",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "user.age",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "access_token",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500 Internal Server Error": [
          {
            "group": "500 Internal Server Error",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>The server encountered an internal error</p>"
          }
        ],
        "NameRequired": [
          {
            "group": "NameRequired",
            "optional": false,
            "field": "Name",
            "description": "<p>name field cannot be empty</p>"
          }
        ],
        "NameTooShort": [
          {
            "group": "NameTooShort",
            "optional": false,
            "field": "Name",
            "description": "<p>name field at least have 4 characters</p>"
          }
        ],
        "EmailRequired": [
          {
            "group": "EmailRequired",
            "optional": false,
            "field": "Email",
            "description": "<p>email field cannot be empty</p>"
          }
        ],
        "EmailValid": [
          {
            "group": "EmailValid",
            "optional": false,
            "field": "Email",
            "description": "<p>email field should be type of email</p>"
          }
        ],
        "EmailUnique": [
          {
            "group": "EmailUnique",
            "optional": false,
            "field": "Email",
            "description": "<p>email is already in use</p>"
          }
        ],
        "ContactNoRequired": [
          {
            "group": "ContactNoRequired",
            "optional": false,
            "field": "ContactNo",
            "description": "<p>contact_no field cannot be empty</p>"
          }
        ],
        "DobRequired": [
          {
            "group": "DobRequired",
            "optional": false,
            "field": "DateOfBirth",
            "description": "<p>date of birth field cannot be empty</p>"
          }
        ],
        "PasswordRequired": [
          {
            "group": "PasswordRequired",
            "optional": false,
            "field": "Password",
            "description": "<p>password field cannot be empty</p>"
          }
        ],
        "PasswordValid": [
          {
            "group": "PasswordValid",
            "optional": false,
            "field": "Password",
            "description": "<p>password at least have 8 characters and must have one digit, one special character and one UpperCase letter</p>"
          }
        ],
        "ConfirmPasswordMatch": [
          {
            "group": "ConfirmPasswordMatch",
            "optional": false,
            "field": "ConfirmPassword",
            "description": "<p>confirm_password and password doesn't match</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "User"
  }
] });
