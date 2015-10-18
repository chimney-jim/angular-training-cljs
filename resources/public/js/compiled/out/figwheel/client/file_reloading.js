// Compiled by ClojureScript 1.7.145 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16332__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16332__auto__){
return or__16332__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16332__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16332__auto__)){
return or__16332__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__29116_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__29116_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__29121 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__29122 = null;
var count__29123 = (0);
var i__29124 = (0);
while(true){
if((i__29124 < count__29123)){
var n = cljs.core._nth.call(null,chunk__29122,i__29124);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__29125 = seq__29121;
var G__29126 = chunk__29122;
var G__29127 = count__29123;
var G__29128 = (i__29124 + (1));
seq__29121 = G__29125;
chunk__29122 = G__29126;
count__29123 = G__29127;
i__29124 = G__29128;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__29121);
if(temp__4425__auto__){
var seq__29121__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29121__$1)){
var c__17135__auto__ = cljs.core.chunk_first.call(null,seq__29121__$1);
var G__29129 = cljs.core.chunk_rest.call(null,seq__29121__$1);
var G__29130 = c__17135__auto__;
var G__29131 = cljs.core.count.call(null,c__17135__auto__);
var G__29132 = (0);
seq__29121 = G__29129;
chunk__29122 = G__29130;
count__29123 = G__29131;
i__29124 = G__29132;
continue;
} else {
var n = cljs.core.first.call(null,seq__29121__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__29133 = cljs.core.next.call(null,seq__29121__$1);
var G__29134 = null;
var G__29135 = (0);
var G__29136 = (0);
seq__29121 = G__29133;
chunk__29122 = G__29134;
count__29123 = G__29135;
i__29124 = G__29136;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__29175_29182 = cljs.core.seq.call(null,deps);
var chunk__29176_29183 = null;
var count__29177_29184 = (0);
var i__29178_29185 = (0);
while(true){
if((i__29178_29185 < count__29177_29184)){
var dep_29186 = cljs.core._nth.call(null,chunk__29176_29183,i__29178_29185);
topo_sort_helper_STAR_.call(null,dep_29186,(depth + (1)),state);

var G__29187 = seq__29175_29182;
var G__29188 = chunk__29176_29183;
var G__29189 = count__29177_29184;
var G__29190 = (i__29178_29185 + (1));
seq__29175_29182 = G__29187;
chunk__29176_29183 = G__29188;
count__29177_29184 = G__29189;
i__29178_29185 = G__29190;
continue;
} else {
var temp__4425__auto___29191 = cljs.core.seq.call(null,seq__29175_29182);
if(temp__4425__auto___29191){
var seq__29175_29192__$1 = temp__4425__auto___29191;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29175_29192__$1)){
var c__17135__auto___29193 = cljs.core.chunk_first.call(null,seq__29175_29192__$1);
var G__29194 = cljs.core.chunk_rest.call(null,seq__29175_29192__$1);
var G__29195 = c__17135__auto___29193;
var G__29196 = cljs.core.count.call(null,c__17135__auto___29193);
var G__29197 = (0);
seq__29175_29182 = G__29194;
chunk__29176_29183 = G__29195;
count__29177_29184 = G__29196;
i__29178_29185 = G__29197;
continue;
} else {
var dep_29198 = cljs.core.first.call(null,seq__29175_29192__$1);
topo_sort_helper_STAR_.call(null,dep_29198,(depth + (1)),state);

var G__29199 = cljs.core.next.call(null,seq__29175_29192__$1);
var G__29200 = null;
var G__29201 = (0);
var G__29202 = (0);
seq__29175_29182 = G__29199;
chunk__29176_29183 = G__29200;
count__29177_29184 = G__29201;
i__29178_29185 = G__29202;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__29179){
var vec__29181 = p__29179;
var x = cljs.core.nth.call(null,vec__29181,(0),null);
var xs = cljs.core.nthnext.call(null,vec__29181,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__29181,x,xs,get_deps__$1){
return (function (p1__29137_SHARP_){
return clojure.set.difference.call(null,p1__29137_SHARP_,x);
});})(vec__29181,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__29215 = cljs.core.seq.call(null,provides);
var chunk__29216 = null;
var count__29217 = (0);
var i__29218 = (0);
while(true){
if((i__29218 < count__29217)){
var prov = cljs.core._nth.call(null,chunk__29216,i__29218);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29219_29227 = cljs.core.seq.call(null,requires);
var chunk__29220_29228 = null;
var count__29221_29229 = (0);
var i__29222_29230 = (0);
while(true){
if((i__29222_29230 < count__29221_29229)){
var req_29231 = cljs.core._nth.call(null,chunk__29220_29228,i__29222_29230);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29231,prov);

var G__29232 = seq__29219_29227;
var G__29233 = chunk__29220_29228;
var G__29234 = count__29221_29229;
var G__29235 = (i__29222_29230 + (1));
seq__29219_29227 = G__29232;
chunk__29220_29228 = G__29233;
count__29221_29229 = G__29234;
i__29222_29230 = G__29235;
continue;
} else {
var temp__4425__auto___29236 = cljs.core.seq.call(null,seq__29219_29227);
if(temp__4425__auto___29236){
var seq__29219_29237__$1 = temp__4425__auto___29236;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29219_29237__$1)){
var c__17135__auto___29238 = cljs.core.chunk_first.call(null,seq__29219_29237__$1);
var G__29239 = cljs.core.chunk_rest.call(null,seq__29219_29237__$1);
var G__29240 = c__17135__auto___29238;
var G__29241 = cljs.core.count.call(null,c__17135__auto___29238);
var G__29242 = (0);
seq__29219_29227 = G__29239;
chunk__29220_29228 = G__29240;
count__29221_29229 = G__29241;
i__29222_29230 = G__29242;
continue;
} else {
var req_29243 = cljs.core.first.call(null,seq__29219_29237__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29243,prov);

var G__29244 = cljs.core.next.call(null,seq__29219_29237__$1);
var G__29245 = null;
var G__29246 = (0);
var G__29247 = (0);
seq__29219_29227 = G__29244;
chunk__29220_29228 = G__29245;
count__29221_29229 = G__29246;
i__29222_29230 = G__29247;
continue;
}
} else {
}
}
break;
}

var G__29248 = seq__29215;
var G__29249 = chunk__29216;
var G__29250 = count__29217;
var G__29251 = (i__29218 + (1));
seq__29215 = G__29248;
chunk__29216 = G__29249;
count__29217 = G__29250;
i__29218 = G__29251;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__29215);
if(temp__4425__auto__){
var seq__29215__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29215__$1)){
var c__17135__auto__ = cljs.core.chunk_first.call(null,seq__29215__$1);
var G__29252 = cljs.core.chunk_rest.call(null,seq__29215__$1);
var G__29253 = c__17135__auto__;
var G__29254 = cljs.core.count.call(null,c__17135__auto__);
var G__29255 = (0);
seq__29215 = G__29252;
chunk__29216 = G__29253;
count__29217 = G__29254;
i__29218 = G__29255;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29215__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29223_29256 = cljs.core.seq.call(null,requires);
var chunk__29224_29257 = null;
var count__29225_29258 = (0);
var i__29226_29259 = (0);
while(true){
if((i__29226_29259 < count__29225_29258)){
var req_29260 = cljs.core._nth.call(null,chunk__29224_29257,i__29226_29259);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29260,prov);

var G__29261 = seq__29223_29256;
var G__29262 = chunk__29224_29257;
var G__29263 = count__29225_29258;
var G__29264 = (i__29226_29259 + (1));
seq__29223_29256 = G__29261;
chunk__29224_29257 = G__29262;
count__29225_29258 = G__29263;
i__29226_29259 = G__29264;
continue;
} else {
var temp__4425__auto___29265__$1 = cljs.core.seq.call(null,seq__29223_29256);
if(temp__4425__auto___29265__$1){
var seq__29223_29266__$1 = temp__4425__auto___29265__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29223_29266__$1)){
var c__17135__auto___29267 = cljs.core.chunk_first.call(null,seq__29223_29266__$1);
var G__29268 = cljs.core.chunk_rest.call(null,seq__29223_29266__$1);
var G__29269 = c__17135__auto___29267;
var G__29270 = cljs.core.count.call(null,c__17135__auto___29267);
var G__29271 = (0);
seq__29223_29256 = G__29268;
chunk__29224_29257 = G__29269;
count__29225_29258 = G__29270;
i__29226_29259 = G__29271;
continue;
} else {
var req_29272 = cljs.core.first.call(null,seq__29223_29266__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29272,prov);

var G__29273 = cljs.core.next.call(null,seq__29223_29266__$1);
var G__29274 = null;
var G__29275 = (0);
var G__29276 = (0);
seq__29223_29256 = G__29273;
chunk__29224_29257 = G__29274;
count__29225_29258 = G__29275;
i__29226_29259 = G__29276;
continue;
}
} else {
}
}
break;
}

