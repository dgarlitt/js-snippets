ko.bindingHandlers.number = {
	update: function(element, valueAccessor, allBindingsAccessor) {
		var defaults = ko.bindingHandlers.number.defaults,
			aba = allBindingsAccessor,
			unwrap = ko.utils.unwrapObservable,
			value = unwrap(valueAccessor()) || valueAccessor(),
			result = '',
			numarray;

		var	separator = unwrap(aba().separator) || defaults.separator,
			decimal = unwrap(aba().decimal) || defaults.decimal,
			precision = unwrap(aba().precision) === 0 ? 0 : (unwrap(aba().precision) || defaults.precision),
			symbol = unwrap(aba().symbol) || defaults.symbol,
			after = unwrap(aba().after) || defaults.after;

        value = parseFloat(value) || 0;

        if (precision >= 0)
            value = value.toFixed(precision)

            numarray = value.toString().split('.');

        for (var i = 0; i < numarray.length; i++) {
            if (i == 0) {
                result += numarray[i].replace(/(\d)(?=(\d\d\d)+(?!\d))/g,'$1'+separator);
            } else {
                result += decimal + numarray[i];
            }
        }

		result = (after) ? result += symbol : symbol + result;

	    ko.bindingHandlers.text.update(element, function() { return result; });
	},
	defaults: {
		separator: ',',
		decimal: '.',
		precision: -1,
		symbol: '',
		after: false
	}
};
