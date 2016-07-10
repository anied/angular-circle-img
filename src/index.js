import app from './app';
import circleImgDirective from './angularCircleImg';
import circleImgCtl from './angularCircleImgCtl';

app
.directive('circleImg', circleImgDirective)
.controller('circleImgCtl', circleImgCtl);