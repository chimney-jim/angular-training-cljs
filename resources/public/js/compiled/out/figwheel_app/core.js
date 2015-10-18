// Compiled by ClojureScript 1.7.145 {}
goog.provide('figwheel_app.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.core.async');
goog.require('cljs_http.client');
goog.require('cognitect.transit');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Edits to this text should show up in your developer console.");
if(typeof figwheel_app.core.app_state !== 'undefined'){
} else {
figwheel_app.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"username","username",1605666410),null,new cljs.core.Keyword(null,"is-authenticated","is-authenticated",-1486996910),false,new cljs.core.Keyword(null,"tasks","tasks",-1754368880),null], null));
}
figwheel_app.core.login = (function figwheel_app$core$login(username){
var c__19428__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19428__auto__){
return (function (){
var f__19429__auto__ = (function (){var switch__19407__auto__ = ((function (c__19428__auto__){
return (function (state_21381){
var state_val_21382 = (state_21381[(1)]);
if((state_val_21382 === (1))){
var inst_21369 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_21370 = [false];
var inst_21371 = cljs.core.PersistentHashMap.fromArrays(inst_21369,inst_21370);
var inst_21372 = cljs_http.client.get.call(null,"http://ngcourse.herokuapp.com/api/v1/tasks",inst_21371);
var state_21381__$1 = state_21381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21381__$1,(2),inst_21372);
} else {
if((state_val_21382 === (2))){
var inst_21374 = (state_21381[(2)]);
var inst_21375 = cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570));
var inst_21376 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_21374);
var inst_21377 = cognitect.transit.read.call(null,inst_21375,inst_21376);
var inst_21378 = (function (){var response = inst_21374;
var r = inst_21375;
var tasks = inst_21377;
return ((function (response,r,tasks,inst_21374,inst_21375,inst_21376,inst_21377,state_val_21382,c__19428__auto__){
return (function (p1__21347_SHARP_){
return cljs.core.merge.call(null,p1__21347_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"username","username",1605666410),username,new cljs.core.Keyword(null,"is-authenticated","is-authenticated",-1486996910),true,new cljs.core.Keyword(null,"tasks","tasks",-1754368880),tasks], null));
});
;})(response,r,tasks,inst_21374,inst_21375,inst_21376,inst_21377,state_val_21382,c__19428__auto__))
})();
var inst_21379 = cljs.core.swap_BANG_.call(null,figwheel_app.core.app_state,inst_21378);
var state_21381__$1 = state_21381;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21381__$1,inst_21379);
} else {
return null;
}
}
});})(c__19428__auto__))
;
return ((function (switch__19407__auto__,c__19428__auto__){
return (function() {
var figwheel_app$core$login_$_state_machine__19408__auto__ = null;
var figwheel_app$core$login_$_state_machine__19408__auto____0 = (function (){
var statearr_21386 = [null,null,null,null,null,null,null];
(statearr_21386[(0)] = figwheel_app$core$login_$_state_machine__19408__auto__);

(statearr_21386[(1)] = (1));

return statearr_21386;
});
var figwheel_app$core$login_$_state_machine__19408__auto____1 = (function (state_21381){
while(true){
var ret_value__19409__auto__ = (function (){try{while(true){
var result__19410__auto__ = switch__19407__auto__.call(null,state_21381);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19410__auto__;
}
break;
}
}catch (e21387){if((e21387 instanceof Object)){
var ex__19411__auto__ = e21387;
var statearr_21388_21390 = state_21381;
(statearr_21388_21390[(5)] = ex__19411__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21387;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19409__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21391 = state_21381;
state_21381 = G__21391;
continue;
} else {
return ret_value__19409__auto__;
}
break;
}
});
figwheel_app$core$login_$_state_machine__19408__auto__ = function(state_21381){
switch(arguments.length){
case 0:
return figwheel_app$core$login_$_state_machine__19408__auto____0.call(this);
case 1:
return figwheel_app$core$login_$_state_machine__19408__auto____1.call(this,state_21381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel_app$core$login_$_state_machine__19408__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel_app$core$login_$_state_machine__19408__auto____0;
figwheel_app$core$login_$_state_machine__19408__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel_app$core$login_$_state_machine__19408__auto____1;
return figwheel_app$core$login_$_state_machine__19408__auto__;
})()
;})(switch__19407__auto__,c__19428__auto__))
})();
var state__19430__auto__ = (function (){var statearr_21389 = f__19429__auto__.call(null);
(statearr_21389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19428__auto__);

return statearr_21389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19430__auto__);
});})(c__19428__auto__))
);

