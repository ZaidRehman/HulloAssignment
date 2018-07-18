import { kernel } from "../kernel.cofig";
import { ThreadRepoImpl } from "../repositories/thread-repo";
import { Thread } from "../entities/Thread";
import { Message } from "../entities/Messages";
var threads = kernel.resolve<ThreadRepoImpl>("ThreadRepoImpl");

var MessageBody = Polymer(<any>{
  is: 'message-body',
  properties: {
    thread: {
      type: Object,
      notify: true,
    },
    selectedIndex: {
      type: String,
      notify: true,
      observer: '_getThread'
    },
    user: {
      type: String,
      notify: true,
    }
  },
  _getThread: function (idx) {
    console.log('selected',idx)
    console.log('threads',threads.getThread(idx))
    var t = threads.getThread(idx)
    if(!t){
      var messages : Message[] = []
      t = new Thread(idx,'',messages)
    }
    this.thread = t
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