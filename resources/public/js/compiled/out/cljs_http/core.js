// Compiled by ClojureScript 1.7.145 {}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.EventType');
goog.require('cljs.core.async');
goog.require('cljs_http.util');
goog.require('goog.net.Jsonp');
goog.require('clojure.string');
goog.require('goog.net.XhrIo');
cljs_http.core.pending_requests = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__4425__auto__ = cljs.core.deref.call(null,cljs_http.core.pending_requests).call(null,channel);
if(cljs.core.truth_(temp__4425__auto__)){
var req = temp__4425__auto__;
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_.call(null,channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.call(null,xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var seq__25056 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs_http.util.camelize,cljs.core.keys.call(null,headers)));
var chunk__25061 = null;
var count__25062 = (0);
var i__25063 = (0);
while(true){
if((i__25063 < count__25062)){
var h_name = cljs.core._nth.call(null,chunk__25061,i__25063);
var seq__25064_25068 = cljs.core.seq.call(null,cljs.core.vals.call(null,headers));
var chunk__25065_25069 = null;
var count__25066_25070 = (0);
var i__25067_25071 = (0);
while(true){
if((i__25067_25071 < count__25066_25070)){
var h_val_25072 = cljs.core._nth.call(null,chunk__25065_25069,i__25067_25071);
xhr.headers.set(h_name,h_val_25072);

var G__25073 = seq__25064_25068;
var G__25074 = chunk__25065_25069;
var G__25075 = count__25066_25070;
var G__25076 = (i__25067_25071 + (1));
seq__25064_25068 = G__25073;
chunk__25065_25069 = G__25074;
count__25066_25070 = G__25075;
i__25067_25071 = G__25076;
continue;
} else {
var temp__4425__auto___25077 = cljs.core.seq.call(null,seq__25064_25068);
if(temp__4425__auto___25077){
var seq__25064_25078__$1 = temp__4425__auto___25077;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25064_25078__$1)){
var c__17135__auto___25079 = cljs.core.chunk_first.call(null,seq__25064_25078__$1);
var G__25080 = cljs.core.chunk_rest.call(null,seq__25064_25078__$1);
var G__25081 = c__17135__auto___25079;
var G__25082 = cljs.core.count.call(null,c__17135__auto___25079);
var G__25083 = (0);
seq__25064_25068 = G__25080;
chunk__25065_25069 = G__25081;
count__25066_25070 = G__25082;
i__25067_25071 = G__25083;
continue;
} else {
var h_val_25084 = cljs.core.first.call(null,seq__25064_25078__$1);
xhr.headers.set(h_name,h_val_25084);

var G__25085 = cljs.core.next.call(null,seq__25064_25078__$1);
var G__25086 = null;
var G__25087 = (0);
var G__25088 = (0);
seq__25064_25068 = G__25085;
chunk__25065_25069 = G__25086;
count__25066_25070 = G__25087;
i__25067_25071 = G__25088;
continue;
}
} else {
}
}
break;
}

var G__25089 = seq__25056;
var G__25090 = chunk__25061;
var G__25091 = count__25062;
var G__25092 = (i__25063 + (1));
seq__25056 = G__25089;
chunk__25061 = G__25090;
count__25062 = G__25091;
i__25063 = G__25092;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25056);
if(temp__4425__auto__){
var seq__25056__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25056__$1)){
var c__17135__auto__ = cljs.core.chunk_first.call(null,seq__25056__$1);
var G__25093 = cljs.core.chunk_rest.call(null,seq__25056__$1);
var G__25094 = c__17135__auto__;
var G__25095 = cljs.core.count.call(null,c__17135__auto__);
var G__25096 = (0);
seq__25056 = G__25093;
chunk__25061 = G__25094;
count__25062 = G__25095;
i__25063 = G__25096;
continue;
} else {
var h_name = cljs.core.first.call(null,seq__25056__$1);
var seq__25057_25097 = cljs.core.seq.call(null,cljs.core.vals.call(null,headers));
var chunk__25058_25098 = null;
var count__25059_25099 = (0);
var i__25060_25100 = (0);
while(true){
if((i__25060_25100 < count__25059_25099)){
var h_val_25101 = cljs.core._nth.call(null,chunk__25058_25098,i__25060_25100);
xhr.headers.set(h_name,h_val_25101);

var G__25102 = seq__25057_25097;
var G__25103 = chunk__25058_25098;
var G__25104 = count__25059_25099;
var G__25105 = (i__25060_25100 + (1));
seq__25057_25097 = G__25102;
chunk__25058_25098 = G__25103;
count__25059_25099 = G__25104;
i__25060_25100 = G__25105;
continue;
} else {
var temp__4425__auto___25106__$1 = cljs.core.seq.call(null,seq__25057_25097);
if(temp__4425__auto___25106__$1){
var seq__25057_25107__$1 = temp__4425__auto___25106__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25057_25107__$1)){
var c__17135__auto___25108 = cljs.core.chunk_first.call(null,seq__25057_25107__$1);
var G__25109 = cljs.core.chunk_rest.call(null,seq__25057_25107__$1);
var G__25110 = c__17135__auto___25108;
var G__25111 = cljs.core.count.call(null,c__17135__auto___25108);
var G__25112 = (0);
seq__25057_25097 = G__25109;
chunk__25058_25098 = G__25110;
count__25059_25099 = G__25111;
i__25060_25100 = G__25112;
continue;
} else {
var h_val_25113 = cljs.core.first.call(null,seq__25057_25107__$1);
xhr.headers.set(h_name,h_val_25113);

var G__25114 = cljs.core.next.call(null,seq__25057_25107__$1);
var G__25115 = null;
var G__25116 = (0);
var G__25117 = (0);
seq__25057_25097 = G__25114;
chunk__25058_25098 = G__25115;
count__25059_25099 = G__25116;
i__25060_25100 = G__25117;
continue;
}
} else {
}
}
break;
}

