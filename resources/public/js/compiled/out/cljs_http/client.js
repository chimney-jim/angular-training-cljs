// Compiled by ClojureScript 1.7.145 {}
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs_http.core');
goog.require('cljs.core.async');
goog.require('no.en.core');
goog.require('cljs_http.util');
goog.require('clojure.string');
goog.require('cljs.reader');
cljs_http.client.if_pos = (function cljs_http$client$if_pos(v){
if(cljs.core.truth_((function (){var and__16320__auto__ = v;
if(cljs.core.truth_(and__16320__auto__)){
return (v > (0));
} else {
return and__16320__auto__;
}
})())){
return v;
} else {
return null;
}
});
/**
 * Parse `s` as query params and return a hash map.
 */
cljs_http.client.parse_query_params = (function cljs_http$client$parse_query_params(s){
if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,s))){
return cljs.core.reduce.call(null,(function (p1__24545_SHARP_,p2__24544_SHARP_){
var vec__24547 = clojure.string.split.call(null,p2__24544_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__24547,(0),null);
var v = cljs.core.nth.call(null,vec__24547,(1),null);
return cljs.core.assoc.call(null,p1__24545_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,[cljs.core.str(s)].join(''),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,url))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not.call(null,query_data.isEmpty()))?[cljs.core.str(query_data)].join(''):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,[cljs.core.str(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [cljs.core.str(no.en.core.url_encode.call(null,cljs.core.name.call(null,k))),cljs.core.str("="),cljs.core.str(no.en.core.url_encode.call(null,[cljs.core.str(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__24548_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__24548_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__24549){
var vec__24551 = p__24549;
var k = cljs.core.nth.call(null,vec__24551,(0),null);
var v = cljs.core.nth.call(null,vec__24551,(1),null);
if(cljs.core.coll_QMARK_.call(null,v)){
return cljs_http.client.encode_vals.call(null,k,v);
} else {
return cljs_http.client.encode_val.call(null,k,v);
}
});
cljs_http.client.generate_query_string = (function cljs_http$client$generate_query_string(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap.call(null,esc_chars,cljs.core.map.call(null,((function (esc_chars){
return (function (p1__24552_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__24552_SHARP_)].join('');
});})(esc_chars))
,esc_chars));
})();
/**
 * Escape special characters -- for content-type.
 */
cljs_http.client.escape_special = (function cljs_http$client$escape_special(string){
return cljs.core.reduce.call(null,cljs.core.str,cljs.core.replace.call(null,cljs_http.client.regex_char_esc_smap,string));
});
/**
 * Decocde the :body of `response` with `decode-fn` if the content type matches.
 */
cljs_http.client.decode_body = (function cljs_http$client$decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__16320__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__16320__auto__){
var and__16320__auto____$1 = cljs.core.not_EQ_.call(null,(204),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(and__16320__auto____$1){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str("(?i)"),cljs.core.str(cljs_http.client.escape_special.call(null,content_type))].join('')),[cljs.core.str(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__16320__auto____$1;
}
} else {
return and__16320__auto__;
}
})())){
return cljs.core.update_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),decode_fn);
} else {
return response;
}
});
/**
 * Encode :edn-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_edn_params = (function cljs_http$client$wrap_edn_params(client){
return (function (request){
var temp__4423__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var params = temp__4423__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/edn"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/edn responses.
 */