var G__29277 = cljs.core.next.call(null,seq__29215__$1);
var G__29278 = null;
var G__29279 = (0);
var G__29280 = (0);
seq__29215 = G__29277;
chunk__29216 = G__29278;
count__29217 = G__29279;
i__29218 = G__29280;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__29285_29289 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__29286_29290 = null;
var count__29287_29291 = (0);
var i__29288_29292 = (0);
while(true){
if((i__29288_29292 < count__29287_29291)){
var ns_29293 = cljs.core._nth.call(null,chunk__29286_29290,i__29288_29292);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29293);

var G__29294 = seq__29285_29289;
var G__29295 = chunk__29286_29290;
var G__29296 = count__29287_29291;
var G__29297 = (i__29288_29292 + (1));
seq__29285_29289 = G__29294;
chunk__29286_29290 = G__29295;
count__29287_29291 = G__29296;
i__29288_29292 = G__29297;
continue;
} else {
var temp__4425__auto___29298 = cljs.core.seq.call(null,seq__29285_29289);
if(temp__4425__auto___29298){
var seq__29285_29299__$1 = temp__4425__auto___29298;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29285_29299__$1)){
var c__17135__auto___29300 = cljs.core.chunk_first.call(null,seq__29285_29299__$1);
var G__29301 = cljs.core.chunk_rest.call(null,seq__29285_29299__$1);
var G__29302 = c__17135__auto___29300;
var G__29303 = cljs.core.count.call(null,c__17135__auto___29300);
var G__29304 = (0);
seq__29285_29289 = G__29301;
chunk__29286_29290 = G__29302;
count__29287_29291 = G__29303;
i__29288_29292 = G__29304;
continue;
} else {
var ns_29305 = cljs.core.first.call(null,seq__29285_29299__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29305);

var G__29306 = cljs.core.next.call(null,seq__29285_29299__$1);
var G__29307 = null;
var G__29308 = (0);
var G__29309 = (0);
seq__29285_29289 = G__29306;
chunk__29286_29290 = G__29307;
count__29287_29291 = G__29308;
i__29288_29292 = G__29309;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16332__auto__ = goog.require__;
if(cljs.core.truth_(or__16332__auto__)){
return or__16332__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__29310__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__29310 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29311__i = 0, G__29311__a = new Array(arguments.length -  0);
while (G__29311__i < G__29311__a.length) {G__29311__a[G__29311__i] = arguments[G__29311__i + 0]; ++G__29311__i;}
  args = new cljs.core.IndexedSeq(G__29311__a,0);
} 
return G__29310__delegate.call(this,args);};
G__29310.cljs$lang$maxFixedArity = 0;
G__29310.cljs$lang$applyTo = (function (arglist__29312){
var args = cljs.core.seq(arglist__29312);
return G__29310__delegate(args);
});
G__29310.cljs$core$IFn$_invoke$arity$variadic = G__29310__delegate;
return G__29310;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__29314 = cljs.core._EQ_;
var expr__29315 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__29314.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__29315))){
var path_parts = ((function (pred__29314,expr__29315){
return (function (p1__29313_SHARP_){
return clojure.string.split.call(null,p1__29313_SHARP_,/[\/\\]/);
});})(pred__29314,expr__29315))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__29314,expr__29315){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(clojure.string.join.call(null,"/",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [".","..",request_url], null)));
}catch (e29317){if((e29317 instanceof Error)){
var e = e29317;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29317;

}
}})());
});
;})(path_parts,sep,root,pred__29314,expr__29315))
} else {
if(cljs.core.truth_(pred__29314.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__29315))){
return ((function (pred__29314,expr__29315){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__29314,expr__29315){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__29314,expr__29315))
);

return deferred.addErrback(((function (deferred,pred__29314,expr__29315){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__29314,expr__29315))
);
});
;})(pred__29314,expr__29315))
} else {
return ((function (pred__29314,expr__29315){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__29314,expr__29315))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29318,callback){
var map__29321 = p__29318;
var map__29321__$1 = ((((!((map__29321 == null)))?((((map__29321.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29321.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29321):map__29321);
var file_msg = map__29321__$1;
var request_url = cljs.core.get.call(null,map__29321__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__29321,map__29321__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__29321,map__29321__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__19757__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19757__auto__){
return (function (){
var f__19758__auto__ = (function (){var switch__19692__auto__ = ((function (c__19757__auto__){
return (function (state_29345){
var state_val_29346 = (state_29345[(1)]);
if((state_val_29346 === (7))){
var inst_29341 = (state_29345[(2)]);
var state_29345__$1 = state_29345;
var statearr_29347_29367 = state_29345__$1;
(statearr_29347_29367[(2)] = inst_29341);

(statearr_29347_29367[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29346 === (1))){
var state_29345__$1 = state_29345;
var statearr_29348_29368 = state_29345__$1;
(statearr_29348_29368[(2)] = null);

(statearr_29348_29368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29346 === (4))){
var inst_29325 = (state_29345[(7)]);
var inst_29325__$1 = (state_29345[(2)]);
var state_29345__$1 = (function (){var statearr_29349 = state_29345;
(statearr_29349[(7)] = inst_29325__$1);

return statearr_29349;
})();
if(cljs.core.truth_(inst_29325__$1)){
var statearr_29350_29369 = state_29345__$1;
(statearr_29350_29369[(1)] = (5));

} else {
var statearr_29351_29370 = state_29345__$1;
(statearr_29351_29370[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29346 === (6))){
var state_29345__$1 = state_29345;
var statearr_29352_29371 = state_29345__$1;
(statearr_29352_29371[(2)] = null);

(statearr_29352_29371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29346 === (3))){
var inst_29343 = (state_29345[(2)]);
var state_29345__$1 = state_29345;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29345__$1,inst_29343);
} else {
if((state_val_29346 === (2))){
var state_29345__$1 = state_29345;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29345__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_29346 === (11))){
var inst_29337 = (state_29345[(2)]);
var state_29345__$1 = (function (){var statearr_29353 = state_29345;
(statearr_29353[(8)] = inst_29337);

return statearr_29353;
})();
var statearr_29354_29372 = state_29345__$1;
(statearr_29354_29372[(2)] = null);

(statearr_29354_29372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29346 === (9))){
var inst_29331 = (state_29345[(9)]);
var inst_29329 = (state_29345[(10)]);
var inst_29333 = inst_29331.call(null,inst_29329);
var state_29345__$1 = state_29345;
var statearr_29355_29373 = state_29345__$1;
(statearr_29355_29373[(2)] = inst_29333);

(statearr_29355_29373[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29346 === (5))){
var inst_29325 = (state_29345[(7)]);
var inst_29327 = figwheel.client.file_reloading.blocking_load.call(null,inst_29325);
var state_29345__$1 = state_29345;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29345__$1,(8),inst_29327);
} else {
if((state_val_29346 === (10))){
var inst_29329 = (state_29345[(10)]);
var inst_29335 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_29329);
var state_29345__$1 = state_29345;
var statearr_29356_29374 = state_29345__$1;
(statearr_29356_29374[(2)] = inst_29335);

(statearr_29356_29374[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29346 === (8))){
var inst_29331 = (state_29345[(9)]);
var inst_29325 = (state_29345[(7)]);
var inst_29329 = (state_29345[(2)]);
var inst_29330 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_29331__$1 = cljs.core.get.call(null,inst_29330,inst_29325);
var state_29345__$1 = (function (){var statearr_29357 = state_29345;
(statearr_29357[(9)] = inst_29331__$1);

(statearr_29357[(10)] = inst_29329);

return statearr_29357;
})();
if(cljs.core.truth_(inst_29331__$1)){
var statearr_29358_29375 = state_29345__$1;
(statearr_29358_29375[(1)] = (9));

} else {
var statearr_29359_29376 = state_29345__$1;
(statearr_29359_29376[(1)] = (10));

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
});})(c__19757__auto__))
;
return ((function (switch__19692__auto__,c__19757__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__19693__auto__ = null;
var figwheel$client$file_reloading$state_machine__19693__auto____0 = (function (){
var statearr_29363 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29363[(0)] = figwheel$client$file_reloading$state_machine__19693__auto__);

(statearr_29363[(1)] = (1));

return statearr_29363;
});
var figwheel$client$file_reloading$state_machine__19693__auto____1 = (function (state_29345){
while(true){
var ret_value__19694__auto__ = (function (){try{while(true){
var result__19695__auto__ = switch__19692__auto__.call(null,state_29345);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19695__auto__;
}
break;
}
}catch (e29364){if((e29364 instanceof Object)){
var ex__19696__auto__ = e29364;
var statearr_29365_29377 = state_29345;
(statearr_29365_29377[(5)] = ex__19696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29364;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29378 = state_29345;
state_29345 = G__29378;
continue;
} else {
return ret_value__19694__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__19693__auto__ = function(state_29345){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__19693__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__19693__auto____1.call(this,state_29345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__19693__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__19693__auto____0;
figwheel$client$file_reloading$state_machine__19693__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__19693__auto____1;
return figwheel$client$file_reloading$state_machine__19693__auto__;
})()
;})(switch__19692__auto__,c__19757__auto__))
})();
var state__19759__auto__ = (function (){var statearr_29366 = f__19758__auto__.call(null);
(statearr_29366[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19757__auto__);

return statearr_29366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19759__auto__);
});})(c__19757__auto__))
);

return c__19757__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__29379,callback){
var map__29382 = p__29379;
var map__29382__$1 = ((((!((map__29382 == null)))?((((map__29382.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29382.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29382):map__29382);
var file_msg = map__29382__$1;
var namespace = cljs.core.get.call(null,map__29382__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__29382,map__29382__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__29382,map__29382__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29384){
var map__29387 = p__29384;
var map__29387__$1 = ((((!((map__29387 == null)))?((((map__29387.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29387.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29387):map__29387);
var file_msg = map__29387__$1;
var namespace = cljs.core.get.call(null,map__29387__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16320__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16320__auto__){
var or__16332__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16332__auto__)){
return or__16332__auto__;
} else {
var or__16332__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16332__auto____$1)){
return or__16332__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16320__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29389,callback){
var map__29392 = p__29389;
var map__29392__$1 = ((((!((map__29392 == null)))?((((map__29392.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29392.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29392):map__29392);
var file_msg = map__29392__$1;
var request_url = cljs.core.get.call(null,map__29392__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__29392__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__19757__auto___29480 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19757__auto___29480,out){
return (function (){
var f__19758__auto__ = (function (){var switch__19692__auto__ = ((function (c__19757__auto___29480,out){
return (function (state_29462){
var state_val_29463 = (state_29462[(1)]);
if((state_val_29463 === (1))){
var inst_29440 = cljs.core.nth.call(null,files,(0),null);
var inst_29441 = cljs.core.nthnext.call(null,files,(1));
var inst_29442 = files;
var state_29462__$1 = (function (){var statearr_29464 = state_29462;
(statearr_29464[(7)] = inst_29441);

(statearr_29464[(8)] = inst_29442);

(statearr_29464[(9)] = inst_29440);

return statearr_29464;
})();
var statearr_29465_29481 = state_29462__$1;
(statearr_29465_29481[(2)] = null);

(statearr_29465_29481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29463 === (2))){
var inst_29445 = (state_29462[(10)]);
var inst_29442 = (state_29462[(8)]);
var inst_29445__$1 = cljs.core.nth.call(null,inst_29442,(0),null);
var inst_29446 = cljs.core.nthnext.call(null,inst_29442,(1));
var inst_29447 = (inst_29445__$1 == null);
var inst_29448 = cljs.core.not.call(null,inst_29447);
var state_29462__$1 = (function (){var statearr_29466 = state_29462;
(statearr_29466[(11)] = inst_29446);

(statearr_29466[(10)] = inst_29445__$1);

return statearr_29466;
})();
if(inst_29448){
var statearr_29467_29482 = state_29462__$1;
(statearr_29467_29482[(1)] = (4));

} else {
var statearr_29468_29483 = state_29462__$1;
(statearr_29468_29483[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29463 === (3))){
var inst_29460 = (state_29462[(2)]);
var state_29462__$1 = state_29462;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29462__$1,inst_29460);
} else {
if((state_val_29463 === (4))){
var inst_29445 = (state_29462[(10)]);
var inst_29450 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29445);
var state_29462__$1 = state_29462;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29462__$1,(7),inst_29450);
} else {
if((state_val_29463 === (5))){
var inst_29456 = cljs.core.async.close_BANG_.call(null,out);
var state_29462__$1 = state_29462;
var statearr_29469_29484 = state_29462__$1;
(statearr_29469_29484[(2)] = inst_29456);

(statearr_29469_29484[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29463 === (6))){
var inst_29458 = (state_29462[(2)]);
var state_29462__$1 = state_29462;
var statearr_29470_29485 = state_29462__$1;
(statearr_29470_29485[(2)] = inst_29458);

(statearr_29470_29485[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29463 === (7))){
var inst_29446 = (state_29462[(11)]);
var inst_29452 = (state_29462[(2)]);
var inst_29453 = cljs.core.async.put_BANG_.call(null,out,inst_29452);
var inst_29442 = inst_29446;
var state_29462__$1 = (function (){var statearr_29471 = state_29462;
(statearr_29471[(12)] = inst_29453);

(statearr_29471[(8)] = inst_29442);

return statearr_29471;
})();
var statearr_29472_29486 = state_29462__$1;
(statearr_29472_29486[(2)] = null);

(statearr_29472_29486[(1)] = (2));


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
});})(c__19757__auto___29480,out))
;
return ((function (switch__19692__auto__,c__19757__auto___29480,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19693__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19693__auto____0 = (function (){
var statearr_29476 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29476[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19693__auto__);

(statearr_29476[(1)] = (1));

return statearr_29476;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19693__auto____1 = (function (state_29462){
while(true){
var ret_value__19694__auto__ = (function (){try{while(true){
var result__19695__auto__ = switch__19692__auto__.call(null,state_29462);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19695__auto__;
}
break;
}
}catch (e29477){if((e29477 instanceof Object)){
var ex__19696__auto__ = e29477;
var statearr_29478_29487 = state_29462;
(statearr_29478_29487[(5)] = ex__19696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29462);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29477;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29488 = state_29462;
state_29462 = G__29488;
continue;
} else {
return ret_value__19694__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19693__auto__ = function(state_29462){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19693__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19693__auto____1.call(this,state_29462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19693__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19693__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19693__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19693__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19693__auto__;
})()
;})(switch__19692__auto__,c__19757__auto___29480,out))
})();
var state__19759__auto__ = (function (){var statearr_29479 = f__19758__auto__.call(null);
(statearr_29479[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19757__auto___29480);

return statearr_29479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19759__auto__);
});})(c__19757__auto___29480,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29489,opts){
var map__29493 = p__29489;
var map__29493__$1 = ((((!((map__29493 == null)))?((((map__29493.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29493.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29493):map__29493);
var eval_body__$1 = cljs.core.get.call(null,map__29493__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__29493__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16320__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16320__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16320__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e29495){var e = e29495;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__29496_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29496_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__29501){
var vec__29502 = p__29501;
var k = cljs.core.nth.call(null,vec__29502,(0),null);
var v = cljs.core.nth.call(null,vec__29502,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__29503){
var vec__29504 = p__29503;
var k = cljs.core.nth.call(null,vec__29504,(0),null);
var v = cljs.core.nth.call(null,vec__29504,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29508,p__29509){
var map__29756 = p__29508;
var map__29756__$1 = ((((!((map__29756 == null)))?((((map__29756.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29756.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29756):map__29756);
var opts = map__29756__$1;
var before_jsload = cljs.core.get.call(null,map__29756__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__29756__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__29756__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__29757 = p__29509;
var map__29757__$1 = ((((!((map__29757 == null)))?((((map__29757.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29757.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29757):map__29757);
var msg = map__29757__$1;
var files = cljs.core.get.call(null,map__29757__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__29757__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__29757__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__19757__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19757__auto__,map__29756,map__29756__$1,opts,before_jsload,on_jsload,reload_dependents,map__29757,map__29757__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__19758__auto__ = (function (){var switch__19692__auto__ = ((function (c__19757__auto__,map__29756,map__29756__$1,opts,before_jsload,on_jsload,reload_dependents,map__29757,map__29757__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_29910){
var state_val_29911 = (state_29910[(1)]);
if((state_val_29911 === (7))){
var inst_29771 = (state_29910[(7)]);
var inst_29773 = (state_29910[(8)]);
var inst_29772 = (state_29910[(9)]);
var inst_29774 = (state_29910[(10)]);
var inst_29779 = cljs.core._nth.call(null,inst_29772,inst_29774);
var inst_29780 = figwheel.client.file_reloading.eval_body.call(null,inst_29779,opts);
var inst_29781 = (inst_29774 + (1));
var tmp29912 = inst_29771;
var tmp29913 = inst_29773;
var tmp29914 = inst_29772;
var inst_29771__$1 = tmp29912;
var inst_29772__$1 = tmp29914;
var inst_29773__$1 = tmp29913;
var inst_29774__$1 = inst_29781;
var state_29910__$1 = (function (){var statearr_29915 = state_29910;
(statearr_29915[(7)] = inst_29771__$1);

(statearr_29915[(11)] = inst_29780);

(statearr_29915[(8)] = inst_29773__$1);

(statearr_29915[(9)] = inst_29772__$1);

(statearr_29915[(10)] = inst_29774__$1);

return statearr_29915;
})();
var statearr_29916_30002 = state_29910__$1;
(statearr_29916_30002[(2)] = null);

(statearr_29916_30002[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (20))){
var inst_29814 = (state_29910[(12)]);
var inst_29822 = figwheel.client.file_reloading.sort_files.call(null,inst_29814);
var state_29910__$1 = state_29910;
var statearr_29917_30003 = state_29910__$1;
(statearr_29917_30003[(2)] = inst_29822);

(statearr_29917_30003[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (27))){
var state_29910__$1 = state_29910;
var statearr_29918_30004 = state_29910__$1;
(statearr_29918_30004[(2)] = null);

(statearr_29918_30004[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (1))){
var inst_29763 = (state_29910[(13)]);
var inst_29760 = before_jsload.call(null,files);
var inst_29761 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29762 = (function (){return ((function (inst_29763,inst_29760,inst_29761,state_val_29911,c__19757__auto__,map__29756,map__29756__$1,opts,before_jsload,on_jsload,reload_dependents,map__29757,map__29757__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29505_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29505_SHARP_);
});
;})(inst_29763,inst_29760,inst_29761,state_val_29911,c__19757__auto__,map__29756,map__29756__$1,opts,before_jsload,on_jsload,reload_dependents,map__29757,map__29757__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29763__$1 = cljs.core.filter.call(null,inst_29762,files);
var inst_29764 = cljs.core.not_empty.call(null,inst_29763__$1);
var state_29910__$1 = (function (){var statearr_29919 = state_29910;
(statearr_29919[(13)] = inst_29763__$1);

(statearr_29919[(14)] = inst_29760);

(statearr_29919[(15)] = inst_29761);

return statearr_29919;
})();
if(cljs.core.truth_(inst_29764)){
var statearr_29920_30005 = state_29910__$1;
(statearr_29920_30005[(1)] = (2));

} else {
var statearr_29921_30006 = state_29910__$1;
(statearr_29921_30006[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (24))){
var state_29910__$1 = state_29910;
var statearr_29922_30007 = state_29910__$1;
(statearr_29922_30007[(2)] = null);

(statearr_29922_30007[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (39))){
var inst_29864 = (state_29910[(16)]);
var state_29910__$1 = state_29910;
var statearr_29923_30008 = state_29910__$1;
(statearr_29923_30008[(2)] = inst_29864);

(statearr_29923_30008[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (46))){
var inst_29905 = (state_29910[(2)]);
var state_29910__$1 = state_29910;
var statearr_29924_30009 = state_29910__$1;
(statearr_29924_30009[(2)] = inst_29905);

(statearr_29924_30009[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (4))){
var inst_29808 = (state_29910[(2)]);
var inst_29809 = cljs.core.List.EMPTY;
var inst_29810 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_29809);
var inst_29811 = (function (){return ((function (inst_29808,inst_29809,inst_29810,state_val_29911,c__19757__auto__,map__29756,map__29756__$1,opts,before_jsload,on_jsload,reload_dependents,map__29757,map__29757__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29506_SHARP_){
var and__16320__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29506_SHARP_);
if(cljs.core.truth_(and__16320__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29506_SHARP_));
} else {
return and__16320__auto__;
}
});
;})(inst_29808,inst_29809,inst_29810,state_val_29911,c__19757__auto__,map__29756,map__29756__$1,opts,before_jsload,on_jsload,reload_dependents,map__29757,map__29757__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29812 = cljs.core.filter.call(null,inst_29811,files);
var inst_29813 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_29814 = cljs.core.concat.call(null,inst_29812,inst_29813);
var state_29910__$1 = (function (){var statearr_29925 = state_29910;
(statearr_29925[(17)] = inst_29808);

(statearr_29925[(18)] = inst_29810);

(statearr_29925[(12)] = inst_29814);

return statearr_29925;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_29926_30010 = state_29910__$1;
(statearr_29926_30010[(1)] = (16));

} else {
var statearr_29927_30011 = state_29910__$1;
(statearr_29927_30011[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (15))){
var inst_29798 = (state_29910[(2)]);
var state_29910__$1 = state_29910;
var statearr_29928_30012 = state_29910__$1;
(statearr_29928_30012[(2)] = inst_29798);

(statearr_29928_30012[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (21))){
var inst_29824 = (state_29910[(19)]);
var inst_29824__$1 = (state_29910[(2)]);
var inst_29825 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29824__$1);
var state_29910__$1 = (function (){var statearr_29929 = state_29910;
(statearr_29929[(19)] = inst_29824__$1);

return statearr_29929;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29910__$1,(22),inst_29825);
} else {
if((state_val_29911 === (31))){
var inst_29908 = (state_29910[(2)]);
var state_29910__$1 = state_29910;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29910__$1,inst_29908);
} else {
if((state_val_29911 === (32))){
var inst_29864 = (state_29910[(16)]);
var inst_29869 = inst_29864.cljs$lang$protocol_mask$partition0$;
var inst_29870 = (inst_29869 & (64));
var inst_29871 = inst_29864.cljs$core$ISeq$;
var inst_29872 = (inst_29870) || (inst_29871);
var state_29910__$1 = state_29910;
if(cljs.core.truth_(inst_29872)){
var statearr_29930_30013 = state_29910__$1;
(statearr_29930_30013[(1)] = (35));

} else {
var statearr_29931_30014 = state_29910__$1;
(statearr_29931_30014[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (40))){
var inst_29885 = (state_29910[(20)]);
var inst_29884 = (state_29910[(2)]);
var inst_29885__$1 = cljs.core.get.call(null,inst_29884,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29886 = cljs.core.get.call(null,inst_29884,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29887 = cljs.core.not_empty.call(null,inst_29885__$1);
var state_29910__$1 = (function (){var statearr_29932 = state_29910;
(statearr_29932[(20)] = inst_29885__$1);

(statearr_29932[(21)] = inst_29886);

return statearr_29932;
})();
if(cljs.core.truth_(inst_29887)){
var statearr_29933_30015 = state_29910__$1;
(statearr_29933_30015[(1)] = (41));

} else {
var statearr_29934_30016 = state_29910__$1;
(statearr_29934_30016[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (33))){
var state_29910__$1 = state_29910;
var statearr_29935_30017 = state_29910__$1;
(statearr_29935_30017[(2)] = false);

(statearr_29935_30017[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (13))){
var inst_29784 = (state_29910[(22)]);
var inst_29788 = cljs.core.chunk_first.call(null,inst_29784);
var inst_29789 = cljs.core.chunk_rest.call(null,inst_29784);
var inst_29790 = cljs.core.count.call(null,inst_29788);
var inst_29771 = inst_29789;
var inst_29772 = inst_29788;
var inst_29773 = inst_29790;
var inst_29774 = (0);
var state_29910__$1 = (function (){var statearr_29936 = state_29910;
(statearr_29936[(7)] = inst_29771);

(statearr_29936[(8)] = inst_29773);

(statearr_29936[(9)] = inst_29772);

(statearr_29936[(10)] = inst_29774);

return statearr_29936;
})();
var statearr_29937_30018 = state_29910__$1;
(statearr_29937_30018[(2)] = null);

(statearr_29937_30018[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (22))){
var inst_29827 = (state_29910[(23)]);
var inst_29832 = (state_29910[(24)]);
var inst_29824 = (state_29910[(19)]);
var inst_29828 = (state_29910[(25)]);
var inst_29827__$1 = (state_29910[(2)]);
var inst_29828__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29827__$1);
var inst_29829 = (function (){var all_files = inst_29824;
var res_SINGLEQUOTE_ = inst_29827__$1;
var res = inst_29828__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_29827,inst_29832,inst_29824,inst_29828,inst_29827__$1,inst_29828__$1,state_val_29911,c__19757__auto__,map__29756,map__29756__$1,opts,before_jsload,on_jsload,reload_dependents,map__29757,map__29757__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29507_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29507_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_29827,inst_29832,inst_29824,inst_29828,inst_29827__$1,inst_29828__$1,state_val_29911,c__19757__auto__,map__29756,map__29756__$1,opts,before_jsload,on_jsload,reload_dependents,map__29757,map__29757__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29830 = cljs.core.filter.call(null,inst_29829,inst_29827__$1);
var inst_29831 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_29832__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29831);
var inst_29833 = cljs.core.not_empty.call(null,inst_29832__$1);
var state_29910__$1 = (function (){var statearr_29938 = state_29910;
(statearr_29938[(23)] = inst_29827__$1);

(statearr_29938[(24)] = inst_29832__$1);

(statearr_29938[(25)] = inst_29828__$1);

(statearr_29938[(26)] = inst_29830);

return statearr_29938;
})();
if(cljs.core.truth_(inst_29833)){
var statearr_29939_30019 = state_29910__$1;
(statearr_29939_30019[(1)] = (23));

} else {
var statearr_29940_30020 = state_29910__$1;
(statearr_29940_30020[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (36))){
var state_29910__$1 = state_29910;
var statearr_29941_30021 = state_29910__$1;
(statearr_29941_30021[(2)] = false);

(statearr_29941_30021[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (41))){
var inst_29885 = (state_29910[(20)]);
var inst_29889 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_29890 = cljs.core.map.call(null,inst_29889,inst_29885);
var inst_29891 = cljs.core.pr_str.call(null,inst_29890);
var inst_29892 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_29891)].join('');
var inst_29893 = figwheel.client.utils.log.call(null,inst_29892);
var state_29910__$1 = state_29910;
var statearr_29942_30022 = state_29910__$1;
(statearr_29942_30022[(2)] = inst_29893);

(statearr_29942_30022[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (43))){
var inst_29886 = (state_29910[(21)]);
var inst_29896 = (state_29910[(2)]);
var inst_29897 = cljs.core.not_empty.call(null,inst_29886);
var state_29910__$1 = (function (){var statearr_29943 = state_29910;
(statearr_29943[(27)] = inst_29896);

return statearr_29943;
})();
if(cljs.core.truth_(inst_29897)){
var statearr_29944_30023 = state_29910__$1;
(statearr_29944_30023[(1)] = (44));

} else {
var statearr_29945_30024 = state_29910__$1;
(statearr_29945_30024[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (29))){
var inst_29827 = (state_29910[(23)]);
var inst_29832 = (state_29910[(24)]);
var inst_29864 = (state_29910[(16)]);
var inst_29824 = (state_29910[(19)]);
var inst_29828 = (state_29910[(25)]);
var inst_29830 = (state_29910[(26)]);
var inst_29860 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29863 = (function (){var all_files = inst_29824;
var res_SINGLEQUOTE_ = inst_29827;
var res = inst_29828;
var files_not_loaded = inst_29830;
var dependencies_that_loaded = inst_29832;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29827,inst_29832,inst_29864,inst_29824,inst_29828,inst_29830,inst_29860,state_val_29911,c__19757__auto__,map__29756,map__29756__$1,opts,before_jsload,on_jsload,reload_dependents,map__29757,map__29757__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29862){
var map__29946 = p__29862;
var map__29946__$1 = ((((!((map__29946 == null)))?((((map__29946.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29946.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29946):map__29946);
var namespace = cljs.core.get.call(null,map__29946__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29827,inst_29832,inst_29864,inst_29824,inst_29828,inst_29830,inst_29860,state_val_29911,c__19757__auto__,map__29756,map__29756__$1,opts,before_jsload,on_jsload,reload_dependents,map__29757,map__29757__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29864__$1 = cljs.core.group_by.call(null,inst_29863,inst_29830);
var inst_29866 = (inst_29864__$1 == null);
var inst_29867 = cljs.core.not.call(null,inst_29866);
var state_29910__$1 = (function (){var statearr_29948 = state_29910;
(statearr_29948[(28)] = inst_29860);

(statearr_29948[(16)] = inst_29864__$1);

return statearr_29948;
})();
if(inst_29867){
var statearr_29949_30025 = state_29910__$1;
(statearr_29949_30025[(1)] = (32));

} else {
var statearr_29950_30026 = state_29910__$1;
(statearr_29950_30026[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (44))){
var inst_29886 = (state_29910[(21)]);
var inst_29899 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29886);
var inst_29900 = cljs.core.pr_str.call(null,inst_29899);
var inst_29901 = [cljs.core.str("not required: "),cljs.core.str(inst_29900)].join('');
var inst_29902 = figwheel.client.utils.log.call(null,inst_29901);
var state_29910__$1 = state_29910;
var statearr_29951_30027 = state_29910__$1;
(statearr_29951_30027[(2)] = inst_29902);

(statearr_29951_30027[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (6))){
var inst_29805 = (state_29910[(2)]);
var state_29910__$1 = state_29910;
var statearr_29952_30028 = state_29910__$1;
(statearr_29952_30028[(2)] = inst_29805);

(statearr_29952_30028[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (28))){
var inst_29830 = (state_29910[(26)]);
var inst_29857 = (state_29910[(2)]);
var inst_29858 = cljs.core.not_empty.call(null,inst_29830);
var state_29910__$1 = (function (){var statearr_29953 = state_29910;
(statearr_29953[(29)] = inst_29857);

return statearr_29953;
})();
if(cljs.core.truth_(inst_29858)){
var statearr_29954_30029 = state_29910__$1;
(statearr_29954_30029[(1)] = (29));

} else {
var statearr_29955_30030 = state_29910__$1;
(statearr_29955_30030[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (25))){
var inst_29828 = (state_29910[(25)]);
var inst_29844 = (state_29910[(2)]);
var inst_29845 = cljs.core.not_empty.call(null,inst_29828);
var state_29910__$1 = (function (){var statearr_29956 = state_29910;
(statearr_29956[(30)] = inst_29844);

return statearr_29956;
})();
if(cljs.core.truth_(inst_29845)){
var statearr_29957_30031 = state_29910__$1;
(statearr_29957_30031[(1)] = (26));

} else {
var statearr_29958_30032 = state_29910__$1;
(statearr_29958_30032[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (34))){
var inst_29879 = (state_29910[(2)]);
var state_29910__$1 = state_29910;
if(cljs.core.truth_(inst_29879)){
var statearr_29959_30033 = state_29910__$1;
(statearr_29959_30033[(1)] = (38));

} else {
var statearr_29960_30034 = state_29910__$1;
(statearr_29960_30034[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (17))){
var state_29910__$1 = state_29910;
var statearr_29961_30035 = state_29910__$1;
(statearr_29961_30035[(2)] = recompile_dependents);

(statearr_29961_30035[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (3))){
var state_29910__$1 = state_29910;
var statearr_29962_30036 = state_29910__$1;
(statearr_29962_30036[(2)] = null);

(statearr_29962_30036[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (12))){
var inst_29801 = (state_29910[(2)]);
var state_29910__$1 = state_29910;
var statearr_29963_30037 = state_29910__$1;
(statearr_29963_30037[(2)] = inst_29801);

(statearr_29963_30037[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (2))){
var inst_29763 = (state_29910[(13)]);
var inst_29770 = cljs.core.seq.call(null,inst_29763);
var inst_29771 = inst_29770;
var inst_29772 = null;
var inst_29773 = (0);
var inst_29774 = (0);
var state_29910__$1 = (function (){var statearr_29964 = state_29910;
(statearr_29964[(7)] = inst_29771);

(statearr_29964[(8)] = inst_29773);

(statearr_29964[(9)] = inst_29772);

(statearr_29964[(10)] = inst_29774);

return statearr_29964;
})();
var statearr_29965_30038 = state_29910__$1;
(statearr_29965_30038[(2)] = null);

(statearr_29965_30038[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (23))){
var inst_29827 = (state_29910[(23)]);
var inst_29832 = (state_29910[(24)]);
var inst_29824 = (state_29910[(19)]);
var inst_29828 = (state_29910[(25)]);
var inst_29830 = (state_29910[(26)]);
var inst_29835 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_29837 = (function (){var all_files = inst_29824;
var res_SINGLEQUOTE_ = inst_29827;
var res = inst_29828;
var files_not_loaded = inst_29830;
var dependencies_that_loaded = inst_29832;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29827,inst_29832,inst_29824,inst_29828,inst_29830,inst_29835,state_val_29911,c__19757__auto__,map__29756,map__29756__$1,opts,before_jsload,on_jsload,reload_dependents,map__29757,map__29757__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29836){
var map__29966 = p__29836;
var map__29966__$1 = ((((!((map__29966 == null)))?((((map__29966.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29966.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29966):map__29966);
var request_url = cljs.core.get.call(null,map__29966__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29827,inst_29832,inst_29824,inst_29828,inst_29830,inst_29835,state_val_29911,c__19757__auto__,map__29756,map__29756__$1,opts,before_jsload,on_jsload,reload_dependents,map__29757,map__29757__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29838 = cljs.core.reverse.call(null,inst_29832);
var inst_29839 = cljs.core.map.call(null,inst_29837,inst_29838);
var inst_29840 = cljs.core.pr_str.call(null,inst_29839);
var inst_29841 = figwheel.client.utils.log.call(null,inst_29840);
var state_29910__$1 = (function (){var statearr_29968 = state_29910;
(statearr_29968[(31)] = inst_29835);

return statearr_29968;
})();
var statearr_29969_30039 = state_29910__$1;
(statearr_29969_30039[(2)] = inst_29841);

(statearr_29969_30039[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (35))){
var state_29910__$1 = state_29910;
var statearr_29970_30040 = state_29910__$1;
(statearr_29970_30040[(2)] = true);

(statearr_29970_30040[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (19))){
var inst_29814 = (state_29910[(12)]);
var inst_29820 = figwheel.client.file_reloading.expand_files.call(null,inst_29814);
var state_29910__$1 = state_29910;
var statearr_29971_30041 = state_29910__$1;
(statearr_29971_30041[(2)] = inst_29820);

(statearr_29971_30041[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (11))){
var state_29910__$1 = state_29910;
var statearr_29972_30042 = state_29910__$1;
(statearr_29972_30042[(2)] = null);

(statearr_29972_30042[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (9))){
var inst_29803 = (state_29910[(2)]);
var state_29910__$1 = state_29910;
var statearr_29973_30043 = state_29910__$1;
(statearr_29973_30043[(2)] = inst_29803);

(statearr_29973_30043[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (5))){
var inst_29773 = (state_29910[(8)]);
var inst_29774 = (state_29910[(10)]);
var inst_29776 = (inst_29774 < inst_29773);
var inst_29777 = inst_29776;
var state_29910__$1 = state_29910;
if(cljs.core.truth_(inst_29777)){
var statearr_29974_30044 = state_29910__$1;
(statearr_29974_30044[(1)] = (7));

} else {
var statearr_29975_30045 = state_29910__$1;
(statearr_29975_30045[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (14))){
var inst_29784 = (state_29910[(22)]);
var inst_29793 = cljs.core.first.call(null,inst_29784);
var inst_29794 = figwheel.client.file_reloading.eval_body.call(null,inst_29793,opts);
var inst_29795 = cljs.core.next.call(null,inst_29784);
var inst_29771 = inst_29795;
var inst_29772 = null;
var inst_29773 = (0);
var inst_29774 = (0);
var state_29910__$1 = (function (){var statearr_29976 = state_29910;
(statearr_29976[(7)] = inst_29771);

(statearr_29976[(8)] = inst_29773);

(statearr_29976[(9)] = inst_29772);

(statearr_29976[(10)] = inst_29774);

(statearr_29976[(32)] = inst_29794);

return statearr_29976;
})();
var statearr_29977_30046 = state_29910__$1;
(statearr_29977_30046[(2)] = null);

(statearr_29977_30046[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (45))){
var state_29910__$1 = state_29910;
var statearr_29978_30047 = state_29910__$1;
(statearr_29978_30047[(2)] = null);

(statearr_29978_30047[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (26))){
var inst_29827 = (state_29910[(23)]);
var inst_29832 = (state_29910[(24)]);
var inst_29824 = (state_29910[(19)]);
var inst_29828 = (state_29910[(25)]);
var inst_29830 = (state_29910[(26)]);
var inst_29847 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29849 = (function (){var all_files = inst_29824;
var res_SINGLEQUOTE_ = inst_29827;
var res = inst_29828;
var files_not_loaded = inst_29830;
var dependencies_that_loaded = inst_29832;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29827,inst_29832,inst_29824,inst_29828,inst_29830,inst_29847,state_val_29911,c__19757__auto__,map__29756,map__29756__$1,opts,before_jsload,on_jsload,reload_dependents,map__29757,map__29757__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29848){
var map__29979 = p__29848;
var map__29979__$1 = ((((!((map__29979 == null)))?((((map__29979.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29979.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29979):map__29979);
var namespace = cljs.core.get.call(null,map__29979__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29979__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29827,inst_29832,inst_29824,inst_29828,inst_29830,inst_29847,state_val_29911,c__19757__auto__,map__29756,map__29756__$1,opts,before_jsload,on_jsload,reload_dependents,map__29757,map__29757__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29850 = cljs.core.map.call(null,inst_29849,inst_29828);
var inst_29851 = cljs.core.pr_str.call(null,inst_29850);
var inst_29852 = figwheel.client.utils.log.call(null,inst_29851);
var inst_29853 = (function (){var all_files = inst_29824;
var res_SINGLEQUOTE_ = inst_29827;
var res = inst_29828;
var files_not_loaded = inst_29830;
var dependencies_that_loaded = inst_29832;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29827,inst_29832,inst_29824,inst_29828,inst_29830,inst_29847,inst_29849,inst_29850,inst_29851,inst_29852,state_val_29911,c__19757__auto__,map__29756,map__29756__$1,opts,before_jsload,on_jsload,reload_dependents,map__29757,map__29757__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29827,inst_29832,inst_29824,inst_29828,inst_29830,inst_29847,inst_29849,inst_29850,inst_29851,inst_29852,state_val_29911,c__19757__auto__,map__29756,map__29756__$1,opts,before_jsload,on_jsload,reload_dependents,map__29757,map__29757__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29854 = setTimeout(inst_29853,(10));
var state_29910__$1 = (function (){var statearr_29981 = state_29910;
(statearr_29981[(33)] = inst_29847);

(statearr_29981[(34)] = inst_29852);

return statearr_29981;
})();
var statearr_29982_30048 = state_29910__$1;
(statearr_29982_30048[(2)] = inst_29854);

(statearr_29982_30048[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (16))){
var state_29910__$1 = state_29910;
var statearr_29983_30049 = state_29910__$1;
(statearr_29983_30049[(2)] = reload_dependents);

(statearr_29983_30049[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (38))){
var inst_29864 = (state_29910[(16)]);
var inst_29881 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29864);
var state_29910__$1 = state_29910;
var statearr_29984_30050 = state_29910__$1;
(statearr_29984_30050[(2)] = inst_29881);

(statearr_29984_30050[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (30))){
var state_29910__$1 = state_29910;
var statearr_29985_30051 = state_29910__$1;
(statearr_29985_30051[(2)] = null);

(statearr_29985_30051[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (10))){
var inst_29784 = (state_29910[(22)]);
var inst_29786 = cljs.core.chunked_seq_QMARK_.call(null,inst_29784);
var state_29910__$1 = state_29910;
if(inst_29786){
var statearr_29986_30052 = state_29910__$1;
(statearr_29986_30052[(1)] = (13));

} else {
var statearr_29987_30053 = state_29910__$1;
(statearr_29987_30053[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (18))){
var inst_29818 = (state_29910[(2)]);
var state_29910__$1 = state_29910;
if(cljs.core.truth_(inst_29818)){
var statearr_29988_30054 = state_29910__$1;
(statearr_29988_30054[(1)] = (19));

} else {
var statearr_29989_30055 = state_29910__$1;
(statearr_29989_30055[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (42))){
var state_29910__$1 = state_29910;
var statearr_29990_30056 = state_29910__$1;
(statearr_29990_30056[(2)] = null);

(statearr_29990_30056[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (37))){
var inst_29876 = (state_29910[(2)]);
var state_29910__$1 = state_29910;
var statearr_29991_30057 = state_29910__$1;
(statearr_29991_30057[(2)] = inst_29876);

(statearr_29991_30057[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29911 === (8))){
var inst_29771 = (state_29910[(7)]);
var inst_29784 = (state_29910[(22)]);
var inst_29784__$1 = cljs.core.seq.call(null,inst_29771);
var state_29910__$1 = (function (){var statearr_29992 = state_29910;
(statearr_29992[(22)] = inst_29784__$1);

return statearr_29992;
})();
if(inst_29784__$1){
var statearr_29993_30058 = state_29910__$1;
(statearr_29993_30058[(1)] = (10));

} else {
var statearr_29994_30059 = state_29910__$1;
(statearr_29994_30059[(1)] = (11));

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
});})(c__19757__auto__,map__29756,map__29756__$1,opts,before_jsload,on_jsload,reload_dependents,map__29757,map__29757__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__19692__auto__,c__19757__auto__,map__29756,map__29756__$1,opts,before_jsload,on_jsload,reload_dependents,map__29757,map__29757__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19693__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19693__auto____0 = (function (){
var statearr_29998 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29998[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19693__auto__);

(statearr_29998[(1)] = (1));

return statearr_29998;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19693__auto____1 = (function (state_29910){
while(true){
var ret_value__19694__auto__ = (function (){try{while(true){
var result__19695__auto__ = switch__19692__auto__.call(null,state_29910);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19695__auto__;
}
break;
}
}catch (e29999){if((e29999 instanceof Object)){
var ex__19696__auto__ = e29999;
var statearr_30000_30060 = state_29910;
(statearr_30000_30060[(5)] = ex__19696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29910);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29999;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30061 = state_29910;
state_29910 = G__30061;
continue;
} else {
return ret_value__19694__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19693__auto__ = function(state_29910){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19693__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19693__auto____1.call(this,state_29910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19693__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19693__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19693__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19693__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19693__auto__;
})()
;})(switch__19692__auto__,c__19757__auto__,map__29756,map__29756__$1,opts,before_jsload,on_jsload,reload_dependents,map__29757,map__29757__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__19759__auto__ = (function (){var statearr_30001 = f__19758__auto__.call(null);
(statearr_30001[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19757__auto__);

return statearr_30001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19759__auto__);
});})(c__19757__auto__,map__29756,map__29756__$1,opts,before_jsload,on_jsload,reload_dependents,map__29757,map__29757__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__19757__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30064,link){
var map__30067 = p__30064;
var map__30067__$1 = ((((!((map__30067 == null)))?((((map__30067.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30067.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30067):map__30067);
var file = cljs.core.get.call(null,map__30067__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__30067,map__30067__$1,file){
return (function (p1__30062_SHARP_,p2__30063_SHARP_){
if(cljs.core._EQ_.call(null,p1__30062_SHARP_,p2__30063_SHARP_)){
return p1__30062_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__30067,map__30067__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30073){
var map__30074 = p__30073;
var map__30074__$1 = ((((!((map__30074 == null)))?((((map__30074.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30074.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30074):map__30074);
var match_length = cljs.core.get.call(null,map__30074__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__30074__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30069_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30069_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args30076 = [];
var len__17390__auto___30079 = arguments.length;
var i__17391__auto___30080 = (0);
while(true){
if((i__17391__auto___30080 < len__17390__auto___30079)){
args30076.push((arguments[i__17391__auto___30080]));

var G__30081 = (i__17391__auto___30080 + (1));
i__17391__auto___30080 = G__30081;
continue;
} else {
}
break;
}

var G__30078 = args30076.length;
switch (G__30078) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30076.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__30083_SHARP_,p2__30084_SHARP_){
return cljs.core.assoc.call(null,p1__30083_SHARP_,cljs.core.get.call(null,p2__30084_SHARP_,key),p2__30084_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__30085){
var map__30088 = p__30085;
var map__30088__$1 = ((((!((map__30088 == null)))?((((map__30088.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30088.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30088):map__30088);
var f_data = map__30088__$1;
var file = cljs.core.get.call(null,map__30088__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30090,files_msg){
var map__30097 = p__30090;
var map__30097__$1 = ((((!((map__30097 == null)))?((((map__30097.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30097.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30097):map__30097);
var opts = map__30097__$1;
var on_cssload = cljs.core.get.call(null,map__30097__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__30099_30103 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__30100_30104 = null;
var count__30101_30105 = (0);
var i__30102_30106 = (0);
while(true){
if((i__30102_30106 < count__30101_30105)){
var f_30107 = cljs.core._nth.call(null,chunk__30100_30104,i__30102_30106);
figwheel.client.file_reloading.reload_css_file.call(null,f_30107);

var G__30108 = seq__30099_30103;
var G__30109 = chunk__30100_30104;
var G__30110 = count__30101_30105;
var G__30111 = (i__30102_30106 + (1));
seq__30099_30103 = G__30108;
chunk__30100_30104 = G__30109;
count__30101_30105 = G__30110;
i__30102_30106 = G__30111;
continue;
} else {
var temp__4425__auto___30112 = cljs.core.seq.call(null,seq__30099_30103);
if(temp__4425__auto___30112){
var seq__30099_30113__$1 = temp__4425__auto___30112;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30099_30113__$1)){
var c__17135__auto___30114 = cljs.core.chunk_first.call(null,seq__30099_30113__$1);
var G__30115 = cljs.core.chunk_rest.call(null,seq__30099_30113__$1);
var G__30116 = c__17135__auto___30114;
var G__30117 = cljs.core.count.call(null,c__17135__auto___30114);
var G__30118 = (0);
seq__30099_30103 = G__30115;
chunk__30100_30104 = G__30116;
count__30101_30105 = G__30117;
i__30102_30106 = G__30118;
continue;
} else {
var f_30119 = cljs.core.first.call(null,seq__30099_30113__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_30119);

var G__30120 = cljs.core.next.call(null,seq__30099_30113__$1);
var G__30121 = null;
var G__30122 = (0);
var G__30123 = (0);
seq__30099_30103 = G__30120;
chunk__30100_30104 = G__30121;
count__30101_30105 = G__30122;
i__30102_30106 = G__30123;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__30097,map__30097__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__30097,map__30097__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1445124185640