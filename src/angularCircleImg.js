export default function circleImg() {
	//TODO-- this could be more ES6-y -- use a class instead
	let directive = {};
	directive.restrict = 'E';
	directive.scope = {
		ciSrc : '@',
		ciDiameter : '@',
		ciAlt: '@'
	};
	directive.link = function (scope, elem, attrs) {
		let docfrag = document.createDocumentFragment();
		let testImg = document.createElement("img");

		testImg.src = scope.ciSrc;

		testImg.style.position = 'absolute';
	    testImg.style.opacity = 0;
	    testImg.style.top = 0;
	    testImg.style.left = 0;

		docfrag.appendChild(testImg);

		document.body.appendChild(docfrag);
	};

	directive.template = `
		<div class="ci-wrapper" ng-style="{{circleImgCtl.wrapperStyle()}}">
			<img src="{{ciSrc}}" alt="{{ciAlt}}">
		</div>
	`;

	directive.controller = "circleImgCtl as circleImgCtl";

	return directive;
}