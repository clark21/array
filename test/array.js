var assert 	= require('assert');
var array	= require('../array');

describe('Array Test Suite', function() {
	describe('Unit Tests', function() {
		it('should combine an array of keys and values into a hash', function() {
			var keys = ['key2', 'key3','key1', 'key5'], values = [1, 2, 3, 4], 
			object = array().combine(keys, values);
			
			assert.equal(3, object.key1);
		});
		
		it('should clone an array', function() {
			var list = [2,3,4,5];
			assert.equal('2,3,4,5', array().clone(list));
		});

		it('should parse through array', function() {
			var list = [3, 4, 5, 6];
			array().each(list, function(key, value) {
				assert.equal(true, list.hasOwnProperty(key));
				assert.equal(list[key], value);
			});
		});
		
		it('should test to see if array hash a value', function() {
			var list = [3, 4, 5, 6];
			assert.equal(true, array().has(list, 3));
			assert.equal(false, array().has(list, 7));
		});
		
		it('should test for empty array', function() {
			var list = [3, 4, 5, 6];
			assert.equal(false, array().isEmpty(list));
		});
		
		it('should generate the keys', function() {
			var list = [3, 4, 5, 6], keys = array().keys(list);
			assert.equal(4, array().size(keys));
		});
		
		it('should map', function() {
			var list = [3, 4, 5, 6];
			array().map(list, function(key, value) {
				return value + 1;
			});
			
			assert.equal(5, list[1]);
		});

		it('should natural sort the array', function() {
			var list = ['a', 'c', 'b']; 
			assert.equal('a,b,c', array().natsort(list));
		});
		
		it('should convert array to query array', function() {
			var list = [2, 3, 4, 5];
			assert.equal('0=2&1=3&2=4&3=5', array().toQuery(list));
		});
		
		it('should convert array to JSON', function() {
			var list = [2,3,4,5];
			assert.equal('[2,3,4,5]', array().toString(list));
		});
		
		it('should return the values of an array', function() {
			var list = [2, 3, 4, 5];
			array().values(list);
			assert.equal(4, array().size(list));
		});
		
		it('should combine 2 arrays together', function() {
			var list = [1,2,3,4], argument = [5, 6];
			object  = array().concat(list, argument);
			assert.equal('1,2,3,4,5,6', object);
		});
		
		it('should unshift', function() {
			var list = [1,2,3,4,5], newList = array().unshift(list, 7, 6);
			assert.equal(6, newList.shift());
		});
		
		it('should slice', function() {
			var list = [1,2,3,4], argument = 2,
			result = array().slice(list, argument);
			assert.equal('3,4', result);
		});
		
		it('should splice', function() {
			var list = [1,2,3,4], argument = (2, 3)
			result = array().splice(list, argument);
			assert.equal('4', result);
		});
		
		it('should sort an array by values', function() {
			var list = ['c','b','a'], result = array().sort(list);
			assert.equal('a,b,c', result);
		});
		
		it('should implode an array to a string', function() {
			var list = ['z','x','c'], delimeter = ('-')
			result = array().implode(list, delimeter);
			assert.equal('z-x-c', result);
		});
		
		it('should pop', function() {
			var list = [1, 2, 3, 4], result = array().pop(list);
			assert.equal(4, result);
		});
		
		it('should push', function() {
			var list = [1, 2, 3, 4], argument = [5, 6],
			result = array().push(list, argument);
			assert.equal('1,2,3,4,5,6', result);
		});
		
		it('should reverse the order of an array', function() {
			var list = ['a','b','c'], result = array().reverse(list);
			assert.equal('c,b,a', result);
		});
	});
});