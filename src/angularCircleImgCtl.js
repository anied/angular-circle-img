class circleImgCtl {
	constructor($scope) {

		"ngInject";

		this.wrapperStyle = function () { //seems like maybe this isn't the es6 way to do this?
			console.log('wrapperStyle');
			console.log($scope);
		};
	}

}

export default circleImgCtl;