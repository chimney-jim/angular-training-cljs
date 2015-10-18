// Compiled by ClojureScript 1.7.145 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.cljs_logo_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__17397__auto__ = [];
var len__17390__auto___28816 = arguments.length;
var i__17391__auto___28817 = (0);
while(true){
if((i__17391__auto___28817 < len__17390__auto___28816)){
args__17397__auto__.push((arguments[i__17391__auto___28817]));

var G__28818 = (i__17391__auto___28817 + (1));
i__17391__auto___28817 = G__28818;
continue;
} else {
}
break;
}

var argseq__17398__auto__ = ((((2) < args__17397__auto__.length))?(new cljs.core.IndexedSeq(args__17397__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17398__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__28808_28819 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__28809_28820 = null;
var count__28810_28821 = (0);
var i__28811_28822 = (0);
while(true){
if((i__28811_28822 < count__28810_28821)){
var k_28823 = cljs.core._nth.call(null,chunk__28809_28820,i__28811_28822);
e.setAttribute(cljs.core.name.call(null,k_28823),cljs.core.get.call(null,attrs,k_28823));

var G__28824 = seq__28808_28819;
var G__28825 = chunk__28809_28820;
var G__28826 = count__28810_28821;
var G__28827 = (i__28811_28822 + (1));
seq__28808_28819 = G__28824;
chunk__28809_28820 = G__28825;
count__28810_28821 = G__28826;
i__28811_28822 = G__28827;
continue;
} else {
var temp__4425__auto___28828 = cljs.core.seq.call(null,seq__28808_28819);
if(temp__4425__auto___28828){
var seq__28808_28829__$1 = temp__4425__auto___28828;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28808_28829__$1)){
var c__17135__auto___28830 = cljs.core.chunk_first.call(null,seq__28808_28829__$1);
var G__28831 = cljs.core.chunk_rest.call(null,seq__28808_28829__$1);
var G__28832 = c__17135__auto___28830;
var G__28833 = cljs.core.count.call(null,c__17135__auto___28830);
var G__28834 = (0);
seq__28808_28819 = G__28831;
chunk__28809_28820 = G__28832;
count__28810_28821 = G__28833;
i__28811_28822 = G__28834;
continue;
} else {
var k_28835 = cljs.core.first.call(null,seq__28808_28829__$1);
e.setAttribute(cljs.core.name.call(null,k_28835),cljs.core.get.call(null,attrs,k_28835));

var G__28836 = cljs.core.next.call(null,seq__28808_28829__$1);
var G__28837 = null;
var G__28838 = (0);
var G__28839 = (0);
seq__28808_28819 = G__28836;
chunk__28809_28820 = G__28837;
count__28810_28821 = G__28838;
i__28811_28822 = G__28839;
continue;
}
} else {
}
}
break;
}

var seq__28812_28840 = cljs.core.seq.call(null,children);
var chunk__28813_28841 = null;
var count__28814_28842 = (0);
var i__28815_28843 = (0);
while(true){
if((i__28815_28843 < count__28814_28842)){
var ch_28844 = cljs.core._nth.call(null,chunk__28813_28841,i__28815_28843);
e.appendChild(ch_28844);

var G__28845 = seq__28812_28840;
var G__28846 = chunk__28813_28841;
var G__28847 = count__28814_28842;
var G__28848 = (i__28815_28843 + (1));
seq__28812_28840 = G__28845;
chunk__28813_28841 = G__28846;
count__28814_28842 = G__28847;
i__28815_28843 = G__28848;
continue;
} else {
var temp__4425__auto___28849 = cljs.core.seq.call(null,seq__28812_28840);
if(temp__4425__auto___28849){
var seq__28812_28850__$1 = temp__4425__auto___28849;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28812_28850__$1)){
var c__17135__auto___28851 = cljs.core.chunk_first.call(null,seq__28812_28850__$1);
var G__28852 = cljs.core.chunk_rest.call(null,seq__28812_28850__$1);
var G__28853 = c__17135__auto___28851;
var G__28854 = cljs.core.count.call(null,c__17135__auto___28851);
var G__28855 = (0);
seq__28812_28840 = G__28852;
chunk__28813_28841 = G__28853;
count__28814_28842 = G__28854;
i__28815_28843 = G__28855;
continue;
} else {
var ch_28856 = cljs.core.first.call(null,seq__28812_28850__$1);
e.appendChild(ch_28856);

var G__28857 = cljs.core.next.call(null,seq__28812_28850__$1);
var G__28858 = null;
var G__28859 = (0);
var G__28860 = (0);
seq__28812_28840 = G__28857;
chunk__28813_28841 = G__28858;
count__28814_28842 = G__28859;
i__28815_28843 = G__28860;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq28805){
var G__28806 = cljs.core.first.call(null,seq28805);
var seq28805__$1 = cljs.core.next.call(null,seq28805);
var G__28807 = cljs.core.first.call(null,seq28805__$1);
var seq28805__$2 = cljs.core.next.call(null,seq28805__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__28806,G__28807,seq28805__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17245__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17246__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17247__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17248__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17249__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17245__auto__,prefer_table__17246__auto__,method_cache__17247__auto__,cached_hierarchy__17248__auto__,hierarchy__17249__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17245__auto__,prefer_table__17246__auto__,method_cache__17247__auto__,cached_hierarchy__17248__auto__,hierarchy__17249__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17249__auto__,method_table__17245__auto__,prefer_table__17246__auto__,method_cache__17247__auto__,cached_hierarchy__17248__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_28861 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_28861.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_28861.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_28861.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_28861);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__28862,st_map){
var map__28867 = p__28862;
var map__28867__$1 = ((((!((map__28867 == null)))?((((map__28867.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28867.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28867):map__28867);
var container_el = cljs.core.get.call(null,map__28867__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__28867,map__28867__$1,container_el){
return (function (p__28869){
var vec__28870 = p__28869;
var k = cljs.core.nth.call(null,vec__28870,(0),null);
var v = cljs.core.nth.call(null,vec__28870,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__28867,map__28867__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__28871,dom_str){
var map__28874 = p__28871;
var map__28874__$1 = ((((!((map__28874 == null)))?((((map__28874.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28874.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28874):map__28874);
var c = map__28874__$1;
var content_area_el = cljs.core.get.call(null,map__28874__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__28876){
var map__28879 = p__28876;
var map__28879__$1 = ((((!((map__28879 == null)))?((((map__28879.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28879.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28879):map__28879);
var content_area_el = cljs.core.get.call(null,map__28879__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__19757__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19757__auto__){
return (function (){
var f__19758__auto__ = (function (){var switch__19692__auto__ = ((function (c__19757__auto__){
return (function (state_28922){
var state_val_28923 = (state_28922[(1)]);
if((state_val_28923 === (1))){
var inst_28907 = (state_28922[(7)]);
var inst_28907__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_28908 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_28909 = ["10px","10px","100%","68px","1.0"];
var inst_28910 = cljs.core.PersistentHashMap.fromArrays(inst_28908,inst_28909);
var inst_28911 = cljs.core.merge.call(null,inst_28910,style);
var inst_28912 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28907__$1,inst_28911);
var inst_28913 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_28907__$1,msg);
var inst_28914 = cljs.core.async.timeout.call(null,(300));
var state_28922__$1 = (function (){var statearr_28924 = state_28922;
(statearr_28924[(8)] = inst_28913);

(statearr_28924[(9)] = inst_28912);

(statearr_28924[(7)] = inst_28907__$1);

return statearr_28924;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28922__$1,(2),inst_28914);
} else {
if((state_val_28923 === (2))){
var inst_28907 = (state_28922[(7)]);
var inst_28916 = (state_28922[(2)]);
var inst_28917 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_28918 = ["auto"];
var inst_28919 = cljs.core.PersistentHashMap.fromArrays(inst_28917,inst_28918);
var inst_28920 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28907,inst_28919);
var state_28922__$1 = (function (){var statearr_28925 = state_28922;
(statearr_28925[(10)] = inst_28916);

return statearr_28925;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28922__$1,inst_28920);
} else {
return null;
}
}
});})(c__19757__auto__))
;
return ((function (switch__19692__auto__,c__19757__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__19693__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__19693__auto____0 = (function (){
var statearr_28929 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28929[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__19693__auto__);

(statearr_28929[(1)] = (1));

return statearr_28929;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__19693__auto____1 = (function (state_28922){
while(true){
var ret_value__19694__auto__ = (function (){try{while(true){
var result__19695__auto__ = switch__19692__auto__.call(null,state_28922);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19695__auto__;
}
break;
}
}catch (e28930){if((e28930 instanceof Object)){
var ex__19696__auto__ = e28930;
var statearr_28931_28933 = state_28922;
(statearr_28931_28933[(5)] = ex__19696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28930;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28934 = state_28922;
state_28922 = G__28934;
continue;
} else {
return ret_value__19694__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__19693__auto__ = function(state_28922){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19693__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19693__auto____1.call(this,state_28922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__19693__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__19693__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__19693__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__19693__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__19693__auto__;
})()
;})(switch__19692__auto__,c__19757__auto__))
})();
var state__19759__auto__ = (function (){var statearr_28932 = f__19758__auto__.call(null);
(statearr_28932[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19757__auto__);

return statearr_28932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19759__auto__);
});})(c__19757__auto__))
);

return c__19757__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__28936 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__28936,(0),null);
var ln = cljs.core.nth.call(null,vec__28936,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__28939 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__28939,(0),null);
var file_line = cljs.core.nth.call(null,vec__28939,(1),null);
var file_column = cljs.core.nth.call(null,vec__28939,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__28939,file_name,file_line,file_column){
return (function (p1__28937_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__28937_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__28939,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16332__auto__ = file_line;
if(cljs.core.truth_(or__16332__auto__)){
return or__16332__auto__;
} else {
var and__16320__auto__ = cause;
if(cljs.core.truth_(and__16320__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16320__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__28942 = figwheel.client.heads_up.ensure_container.call(null);
var map__28942__$1 = ((((!((map__28942 == null)))?((((map__28942.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28942.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28942):map__28942);
var content_area_el = cljs.core.get.call(null,map__28942__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__19757__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19757__auto__){
return (function (){
var f__19758__auto__ = (function (){var switch__19692__auto__ = ((function (c__19757__auto__){
return (function (state_28990){
var state_val_28991 = (state_28990[(1)]);
if((state_val_28991 === (1))){
var inst_28973 = (state_28990[(7)]);
var inst_28973__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_28974 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_28975 = ["0.0"];
var inst_28976 = cljs.core.PersistentHashMap.fromArrays(inst_28974,inst_28975);
var inst_28977 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28973__$1,inst_28976);
var inst_28978 = cljs.core.async.timeout.call(null,(300));
var state_28990__$1 = (function (){var statearr_28992 = state_28990;
(statearr_28992[(7)] = inst_28973__$1);

(statearr_28992[(8)] = inst_28977);

return statearr_28992;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28990__$1,(2),inst_28978);
} else {
if((state_val_28991 === (2))){
var inst_28973 = (state_28990[(7)]);
var inst_28980 = (state_28990[(2)]);
var inst_28981 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_28982 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_28983 = cljs.core.PersistentHashMap.fromArrays(inst_28981,inst_28982);
var inst_28984 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28973,inst_28983);
var inst_28985 = cljs.core.async.timeout.call(null,(200));
var state_28990__$1 = (function (){var statearr_28993 = state_28990;
(statearr_28993[(9)] = inst_28980);

(statearr_28993[(10)] = inst_28984);

return statearr_28993;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28990__$1,(3),inst_28985);
} else {
if((state_val_28991 === (3))){
var inst_28973 = (state_28990[(7)]);
var inst_28987 = (state_28990[(2)]);
var inst_28988 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_28973,"");
var state_28990__$1 = (function (){var statearr_28994 = state_28990;
(statearr_28994[(11)] = inst_28987);

return statearr_28994;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28990__$1,inst_28988);
} else {
return null;
}
}
}
});})(c__19757__auto__))
;
return ((function (switch__19692__auto__,c__19757__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__19693__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__19693__auto____0 = (function (){
var statearr_28998 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28998[(0)] = figwheel$client$heads_up$clear_$_state_machine__19693__auto__);

(statearr_28998[(1)] = (1));

return statearr_28998;
});
var figwheel$client$heads_up$clear_$_state_machine__19693__auto____1 = (function (state_28990){
while(true){
var ret_value__19694__auto__ = (function (){try{while(true){
var result__19695__auto__ = switch__19692__auto__.call(null,state_28990);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19695__auto__;
}
break;
}
}catch (e28999){if((e28999 instanceof Object)){
var ex__19696__auto__ = e28999;
var statearr_29000_29002 = state_28990;
(statearr_29000_29002[(5)] = ex__19696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28999;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29003 = state_28990;
state_28990 = G__29003;
continue;
} else {
return ret_value__19694__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__19693__auto__ = function(state_28990){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__19693__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__19693__auto____1.call(this,state_28990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__19693__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__19693__auto____0;
figwheel$client$heads_up$clear_$_state_machine__19693__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__19693__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__19693__auto__;
})()
;})(switch__19692__auto__,c__19757__auto__))
})();
var state__19759__auto__ = (function (){var statearr_29001 = f__19758__auto__.call(null);
(statearr_29001[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19757__auto__);

return statearr_29001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19759__auto__);
});})(c__19757__auto__))
);

return c__19757__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__19757__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19757__auto__){
return (function (){
var f__19758__auto__ = (function (){var switch__19692__auto__ = ((function (c__19757__auto__){
return (function (state_29035){
var state_val_29036 = (state_29035[(1)]);
if((state_val_29036 === (1))){
var inst_29025 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_29035__$1 = state_29035;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29035__$1,(2),inst_29025);
} else {
if((state_val_29036 === (2))){
var inst_29027 = (state_29035[(2)]);
var inst_29028 = cljs.core.async.timeout.call(null,(400));
var state_29035__$1 = (function (){var statearr_29037 = state_29035;
(statearr_29037[(7)] = inst_29027);

return statearr_29037;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29035__$1,(3),inst_29028);
} else {
if((state_val_29036 === (3))){
var inst_29030 = (state_29035[(2)]);
var inst_29031 = figwheel.client.heads_up.clear.call(null);
var state_29035__$1 = (function (){var statearr_29038 = state_29035;
(statearr_29038[(8)] = inst_29030);

return statearr_29038;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29035__$1,(4),inst_29031);
} else {
if((state_val_29036 === (4))){
var inst_29033 = (state_29035[(2)]);
var state_29035__$1 = state_29035;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29035__$1,inst_29033);
} else {
return null;
}
}
}
}
});})(c__19757__auto__))
;
return ((function (switch__19692__auto__,c__19757__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__19693__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__19693__auto____0 = (function (){
var statearr_29042 = [null,null,null,null,null,null,null,null,null];
(statearr_29042[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__19693__auto__);

(statearr_29042[(1)] = (1));

return statearr_29042;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__19693__auto____1 = (function (state_29035){
while(true){
var ret_value__19694__auto__ = (function (){try{while(true){
var result__19695__auto__ = switch__19692__auto__.call(null,state_29035);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19695__auto__;
}
break;
}
}catch (e29043){if((e29043 instanceof Object)){
var ex__19696__auto__ = e29043;
var statearr_29044_29046 = state_29035;
(statearr_29044_29046[(5)] = ex__19696__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29035);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29043;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19694__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29047 = state_29035;
state_29035 = G__29047;
continue;
} else {
return ret_value__19694__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__19693__auto__ = function(state_29035){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19693__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19693__auto____1.call(this,state_29035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__19693__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__19693__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__19693__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__19693__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__19693__auto__;
})()
;})(switch__19692__auto__,c__19757__auto__))
})();
var state__19759__auto__ = (function (){var statearr_29045 = f__19758__auto__.call(null);
(statearr_29045[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19757__auto__);

return statearr_29045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19759__auto__);
});})(c__19757__auto__))
);

return c__19757__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1445124185245