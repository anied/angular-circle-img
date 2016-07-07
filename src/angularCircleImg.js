export default function circleImg() {
	var directive = {};
	directive.restrict = 'E';
	directive.scope = {
		ciSrc : '@',
		ciDiameter : '@',
		ciAlt: '@'
	};
	directive.link = function (scope, elem, attrs) {
		console.log('it worked!');
	};

	directive.template = `
		<div class="ci-wrapper">
			<img src="{{ciSrc}}" alt="{{ciAlt}}">
		</div>
	`;

	return directive;
}