return c__19428__auto__;
});
figwheel_app.core.login_component = (function figwheel_app$core$login_component(){
var username = reagent.core.atom.call(null,"");
var password = reagent.core.atom.call(null,"");
return ((function (username,password){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"ngCourse App"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Enter username"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,username),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (username,password){
return (function (p1__21392_SHARP_){
return cljs.core.reset_BANG_.call(null,username,p1__21392_SHARP_.target.value);
});})(username,password))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Password"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,password),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (username,password){
return (function (p1__21393_SHARP_){
return cljs.core.reset_BANG_.call(null,password,p1__21393_SHARP_.target.value);
});})(username,password))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (username,password){
return (function (){
return figwheel_app.core.login.call(null,cljs.core.deref.call(null,username));
});})(username,password))
], null),"Login"], null)], null);
});
;})(username,password))
});
figwheel_app.core.task_component = (function figwheel_app$core$task_component(task){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.get.call(null,task,"owner")," | ",cljs.core.get.call(null,task,"description")], null);
});
figwheel_app.core.task_list_component = (function figwheel_app$core$task_list_component(username){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Hello, ",username,"!"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"You've got ",cljs.core.count.call(null,new cljs.core.Keyword(null,"tasks","tasks",-1754368880).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,figwheel_app.core.app_state)))," tasks"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.List.EMPTY;
})], null),"Add task"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__17104__auto__ = (function figwheel_app$core$task_list_component_$_iter__21398(s__21399){
return (new cljs.core.LazySeq(null,(function (){
var s__21399__$1 = s__21399;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__21399__$1);
if(temp__4425__auto__){
var s__21399__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21399__$2)){
var c__17102__auto__ = cljs.core.chunk_first.call(null,s__21399__$2);
var size__17103__auto__ = cljs.core.count.call(null,c__17102__auto__);
var b__21401 = cljs.core.chunk_buffer.call(null,size__17103__auto__);
if((function (){var i__21400 = (0);
while(true){
if((i__21400 < size__17103__auto__)){
var task = cljs.core._nth.call(null,c__17102__auto__,i__21400);
cljs.core.chunk_append.call(null,b__21401,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [figwheel_app.core.task_component,task], null)], null));

var G__21402 = (i__21400 + (1));
i__21400 = G__21402;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21401),figwheel_app$core$task_list_component_$_iter__21398.call(null,cljs.core.chunk_rest.call(null,s__21399__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21401),null);
}
} else {
var task = cljs.core.first.call(null,s__21399__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [figwheel_app.core.task_component,task], null)], null),figwheel_app$core$task_list_component_$_iter__21398.call(null,cljs.core.rest.call(null,s__21399__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17104__auto__.call(null,new cljs.core.Keyword(null,"tasks","tasks",-1754368880).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,figwheel_app.core.app_state)));
})()], null)], null)], null);
});
});
figwheel_app.core.main = (function figwheel_app$core$main(){
if(cljs.core.truth_(new cljs.core.Keyword(null,"is-authenticated","is-authenticated",-1486996910).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,figwheel_app.core.app_state)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [figwheel_app.core.task_list_component,new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,figwheel_app.core.app_state))], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [figwheel_app.core.login_component], null);
}
});
reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [figwheel_app.core.main], null),document.getElementById("app"));
figwheel_app.core.on_js_reload = (function figwheel_app$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1445131708311