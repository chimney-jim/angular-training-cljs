// Compiled by ClojureScript 1.7.145 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29064_29078 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29065_29079 = null;
var count__29066_29080 = (0);
var i__29067_29081 = (0);
while(true){
if((i__29067_29081 < count__29066_29080)){
var f_29082 = cljs.core._nth.call(null,chunk__29065_29079,i__29067_29081);
cljs.core.println.call(null,"  ",f_29082);

var G__29083 = seq__29064_29078;
var G__29084 = chunk__29065_29079;
var G__29085 = count__29066_29080;
var G__29086 = (i__29067_29081 + (1));
seq__29064_29078 = G__29083;
chunk__29065_29079 = G__29084;
count__29066_29080 = G__29085;
i__29067_29081 = G__29086;
continue;
} else {
var temp__4425__auto___29087 = cljs.core.seq.call(null,seq__29064_29078);
if(temp__4425__auto___29087){
var seq__29064_29088__$1 = temp__4425__auto___29087;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29064_29088__$1)){
var c__17135__auto___29089 = cljs.core.chunk_first.call(null,seq__29064_29088__$1);
var G__29090 = cljs.core.chunk_rest.call(null,seq__29064_29088__$1);
var G__29091 = c__17135__auto___29089;
var G__29092 = cljs.core.count.call(null,c__17135__auto___29089);
var G__29093 = (0);
seq__29064_29078 = G__29090;
chunk__29065_29079 = G__29091;
count__29066_29080 = G__29092;
i__29067_29081 = G__29093;
continue;
} else {
var f_29094 = cljs.core.first.call(null,seq__29064_29088__$1);
cljs.core.println.call(null,"  ",f_29094);

var G__29095 = cljs.core.next.call(null,seq__29064_29088__$1);
var G__29096 = null;
var G__29097 = (0);
var G__29098 = (0);
seq__29064_29078 = G__29095;
chunk__29065_29079 = G__29096;
count__29066_29080 = G__29097;
i__29067_29081 = G__29098;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29099 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16332__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16332__auto__)){
return or__16332__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_29099);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_29099)))?cljs.core.second.call(null,arglists_29099):arglists_29099));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29068 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29069 = null;
var count__29070 = (0);
var i__29071 = (0);
while(true){
if((i__29071 < count__29070)){
var vec__29072 = cljs.core._nth.call(null,chunk__29069,i__29071);
var name = cljs.core.nth.call(null,vec__29072,(0),null);
var map__29073 = cljs.core.nth.call(null,vec__29072,(1),null);
var map__29073__$1 = ((((!((map__29073 == null)))?((((map__29073.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29073.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29073):map__29073);
var doc = cljs.core.get.call(null,map__29073__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__29073__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__29100 = seq__29068;
var G__29101 = chunk__29069;
var G__29102 = count__29070;
var G__29103 = (i__29071 + (1));
seq__29068 = G__29100;
chunk__29069 = G__29101;
count__29070 = G__29102;
i__29071 = G__29103;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__29068);
if(temp__4425__auto__){
var seq__29068__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29068__$1)){
var c__17135__auto__ = cljs.core.chunk_first.call(null,seq__29068__$1);
var G__29104 = cljs.core.chunk_rest.call(null,seq__29068__$1);
var G__29105 = c__17135__auto__;
var G__29106 = cljs.core.count.call(null,c__17135__auto__);
var G__29107 = (0);
seq__29068 = G__29104;
chunk__29069 = G__29105;
count__29070 = G__29106;
i__29071 = G__29107;
continue;
} else {
var vec__29075 = cljs.core.first.call(null,seq__29068__$1);
var name = cljs.core.nth.call(null,vec__29075,(0),null);
var map__29076 = cljs.core.nth.call(null,vec__29075,(1),null);
var map__29076__$1 = ((((!((map__29076 == null)))?((((map__29076.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29076.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29076):map__29076);
var doc = cljs.core.get.call(null,map__29076__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__29076__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__29108 = cljs.core.next.call(null,seq__29068__$1);
var G__29109 = null;
var G__29110 = (0);
var G__29111 = (0);
seq__29068 = G__29108;
chunk__29069 = G__29109;
count__29070 = G__29110;
i__29071 = G__29111;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1445124185290