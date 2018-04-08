class Mylodash {

	isObject(obj) {
		return typeof obj === "object";
	}

	isArray(arr) {
		return Array.isArray(arr);
	}

	isFunction(fn) {
		return typeof fn === "function";
	}

	keys(obj) {
		if (!this.isObject(obj)) return false;

		let keys = [];
		let i;

		for (i in obj) keys.push(i);

		return keys;
	}

	values(obj) {
		if (!this.isObject(obj)) return false;

		let values = [];
		let i;

		for (i in obj) values.push(obj[i]);

		return values;
	}

	entries(obj) {
		if (!this.isObject(obj)) return false;

		let entries = [];
		let i;

		for (i in obj) entries.push([i, obj[i]]);

		return entries;
	}

	clone(obj) {
		if (!this.isObject(obj)) return false;

		return Object.assign({}, obj);
	}

	filter(arr, cb) {
		if (!arr && !cb && !this.isArray(arr) || !this.isFunction(cb)) return false;

		let filtered = [];
		let i = 0;

		for (; i < arr.length; i++) {
			if (cb(arr[i])) filtered.push(arr[i]);
		}

		return filtered;
	}

	map(arr, cb) {
		if (!arr && !cb && !this.isArray(arr) || !this.isFunction(cb)) return false;

		let temp = [];
		let i = 0;
		for (; i < arr.length; i++) {
			temp.push(arr[i]);
		}

		return temp;
	}

	find(arr, cb) {
		if (!arr && !cb && !this.isArray(arr) || !this.isFunction(cb)) return false;

		for (let i = 0; i < arr.length; i++) {
			if (cb(arr[i])) return arr[i];
		}
	}

	includes(arr, item) {
		if (!this.isArray(arr) && item) return false;

		let i = 0;
		for (; i < arr.length; i++) {
			if (arr.indexOf(item) > -1) return item;
		}
	}

	each(arr, cb) {
		if (!arr && !cb && !this.isArray(arr) || !this.isFunction(cb)) return false;

		let i = 0;
		for (; i < arr.length; i++) {
			cb(arr[i]);
		}
	}

	every(arr, cb) {
		if (!arr && !cb && !this.isArray(arr) || !this.isFunction(cb)) return false;

		let i = 0;
		for (; i < arr.length; i++) {
			if (!cb(arr[i])) return false;
		}

		return true;
	}

	some(arr, cb) {
		if (!arr && !cb && !this.isArray(arr) || !this.isFunction(cb)) return false;

		let i = 0;
		for (; i < arr.length; i++) {
			if (cb(arr[i])) return true;
		}

		return false;
	}

	reduce(arr, cb) {
		if (!arr && !cb && !this.isArray(arr) || !this.isFunction(cb)) return false;

		let result = arr[0];
		let i = 1;

		for (; i < arr.length; i++) {
			result = cb(result, arr[i]);
		}

		return result;
	}

}