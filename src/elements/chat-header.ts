import { kernel } from "../kernel.cofig";
import { ThreadRepoImpl } from "../repositories/thread-repo";
var threads = kernel.resolve<ThreadRepoImpl>("ThreadRepoImpl");

var Header = Polymer(<any>{
  is: 'chat-header',
  properties: {
    name: {
      type: String,
      value: threads.getTitle()
    }
  },
});

