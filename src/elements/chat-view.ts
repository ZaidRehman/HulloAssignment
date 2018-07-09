/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts" />

import { kernel } from "../kernel.cofig";
import { UserRepo } from "../repositories/UserRepo";
var person = kernel.resolve<UserRepo>("UserRepo");

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
        value: person.messages.messages
      }
    },

  }
);

