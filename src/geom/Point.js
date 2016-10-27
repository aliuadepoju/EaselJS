/*
* @license Point
* Visit http://createjs.com/ for documentation, updates and examples.
*
* Copyright (c) 2010 gskinner.com, inc.
*
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:
*
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE.
*/

/**
 * @module EaselJS
 */

/**
 * Represents a point on a 2 dimensional x / y coordinate system.
 *
 * <h4>Example</h4>
 *
 *      var point = new createjs.Point(0, 100);
 *
 * @class Point
 */
export default class Point {

// constructor:
	/**
	 * @constructor
	 * @param {Number} [x=0] X position.
	 * @param {Number} [y=0] Y position.
	 * @constructor
	 */
	constructor (x = 0, y = 0) {
		this.setValues(x, y);

// public properties:
		// assigned in the setValues method.
		/**
		 * X position.
		 * @property x
		 * @type Number
		 */

		/**
		 * Y position.
		 * @property y
		 * @type Number
		 */
	}

// public methods:
	/**
	 * Sets the specified values on this instance.
	 * @method setValues
	 * @param {Number} [x=0] X position.
	 * @param {Number} [y=0] Y position.
	 * @return {Point} This instance. Useful for chaining method calls.
	 * @chainable
	*/
	setValues (x = 0, y = 0) {
		this.x = x;
		this.y = y;
		return this;
	}

	/**
	 * Copies all properties from the specified point to this point.
	 * @method copy
	 * @param {Point} point The point to copy properties from.
	 * @return {Point} This point. Useful for chaining method calls.
	 * @chainable
	*/
	copy (point) {
		this.x = point.x;
		this.y = point.y;
		return this;
	}

	/**
	 * Returns a clone of the Point instance.
	 * @method clone
	 * @return {Point} a clone of the Point instance.
	 */
	clone () {
		return new Point(this.x, this.y);
	}

	/**
	 * Returns a string representation of this object.
	 * @method toString
	 * @return {String} a string representation of the instance.
	 */
	toString () {
		return `[Point (x=${this.x} y=${this.y})]`;
	}

}
