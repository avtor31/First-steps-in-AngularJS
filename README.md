Angular creates 'answer' variable in scope 'QuestionController'.
{{answer1.author}} - is what we can see in dropdown (select element)
"{{answer1}}"  is a chosen value (unvisible part) of select element

answer1 will be writen in answer variable as a string:
for example "{"text":"AngularJS is the best","author":"Oleg Kuznetsov","date":"20/10/2013","rate":0}"

In the controller we can receive 'answer'
    1 as a function`s argument -  (stringAnswer) in authorClickHandler
        or
    2 as scope variable   - ($scope.answer)

See also:
    https://docs.angularjs.org/api/ng/directive/select
    http://metanit.com/web/angular/2.3.php event handling in angular
    http://metanit.com/web/angular/2.4.php filters in angular