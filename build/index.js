'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactCookie = require('react-cookie');

var _reactCookie2 = _interopRequireDefault(_reactCookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = function (key) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return {
        load: function load() {
            var state = _reactCookie2['default'].load(key);
            return Promise.resolve(state);
        },
        save: function save(state) {
            var jsonState = JSON.stringify(state);
            _reactCookie2['default'].save(key, jsonState, options);
            return Promise.resolve();
        }
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJrZXkiLCJvcHRpb25zIiwibG9hZCIsInN0YXRlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzYXZlIiwianNvblN0YXRlIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7OztxQkFFZSxVQUFDQSxHQUFEO0FBQUEsUUFBTUMsT0FBTix1RUFBYyxFQUFkO0FBQUEsV0FBc0I7QUFDakNDLFlBRGlDLGtCQUMxQjtBQUNILGdCQUFJQyxRQUFRLHlCQUFRRCxJQUFSLENBQWFGLEdBQWIsQ0FBWjtBQUNBLG1CQUFPSSxRQUFRQyxPQUFSLENBQWdCRixLQUFoQixDQUFQO0FBQ0gsU0FKZ0M7QUFNakNHLFlBTmlDLGdCQU01QkgsS0FONEIsRUFNckI7QUFDUixnQkFBTUksWUFBWUMsS0FBS0MsU0FBTCxDQUFlTixLQUFmLENBQWxCO0FBQ0EscUNBQVFHLElBQVIsQ0FBYU4sR0FBYixFQUFrQk8sU0FBbEIsRUFBNkJOLE9BQTdCO0FBQ0EsbUJBQU9HLFFBQVFDLE9BQVIsRUFBUDtBQUNIO0FBVmdDLEtBQXRCO0FBQUEsQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb29raWVzIGZyb20gJ3JlYWN0LWNvb2tpZSc7XG5cbmV4cG9ydCBkZWZhdWx0IChrZXksIG9wdGlvbnM9e30pID0+ICh7XG4gICAgbG9hZCgpIHtcbiAgICAgICAgbGV0IHN0YXRlID0gQ29va2llcy5sb2FkKGtleSk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc3RhdGUpO1xuICAgIH0sXG5cbiAgICBzYXZlKHN0YXRlKSB7XG4gICAgICAgIGNvbnN0IGpzb25TdGF0ZSA9IEpTT04uc3RyaW5naWZ5KHN0YXRlKTtcbiAgICAgICAgQ29va2llcy5zYXZlKGtleSwganNvblN0YXRlLCBvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cbn0pO1xuIl19