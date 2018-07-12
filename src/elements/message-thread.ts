import { kernel } from "../kernel.cofig";
import { User } from "../entities/user";
var person = kernel.resolve<User>("User");

var MessaageThread
MessaageThread = Polymer(<any>
  {
    is: 'message-thread',
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

