/* @flow */

class Mylodash {

	isObject(obj: any): boolean {
		return typeof obj === "object";
	}

	isArray(arr: any): boolean {
		return Array.isArray(arr);
	}

	isFunction(fn: any): boolean {
		return typeof fn === "function";
	}


	keys(obj: any): boolean | Array<string> {
		if(!this.isObject(obj))
			return false;

		let keys: Array<string> = [];
		let i: string;

		for(i in obj)
			keys.push(i);

		return keys;
	}

	values(obj: any): boolean | Array<mixed> {
		if (!this.isObject(obj))
			return false;

		let values: Array<mixed> = [];
		let i: string;

		for (i in obj)
			values.push(obj[i]);

		return values;
	}

	entries(obj: any): boolean | Array<[string, any]> {
		if (!this.isObject(obj))
			return false;

		let entries: Array<[string, any]> = [];
		let i: string;

		for (i in obj)
			entries.push([i, obj[i]]);

		return entries;
	}

	clone(obj: any): boolean | Object {
		if (!this.isObject(obj))
			return false;

		return Object.assign({}, obj);
	}


	filter(arr: any, cb: any): boolean | Array<mixed> {
		if ((!arr && !cb) && !this.isArray(arr) || !this.isFunction(cb))
			return false;

		let filtered: Array<mixed> = [];
		let i: number = 0;

		for (; i < arr.length; i++) {
			if (cb(arr[i]))
				filtered.push(arr[i]);
		}

		return filtered;
	}

	map(arr: any, cb: any): boolean | Array<mixed> {
		if ((!arr && !cb) && !this.isArray(arr) || !this.isFunction(cb))
			return false;

		let temp: Array<mixed> = [];
		let i: number = 0;

		for (; i < arr.length; i++) {
			temp.push(arr[i]);
		}

		return temp;
	}

	find(arr: any, cb: any): any {
		if ((!arr && !cb) && !this.isArray(arr) || !this.isFunction(cb))
			return false;

		for (let i = 0; i < arr.length; i++) {
			if (cb(arr[i]))
				return arr[i];
		}
	}

	includes(arr: any, item: any): any {
		if (!this.isArray(arr) && item)
			return false;

		let i: number = 0;

		for (; i < arr.length; i++) {
			if (arr.indexOf(item) > -1)
				return item;
		}
	}

	each(arr: any, cb: any): boolean | void {
		if ((!arr && !cb) && !this.isArray(arr) || !this.isFunction(cb))
			return false;

		let i: number = 0;

		for (; i < arr.length; i++) {
			cb(arr[i]);
		}
	}

	every(arr: any, cb: any): boolean {
		if ((!arr && !cb) && !this.isArray(arr) || !this.isFunction(cb))
			return false;

		let i: number = 0;

		for (; i < arr.length; i++) {
			if(!cb(arr[i]))
				return false;
		}

		return true;
	}

	some(arr: any, cb: any): boolean {
		if ((!arr && !cb) && !this.isArray(arr) || !this.isFunction(cb))
			return false;

		let i: number = 0;

		for (; i < arr.length; i++) {
			if (cb(arr[i]))
				return true;
		}

		return false;
	}

	reduce(arr: any, cb: any): any {
		if ((!arr && !cb) && !this.isArray(arr) || !this.isFunction(cb))
			return false;

		let result: any = arr[0];
		let i: number = 1;

		for(; i < arr.length; i++) {
			result = cb(result, arr[i]);
		}

		return result;
	}

}