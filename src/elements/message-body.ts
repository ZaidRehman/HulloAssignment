
var MessageBody = Polymer(<any>{
    is: 'message-body',
    properties: {
        thread: {
          type: Object,
          notify: true,
        },
        user: {
          type: String,
          notify: true,
        }
    },
    _handleInput: function(e) {
        if (e.keyCode == 13) {
          this.push('thread.messages', {
            text: e.target.value,
            sender: this.user
          });
          e.target.value = '';
        }
      }
});