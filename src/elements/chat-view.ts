/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts" />

import { kernel } from "../kernel.cofig";
import { User } from "../entities/user";
var person = kernel.resolve<User>("User");

var ChatView
ChatView = Polymer(<any>
  {
    is: 'chat-view',
    conditionalClass: function(name) {
      return name === "Jhon" ? 'sender' : '';
    },
    properties:
    {
      prop: {
        type: String,
        value: 'Chat View'
      },
      user:{
        type: String,
        value: "Jhon"
      },
      data: {
        type: Array,
        value: person.message.getAll()
      }
    },

  }
);

