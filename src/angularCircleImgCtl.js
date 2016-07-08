class circleImgCtl {
	constructor($scope) {

		"ngInject";

		let vm = this;

		vm.wrapperStyle = function () { //seems like maybe this isn't the es6 way to do this?
			const diameter = $scope.ciDiameter;
			const borderRadiusVal = diameter/2;
			return {
				'height': diameter.toString() + 'px',
				'width': diameter.toString() + 'px',
				'overflow': 'hidden',
				'border-radius': borderRadiusVal.toString() + 'px'
			};
		};
	}

}

export default circleImgCtl;