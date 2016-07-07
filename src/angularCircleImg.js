export default function circleImg() {
	//TODO-- this could be more ES6-y -- use a class instead
	var directive = {};
	directive.restrict = 'E';
	directive.scope = {
		ciSrc : '@',
		ciDiameter : '@',
		ciAlt: '@'
	};
	directive.link = function (scope, elem, attrs) {
		console.log('directive.link');
	};

	directive.template = `
		<div class="ci-wrapper">
			<img src="{{ciSrc}}" alt="{{ciAlt}}">
		</div>
	`;

	directive.controller = "circleImgCtl as circleImgCtl";

	return directive;
}