cljs_http.client.wrap_edn_response = (function cljs_http$client$wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__24553_SHARP_){
return cljs_http.client.decode_body.call(null,p1__24553_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__17397__auto__ = [];
var len__17390__auto___24558 = arguments.length;
var i__17391__auto___24559 = (0);
while(true){
if((i__17391__auto___24559 < len__17390__auto___24558)){
args__17397__auto__.push((arguments[i__17391__auto___24559]));

var G__24560 = (i__17391__auto___24559 + (1));
i__17391__auto___24559 = G__24560;
continue;
} else {
}
break;
}

var argseq__17398__auto__ = ((((1) < args__17397__auto__.length))?(new cljs.core.IndexedSeq(args__17397__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17398__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__24556){
var vec__24557 = p__24556;
var default_headers = cljs.core.nth.call(null,vec__24557,(0),null);
return ((function (vec__24557,default_headers){
return (function (request){
var temp__4423__auto__ = (function (){var or__16332__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__16332__auto__)){
return or__16332__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var default_headers__$1 = temp__4423__auto__;
return client.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094),default_headers__$1));
} else {
return client.call(null,request);
}
});
;})(vec__24557,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq24554){
var G__24555 = cljs.core.first.call(null,seq24554);
var seq24554__$1 = cljs.core.next.call(null,seq24554);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__24555,seq24554__$1);
});
cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__17397__auto__ = [];
var len__17390__auto___24565 = arguments.length;
var i__17391__auto___24566 = (0);
while(true){
if((i__17391__auto___24566 < len__17390__auto___24565)){
args__17397__auto__.push((arguments[i__17391__auto___24566]));

var G__24567 = (i__17391__auto___24566 + (1));
i__17391__auto___24566 = G__24567;
continue;
} else {
}
break;
}

var argseq__17398__auto__ = ((((1) < args__17397__auto__.length))?(new cljs.core.IndexedSeq(args__17397__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17398__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__24563){
var vec__24564 = p__24563;
var accept = cljs.core.nth.call(null,vec__24564,(0),null);
return ((function (vec__24564,accept){
return (function (request){
var temp__4423__auto__ = (function (){var or__16332__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__16332__auto__)){
return or__16332__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var accept__$1 = temp__4423__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else {
return client.call(null,request);
}
});
;})(vec__24564,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq24561){
var G__24562 = cljs.core.first.call(null,seq24561);
var seq24561__$1 = cljs.core.next.call(null,seq24561);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__24562,seq24561__$1);
});
cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__17397__auto__ = [];
var len__17390__auto___24572 = arguments.length;
var i__17391__auto___24573 = (0);
while(true){
if((i__17391__auto___24573 < len__17390__auto___24572)){
args__17397__auto__.push((arguments[i__17391__auto___24573]));

var G__24574 = (i__17391__auto___24573 + (1));
i__17391__auto___24573 = G__24574;
continue;
} else {
}
break;
}

var argseq__17398__auto__ = ((((1) < args__17397__auto__.length))?(new cljs.core.IndexedSeq(args__17397__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17398__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__24570){
var vec__24571 = p__24570;
var content_type = cljs.core.nth.call(null,vec__24571,(0),null);
return ((function (vec__24571,content_type){
return (function (request){
var temp__4423__auto__ = (function (){var or__16332__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__16332__auto__)){
return or__16332__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var content_type__$1 = temp__4423__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else {
return client.call(null,request);
}
});
;})(vec__24571,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq24568){
var G__24569 = cljs.core.first.call(null,seq24568);
var seq24568__$1 = cljs.core.next.call(null,seq24568);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__24569,seq24568__$1);
});
cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"decoding","decoding",-568180903),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140),cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Encode :transit-params in the `request` :body and set the appropriate
 *   Content Type header.
 * 
 *   A :transit-opts map can be optionally provided with the following keys:
 * 
 *   :encoding                #{:json, :json-verbose}
 *   :decoding                #{:json, :json-verbose}
 *   :encoding/decoding-opts  appropriate map of options to be passed to
 *                         transit writer/reader, respectively.
 */
cljs_http.client.wrap_transit_params = (function cljs_http$client$wrap_transit_params(client){
return (function (request){
var temp__4423__auto__ = new cljs.core.Keyword(null,"transit-params","transit-params",357261095).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var params = temp__4423__auto__;
var map__24577 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__24577__$1 = ((((!((map__24577 == null)))?((((map__24577.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24577.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24577):map__24577);
var encoding = cljs.core.get.call(null,map__24577__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.call(null,map__24577__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/transit+json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode.call(null,params,encoding,encoding_opts)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/transit+json responses.
 */
cljs_http.client.wrap_transit_response = (function cljs_http$client$wrap_transit_response(client){
return (function (request){
var map__24583 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__24583__$1 = ((((!((map__24583 == null)))?((((map__24583.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24583.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24583):map__24583);
var decoding = cljs.core.get.call(null,map__24583__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.call(null,map__24583__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = ((function (map__24583,map__24583__$1,decoding,decoding_opts){
return (function (p1__24579_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__24579_SHARP_,decoding,decoding_opts);
});})(map__24583,map__24583__$1,decoding,decoding_opts))
;
return cljs.core.async.map.call(null,((function (map__24583,map__24583__$1,decoding,decoding_opts,transit_decode){
return (function (p1__24580_SHARP_){
return cljs_http.client.decode_body.call(null,p1__24580_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__24583,map__24583__$1,decoding,decoding_opts,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__4423__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var params = temp__4423__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/json responses.
 */
cljs_http.client.wrap_json_response = (function cljs_http$client$wrap_json_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__24585_SHARP_){
return cljs_http.client.decode_body.call(null,p1__24585_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__24589){
var map__24590 = p__24589;
var map__24590__$1 = ((((!((map__24590 == null)))?((((map__24590.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24590.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24590):map__24590);
var req = map__24590__$1;
var query_params = cljs.core.get.call(null,map__24590__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__24595){
var map__24596 = p__24595;
var map__24596__$1 = ((((!((map__24596 == null)))?((((map__24596.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24596.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24596):map__24596);
var request = map__24596__$1;
var form_params = cljs.core.get.call(null,map__24596__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.call(null,map__24596__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__24596__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core.truth_((function (){var and__16320__auto__ = form_params;
if(cljs.core.truth_(and__16320__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__16320__auto__;
}
})())){
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/x-www-form-urlencoded"], null),headers);
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string.call(null,form_params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers__$1));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.generate_form_data = (function cljs_http$client$generate_form_data(params){
var form_data = (new FormData());
var seq__24604_24610 = cljs.core.seq.call(null,params);
var chunk__24605_24611 = null;
var count__24606_24612 = (0);
var i__24607_24613 = (0);
while(true){
if((i__24607_24613 < count__24606_24612)){
var vec__24608_24614 = cljs.core._nth.call(null,chunk__24605_24611,i__24607_24613);
var k_24615 = cljs.core.nth.call(null,vec__24608_24614,(0),null);
var v_24616 = cljs.core.nth.call(null,vec__24608_24614,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_24616)){
form_data.append(cljs.core.name.call(null,k_24615),cljs.core.first.call(null,v_24616),cljs.core.second.call(null,v_24616));
} else {
form_data.append(cljs.core.name.call(null,k_24615),v_24616);
}

var G__24617 = seq__24604_24610;
var G__24618 = chunk__24605_24611;
var G__24619 = count__24606_24612;
var G__24620 = (i__24607_24613 + (1));
seq__24604_24610 = G__24617;
chunk__24605_24611 = G__24618;
count__24606_24612 = G__24619;
i__24607_24613 = G__24620;
continue;
} else {
var temp__4425__auto___24621 = cljs.core.seq.call(null,seq__24604_24610);
if(temp__4425__auto___24621){
var seq__24604_24622__$1 = temp__4425__auto___24621;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24604_24622__$1)){
var c__17135__auto___24623 = cljs.core.chunk_first.call(null,seq__24604_24622__$1);
var G__24624 = cljs.core.chunk_rest.call(null,seq__24604_24622__$1);
var G__24625 = c__17135__auto___24623;
var G__24626 = cljs.core.count.call(null,c__17135__auto___24623);
var G__24627 = (0);
seq__24604_24610 = G__24624;
chunk__24605_24611 = G__24625;
count__24606_24612 = G__24626;
i__24607_24613 = G__24627;
continue;
} else {
var vec__24609_24628 = cljs.core.first.call(null,seq__24604_24622__$1);
var k_24629 = cljs.core.nth.call(null,vec__24609_24628,(0),null);
var v_24630 = cljs.core.nth.call(null,vec__24609_24628,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_24630)){
form_data.append(cljs.core.name.call(null,k_24629),cljs.core.first.call(null,v_24630),cljs.core.second.call(null,v_24630));
} else {
form_data.append(cljs.core.name.call(null,k_24629),v_24630);
}

var G__24631 = cljs.core.next.call(null,seq__24604_24622__$1);
var G__24632 = null;
var G__24633 = (0);
var G__24634 = (0);
seq__24604_24610 = G__24631;
chunk__24605_24611 = G__24632;
count__24606_24612 = G__24633;
i__24607_24613 = G__24634;
continue;
}
} else {
}
}
break;
}

return form_data;
});
cljs_http.client.wrap_multipart_params = (function cljs_http$client$wrap_multipart_params(client){
return (function (p__24638){
var map__24639 = p__24638;
var map__24639__$1 = ((((!((map__24639 == null)))?((((map__24639.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24639.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24639):map__24639);
var request = map__24639__$1;
var multipart_params = cljs.core.get.call(null,map__24639__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.call(null,map__24639__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__16320__auto__ = multipart_params;
if(cljs.core.truth_(and__16320__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__16320__auto__;
}
})())){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_form_data.call(null,multipart_params)));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.wrap_method = (function cljs_http$client$wrap_method(client){
return (function (req){
var temp__4423__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4423__auto__)){
var m = temp__4423__auto__;
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__24641_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__24641_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__24646){
var map__24647 = p__24646;
var map__24647__$1 = ((((!((map__24647 == null)))?((((map__24647.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24647.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24647):map__24647);
var req = map__24647__$1;
var query_params = cljs.core.get.call(null,map__24647__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__4423__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4423__auto__)){
var spec = temp__4423__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4423__auto__,map__24647,map__24647__$1,req,query_params){
return (function (p1__24642_SHARP_){
return cljs.core.merge.call(null,p1__24642_SHARP_,query_params);
});})(spec,temp__4423__auto__,map__24647,map__24647__$1,req,query_params))
));
} else {
return client.call(null,req);
}
});
});
/**
 * Middleware converting the :basic-auth option or `credentials` into
 *   an Authorization header.
 */
cljs_http.client.wrap_basic_auth = (function cljs_http$client$wrap_basic_auth(var_args){
var args__17397__auto__ = [];
var len__17390__auto___24653 = arguments.length;
var i__17391__auto___24654 = (0);
while(true){
if((i__17391__auto___24654 < len__17390__auto___24653)){
args__17397__auto__.push((arguments[i__17391__auto___24654]));

var G__24655 = (i__17391__auto___24654 + (1));
i__17391__auto___24654 = G__24655;
continue;
} else {
}
break;
}

var argseq__17398__auto__ = ((((1) < args__17397__auto__.length))?(new cljs.core.IndexedSeq(args__17397__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17398__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__24651){
var vec__24652 = p__24651;
var credentials = cljs.core.nth.call(null,vec__24652,(0),null);
return ((function (vec__24652,credentials){
return (function (req){
var credentials__$1 = (function (){var or__16332__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__16332__auto__)){
return or__16332__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_.call(null,credentials__$1))){
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else {
return client.call(null,req);
}
});
;})(vec__24652,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq24649){
var G__24650 = cljs.core.first.call(null,seq24649);
var seq24649__$1 = cljs.core.next.call(null,seq24649);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__24650,seq24649__$1);
});
/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__4423__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4423__auto__)){
var oauth_token = temp__4423__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),[cljs.core.str("Bearer "),cljs.core.str(oauth_token)].join('')));
} else {
return client.call(null,req);
}
});
});
/**
 * Pipe the response-channel into the request-map's
 * custom channel (e.g. to enable transducers)
 */
cljs_http.client.wrap_channel_from_request_map = (function cljs_http$client$wrap_channel_from_request_map(client){
return (function (request){
var temp__4423__auto__ = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var custom_channel = temp__4423__auto__;
return cljs.core.async.pipe.call(null,client.call(null,request),custom_channel);
} else {
return client.call(null,request);
}
});
});
/**
 * Returns a batteries-included HTTP request function coresponding to the given
 * core client. See client/request
 */
cljs_http.client.wrap_request = (function cljs_http$client$wrap_request(request){
return cljs_http.client.wrap_default_headers.call(null,cljs_http.client.wrap_channel_from_request_map.call(null,cljs_http.client.wrap_url.call(null,cljs_http.client.wrap_method.call(null,cljs_http.client.wrap_oauth.call(null,cljs_http.client.wrap_basic_auth.call(null,cljs_http.client.wrap_query_params.call(null,cljs_http.client.wrap_content_type.call(null,cljs_http.client.wrap_json_response.call(null,cljs_http.client.wrap_json_params.call(null,cljs_http.client.wrap_transit_response.call(null,cljs_http.client.wrap_transit_params.call(null,cljs_http.client.wrap_edn_response.call(null,cljs_http.client.wrap_edn_params.call(null,cljs_http.client.wrap_multipart_params.call(null,cljs_http.client.wrap_form_params.call(null,cljs_http.client.wrap_accept.call(null,request)))))))))))))))));
});
/**
 * Executes the HTTP request corresponding to the given map and returns the
 * response map for corresponding to the resulting HTTP response.
 * 
 * In addition to the standard Ring request keys, the following keys are also
 * recognized:
 * * :url
 * * :method
 * * :query-params
 */
cljs_http.client.request = cljs_http.client.wrap_request.call(null,cljs_http.core.request);
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.delete$ = (function cljs_http$client$delete(var_args){
var args__17397__auto__ = [];
var len__17390__auto___24660 = arguments.length;
var i__17391__auto___24661 = (0);
while(true){
if((i__17391__auto___24661 < len__17390__auto___24660)){
args__17397__auto__.push((arguments[i__17391__auto___24661]));

var G__24662 = (i__17391__auto___24661 + (1));
i__17391__auto___24661 = G__24662;
continue;
} else {
}
break;
}

var argseq__17398__auto__ = ((((1) < args__17397__auto__.length))?(new cljs.core.IndexedSeq(args__17397__auto__.slice((1)),(0))):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17398__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__24658){
var vec__24659 = p__24658;
var req = cljs.core.nth.call(null,vec__24659,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq24656){
var G__24657 = cljs.core.first.call(null,seq24656);
var seq24656__$1 = cljs.core.next.call(null,seq24656);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__24657,seq24656__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__17397__auto__ = [];
var len__17390__auto___24667 = arguments.length;
var i__17391__auto___24668 = (0);
while(true){
if((i__17391__auto___24668 < len__17390__auto___24667)){
args__17397__auto__.push((arguments[i__17391__auto___24668]));

var G__24669 = (i__17391__auto___24668 + (1));
i__17391__auto___24668 = G__24669;
continue;
} else {
}
break;
}

var argseq__17398__auto__ = ((((1) < args__17397__auto__.length))?(new cljs.core.IndexedSeq(args__17397__auto__.slice((1)),(0))):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17398__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__24665){
var vec__24666 = p__24665;
var req = cljs.core.nth.call(null,vec__24666,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq24663){
var G__24664 = cljs.core.first.call(null,seq24663);
var seq24663__$1 = cljs.core.next.call(null,seq24663);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__24664,seq24663__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__17397__auto__ = [];
var len__17390__auto___24674 = arguments.length;
var i__17391__auto___24675 = (0);
while(true){
if((i__17391__auto___24675 < len__17390__auto___24674)){
args__17397__auto__.push((arguments[i__17391__auto___24675]));

var G__24676 = (i__17391__auto___24675 + (1));
i__17391__auto___24675 = G__24676;
continue;
} else {
}
break;
}

var argseq__17398__auto__ = ((((1) < args__17397__auto__.length))?(new cljs.core.IndexedSeq(args__17397__auto__.slice((1)),(0))):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17398__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__24672){
var vec__24673 = p__24672;
var req = cljs.core.nth.call(null,vec__24673,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq24670){
var G__24671 = cljs.core.first.call(null,seq24670);
var seq24670__$1 = cljs.core.next.call(null,seq24670);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__24671,seq24670__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__17397__auto__ = [];
var len__17390__auto___24681 = arguments.length;
var i__17391__auto___24682 = (0);
while(true){
if((i__17391__auto___24682 < len__17390__auto___24681)){
args__17397__auto__.push((arguments[i__17391__auto___24682]));

var G__24683 = (i__17391__auto___24682 + (1));
i__17391__auto___24682 = G__24683;
continue;
} else {
}
break;
}

var argseq__17398__auto__ = ((((1) < args__17397__auto__.length))?(new cljs.core.IndexedSeq(args__17397__auto__.slice((1)),(0))):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17398__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__24679){
var vec__24680 = p__24679;
var req = cljs.core.nth.call(null,vec__24680,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq24677){
var G__24678 = cljs.core.first.call(null,seq24677);
var seq24677__$1 = cljs.core.next.call(null,seq24677);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__24678,seq24677__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__17397__auto__ = [];
var len__17390__auto___24688 = arguments.length;
var i__17391__auto___24689 = (0);
while(true){
if((i__17391__auto___24689 < len__17390__auto___24688)){
args__17397__auto__.push((arguments[i__17391__auto___24689]));

var G__24690 = (i__17391__auto___24689 + (1));
i__17391__auto___24689 = G__24690;
continue;
} else {
}
break;
}

var argseq__17398__auto__ = ((((1) < args__17397__auto__.length))?(new cljs.core.IndexedSeq(args__17397__auto__.slice((1)),(0))):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17398__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__24686){
var vec__24687 = p__24686;
var req = cljs.core.nth.call(null,vec__24687,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq24684){
var G__24685 = cljs.core.first.call(null,seq24684);
var seq24684__$1 = cljs.core.next.call(null,seq24684);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__24685,seq24684__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__17397__auto__ = [];
var len__17390__auto___24695 = arguments.length;
var i__17391__auto___24696 = (0);
while(true){
if((i__17391__auto___24696 < len__17390__auto___24695)){
args__17397__auto__.push((arguments[i__17391__auto___24696]));

var G__24697 = (i__17391__auto___24696 + (1));
i__17391__auto___24696 = G__24697;
continue;
} else {
}
break;
}

var argseq__17398__auto__ = ((((1) < args__17397__auto__.length))?(new cljs.core.IndexedSeq(args__17397__auto__.slice((1)),(0))):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17398__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__24693){
var vec__24694 = p__24693;
var req = cljs.core.nth.call(null,vec__24694,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq24691){
var G__24692 = cljs.core.first.call(null,seq24691);
var seq24691__$1 = cljs.core.next.call(null,seq24691);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__24692,seq24691__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__17397__auto__ = [];
var len__17390__auto___24702 = arguments.length;
var i__17391__auto___24703 = (0);
while(true){
if((i__17391__auto___24703 < len__17390__auto___24702)){
args__17397__auto__.push((arguments[i__17391__auto___24703]));

var G__24704 = (i__17391__auto___24703 + (1));
i__17391__auto___24703 = G__24704;
continue;
} else {
}
break;
}

var argseq__17398__auto__ = ((((1) < args__17397__auto__.length))?(new cljs.core.IndexedSeq(args__17397__auto__.slice((1)),(0))):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17398__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__24700){
var vec__24701 = p__24700;
var req = cljs.core.nth.call(null,vec__24701,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq24698){
var G__24699 = cljs.core.first.call(null,seq24698);
var seq24698__$1 = cljs.core.next.call(null,seq24698);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__24699,seq24698__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__17397__auto__ = [];
var len__17390__auto___24709 = arguments.length;
var i__17391__auto___24710 = (0);
while(true){
if((i__17391__auto___24710 < len__17390__auto___24709)){
args__17397__auto__.push((arguments[i__17391__auto___24710]));

var G__24711 = (i__17391__auto___24710 + (1));
i__17391__auto___24710 = G__24711;
continue;
} else {
}
break;
}

var argseq__17398__auto__ = ((((1) < args__17397__auto__.length))?(new cljs.core.IndexedSeq(args__17397__auto__.slice((1)),(0))):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17398__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__24707){
var vec__24708 = p__24707;
var req = cljs.core.nth.call(null,vec__24708,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq24705){
var G__24706 = cljs.core.first.call(null,seq24705);
var seq24705__$1 = cljs.core.next.call(null,seq24705);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__24706,seq24705__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__17397__auto__ = [];
var len__17390__auto___24716 = arguments.length;
var i__17391__auto___24717 = (0);
while(true){
if((i__17391__auto___24717 < len__17390__auto___24716)){
args__17397__auto__.push((arguments[i__17391__auto___24717]));

var G__24718 = (i__17391__auto___24717 + (1));
i__17391__auto___24717 = G__24718;
continue;
} else {
}
break;
}

var argseq__17398__auto__ = ((((1) < args__17397__auto__.length))?(new cljs.core.IndexedSeq(args__17397__auto__.slice((1)),(0))):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17398__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__24714){
var vec__24715 = p__24714;
var req = cljs.core.nth.call(null,vec__24715,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq24712){
var G__24713 = cljs.core.first.call(null,seq24712);
var seq24712__$1 = cljs.core.next.call(null,seq24712);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__24713,seq24712__$1);
});

//# sourceMappingURL=client.js.map?rel=1445124182555