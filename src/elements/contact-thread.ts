var ContactThread = Polymer(<any>
    {
        is: 'contact-thread',
        properties:
        {
            prop: {
                type: String,
                value: 'Contact Thread'
            },
            user: {
                type: Object
            },
            threads: {
                type: Array,
                observer: '_threadsChanged'
            },
            selectedThread: {
                notify: true
            },
            _selectedIndex: {
                observer: '_selectedIndexChanged'
            },
        },
        _threadsChanged: function (n) {
            this._selectedIndex = 0;
        },
        _selectedIndexChanged: function (idx) {
            if (this.threads) {
                console.log(this.threads[idx]);
                this.$.selector.select(this.threads[idx]);
            }
        }
    });

