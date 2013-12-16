app.use(function(req, res, next) {
	// Set some default cookies values if you
	// want using this 'defaults' object
	var defaults = {
		myCookie1: {
			value: 'Default Cookie Value One',
			options: {}
		},
		myCookie2: {
			value: 'Default Cookie Value Two',
			options: {
				maxAge: 900000,
				httpOnly: false
			}
		}
	};

	res.locals({
		cookies: req.cookies,
		cookie: function(name, value, options) {
			res.cookie(name, value, (!options) ? {} : options);
			this.cookies[name] = value;
		}
	});

	// This loop will set the defaults for you
	for ( var item in defaults ) {
		if (!(item in req.cookies)) {
			res.locals.cookie(item, defaults[item].value, defaults[item].options);
		}
	}

	next();

});
