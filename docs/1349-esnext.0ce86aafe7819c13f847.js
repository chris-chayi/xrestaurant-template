(self.webpackChunkrestaurantUi=self.webpackChunkrestaurantUi||[]).push([[1349],{1349:function(e,t,i){"use strict";i.r(t),i.d(t,{ion_picker_column_internal:function(){return l}});var n=i(31035),s=i(25466),r=i(44486),o=i(61240),a=i(17853);let l=class{constructor(e){(0,n.r)(this,e),this.ionChange=(0,n.e)(this,"ionChange",7),this.hapticsStarted=!1,this.isActive=!1,this.items=[],this.color="primary",this.numericInput=!1,this.centerPickerItemInView=(e,t=!0)=>{this.el.scroll({top:e.offsetTop-3*e.clientHeight+e.clientHeight/2,left:0,behavior:t?"smooth":void 0})},this.inputModeChange=e=>{if(!this.numericInput)return;const{inputMode:t,inputModeColumn:i}=e.detail;this.isActive=!(!t||void 0!==i&&i!==this.el)},this.initializeScrollListener=()=>{const{el:e}=this;let t,i=this.activeItem;const n=()=>{(0,r.r)(()=>{t&&(clearTimeout(t),t=void 0),this.hapticsStarted||((0,o.a)(),this.hapticsStarted=!0);const n=e.getBoundingClientRect(),s=e.shadowRoot.elementFromPoint(n.x+n.width/2,n.y+n.height/2);null!==i&&i.classList.remove(c),s!==i&&(0,o.b)(),i=s,s.classList.add(c),t=setTimeout(()=>{const e=s.getAttribute("data-index");if(null===e)return;const t=parseInt(e,10),i=this.items[t];i.value!==this.value&&(this.value=i.value,(0,o.h)(),this.hapticsStarted=!1)},250)})};(0,r.r)(()=>{e.addEventListener("scroll",n),this.destroyScrollListener=()=>{e.removeEventListener("scroll",n)}})}}valueChange(){const{items:e,value:t}=this;this.scrollActiveItemIntoView();const i=e.find(e=>e.value===t);i&&this.ionChange.emit(i)}componentWillLoad(){new IntersectionObserver(e=>{e[0].isIntersecting?(this.scrollActiveItemIntoView(),this.initializeScrollListener()):this.destroyScrollListener&&(this.destroyScrollListener(),this.destroyScrollListener=void 0)},{threshold:.01}).observe(this.el);const e=this.el.closest("ion-picker-internal");null!==e&&e.addEventListener("ionInputModeChange",e=>this.inputModeChange(e))}scrollActiveItemIntoView(){const e=this.activeItem;e&&(this.centerPickerItemInView(e,!1),e.classList.add(c))}get activeItem(){return(0,r.g)(this.el).querySelector(`.picker-item[data-value="${this.value}"]`)}render(){const{items:e,color:t,isActive:i,numericInput:r}=this,o=(0,s.b)(this);return(0,n.h)(n.H,{tabindex:0,class:(0,a.c)(t,{[o]:!0,"picker-column-active":i,"picker-column-numeric-input":r})},(0,n.h)("div",{class:"picker-item picker-item-empty"},"\xa0"),(0,n.h)("div",{class:"picker-item picker-item-empty"},"\xa0"),(0,n.h)("div",{class:"picker-item picker-item-empty"},"\xa0"),e.map((e,t)=>(0,n.h)("div",{class:"picker-item","data-value":e.value,"data-index":t,onClick:e=>{this.centerPickerItemInView(e.target)}},e.text)),(0,n.h)("div",{class:"picker-item picker-item-empty"},"\xa0"),(0,n.h)("div",{class:"picker-item picker-item-empty"},"\xa0"),(0,n.h)("div",{class:"picker-item picker-item-empty"},"\xa0"))}get el(){return(0,n.i)(this)}static get watchers(){return{value:["valueChange"]}}};const c="picker-item-active";l.style={ios:":host{padding-left:16px;padding-right:16px;padding-top:0px;padding-bottom:0px;height:200px;outline:none;font-size:22px;-webkit-scroll-snap-type:y mandatory;-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory;overflow-x:hidden;overflow-y:scroll;scrollbar-width:none;text-align:center}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}:host::-webkit-scrollbar{display:none}:host .picker-item{height:34px;line-height:34px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;scroll-snap-align:center}:host .picker-item-empty{scroll-snap-align:none}:host(.picker-column-active) .picker-item.picker-item-active{color:var(--ion-color-base)}@media (any-hover: hover){:host(:focus){outline:none;background:rgba(var(--ion-color-base-rgb), 0.2)}}",md:":host{padding-left:16px;padding-right:16px;padding-top:0px;padding-bottom:0px;height:200px;outline:none;font-size:22px;-webkit-scroll-snap-type:y mandatory;-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory;overflow-x:hidden;overflow-y:scroll;scrollbar-width:none;text-align:center}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}:host::-webkit-scrollbar{display:none}:host .picker-item{height:34px;line-height:34px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;scroll-snap-align:center}:host .picker-item-empty{scroll-snap-align:none}:host(.picker-column-active) .picker-item.picker-item-active{color:var(--ion-color-base)}@media (any-hover: hover){:host(:focus){outline:none;background:rgba(var(--ion-color-base-rgb), 0.2)}}:host .picker-item-active{color:var(--ion-color-base)}"}}}]);