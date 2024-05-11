function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) { _classCheckPrivateStaticAccess(receiver, classConstructor); _classCheckPrivateStaticFieldDescriptor(descriptor, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) { _classCheckPrivateStaticAccess(receiver, classConstructor); _classCheckPrivateStaticFieldDescriptor(descriptor, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classCheckPrivateStaticFieldDescriptor(descriptor, action) { if (descriptor === undefined) { throw new TypeError("attempted to " + action + " private static field before its declaration"); } }

function _classCheckPrivateStaticAccess(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _firstname = /*#__PURE__*/new WeakMap();

var _lastname = /*#__PURE__*/new WeakMap();

var _id = /*#__PURE__*/new WeakMap();

var _default = /*#__PURE__*/function () {
  // Private fields
  // A private static field
  function _default(fname, lname) {
    _classCallCheck(this, _default);

    _classPrivateFieldInitSpec(this, _firstname, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _lastname, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _id, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _firstname, fname);

    _classPrivateFieldSet(this, _lastname, lname);

    _classPrivateFieldSet(this, _id, _classStaticPrivateFieldSpecGet(this.constructor, _default, _numerOfStudents));

    _classStaticPrivateFieldSpecSet(this.constructor, _default, _numerOfStudents, _classStaticPrivateFieldSpecGet(this.constructor, _default, _numerOfStudents) + 1);
  } // A public getter

  /**
   * @public
   * @type {String}
   */


  _createClass(_default, [{
    key: "initials",
    get: function get() {
      return "".concat(_classPrivateFieldGet(this, _firstname)[0]).concat(_classPrivateFieldGet(this, _lastname)[0]);
    } // A public static getter

    /**
     * @public
     * @type {String}
     */

  }], [{
    key: "length",
    get: function get() {
      return _classStaticPrivateFieldSpecGet(this, _default, _numerOfStudents);
    }
  }]);

  return _default;
}();

var _numerOfStudents = {
  writable: true,
  value: 0
};
export { _default as default };