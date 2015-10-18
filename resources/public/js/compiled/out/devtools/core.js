// Compiled by ClojureScript 1.7.145 {}
goog.provide('devtools.core');
goog.require('cljs.core');
goog.require('devtools.format');
goog.require('devtools.prefs');
devtools.core._STAR_devtools_enabled_STAR_ = true;
devtools.core._STAR_sanitizer_enabled_STAR_ = true;
devtools.core._STAR_monitor_enabled_STAR_ = false;
devtools.core.formatter_key = "devtoolsFormatters";

/**
* @constructor
*/
devtools.core.CLJSDevtoolsFormatter = (function (){
})

devtools.core.CLJSDevtoolsFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

devtools.core.CLJSDevtoolsFormatter.cljs$lang$type = true;

devtools.core.CLJSDevtoolsFormatter.cljs$lang$ctorStr = "devtools.core/CLJSDevtoolsFormatter";

devtools.core.CLJSDevtoolsFormatter.cljs$lang$ctorPrWriter = (function (this__16930__auto__,writer__16931__auto__,opt__16932__auto__){
return cljs.core._write.call(null,writer__16931__auto__,"devtools.core/CLJSDevtoolsFormatter");
});

devtools.core.__GT_CLJSDevtoolsFormatter = (function devtools$core$__GT_CLJSDevtoolsFormatter(){
return (new devtools.core.CLJSDevtoolsFormatter());
});

devtools.core.find_fn_in_debug_ns = (function devtools$core$find_fn_in_debug_ns(fn_name){
try{return (window["devtools"]["debug"][fn_name]);
}catch (e24429){var _ = e24429;
return null;
}});
devtools.core.monitor_api_call_if_avail = (function devtools$core$monitor_api_call_if_avail(name,api_call,args){
var temp__4423__auto__ = devtools.core.find_fn_in_debug_ns.call(null,"monitor_api_call");
if(cljs.core.truth_(temp__4423__auto__)){
var monitor_api_call = temp__4423__auto__;
return monitor_api_call.call(null,name,api_call,args);
} else {
return cljs.core.apply.call(null,api_call,args);
}
});
devtools.core.log_exception_if_avail = (function devtools$core$log_exception_if_avail(var_args){
var args__17397__auto__ = [];
var len__17390__auto___24431 = arguments.length;
var i__17391__auto___24432 = (0);
while(true){
if((i__17391__auto___24432 < len__17390__auto___24431)){
args__17397__auto__.push((arguments[i__17391__auto___24432]));

var G__24433 = (i__17391__auto___24432 + (1));
i__17391__auto___24432 = G__24433;
continue;
} else {
}
break;
}

var argseq__17398__auto__ = ((((0) < args__17397__auto__.length))?(new cljs.core.IndexedSeq(args__17397__auto__.slice((0)),(0))):null);
return devtools.core.log_exception_if_avail.cljs$core$IFn$_invoke$arity$variadic(argseq__17398__auto__);
});

devtools.core.log_exception_if_avail.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var temp__4423__auto__ = devtools.core.find_fn_in_debug_ns.call(null,"log_exception");
if(cljs.core.truth_(temp__4423__auto__)){
var log_exception = temp__4423__auto__;
return cljs.core.apply.call(null,log_exception,args);
} else {
return null;
}
});

devtools.core.log_exception_if_avail.cljs$lang$maxFixedArity = (0);

