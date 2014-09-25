angular.module('demo-app', [])
.controller('personListCtrl', function($scope) {
})
.controller('jointListCtrl', function($scope, DEKAPaintFactory) {
	$scope.date = {
		'day': 'Tuesday'
	};
	$scope.tasks = [
		{'task': 'Go Fishing',
			'who': 'Bob',
			'when': 'Monday',
			'status': 'Not Started'} ,
		{'task' : 'Teach Class',
			'status': 'In Progress',
			'who': 'Paul',
			'when': 'Monday'}
	];
	$scope.$watch(function() {
		return ($scope.date.day == "Tuesday")
	}, function(newVal, oldVal) {
		$scope.tasks[0].who += " on Tuesday"
		// must converge within 10 digest cycle iterations
	})

	$scope.$watch('date.day', function(newVal, oldVal) {
		console.log(DEKAPaintFactory.getTodaysColor(newVal));
		// must converge within 10 digest cycle iterations
	})
})


//////////////////////////////////////////////////////////////

.constant('BASE_URL', 'http://example.com/')
.constant('PI', 3.14159)

// Don't do this!!!! It's valid, but against good practices.
.constant('PHONE_TYPES', ['Voice', 'Shoe'])
// Instead, a simple service...
.value('SharedData', {
	color: 'Chartreuse',
	flavor: 'Grape'
})

// Function often called recipies
.factory('utils', function ($http) {
	return {
		countChars: function (s) {
			return 17;
		},

		makeHttpRequest: function() {
			return {};
//			return $http.get(...);
		}
	}
})

.service('person', function() {
	this.congratulate = function () {

	}

	this.hairColor = function () {

	}
})

.factory('DEKAPaintFactory', function () {
	var colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Black', 'White'];
	var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

	return {
		getTodaysColor: function(day){
			var index = days.indexOf(day);

			if (index > -1) {
				return colors[days.indexOf(day)];
			} else {
				return colors[7];
			}
		}
	}
})
;

