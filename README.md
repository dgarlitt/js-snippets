js-snippets
=================

Helpful snippets for JavaScript ([visit homepage](http://dgarlitt.github.io/js-snippets/))

###Knockout.js
####Number Formatting Binding
--------------------------------
This binding can be used to format numbers in a variety of ways. By default, it will add commas to separate hundreds, thousands, millions, etc. The separator can be changed from a comma to any character. Decimal precision can be specified as well. Also, it can be used to format money in a variety of ways.
 - [See it in action](http://dgarlitt.github.io/js-snippets/examples/knockout/number-formatting.html)
 - [Get the code](https://github.com/dgarlitt/js-snippets/blob/master/javascripts/knockout/bindings/number-formatting.js)
 - or, fiddle with it: http://jsfiddle.net/dgarlitt/q4x4z/

###Node.js
####Cookies in Response Object - Middleware
--------------------------------------------
Okay, this one is really simple, but could be useful if you are using Express or Connect in your Node apps and need to make use of cookies in your templates. Granted, you could pass the cookie values you need to the templates in your routes, but in some cases you will find yourself doing this repetitively. This simple middleware makes the cookie() method and cookies object from your Express/Connect app accessible from within your templates.

I will be the first to admit that it is bad practice for templates to be setting values, so the cookie() method is unnecessary. But, I threw it in there just for fun.

 - [See how to it works](http://dgarlitt.github.io/js-snippets/examples/node/middleware/cookies-response.html)
 - [Get the code](https://github.com/dgarlitt/js-snippets/blob/master/javascript/node/middleware/cookies-response.js)
