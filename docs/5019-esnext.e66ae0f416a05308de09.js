(self.webpackChunkrestaurantUi=self.webpackChunkrestaurantUi||[]).push([[5019],{25019:function(t,e,n){"use strict";n.r(e),n.d(e,{createSwipeBackGesture:function(){return s}});var r=n(44486),a=n(44751);n(67286);const s=(t,e,n,s,i)=>{const c=t.ownerDocument.defaultView;return(0,a.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:t=>t.startX<=50&&e(),onStart:n,onMove:t=>{s(t.deltaX/c.innerWidth)},onEnd:t=>{const e=c.innerWidth,n=t.deltaX/e,a=t.velocityX,s=a>=0&&(a>.2||t.deltaX>e/2),o=(s?1-n:n)*e;let u=0;if(o>5){const t=o/Math.abs(a);u=Math.min(t,540)}i(s,n<=0?.01:(0,r.k)(0,n,.9999),u)}})}}}]);