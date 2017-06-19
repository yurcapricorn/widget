define(['jquery', 'https://c20244.shared.hc.ru/test1/js/contact.js'],
    function ($, contact) {
        var CustomWidget = function () {
            var self = this,
                system = self.system;

            this.callbacks = {
                settings: function () {
                },
                dpSettings: function () {
                },
                init: function () {
                    console.log('!!first init!!');
                    contact.init(self);
                },
                bind_actions: function () {
                    contact.bind_function(self);
                },
                render: function () {
                    contact.render(self);
                },
                contacts: {
                    selected: function() {
                        contact.contacts_selected(self);
                    }
                },
                // contacts: function () {
                //     contact.contacts(self);
                // },
                // leads: function () {
                //     contact.leads(self);
                // },
                leads: {
                    selected: function() {
                        contact.leads_selected(self);
                    }
                },
                onSave: function () {
                    return true;
                }
            };
            return this;
        };
        return CustomWidget;
    });