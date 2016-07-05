(function () {
	angular.module('angularCircleImgModule', []);
})();


(function () {

	console.log('defining the directive');

	function circleImg() {
		var directive = {};
		directive.restrict = 'E';
		directive.link = function (scope, elem, attrs) {
			console.log('it worked!');
		};
		return directive;
	}

	angular.module('angularCircleImgModule')
		.directive('circleImg', circleImg);


})();