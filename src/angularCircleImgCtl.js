class circleImgCtl {
	constructor($scope) {

		"ngInject";

		let vm = this;

		const BalanceXOptions = ['left', 'center', 'right'];
		const BalanceYOptions  = ['top', 'center', 'bottom'];

		if ( BalanceXOptions.indexOf($scope.ciBalanceX) === -1 ) { // if balance is omitted or malformed, we just assume 'center'
			$scope.ciBalanceX = 'center';
		}

		if ( BalanceYOptions.indexOf($scope.ciBalanceY) === -1 ) { // if balance is omitted or malformed, we just assume 'center'
			$scope.ciBalanceY = 'center';
		}

		vm.wrapperStyle = function () { //seems like maybe this isn't the es6 way to do this?
			const diameter = $scope.ciDiameter;
			const borderRadiusVal = diameter/2;
			return {
				'height': diameter.toString() + 'px',
				'width': diameter.toString() + 'px',
				'overflow': 'hidden',
				'border-radius': borderRadiusVal.toString() + 'px',
				'position': 'relative'
			};
		};

		vm.imgStyle = function () {
			let imgStyleObj = {};
			const nonCenterXFlag = $scope.ciBalanceX !== 'center'; // Flag stating the X value is not 'center'
			const nonCenterYFlag = $scope.ciBalanceY !== 'center'; // Flag stating the Y value is not 'center'

			imgStyleObj.position = 'absolute';		// position the image absolute

			if (nonCenterXFlag) {
				imgStyleObj[$scope.ciBalanceX] = 0;
			} else {
				const pos = ((-($scope.width/2)) + ($scope.ciDiameter/2))+ 'px';
				imgStyleObj.left = pos;
			}

			if (nonCenterYFlag) {
				imgStyleObj[$scope.ciBalanceY] = 0;
			} else {
				const pos = ((-($scope.height/2)) + ($scope.ciDiameter/2))+ 'px';
				imgStyleObj.top = pos;
			}

			return imgStyleObj;

		};
	}

}

export default circleImgCtl;