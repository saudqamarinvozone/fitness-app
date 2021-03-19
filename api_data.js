define({ "api": [
  {
    "type": "post",
    "url": "/exercises",
    "title": "All Exercises",
    "name": "Get_All_Exercises",
    "group": "Exercises",
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
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Routines"
  },
  {
    "type": "post",
    "url": "/routines",
    "title": "Get Routine",
    "name": "Get_Routine",
    "group": "Routines",
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Routines"
  },
  {
    "type": "post",
    "url": "/login",
    "title": "Login",
    "name": "Login",
    "group": "User",
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
            "type": "name",
            "optional": false,
            "field": "Name",
            "description": "<p>of a user</p>"
          },
          {
            "group": "Parameter",
            "type": "email",
            "optional": false,
            "field": "Email",
            "description": "<p>of a user</p>"
          },
          {
            "group": "Parameter",
            "type": "contact_no",
            "optional": false,
            "field": "Mobile",
            "description": "<p>number of a user</p>"
          },
          {
            "group": "Parameter",
            "type": "dob",
            "optional": false,
            "field": "Date",
            "description": "<p>of birth of a user</p>"
          },
          {
            "group": "Parameter",
            "type": "password",
            "optional": false,
            "field": "Password",
            "description": "<p>of a user</p>"
          },
          {
            "group": "Parameter",
            "type": "confirm_password",
            "optional": false,
            "field": "Confirm",
            "description": "<p>Password of a user</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "User"
  }
] });
