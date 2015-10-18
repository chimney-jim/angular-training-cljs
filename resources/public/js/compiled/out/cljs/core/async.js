// Compiled by ClojureScript 1.7.145 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async25238 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25238 = (function (fn_handler,f,meta25239){
this.fn_handler = fn_handler;
this.f = f;
this.meta25239 = meta25239;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25238.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25240,meta25239__$1){
var self__ = this;
var _25240__$1 = this;
return (new cljs.core.async.t_cljs$core$async25238(self__.fn_handler,self__.f,meta25239__$1));
});

cljs.core.async.t_cljs$core$async25238.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25240){
var self__ = this;
var _25240__$1 = this;
return self__.meta25239;
});

cljs.core.async.t_cljs$core$async25238.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25238.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25238.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async25238.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta25239","meta25239",1161652001,null)], null);
});

cljs.core.async.t_cljs$core$async25238.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25238.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25238";

cljs.core.async.t_cljs$core$async25238.cljs$lang$ctorPrWriter = (function (this__16930__auto__,writer__16931__auto__,opt__16932__auto__){
return cljs.core._write.call(null,writer__16931__auto__,"cljs.core.async/t_cljs$core$async25238");
});

cljs.core.async.__GT_t_cljs$core$async25238 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async25238(fn_handler__$1,f__$1,meta25239){
return (new cljs.core.async.t_cljs$core$async25238(fn_handler__$1,f__$1,meta25239));
});

}

return (new cljs.core.async.t_cljs$core$async25238(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args25243 = [];
var len__17390__auto___25246 = arguments.length;
var i__17391__auto___25247 = (0);
while(true){
if((i__17391__auto___25247 < len__17390__auto___25246)){
args25243.push((arguments[i__17391__auto___25247]));

var G__25248 = (i__17391__auto___25247 + (1));
i__17391__auto___25247 = G__25248;
continue;
} else {
}
break;
}

var G__25245 = args25243.length;
switch (G__25245) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25243.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args25250 = [];
var len__17390__auto___25253 = arguments.length;
var i__17391__auto___25254 = (0);
while(true){
if((i__17391__auto___25254 < len__17390__auto___25253)){
args25250.push((arguments[i__17391__auto___25254]));

var G__25255 = (i__17391__auto___25254 + (1));
i__17391__auto___25254 = G__25255;
continue;
} else {
}
break;
}

var G__25252 = args25250.length;
switch (G__25252) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25250.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_25257 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_25257);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_25257,ret){
return (function (){
return fn1.call(null,val_25257);
});})(val_25257,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args25258 = [];
var len__17390__auto___25261 = arguments.length;
var i__17391__auto___25262 = (0);
while(true){
if((i__17391__auto___25262 < len__17390__auto___25261)){
args25258.push((arguments[i__17391__auto___25262]));

var G__25263 = (i__17391__auto___25262 + (1));
i__17391__auto___25262 = G__25263;
continue;
} else {
}
break;
}

var G__25260 = args25258.length;
switch (G__25260) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25258.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17235__auto___25265 = n;
var x_25266 = (0);
while(true){
if((x_25266 < n__17235__auto___25265)){
(a[x_25266] = (0));

var G__25267 = (x_25266 + (1));
x_25266 = G__25267;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__25268 = (i + (1));
i = G__25268;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async25272 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25272 = (function (alt_flag,flag,meta25273){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta25273 = meta25273;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25272.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25274,meta25273__$1){
var self__ = this;
var _25274__$1 = this;
return (new cljs.core.async.t_cljs$core$async25272(self__.alt_flag,self__.flag,meta25273__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async25272.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25274){
var self__ = this;
var _25274__$1 = this;
return self__.meta25273;
});})(flag))
;

cljs.core.async.t_cljs$core$async25272.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25272.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async25272.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25272.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta25273","meta25273",1127869,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async25272.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25272.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25272";

cljs.core.async.t_cljs$core$async25272.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16930__auto__,writer__16931__auto__,opt__16932__auto__){
return cljs.core._write.call(null,writer__16931__auto__,"cljs.core.async/t_cljs$core$async25272");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async25272 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async25272(alt_flag__$1,flag__$1,meta25273){
return (new cljs.core.async.t_cljs$core$async25272(alt_flag__$1,flag__$1,meta25273));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async25272(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async25278 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25278 = (function (alt_handler,flag,cb,meta25279){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta25279 = meta25279;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25278.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25280,meta25279__$1){
var self__ = this;
var _25280__$1 = this;
return (new cljs.core.async.t_cljs$core$async25278(self__.alt_handler,self__.flag,self__.cb,meta25279__$1));
});

cljs.core.async.t_cljs$core$async25278.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25280){
var self__ = this;
var _25280__$1 = this;
return self__.meta25279;
});

cljs.core.async.t_cljs$core$async25278.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25278.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async25278.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async25278.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta25279","meta25279",-419311101,null)], null);
});

cljs.core.async.t_cljs$core$async25278.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25278.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25278";

cljs.core.async.t_cljs$core$async25278.cljs$lang$ctorPrWriter = (function (this__16930__auto__,writer__16931__auto__,opt__16932__auto__){
return cljs.core._write.call(null,writer__16931__auto__,"cljs.core.async/t_cljs$core$async25278");
});

cljs.core.async.__GT_t_cljs$core$async25278 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async25278(alt_handler__$1,flag__$1,cb__$1,meta25279){
return (new cljs.core.async.t_cljs$core$async25278(alt_handler__$1,flag__$1,cb__$1,meta25279));
});

}

