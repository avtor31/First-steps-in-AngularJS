'use strict';

myApp.filter('answerWithBestFilter', function(){
    return function(text){
        if(text.indexOf("best")!==-1){
            return "***  " + text + "  *** It is filtered text.";
        }
        else{
            return text;
        }
    }
})
