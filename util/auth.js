'use strict';

var userManagement = function() {

    var $auth = {
        isLoggedIn: function () {
            // return something, e.g. using server-stored data
        }
    };

    return {
        Authenticator: {
           login: function(username, password) {
               // modify $auth object, or call server, or both
           }
        },

        NeedsAuthenticatedUser: {
            statics: {
                willTransitionTo: function (transition) {
                    if (!$auth.isLoggedIn()) {
                        transition.abort();
                    }
                }
            }
        }
    };
};

module.exports = userManagement;