var G__25118 = cljs.core.next.call(null,seq__25056__$1);
var G__25119 = null;
var G__25120 = (0);
var G__25121 = (0);
seq__25056 = G__25118;
chunk__25061 = G__25119;
count__25062 = G__25120;
i__25063 = G__25121;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__25123 = response_type;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__25123)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blob","blob",1636965233),G__25123)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"document","document",-1329188687),G__25123)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),G__25123)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),G__25123)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.call(null,null,G__25123)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(response_type)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__25124){
var map__25128 = p__25124;
var map__25128__$1 = ((((!((map__25128 == null)))?((((map__25128.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25128.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25128):map__25128);
var request = map__25128__$1;
var with_credentials_QMARK_ = cljs.core.get.call(null,map__25128__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.call(null,map__25128__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.call(null,map__25128__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__16332__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__16332__auto__)){
return or__16332__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__25130 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_.call(null,G__25130,default_headers);

cljs_http.core.apply_response_type_BANG_.call(null,G__25130,response_type);

G__25130.setTimeoutInterval(timeout);

G__25130.setWithCredentials(send_credentials);

return G__25130;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__25131){
var map__25158 = p__25131;
var map__25158__$1 = ((((!((map__25158 == null)))?((((map__25158.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25158.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25158):map__25158);
var request = map__25158__$1;
var request_method = cljs.core.get.call(null,map__25158__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__25158__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.call(null,map__25158__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__25158__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.call(null,map__25158__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var channel = cljs.core.async.chan.call(null);
var request_url = cljs_http.util.build_url.call(null,request);
var method = cljs.core.name.call(null,(function (){var or__16332__auto__ = request_method;
if(cljs.core.truth_(or__16332__auto__)){
return or__16332__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers.call(null,headers);
var xhr__$1 = cljs_http.core.build_xhr.call(null,request);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr__$1);

xhr__$1.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr__$1,map__25158,map__25158__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers.call(null,target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),cljs_http.core.error_kw.call(null,target.getLastErrorCode()),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if(cljs.core.not.call(null,cljs_http.core.aborted_QMARK_.call(null,xhr__$1))){
cljs.core.async.put_BANG_.call(null,channel,response);
} else {
}

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,request_url,method,headers__$1,xhr__$1,map__25158,map__25158__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
);

xhr__$1.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__19757__auto___25184 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19757__auto___25184,channel,request_url,method,headers__$1,xhr__$1,map__25158,map__25158__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function (){
var f__19758__auto__ = (function (){var switch__19692__auto__ = ((function (c__19757__auto___25184,channel,request_url,method,headers__$1,xhr__$1,map__25158,map__25158__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function (state_25170){
var state_val_25171 = (state_25170[(1)]);
if((state_val_25171 === (1))){
var state_25170__$1 = state_25170;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25170__$1,(2),cancel);
} else {
if((state_val_25171 === (2))){
var inst_25161 = (state_25170[(2)]);
var inst_25162 = xhr__$1.isComplete();
var inst_25163 = cljs.core.not.call(null,inst_25162);
var state_25170__$1 = (function (){var statearr_25172 = state_25170;
(statearr_25172[(7)] = inst_25161);

return statearr_25172;
})();
if(inst_25163){
var statearr_25173_25185 = state_25170__$1;
(statearr_25173_25185[(1)] = (3));

} else {
var statearr_25174_25186 = state_25170__$1;
(statearr_25174_25186[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25171 === (3))){
var inst_25165 = xhr__$1.abort();
var state_25170__$1 = state_25170;
var statearr_25175_25187 = state_25170__$1;
(statearr_25175_25187[(2)] = inst_25165);

(statearr_25175_25187[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25171 === (4))){
var state_25170__$1 = state_25170;
var statearr_25176_25188 = state_25170__$1;
(statearr_25176_25188[(2)] = null);

(statearr_25176_25188[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25171 === (5))){
var inst_25168 = (state_25170[(2)]);
var state_25170__$1 = state_25170;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25170__$1,inst_25168);
} else {
return null;
}
}
}
}
}
});})(c__19757__auto___25184,channel,request_url,method,headers__$1,xhr__$1,map__25158,map__25158__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
;
return ((function (switch__19692__auto__,c__19757__auto___25184,channel,request_url,method,headers__$1,xhr__$1,map__25158,map__25158__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function() {
var cljs_http$core$xhr_$_state_machine__19693__auto__ = null;
var cljs_http$core$xhr_$_state_machine__19693__auto____0 = (function (){
var statearr_25180 = [null,null,null,null,null,null,null,null];
(statearr_25180[(0)] = cljs_http$core$xhr_$_state_machine__19693__auto__);

(statearr_25180[(1)] = (1));

return statearr_25180;
});
var cljs_http$core$xhr_$_state_machine__19693__auto____1 = (function (state_25170){
while(true){
var ret_value__19694__auto__ = (function (){try{while(true){
var result__19695__auto__ = switch__19692__auto__.call(null,state_25170);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19695__auto__;
}
break;
}
}catch (e25181){if((e25181 instanceof Object)){
var ex__19696__auto__ = e25181;
var statearr_25182_25189 = state_25170;
(statearr_25182_25189[(5)] = ex__19696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25170);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25181;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25190 = state_25170;
state_25170 = G__25190;
continue;
} else {
return ret_value__19694__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__19693__auto__ = function(state_25170){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__19693__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__19693__auto____1.call(this,state_25170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__19693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__19693__auto____0;
cljs_http$core$xhr_$_state_machine__19693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__19693__auto____1;
return cljs_http$core$xhr_$_state_machine__19693__auto__;
})()
;})(switch__19692__auto__,c__19757__auto___25184,channel,request_url,method,headers__$1,xhr__$1,map__25158,map__25158__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
})();
var state__19759__auto__ = (function (){var statearr_25183 = f__19758__auto__.call(null);
(statearr_25183[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19757__auto___25184);

return statearr_25183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19759__auto__);
});})(c__19757__auto___25184,channel,request_url,method,headers__$1,xhr__$1,map__25158,map__25158__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__25191){
var map__25208 = p__25191;
var map__25208__$1 = ((((!((map__25208 == null)))?((((map__25208.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25208.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25208):map__25208);
var request = map__25208__$1;
var timeout = cljs.core.get.call(null,map__25208__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.call(null,map__25208__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.call(null,map__25208__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var channel = cljs.core.async.chan.call(null);
var jsonp__$1 = (new goog.net.Jsonp(cljs_http.util.build_url.call(null,request),callback_name));
jsonp__$1.setRequestTimeout(timeout);

var req_25224 = jsonp__$1.send(null,((function (channel,jsonp__$1,map__25208,map__25208__$1,request,timeout,callback_name,cancel){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)], null);
cljs.core.async.put_BANG_.call(null,channel,response);

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp__$1,map__25208,map__25208__$1,request,timeout,callback_name,cancel))
,((function (channel,jsonp__$1,map__25208,map__25208__$1,request,timeout,callback_name,cancel){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp__$1,map__25208,map__25208__$1,request,timeout,callback_name,cancel))
);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp__$1,new cljs.core.Keyword(null,"request","request",1772954723),req_25224], null));

if(cljs.core.truth_(cancel)){
var c__19757__auto___25225 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19757__auto___25225,req_25224,channel,jsonp__$1,map__25208,map__25208__$1,request,timeout,callback_name,cancel){
return (function (){
var f__19758__auto__ = (function (){var switch__19692__auto__ = ((function (c__19757__auto___25225,req_25224,channel,jsonp__$1,map__25208,map__25208__$1,request,timeout,callback_name,cancel){
return (function (state_25214){
var state_val_25215 = (state_25214[(1)]);
if((state_val_25215 === (1))){
var state_25214__$1 = state_25214;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25214__$1,(2),cancel);
} else {
if((state_val_25215 === (2))){
var inst_25211 = (state_25214[(2)]);
var inst_25212 = jsonp__$1.cancel(req_25224);
var state_25214__$1 = (function (){var statearr_25216 = state_25214;
(statearr_25216[(7)] = inst_25211);

return statearr_25216;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25214__$1,inst_25212);
} else {
return null;
}
}
});})(c__19757__auto___25225,req_25224,channel,jsonp__$1,map__25208,map__25208__$1,request,timeout,callback_name,cancel))
;
return ((function (switch__19692__auto__,c__19757__auto___25225,req_25224,channel,jsonp__$1,map__25208,map__25208__$1,request,timeout,callback_name,cancel){
return (function() {
var cljs_http$core$jsonp_$_state_machine__19693__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__19693__auto____0 = (function (){
var statearr_25220 = [null,null,null,null,null,null,null,null];
(statearr_25220[(0)] = cljs_http$core$jsonp_$_state_machine__19693__auto__);

(statearr_25220[(1)] = (1));

return statearr_25220;
});
var cljs_http$core$jsonp_$_state_machine__19693__auto____1 = (function (state_25214){
while(true){
var ret_value__19694__auto__ = (function (){try{while(true){
var result__19695__auto__ = switch__19692__auto__.call(null,state_25214);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19695__auto__;
}
break;
}
}catch (e25221){if((e25221 instanceof Object)){
var ex__19696__auto__ = e25221;
var statearr_25222_25226 = state_25214;
(statearr_25222_25226[(5)] = ex__19696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25214);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25221;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25227 = state_25214;
state_25214 = G__25227;
continue;
} else {
return ret_value__19694__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__19693__auto__ = function(state_25214){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__19693__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__19693__auto____1.call(this,state_25214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__19693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__19693__auto____0;
cljs_http$core$jsonp_$_state_machine__19693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__19693__auto____1;
return cljs_http$core$jsonp_$_state_machine__19693__auto__;
})()
;})(switch__19692__auto__,c__19757__auto___25225,req_25224,channel,jsonp__$1,map__25208,map__25208__$1,request,timeout,callback_name,cancel))
})();
var state__19759__auto__ = (function (){var statearr_25223 = f__19758__auto__.call(null);
(statearr_25223[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19757__auto___25225);

return statearr_25223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19759__auto__);
});})(c__19757__auto___25225,req_25224,channel,jsonp__$1,map__25208,map__25208__$1,request,timeout,callback_name,cancel))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__25228){
var map__25231 = p__25228;
var map__25231__$1 = ((((!((map__25231 == null)))?((((map__25231.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25231.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25231):map__25231);
var request__$1 = map__25231__$1;
var request_method = cljs.core.get.call(null,map__25231__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.call(null,request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp.call(null,request__$1);
} else {
return cljs_http.core.xhr.call(null,request__$1);
}
});

//# sourceMappingURL=core.js.map?rel=1445124183162