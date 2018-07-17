import { kernel } from "../kernel.cofig";
import { ThreadRepoImpl } from "../repositories/thread-repo";
var threads = kernel.resolve<ThreadRepoImpl>("ThreadRepoImpl");

var MessageBody = Polymer(<any>{
  is: 'message-body',
  properties: {
    thread: {
      type: Object,
      notify: true,
      observer: "_logThread",
    },
    user: {
      type: String,
      notify: true,
    }
  },
  _logThread: function (e) {
    console.log("thread on update", this.thread);
  },
  _handleInput: function (e) {
    if (e.keyCode == 13) {
      this.push('thread.messages', {
        text: e.target.value,
        sender: this.user
      });
      e.target.value = '';
    }
  },
  isSendersMessage: function (title) {
    return title === threads.getTitle() ? ' sender' : ''
  }
});