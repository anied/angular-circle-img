export default function circleImg() {
	var directive = {};
	directive.restrict = 'E';
	directive.scope = {
		ciSrc : '@',
		ciDiameter : '@'
	};
	directive.link = function (scope, elem, attrs) {
		console.log('it worked!');
	};
	return directive;
}