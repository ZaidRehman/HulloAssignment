import { kernel } from "../kernel.cofig";
import { User } from "../entities/user";
var person = kernel.resolve<User>("User");

var Header = Polymer(<any>{
  is: 'chat-header',
  properties: {
    name: {
      type: String,
      value: person.threads.getTitle()
    }
  },
});

