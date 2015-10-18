// Compiled by ClojureScript 1.7.145 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__28069 = cljs.core._EQ_;
var expr__28070 = (function (){var or__16332__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16332__auto__)){
return or__16332__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__28069.call(null,"true",expr__28070))){
return true;
} else {
if(cljs.core.truth_(pred__28069.call(null,"false",expr__28070))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__28070)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__28072__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28072 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28073__i = 0, G__28073__a = new Array(arguments.length -  0);
while (G__28073__i < G__28073__a.length) {G__28073__a[G__28073__i] = arguments[G__28073__i + 0]; ++G__28073__i;}
  args = new cljs.core.IndexedSeq(G__28073__a,0);
} 
return G__28072__delegate.call(this,args);};
G__28072.cljs$lang$maxFixedArity = 0;
G__28072.cljs$lang$applyTo = (function (arglist__28074){
var args = cljs.core.seq(arglist__28074);
return G__28072__delegate(args);
});
G__28072.cljs$core$IFn$_invoke$arity$variadic = G__28072__delegate;
return G__28072;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__28075){
var map__28078 = p__28075;
var map__28078__$1 = ((((!((map__28078 == null)))?((((map__28078.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28078.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28078):map__28078);
var message = cljs.core.get.call(null,map__28078__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__28078__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16332__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16332__auto__)){
return or__16332__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16320__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16320__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16320__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__19757__auto___28240 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19757__auto___28240,ch){
return (function (){
var f__19758__auto__ = (function (){var switch__19692__auto__ = ((function (c__19757__auto___28240,ch){
return (function (state_28209){
var state_val_28210 = (state_28209[(1)]);
if((state_val_28210 === (7))){
var inst_28205 = (state_28209[(2)]);
var state_28209__$1 = state_28209;
var statearr_28211_28241 = state_28209__$1;
(statearr_28211_28241[(2)] = inst_28205);

(statearr_28211_28241[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28210 === (1))){
var state_28209__$1 = state_28209;
var statearr_28212_28242 = state_28209__$1;
(statearr_28212_28242[(2)] = null);

(statearr_28212_28242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28210 === (4))){
var inst_28162 = (state_28209[(7)]);
var inst_28162__$1 = (state_28209[(2)]);
var state_28209__$1 = (function (){var statearr_28213 = state_28209;
(statearr_28213[(7)] = inst_28162__$1);

return statearr_28213;
})();
if(cljs.core.truth_(inst_28162__$1)){
var statearr_28214_28243 = state_28209__$1;
(statearr_28214_28243[(1)] = (5));

} else {
var statearr_28215_28244 = state_28209__$1;
(statearr_28215_28244[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28210 === (15))){
var inst_28169 = (state_28209[(8)]);
var inst_28184 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28169);
var inst_28185 = cljs.core.first.call(null,inst_28184);
var inst_28186 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_28185);
var inst_28187 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_28186)].join('');
var inst_28188 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_28187);
var state_28209__$1 = state_28209;
var statearr_28216_28245 = state_28209__$1;
(statearr_28216_28245[(2)] = inst_28188);

(statearr_28216_28245[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28210 === (13))){
var inst_28193 = (state_28209[(2)]);
var state_28209__$1 = state_28209;
var statearr_28217_28246 = state_28209__$1;
(statearr_28217_28246[(2)] = inst_28193);

(statearr_28217_28246[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28210 === (6))){
var state_28209__$1 = state_28209;
var statearr_28218_28247 = state_28209__$1;
(statearr_28218_28247[(2)] = null);

(statearr_28218_28247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28210 === (17))){
var inst_28191 = (state_28209[(2)]);
var state_28209__$1 = state_28209;
var statearr_28219_28248 = state_28209__$1;
(statearr_28219_28248[(2)] = inst_28191);

(statearr_28219_28248[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28210 === (3))){
var inst_28207 = (state_28209[(2)]);
var state_28209__$1 = state_28209;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28209__$1,inst_28207);
} else {
if((state_val_28210 === (12))){
var inst_28168 = (state_28209[(9)]);
var inst_28182 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_28168,opts);
var state_28209__$1 = state_28209;
if(cljs.core.truth_(inst_28182)){
var statearr_28220_28249 = state_28209__$1;
(statearr_28220_28249[(1)] = (15));

} else {
var statearr_28221_28250 = state_28209__$1;
(statearr_28221_28250[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28210 === (2))){
var state_28209__$1 = state_28209;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28209__$1,(4),ch);
} else {
if((state_val_28210 === (11))){
var inst_28169 = (state_28209[(8)]);
var inst_28174 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28175 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_28169);
var inst_28176 = cljs.core.async.timeout.call(null,(1000));
var inst_28177 = [inst_28175,inst_28176];
var inst_28178 = (new cljs.core.PersistentVector(null,2,(5),inst_28174,inst_28177,null));
var state_28209__$1 = state_28209;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28209__$1,(14),inst_28178);
} else {
if((state_val_28210 === (9))){
var inst_28169 = (state_28209[(8)]);
var inst_28195 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_28196 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28169);
var inst_28197 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28196);
var inst_28198 = [cljs.core.str("Not loading: "),cljs.core.str(inst_28197)].join('');
var inst_28199 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_28198);
var state_28209__$1 = (function (){var statearr_28222 = state_28209;
(statearr_28222[(10)] = inst_28195);

return statearr_28222;
})();
var statearr_28223_28251 = state_28209__$1;
(statearr_28223_28251[(2)] = inst_28199);

(statearr_28223_28251[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28210 === (5))){
var inst_28162 = (state_28209[(7)]);
var inst_28164 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_28165 = (new cljs.core.PersistentArrayMap(null,2,inst_28164,null));
var inst_28166 = (new cljs.core.PersistentHashSet(null,inst_28165,null));
var inst_28167 = figwheel.client.focus_msgs.call(null,inst_28166,inst_28162);
var inst_28168 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_28167);
var inst_28169 = cljs.core.first.call(null,inst_28167);
var inst_28170 = figwheel.client.autoload_QMARK_.call(null);
var state_28209__$1 = (function (){var statearr_28224 = state_28209;
(statearr_28224[(8)] = inst_28169);

(statearr_28224[(9)] = inst_28168);

return statearr_28224;
})();
if(cljs.core.truth_(inst_28170)){
var statearr_28225_28252 = state_28209__$1;
(statearr_28225_28252[(1)] = (8));

} else {
var statearr_28226_28253 = state_28209__$1;
(statearr_28226_28253[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28210 === (14))){
var inst_28180 = (state_28209[(2)]);
var state_28209__$1 = state_28209;
var statearr_28227_28254 = state_28209__$1;
(statearr_28227_28254[(2)] = inst_28180);

(statearr_28227_28254[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28210 === (16))){
var state_28209__$1 = state_28209;
var statearr_28228_28255 = state_28209__$1;
(statearr_28228_28255[(2)] = null);

(statearr_28228_28255[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28210 === (10))){
var inst_28201 = (state_28209[(2)]);
var state_28209__$1 = (function (){var statearr_28229 = state_28209;
(statearr_28229[(11)] = inst_28201);

return statearr_28229;
})();
var statearr_28230_28256 = state_28209__$1;
(statearr_28230_28256[(2)] = null);

(statearr_28230_28256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28210 === (8))){
var inst_28168 = (state_28209[(9)]);
var inst_28172 = figwheel.client.reload_file_state_QMARK_.call(null,inst_28168,opts);
var state_28209__$1 = state_28209;
if(cljs.core.truth_(inst_28172)){
var statearr_28231_28257 = state_28209__$1;
(statearr_28231_28257[(1)] = (11));

} else {
var statearr_28232_28258 = state_28209__$1;
(statearr_28232_28258[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19757__auto___28240,ch))
;
return ((function (switch__19692__auto__,c__19757__auto___28240,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19693__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19693__auto____0 = (function (){
var statearr_28236 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28236[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19693__auto__);

(statearr_28236[(1)] = (1));

return statearr_28236;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19693__auto____1 = (function (state_28209){
while(true){
var ret_value__19694__auto__ = (function (){try{while(true){
var result__19695__auto__ = switch__19692__auto__.call(null,state_28209);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19695__auto__;
}
break;
}
}catch (e28237){if((e28237 instanceof Object)){
var ex__19696__auto__ = e28237;
var statearr_28238_28259 = state_28209;
(statearr_28238_28259[(5)] = ex__19696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28209);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28237;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28260 = state_28209;
state_28209 = G__28260;
continue;
} else {
return ret_value__19694__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19693__auto__ = function(state_28209){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19693__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19693__auto____1.call(this,state_28209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19693__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19693__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19693__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19693__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19693__auto__;
})()
;})(switch__19692__auto__,c__19757__auto___28240,ch))
})();
var state__19759__auto__ = (function (){var statearr_28239 = f__19758__auto__.call(null);
(statearr_28239[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19757__auto___28240);

return statearr_28239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19759__auto__);
});})(c__19757__auto___28240,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__28261_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__28261_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_28268 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_28268){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_28266 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_28267 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_28266,_STAR_print_newline_STAR_28267,base_path_28268){
return (function() { 
var G__28269__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28269 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28270__i = 0, G__28270__a = new Array(arguments.length -  0);
while (G__28270__i < G__28270__a.length) {G__28270__a[G__28270__i] = arguments[G__28270__i + 0]; ++G__28270__i;}
  args = new cljs.core.IndexedSeq(G__28270__a,0);
} 
return G__28269__delegate.call(this,args);};
G__28269.cljs$lang$maxFixedArity = 0;
G__28269.cljs$lang$applyTo = (function (arglist__28271){
var args = cljs.core.seq(arglist__28271);
return G__28269__delegate(args);
});
G__28269.cljs$core$IFn$_invoke$arity$variadic = G__28269__delegate;
return G__28269;
})()
;})(_STAR_print_fn_STAR_28266,_STAR_print_newline_STAR_28267,base_path_28268))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28267;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28266;
}}catch (e28265){if((e28265 instanceof Error)){
var e = e28265;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_28268], null));
} else {
var e = e28265;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_28268))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__28272){
var map__28279 = p__28272;
var map__28279__$1 = ((((!((map__28279 == null)))?((((map__28279.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28279.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28279):map__28279);
var opts = map__28279__$1;
var build_id = cljs.core.get.call(null,map__28279__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__28279,map__28279__$1,opts,build_id){
return (function (p__28281){
var vec__28282 = p__28281;
var map__28283 = cljs.core.nth.call(null,vec__28282,(0),null);
var map__28283__$1 = ((((!((map__28283 == null)))?((((map__28283.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28283.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28283):map__28283);
var msg = map__28283__$1;
var msg_name = cljs.core.get.call(null,map__28283__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28282,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__28282,map__28283,map__28283__$1,msg,msg_name,_,map__28279,map__28279__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__28282,map__28283,map__28283__$1,msg,msg_name,_,map__28279,map__28279__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__28279,map__28279__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__28289){
var vec__28290 = p__28289;
var map__28291 = cljs.core.nth.call(null,vec__28290,(0),null);
var map__28291__$1 = ((((!((map__28291 == null)))?((((map__28291.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28291.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28291):map__28291);
var msg = map__28291__$1;
var msg_name = cljs.core.get.call(null,map__28291__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28290,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__28293){
var map__28303 = p__28293;
var map__28303__$1 = ((((!((map__28303 == null)))?((((map__28303.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28303.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28303):map__28303);
var on_compile_warning = cljs.core.get.call(null,map__28303__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__28303__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__28303,map__28303__$1,on_compile_warning,on_compile_fail){
return (function (p__28305){
var vec__28306 = p__28305;
var map__28307 = cljs.core.nth.call(null,vec__28306,(0),null);
var map__28307__$1 = ((((!((map__28307 == null)))?((((map__28307.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28307.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28307):map__28307);
var msg = map__28307__$1;
var msg_name = cljs.core.get.call(null,map__28307__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28306,(1));
var pred__28309 = cljs.core._EQ_;
var expr__28310 = msg_name;
if(cljs.core.truth_(pred__28309.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__28310))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__28309.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__28310))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__28303,map__28303__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19757__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19757__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19758__auto__ = (function (){var switch__19692__auto__ = ((function (c__19757__auto__,msg_hist,msg_names,msg){
return (function (state_28526){
var state_val_28527 = (state_28526[(1)]);
if((state_val_28527 === (7))){
var inst_28450 = (state_28526[(2)]);
var state_28526__$1 = state_28526;
if(cljs.core.truth_(inst_28450)){
var statearr_28528_28574 = state_28526__$1;
(statearr_28528_28574[(1)] = (8));

} else {
var statearr_28529_28575 = state_28526__$1;
(statearr_28529_28575[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28527 === (20))){
var inst_28520 = (state_28526[(2)]);
var state_28526__$1 = state_28526;
var statearr_28530_28576 = state_28526__$1;
(statearr_28530_28576[(2)] = inst_28520);

(statearr_28530_28576[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28527 === (27))){
var inst_28516 = (state_28526[(2)]);
var state_28526__$1 = state_28526;
var statearr_28531_28577 = state_28526__$1;
(statearr_28531_28577[(2)] = inst_28516);

(statearr_28531_28577[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28527 === (1))){
var inst_28443 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_28526__$1 = state_28526;
if(cljs.core.truth_(inst_28443)){
var statearr_28532_28578 = state_28526__$1;
(statearr_28532_28578[(1)] = (2));

} else {
var statearr_28533_28579 = state_28526__$1;
(statearr_28533_28579[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28527 === (24))){
var inst_28518 = (state_28526[(2)]);
var state_28526__$1 = state_28526;
var statearr_28534_28580 = state_28526__$1;
(statearr_28534_28580[(2)] = inst_28518);

(statearr_28534_28580[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28527 === (4))){
var inst_28524 = (state_28526[(2)]);
var state_28526__$1 = state_28526;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28526__$1,inst_28524);
} else {
if((state_val_28527 === (15))){
var inst_28522 = (state_28526[(2)]);
var state_28526__$1 = state_28526;
var statearr_28535_28581 = state_28526__$1;
(statearr_28535_28581[(2)] = inst_28522);

(statearr_28535_28581[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28527 === (21))){
var inst_28481 = (state_28526[(2)]);
var state_28526__$1 = state_28526;
var statearr_28536_28582 = state_28526__$1;
(statearr_28536_28582[(2)] = inst_28481);

(statearr_28536_28582[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28527 === (31))){
var inst_28505 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_28526__$1 = state_28526;
if(cljs.core.truth_(inst_28505)){
var statearr_28537_28583 = state_28526__$1;
(statearr_28537_28583[(1)] = (34));

} else {
var statearr_28538_28584 = state_28526__$1;
(statearr_28538_28584[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28527 === (32))){
var inst_28514 = (state_28526[(2)]);
var state_28526__$1 = state_28526;
var statearr_28539_28585 = state_28526__$1;
(statearr_28539_28585[(2)] = inst_28514);

(statearr_28539_28585[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28527 === (33))){
var inst_28503 = (state_28526[(2)]);
var state_28526__$1 = state_28526;
var statearr_28540_28586 = state_28526__$1;
(statearr_28540_28586[(2)] = inst_28503);

(statearr_28540_28586[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28527 === (13))){
var inst_28464 = figwheel.client.heads_up.clear.call(null);
var state_28526__$1 = state_28526;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28526__$1,(16),inst_28464);
} else {
if((state_val_28527 === (22))){
var inst_28485 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28486 = figwheel.client.heads_up.append_message.call(null,inst_28485);
var state_28526__$1 = state_28526;
var statearr_28541_28587 = state_28526__$1;
(statearr_28541_28587[(2)] = inst_28486);

(statearr_28541_28587[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28527 === (36))){
var inst_28512 = (state_28526[(2)]);
var state_28526__$1 = state_28526;
var statearr_28542_28588 = state_28526__$1;
(statearr_28542_28588[(2)] = inst_28512);

(statearr_28542_28588[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28527 === (29))){
var inst_28496 = (state_28526[(2)]);
var state_28526__$1 = state_28526;
var statearr_28543_28589 = state_28526__$1;
(statearr_28543_28589[(2)] = inst_28496);

(statearr_28543_28589[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28527 === (6))){
var inst_28445 = (state_28526[(7)]);
var state_28526__$1 = state_28526;
var statearr_28544_28590 = state_28526__$1;
(statearr_28544_28590[(2)] = inst_28445);

(statearr_28544_28590[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28527 === (28))){
var inst_28492 = (state_28526[(2)]);
var inst_28493 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28494 = figwheel.client.heads_up.display_warning.call(null,inst_28493);
var state_28526__$1 = (function (){var statearr_28545 = state_28526;
(statearr_28545[(8)] = inst_28492);

return statearr_28545;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28526__$1,(29),inst_28494);
} else {
if((state_val_28527 === (25))){
var inst_28490 = figwheel.client.heads_up.clear.call(null);
var state_28526__$1 = state_28526;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28526__$1,(28),inst_28490);
} else {
if((state_val_28527 === (34))){
var inst_28507 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28526__$1 = state_28526;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28526__$1,(37),inst_28507);
} else {
if((state_val_28527 === (17))){
var inst_28472 = (state_28526[(2)]);
var state_28526__$1 = state_28526;
var statearr_28546_28591 = state_28526__$1;
(statearr_28546_28591[(2)] = inst_28472);

(statearr_28546_28591[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28527 === (3))){
var inst_28462 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_28526__$1 = state_28526;
if(cljs.core.truth_(inst_28462)){
var statearr_28547_28592 = state_28526__$1;
(statearr_28547_28592[(1)] = (13));

} else {
var statearr_28548_28593 = state_28526__$1;
(statearr_28548_28593[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28527 === (12))){
var inst_28458 = (state_28526[(2)]);
var state_28526__$1 = state_28526;
var statearr_28549_28594 = state_28526__$1;
(statearr_28549_28594[(2)] = inst_28458);

(statearr_28549_28594[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28527 === (2))){
var inst_28445 = (state_28526[(7)]);
var inst_28445__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_28526__$1 = (function (){var statearr_28550 = state_28526;
(statearr_28550[(7)] = inst_28445__$1);

return statearr_28550;
})();
if(cljs.core.truth_(inst_28445__$1)){
var statearr_28551_28595 = state_28526__$1;
(statearr_28551_28595[(1)] = (5));

} else {
var statearr_28552_28596 = state_28526__$1;
(statearr_28552_28596[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28527 === (23))){
var inst_28488 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_28526__$1 = state_28526;
if(cljs.core.truth_(inst_28488)){
var statearr_28553_28597 = state_28526__$1;
(statearr_28553_28597[(1)] = (25));

} else {
var statearr_28554_28598 = state_28526__$1;
(statearr_28554_28598[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28527 === (35))){
var state_28526__$1 = state_28526;
var statearr_28555_28599 = state_28526__$1;
(statearr_28555_28599[(2)] = null);

(statearr_28555_28599[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28527 === (19))){
var inst_28483 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_28526__$1 = state_28526;
if(cljs.core.truth_(inst_28483)){
var statearr_28556_28600 = state_28526__$1;
(statearr_28556_28600[(1)] = (22));

} else {
var statearr_28557_28601 = state_28526__$1;
(statearr_28557_28601[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28527 === (11))){
var inst_28454 = (state_28526[(2)]);
var state_28526__$1 = state_28526;
var statearr_28558_28602 = state_28526__$1;
(statearr_28558_28602[(2)] = inst_28454);

(statearr_28558_28602[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28527 === (9))){
var inst_28456 = figwheel.client.heads_up.clear.call(null);
var state_28526__$1 = state_28526;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28526__$1,(12),inst_28456);
} else {
if((state_val_28527 === (5))){
var inst_28447 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_28526__$1 = state_28526;
var statearr_28559_28603 = state_28526__$1;
(statearr_28559_28603[(2)] = inst_28447);

(statearr_28559_28603[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28527 === (14))){
var inst_28474 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_28526__$1 = state_28526;
if(cljs.core.truth_(inst_28474)){
var statearr_28560_28604 = state_28526__$1;
(statearr_28560_28604[(1)] = (18));

} else {
var statearr_28561_28605 = state_28526__$1;
(statearr_28561_28605[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28527 === (26))){
var inst_28498 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_28526__$1 = state_28526;
if(cljs.core.truth_(inst_28498)){
var statearr_28562_28606 = state_28526__$1;
(statearr_28562_28606[(1)] = (30));

} else {
var statearr_28563_28607 = state_28526__$1;
(statearr_28563_28607[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28527 === (16))){
var inst_28466 = (state_28526[(2)]);
var inst_28467 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28468 = figwheel.client.format_messages.call(null,inst_28467);
var inst_28469 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28470 = figwheel.client.heads_up.display_error.call(null,inst_28468,inst_28469);
var state_28526__$1 = (function (){var statearr_28564 = state_28526;
(statearr_28564[(9)] = inst_28466);

return statearr_28564;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28526__$1,(17),inst_28470);
} else {
if((state_val_28527 === (30))){
var inst_28500 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28501 = figwheel.client.heads_up.display_warning.call(null,inst_28500);
var state_28526__$1 = state_28526;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28526__$1,(33),inst_28501);
} else {
if((state_val_28527 === (10))){
var inst_28460 = (state_28526[(2)]);
var state_28526__$1 = state_28526;
var statearr_28565_28608 = state_28526__$1;
(statearr_28565_28608[(2)] = inst_28460);

(statearr_28565_28608[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28527 === (18))){
var inst_28476 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28477 = figwheel.client.format_messages.call(null,inst_28476);
var inst_28478 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28479 = figwheel.client.heads_up.display_error.call(null,inst_28477,inst_28478);
var state_28526__$1 = state_28526;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28526__$1,(21),inst_28479);
} else {
if((state_val_28527 === (37))){
var inst_28509 = (state_28526[(2)]);
var state_28526__$1 = state_28526;
var statearr_28566_28609 = state_28526__$1;
(statearr_28566_28609[(2)] = inst_28509);

(statearr_28566_28609[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28527 === (8))){
var inst_28452 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28526__$1 = state_28526;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28526__$1,(11),inst_28452);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19757__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19692__auto__,c__19757__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19693__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19693__auto____0 = (function (){
var statearr_28570 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28570[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19693__auto__);

(statearr_28570[(1)] = (1));

return statearr_28570;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19693__auto____1 = (function (state_28526){
while(true){
var ret_value__19694__auto__ = (function (){try{while(true){
var result__19695__auto__ = switch__19692__auto__.call(null,state_28526);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19695__auto__;
}
break;
}
}catch (e28571){if((e28571 instanceof Object)){
var ex__19696__auto__ = e28571;
var statearr_28572_28610 = state_28526;
(statearr_28572_28610[(5)] = ex__19696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28526);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28571;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28611 = state_28526;
state_28526 = G__28611;
continue;
} else {
return ret_value__19694__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19693__auto__ = function(state_28526){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19693__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19693__auto____1.call(this,state_28526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19693__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19693__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19693__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19693__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19693__auto__;
})()
;})(switch__19692__auto__,c__19757__auto__,msg_hist,msg_names,msg))
})();
var state__19759__auto__ = (function (){var statearr_28573 = f__19758__auto__.call(null);
(statearr_28573[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19757__auto__);

return statearr_28573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19759__auto__);
});})(c__19757__auto__,msg_hist,msg_names,msg))
);

return c__19757__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19757__auto___28674 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19757__auto___28674,ch){
return (function (){
var f__19758__auto__ = (function (){var switch__19692__auto__ = ((function (c__19757__auto___28674,ch){
return (function (state_28657){
var state_val_28658 = (state_28657[(1)]);
if((state_val_28658 === (1))){
var state_28657__$1 = state_28657;
var statearr_28659_28675 = state_28657__$1;
(statearr_28659_28675[(2)] = null);

(statearr_28659_28675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28658 === (2))){
var state_28657__$1 = state_28657;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28657__$1,(4),ch);
} else {
if((state_val_28658 === (3))){
var inst_28655 = (state_28657[(2)]);
var state_28657__$1 = state_28657;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28657__$1,inst_28655);
} else {
if((state_val_28658 === (4))){
var inst_28645 = (state_28657[(7)]);
var inst_28645__$1 = (state_28657[(2)]);
var state_28657__$1 = (function (){var statearr_28660 = state_28657;
(statearr_28660[(7)] = inst_28645__$1);

return statearr_28660;
})();
if(cljs.core.truth_(inst_28645__$1)){
var statearr_28661_28676 = state_28657__$1;
(statearr_28661_28676[(1)] = (5));

} else {
var statearr_28662_28677 = state_28657__$1;
(statearr_28662_28677[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28658 === (5))){
var inst_28645 = (state_28657[(7)]);
var inst_28647 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_28645);
var state_28657__$1 = state_28657;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28657__$1,(8),inst_28647);
} else {
if((state_val_28658 === (6))){
var state_28657__$1 = state_28657;
var statearr_28663_28678 = state_28657__$1;
(statearr_28663_28678[(2)] = null);

(statearr_28663_28678[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28658 === (7))){
var inst_28653 = (state_28657[(2)]);
var state_28657__$1 = state_28657;
var statearr_28664_28679 = state_28657__$1;
(statearr_28664_28679[(2)] = inst_28653);

(statearr_28664_28679[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28658 === (8))){
var inst_28649 = (state_28657[(2)]);
var state_28657__$1 = (function (){var statearr_28665 = state_28657;
(statearr_28665[(8)] = inst_28649);

return statearr_28665;
})();
var statearr_28666_28680 = state_28657__$1;
(statearr_28666_28680[(2)] = null);

(statearr_28666_28680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__19757__auto___28674,ch))
;
return ((function (switch__19692__auto__,c__19757__auto___28674,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19693__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19693__auto____0 = (function (){
var statearr_28670 = [null,null,null,null,null,null,null,null,null];
(statearr_28670[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19693__auto__);

(statearr_28670[(1)] = (1));

return statearr_28670;
});
var figwheel$client$heads_up_plugin_$_state_machine__19693__auto____1 = (function (state_28657){
while(true){
var ret_value__19694__auto__ = (function (){try{while(true){
var result__19695__auto__ = switch__19692__auto__.call(null,state_28657);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19695__auto__;
}
break;
}
}catch (e28671){if((e28671 instanceof Object)){
var ex__19696__auto__ = e28671;
var statearr_28672_28681 = state_28657;
(statearr_28672_28681[(5)] = ex__19696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28657);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28671;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28682 = state_28657;
state_28657 = G__28682;
continue;
} else {
return ret_value__19694__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19693__auto__ = function(state_28657){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19693__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19693__auto____1.call(this,state_28657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19693__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19693__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19693__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19693__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19693__auto__;
})()
;})(switch__19692__auto__,c__19757__auto___28674,ch))
})();
var state__19759__auto__ = (function (){var statearr_28673 = f__19758__auto__.call(null);
(statearr_28673[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19757__auto___28674);

return statearr_28673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19759__auto__);
});})(c__19757__auto___28674,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__19757__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19757__auto__){
return (function (){
var f__19758__auto__ = (function (){var switch__19692__auto__ = ((function (c__19757__auto__){
return (function (state_28703){
var state_val_28704 = (state_28703[(1)]);
if((state_val_28704 === (1))){
var inst_28698 = cljs.core.async.timeout.call(null,(3000));
var state_28703__$1 = state_28703;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28703__$1,(2),inst_28698);
} else {
if((state_val_28704 === (2))){
var inst_28700 = (state_28703[(2)]);
var inst_28701 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_28703__$1 = (function (){var statearr_28705 = state_28703;
(statearr_28705[(7)] = inst_28700);

return statearr_28705;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28703__$1,inst_28701);
} else {
return null;
}
}
});})(c__19757__auto__))
;
return ((function (switch__19692__auto__,c__19757__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19693__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19693__auto____0 = (function (){
var statearr_28709 = [null,null,null,null,null,null,null,null];
(statearr_28709[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19693__auto__);

(statearr_28709[(1)] = (1));

return statearr_28709;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19693__auto____1 = (function (state_28703){
while(true){
var ret_value__19694__auto__ = (function (){try{while(true){
var result__19695__auto__ = switch__19692__auto__.call(null,state_28703);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19695__auto__;
}
break;
}
}catch (e28710){if((e28710 instanceof Object)){
var ex__19696__auto__ = e28710;
var statearr_28711_28713 = state_28703;
(statearr_28711_28713[(5)] = ex__19696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28703);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28710;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28714 = state_28703;
state_28703 = G__28714;
continue;
} else {
return ret_value__19694__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19693__auto__ = function(state_28703){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19693__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19693__auto____1.call(this,state_28703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19693__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19693__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19693__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19693__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19693__auto__;
})()
;})(switch__19692__auto__,c__19757__auto__))
})();
var state__19759__auto__ = (function (){var statearr_28712 = f__19758__auto__.call(null);
(statearr_28712[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19757__auto__);

return statearr_28712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19759__auto__);
});})(c__19757__auto__))
);

return c__19757__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__28715){
var map__28722 = p__28715;
var map__28722__$1 = ((((!((map__28722 == null)))?((((map__28722.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28722.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28722):map__28722);
var ed = map__28722__$1;
var formatted_exception = cljs.core.get.call(null,map__28722__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__28722__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__28722__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__28724_28728 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__28725_28729 = null;
var count__28726_28730 = (0);
var i__28727_28731 = (0);
while(true){
if((i__28727_28731 < count__28726_28730)){
var msg_28732 = cljs.core._nth.call(null,chunk__28725_28729,i__28727_28731);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28732);

var G__28733 = seq__28724_28728;
var G__28734 = chunk__28725_28729;
var G__28735 = count__28726_28730;
var G__28736 = (i__28727_28731 + (1));
seq__28724_28728 = G__28733;
chunk__28725_28729 = G__28734;
count__28726_28730 = G__28735;
i__28727_28731 = G__28736;
continue;
} else {
var temp__4425__auto___28737 = cljs.core.seq.call(null,seq__28724_28728);
if(temp__4425__auto___28737){
var seq__28724_28738__$1 = temp__4425__auto___28737;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28724_28738__$1)){
var c__17135__auto___28739 = cljs.core.chunk_first.call(null,seq__28724_28738__$1);
var G__28740 = cljs.core.chunk_rest.call(null,seq__28724_28738__$1);
var G__28741 = c__17135__auto___28739;
var G__28742 = cljs.core.count.call(null,c__17135__auto___28739);
var G__28743 = (0);
seq__28724_28728 = G__28740;
chunk__28725_28729 = G__28741;
count__28726_28730 = G__28742;
i__28727_28731 = G__28743;
continue;
} else {
var msg_28744 = cljs.core.first.call(null,seq__28724_28738__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28744);

var G__28745 = cljs.core.next.call(null,seq__28724_28738__$1);
var G__28746 = null;
var G__28747 = (0);
var G__28748 = (0);
seq__28724_28728 = G__28745;
chunk__28725_28729 = G__28746;
count__28726_28730 = G__28747;
i__28727_28731 = G__28748;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__28749){
var map__28752 = p__28749;
var map__28752__$1 = ((((!((map__28752 == null)))?((((map__28752.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28752.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28752):map__28752);
var w = map__28752__$1;
var message = cljs.core.get.call(null,map__28752__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16320__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16320__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16320__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__28760 = cljs.core.seq.call(null,plugins);
var chunk__28761 = null;
var count__28762 = (0);
var i__28763 = (0);
while(true){
if((i__28763 < count__28762)){
var vec__28764 = cljs.core._nth.call(null,chunk__28761,i__28763);
var k = cljs.core.nth.call(null,vec__28764,(0),null);
var plugin = cljs.core.nth.call(null,vec__28764,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28766 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28760,chunk__28761,count__28762,i__28763,pl_28766,vec__28764,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_28766.call(null,msg_hist);
});})(seq__28760,chunk__28761,count__28762,i__28763,pl_28766,vec__28764,k,plugin))
);
} else {
}

var G__28767 = seq__28760;
var G__28768 = chunk__28761;
var G__28769 = count__28762;
var G__28770 = (i__28763 + (1));
seq__28760 = G__28767;
chunk__28761 = G__28768;
count__28762 = G__28769;
i__28763 = G__28770;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28760);
if(temp__4425__auto__){
var seq__28760__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28760__$1)){
var c__17135__auto__ = cljs.core.chunk_first.call(null,seq__28760__$1);
var G__28771 = cljs.core.chunk_rest.call(null,seq__28760__$1);
var G__28772 = c__17135__auto__;
var G__28773 = cljs.core.count.call(null,c__17135__auto__);
var G__28774 = (0);
seq__28760 = G__28771;
chunk__28761 = G__28772;
count__28762 = G__28773;
i__28763 = G__28774;
continue;
} else {
var vec__28765 = cljs.core.first.call(null,seq__28760__$1);
var k = cljs.core.nth.call(null,vec__28765,(0),null);
var plugin = cljs.core.nth.call(null,vec__28765,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28775 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28760,chunk__28761,count__28762,i__28763,pl_28775,vec__28765,k,plugin,seq__28760__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_28775.call(null,msg_hist);
});})(seq__28760,chunk__28761,count__28762,i__28763,pl_28775,vec__28765,k,plugin,seq__28760__$1,temp__4425__auto__))
);
} else {
}

var G__28776 = cljs.core.next.call(null,seq__28760__$1);
var G__28777 = null;
var G__28778 = (0);
var G__28779 = (0);
seq__28760 = G__28776;
chunk__28761 = G__28777;
count__28762 = G__28778;
i__28763 = G__28779;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args28780 = [];
var len__17390__auto___28783 = arguments.length;
var i__17391__auto___28784 = (0);
while(true){
if((i__17391__auto___28784 < len__17390__auto___28783)){
args28780.push((arguments[i__17391__auto___28784]));

var G__28785 = (i__17391__auto___28784 + (1));
i__17391__auto___28784 = G__28785;
continue;
} else {
}
break;
}

var G__28782 = args28780.length;
switch (G__28782) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28780.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17397__auto__ = [];
var len__17390__auto___28791 = arguments.length;
var i__17391__auto___28792 = (0);
while(true){
if((i__17391__auto___28792 < len__17390__auto___28791)){
args__17397__auto__.push((arguments[i__17391__auto___28792]));

var G__28793 = (i__17391__auto___28792 + (1));
i__17391__auto___28792 = G__28793;
continue;
} else {
}
break;
}

var argseq__17398__auto__ = ((((0) < args__17397__auto__.length))?(new cljs.core.IndexedSeq(args__17397__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17398__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__28788){
var map__28789 = p__28788;
var map__28789__$1 = ((((!((map__28789 == null)))?((((map__28789.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28789.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28789):map__28789);
var opts = map__28789__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq28787){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28787));
});

//# sourceMappingURL=client.js.map?rel=1445124185081