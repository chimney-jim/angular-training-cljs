// Compiled by ClojureScript 1.7.145 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel_app.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__19565__delegate = function (x){
if(cljs.core.truth_(figwheel_app.core.on_js_reload)){
return cljs.core.apply.call(null,figwheel_app.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'figwheel-app.core/on-js-reload' is missing");
}
};
var G__19565 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__19566__i = 0, G__19566__a = new Array(arguments.length -  0);
while (G__19566__i < G__19566__a.length) {G__19566__a[G__19566__i] = arguments[G__19566__i + 0]; ++G__19566__i;}
  x = new cljs.core.IndexedSeq(G__19566__a,0);
} 
return G__19565__delegate.call(this,x);};
G__19565.cljs$lang$maxFixedArity = 0;
G__19565.cljs$lang$applyTo = (function (arglist__19567){
var x = cljs.core.seq(arglist__19567);
return G__19565__delegate(x);
});
G__19565.cljs$core$IFn$_invoke$arity$variadic = G__19565__delegate;
return G__19565;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1445131097750