devtools.core.log_exception_if_avail.cljs$lang$applyTo = (function (seq24430){
return devtools.core.log_exception_if_avail.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24430));
});
devtools.core.monitor_api_calls = (function devtools$core$monitor_api_calls(name,api_call){
return (function() { 
var G__24434__delegate = function (args){
if(cljs.core.not.call(null,devtools.core._STAR_monitor_enabled_STAR_)){
return cljs.core.apply.call(null,api_call,args);
} else {
return devtools.core.monitor_api_call_if_avail.call(null,name,api_call,args);
}
};
var G__24434 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24435__i = 0, G__24435__a = new Array(arguments.length -  0);
while (G__24435__i < G__24435__a.length) {G__24435__a[G__24435__i] = arguments[G__24435__i + 0]; ++G__24435__i;}
  args = new cljs.core.IndexedSeq(G__24435__a,0);
} 
return G__24434__delegate.call(this,args);};
G__24434.cljs$lang$maxFixedArity = 0;
G__24434.cljs$lang$applyTo = (function (arglist__24436){
var args = cljs.core.seq(arglist__24436);
return G__24434__delegate(args);
});
G__24434.cljs$core$IFn$_invoke$arity$variadic = G__24434__delegate;
return G__24434;
})()
;
});
devtools.core.sanitize = (function devtools$core$sanitize(name,api_call){
return (function() { 
var G__24439__delegate = function (args){
if(cljs.core.not.call(null,devtools.core._STAR_sanitizer_enabled_STAR_)){
return cljs.core.apply.call(null,api_call,args);
} else {
try{return cljs.core.apply.call(null,api_call,args);
}catch (e24438){var e = e24438;
devtools.core.log_exception_if_avail.call(null,[cljs.core.str(name),cljs.core.str(": "),cljs.core.str(e)].join(''));

return null;
}}
};
var G__24439 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24440__i = 0, G__24440__a = new Array(arguments.length -  0);
while (G__24440__i < G__24440__a.length) {G__24440__a[G__24440__i] = arguments[G__24440__i + 0]; ++G__24440__i;}
  args = new cljs.core.IndexedSeq(G__24440__a,0);
} 
return G__24439__delegate.call(this,args);};
G__24439.cljs$lang$maxFixedArity = 0;
G__24439.cljs$lang$applyTo = (function (arglist__24441){
var args = cljs.core.seq(arglist__24441);
return G__24439__delegate(args);
});
G__24439.cljs$core$IFn$_invoke$arity$variadic = G__24439__delegate;
return G__24439;
})()
;
});
devtools.core.build_cljs_formatter = (function devtools$core$build_cljs_formatter(){
var wrap = (function (name,api_call){
var monitor = cljs.core.partial.call(null,devtools.core.monitor_api_calls,name);
var sanitizer = cljs.core.partial.call(null,devtools.core.sanitize,name);
cljs.core.comp.call(null,monitor,sanitizer).call(null,api_call);

return api_call;
});
var formatter = (new devtools.core.CLJSDevtoolsFormatter());
var define_BANG_ = ((function (wrap,formatter){
return (function (name,fn){
return (formatter[name] = wrap.call(null,name,fn));
});})(wrap,formatter))
;
define_BANG_.call(null,"header",devtools.format.header_api_call);

define_BANG_.call(null,"hasBody",devtools.format.has_body_api_call);

define_BANG_.call(null,"body",devtools.format.body_api_call);

return formatter;
});
devtools.core.is_ours_QMARK_ = (function devtools$core$is_ours_QMARK_(o){
return (o instanceof devtools.core.CLJSDevtoolsFormatter);
});
devtools.core.get_formatters_safe = (function devtools$core$get_formatters_safe(){
var formatters = (window[devtools.core.formatter_key]);
if(cljs.core.array_QMARK_.call(null,formatters)){
return formatters;
} else {
return [];
}
});
devtools.core.installed_QMARK_ = (function devtools$core$installed_QMARK_(){
var formatters = devtools.core.get_formatters_safe.call(null);
return cljs.core.boolean$.call(null,cljs.core.some.call(null,devtools.core.is_ours_QMARK_,formatters));
});
devtools.core.install_our_formatter_BANG_ = (function devtools$core$install_our_formatter_BANG_(formatter){
var formatters = devtools.core.get_formatters_safe.call(null).slice();
formatters.push(formatter);

return (window[devtools.core.formatter_key] = formatters);
});
devtools.core.uninstall_our_formatters_BANG_ = (function devtools$core$uninstall_our_formatters_BANG_(){
var new_formatters = cljs.core.remove.call(null,devtools.core.is_ours_QMARK_,cljs.core.vec.call(null,devtools.core.get_formatters_safe.call(null)));
var new_formatters_js = ((cljs.core.empty_QMARK_.call(null,new_formatters))?null:cljs.core.into_array.call(null,new_formatters));
return (window[devtools.core.formatter_key] = new_formatters_js);
});
devtools.core.install_BANG_ = (function devtools$core$install_BANG_(){
if(cljs.core.truth_(devtools.core.installed_QMARK_.call(null))){
return console.warn("install!: devtools already installed - nothing to do");
} else {
return devtools.core.install_our_formatter_BANG_.call(null,devtools.core.build_cljs_formatter.call(null));
}
});
devtools.core.uninstall_BANG_ = (function devtools$core$uninstall_BANG_(){
if(cljs.core.not.call(null,devtools.core.installed_QMARK_.call(null))){
return console.warn("uninstall!: devtools not installed - nothing to do");
} else {
return devtools.core.uninstall_our_formatters_BANG_.call(null);
}
});
devtools.core.disable_BANG_ = (function devtools$core$disable_BANG_(){
return devtools.core._STAR_devtools_enabled_STAR_ = false;
});
devtools.core.enable_BANG_ = (function devtools$core$enable_BANG_(){
return devtools.core._STAR_devtools_enabled_STAR_ = true;
});
devtools.core.set_prefs_BANG_ = (function devtools$core$set_prefs_BANG_(new_prefs){
return devtools.prefs.set_prefs_BANG_.call(null,new_prefs);
});
devtools.core.get_prefs = (function devtools$core$get_prefs(){
return devtools.prefs.get_prefs.call(null);
});

//# sourceMappingURL=core.js.map?rel=1445124182150