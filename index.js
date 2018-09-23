'use strict';

exports.validate = function(password){
    return password.length >=8 && password.length <=15;
}