return (new cljs.core.async.t_cljs$core$async25278(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25281_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25281_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25282_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25282_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16332__auto__ = wport;
if(cljs.core.truth_(or__16332__auto__)){
return or__16332__auto__;
} else {
return port;
}
})()], null));
} else {
var G__25283 = (i + (1));
i = G__25283;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16332__auto__ = ret;
if(cljs.core.truth_(or__16332__auto__)){
return or__16332__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16320__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16320__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16320__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17397__auto__ = [];
var len__17390__auto___25289 = arguments.length;
var i__17391__auto___25290 = (0);
while(true){
if((i__17391__auto___25290 < len__17390__auto___25289)){
args__17397__auto__.push((arguments[i__17391__auto___25290]));

var G__25291 = (i__17391__auto___25290 + (1));
i__17391__auto___25290 = G__25291;
continue;
} else {
}
break;
}

var argseq__17398__auto__ = ((((1) < args__17397__auto__.length))?(new cljs.core.IndexedSeq(args__17397__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17398__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__25286){
var map__25287 = p__25286;
var map__25287__$1 = ((((!((map__25287 == null)))?((((map__25287.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25287.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25287):map__25287);
var opts = map__25287__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq25284){
var G__25285 = cljs.core.first.call(null,seq25284);
var seq25284__$1 = cljs.core.next.call(null,seq25284);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25285,seq25284__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args25292 = [];
var len__17390__auto___25342 = arguments.length;
var i__17391__auto___25343 = (0);
while(true){
if((i__17391__auto___25343 < len__17390__auto___25342)){
args25292.push((arguments[i__17391__auto___25343]));

var G__25344 = (i__17391__auto___25343 + (1));
i__17391__auto___25343 = G__25344;
continue;
} else {
}
break;
}

var G__25294 = args25292.length;
switch (G__25294) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25292.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19757__auto___25346 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19757__auto___25346){
return (function (){
var f__19758__auto__ = (function (){var switch__19692__auto__ = ((function (c__19757__auto___25346){
return (function (state_25318){
var state_val_25319 = (state_25318[(1)]);
if((state_val_25319 === (7))){
var inst_25314 = (state_25318[(2)]);
var state_25318__$1 = state_25318;
var statearr_25320_25347 = state_25318__$1;
(statearr_25320_25347[(2)] = inst_25314);

(statearr_25320_25347[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25319 === (1))){
var state_25318__$1 = state_25318;
var statearr_25321_25348 = state_25318__$1;
(statearr_25321_25348[(2)] = null);

(statearr_25321_25348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25319 === (4))){
var inst_25297 = (state_25318[(7)]);
var inst_25297__$1 = (state_25318[(2)]);
var inst_25298 = (inst_25297__$1 == null);
var state_25318__$1 = (function (){var statearr_25322 = state_25318;
(statearr_25322[(7)] = inst_25297__$1);

return statearr_25322;
})();
if(cljs.core.truth_(inst_25298)){
var statearr_25323_25349 = state_25318__$1;
(statearr_25323_25349[(1)] = (5));

} else {
var statearr_25324_25350 = state_25318__$1;
(statearr_25324_25350[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25319 === (13))){
var state_25318__$1 = state_25318;
var statearr_25325_25351 = state_25318__$1;
(statearr_25325_25351[(2)] = null);

(statearr_25325_25351[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25319 === (6))){
var inst_25297 = (state_25318[(7)]);
var state_25318__$1 = state_25318;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25318__$1,(11),to,inst_25297);
} else {
if((state_val_25319 === (3))){
var inst_25316 = (state_25318[(2)]);
var state_25318__$1 = state_25318;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25318__$1,inst_25316);
} else {
if((state_val_25319 === (12))){
var state_25318__$1 = state_25318;
var statearr_25326_25352 = state_25318__$1;
(statearr_25326_25352[(2)] = null);

(statearr_25326_25352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25319 === (2))){
var state_25318__$1 = state_25318;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25318__$1,(4),from);
} else {
if((state_val_25319 === (11))){
var inst_25307 = (state_25318[(2)]);
var state_25318__$1 = state_25318;
if(cljs.core.truth_(inst_25307)){
var statearr_25327_25353 = state_25318__$1;
(statearr_25327_25353[(1)] = (12));

} else {
var statearr_25328_25354 = state_25318__$1;
(statearr_25328_25354[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25319 === (9))){
var state_25318__$1 = state_25318;
var statearr_25329_25355 = state_25318__$1;
(statearr_25329_25355[(2)] = null);

(statearr_25329_25355[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25319 === (5))){
var state_25318__$1 = state_25318;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25330_25356 = state_25318__$1;
(statearr_25330_25356[(1)] = (8));

} else {
var statearr_25331_25357 = state_25318__$1;
(statearr_25331_25357[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25319 === (14))){
var inst_25312 = (state_25318[(2)]);
var state_25318__$1 = state_25318;
var statearr_25332_25358 = state_25318__$1;
(statearr_25332_25358[(2)] = inst_25312);

(statearr_25332_25358[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25319 === (10))){
var inst_25304 = (state_25318[(2)]);
var state_25318__$1 = state_25318;
var statearr_25333_25359 = state_25318__$1;
(statearr_25333_25359[(2)] = inst_25304);

(statearr_25333_25359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25319 === (8))){
var inst_25301 = cljs.core.async.close_BANG_.call(null,to);
var state_25318__$1 = state_25318;
var statearr_25334_25360 = state_25318__$1;
(statearr_25334_25360[(2)] = inst_25301);

(statearr_25334_25360[(1)] = (10));


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
});})(c__19757__auto___25346))
;
return ((function (switch__19692__auto__,c__19757__auto___25346){
return (function() {
var cljs$core$async$state_machine__19693__auto__ = null;
var cljs$core$async$state_machine__19693__auto____0 = (function (){
var statearr_25338 = [null,null,null,null,null,null,null,null];
(statearr_25338[(0)] = cljs$core$async$state_machine__19693__auto__);

(statearr_25338[(1)] = (1));

return statearr_25338;
});
var cljs$core$async$state_machine__19693__auto____1 = (function (state_25318){
while(true){
var ret_value__19694__auto__ = (function (){try{while(true){
var result__19695__auto__ = switch__19692__auto__.call(null,state_25318);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19695__auto__;
}
break;
}
}catch (e25339){if((e25339 instanceof Object)){
var ex__19696__auto__ = e25339;
var statearr_25340_25361 = state_25318;
(statearr_25340_25361[(5)] = ex__19696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25318);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25339;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25362 = state_25318;
state_25318 = G__25362;
continue;
} else {
return ret_value__19694__auto__;
}
break;
}
});
cljs$core$async$state_machine__19693__auto__ = function(state_25318){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19693__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19693__auto____1.call(this,state_25318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19693__auto____0;
cljs$core$async$state_machine__19693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19693__auto____1;
return cljs$core$async$state_machine__19693__auto__;
})()
;})(switch__19692__auto__,c__19757__auto___25346))
})();
var state__19759__auto__ = (function (){var statearr_25341 = f__19758__auto__.call(null);
(statearr_25341[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19757__auto___25346);

return statearr_25341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19759__auto__);
});})(c__19757__auto___25346))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__25546){
var vec__25547 = p__25546;
var v = cljs.core.nth.call(null,vec__25547,(0),null);
var p = cljs.core.nth.call(null,vec__25547,(1),null);
var job = vec__25547;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19757__auto___25729 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19757__auto___25729,res,vec__25547,v,p,job,jobs,results){
return (function (){
var f__19758__auto__ = (function (){var switch__19692__auto__ = ((function (c__19757__auto___25729,res,vec__25547,v,p,job,jobs,results){
return (function (state_25552){
var state_val_25553 = (state_25552[(1)]);
if((state_val_25553 === (1))){
var state_25552__$1 = state_25552;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25552__$1,(2),res,v);
} else {
if((state_val_25553 === (2))){
var inst_25549 = (state_25552[(2)]);
var inst_25550 = cljs.core.async.close_BANG_.call(null,res);
var state_25552__$1 = (function (){var statearr_25554 = state_25552;
(statearr_25554[(7)] = inst_25549);

return statearr_25554;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25552__$1,inst_25550);
} else {
return null;
}
}
});})(c__19757__auto___25729,res,vec__25547,v,p,job,jobs,results))
;
return ((function (switch__19692__auto__,c__19757__auto___25729,res,vec__25547,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19693__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19693__auto____0 = (function (){
var statearr_25558 = [null,null,null,null,null,null,null,null];
(statearr_25558[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19693__auto__);

(statearr_25558[(1)] = (1));

return statearr_25558;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19693__auto____1 = (function (state_25552){
while(true){
var ret_value__19694__auto__ = (function (){try{while(true){
var result__19695__auto__ = switch__19692__auto__.call(null,state_25552);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19695__auto__;
}
break;
}
}catch (e25559){if((e25559 instanceof Object)){
var ex__19696__auto__ = e25559;
var statearr_25560_25730 = state_25552;
(statearr_25560_25730[(5)] = ex__19696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25552);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25559;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25731 = state_25552;
state_25552 = G__25731;
continue;
} else {
return ret_value__19694__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19693__auto__ = function(state_25552){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19693__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19693__auto____1.call(this,state_25552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19693__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19693__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19693__auto__;
})()
;})(switch__19692__auto__,c__19757__auto___25729,res,vec__25547,v,p,job,jobs,results))
})();
var state__19759__auto__ = (function (){var statearr_25561 = f__19758__auto__.call(null);
(statearr_25561[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19757__auto___25729);

return statearr_25561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19759__auto__);
});})(c__19757__auto___25729,res,vec__25547,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__25562){
var vec__25563 = p__25562;
var v = cljs.core.nth.call(null,vec__25563,(0),null);
var p = cljs.core.nth.call(null,vec__25563,(1),null);
var job = vec__25563;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17235__auto___25732 = n;
var __25733 = (0);
while(true){
if((__25733 < n__17235__auto___25732)){
var G__25564_25734 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__25564_25734) {
case "compute":
var c__19757__auto___25736 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25733,c__19757__auto___25736,G__25564_25734,n__17235__auto___25732,jobs,results,process,async){
return (function (){
var f__19758__auto__ = (function (){var switch__19692__auto__ = ((function (__25733,c__19757__auto___25736,G__25564_25734,n__17235__auto___25732,jobs,results,process,async){
return (function (state_25577){
var state_val_25578 = (state_25577[(1)]);
if((state_val_25578 === (1))){
var state_25577__$1 = state_25577;
var statearr_25579_25737 = state_25577__$1;
(statearr_25579_25737[(2)] = null);

(statearr_25579_25737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25578 === (2))){
var state_25577__$1 = state_25577;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25577__$1,(4),jobs);
} else {
if((state_val_25578 === (3))){
var inst_25575 = (state_25577[(2)]);
var state_25577__$1 = state_25577;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25577__$1,inst_25575);
} else {
if((state_val_25578 === (4))){
var inst_25567 = (state_25577[(2)]);
var inst_25568 = process.call(null,inst_25567);
var state_25577__$1 = state_25577;
if(cljs.core.truth_(inst_25568)){
var statearr_25580_25738 = state_25577__$1;
(statearr_25580_25738[(1)] = (5));

} else {
var statearr_25581_25739 = state_25577__$1;
(statearr_25581_25739[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25578 === (5))){
var state_25577__$1 = state_25577;
var statearr_25582_25740 = state_25577__$1;
(statearr_25582_25740[(2)] = null);

(statearr_25582_25740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25578 === (6))){
var state_25577__$1 = state_25577;
var statearr_25583_25741 = state_25577__$1;
(statearr_25583_25741[(2)] = null);

(statearr_25583_25741[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25578 === (7))){
var inst_25573 = (state_25577[(2)]);
var state_25577__$1 = state_25577;
var statearr_25584_25742 = state_25577__$1;
(statearr_25584_25742[(2)] = inst_25573);

(statearr_25584_25742[(1)] = (3));


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
});})(__25733,c__19757__auto___25736,G__25564_25734,n__17235__auto___25732,jobs,results,process,async))
;
return ((function (__25733,switch__19692__auto__,c__19757__auto___25736,G__25564_25734,n__17235__auto___25732,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19693__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19693__auto____0 = (function (){
var statearr_25588 = [null,null,null,null,null,null,null];
(statearr_25588[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19693__auto__);

(statearr_25588[(1)] = (1));

return statearr_25588;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19693__auto____1 = (function (state_25577){
while(true){
var ret_value__19694__auto__ = (function (){try{while(true){
var result__19695__auto__ = switch__19692__auto__.call(null,state_25577);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19695__auto__;
}
break;
}
}catch (e25589){if((e25589 instanceof Object)){
var ex__19696__auto__ = e25589;
var statearr_25590_25743 = state_25577;
(statearr_25590_25743[(5)] = ex__19696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25577);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25589;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25744 = state_25577;
state_25577 = G__25744;
continue;
} else {
return ret_value__19694__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19693__auto__ = function(state_25577){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19693__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19693__auto____1.call(this,state_25577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19693__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19693__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19693__auto__;
})()
;})(__25733,switch__19692__auto__,c__19757__auto___25736,G__25564_25734,n__17235__auto___25732,jobs,results,process,async))
})();
var state__19759__auto__ = (function (){var statearr_25591 = f__19758__auto__.call(null);
(statearr_25591[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19757__auto___25736);

return statearr_25591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19759__auto__);
});})(__25733,c__19757__auto___25736,G__25564_25734,n__17235__auto___25732,jobs,results,process,async))
);


break;
case "async":
var c__19757__auto___25745 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25733,c__19757__auto___25745,G__25564_25734,n__17235__auto___25732,jobs,results,process,async){
return (function (){
var f__19758__auto__ = (function (){var switch__19692__auto__ = ((function (__25733,c__19757__auto___25745,G__25564_25734,n__17235__auto___25732,jobs,results,process,async){
return (function (state_25604){
var state_val_25605 = (state_25604[(1)]);
if((state_val_25605 === (1))){
var state_25604__$1 = state_25604;
var statearr_25606_25746 = state_25604__$1;
(statearr_25606_25746[(2)] = null);

(statearr_25606_25746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25605 === (2))){
var state_25604__$1 = state_25604;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25604__$1,(4),jobs);
} else {
if((state_val_25605 === (3))){
var inst_25602 = (state_25604[(2)]);
var state_25604__$1 = state_25604;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25604__$1,inst_25602);
} else {
if((state_val_25605 === (4))){
var inst_25594 = (state_25604[(2)]);
var inst_25595 = async.call(null,inst_25594);
var state_25604__$1 = state_25604;
if(cljs.core.truth_(inst_25595)){
var statearr_25607_25747 = state_25604__$1;
(statearr_25607_25747[(1)] = (5));

} else {
var statearr_25608_25748 = state_25604__$1;
(statearr_25608_25748[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25605 === (5))){
var state_25604__$1 = state_25604;
var statearr_25609_25749 = state_25604__$1;
(statearr_25609_25749[(2)] = null);

(statearr_25609_25749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25605 === (6))){
var state_25604__$1 = state_25604;
var statearr_25610_25750 = state_25604__$1;
(statearr_25610_25750[(2)] = null);

(statearr_25610_25750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25605 === (7))){
var inst_25600 = (state_25604[(2)]);
var state_25604__$1 = state_25604;
var statearr_25611_25751 = state_25604__$1;
(statearr_25611_25751[(2)] = inst_25600);

(statearr_25611_25751[(1)] = (3));


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
});})(__25733,c__19757__auto___25745,G__25564_25734,n__17235__auto___25732,jobs,results,process,async))
;
return ((function (__25733,switch__19692__auto__,c__19757__auto___25745,G__25564_25734,n__17235__auto___25732,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19693__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19693__auto____0 = (function (){
var statearr_25615 = [null,null,null,null,null,null,null];
(statearr_25615[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19693__auto__);

(statearr_25615[(1)] = (1));

return statearr_25615;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19693__auto____1 = (function (state_25604){
while(true){
var ret_value__19694__auto__ = (function (){try{while(true){
var result__19695__auto__ = switch__19692__auto__.call(null,state_25604);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19695__auto__;
}
break;
}
}catch (e25616){if((e25616 instanceof Object)){
var ex__19696__auto__ = e25616;
var statearr_25617_25752 = state_25604;
(statearr_25617_25752[(5)] = ex__19696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25604);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25616;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25753 = state_25604;
state_25604 = G__25753;
continue;
} else {
return ret_value__19694__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19693__auto__ = function(state_25604){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19693__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19693__auto____1.call(this,state_25604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19693__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19693__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19693__auto__;
})()
;})(__25733,switch__19692__auto__,c__19757__auto___25745,G__25564_25734,n__17235__auto___25732,jobs,results,process,async))
})();
var state__19759__auto__ = (function (){var statearr_25618 = f__19758__auto__.call(null);
(statearr_25618[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19757__auto___25745);

return statearr_25618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19759__auto__);
});})(__25733,c__19757__auto___25745,G__25564_25734,n__17235__auto___25732,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__25754 = (__25733 + (1));
__25733 = G__25754;
continue;
} else {
}
break;
}

var c__19757__auto___25755 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19757__auto___25755,jobs,results,process,async){
return (function (){
var f__19758__auto__ = (function (){var switch__19692__auto__ = ((function (c__19757__auto___25755,jobs,results,process,async){
return (function (state_25640){
var state_val_25641 = (state_25640[(1)]);
if((state_val_25641 === (1))){
var state_25640__$1 = state_25640;
var statearr_25642_25756 = state_25640__$1;
(statearr_25642_25756[(2)] = null);

(statearr_25642_25756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25641 === (2))){
var state_25640__$1 = state_25640;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25640__$1,(4),from);
} else {
if((state_val_25641 === (3))){
var inst_25638 = (state_25640[(2)]);
var state_25640__$1 = state_25640;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25640__$1,inst_25638);
} else {
if((state_val_25641 === (4))){
var inst_25621 = (state_25640[(7)]);
var inst_25621__$1 = (state_25640[(2)]);
var inst_25622 = (inst_25621__$1 == null);
var state_25640__$1 = (function (){var statearr_25643 = state_25640;
(statearr_25643[(7)] = inst_25621__$1);

return statearr_25643;
})();
if(cljs.core.truth_(inst_25622)){
var statearr_25644_25757 = state_25640__$1;
(statearr_25644_25757[(1)] = (5));

} else {
var statearr_25645_25758 = state_25640__$1;
(statearr_25645_25758[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25641 === (5))){
var inst_25624 = cljs.core.async.close_BANG_.call(null,jobs);
var state_25640__$1 = state_25640;
var statearr_25646_25759 = state_25640__$1;
(statearr_25646_25759[(2)] = inst_25624);

(statearr_25646_25759[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25641 === (6))){
var inst_25626 = (state_25640[(8)]);
var inst_25621 = (state_25640[(7)]);
var inst_25626__$1 = cljs.core.async.chan.call(null,(1));
var inst_25627 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25628 = [inst_25621,inst_25626__$1];
var inst_25629 = (new cljs.core.PersistentVector(null,2,(5),inst_25627,inst_25628,null));
var state_25640__$1 = (function (){var statearr_25647 = state_25640;
(statearr_25647[(8)] = inst_25626__$1);

return statearr_25647;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25640__$1,(8),jobs,inst_25629);
} else {
if((state_val_25641 === (7))){
var inst_25636 = (state_25640[(2)]);
var state_25640__$1 = state_25640;
var statearr_25648_25760 = state_25640__$1;
(statearr_25648_25760[(2)] = inst_25636);

(statearr_25648_25760[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25641 === (8))){
var inst_25626 = (state_25640[(8)]);
var inst_25631 = (state_25640[(2)]);
var state_25640__$1 = (function (){var statearr_25649 = state_25640;
(statearr_25649[(9)] = inst_25631);

return statearr_25649;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25640__$1,(9),results,inst_25626);
} else {
if((state_val_25641 === (9))){
var inst_25633 = (state_25640[(2)]);
var state_25640__$1 = (function (){var statearr_25650 = state_25640;
(statearr_25650[(10)] = inst_25633);

return statearr_25650;
})();
var statearr_25651_25761 = state_25640__$1;
(statearr_25651_25761[(2)] = null);

(statearr_25651_25761[(1)] = (2));


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
});})(c__19757__auto___25755,jobs,results,process,async))
;
return ((function (switch__19692__auto__,c__19757__auto___25755,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19693__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19693__auto____0 = (function (){
var statearr_25655 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25655[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19693__auto__);

(statearr_25655[(1)] = (1));

return statearr_25655;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19693__auto____1 = (function (state_25640){
while(true){
var ret_value__19694__auto__ = (function (){try{while(true){
var result__19695__auto__ = switch__19692__auto__.call(null,state_25640);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19695__auto__;
}
break;
}
}catch (e25656){if((e25656 instanceof Object)){
var ex__19696__auto__ = e25656;
var statearr_25657_25762 = state_25640;
(statearr_25657_25762[(5)] = ex__19696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25640);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25656;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25763 = state_25640;
state_25640 = G__25763;
continue;
} else {
return ret_value__19694__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19693__auto__ = function(state_25640){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19693__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19693__auto____1.call(this,state_25640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19693__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19693__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19693__auto__;
})()
;})(switch__19692__auto__,c__19757__auto___25755,jobs,results,process,async))
})();
var state__19759__auto__ = (function (){var statearr_25658 = f__19758__auto__.call(null);
(statearr_25658[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19757__auto___25755);

return statearr_25658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19759__auto__);
});})(c__19757__auto___25755,jobs,results,process,async))
);


var c__19757__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19757__auto__,jobs,results,process,async){
return (function (){
var f__19758__auto__ = (function (){var switch__19692__auto__ = ((function (c__19757__auto__,jobs,results,process,async){
return (function (state_25696){
var state_val_25697 = (state_25696[(1)]);
if((state_val_25697 === (7))){
var inst_25692 = (state_25696[(2)]);
var state_25696__$1 = state_25696;
var statearr_25698_25764 = state_25696__$1;
(statearr_25698_25764[(2)] = inst_25692);

(statearr_25698_25764[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25697 === (20))){
var state_25696__$1 = state_25696;
var statearr_25699_25765 = state_25696__$1;
(statearr_25699_25765[(2)] = null);

(statearr_25699_25765[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25697 === (1))){
var state_25696__$1 = state_25696;
var statearr_25700_25766 = state_25696__$1;
(statearr_25700_25766[(2)] = null);

(statearr_25700_25766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25697 === (4))){
var inst_25661 = (state_25696[(7)]);
var inst_25661__$1 = (state_25696[(2)]);
var inst_25662 = (inst_25661__$1 == null);
var state_25696__$1 = (function (){var statearr_25701 = state_25696;
(statearr_25701[(7)] = inst_25661__$1);

return statearr_25701;
})();
if(cljs.core.truth_(inst_25662)){
var statearr_25702_25767 = state_25696__$1;
(statearr_25702_25767[(1)] = (5));

} else {
var statearr_25703_25768 = state_25696__$1;
(statearr_25703_25768[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25697 === (15))){
var inst_25674 = (state_25696[(8)]);
var state_25696__$1 = state_25696;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25696__$1,(18),to,inst_25674);
} else {
if((state_val_25697 === (21))){
var inst_25687 = (state_25696[(2)]);
var state_25696__$1 = state_25696;
var statearr_25704_25769 = state_25696__$1;
(statearr_25704_25769[(2)] = inst_25687);

(statearr_25704_25769[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25697 === (13))){
var inst_25689 = (state_25696[(2)]);
var state_25696__$1 = (function (){var statearr_25705 = state_25696;
(statearr_25705[(9)] = inst_25689);

return statearr_25705;
})();
var statearr_25706_25770 = state_25696__$1;
(statearr_25706_25770[(2)] = null);

(statearr_25706_25770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25697 === (6))){
var inst_25661 = (state_25696[(7)]);
var state_25696__$1 = state_25696;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25696__$1,(11),inst_25661);
} else {
if((state_val_25697 === (17))){
var inst_25682 = (state_25696[(2)]);
var state_25696__$1 = state_25696;
if(cljs.core.truth_(inst_25682)){
var statearr_25707_25771 = state_25696__$1;
(statearr_25707_25771[(1)] = (19));

} else {
var statearr_25708_25772 = state_25696__$1;
(statearr_25708_25772[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25697 === (3))){
var inst_25694 = (state_25696[(2)]);
var state_25696__$1 = state_25696;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25696__$1,inst_25694);
} else {
if((state_val_25697 === (12))){
var inst_25671 = (state_25696[(10)]);
var state_25696__$1 = state_25696;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25696__$1,(14),inst_25671);
} else {
if((state_val_25697 === (2))){
var state_25696__$1 = state_25696;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25696__$1,(4),results);
} else {
if((state_val_25697 === (19))){
var state_25696__$1 = state_25696;
var statearr_25709_25773 = state_25696__$1;
(statearr_25709_25773[(2)] = null);

(statearr_25709_25773[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25697 === (11))){
var inst_25671 = (state_25696[(2)]);
var state_25696__$1 = (function (){var statearr_25710 = state_25696;
(statearr_25710[(10)] = inst_25671);

return statearr_25710;
})();
var statearr_25711_25774 = state_25696__$1;
(statearr_25711_25774[(2)] = null);

(statearr_25711_25774[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25697 === (9))){
var state_25696__$1 = state_25696;
var statearr_25712_25775 = state_25696__$1;
(statearr_25712_25775[(2)] = null);

(statearr_25712_25775[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25697 === (5))){
var state_25696__$1 = state_25696;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25713_25776 = state_25696__$1;
(statearr_25713_25776[(1)] = (8));

} else {
var statearr_25714_25777 = state_25696__$1;
(statearr_25714_25777[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25697 === (14))){
var inst_25674 = (state_25696[(8)]);
var inst_25676 = (state_25696[(11)]);
var inst_25674__$1 = (state_25696[(2)]);
var inst_25675 = (inst_25674__$1 == null);
var inst_25676__$1 = cljs.core.not.call(null,inst_25675);
var state_25696__$1 = (function (){var statearr_25715 = state_25696;
(statearr_25715[(8)] = inst_25674__$1);

(statearr_25715[(11)] = inst_25676__$1);

return statearr_25715;
})();
if(inst_25676__$1){
var statearr_25716_25778 = state_25696__$1;
(statearr_25716_25778[(1)] = (15));

} else {
var statearr_25717_25779 = state_25696__$1;
(statearr_25717_25779[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25697 === (16))){
var inst_25676 = (state_25696[(11)]);
var state_25696__$1 = state_25696;
var statearr_25718_25780 = state_25696__$1;
(statearr_25718_25780[(2)] = inst_25676);

(statearr_25718_25780[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25697 === (10))){
var inst_25668 = (state_25696[(2)]);
var state_25696__$1 = state_25696;
var statearr_25719_25781 = state_25696__$1;
(statearr_25719_25781[(2)] = inst_25668);

(statearr_25719_25781[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25697 === (18))){
var inst_25679 = (state_25696[(2)]);
var state_25696__$1 = state_25696;
var statearr_25720_25782 = state_25696__$1;
(statearr_25720_25782[(2)] = inst_25679);

(statearr_25720_25782[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25697 === (8))){
var inst_25665 = cljs.core.async.close_BANG_.call(null,to);
var state_25696__$1 = state_25696;
var statearr_25721_25783 = state_25696__$1;
(statearr_25721_25783[(2)] = inst_25665);

(statearr_25721_25783[(1)] = (10));


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
});})(c__19757__auto__,jobs,results,process,async))
;
return ((function (switch__19692__auto__,c__19757__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19693__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19693__auto____0 = (function (){
var statearr_25725 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25725[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19693__auto__);

(statearr_25725[(1)] = (1));

return statearr_25725;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19693__auto____1 = (function (state_25696){
while(true){
var ret_value__19694__auto__ = (function (){try{while(true){
var result__19695__auto__ = switch__19692__auto__.call(null,state_25696);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19695__auto__;
}
break;
}
}catch (e25726){if((e25726 instanceof Object)){
var ex__19696__auto__ = e25726;
var statearr_25727_25784 = state_25696;
(statearr_25727_25784[(5)] = ex__19696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25696);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25726;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25785 = state_25696;
state_25696 = G__25785;
continue;
} else {
return ret_value__19694__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19693__auto__ = function(state_25696){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19693__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19693__auto____1.call(this,state_25696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19693__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19693__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19693__auto__;
})()
;})(switch__19692__auto__,c__19757__auto__,jobs,results,process,async))
})();
var state__19759__auto__ = (function (){var statearr_25728 = f__19758__auto__.call(null);
(statearr_25728[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19757__auto__);

return statearr_25728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19759__auto__);
});})(c__19757__auto__,jobs,results,process,async))
);

return c__19757__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args25786 = [];
var len__17390__auto___25789 = arguments.length;
var i__17391__auto___25790 = (0);
while(true){
if((i__17391__auto___25790 < len__17390__auto___25789)){
args25786.push((arguments[i__17391__auto___25790]));

var G__25791 = (i__17391__auto___25790 + (1));
i__17391__auto___25790 = G__25791;
continue;
} else {
}
break;
}

var G__25788 = args25786.length;
switch (G__25788) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25786.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args25793 = [];
var len__17390__auto___25796 = arguments.length;
var i__17391__auto___25797 = (0);
while(true){
if((i__17391__auto___25797 < len__17390__auto___25796)){
args25793.push((arguments[i__17391__auto___25797]));

var G__25798 = (i__17391__auto___25797 + (1));
i__17391__auto___25797 = G__25798;
continue;
} else {
}
break;
}

var G__25795 = args25793.length;
switch (G__25795) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25793.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args25800 = [];
var len__17390__auto___25853 = arguments.length;
var i__17391__auto___25854 = (0);
while(true){
if((i__17391__auto___25854 < len__17390__auto___25853)){
args25800.push((arguments[i__17391__auto___25854]));

var G__25855 = (i__17391__auto___25854 + (1));
i__17391__auto___25854 = G__25855;
continue;
} else {
}
break;
}

var G__25802 = args25800.length;
switch (G__25802) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25800.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19757__auto___25857 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19757__auto___25857,tc,fc){
return (function (){
var f__19758__auto__ = (function (){var switch__19692__auto__ = ((function (c__19757__auto___25857,tc,fc){
return (function (state_25828){
var state_val_25829 = (state_25828[(1)]);
if((state_val_25829 === (7))){
var inst_25824 = (state_25828[(2)]);
var state_25828__$1 = state_25828;
var statearr_25830_25858 = state_25828__$1;
(statearr_25830_25858[(2)] = inst_25824);

(statearr_25830_25858[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25829 === (1))){
var state_25828__$1 = state_25828;
var statearr_25831_25859 = state_25828__$1;
(statearr_25831_25859[(2)] = null);

(statearr_25831_25859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25829 === (4))){
var inst_25805 = (state_25828[(7)]);
var inst_25805__$1 = (state_25828[(2)]);
var inst_25806 = (inst_25805__$1 == null);
var state_25828__$1 = (function (){var statearr_25832 = state_25828;
(statearr_25832[(7)] = inst_25805__$1);

return statearr_25832;
})();
if(cljs.core.truth_(inst_25806)){
var statearr_25833_25860 = state_25828__$1;
(statearr_25833_25860[(1)] = (5));

} else {
var statearr_25834_25861 = state_25828__$1;
(statearr_25834_25861[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25829 === (13))){
var state_25828__$1 = state_25828;
var statearr_25835_25862 = state_25828__$1;
(statearr_25835_25862[(2)] = null);

(statearr_25835_25862[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25829 === (6))){
var inst_25805 = (state_25828[(7)]);
var inst_25811 = p.call(null,inst_25805);
var state_25828__$1 = state_25828;
if(cljs.core.truth_(inst_25811)){
var statearr_25836_25863 = state_25828__$1;
(statearr_25836_25863[(1)] = (9));

} else {
var statearr_25837_25864 = state_25828__$1;
(statearr_25837_25864[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25829 === (3))){
var inst_25826 = (state_25828[(2)]);
var state_25828__$1 = state_25828;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25828__$1,inst_25826);
} else {
if((state_val_25829 === (12))){
var state_25828__$1 = state_25828;
var statearr_25838_25865 = state_25828__$1;
(statearr_25838_25865[(2)] = null);

(statearr_25838_25865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25829 === (2))){
var state_25828__$1 = state_25828;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25828__$1,(4),ch);
} else {
if((state_val_25829 === (11))){
var inst_25805 = (state_25828[(7)]);
var inst_25815 = (state_25828[(2)]);
var state_25828__$1 = state_25828;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25828__$1,(8),inst_25815,inst_25805);
} else {
if((state_val_25829 === (9))){
var state_25828__$1 = state_25828;
var statearr_25839_25866 = state_25828__$1;
(statearr_25839_25866[(2)] = tc);

(statearr_25839_25866[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25829 === (5))){
var inst_25808 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25809 = cljs.core.async.close_BANG_.call(null,fc);
var state_25828__$1 = (function (){var statearr_25840 = state_25828;
(statearr_25840[(8)] = inst_25808);

return statearr_25840;
})();
var statearr_25841_25867 = state_25828__$1;
(statearr_25841_25867[(2)] = inst_25809);

(statearr_25841_25867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25829 === (14))){
var inst_25822 = (state_25828[(2)]);
var state_25828__$1 = state_25828;
var statearr_25842_25868 = state_25828__$1;
(statearr_25842_25868[(2)] = inst_25822);

(statearr_25842_25868[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25829 === (10))){
var state_25828__$1 = state_25828;
var statearr_25843_25869 = state_25828__$1;
(statearr_25843_25869[(2)] = fc);

(statearr_25843_25869[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25829 === (8))){
var inst_25817 = (state_25828[(2)]);
var state_25828__$1 = state_25828;
if(cljs.core.truth_(inst_25817)){
var statearr_25844_25870 = state_25828__$1;
(statearr_25844_25870[(1)] = (12));

} else {
var statearr_25845_25871 = state_25828__$1;
(statearr_25845_25871[(1)] = (13));

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
});})(c__19757__auto___25857,tc,fc))
;
return ((function (switch__19692__auto__,c__19757__auto___25857,tc,fc){
return (function() {
var cljs$core$async$state_machine__19693__auto__ = null;
var cljs$core$async$state_machine__19693__auto____0 = (function (){
var statearr_25849 = [null,null,null,null,null,null,null,null,null];
(statearr_25849[(0)] = cljs$core$async$state_machine__19693__auto__);

(statearr_25849[(1)] = (1));

return statearr_25849;
});
var cljs$core$async$state_machine__19693__auto____1 = (function (state_25828){
while(true){
var ret_value__19694__auto__ = (function (){try{while(true){
var result__19695__auto__ = switch__19692__auto__.call(null,state_25828);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19695__auto__;
}
break;
}
}catch (e25850){if((e25850 instanceof Object)){
var ex__19696__auto__ = e25850;
var statearr_25851_25872 = state_25828;
(statearr_25851_25872[(5)] = ex__19696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25828);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25850;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25873 = state_25828;
state_25828 = G__25873;
continue;
} else {
return ret_value__19694__auto__;
}
break;
}
});
cljs$core$async$state_machine__19693__auto__ = function(state_25828){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19693__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19693__auto____1.call(this,state_25828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19693__auto____0;
cljs$core$async$state_machine__19693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19693__auto____1;
return cljs$core$async$state_machine__19693__auto__;
})()
;})(switch__19692__auto__,c__19757__auto___25857,tc,fc))
})();
var state__19759__auto__ = (function (){var statearr_25852 = f__19758__auto__.call(null);
(statearr_25852[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19757__auto___25857);

return statearr_25852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19759__auto__);
});})(c__19757__auto___25857,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__19757__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19757__auto__){
return (function (){
var f__19758__auto__ = (function (){var switch__19692__auto__ = ((function (c__19757__auto__){
return (function (state_25920){
var state_val_25921 = (state_25920[(1)]);
if((state_val_25921 === (1))){
var inst_25906 = init;
var state_25920__$1 = (function (){var statearr_25922 = state_25920;
(statearr_25922[(7)] = inst_25906);

return statearr_25922;
})();
var statearr_25923_25938 = state_25920__$1;
(statearr_25923_25938[(2)] = null);

(statearr_25923_25938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25921 === (2))){
var state_25920__$1 = state_25920;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25920__$1,(4),ch);
} else {
if((state_val_25921 === (3))){
var inst_25918 = (state_25920[(2)]);
var state_25920__$1 = state_25920;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25920__$1,inst_25918);
} else {
if((state_val_25921 === (4))){
var inst_25909 = (state_25920[(8)]);
var inst_25909__$1 = (state_25920[(2)]);
var inst_25910 = (inst_25909__$1 == null);
var state_25920__$1 = (function (){var statearr_25924 = state_25920;
(statearr_25924[(8)] = inst_25909__$1);

return statearr_25924;
})();
if(cljs.core.truth_(inst_25910)){
var statearr_25925_25939 = state_25920__$1;
(statearr_25925_25939[(1)] = (5));

} else {
var statearr_25926_25940 = state_25920__$1;
(statearr_25926_25940[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25921 === (5))){
var inst_25906 = (state_25920[(7)]);
var state_25920__$1 = state_25920;
var statearr_25927_25941 = state_25920__$1;
(statearr_25927_25941[(2)] = inst_25906);

(statearr_25927_25941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25921 === (6))){
var inst_25909 = (state_25920[(8)]);
var inst_25906 = (state_25920[(7)]);
var inst_25913 = f.call(null,inst_25906,inst_25909);
var inst_25906__$1 = inst_25913;
var state_25920__$1 = (function (){var statearr_25928 = state_25920;
(statearr_25928[(7)] = inst_25906__$1);

return statearr_25928;
})();
var statearr_25929_25942 = state_25920__$1;
(statearr_25929_25942[(2)] = null);

(statearr_25929_25942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25921 === (7))){
var inst_25916 = (state_25920[(2)]);
var state_25920__$1 = state_25920;
var statearr_25930_25943 = state_25920__$1;
(statearr_25930_25943[(2)] = inst_25916);

(statearr_25930_25943[(1)] = (3));


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
});})(c__19757__auto__))
;
return ((function (switch__19692__auto__,c__19757__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19693__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19693__auto____0 = (function (){
var statearr_25934 = [null,null,null,null,null,null,null,null,null];
(statearr_25934[(0)] = cljs$core$async$reduce_$_state_machine__19693__auto__);

(statearr_25934[(1)] = (1));

return statearr_25934;
});
var cljs$core$async$reduce_$_state_machine__19693__auto____1 = (function (state_25920){
while(true){
var ret_value__19694__auto__ = (function (){try{while(true){
var result__19695__auto__ = switch__19692__auto__.call(null,state_25920);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19695__auto__;
}
break;
}
}catch (e25935){if((e25935 instanceof Object)){
var ex__19696__auto__ = e25935;
var statearr_25936_25944 = state_25920;
(statearr_25936_25944[(5)] = ex__19696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25920);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25935;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25945 = state_25920;
state_25920 = G__25945;
continue;
} else {
return ret_value__19694__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19693__auto__ = function(state_25920){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19693__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19693__auto____1.call(this,state_25920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19693__auto____0;
cljs$core$async$reduce_$_state_machine__19693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19693__auto____1;
return cljs$core$async$reduce_$_state_machine__19693__auto__;
})()
;})(switch__19692__auto__,c__19757__auto__))
})();
var state__19759__auto__ = (function (){var statearr_25937 = f__19758__auto__.call(null);
(statearr_25937[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19757__auto__);

return statearr_25937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19759__auto__);
});})(c__19757__auto__))
);

return c__19757__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args25946 = [];
var len__17390__auto___25998 = arguments.length;
var i__17391__auto___25999 = (0);
while(true){
if((i__17391__auto___25999 < len__17390__auto___25998)){
args25946.push((arguments[i__17391__auto___25999]));

var G__26000 = (i__17391__auto___25999 + (1));
i__17391__auto___25999 = G__26000;
continue;
} else {
}
break;
}

var G__25948 = args25946.length;
switch (G__25948) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25946.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19757__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19757__auto__){
return (function (){
var f__19758__auto__ = (function (){var switch__19692__auto__ = ((function (c__19757__auto__){
return (function (state_25973){
var state_val_25974 = (state_25973[(1)]);
if((state_val_25974 === (7))){
var inst_25955 = (state_25973[(2)]);
var state_25973__$1 = state_25973;
var statearr_25975_26002 = state_25973__$1;
(statearr_25975_26002[(2)] = inst_25955);

(statearr_25975_26002[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25974 === (1))){
var inst_25949 = cljs.core.seq.call(null,coll);
var inst_25950 = inst_25949;
var state_25973__$1 = (function (){var statearr_25976 = state_25973;
(statearr_25976[(7)] = inst_25950);

return statearr_25976;
})();
var statearr_25977_26003 = state_25973__$1;
(statearr_25977_26003[(2)] = null);

(statearr_25977_26003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25974 === (4))){
var inst_25950 = (state_25973[(7)]);
var inst_25953 = cljs.core.first.call(null,inst_25950);
var state_25973__$1 = state_25973;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25973__$1,(7),ch,inst_25953);
} else {
if((state_val_25974 === (13))){
var inst_25967 = (state_25973[(2)]);
var state_25973__$1 = state_25973;
var statearr_25978_26004 = state_25973__$1;
(statearr_25978_26004[(2)] = inst_25967);

(statearr_25978_26004[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25974 === (6))){
var inst_25958 = (state_25973[(2)]);
var state_25973__$1 = state_25973;
if(cljs.core.truth_(inst_25958)){
var statearr_25979_26005 = state_25973__$1;
(statearr_25979_26005[(1)] = (8));

} else {
var statearr_25980_26006 = state_25973__$1;
(statearr_25980_26006[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25974 === (3))){
var inst_25971 = (state_25973[(2)]);
var state_25973__$1 = state_25973;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25973__$1,inst_25971);
} else {
if((state_val_25974 === (12))){
var state_25973__$1 = state_25973;
var statearr_25981_26007 = state_25973__$1;
(statearr_25981_26007[(2)] = null);

(statearr_25981_26007[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25974 === (2))){
var inst_25950 = (state_25973[(7)]);
var state_25973__$1 = state_25973;
if(cljs.core.truth_(inst_25950)){
var statearr_25982_26008 = state_25973__$1;
(statearr_25982_26008[(1)] = (4));

} else {
var statearr_25983_26009 = state_25973__$1;
(statearr_25983_26009[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25974 === (11))){
var inst_25964 = cljs.core.async.close_BANG_.call(null,ch);
var state_25973__$1 = state_25973;
var statearr_25984_26010 = state_25973__$1;
(statearr_25984_26010[(2)] = inst_25964);

(statearr_25984_26010[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25974 === (9))){
var state_25973__$1 = state_25973;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25985_26011 = state_25973__$1;
(statearr_25985_26011[(1)] = (11));

} else {
var statearr_25986_26012 = state_25973__$1;
(statearr_25986_26012[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25974 === (5))){
var inst_25950 = (state_25973[(7)]);
var state_25973__$1 = state_25973;
var statearr_25987_26013 = state_25973__$1;
(statearr_25987_26013[(2)] = inst_25950);

(statearr_25987_26013[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25974 === (10))){
var inst_25969 = (state_25973[(2)]);
var state_25973__$1 = state_25973;
var statearr_25988_26014 = state_25973__$1;
(statearr_25988_26014[(2)] = inst_25969);

(statearr_25988_26014[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25974 === (8))){
var inst_25950 = (state_25973[(7)]);
var inst_25960 = cljs.core.next.call(null,inst_25950);
var inst_25950__$1 = inst_25960;
var state_25973__$1 = (function (){var statearr_25989 = state_25973;
(statearr_25989[(7)] = inst_25950__$1);

return statearr_25989;
})();
var statearr_25990_26015 = state_25973__$1;
(statearr_25990_26015[(2)] = null);

(statearr_25990_26015[(1)] = (2));


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
});})(c__19757__auto__))
;
return ((function (switch__19692__auto__,c__19757__auto__){
return (function() {
var cljs$core$async$state_machine__19693__auto__ = null;
var cljs$core$async$state_machine__19693__auto____0 = (function (){
var statearr_25994 = [null,null,null,null,null,null,null,null];
(statearr_25994[(0)] = cljs$core$async$state_machine__19693__auto__);

(statearr_25994[(1)] = (1));

return statearr_25994;
});
var cljs$core$async$state_machine__19693__auto____1 = (function (state_25973){
while(true){
var ret_value__19694__auto__ = (function (){try{while(true){
var result__19695__auto__ = switch__19692__auto__.call(null,state_25973);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19695__auto__;
}
break;
}
}catch (e25995){if((e25995 instanceof Object)){
var ex__19696__auto__ = e25995;
var statearr_25996_26016 = state_25973;
(statearr_25996_26016[(5)] = ex__19696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25973);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25995;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26017 = state_25973;
state_25973 = G__26017;
continue;
} else {
return ret_value__19694__auto__;
}
break;
}
});
cljs$core$async$state_machine__19693__auto__ = function(state_25973){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19693__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19693__auto____1.call(this,state_25973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19693__auto____0;
cljs$core$async$state_machine__19693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19693__auto____1;
return cljs$core$async$state_machine__19693__auto__;
})()
;})(switch__19692__auto__,c__19757__auto__))
})();
var state__19759__auto__ = (function (){var statearr_25997 = f__19758__auto__.call(null);
(statearr_25997[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19757__auto__);

return statearr_25997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19759__auto__);
});})(c__19757__auto__))
);

return c__19757__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__16987__auto__ = (((_ == null))?null:_);
var m__16988__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__16987__auto__)]);
if(!((m__16988__auto__ == null))){
return m__16988__auto__.call(null,_);
} else {
var m__16988__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__16988__auto____$1 == null))){
return m__16988__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__16987__auto__ = (((m == null))?null:m);
var m__16988__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__16987__auto__)]);
if(!((m__16988__auto__ == null))){
return m__16988__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__16988__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__16988__auto____$1 == null))){
return m__16988__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__16987__auto__ = (((m == null))?null:m);
var m__16988__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__16987__auto__)]);
if(!((m__16988__auto__ == null))){
return m__16988__auto__.call(null,m,ch);
} else {
var m__16988__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__16988__auto____$1 == null))){
return m__16988__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__16987__auto__ = (((m == null))?null:m);
var m__16988__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__16987__auto__)]);
if(!((m__16988__auto__ == null))){
return m__16988__auto__.call(null,m);
} else {
var m__16988__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__16988__auto____$1 == null))){
return m__16988__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async26239 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26239 = (function (mult,ch,cs,meta26240){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta26240 = meta26240;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26239.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26241,meta26240__$1){
var self__ = this;
var _26241__$1 = this;
return (new cljs.core.async.t_cljs$core$async26239(self__.mult,self__.ch,self__.cs,meta26240__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async26239.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26241){
var self__ = this;
var _26241__$1 = this;
return self__.meta26240;
});})(cs))
;

cljs.core.async.t_cljs$core$async26239.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26239.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async26239.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async26239.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26239.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26239.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26239.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta26240","meta26240",-1859451879,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async26239.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26239.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26239";

cljs.core.async.t_cljs$core$async26239.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16930__auto__,writer__16931__auto__,opt__16932__auto__){
return cljs.core._write.call(null,writer__16931__auto__,"cljs.core.async/t_cljs$core$async26239");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async26239 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async26239(mult__$1,ch__$1,cs__$1,meta26240){
return (new cljs.core.async.t_cljs$core$async26239(mult__$1,ch__$1,cs__$1,meta26240));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async26239(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__19757__auto___26460 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19757__auto___26460,cs,m,dchan,dctr,done){
return (function (){
var f__19758__auto__ = (function (){var switch__19692__auto__ = ((function (c__19757__auto___26460,cs,m,dchan,dctr,done){
return (function (state_26372){
var state_val_26373 = (state_26372[(1)]);
if((state_val_26373 === (7))){
var inst_26368 = (state_26372[(2)]);
var state_26372__$1 = state_26372;
var statearr_26374_26461 = state_26372__$1;
(statearr_26374_26461[(2)] = inst_26368);

(statearr_26374_26461[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26373 === (20))){
var inst_26273 = (state_26372[(7)]);
var inst_26283 = cljs.core.first.call(null,inst_26273);
var inst_26284 = cljs.core.nth.call(null,inst_26283,(0),null);
var inst_26285 = cljs.core.nth.call(null,inst_26283,(1),null);
var state_26372__$1 = (function (){var statearr_26375 = state_26372;
(statearr_26375[(8)] = inst_26284);

return statearr_26375;
})();
if(cljs.core.truth_(inst_26285)){
var statearr_26376_26462 = state_26372__$1;
(statearr_26376_26462[(1)] = (22));

} else {
var statearr_26377_26463 = state_26372__$1;
(statearr_26377_26463[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26373 === (27))){
var inst_26315 = (state_26372[(9)]);
var inst_26313 = (state_26372[(10)]);
var inst_26244 = (state_26372[(11)]);
var inst_26320 = (state_26372[(12)]);
var inst_26320__$1 = cljs.core._nth.call(null,inst_26313,inst_26315);
var inst_26321 = cljs.core.async.put_BANG_.call(null,inst_26320__$1,inst_26244,done);
var state_26372__$1 = (function (){var statearr_26378 = state_26372;
(statearr_26378[(12)] = inst_26320__$1);

return statearr_26378;
})();
if(cljs.core.truth_(inst_26321)){
var statearr_26379_26464 = state_26372__$1;
(statearr_26379_26464[(1)] = (30));

} else {
var statearr_26380_26465 = state_26372__$1;
(statearr_26380_26465[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26373 === (1))){
var state_26372__$1 = state_26372;
var statearr_26381_26466 = state_26372__$1;
(statearr_26381_26466[(2)] = null);

(statearr_26381_26466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26373 === (24))){
var inst_26273 = (state_26372[(7)]);
var inst_26290 = (state_26372[(2)]);
var inst_26291 = cljs.core.next.call(null,inst_26273);
var inst_26253 = inst_26291;
var inst_26254 = null;
var inst_26255 = (0);
var inst_26256 = (0);
var state_26372__$1 = (function (){var statearr_26382 = state_26372;
(statearr_26382[(13)] = inst_26256);

(statearr_26382[(14)] = inst_26255);

(statearr_26382[(15)] = inst_26254);

(statearr_26382[(16)] = inst_26290);

(statearr_26382[(17)] = inst_26253);

return statearr_26382;
})();
var statearr_26383_26467 = state_26372__$1;
(statearr_26383_26467[(2)] = null);

(statearr_26383_26467[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26373 === (39))){
var state_26372__$1 = state_26372;
var statearr_26387_26468 = state_26372__$1;
(statearr_26387_26468[(2)] = null);

(statearr_26387_26468[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26373 === (4))){
var inst_26244 = (state_26372[(11)]);
var inst_26244__$1 = (state_26372[(2)]);
var inst_26245 = (inst_26244__$1 == null);
var state_26372__$1 = (function (){var statearr_26388 = state_26372;
(statearr_26388[(11)] = inst_26244__$1);

return statearr_26388;
})();
if(cljs.core.truth_(inst_26245)){
var statearr_26389_26469 = state_26372__$1;
(statearr_26389_26469[(1)] = (5));

} else {
var statearr_26390_26470 = state_26372__$1;
(statearr_26390_26470[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26373 === (15))){
var inst_26256 = (state_26372[(13)]);
var inst_26255 = (state_26372[(14)]);
var inst_26254 = (state_26372[(15)]);
var inst_26253 = (state_26372[(17)]);
var inst_26269 = (state_26372[(2)]);
var inst_26270 = (inst_26256 + (1));
var tmp26384 = inst_26255;
var tmp26385 = inst_26254;
var tmp26386 = inst_26253;
var inst_26253__$1 = tmp26386;
var inst_26254__$1 = tmp26385;
var inst_26255__$1 = tmp26384;
var inst_26256__$1 = inst_26270;
var state_26372__$1 = (function (){var statearr_26391 = state_26372;
(statearr_26391[(13)] = inst_26256__$1);

(statearr_26391[(14)] = inst_26255__$1);

(statearr_26391[(15)] = inst_26254__$1);

(statearr_26391[(18)] = inst_26269);

(statearr_26391[(17)] = inst_26253__$1);

return statearr_26391;
})();
var statearr_26392_26471 = state_26372__$1;
(statearr_26392_26471[(2)] = null);

(statearr_26392_26471[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26373 === (21))){
var inst_26294 = (state_26372[(2)]);
var state_26372__$1 = state_26372;
var statearr_26396_26472 = state_26372__$1;
(statearr_26396_26472[(2)] = inst_26294);

(statearr_26396_26472[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26373 === (31))){
var inst_26320 = (state_26372[(12)]);
var inst_26324 = done.call(null,null);
var inst_26325 = cljs.core.async.untap_STAR_.call(null,m,inst_26320);
var state_26372__$1 = (function (){var statearr_26397 = state_26372;
(statearr_26397[(19)] = inst_26324);

return statearr_26397;
})();
var statearr_26398_26473 = state_26372__$1;
(statearr_26398_26473[(2)] = inst_26325);

(statearr_26398_26473[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26373 === (32))){
var inst_26314 = (state_26372[(20)]);
var inst_26315 = (state_26372[(9)]);
var inst_26313 = (state_26372[(10)]);
var inst_26312 = (state_26372[(21)]);
var inst_26327 = (state_26372[(2)]);
var inst_26328 = (inst_26315 + (1));
var tmp26393 = inst_26314;
var tmp26394 = inst_26313;
var tmp26395 = inst_26312;
var inst_26312__$1 = tmp26395;
var inst_26313__$1 = tmp26394;
var inst_26314__$1 = tmp26393;
var inst_26315__$1 = inst_26328;
var state_26372__$1 = (function (){var statearr_26399 = state_26372;
(statearr_26399[(20)] = inst_26314__$1);

(statearr_26399[(9)] = inst_26315__$1);

(statearr_26399[(10)] = inst_26313__$1);

(statearr_26399[(22)] = inst_26327);

(statearr_26399[(21)] = inst_26312__$1);

return statearr_26399;
})();
var statearr_26400_26474 = state_26372__$1;
(statearr_26400_26474[(2)] = null);

(statearr_26400_26474[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26373 === (40))){
var inst_26340 = (state_26372[(23)]);
var inst_26344 = done.call(null,null);
var inst_26345 = cljs.core.async.untap_STAR_.call(null,m,inst_26340);
var state_26372__$1 = (function (){var statearr_26401 = state_26372;
(statearr_26401[(24)] = inst_26344);

return statearr_26401;
})();
var statearr_26402_26475 = state_26372__$1;
(statearr_26402_26475[(2)] = inst_26345);

(statearr_26402_26475[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26373 === (33))){
var inst_26331 = (state_26372[(25)]);
var inst_26333 = cljs.core.chunked_seq_QMARK_.call(null,inst_26331);
var state_26372__$1 = state_26372;
if(inst_26333){
var statearr_26403_26476 = state_26372__$1;
(statearr_26403_26476[(1)] = (36));

} else {
var statearr_26404_26477 = state_26372__$1;
(statearr_26404_26477[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26373 === (13))){
var inst_26263 = (state_26372[(26)]);
var inst_26266 = cljs.core.async.close_BANG_.call(null,inst_26263);
var state_26372__$1 = state_26372;
var statearr_26405_26478 = state_26372__$1;
(statearr_26405_26478[(2)] = inst_26266);

(statearr_26405_26478[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26373 === (22))){
var inst_26284 = (state_26372[(8)]);
var inst_26287 = cljs.core.async.close_BANG_.call(null,inst_26284);
var state_26372__$1 = state_26372;
var statearr_26406_26479 = state_26372__$1;
(statearr_26406_26479[(2)] = inst_26287);

(statearr_26406_26479[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26373 === (36))){
var inst_26331 = (state_26372[(25)]);
var inst_26335 = cljs.core.chunk_first.call(null,inst_26331);
var inst_26336 = cljs.core.chunk_rest.call(null,inst_26331);
var inst_26337 = cljs.core.count.call(null,inst_26335);
var inst_26312 = inst_26336;
var inst_26313 = inst_26335;
var inst_26314 = inst_26337;
var inst_26315 = (0);
var state_26372__$1 = (function (){var statearr_26407 = state_26372;
(statearr_26407[(20)] = inst_26314);

(statearr_26407[(9)] = inst_26315);

(statearr_26407[(10)] = inst_26313);

(statearr_26407[(21)] = inst_26312);

return statearr_26407;
})();
var statearr_26408_26480 = state_26372__$1;
(statearr_26408_26480[(2)] = null);

(statearr_26408_26480[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26373 === (41))){
var inst_26331 = (state_26372[(25)]);
var inst_26347 = (state_26372[(2)]);
var inst_26348 = cljs.core.next.call(null,inst_26331);
var inst_26312 = inst_26348;
var inst_26313 = null;
var inst_26314 = (0);
var inst_26315 = (0);
var state_26372__$1 = (function (){var statearr_26409 = state_26372;
(statearr_26409[(20)] = inst_26314);

(statearr_26409[(9)] = inst_26315);

(statearr_26409[(10)] = inst_26313);

(statearr_26409[(21)] = inst_26312);

(statearr_26409[(27)] = inst_26347);

return statearr_26409;
})();
var statearr_26410_26481 = state_26372__$1;
(statearr_26410_26481[(2)] = null);

(statearr_26410_26481[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26373 === (43))){
var state_26372__$1 = state_26372;
var statearr_26411_26482 = state_26372__$1;
(statearr_26411_26482[(2)] = null);

(statearr_26411_26482[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26373 === (29))){
var inst_26356 = (state_26372[(2)]);
var state_26372__$1 = state_26372;
var statearr_26412_26483 = state_26372__$1;
(statearr_26412_26483[(2)] = inst_26356);

(statearr_26412_26483[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26373 === (44))){
var inst_26365 = (state_26372[(2)]);
var state_26372__$1 = (function (){var statearr_26413 = state_26372;
(statearr_26413[(28)] = inst_26365);

return statearr_26413;
})();
var statearr_26414_26484 = state_26372__$1;
(statearr_26414_26484[(2)] = null);

(statearr_26414_26484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26373 === (6))){
var inst_26304 = (state_26372[(29)]);
var inst_26303 = cljs.core.deref.call(null,cs);
var inst_26304__$1 = cljs.core.keys.call(null,inst_26303);
var inst_26305 = cljs.core.count.call(null,inst_26304__$1);
var inst_26306 = cljs.core.reset_BANG_.call(null,dctr,inst_26305);
var inst_26311 = cljs.core.seq.call(null,inst_26304__$1);
var inst_26312 = inst_26311;
var inst_26313 = null;
var inst_26314 = (0);
var inst_26315 = (0);
var state_26372__$1 = (function (){var statearr_26415 = state_26372;
(statearr_26415[(20)] = inst_26314);

(statearr_26415[(30)] = inst_26306);

(statearr_26415[(9)] = inst_26315);

(statearr_26415[(10)] = inst_26313);

(statearr_26415[(29)] = inst_26304__$1);

(statearr_26415[(21)] = inst_26312);

return statearr_26415;
})();
var statearr_26416_26485 = state_26372__$1;
(statearr_26416_26485[(2)] = null);

(statearr_26416_26485[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26373 === (28))){
var inst_26331 = (state_26372[(25)]);
var inst_26312 = (state_26372[(21)]);
var inst_26331__$1 = cljs.core.seq.call(null,inst_26312);
var state_26372__$1 = (function (){var statearr_26417 = state_26372;
(statearr_26417[(25)] = inst_26331__$1);

return statearr_26417;
})();
if(inst_26331__$1){
var statearr_26418_26486 = state_26372__$1;
(statearr_26418_26486[(1)] = (33));

} else {
var statearr_26419_26487 = state_26372__$1;
(statearr_26419_26487[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26373 === (25))){
var inst_26314 = (state_26372[(20)]);
var inst_26315 = (state_26372[(9)]);
var inst_26317 = (inst_26315 < inst_26314);
var inst_26318 = inst_26317;
var state_26372__$1 = state_26372;
if(cljs.core.truth_(inst_26318)){
var statearr_26420_26488 = state_26372__$1;
(statearr_26420_26488[(1)] = (27));

} else {
var statearr_26421_26489 = state_26372__$1;
(statearr_26421_26489[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26373 === (34))){
var state_26372__$1 = state_26372;
var statearr_26422_26490 = state_26372__$1;
(statearr_26422_26490[(2)] = null);

(statearr_26422_26490[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26373 === (17))){
var state_26372__$1 = state_26372;
var statearr_26423_26491 = state_26372__$1;
(statearr_26423_26491[(2)] = null);

(statearr_26423_26491[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26373 === (3))){
var inst_26370 = (state_26372[(2)]);
var state_26372__$1 = state_26372;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26372__$1,inst_26370);
} else {
if((state_val_26373 === (12))){
var inst_26299 = (state_26372[(2)]);
var state_26372__$1 = state_26372;
var statearr_26424_26492 = state_26372__$1;
(statearr_26424_26492[(2)] = inst_26299);

(statearr_26424_26492[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26373 === (2))){
var state_26372__$1 = state_26372;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26372__$1,(4),ch);
} else {
if((state_val_26373 === (23))){
var state_26372__$1 = state_26372;
var statearr_26425_26493 = state_26372__$1;
(statearr_26425_26493[(2)] = null);

(statearr_26425_26493[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26373 === (35))){
var inst_26354 = (state_26372[(2)]);
var state_26372__$1 = state_26372;
var statearr_26426_26494 = state_26372__$1;
(statearr_26426_26494[(2)] = inst_26354);

(statearr_26426_26494[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26373 === (19))){
var inst_26273 = (state_26372[(7)]);
var inst_26277 = cljs.core.chunk_first.call(null,inst_26273);
var inst_26278 = cljs.core.chunk_rest.call(null,inst_26273);
var inst_26279 = cljs.core.count.call(null,inst_26277);
var inst_26253 = inst_26278;
var inst_26254 = inst_26277;
var inst_26255 = inst_26279;
var inst_26256 = (0);
var state_26372__$1 = (function (){var statearr_26427 = state_26372;
(statearr_26427[(13)] = inst_26256);

(statearr_26427[(14)] = inst_26255);

(statearr_26427[(15)] = inst_26254);

(statearr_26427[(17)] = inst_26253);

return statearr_26427;
})();
var statearr_26428_26495 = state_26372__$1;
(statearr_26428_26495[(2)] = null);

(statearr_26428_26495[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26373 === (11))){
var inst_26273 = (state_26372[(7)]);
var inst_26253 = (state_26372[(17)]);
var inst_26273__$1 = cljs.core.seq.call(null,inst_26253);
var state_26372__$1 = (function (){var statearr_26429 = state_26372;
(statearr_26429[(7)] = inst_26273__$1);

return statearr_26429;
})();
if(inst_26273__$1){
var statearr_26430_26496 = state_26372__$1;
(statearr_26430_26496[(1)] = (16));

} else {
var statearr_26431_26497 = state_26372__$1;
(statearr_26431_26497[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26373 === (9))){
var inst_26301 = (state_26372[(2)]);
var state_26372__$1 = state_26372;
var statearr_26432_26498 = state_26372__$1;
(statearr_26432_26498[(2)] = inst_26301);

(statearr_26432_26498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26373 === (5))){
var inst_26251 = cljs.core.deref.call(null,cs);
var inst_26252 = cljs.core.seq.call(null,inst_26251);
var inst_26253 = inst_26252;
var inst_26254 = null;
var inst_26255 = (0);
var inst_26256 = (0);
var state_26372__$1 = (function (){var statearr_26433 = state_26372;
(statearr_26433[(13)] = inst_26256);

(statearr_26433[(14)] = inst_26255);

(statearr_26433[(15)] = inst_26254);

(statearr_26433[(17)] = inst_26253);

return statearr_26433;
})();
var statearr_26434_26499 = state_26372__$1;
(statearr_26434_26499[(2)] = null);

(statearr_26434_26499[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26373 === (14))){
var state_26372__$1 = state_26372;
var statearr_26435_26500 = state_26372__$1;
(statearr_26435_26500[(2)] = null);

(statearr_26435_26500[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26373 === (45))){
var inst_26362 = (state_26372[(2)]);
var state_26372__$1 = state_26372;
var statearr_26436_26501 = state_26372__$1;
(statearr_26436_26501[(2)] = inst_26362);

(statearr_26436_26501[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26373 === (26))){
var inst_26304 = (state_26372[(29)]);
var inst_26358 = (state_26372[(2)]);
var inst_26359 = cljs.core.seq.call(null,inst_26304);
var state_26372__$1 = (function (){var statearr_26437 = state_26372;
(statearr_26437[(31)] = inst_26358);

return statearr_26437;
})();
if(inst_26359){
var statearr_26438_26502 = state_26372__$1;
(statearr_26438_26502[(1)] = (42));

} else {
var statearr_26439_26503 = state_26372__$1;
(statearr_26439_26503[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26373 === (16))){
var inst_26273 = (state_26372[(7)]);
var inst_26275 = cljs.core.chunked_seq_QMARK_.call(null,inst_26273);
var state_26372__$1 = state_26372;
if(inst_26275){
var statearr_26440_26504 = state_26372__$1;
(statearr_26440_26504[(1)] = (19));

} else {
var statearr_26441_26505 = state_26372__$1;
(statearr_26441_26505[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26373 === (38))){
var inst_26351 = (state_26372[(2)]);
var state_26372__$1 = state_26372;
var statearr_26442_26506 = state_26372__$1;
(statearr_26442_26506[(2)] = inst_26351);

(statearr_26442_26506[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26373 === (30))){
var state_26372__$1 = state_26372;
var statearr_26443_26507 = state_26372__$1;
(statearr_26443_26507[(2)] = null);

(statearr_26443_26507[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26373 === (10))){
var inst_26256 = (state_26372[(13)]);
var inst_26254 = (state_26372[(15)]);
var inst_26262 = cljs.core._nth.call(null,inst_26254,inst_26256);
var inst_26263 = cljs.core.nth.call(null,inst_26262,(0),null);
var inst_26264 = cljs.core.nth.call(null,inst_26262,(1),null);
var state_26372__$1 = (function (){var statearr_26444 = state_26372;
(statearr_26444[(26)] = inst_26263);

return statearr_26444;
})();
if(cljs.core.truth_(inst_26264)){
var statearr_26445_26508 = state_26372__$1;
(statearr_26445_26508[(1)] = (13));

} else {
var statearr_26446_26509 = state_26372__$1;
(statearr_26446_26509[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26373 === (18))){
var inst_26297 = (state_26372[(2)]);
var state_26372__$1 = state_26372;
var statearr_26447_26510 = state_26372__$1;
(statearr_26447_26510[(2)] = inst_26297);

(statearr_26447_26510[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26373 === (42))){
var state_26372__$1 = state_26372;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26372__$1,(45),dchan);
} else {
if((state_val_26373 === (37))){
var inst_26331 = (state_26372[(25)]);
var inst_26244 = (state_26372[(11)]);
var inst_26340 = (state_26372[(23)]);
var inst_26340__$1 = cljs.core.first.call(null,inst_26331);
var inst_26341 = cljs.core.async.put_BANG_.call(null,inst_26340__$1,inst_26244,done);
var state_26372__$1 = (function (){var statearr_26448 = state_26372;
(statearr_26448[(23)] = inst_26340__$1);

return statearr_26448;
})();
if(cljs.core.truth_(inst_26341)){
var statearr_26449_26511 = state_26372__$1;
(statearr_26449_26511[(1)] = (39));

} else {
var statearr_26450_26512 = state_26372__$1;
(statearr_26450_26512[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26373 === (8))){
var inst_26256 = (state_26372[(13)]);
var inst_26255 = (state_26372[(14)]);
var inst_26258 = (inst_26256 < inst_26255);
var inst_26259 = inst_26258;
var state_26372__$1 = state_26372;
if(cljs.core.truth_(inst_26259)){
var statearr_26451_26513 = state_26372__$1;
(statearr_26451_26513[(1)] = (10));

} else {
var statearr_26452_26514 = state_26372__$1;
(statearr_26452_26514[(1)] = (11));

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
});})(c__19757__auto___26460,cs,m,dchan,dctr,done))
;
return ((function (switch__19692__auto__,c__19757__auto___26460,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19693__auto__ = null;
var cljs$core$async$mult_$_state_machine__19693__auto____0 = (function (){
var statearr_26456 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26456[(0)] = cljs$core$async$mult_$_state_machine__19693__auto__);

(statearr_26456[(1)] = (1));

return statearr_26456;
});
var cljs$core$async$mult_$_state_machine__19693__auto____1 = (function (state_26372){
while(true){
var ret_value__19694__auto__ = (function (){try{while(true){
var result__19695__auto__ = switch__19692__auto__.call(null,state_26372);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19695__auto__;
}
break;
}
}catch (e26457){if((e26457 instanceof Object)){
var ex__19696__auto__ = e26457;
var statearr_26458_26515 = state_26372;
(statearr_26458_26515[(5)] = ex__19696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26372);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26457;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26516 = state_26372;
state_26372 = G__26516;
continue;
} else {
return ret_value__19694__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19693__auto__ = function(state_26372){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19693__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19693__auto____1.call(this,state_26372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19693__auto____0;
cljs$core$async$mult_$_state_machine__19693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19693__auto____1;
return cljs$core$async$mult_$_state_machine__19693__auto__;
})()
;})(switch__19692__auto__,c__19757__auto___26460,cs,m,dchan,dctr,done))
})();
var state__19759__auto__ = (function (){var statearr_26459 = f__19758__auto__.call(null);
(statearr_26459[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19757__auto___26460);

return statearr_26459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19759__auto__);
});})(c__19757__auto___26460,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args26517 = [];
var len__17390__auto___26520 = arguments.length;
var i__17391__auto___26521 = (0);
while(true){
if((i__17391__auto___26521 < len__17390__auto___26520)){
args26517.push((arguments[i__17391__auto___26521]));

var G__26522 = (i__17391__auto___26521 + (1));
i__17391__auto___26521 = G__26522;
continue;
} else {
}
break;
}

var G__26519 = args26517.length;
switch (G__26519) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26517.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__16987__auto__ = (((m == null))?null:m);
var m__16988__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__16987__auto__)]);
if(!((m__16988__auto__ == null))){
return m__16988__auto__.call(null,m,ch);
} else {
var m__16988__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__16988__auto____$1 == null))){
return m__16988__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__16987__auto__ = (((m == null))?null:m);
var m__16988__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__16987__auto__)]);
if(!((m__16988__auto__ == null))){
return m__16988__auto__.call(null,m,ch);
} else {
var m__16988__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__16988__auto____$1 == null))){
return m__16988__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__16987__auto__ = (((m == null))?null:m);
var m__16988__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__16987__auto__)]);
if(!((m__16988__auto__ == null))){
return m__16988__auto__.call(null,m);
} else {
var m__16988__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__16988__auto____$1 == null))){
return m__16988__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__16987__auto__ = (((m == null))?null:m);
var m__16988__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__16987__auto__)]);
if(!((m__16988__auto__ == null))){
return m__16988__auto__.call(null,m,state_map);
} else {
var m__16988__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__16988__auto____$1 == null))){
return m__16988__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__16987__auto__ = (((m == null))?null:m);
var m__16988__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__16987__auto__)]);
if(!((m__16988__auto__ == null))){
return m__16988__auto__.call(null,m,mode);
} else {
var m__16988__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__16988__auto____$1 == null))){
return m__16988__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17397__auto__ = [];
var len__17390__auto___26534 = arguments.length;
var i__17391__auto___26535 = (0);
while(true){
if((i__17391__auto___26535 < len__17390__auto___26534)){
args__17397__auto__.push((arguments[i__17391__auto___26535]));

var G__26536 = (i__17391__auto___26535 + (1));
i__17391__auto___26535 = G__26536;
continue;
} else {
}
break;
}

var argseq__17398__auto__ = ((((3) < args__17397__auto__.length))?(new cljs.core.IndexedSeq(args__17397__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17398__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__26528){
var map__26529 = p__26528;
var map__26529__$1 = ((((!((map__26529 == null)))?((((map__26529.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26529.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26529):map__26529);
var opts = map__26529__$1;
var statearr_26531_26537 = state;
(statearr_26531_26537[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__26529,map__26529__$1,opts){
return (function (val){
var statearr_26532_26538 = state;
(statearr_26532_26538[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__26529,map__26529__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_26533_26539 = state;
(statearr_26533_26539[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq26524){
var G__26525 = cljs.core.first.call(null,seq26524);
var seq26524__$1 = cljs.core.next.call(null,seq26524);
var G__26526 = cljs.core.first.call(null,seq26524__$1);
var seq26524__$2 = cljs.core.next.call(null,seq26524__$1);
var G__26527 = cljs.core.first.call(null,seq26524__$2);
var seq26524__$3 = cljs.core.next.call(null,seq26524__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26525,G__26526,G__26527,seq26524__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async26703 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26703 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26704){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta26704 = meta26704;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26703.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26705,meta26704__$1){
var self__ = this;
var _26705__$1 = this;
return (new cljs.core.async.t_cljs$core$async26703(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26704__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26703.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26705){
var self__ = this;
var _26705__$1 = this;
return self__.meta26704;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26703.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26703.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26703.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async26703.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26703.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26703.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26703.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26703.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26703.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta26704","meta26704",-700976771,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26703.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26703.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26703";

cljs.core.async.t_cljs$core$async26703.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16930__auto__,writer__16931__auto__,opt__16932__auto__){
return cljs.core._write.call(null,writer__16931__auto__,"cljs.core.async/t_cljs$core$async26703");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async26703 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async26703(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26704){
return (new cljs.core.async.t_cljs$core$async26703(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26704));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async26703(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19757__auto___26866 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19757__auto___26866,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19758__auto__ = (function (){var switch__19692__auto__ = ((function (c__19757__auto___26866,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26803){
var state_val_26804 = (state_26803[(1)]);
if((state_val_26804 === (7))){
var inst_26721 = (state_26803[(2)]);
var state_26803__$1 = state_26803;
var statearr_26805_26867 = state_26803__$1;
(statearr_26805_26867[(2)] = inst_26721);

(statearr_26805_26867[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26804 === (20))){
var inst_26733 = (state_26803[(7)]);
var state_26803__$1 = state_26803;
var statearr_26806_26868 = state_26803__$1;
(statearr_26806_26868[(2)] = inst_26733);

(statearr_26806_26868[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26804 === (27))){
var state_26803__$1 = state_26803;
var statearr_26807_26869 = state_26803__$1;
(statearr_26807_26869[(2)] = null);

(statearr_26807_26869[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26804 === (1))){
var inst_26709 = (state_26803[(8)]);
var inst_26709__$1 = calc_state.call(null);
var inst_26711 = (inst_26709__$1 == null);
var inst_26712 = cljs.core.not.call(null,inst_26711);
var state_26803__$1 = (function (){var statearr_26808 = state_26803;
(statearr_26808[(8)] = inst_26709__$1);

return statearr_26808;
})();
if(inst_26712){
var statearr_26809_26870 = state_26803__$1;
(statearr_26809_26870[(1)] = (2));

} else {
var statearr_26810_26871 = state_26803__$1;
(statearr_26810_26871[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26804 === (24))){
var inst_26763 = (state_26803[(9)]);
var inst_26777 = (state_26803[(10)]);
var inst_26756 = (state_26803[(11)]);
var inst_26777__$1 = inst_26756.call(null,inst_26763);
var state_26803__$1 = (function (){var statearr_26811 = state_26803;
(statearr_26811[(10)] = inst_26777__$1);

return statearr_26811;
})();
if(cljs.core.truth_(inst_26777__$1)){
var statearr_26812_26872 = state_26803__$1;
(statearr_26812_26872[(1)] = (29));

} else {
var statearr_26813_26873 = state_26803__$1;
(statearr_26813_26873[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26804 === (4))){
var inst_26724 = (state_26803[(2)]);
var state_26803__$1 = state_26803;
if(cljs.core.truth_(inst_26724)){
var statearr_26814_26874 = state_26803__$1;
(statearr_26814_26874[(1)] = (8));

} else {
var statearr_26815_26875 = state_26803__$1;
(statearr_26815_26875[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26804 === (15))){
var inst_26750 = (state_26803[(2)]);
var state_26803__$1 = state_26803;
if(cljs.core.truth_(inst_26750)){
var statearr_26816_26876 = state_26803__$1;
(statearr_26816_26876[(1)] = (19));

} else {
var statearr_26817_26877 = state_26803__$1;
(statearr_26817_26877[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26804 === (21))){
var inst_26755 = (state_26803[(12)]);
var inst_26755__$1 = (state_26803[(2)]);
var inst_26756 = cljs.core.get.call(null,inst_26755__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26757 = cljs.core.get.call(null,inst_26755__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26758 = cljs.core.get.call(null,inst_26755__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_26803__$1 = (function (){var statearr_26818 = state_26803;
(statearr_26818[(12)] = inst_26755__$1);

(statearr_26818[(11)] = inst_26756);

(statearr_26818[(13)] = inst_26757);

return statearr_26818;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26803__$1,(22),inst_26758);
} else {
if((state_val_26804 === (31))){
var inst_26785 = (state_26803[(2)]);
var state_26803__$1 = state_26803;
if(cljs.core.truth_(inst_26785)){
var statearr_26819_26878 = state_26803__$1;
(statearr_26819_26878[(1)] = (32));

} else {
var statearr_26820_26879 = state_26803__$1;
(statearr_26820_26879[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26804 === (32))){
var inst_26762 = (state_26803[(14)]);
var state_26803__$1 = state_26803;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26803__$1,(35),out,inst_26762);
} else {
if((state_val_26804 === (33))){
var inst_26755 = (state_26803[(12)]);
var inst_26733 = inst_26755;
var state_26803__$1 = (function (){var statearr_26821 = state_26803;
(statearr_26821[(7)] = inst_26733);

return statearr_26821;
})();
var statearr_26822_26880 = state_26803__$1;
(statearr_26822_26880[(2)] = null);

(statearr_26822_26880[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26804 === (13))){
var inst_26733 = (state_26803[(7)]);
var inst_26740 = inst_26733.cljs$lang$protocol_mask$partition0$;
var inst_26741 = (inst_26740 & (64));
var inst_26742 = inst_26733.cljs$core$ISeq$;
var inst_26743 = (inst_26741) || (inst_26742);
var state_26803__$1 = state_26803;
if(cljs.core.truth_(inst_26743)){
var statearr_26823_26881 = state_26803__$1;
(statearr_26823_26881[(1)] = (16));

} else {
var statearr_26824_26882 = state_26803__$1;
(statearr_26824_26882[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26804 === (22))){
var inst_26762 = (state_26803[(14)]);
var inst_26763 = (state_26803[(9)]);
var inst_26761 = (state_26803[(2)]);
var inst_26762__$1 = cljs.core.nth.call(null,inst_26761,(0),null);
var inst_26763__$1 = cljs.core.nth.call(null,inst_26761,(1),null);
var inst_26764 = (inst_26762__$1 == null);
var inst_26765 = cljs.core._EQ_.call(null,inst_26763__$1,change);
var inst_26766 = (inst_26764) || (inst_26765);
var state_26803__$1 = (function (){var statearr_26825 = state_26803;
(statearr_26825[(14)] = inst_26762__$1);

(statearr_26825[(9)] = inst_26763__$1);

return statearr_26825;
})();
if(cljs.core.truth_(inst_26766)){
var statearr_26826_26883 = state_26803__$1;
(statearr_26826_26883[(1)] = (23));

} else {
var statearr_26827_26884 = state_26803__$1;
(statearr_26827_26884[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26804 === (36))){
var inst_26755 = (state_26803[(12)]);
var inst_26733 = inst_26755;
var state_26803__$1 = (function (){var statearr_26828 = state_26803;
(statearr_26828[(7)] = inst_26733);

return statearr_26828;
})();
var statearr_26829_26885 = state_26803__$1;
(statearr_26829_26885[(2)] = null);

(statearr_26829_26885[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26804 === (29))){
var inst_26777 = (state_26803[(10)]);
var state_26803__$1 = state_26803;
var statearr_26830_26886 = state_26803__$1;
(statearr_26830_26886[(2)] = inst_26777);

(statearr_26830_26886[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26804 === (6))){
var state_26803__$1 = state_26803;
var statearr_26831_26887 = state_26803__$1;
(statearr_26831_26887[(2)] = false);

(statearr_26831_26887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26804 === (28))){
var inst_26773 = (state_26803[(2)]);
var inst_26774 = calc_state.call(null);
var inst_26733 = inst_26774;
var state_26803__$1 = (function (){var statearr_26832 = state_26803;
(statearr_26832[(15)] = inst_26773);

(statearr_26832[(7)] = inst_26733);

return statearr_26832;
})();
var statearr_26833_26888 = state_26803__$1;
(statearr_26833_26888[(2)] = null);

(statearr_26833_26888[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26804 === (25))){
var inst_26799 = (state_26803[(2)]);
var state_26803__$1 = state_26803;
var statearr_26834_26889 = state_26803__$1;
(statearr_26834_26889[(2)] = inst_26799);

(statearr_26834_26889[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26804 === (34))){
var inst_26797 = (state_26803[(2)]);
var state_26803__$1 = state_26803;
var statearr_26835_26890 = state_26803__$1;
(statearr_26835_26890[(2)] = inst_26797);

(statearr_26835_26890[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26804 === (17))){
var state_26803__$1 = state_26803;
var statearr_26836_26891 = state_26803__$1;
(statearr_26836_26891[(2)] = false);

(statearr_26836_26891[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26804 === (3))){
var state_26803__$1 = state_26803;
var statearr_26837_26892 = state_26803__$1;
(statearr_26837_26892[(2)] = false);

(statearr_26837_26892[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26804 === (12))){
var inst_26801 = (state_26803[(2)]);
var state_26803__$1 = state_26803;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26803__$1,inst_26801);
} else {
if((state_val_26804 === (2))){
var inst_26709 = (state_26803[(8)]);
var inst_26714 = inst_26709.cljs$lang$protocol_mask$partition0$;
var inst_26715 = (inst_26714 & (64));
var inst_26716 = inst_26709.cljs$core$ISeq$;
var inst_26717 = (inst_26715) || (inst_26716);
var state_26803__$1 = state_26803;
if(cljs.core.truth_(inst_26717)){
var statearr_26838_26893 = state_26803__$1;
(statearr_26838_26893[(1)] = (5));

} else {
var statearr_26839_26894 = state_26803__$1;
(statearr_26839_26894[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26804 === (23))){
var inst_26762 = (state_26803[(14)]);
var inst_26768 = (inst_26762 == null);
var state_26803__$1 = state_26803;
if(cljs.core.truth_(inst_26768)){
var statearr_26840_26895 = state_26803__$1;
(statearr_26840_26895[(1)] = (26));

} else {
var statearr_26841_26896 = state_26803__$1;
(statearr_26841_26896[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26804 === (35))){
var inst_26788 = (state_26803[(2)]);
var state_26803__$1 = state_26803;
if(cljs.core.truth_(inst_26788)){
var statearr_26842_26897 = state_26803__$1;
(statearr_26842_26897[(1)] = (36));

} else {
var statearr_26843_26898 = state_26803__$1;
(statearr_26843_26898[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26804 === (19))){
var inst_26733 = (state_26803[(7)]);
var inst_26752 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26733);
var state_26803__$1 = state_26803;
var statearr_26844_26899 = state_26803__$1;
(statearr_26844_26899[(2)] = inst_26752);

(statearr_26844_26899[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26804 === (11))){
var inst_26733 = (state_26803[(7)]);
var inst_26737 = (inst_26733 == null);
var inst_26738 = cljs.core.not.call(null,inst_26737);
var state_26803__$1 = state_26803;
if(inst_26738){
var statearr_26845_26900 = state_26803__$1;
(statearr_26845_26900[(1)] = (13));

} else {
var statearr_26846_26901 = state_26803__$1;
(statearr_26846_26901[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26804 === (9))){
var inst_26709 = (state_26803[(8)]);
var state_26803__$1 = state_26803;
var statearr_26847_26902 = state_26803__$1;
(statearr_26847_26902[(2)] = inst_26709);

(statearr_26847_26902[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26804 === (5))){
var state_26803__$1 = state_26803;
var statearr_26848_26903 = state_26803__$1;
(statearr_26848_26903[(2)] = true);

(statearr_26848_26903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26804 === (14))){
var state_26803__$1 = state_26803;
var statearr_26849_26904 = state_26803__$1;
(statearr_26849_26904[(2)] = false);

(statearr_26849_26904[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26804 === (26))){
var inst_26763 = (state_26803[(9)]);
var inst_26770 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26763);
var state_26803__$1 = state_26803;
var statearr_26850_26905 = state_26803__$1;
(statearr_26850_26905[(2)] = inst_26770);

(statearr_26850_26905[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26804 === (16))){
var state_26803__$1 = state_26803;
var statearr_26851_26906 = state_26803__$1;
(statearr_26851_26906[(2)] = true);

(statearr_26851_26906[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26804 === (38))){
var inst_26793 = (state_26803[(2)]);
var state_26803__$1 = state_26803;
var statearr_26852_26907 = state_26803__$1;
(statearr_26852_26907[(2)] = inst_26793);

(statearr_26852_26907[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26804 === (30))){
var inst_26763 = (state_26803[(9)]);
var inst_26756 = (state_26803[(11)]);
var inst_26757 = (state_26803[(13)]);
var inst_26780 = cljs.core.empty_QMARK_.call(null,inst_26756);
var inst_26781 = inst_26757.call(null,inst_26763);
var inst_26782 = cljs.core.not.call(null,inst_26781);
var inst_26783 = (inst_26780) && (inst_26782);
var state_26803__$1 = state_26803;
var statearr_26853_26908 = state_26803__$1;
(statearr_26853_26908[(2)] = inst_26783);

(statearr_26853_26908[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26804 === (10))){
var inst_26709 = (state_26803[(8)]);
var inst_26729 = (state_26803[(2)]);
var inst_26730 = cljs.core.get.call(null,inst_26729,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26731 = cljs.core.get.call(null,inst_26729,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26732 = cljs.core.get.call(null,inst_26729,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26733 = inst_26709;
var state_26803__$1 = (function (){var statearr_26854 = state_26803;
(statearr_26854[(16)] = inst_26731);

(statearr_26854[(7)] = inst_26733);

(statearr_26854[(17)] = inst_26732);

(statearr_26854[(18)] = inst_26730);

return statearr_26854;
})();
var statearr_26855_26909 = state_26803__$1;
(statearr_26855_26909[(2)] = null);

(statearr_26855_26909[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26804 === (18))){
var inst_26747 = (state_26803[(2)]);
var state_26803__$1 = state_26803;
var statearr_26856_26910 = state_26803__$1;
(statearr_26856_26910[(2)] = inst_26747);

(statearr_26856_26910[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26804 === (37))){
var state_26803__$1 = state_26803;
var statearr_26857_26911 = state_26803__$1;
(statearr_26857_26911[(2)] = null);

(statearr_26857_26911[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26804 === (8))){
var inst_26709 = (state_26803[(8)]);
var inst_26726 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26709);
var state_26803__$1 = state_26803;
var statearr_26858_26912 = state_26803__$1;
(statearr_26858_26912[(2)] = inst_26726);

(statearr_26858_26912[(1)] = (10));


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
});})(c__19757__auto___26866,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19692__auto__,c__19757__auto___26866,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19693__auto__ = null;
var cljs$core$async$mix_$_state_machine__19693__auto____0 = (function (){
var statearr_26862 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26862[(0)] = cljs$core$async$mix_$_state_machine__19693__auto__);

(statearr_26862[(1)] = (1));

return statearr_26862;
});
var cljs$core$async$mix_$_state_machine__19693__auto____1 = (function (state_26803){
while(true){
var ret_value__19694__auto__ = (function (){try{while(true){
var result__19695__auto__ = switch__19692__auto__.call(null,state_26803);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19695__auto__;
}
break;
}
}catch (e26863){if((e26863 instanceof Object)){
var ex__19696__auto__ = e26863;
var statearr_26864_26913 = state_26803;
(statearr_26864_26913[(5)] = ex__19696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26803);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26863;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26914 = state_26803;
state_26803 = G__26914;
continue;
} else {
return ret_value__19694__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19693__auto__ = function(state_26803){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19693__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19693__auto____1.call(this,state_26803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19693__auto____0;
cljs$core$async$mix_$_state_machine__19693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19693__auto____1;
return cljs$core$async$mix_$_state_machine__19693__auto__;
})()
;})(switch__19692__auto__,c__19757__auto___26866,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19759__auto__ = (function (){var statearr_26865 = f__19758__auto__.call(null);
(statearr_26865[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19757__auto___26866);

return statearr_26865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19759__auto__);
});})(c__19757__auto___26866,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__16987__auto__ = (((p == null))?null:p);
var m__16988__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__16987__auto__)]);
if(!((m__16988__auto__ == null))){
return m__16988__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__16988__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__16988__auto____$1 == null))){
return m__16988__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__16987__auto__ = (((p == null))?null:p);
var m__16988__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__16987__auto__)]);
if(!((m__16988__auto__ == null))){
return m__16988__auto__.call(null,p,v,ch);
} else {
var m__16988__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__16988__auto____$1 == null))){
return m__16988__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args26915 = [];
var len__17390__auto___26918 = arguments.length;
var i__17391__auto___26919 = (0);
while(true){
if((i__17391__auto___26919 < len__17390__auto___26918)){
args26915.push((arguments[i__17391__auto___26919]));

var G__26920 = (i__17391__auto___26919 + (1));
i__17391__auto___26919 = G__26920;
continue;
} else {
}
break;
}

var G__26917 = args26915.length;
switch (G__26917) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26915.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__16987__auto__ = (((p == null))?null:p);
var m__16988__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16987__auto__)]);
if(!((m__16988__auto__ == null))){
return m__16988__auto__.call(null,p);
} else {
var m__16988__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__16988__auto____$1 == null))){
return m__16988__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__16987__auto__ = (((p == null))?null:p);
var m__16988__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16987__auto__)]);
if(!((m__16988__auto__ == null))){
return m__16988__auto__.call(null,p,v);
} else {
var m__16988__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__16988__auto____$1 == null))){
return m__16988__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args26923 = [];
var len__17390__auto___27048 = arguments.length;
var i__17391__auto___27049 = (0);
while(true){
if((i__17391__auto___27049 < len__17390__auto___27048)){
args26923.push((arguments[i__17391__auto___27049]));

var G__27050 = (i__17391__auto___27049 + (1));
i__17391__auto___27049 = G__27050;
continue;
} else {
}
break;
}

var G__26925 = args26923.length;
switch (G__26925) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26923.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16332__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16332__auto__)){
return or__16332__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16332__auto__,mults){
return (function (p1__26922_SHARP_){
if(cljs.core.truth_(p1__26922_SHARP_.call(null,topic))){
return p1__26922_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26922_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16332__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async26926 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26926 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26927){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26927 = meta26927;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26926.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26928,meta26927__$1){
var self__ = this;
var _26928__$1 = this;
return (new cljs.core.async.t_cljs$core$async26926(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26927__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26926.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26928){
var self__ = this;
var _26928__$1 = this;
return self__.meta26927;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26926.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26926.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26926.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async26926.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26926.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26926.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26926.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26926.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26927","meta26927",565569326,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26926.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26926.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26926";

cljs.core.async.t_cljs$core$async26926.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16930__auto__,writer__16931__auto__,opt__16932__auto__){
return cljs.core._write.call(null,writer__16931__auto__,"cljs.core.async/t_cljs$core$async26926");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async26926 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async26926(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26927){
return (new cljs.core.async.t_cljs$core$async26926(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26927));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async26926(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19757__auto___27052 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19757__auto___27052,mults,ensure_mult,p){
return (function (){
var f__19758__auto__ = (function (){var switch__19692__auto__ = ((function (c__19757__auto___27052,mults,ensure_mult,p){
return (function (state_27000){
var state_val_27001 = (state_27000[(1)]);
if((state_val_27001 === (7))){
var inst_26996 = (state_27000[(2)]);
var state_27000__$1 = state_27000;
var statearr_27002_27053 = state_27000__$1;
(statearr_27002_27053[(2)] = inst_26996);

(statearr_27002_27053[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27001 === (20))){
var state_27000__$1 = state_27000;
var statearr_27003_27054 = state_27000__$1;
(statearr_27003_27054[(2)] = null);

(statearr_27003_27054[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27001 === (1))){
var state_27000__$1 = state_27000;
var statearr_27004_27055 = state_27000__$1;
(statearr_27004_27055[(2)] = null);

(statearr_27004_27055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27001 === (24))){
var inst_26979 = (state_27000[(7)]);
var inst_26988 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26979);
var state_27000__$1 = state_27000;
var statearr_27005_27056 = state_27000__$1;
(statearr_27005_27056[(2)] = inst_26988);

(statearr_27005_27056[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27001 === (4))){
var inst_26931 = (state_27000[(8)]);
var inst_26931__$1 = (state_27000[(2)]);
var inst_26932 = (inst_26931__$1 == null);
var state_27000__$1 = (function (){var statearr_27006 = state_27000;
(statearr_27006[(8)] = inst_26931__$1);

return statearr_27006;
})();
if(cljs.core.truth_(inst_26932)){
var statearr_27007_27057 = state_27000__$1;
(statearr_27007_27057[(1)] = (5));

} else {
var statearr_27008_27058 = state_27000__$1;
(statearr_27008_27058[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27001 === (15))){
var inst_26973 = (state_27000[(2)]);
var state_27000__$1 = state_27000;
var statearr_27009_27059 = state_27000__$1;
(statearr_27009_27059[(2)] = inst_26973);

(statearr_27009_27059[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27001 === (21))){
var inst_26993 = (state_27000[(2)]);
var state_27000__$1 = (function (){var statearr_27010 = state_27000;
(statearr_27010[(9)] = inst_26993);

return statearr_27010;
})();
var statearr_27011_27060 = state_27000__$1;
(statearr_27011_27060[(2)] = null);

(statearr_27011_27060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27001 === (13))){
var inst_26955 = (state_27000[(10)]);
var inst_26957 = cljs.core.chunked_seq_QMARK_.call(null,inst_26955);
var state_27000__$1 = state_27000;
if(inst_26957){
var statearr_27012_27061 = state_27000__$1;
(statearr_27012_27061[(1)] = (16));

} else {
var statearr_27013_27062 = state_27000__$1;
(statearr_27013_27062[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27001 === (22))){
var inst_26985 = (state_27000[(2)]);
var state_27000__$1 = state_27000;
if(cljs.core.truth_(inst_26985)){
var statearr_27014_27063 = state_27000__$1;
(statearr_27014_27063[(1)] = (23));

} else {
var statearr_27015_27064 = state_27000__$1;
(statearr_27015_27064[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27001 === (6))){
var inst_26931 = (state_27000[(8)]);
var inst_26979 = (state_27000[(7)]);
var inst_26981 = (state_27000[(11)]);
var inst_26979__$1 = topic_fn.call(null,inst_26931);
var inst_26980 = cljs.core.deref.call(null,mults);
var inst_26981__$1 = cljs.core.get.call(null,inst_26980,inst_26979__$1);
var state_27000__$1 = (function (){var statearr_27016 = state_27000;
(statearr_27016[(7)] = inst_26979__$1);

(statearr_27016[(11)] = inst_26981__$1);

return statearr_27016;
})();
if(cljs.core.truth_(inst_26981__$1)){
var statearr_27017_27065 = state_27000__$1;
(statearr_27017_27065[(1)] = (19));

} else {
var statearr_27018_27066 = state_27000__$1;
(statearr_27018_27066[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27001 === (25))){
var inst_26990 = (state_27000[(2)]);
var state_27000__$1 = state_27000;
var statearr_27019_27067 = state_27000__$1;
(statearr_27019_27067[(2)] = inst_26990);

(statearr_27019_27067[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27001 === (17))){
var inst_26955 = (state_27000[(10)]);
var inst_26964 = cljs.core.first.call(null,inst_26955);
var inst_26965 = cljs.core.async.muxch_STAR_.call(null,inst_26964);
var inst_26966 = cljs.core.async.close_BANG_.call(null,inst_26965);
var inst_26967 = cljs.core.next.call(null,inst_26955);
var inst_26941 = inst_26967;
var inst_26942 = null;
var inst_26943 = (0);
var inst_26944 = (0);
var state_27000__$1 = (function (){var statearr_27020 = state_27000;
(statearr_27020[(12)] = inst_26942);

(statearr_27020[(13)] = inst_26943);

(statearr_27020[(14)] = inst_26941);

(statearr_27020[(15)] = inst_26966);

(statearr_27020[(16)] = inst_26944);

return statearr_27020;
})();
var statearr_27021_27068 = state_27000__$1;
(statearr_27021_27068[(2)] = null);

(statearr_27021_27068[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27001 === (3))){
var inst_26998 = (state_27000[(2)]);
var state_27000__$1 = state_27000;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27000__$1,inst_26998);
} else {
if((state_val_27001 === (12))){
var inst_26975 = (state_27000[(2)]);
var state_27000__$1 = state_27000;
var statearr_27022_27069 = state_27000__$1;
(statearr_27022_27069[(2)] = inst_26975);

(statearr_27022_27069[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27001 === (2))){
var state_27000__$1 = state_27000;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27000__$1,(4),ch);
} else {
if((state_val_27001 === (23))){
var state_27000__$1 = state_27000;
var statearr_27023_27070 = state_27000__$1;
(statearr_27023_27070[(2)] = null);

(statearr_27023_27070[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27001 === (19))){
var inst_26931 = (state_27000[(8)]);
var inst_26981 = (state_27000[(11)]);
var inst_26983 = cljs.core.async.muxch_STAR_.call(null,inst_26981);
var state_27000__$1 = state_27000;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27000__$1,(22),inst_26983,inst_26931);
} else {
if((state_val_27001 === (11))){
var inst_26941 = (state_27000[(14)]);
var inst_26955 = (state_27000[(10)]);
var inst_26955__$1 = cljs.core.seq.call(null,inst_26941);
var state_27000__$1 = (function (){var statearr_27024 = state_27000;
(statearr_27024[(10)] = inst_26955__$1);

return statearr_27024;
})();
if(inst_26955__$1){
var statearr_27025_27071 = state_27000__$1;
(statearr_27025_27071[(1)] = (13));

} else {
var statearr_27026_27072 = state_27000__$1;
(statearr_27026_27072[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27001 === (9))){
var inst_26977 = (state_27000[(2)]);
var state_27000__$1 = state_27000;
var statearr_27027_27073 = state_27000__$1;
(statearr_27027_27073[(2)] = inst_26977);

(statearr_27027_27073[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27001 === (5))){
var inst_26938 = cljs.core.deref.call(null,mults);
var inst_26939 = cljs.core.vals.call(null,inst_26938);
var inst_26940 = cljs.core.seq.call(null,inst_26939);
var inst_26941 = inst_26940;
var inst_26942 = null;
var inst_26943 = (0);
var inst_26944 = (0);
var state_27000__$1 = (function (){var statearr_27028 = state_27000;
(statearr_27028[(12)] = inst_26942);

(statearr_27028[(13)] = inst_26943);

(statearr_27028[(14)] = inst_26941);

(statearr_27028[(16)] = inst_26944);

return statearr_27028;
})();
var statearr_27029_27074 = state_27000__$1;
(statearr_27029_27074[(2)] = null);

(statearr_27029_27074[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27001 === (14))){
var state_27000__$1 = state_27000;
var statearr_27033_27075 = state_27000__$1;
(statearr_27033_27075[(2)] = null);

(statearr_27033_27075[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27001 === (16))){
var inst_26955 = (state_27000[(10)]);
var inst_26959 = cljs.core.chunk_first.call(null,inst_26955);
var inst_26960 = cljs.core.chunk_rest.call(null,inst_26955);
var inst_26961 = cljs.core.count.call(null,inst_26959);
var inst_26941 = inst_26960;
var inst_26942 = inst_26959;
var inst_26943 = inst_26961;
var inst_26944 = (0);
var state_27000__$1 = (function (){var statearr_27034 = state_27000;
(statearr_27034[(12)] = inst_26942);

(statearr_27034[(13)] = inst_26943);

(statearr_27034[(14)] = inst_26941);

(statearr_27034[(16)] = inst_26944);

return statearr_27034;
})();
var statearr_27035_27076 = state_27000__$1;
(statearr_27035_27076[(2)] = null);

(statearr_27035_27076[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27001 === (10))){
var inst_26942 = (state_27000[(12)]);
var inst_26943 = (state_27000[(13)]);
var inst_26941 = (state_27000[(14)]);
var inst_26944 = (state_27000[(16)]);
var inst_26949 = cljs.core._nth.call(null,inst_26942,inst_26944);
var inst_26950 = cljs.core.async.muxch_STAR_.call(null,inst_26949);
var inst_26951 = cljs.core.async.close_BANG_.call(null,inst_26950);
var inst_26952 = (inst_26944 + (1));
var tmp27030 = inst_26942;
var tmp27031 = inst_26943;
var tmp27032 = inst_26941;
var inst_26941__$1 = tmp27032;
var inst_26942__$1 = tmp27030;
var inst_26943__$1 = tmp27031;
var inst_26944__$1 = inst_26952;
var state_27000__$1 = (function (){var statearr_27036 = state_27000;
(statearr_27036[(12)] = inst_26942__$1);

(statearr_27036[(13)] = inst_26943__$1);

(statearr_27036[(14)] = inst_26941__$1);

(statearr_27036[(17)] = inst_26951);

(statearr_27036[(16)] = inst_26944__$1);

return statearr_27036;
})();
var statearr_27037_27077 = state_27000__$1;
(statearr_27037_27077[(2)] = null);

(statearr_27037_27077[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27001 === (18))){
var inst_26970 = (state_27000[(2)]);
var state_27000__$1 = state_27000;
var statearr_27038_27078 = state_27000__$1;
(statearr_27038_27078[(2)] = inst_26970);

(statearr_27038_27078[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27001 === (8))){
var inst_26943 = (state_27000[(13)]);
var inst_26944 = (state_27000[(16)]);
var inst_26946 = (inst_26944 < inst_26943);
var inst_26947 = inst_26946;
var state_27000__$1 = state_27000;
if(cljs.core.truth_(inst_26947)){
var statearr_27039_27079 = state_27000__$1;
(statearr_27039_27079[(1)] = (10));

} else {
var statearr_27040_27080 = state_27000__$1;
(statearr_27040_27080[(1)] = (11));

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
});})(c__19757__auto___27052,mults,ensure_mult,p))
;
return ((function (switch__19692__auto__,c__19757__auto___27052,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19693__auto__ = null;
var cljs$core$async$state_machine__19693__auto____0 = (function (){
var statearr_27044 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27044[(0)] = cljs$core$async$state_machine__19693__auto__);

(statearr_27044[(1)] = (1));

return statearr_27044;
});
var cljs$core$async$state_machine__19693__auto____1 = (function (state_27000){
while(true){
var ret_value__19694__auto__ = (function (){try{while(true){
var result__19695__auto__ = switch__19692__auto__.call(null,state_27000);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19695__auto__;
}
break;
}
}catch (e27045){if((e27045 instanceof Object)){
var ex__19696__auto__ = e27045;
var statearr_27046_27081 = state_27000;
(statearr_27046_27081[(5)] = ex__19696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27000);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27045;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27082 = state_27000;
state_27000 = G__27082;
continue;
} else {
return ret_value__19694__auto__;
}
break;
}
});
cljs$core$async$state_machine__19693__auto__ = function(state_27000){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19693__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19693__auto____1.call(this,state_27000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19693__auto____0;
cljs$core$async$state_machine__19693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19693__auto____1;
return cljs$core$async$state_machine__19693__auto__;
})()
;})(switch__19692__auto__,c__19757__auto___27052,mults,ensure_mult,p))
})();
var state__19759__auto__ = (function (){var statearr_27047 = f__19758__auto__.call(null);
(statearr_27047[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19757__auto___27052);

return statearr_27047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19759__auto__);
});})(c__19757__auto___27052,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args27083 = [];
var len__17390__auto___27086 = arguments.length;
var i__17391__auto___27087 = (0);
while(true){
if((i__17391__auto___27087 < len__17390__auto___27086)){
args27083.push((arguments[i__17391__auto___27087]));

var G__27088 = (i__17391__auto___27087 + (1));
i__17391__auto___27087 = G__27088;
continue;
} else {
}
break;
}

var G__27085 = args27083.length;
switch (G__27085) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27083.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args27090 = [];
var len__17390__auto___27093 = arguments.length;
var i__17391__auto___27094 = (0);
while(true){
if((i__17391__auto___27094 < len__17390__auto___27093)){
args27090.push((arguments[i__17391__auto___27094]));

var G__27095 = (i__17391__auto___27094 + (1));
i__17391__auto___27094 = G__27095;
continue;
} else {
}
break;
}

var G__27092 = args27090.length;
switch (G__27092) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27090.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args27097 = [];
var len__17390__auto___27168 = arguments.length;
var i__17391__auto___27169 = (0);
while(true){
if((i__17391__auto___27169 < len__17390__auto___27168)){
args27097.push((arguments[i__17391__auto___27169]));

var G__27170 = (i__17391__auto___27169 + (1));
i__17391__auto___27169 = G__27170;
continue;
} else {
}
break;
}

var G__27099 = args27097.length;
switch (G__27099) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27097.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__19757__auto___27172 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19757__auto___27172,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19758__auto__ = (function (){var switch__19692__auto__ = ((function (c__19757__auto___27172,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27138){
var state_val_27139 = (state_27138[(1)]);
if((state_val_27139 === (7))){
var state_27138__$1 = state_27138;
var statearr_27140_27173 = state_27138__$1;
(statearr_27140_27173[(2)] = null);

(statearr_27140_27173[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27139 === (1))){
var state_27138__$1 = state_27138;
var statearr_27141_27174 = state_27138__$1;
(statearr_27141_27174[(2)] = null);

(statearr_27141_27174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27139 === (4))){
var inst_27102 = (state_27138[(7)]);
var inst_27104 = (inst_27102 < cnt);
var state_27138__$1 = state_27138;
if(cljs.core.truth_(inst_27104)){
var statearr_27142_27175 = state_27138__$1;
(statearr_27142_27175[(1)] = (6));

} else {
var statearr_27143_27176 = state_27138__$1;
(statearr_27143_27176[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27139 === (15))){
var inst_27134 = (state_27138[(2)]);
var state_27138__$1 = state_27138;
var statearr_27144_27177 = state_27138__$1;
(statearr_27144_27177[(2)] = inst_27134);

(statearr_27144_27177[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27139 === (13))){
var inst_27127 = cljs.core.async.close_BANG_.call(null,out);
var state_27138__$1 = state_27138;
var statearr_27145_27178 = state_27138__$1;
(statearr_27145_27178[(2)] = inst_27127);

(statearr_27145_27178[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27139 === (6))){
var state_27138__$1 = state_27138;
var statearr_27146_27179 = state_27138__$1;
(statearr_27146_27179[(2)] = null);

(statearr_27146_27179[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27139 === (3))){
var inst_27136 = (state_27138[(2)]);
var state_27138__$1 = state_27138;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27138__$1,inst_27136);
} else {
if((state_val_27139 === (12))){
var inst_27124 = (state_27138[(8)]);
var inst_27124__$1 = (state_27138[(2)]);
var inst_27125 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27124__$1);
var state_27138__$1 = (function (){var statearr_27147 = state_27138;
(statearr_27147[(8)] = inst_27124__$1);

return statearr_27147;
})();
if(cljs.core.truth_(inst_27125)){
var statearr_27148_27180 = state_27138__$1;
(statearr_27148_27180[(1)] = (13));

} else {
var statearr_27149_27181 = state_27138__$1;
(statearr_27149_27181[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27139 === (2))){
var inst_27101 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27102 = (0);
var state_27138__$1 = (function (){var statearr_27150 = state_27138;
(statearr_27150[(7)] = inst_27102);

(statearr_27150[(9)] = inst_27101);

return statearr_27150;
})();
var statearr_27151_27182 = state_27138__$1;
(statearr_27151_27182[(2)] = null);

(statearr_27151_27182[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27139 === (11))){
var inst_27102 = (state_27138[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27138,(10),Object,null,(9));
var inst_27111 = chs__$1.call(null,inst_27102);
var inst_27112 = done.call(null,inst_27102);
var inst_27113 = cljs.core.async.take_BANG_.call(null,inst_27111,inst_27112);
var state_27138__$1 = state_27138;
var statearr_27152_27183 = state_27138__$1;
(statearr_27152_27183[(2)] = inst_27113);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27138__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27139 === (9))){
var inst_27102 = (state_27138[(7)]);
var inst_27115 = (state_27138[(2)]);
var inst_27116 = (inst_27102 + (1));
var inst_27102__$1 = inst_27116;
var state_27138__$1 = (function (){var statearr_27153 = state_27138;
(statearr_27153[(7)] = inst_27102__$1);

(statearr_27153[(10)] = inst_27115);

return statearr_27153;
})();
var statearr_27154_27184 = state_27138__$1;
(statearr_27154_27184[(2)] = null);

(statearr_27154_27184[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27139 === (5))){
var inst_27122 = (state_27138[(2)]);
var state_27138__$1 = (function (){var statearr_27155 = state_27138;
(statearr_27155[(11)] = inst_27122);

return statearr_27155;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27138__$1,(12),dchan);
} else {
if((state_val_27139 === (14))){
var inst_27124 = (state_27138[(8)]);
var inst_27129 = cljs.core.apply.call(null,f,inst_27124);
var state_27138__$1 = state_27138;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27138__$1,(16),out,inst_27129);
} else {
if((state_val_27139 === (16))){
var inst_27131 = (state_27138[(2)]);
var state_27138__$1 = (function (){var statearr_27156 = state_27138;
(statearr_27156[(12)] = inst_27131);

return statearr_27156;
})();
var statearr_27157_27185 = state_27138__$1;
(statearr_27157_27185[(2)] = null);

(statearr_27157_27185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27139 === (10))){
var inst_27106 = (state_27138[(2)]);
var inst_27107 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27138__$1 = (function (){var statearr_27158 = state_27138;
(statearr_27158[(13)] = inst_27106);

return statearr_27158;
})();
var statearr_27159_27186 = state_27138__$1;
(statearr_27159_27186[(2)] = inst_27107);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27138__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27139 === (8))){
var inst_27120 = (state_27138[(2)]);
var state_27138__$1 = state_27138;
var statearr_27160_27187 = state_27138__$1;
(statearr_27160_27187[(2)] = inst_27120);

(statearr_27160_27187[(1)] = (5));


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
});})(c__19757__auto___27172,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19692__auto__,c__19757__auto___27172,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19693__auto__ = null;
var cljs$core$async$state_machine__19693__auto____0 = (function (){
var statearr_27164 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27164[(0)] = cljs$core$async$state_machine__19693__auto__);

(statearr_27164[(1)] = (1));

return statearr_27164;
});
var cljs$core$async$state_machine__19693__auto____1 = (function (state_27138){
while(true){
var ret_value__19694__auto__ = (function (){try{while(true){
var result__19695__auto__ = switch__19692__auto__.call(null,state_27138);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19695__auto__;
}
break;
}
}catch (e27165){if((e27165 instanceof Object)){
var ex__19696__auto__ = e27165;
var statearr_27166_27188 = state_27138;
(statearr_27166_27188[(5)] = ex__19696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27138);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27165;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27189 = state_27138;
state_27138 = G__27189;
continue;
} else {
return ret_value__19694__auto__;
}
break;
}
});
cljs$core$async$state_machine__19693__auto__ = function(state_27138){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19693__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19693__auto____1.call(this,state_27138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19693__auto____0;
cljs$core$async$state_machine__19693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19693__auto____1;
return cljs$core$async$state_machine__19693__auto__;
})()
;})(switch__19692__auto__,c__19757__auto___27172,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19759__auto__ = (function (){var statearr_27167 = f__19758__auto__.call(null);
(statearr_27167[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19757__auto___27172);

return statearr_27167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19759__auto__);
});})(c__19757__auto___27172,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args27191 = [];
var len__17390__auto___27247 = arguments.length;
var i__17391__auto___27248 = (0);
while(true){
if((i__17391__auto___27248 < len__17390__auto___27247)){
args27191.push((arguments[i__17391__auto___27248]));

var G__27249 = (i__17391__auto___27248 + (1));
i__17391__auto___27248 = G__27249;
continue;
} else {
}
break;
}

var G__27193 = args27191.length;
switch (G__27193) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27191.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19757__auto___27251 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19757__auto___27251,out){
return (function (){
var f__19758__auto__ = (function (){var switch__19692__auto__ = ((function (c__19757__auto___27251,out){
return (function (state_27223){
var state_val_27224 = (state_27223[(1)]);
if((state_val_27224 === (7))){
var inst_27202 = (state_27223[(7)]);
var inst_27203 = (state_27223[(8)]);
var inst_27202__$1 = (state_27223[(2)]);
var inst_27203__$1 = cljs.core.nth.call(null,inst_27202__$1,(0),null);
var inst_27204 = cljs.core.nth.call(null,inst_27202__$1,(1),null);
var inst_27205 = (inst_27203__$1 == null);
var state_27223__$1 = (function (){var statearr_27225 = state_27223;
(statearr_27225[(7)] = inst_27202__$1);

(statearr_27225[(8)] = inst_27203__$1);

(statearr_27225[(9)] = inst_27204);

return statearr_27225;
})();
if(cljs.core.truth_(inst_27205)){
var statearr_27226_27252 = state_27223__$1;
(statearr_27226_27252[(1)] = (8));

} else {
var statearr_27227_27253 = state_27223__$1;
(statearr_27227_27253[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27224 === (1))){
var inst_27194 = cljs.core.vec.call(null,chs);
var inst_27195 = inst_27194;
var state_27223__$1 = (function (){var statearr_27228 = state_27223;
(statearr_27228[(10)] = inst_27195);

return statearr_27228;
})();
var statearr_27229_27254 = state_27223__$1;
(statearr_27229_27254[(2)] = null);

(statearr_27229_27254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27224 === (4))){
var inst_27195 = (state_27223[(10)]);
var state_27223__$1 = state_27223;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27223__$1,(7),inst_27195);
} else {
if((state_val_27224 === (6))){
var inst_27219 = (state_27223[(2)]);
var state_27223__$1 = state_27223;
var statearr_27230_27255 = state_27223__$1;
(statearr_27230_27255[(2)] = inst_27219);

(statearr_27230_27255[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27224 === (3))){
var inst_27221 = (state_27223[(2)]);
var state_27223__$1 = state_27223;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27223__$1,inst_27221);
} else {
if((state_val_27224 === (2))){
var inst_27195 = (state_27223[(10)]);
var inst_27197 = cljs.core.count.call(null,inst_27195);
var inst_27198 = (inst_27197 > (0));
var state_27223__$1 = state_27223;
if(cljs.core.truth_(inst_27198)){
var statearr_27232_27256 = state_27223__$1;
(statearr_27232_27256[(1)] = (4));

} else {
var statearr_27233_27257 = state_27223__$1;
(statearr_27233_27257[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27224 === (11))){
var inst_27195 = (state_27223[(10)]);
var inst_27212 = (state_27223[(2)]);
var tmp27231 = inst_27195;
var inst_27195__$1 = tmp27231;
var state_27223__$1 = (function (){var statearr_27234 = state_27223;
(statearr_27234[(10)] = inst_27195__$1);

(statearr_27234[(11)] = inst_27212);

return statearr_27234;
})();
var statearr_27235_27258 = state_27223__$1;
(statearr_27235_27258[(2)] = null);

(statearr_27235_27258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27224 === (9))){
var inst_27203 = (state_27223[(8)]);
var state_27223__$1 = state_27223;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27223__$1,(11),out,inst_27203);
} else {
if((state_val_27224 === (5))){
var inst_27217 = cljs.core.async.close_BANG_.call(null,out);
var state_27223__$1 = state_27223;
var statearr_27236_27259 = state_27223__$1;
(statearr_27236_27259[(2)] = inst_27217);

(statearr_27236_27259[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27224 === (10))){
var inst_27215 = (state_27223[(2)]);
var state_27223__$1 = state_27223;
var statearr_27237_27260 = state_27223__$1;
(statearr_27237_27260[(2)] = inst_27215);

(statearr_27237_27260[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27224 === (8))){
var inst_27195 = (state_27223[(10)]);
var inst_27202 = (state_27223[(7)]);
var inst_27203 = (state_27223[(8)]);
var inst_27204 = (state_27223[(9)]);
var inst_27207 = (function (){var cs = inst_27195;
var vec__27200 = inst_27202;
var v = inst_27203;
var c = inst_27204;
return ((function (cs,vec__27200,v,c,inst_27195,inst_27202,inst_27203,inst_27204,state_val_27224,c__19757__auto___27251,out){
return (function (p1__27190_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27190_SHARP_);
});
;})(cs,vec__27200,v,c,inst_27195,inst_27202,inst_27203,inst_27204,state_val_27224,c__19757__auto___27251,out))
})();
var inst_27208 = cljs.core.filterv.call(null,inst_27207,inst_27195);
var inst_27195__$1 = inst_27208;
var state_27223__$1 = (function (){var statearr_27238 = state_27223;
(statearr_27238[(10)] = inst_27195__$1);

return statearr_27238;
})();
var statearr_27239_27261 = state_27223__$1;
(statearr_27239_27261[(2)] = null);

(statearr_27239_27261[(1)] = (2));


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
});})(c__19757__auto___27251,out))
;
return ((function (switch__19692__auto__,c__19757__auto___27251,out){
return (function() {
var cljs$core$async$state_machine__19693__auto__ = null;
var cljs$core$async$state_machine__19693__auto____0 = (function (){
var statearr_27243 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27243[(0)] = cljs$core$async$state_machine__19693__auto__);

(statearr_27243[(1)] = (1));

return statearr_27243;
});
var cljs$core$async$state_machine__19693__auto____1 = (function (state_27223){
while(true){
var ret_value__19694__auto__ = (function (){try{while(true){
var result__19695__auto__ = switch__19692__auto__.call(null,state_27223);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19695__auto__;
}
break;
}
}catch (e27244){if((e27244 instanceof Object)){
var ex__19696__auto__ = e27244;
var statearr_27245_27262 = state_27223;
(statearr_27245_27262[(5)] = ex__19696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27223);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27244;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27263 = state_27223;
state_27223 = G__27263;
continue;
} else {
return ret_value__19694__auto__;
}
break;
}
});
cljs$core$async$state_machine__19693__auto__ = function(state_27223){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19693__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19693__auto____1.call(this,state_27223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19693__auto____0;
cljs$core$async$state_machine__19693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19693__auto____1;
return cljs$core$async$state_machine__19693__auto__;
})()
;})(switch__19692__auto__,c__19757__auto___27251,out))
})();
var state__19759__auto__ = (function (){var statearr_27246 = f__19758__auto__.call(null);
(statearr_27246[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19757__auto___27251);

return statearr_27246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19759__auto__);
});})(c__19757__auto___27251,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args27264 = [];
var len__17390__auto___27313 = arguments.length;
var i__17391__auto___27314 = (0);
while(true){
if((i__17391__auto___27314 < len__17390__auto___27313)){
args27264.push((arguments[i__17391__auto___27314]));

var G__27315 = (i__17391__auto___27314 + (1));
i__17391__auto___27314 = G__27315;
continue;
} else {
}
break;
}

var G__27266 = args27264.length;
switch (G__27266) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27264.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19757__auto___27317 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19757__auto___27317,out){
return (function (){
var f__19758__auto__ = (function (){var switch__19692__auto__ = ((function (c__19757__auto___27317,out){
return (function (state_27290){
var state_val_27291 = (state_27290[(1)]);
if((state_val_27291 === (7))){
var inst_27272 = (state_27290[(7)]);
var inst_27272__$1 = (state_27290[(2)]);
var inst_27273 = (inst_27272__$1 == null);
var inst_27274 = cljs.core.not.call(null,inst_27273);
var state_27290__$1 = (function (){var statearr_27292 = state_27290;
(statearr_27292[(7)] = inst_27272__$1);

return statearr_27292;
})();
if(inst_27274){
var statearr_27293_27318 = state_27290__$1;
(statearr_27293_27318[(1)] = (8));

} else {
var statearr_27294_27319 = state_27290__$1;
(statearr_27294_27319[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27291 === (1))){
var inst_27267 = (0);
var state_27290__$1 = (function (){var statearr_27295 = state_27290;
(statearr_27295[(8)] = inst_27267);

return statearr_27295;
})();
var statearr_27296_27320 = state_27290__$1;
(statearr_27296_27320[(2)] = null);

(statearr_27296_27320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27291 === (4))){
var state_27290__$1 = state_27290;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27290__$1,(7),ch);
} else {
if((state_val_27291 === (6))){
var inst_27285 = (state_27290[(2)]);
var state_27290__$1 = state_27290;
var statearr_27297_27321 = state_27290__$1;
(statearr_27297_27321[(2)] = inst_27285);

(statearr_27297_27321[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27291 === (3))){
var inst_27287 = (state_27290[(2)]);
var inst_27288 = cljs.core.async.close_BANG_.call(null,out);
var state_27290__$1 = (function (){var statearr_27298 = state_27290;
(statearr_27298[(9)] = inst_27287);

return statearr_27298;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27290__$1,inst_27288);
} else {
if((state_val_27291 === (2))){
var inst_27267 = (state_27290[(8)]);
var inst_27269 = (inst_27267 < n);
var state_27290__$1 = state_27290;
if(cljs.core.truth_(inst_27269)){
var statearr_27299_27322 = state_27290__$1;
(statearr_27299_27322[(1)] = (4));

} else {
var statearr_27300_27323 = state_27290__$1;
(statearr_27300_27323[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27291 === (11))){
var inst_27267 = (state_27290[(8)]);
var inst_27277 = (state_27290[(2)]);
var inst_27278 = (inst_27267 + (1));
var inst_27267__$1 = inst_27278;
var state_27290__$1 = (function (){var statearr_27301 = state_27290;
(statearr_27301[(10)] = inst_27277);

(statearr_27301[(8)] = inst_27267__$1);

return statearr_27301;
})();
var statearr_27302_27324 = state_27290__$1;
(statearr_27302_27324[(2)] = null);

(statearr_27302_27324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27291 === (9))){
var state_27290__$1 = state_27290;
var statearr_27303_27325 = state_27290__$1;
(statearr_27303_27325[(2)] = null);

(statearr_27303_27325[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27291 === (5))){
var state_27290__$1 = state_27290;
var statearr_27304_27326 = state_27290__$1;
(statearr_27304_27326[(2)] = null);

(statearr_27304_27326[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27291 === (10))){
var inst_27282 = (state_27290[(2)]);
var state_27290__$1 = state_27290;
var statearr_27305_27327 = state_27290__$1;
(statearr_27305_27327[(2)] = inst_27282);

(statearr_27305_27327[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27291 === (8))){
var inst_27272 = (state_27290[(7)]);
var state_27290__$1 = state_27290;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27290__$1,(11),out,inst_27272);
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
});})(c__19757__auto___27317,out))
;
return ((function (switch__19692__auto__,c__19757__auto___27317,out){
return (function() {
var cljs$core$async$state_machine__19693__auto__ = null;
var cljs$core$async$state_machine__19693__auto____0 = (function (){
var statearr_27309 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27309[(0)] = cljs$core$async$state_machine__19693__auto__);

(statearr_27309[(1)] = (1));

return statearr_27309;
});
var cljs$core$async$state_machine__19693__auto____1 = (function (state_27290){
while(true){
var ret_value__19694__auto__ = (function (){try{while(true){
var result__19695__auto__ = switch__19692__auto__.call(null,state_27290);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19695__auto__;
}
break;
}
}catch (e27310){if((e27310 instanceof Object)){
var ex__19696__auto__ = e27310;
var statearr_27311_27328 = state_27290;
(statearr_27311_27328[(5)] = ex__19696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27290);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27310;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27329 = state_27290;
state_27290 = G__27329;
continue;
} else {
return ret_value__19694__auto__;
}
break;
}
});
cljs$core$async$state_machine__19693__auto__ = function(state_27290){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19693__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19693__auto____1.call(this,state_27290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19693__auto____0;
cljs$core$async$state_machine__19693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19693__auto____1;
return cljs$core$async$state_machine__19693__auto__;
})()
;})(switch__19692__auto__,c__19757__auto___27317,out))
})();
var state__19759__auto__ = (function (){var statearr_27312 = f__19758__auto__.call(null);
(statearr_27312[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19757__auto___27317);

return statearr_27312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19759__auto__);
});})(c__19757__auto___27317,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async27337 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27337 = (function (map_LT_,f,ch,meta27338){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27338 = meta27338;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27337.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27339,meta27338__$1){
var self__ = this;
var _27339__$1 = this;
return (new cljs.core.async.t_cljs$core$async27337(self__.map_LT_,self__.f,self__.ch,meta27338__$1));
});

cljs.core.async.t_cljs$core$async27337.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27339){
var self__ = this;
var _27339__$1 = this;
return self__.meta27338;
});

cljs.core.async.t_cljs$core$async27337.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async27337.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27337.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27337.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async27337.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async27340 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27340 = (function (map_LT_,f,ch,meta27338,_,fn1,meta27341){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27338 = meta27338;
this._ = _;
this.fn1 = fn1;
this.meta27341 = meta27341;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27340.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27342,meta27341__$1){
var self__ = this;
var _27342__$1 = this;
return (new cljs.core.async.t_cljs$core$async27340(self__.map_LT_,self__.f,self__.ch,self__.meta27338,self__._,self__.fn1,meta27341__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async27340.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27342){
var self__ = this;
var _27342__$1 = this;
return self__.meta27341;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27340.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27340.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27340.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27330_SHARP_){
return f1.call(null,(((p1__27330_SHARP_ == null))?null:self__.f.call(null,p1__27330_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async27340.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27338","meta27338",1548434970,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async27337","cljs.core.async/t_cljs$core$async27337",-665066867,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta27341","meta27341",1147977828,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27340.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27340.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27340";

cljs.core.async.t_cljs$core$async27340.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16930__auto__,writer__16931__auto__,opt__16932__auto__){
return cljs.core._write.call(null,writer__16931__auto__,"cljs.core.async/t_cljs$core$async27340");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async27340 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27340(map_LT___$1,f__$1,ch__$1,meta27338__$1,___$2,fn1__$1,meta27341){
return (new cljs.core.async.t_cljs$core$async27340(map_LT___$1,f__$1,ch__$1,meta27338__$1,___$2,fn1__$1,meta27341));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async27340(self__.map_LT_,self__.f,self__.ch,self__.meta27338,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16320__auto__ = ret;
if(cljs.core.truth_(and__16320__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16320__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async27337.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async27337.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async27337.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27338","meta27338",1548434970,null)], null);
});

cljs.core.async.t_cljs$core$async27337.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27337.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27337";

cljs.core.async.t_cljs$core$async27337.cljs$lang$ctorPrWriter = (function (this__16930__auto__,writer__16931__auto__,opt__16932__auto__){
return cljs.core._write.call(null,writer__16931__auto__,"cljs.core.async/t_cljs$core$async27337");
});

cljs.core.async.__GT_t_cljs$core$async27337 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27337(map_LT___$1,f__$1,ch__$1,meta27338){
return (new cljs.core.async.t_cljs$core$async27337(map_LT___$1,f__$1,ch__$1,meta27338));
});

}

return (new cljs.core.async.t_cljs$core$async27337(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async27346 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27346 = (function (map_GT_,f,ch,meta27347){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta27347 = meta27347;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27346.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27348,meta27347__$1){
var self__ = this;
var _27348__$1 = this;
return (new cljs.core.async.t_cljs$core$async27346(self__.map_GT_,self__.f,self__.ch,meta27347__$1));
});

cljs.core.async.t_cljs$core$async27346.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27348){
var self__ = this;
var _27348__$1 = this;
return self__.meta27347;
});

cljs.core.async.t_cljs$core$async27346.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async27346.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27346.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async27346.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27346.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async27346.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async27346.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27347","meta27347",-1468013481,null)], null);
});

cljs.core.async.t_cljs$core$async27346.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27346.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27346";

cljs.core.async.t_cljs$core$async27346.cljs$lang$ctorPrWriter = (function (this__16930__auto__,writer__16931__auto__,opt__16932__auto__){
return cljs.core._write.call(null,writer__16931__auto__,"cljs.core.async/t_cljs$core$async27346");
});

cljs.core.async.__GT_t_cljs$core$async27346 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async27346(map_GT___$1,f__$1,ch__$1,meta27347){
return (new cljs.core.async.t_cljs$core$async27346(map_GT___$1,f__$1,ch__$1,meta27347));
});

}

return (new cljs.core.async.t_cljs$core$async27346(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async27352 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27352 = (function (filter_GT_,p,ch,meta27353){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta27353 = meta27353;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27352.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27354,meta27353__$1){
var self__ = this;
var _27354__$1 = this;
return (new cljs.core.async.t_cljs$core$async27352(self__.filter_GT_,self__.p,self__.ch,meta27353__$1));
});

cljs.core.async.t_cljs$core$async27352.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27354){
var self__ = this;
var _27354__$1 = this;
return self__.meta27353;
});

cljs.core.async.t_cljs$core$async27352.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async27352.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27352.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27352.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async27352.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27352.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async27352.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async27352.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27353","meta27353",749560415,null)], null);
});

cljs.core.async.t_cljs$core$async27352.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27352.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27352";

cljs.core.async.t_cljs$core$async27352.cljs$lang$ctorPrWriter = (function (this__16930__auto__,writer__16931__auto__,opt__16932__auto__){
return cljs.core._write.call(null,writer__16931__auto__,"cljs.core.async/t_cljs$core$async27352");
});

cljs.core.async.__GT_t_cljs$core$async27352 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async27352(filter_GT___$1,p__$1,ch__$1,meta27353){
return (new cljs.core.async.t_cljs$core$async27352(filter_GT___$1,p__$1,ch__$1,meta27353));
});

}

return (new cljs.core.async.t_cljs$core$async27352(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args27355 = [];
var len__17390__auto___27399 = arguments.length;
var i__17391__auto___27400 = (0);
while(true){
if((i__17391__auto___27400 < len__17390__auto___27399)){
args27355.push((arguments[i__17391__auto___27400]));

var G__27401 = (i__17391__auto___27400 + (1));
i__17391__auto___27400 = G__27401;
continue;
} else {
}
break;
}

var G__27357 = args27355.length;
switch (G__27357) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27355.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19757__auto___27403 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19757__auto___27403,out){
return (function (){
var f__19758__auto__ = (function (){var switch__19692__auto__ = ((function (c__19757__auto___27403,out){
return (function (state_27378){
var state_val_27379 = (state_27378[(1)]);
if((state_val_27379 === (7))){
var inst_27374 = (state_27378[(2)]);
var state_27378__$1 = state_27378;
var statearr_27380_27404 = state_27378__$1;
(statearr_27380_27404[(2)] = inst_27374);

(statearr_27380_27404[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27379 === (1))){
var state_27378__$1 = state_27378;
var statearr_27381_27405 = state_27378__$1;
(statearr_27381_27405[(2)] = null);

(statearr_27381_27405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27379 === (4))){
var inst_27360 = (state_27378[(7)]);
var inst_27360__$1 = (state_27378[(2)]);
var inst_27361 = (inst_27360__$1 == null);
var state_27378__$1 = (function (){var statearr_27382 = state_27378;
(statearr_27382[(7)] = inst_27360__$1);

return statearr_27382;
})();
if(cljs.core.truth_(inst_27361)){
var statearr_27383_27406 = state_27378__$1;
(statearr_27383_27406[(1)] = (5));

} else {
var statearr_27384_27407 = state_27378__$1;
(statearr_27384_27407[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27379 === (6))){
var inst_27360 = (state_27378[(7)]);
var inst_27365 = p.call(null,inst_27360);
var state_27378__$1 = state_27378;
if(cljs.core.truth_(inst_27365)){
var statearr_27385_27408 = state_27378__$1;
(statearr_27385_27408[(1)] = (8));

} else {
var statearr_27386_27409 = state_27378__$1;
(statearr_27386_27409[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27379 === (3))){
var inst_27376 = (state_27378[(2)]);
var state_27378__$1 = state_27378;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27378__$1,inst_27376);
} else {
if((state_val_27379 === (2))){
var state_27378__$1 = state_27378;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27378__$1,(4),ch);
} else {
if((state_val_27379 === (11))){
var inst_27368 = (state_27378[(2)]);
var state_27378__$1 = state_27378;
var statearr_27387_27410 = state_27378__$1;
(statearr_27387_27410[(2)] = inst_27368);

(statearr_27387_27410[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27379 === (9))){
var state_27378__$1 = state_27378;
var statearr_27388_27411 = state_27378__$1;
(statearr_27388_27411[(2)] = null);

(statearr_27388_27411[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27379 === (5))){
var inst_27363 = cljs.core.async.close_BANG_.call(null,out);
var state_27378__$1 = state_27378;
var statearr_27389_27412 = state_27378__$1;
(statearr_27389_27412[(2)] = inst_27363);

(statearr_27389_27412[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27379 === (10))){
var inst_27371 = (state_27378[(2)]);
var state_27378__$1 = (function (){var statearr_27390 = state_27378;
(statearr_27390[(8)] = inst_27371);

return statearr_27390;
})();
var statearr_27391_27413 = state_27378__$1;
(statearr_27391_27413[(2)] = null);

(statearr_27391_27413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27379 === (8))){
var inst_27360 = (state_27378[(7)]);
var state_27378__$1 = state_27378;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27378__$1,(11),out,inst_27360);
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
});})(c__19757__auto___27403,out))
;
return ((function (switch__19692__auto__,c__19757__auto___27403,out){
return (function() {
var cljs$core$async$state_machine__19693__auto__ = null;
var cljs$core$async$state_machine__19693__auto____0 = (function (){
var statearr_27395 = [null,null,null,null,null,null,null,null,null];
(statearr_27395[(0)] = cljs$core$async$state_machine__19693__auto__);

(statearr_27395[(1)] = (1));

return statearr_27395;
});
var cljs$core$async$state_machine__19693__auto____1 = (function (state_27378){
while(true){
var ret_value__19694__auto__ = (function (){try{while(true){
var result__19695__auto__ = switch__19692__auto__.call(null,state_27378);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19695__auto__;
}
break;
}
}catch (e27396){if((e27396 instanceof Object)){
var ex__19696__auto__ = e27396;
var statearr_27397_27414 = state_27378;
(statearr_27397_27414[(5)] = ex__19696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27378);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27396;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27415 = state_27378;
state_27378 = G__27415;
continue;
} else {
return ret_value__19694__auto__;
}
break;
}
});
cljs$core$async$state_machine__19693__auto__ = function(state_27378){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19693__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19693__auto____1.call(this,state_27378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19693__auto____0;
cljs$core$async$state_machine__19693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19693__auto____1;
return cljs$core$async$state_machine__19693__auto__;
})()
;})(switch__19692__auto__,c__19757__auto___27403,out))
})();
var state__19759__auto__ = (function (){var statearr_27398 = f__19758__auto__.call(null);
(statearr_27398[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19757__auto___27403);

return statearr_27398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19759__auto__);
});})(c__19757__auto___27403,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args27416 = [];
var len__17390__auto___27419 = arguments.length;
var i__17391__auto___27420 = (0);
while(true){
if((i__17391__auto___27420 < len__17390__auto___27419)){
args27416.push((arguments[i__17391__auto___27420]));

var G__27421 = (i__17391__auto___27420 + (1));
i__17391__auto___27420 = G__27421;
continue;
} else {
}
break;
}

var G__27418 = args27416.length;
switch (G__27418) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27416.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__19757__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19757__auto__){
return (function (){
var f__19758__auto__ = (function (){var switch__19692__auto__ = ((function (c__19757__auto__){
return (function (state_27588){
var state_val_27589 = (state_27588[(1)]);
if((state_val_27589 === (7))){
var inst_27584 = (state_27588[(2)]);
var state_27588__$1 = state_27588;
var statearr_27590_27631 = state_27588__$1;
(statearr_27590_27631[(2)] = inst_27584);

(statearr_27590_27631[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (20))){
var inst_27554 = (state_27588[(7)]);
var inst_27565 = (state_27588[(2)]);
var inst_27566 = cljs.core.next.call(null,inst_27554);
var inst_27540 = inst_27566;
var inst_27541 = null;
var inst_27542 = (0);
var inst_27543 = (0);
var state_27588__$1 = (function (){var statearr_27591 = state_27588;
(statearr_27591[(8)] = inst_27542);

(statearr_27591[(9)] = inst_27540);

(statearr_27591[(10)] = inst_27543);

(statearr_27591[(11)] = inst_27565);

(statearr_27591[(12)] = inst_27541);

return statearr_27591;
})();
var statearr_27592_27632 = state_27588__$1;
(statearr_27592_27632[(2)] = null);

(statearr_27592_27632[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (1))){
var state_27588__$1 = state_27588;
var statearr_27593_27633 = state_27588__$1;
(statearr_27593_27633[(2)] = null);

(statearr_27593_27633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (4))){
var inst_27529 = (state_27588[(13)]);
var inst_27529__$1 = (state_27588[(2)]);
var inst_27530 = (inst_27529__$1 == null);
var state_27588__$1 = (function (){var statearr_27594 = state_27588;
(statearr_27594[(13)] = inst_27529__$1);

return statearr_27594;
})();
if(cljs.core.truth_(inst_27530)){
var statearr_27595_27634 = state_27588__$1;
(statearr_27595_27634[(1)] = (5));

} else {
var statearr_27596_27635 = state_27588__$1;
(statearr_27596_27635[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (15))){
var state_27588__$1 = state_27588;
var statearr_27600_27636 = state_27588__$1;
(statearr_27600_27636[(2)] = null);

(statearr_27600_27636[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (21))){
var state_27588__$1 = state_27588;
var statearr_27601_27637 = state_27588__$1;
(statearr_27601_27637[(2)] = null);

(statearr_27601_27637[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (13))){
var inst_27542 = (state_27588[(8)]);
var inst_27540 = (state_27588[(9)]);
var inst_27543 = (state_27588[(10)]);
var inst_27541 = (state_27588[(12)]);
var inst_27550 = (state_27588[(2)]);
var inst_27551 = (inst_27543 + (1));
var tmp27597 = inst_27542;
var tmp27598 = inst_27540;
var tmp27599 = inst_27541;
var inst_27540__$1 = tmp27598;
var inst_27541__$1 = tmp27599;
var inst_27542__$1 = tmp27597;
var inst_27543__$1 = inst_27551;
var state_27588__$1 = (function (){var statearr_27602 = state_27588;
(statearr_27602[(8)] = inst_27542__$1);

(statearr_27602[(9)] = inst_27540__$1);

(statearr_27602[(10)] = inst_27543__$1);

(statearr_27602[(12)] = inst_27541__$1);

(statearr_27602[(14)] = inst_27550);

return statearr_27602;
})();
var statearr_27603_27638 = state_27588__$1;
(statearr_27603_27638[(2)] = null);

(statearr_27603_27638[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (22))){
var state_27588__$1 = state_27588;
var statearr_27604_27639 = state_27588__$1;
(statearr_27604_27639[(2)] = null);

(statearr_27604_27639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (6))){
var inst_27529 = (state_27588[(13)]);
var inst_27538 = f.call(null,inst_27529);
var inst_27539 = cljs.core.seq.call(null,inst_27538);
var inst_27540 = inst_27539;
var inst_27541 = null;
var inst_27542 = (0);
var inst_27543 = (0);
var state_27588__$1 = (function (){var statearr_27605 = state_27588;
(statearr_27605[(8)] = inst_27542);

(statearr_27605[(9)] = inst_27540);

(statearr_27605[(10)] = inst_27543);

(statearr_27605[(12)] = inst_27541);

return statearr_27605;
})();
var statearr_27606_27640 = state_27588__$1;
(statearr_27606_27640[(2)] = null);

(statearr_27606_27640[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (17))){
var inst_27554 = (state_27588[(7)]);
var inst_27558 = cljs.core.chunk_first.call(null,inst_27554);
var inst_27559 = cljs.core.chunk_rest.call(null,inst_27554);
var inst_27560 = cljs.core.count.call(null,inst_27558);
var inst_27540 = inst_27559;
var inst_27541 = inst_27558;
var inst_27542 = inst_27560;
var inst_27543 = (0);
var state_27588__$1 = (function (){var statearr_27607 = state_27588;
(statearr_27607[(8)] = inst_27542);

(statearr_27607[(9)] = inst_27540);

(statearr_27607[(10)] = inst_27543);

(statearr_27607[(12)] = inst_27541);

return statearr_27607;
})();
var statearr_27608_27641 = state_27588__$1;
(statearr_27608_27641[(2)] = null);

(statearr_27608_27641[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (3))){
var inst_27586 = (state_27588[(2)]);
var state_27588__$1 = state_27588;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27588__$1,inst_27586);
} else {
if((state_val_27589 === (12))){
var inst_27574 = (state_27588[(2)]);
var state_27588__$1 = state_27588;
var statearr_27609_27642 = state_27588__$1;
(statearr_27609_27642[(2)] = inst_27574);

(statearr_27609_27642[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (2))){
var state_27588__$1 = state_27588;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27588__$1,(4),in$);
} else {
if((state_val_27589 === (23))){
var inst_27582 = (state_27588[(2)]);
var state_27588__$1 = state_27588;
var statearr_27610_27643 = state_27588__$1;
(statearr_27610_27643[(2)] = inst_27582);

(statearr_27610_27643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (19))){
var inst_27569 = (state_27588[(2)]);
var state_27588__$1 = state_27588;
var statearr_27611_27644 = state_27588__$1;
(statearr_27611_27644[(2)] = inst_27569);

(statearr_27611_27644[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (11))){
var inst_27540 = (state_27588[(9)]);
var inst_27554 = (state_27588[(7)]);
var inst_27554__$1 = cljs.core.seq.call(null,inst_27540);
var state_27588__$1 = (function (){var statearr_27612 = state_27588;
(statearr_27612[(7)] = inst_27554__$1);

return statearr_27612;
})();
if(inst_27554__$1){
var statearr_27613_27645 = state_27588__$1;
(statearr_27613_27645[(1)] = (14));

} else {
var statearr_27614_27646 = state_27588__$1;
(statearr_27614_27646[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (9))){
var inst_27576 = (state_27588[(2)]);
var inst_27577 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_27588__$1 = (function (){var statearr_27615 = state_27588;
(statearr_27615[(15)] = inst_27576);

return statearr_27615;
})();
if(cljs.core.truth_(inst_27577)){
var statearr_27616_27647 = state_27588__$1;
(statearr_27616_27647[(1)] = (21));

} else {
var statearr_27617_27648 = state_27588__$1;
(statearr_27617_27648[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (5))){
var inst_27532 = cljs.core.async.close_BANG_.call(null,out);
var state_27588__$1 = state_27588;
var statearr_27618_27649 = state_27588__$1;
(statearr_27618_27649[(2)] = inst_27532);

(statearr_27618_27649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (14))){
var inst_27554 = (state_27588[(7)]);
var inst_27556 = cljs.core.chunked_seq_QMARK_.call(null,inst_27554);
var state_27588__$1 = state_27588;
if(inst_27556){
var statearr_27619_27650 = state_27588__$1;
(statearr_27619_27650[(1)] = (17));

} else {
var statearr_27620_27651 = state_27588__$1;
(statearr_27620_27651[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (16))){
var inst_27572 = (state_27588[(2)]);
var state_27588__$1 = state_27588;
var statearr_27621_27652 = state_27588__$1;
(statearr_27621_27652[(2)] = inst_27572);

(statearr_27621_27652[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27589 === (10))){
var inst_27543 = (state_27588[(10)]);
var inst_27541 = (state_27588[(12)]);
var inst_27548 = cljs.core._nth.call(null,inst_27541,inst_27543);
var state_27588__$1 = state_27588;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27588__$1,(13),out,inst_27548);
} else {
if((state_val_27589 === (18))){
var inst_27554 = (state_27588[(7)]);
var inst_27563 = cljs.core.first.call(null,inst_27554);
var state_27588__$1 = state_27588;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27588__$1,(20),out,inst_27563);
} else {
if((state_val_27589 === (8))){
var inst_27542 = (state_27588[(8)]);
var inst_27543 = (state_27588[(10)]);
var inst_27545 = (inst_27543 < inst_27542);
var inst_27546 = inst_27545;
var state_27588__$1 = state_27588;
if(cljs.core.truth_(inst_27546)){
var statearr_27622_27653 = state_27588__$1;
(statearr_27622_27653[(1)] = (10));

} else {
var statearr_27623_27654 = state_27588__$1;
(statearr_27623_27654[(1)] = (11));

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
});})(c__19757__auto__))
;
return ((function (switch__19692__auto__,c__19757__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19693__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19693__auto____0 = (function (){
var statearr_27627 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27627[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19693__auto__);

(statearr_27627[(1)] = (1));

return statearr_27627;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19693__auto____1 = (function (state_27588){
while(true){
var ret_value__19694__auto__ = (function (){try{while(true){
var result__19695__auto__ = switch__19692__auto__.call(null,state_27588);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19695__auto__;
}
break;
}
}catch (e27628){if((e27628 instanceof Object)){
var ex__19696__auto__ = e27628;
var statearr_27629_27655 = state_27588;
(statearr_27629_27655[(5)] = ex__19696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27588);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27628;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27656 = state_27588;
state_27588 = G__27656;
continue;
} else {
return ret_value__19694__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19693__auto__ = function(state_27588){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19693__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19693__auto____1.call(this,state_27588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19693__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19693__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19693__auto__;
})()
;})(switch__19692__auto__,c__19757__auto__))
})();
var state__19759__auto__ = (function (){var statearr_27630 = f__19758__auto__.call(null);
(statearr_27630[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19757__auto__);

return statearr_27630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19759__auto__);
});})(c__19757__auto__))
);

return c__19757__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args27657 = [];
var len__17390__auto___27660 = arguments.length;
var i__17391__auto___27661 = (0);
while(true){
if((i__17391__auto___27661 < len__17390__auto___27660)){
args27657.push((arguments[i__17391__auto___27661]));

var G__27662 = (i__17391__auto___27661 + (1));
i__17391__auto___27661 = G__27662;
continue;
} else {
}
break;
}

var G__27659 = args27657.length;
switch (G__27659) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27657.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args27664 = [];
var len__17390__auto___27667 = arguments.length;
var i__17391__auto___27668 = (0);
while(true){
if((i__17391__auto___27668 < len__17390__auto___27667)){
args27664.push((arguments[i__17391__auto___27668]));

var G__27669 = (i__17391__auto___27668 + (1));
i__17391__auto___27668 = G__27669;
continue;
} else {
}
break;
}

var G__27666 = args27664.length;
switch (G__27666) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27664.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args27671 = [];
var len__17390__auto___27722 = arguments.length;
var i__17391__auto___27723 = (0);
while(true){
if((i__17391__auto___27723 < len__17390__auto___27722)){
args27671.push((arguments[i__17391__auto___27723]));

var G__27724 = (i__17391__auto___27723 + (1));
i__17391__auto___27723 = G__27724;
continue;
} else {
}
break;
}

var G__27673 = args27671.length;
switch (G__27673) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27671.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19757__auto___27726 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19757__auto___27726,out){
return (function (){
var f__19758__auto__ = (function (){var switch__19692__auto__ = ((function (c__19757__auto___27726,out){
return (function (state_27697){
var state_val_27698 = (state_27697[(1)]);
if((state_val_27698 === (7))){
var inst_27692 = (state_27697[(2)]);
var state_27697__$1 = state_27697;
var statearr_27699_27727 = state_27697__$1;
(statearr_27699_27727[(2)] = inst_27692);

(statearr_27699_27727[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (1))){
var inst_27674 = null;
var state_27697__$1 = (function (){var statearr_27700 = state_27697;
(statearr_27700[(7)] = inst_27674);

return statearr_27700;
})();
var statearr_27701_27728 = state_27697__$1;
(statearr_27701_27728[(2)] = null);

(statearr_27701_27728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (4))){
var inst_27677 = (state_27697[(8)]);
var inst_27677__$1 = (state_27697[(2)]);
var inst_27678 = (inst_27677__$1 == null);
var inst_27679 = cljs.core.not.call(null,inst_27678);
var state_27697__$1 = (function (){var statearr_27702 = state_27697;
(statearr_27702[(8)] = inst_27677__$1);

return statearr_27702;
})();
if(inst_27679){
var statearr_27703_27729 = state_27697__$1;
(statearr_27703_27729[(1)] = (5));

} else {
var statearr_27704_27730 = state_27697__$1;
(statearr_27704_27730[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (6))){
var state_27697__$1 = state_27697;
var statearr_27705_27731 = state_27697__$1;
(statearr_27705_27731[(2)] = null);

(statearr_27705_27731[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (3))){
var inst_27694 = (state_27697[(2)]);
var inst_27695 = cljs.core.async.close_BANG_.call(null,out);
var state_27697__$1 = (function (){var statearr_27706 = state_27697;
(statearr_27706[(9)] = inst_27694);

return statearr_27706;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27697__$1,inst_27695);
} else {
if((state_val_27698 === (2))){
var state_27697__$1 = state_27697;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27697__$1,(4),ch);
} else {
if((state_val_27698 === (11))){
var inst_27677 = (state_27697[(8)]);
var inst_27686 = (state_27697[(2)]);
var inst_27674 = inst_27677;
var state_27697__$1 = (function (){var statearr_27707 = state_27697;
(statearr_27707[(7)] = inst_27674);

(statearr_27707[(10)] = inst_27686);

return statearr_27707;
})();
var statearr_27708_27732 = state_27697__$1;
(statearr_27708_27732[(2)] = null);

(statearr_27708_27732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (9))){
var inst_27677 = (state_27697[(8)]);
var state_27697__$1 = state_27697;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27697__$1,(11),out,inst_27677);
} else {
if((state_val_27698 === (5))){
var inst_27677 = (state_27697[(8)]);
var inst_27674 = (state_27697[(7)]);
var inst_27681 = cljs.core._EQ_.call(null,inst_27677,inst_27674);
var state_27697__$1 = state_27697;
if(inst_27681){
var statearr_27710_27733 = state_27697__$1;
(statearr_27710_27733[(1)] = (8));

} else {
var statearr_27711_27734 = state_27697__$1;
(statearr_27711_27734[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (10))){
var inst_27689 = (state_27697[(2)]);
var state_27697__$1 = state_27697;
var statearr_27712_27735 = state_27697__$1;
(statearr_27712_27735[(2)] = inst_27689);

(statearr_27712_27735[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27698 === (8))){
var inst_27674 = (state_27697[(7)]);
var tmp27709 = inst_27674;
var inst_27674__$1 = tmp27709;
var state_27697__$1 = (function (){var statearr_27713 = state_27697;
(statearr_27713[(7)] = inst_27674__$1);

return statearr_27713;
})();
var statearr_27714_27736 = state_27697__$1;
(statearr_27714_27736[(2)] = null);

(statearr_27714_27736[(1)] = (2));


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
});})(c__19757__auto___27726,out))
;
return ((function (switch__19692__auto__,c__19757__auto___27726,out){
return (function() {
var cljs$core$async$state_machine__19693__auto__ = null;
var cljs$core$async$state_machine__19693__auto____0 = (function (){
var statearr_27718 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27718[(0)] = cljs$core$async$state_machine__19693__auto__);

(statearr_27718[(1)] = (1));

return statearr_27718;
});
var cljs$core$async$state_machine__19693__auto____1 = (function (state_27697){
while(true){
var ret_value__19694__auto__ = (function (){try{while(true){
var result__19695__auto__ = switch__19692__auto__.call(null,state_27697);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19695__auto__;
}
break;
}
}catch (e27719){if((e27719 instanceof Object)){
var ex__19696__auto__ = e27719;
var statearr_27720_27737 = state_27697;
(statearr_27720_27737[(5)] = ex__19696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27697);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27719;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27738 = state_27697;
state_27697 = G__27738;
continue;
} else {
return ret_value__19694__auto__;
}
break;
}
});
cljs$core$async$state_machine__19693__auto__ = function(state_27697){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19693__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19693__auto____1.call(this,state_27697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19693__auto____0;
cljs$core$async$state_machine__19693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19693__auto____1;
return cljs$core$async$state_machine__19693__auto__;
})()
;})(switch__19692__auto__,c__19757__auto___27726,out))
})();
var state__19759__auto__ = (function (){var statearr_27721 = f__19758__auto__.call(null);
(statearr_27721[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19757__auto___27726);

return statearr_27721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19759__auto__);
});})(c__19757__auto___27726,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args27739 = [];
var len__17390__auto___27809 = arguments.length;
var i__17391__auto___27810 = (0);
while(true){
if((i__17391__auto___27810 < len__17390__auto___27809)){
args27739.push((arguments[i__17391__auto___27810]));

var G__27811 = (i__17391__auto___27810 + (1));
i__17391__auto___27810 = G__27811;
continue;
} else {
}
break;
}

var G__27741 = args27739.length;
switch (G__27741) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27739.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19757__auto___27813 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19757__auto___27813,out){
return (function (){
var f__19758__auto__ = (function (){var switch__19692__auto__ = ((function (c__19757__auto___27813,out){
return (function (state_27779){
var state_val_27780 = (state_27779[(1)]);
if((state_val_27780 === (7))){
var inst_27775 = (state_27779[(2)]);
var state_27779__$1 = state_27779;
var statearr_27781_27814 = state_27779__$1;
(statearr_27781_27814[(2)] = inst_27775);

(statearr_27781_27814[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27780 === (1))){
var inst_27742 = (new Array(n));
var inst_27743 = inst_27742;
var inst_27744 = (0);
var state_27779__$1 = (function (){var statearr_27782 = state_27779;
(statearr_27782[(7)] = inst_27744);

(statearr_27782[(8)] = inst_27743);

return statearr_27782;
})();
var statearr_27783_27815 = state_27779__$1;
(statearr_27783_27815[(2)] = null);

(statearr_27783_27815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27780 === (4))){
var inst_27747 = (state_27779[(9)]);
var inst_27747__$1 = (state_27779[(2)]);
var inst_27748 = (inst_27747__$1 == null);
var inst_27749 = cljs.core.not.call(null,inst_27748);
var state_27779__$1 = (function (){var statearr_27784 = state_27779;
(statearr_27784[(9)] = inst_27747__$1);

return statearr_27784;
})();
if(inst_27749){
var statearr_27785_27816 = state_27779__$1;
(statearr_27785_27816[(1)] = (5));

} else {
var statearr_27786_27817 = state_27779__$1;
(statearr_27786_27817[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27780 === (15))){
var inst_27769 = (state_27779[(2)]);
var state_27779__$1 = state_27779;
var statearr_27787_27818 = state_27779__$1;
(statearr_27787_27818[(2)] = inst_27769);

(statearr_27787_27818[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27780 === (13))){
var state_27779__$1 = state_27779;
var statearr_27788_27819 = state_27779__$1;
(statearr_27788_27819[(2)] = null);

(statearr_27788_27819[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27780 === (6))){
var inst_27744 = (state_27779[(7)]);
var inst_27765 = (inst_27744 > (0));
var state_27779__$1 = state_27779;
if(cljs.core.truth_(inst_27765)){
var statearr_27789_27820 = state_27779__$1;
(statearr_27789_27820[(1)] = (12));

} else {
var statearr_27790_27821 = state_27779__$1;
(statearr_27790_27821[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27780 === (3))){
var inst_27777 = (state_27779[(2)]);
var state_27779__$1 = state_27779;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27779__$1,inst_27777);
} else {
if((state_val_27780 === (12))){
var inst_27743 = (state_27779[(8)]);
var inst_27767 = cljs.core.vec.call(null,inst_27743);
var state_27779__$1 = state_27779;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27779__$1,(15),out,inst_27767);
} else {
if((state_val_27780 === (2))){
var state_27779__$1 = state_27779;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27779__$1,(4),ch);
} else {
if((state_val_27780 === (11))){
var inst_27759 = (state_27779[(2)]);
var inst_27760 = (new Array(n));
var inst_27743 = inst_27760;
var inst_27744 = (0);
var state_27779__$1 = (function (){var statearr_27791 = state_27779;
(statearr_27791[(10)] = inst_27759);

(statearr_27791[(7)] = inst_27744);

(statearr_27791[(8)] = inst_27743);

return statearr_27791;
})();
var statearr_27792_27822 = state_27779__$1;
(statearr_27792_27822[(2)] = null);

(statearr_27792_27822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27780 === (9))){
var inst_27743 = (state_27779[(8)]);
var inst_27757 = cljs.core.vec.call(null,inst_27743);
var state_27779__$1 = state_27779;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27779__$1,(11),out,inst_27757);
} else {
if((state_val_27780 === (5))){
var inst_27744 = (state_27779[(7)]);
var inst_27743 = (state_27779[(8)]);
var inst_27747 = (state_27779[(9)]);
var inst_27752 = (state_27779[(11)]);
var inst_27751 = (inst_27743[inst_27744] = inst_27747);
var inst_27752__$1 = (inst_27744 + (1));
var inst_27753 = (inst_27752__$1 < n);
var state_27779__$1 = (function (){var statearr_27793 = state_27779;
(statearr_27793[(12)] = inst_27751);

(statearr_27793[(11)] = inst_27752__$1);

return statearr_27793;
})();
if(cljs.core.truth_(inst_27753)){
var statearr_27794_27823 = state_27779__$1;
(statearr_27794_27823[(1)] = (8));

} else {
var statearr_27795_27824 = state_27779__$1;
(statearr_27795_27824[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27780 === (14))){
var inst_27772 = (state_27779[(2)]);
var inst_27773 = cljs.core.async.close_BANG_.call(null,out);
var state_27779__$1 = (function (){var statearr_27797 = state_27779;
(statearr_27797[(13)] = inst_27772);

return statearr_27797;
})();
var statearr_27798_27825 = state_27779__$1;
(statearr_27798_27825[(2)] = inst_27773);

(statearr_27798_27825[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27780 === (10))){
var inst_27763 = (state_27779[(2)]);
var state_27779__$1 = state_27779;
var statearr_27799_27826 = state_27779__$1;
(statearr_27799_27826[(2)] = inst_27763);

(statearr_27799_27826[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27780 === (8))){
var inst_27743 = (state_27779[(8)]);
var inst_27752 = (state_27779[(11)]);
var tmp27796 = inst_27743;
var inst_27743__$1 = tmp27796;
var inst_27744 = inst_27752;
var state_27779__$1 = (function (){var statearr_27800 = state_27779;
(statearr_27800[(7)] = inst_27744);

(statearr_27800[(8)] = inst_27743__$1);

return statearr_27800;
})();
var statearr_27801_27827 = state_27779__$1;
(statearr_27801_27827[(2)] = null);

(statearr_27801_27827[(1)] = (2));


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
});})(c__19757__auto___27813,out))
;
return ((function (switch__19692__auto__,c__19757__auto___27813,out){
return (function() {
var cljs$core$async$state_machine__19693__auto__ = null;
var cljs$core$async$state_machine__19693__auto____0 = (function (){
var statearr_27805 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27805[(0)] = cljs$core$async$state_machine__19693__auto__);

(statearr_27805[(1)] = (1));

return statearr_27805;
});
var cljs$core$async$state_machine__19693__auto____1 = (function (state_27779){
while(true){
var ret_value__19694__auto__ = (function (){try{while(true){
var result__19695__auto__ = switch__19692__auto__.call(null,state_27779);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19695__auto__;
}
break;
}
}catch (e27806){if((e27806 instanceof Object)){
var ex__19696__auto__ = e27806;
var statearr_27807_27828 = state_27779;
(statearr_27807_27828[(5)] = ex__19696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27779);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27806;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27829 = state_27779;
state_27779 = G__27829;
continue;
} else {
return ret_value__19694__auto__;
}
break;
}
});
cljs$core$async$state_machine__19693__auto__ = function(state_27779){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19693__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19693__auto____1.call(this,state_27779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19693__auto____0;
cljs$core$async$state_machine__19693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19693__auto____1;
return cljs$core$async$state_machine__19693__auto__;
})()
;})(switch__19692__auto__,c__19757__auto___27813,out))
})();
var state__19759__auto__ = (function (){var statearr_27808 = f__19758__auto__.call(null);
(statearr_27808[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19757__auto___27813);

return statearr_27808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19759__auto__);
});})(c__19757__auto___27813,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args27830 = [];
var len__17390__auto___27904 = arguments.length;
var i__17391__auto___27905 = (0);
while(true){
if((i__17391__auto___27905 < len__17390__auto___27904)){
args27830.push((arguments[i__17391__auto___27905]));

var G__27906 = (i__17391__auto___27905 + (1));
i__17391__auto___27905 = G__27906;
continue;
} else {
}
break;
}

var G__27832 = args27830.length;
switch (G__27832) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27830.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19757__auto___27908 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19757__auto___27908,out){
return (function (){
var f__19758__auto__ = (function (){var switch__19692__auto__ = ((function (c__19757__auto___27908,out){
return (function (state_27874){
var state_val_27875 = (state_27874[(1)]);
if((state_val_27875 === (7))){
var inst_27870 = (state_27874[(2)]);
var state_27874__$1 = state_27874;
var statearr_27876_27909 = state_27874__$1;
(statearr_27876_27909[(2)] = inst_27870);

(statearr_27876_27909[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27875 === (1))){
var inst_27833 = [];
var inst_27834 = inst_27833;
var inst_27835 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27874__$1 = (function (){var statearr_27877 = state_27874;
(statearr_27877[(7)] = inst_27834);

(statearr_27877[(8)] = inst_27835);

return statearr_27877;
})();
var statearr_27878_27910 = state_27874__$1;
(statearr_27878_27910[(2)] = null);

(statearr_27878_27910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27875 === (4))){
var inst_27838 = (state_27874[(9)]);
var inst_27838__$1 = (state_27874[(2)]);
var inst_27839 = (inst_27838__$1 == null);
var inst_27840 = cljs.core.not.call(null,inst_27839);
var state_27874__$1 = (function (){var statearr_27879 = state_27874;
(statearr_27879[(9)] = inst_27838__$1);

return statearr_27879;
})();
if(inst_27840){
var statearr_27880_27911 = state_27874__$1;
(statearr_27880_27911[(1)] = (5));

} else {
var statearr_27881_27912 = state_27874__$1;
(statearr_27881_27912[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27875 === (15))){
var inst_27864 = (state_27874[(2)]);
var state_27874__$1 = state_27874;
var statearr_27882_27913 = state_27874__$1;
(statearr_27882_27913[(2)] = inst_27864);

(statearr_27882_27913[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27875 === (13))){
var state_27874__$1 = state_27874;
var statearr_27883_27914 = state_27874__$1;
(statearr_27883_27914[(2)] = null);

(statearr_27883_27914[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27875 === (6))){
var inst_27834 = (state_27874[(7)]);
var inst_27859 = inst_27834.length;
var inst_27860 = (inst_27859 > (0));
var state_27874__$1 = state_27874;
if(cljs.core.truth_(inst_27860)){
var statearr_27884_27915 = state_27874__$1;
(statearr_27884_27915[(1)] = (12));

} else {
var statearr_27885_27916 = state_27874__$1;
(statearr_27885_27916[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27875 === (3))){
var inst_27872 = (state_27874[(2)]);
var state_27874__$1 = state_27874;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27874__$1,inst_27872);
} else {
if((state_val_27875 === (12))){
var inst_27834 = (state_27874[(7)]);
var inst_27862 = cljs.core.vec.call(null,inst_27834);
var state_27874__$1 = state_27874;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27874__$1,(15),out,inst_27862);
} else {
if((state_val_27875 === (2))){
var state_27874__$1 = state_27874;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27874__$1,(4),ch);
} else {
if((state_val_27875 === (11))){
var inst_27838 = (state_27874[(9)]);
var inst_27842 = (state_27874[(10)]);
var inst_27852 = (state_27874[(2)]);
var inst_27853 = [];
var inst_27854 = inst_27853.push(inst_27838);
var inst_27834 = inst_27853;
var inst_27835 = inst_27842;
var state_27874__$1 = (function (){var statearr_27886 = state_27874;
(statearr_27886[(7)] = inst_27834);

(statearr_27886[(11)] = inst_27852);

(statearr_27886[(12)] = inst_27854);

(statearr_27886[(8)] = inst_27835);

return statearr_27886;
})();
var statearr_27887_27917 = state_27874__$1;
(statearr_27887_27917[(2)] = null);

(statearr_27887_27917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27875 === (9))){
var inst_27834 = (state_27874[(7)]);
var inst_27850 = cljs.core.vec.call(null,inst_27834);
var state_27874__$1 = state_27874;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27874__$1,(11),out,inst_27850);
} else {
if((state_val_27875 === (5))){
var inst_27838 = (state_27874[(9)]);
var inst_27842 = (state_27874[(10)]);
var inst_27835 = (state_27874[(8)]);
var inst_27842__$1 = f.call(null,inst_27838);
var inst_27843 = cljs.core._EQ_.call(null,inst_27842__$1,inst_27835);
var inst_27844 = cljs.core.keyword_identical_QMARK_.call(null,inst_27835,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_27845 = (inst_27843) || (inst_27844);
var state_27874__$1 = (function (){var statearr_27888 = state_27874;
(statearr_27888[(10)] = inst_27842__$1);

return statearr_27888;
})();
if(cljs.core.truth_(inst_27845)){
var statearr_27889_27918 = state_27874__$1;
(statearr_27889_27918[(1)] = (8));

} else {
var statearr_27890_27919 = state_27874__$1;
(statearr_27890_27919[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27875 === (14))){
var inst_27867 = (state_27874[(2)]);
var inst_27868 = cljs.core.async.close_BANG_.call(null,out);
var state_27874__$1 = (function (){var statearr_27892 = state_27874;
(statearr_27892[(13)] = inst_27867);

return statearr_27892;
})();
var statearr_27893_27920 = state_27874__$1;
(statearr_27893_27920[(2)] = inst_27868);

(statearr_27893_27920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27875 === (10))){
var inst_27857 = (state_27874[(2)]);
var state_27874__$1 = state_27874;
var statearr_27894_27921 = state_27874__$1;
(statearr_27894_27921[(2)] = inst_27857);

(statearr_27894_27921[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27875 === (8))){
var inst_27838 = (state_27874[(9)]);
var inst_27834 = (state_27874[(7)]);
var inst_27842 = (state_27874[(10)]);
var inst_27847 = inst_27834.push(inst_27838);
var tmp27891 = inst_27834;
var inst_27834__$1 = tmp27891;
var inst_27835 = inst_27842;
var state_27874__$1 = (function (){var statearr_27895 = state_27874;
(statearr_27895[(14)] = inst_27847);

(statearr_27895[(7)] = inst_27834__$1);

(statearr_27895[(8)] = inst_27835);

return statearr_27895;
})();
var statearr_27896_27922 = state_27874__$1;
(statearr_27896_27922[(2)] = null);

(statearr_27896_27922[(1)] = (2));


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
});})(c__19757__auto___27908,out))
;
return ((function (switch__19692__auto__,c__19757__auto___27908,out){
return (function() {
var cljs$core$async$state_machine__19693__auto__ = null;
var cljs$core$async$state_machine__19693__auto____0 = (function (){
var statearr_27900 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27900[(0)] = cljs$core$async$state_machine__19693__auto__);

(statearr_27900[(1)] = (1));

return statearr_27900;
});
var cljs$core$async$state_machine__19693__auto____1 = (function (state_27874){
while(true){
var ret_value__19694__auto__ = (function (){try{while(true){
var result__19695__auto__ = switch__19692__auto__.call(null,state_27874);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19695__auto__;
}
break;
}
}catch (e27901){if((e27901 instanceof Object)){
var ex__19696__auto__ = e27901;
var statearr_27902_27923 = state_27874;
(statearr_27902_27923[(5)] = ex__19696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27874);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27901;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27924 = state_27874;
state_27874 = G__27924;
continue;
} else {
return ret_value__19694__auto__;
}
break;
}
});
cljs$core$async$state_machine__19693__auto__ = function(state_27874){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19693__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19693__auto____1.call(this,state_27874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19693__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19693__auto____0;
cljs$core$async$state_machine__19693__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19693__auto____1;
return cljs$core$async$state_machine__19693__auto__;
})()
;})(switch__19692__auto__,c__19757__auto___27908,out))
})();
var state__19759__auto__ = (function (){var statearr_27903 = f__19758__auto__.call(null);
(statearr_27903[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19757__auto___27908);

return statearr_27903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19759__auto__);
});})(c__19757__auto___27908,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1445124184240