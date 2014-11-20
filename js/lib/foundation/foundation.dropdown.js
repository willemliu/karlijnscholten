!function(t,e){Foundation.libs.dropdown={name:"dropdown",version:"{{VERSION}}",settings:{active_class:"open",disabled_class:"disabled",mega_class:"mega",align:"bottom",is_hover:!1,opened:function(){},closed:function(){}},init:function(t,e,a){Foundation.inherit(this,"throttle"),this.bindings(e,a)},events:function(){var a=this,i=a.S;i(this.scope).off(".dropdown").on("click.fndtn.dropdown","["+this.attr_name()+"]",function(e){var s=i(this).data(a.attr_name(!0)+"-init")||a.settings;(!s.is_hover||Modernizr.touch)&&(e.preventDefault(),a.toggle(t(this)))}).on("mouseenter.fndtn.dropdown","["+this.attr_name()+"], ["+this.attr_name()+"-content]",function(t){var e,s,n=i(this);clearTimeout(a.timeout),n.data(a.data_attr())?(e=i("#"+n.data(a.data_attr())),s=n):(e=n,s=i("["+a.attr_name()+"='"+e.attr("id")+"']"));var o=s.data(a.attr_name(!0)+"-init")||a.settings;i(t.target).data(a.data_attr())&&o.is_hover&&a.closeall.call(a),o.is_hover&&a.open.apply(a,[e,s])}).on("mouseleave.fndtn.dropdown","["+this.attr_name()+"], ["+this.attr_name()+"-content]",function(){var t=i(this);a.timeout=setTimeout(function(){if(t.data(a.data_attr())){var e=t.data(a.data_attr(!0)+"-init")||a.settings;e.is_hover&&a.close.call(a,i("#"+t.data(a.data_attr())))}else{var s=i("["+a.attr_name()+'="'+i(this).attr("id")+'"]'),e=s.data(a.attr_name(!0)+"-init")||a.settings;e.is_hover&&a.close.call(a,t)}}.bind(this),150)}).on("click.fndtn.dropdown",function(e){var s=i(e.target).closest("["+a.attr_name()+"-content]");if(!(i(e.target).closest("["+a.attr_name()+"]").length>0))return!i(e.target).data("revealId")&&s.length>0&&(i(e.target).is("["+a.attr_name()+"-content]")||t.contains(s.first()[0],e.target))?void e.stopPropagation():void a.close.call(a,i("["+a.attr_name()+"-content]"))}).on("opened.fndtn.dropdown","["+a.attr_name()+"-content]",function(){a.settings.opened.call(this)}).on("closed.fndtn.dropdown","["+a.attr_name()+"-content]",function(){a.settings.closed.call(this)}),i(e).off(".dropdown").on("resize.fndtn.dropdown",a.throttle(function(){a.resize.call(a)},50)),this.resize()},close:function(e){var a=this;e.each(function(){var i=t("["+a.attr_name()+"="+e[0].id+"]")||t("aria-controls="+e[0].id+"]");i.attr("aria-expanded","false"),a.S(this).hasClass(a.settings.active_class)&&(a.S(this).css(Foundation.rtl?"right":"left","-99999px").attr("aria-hidden","true").removeClass(a.settings.active_class).prev("["+a.attr_name()+"]").removeClass(a.settings.active_class).removeData("target"),a.S(this).trigger("closed").trigger("closed.fndtn.dropdown",[e]))})},closeall:function(){var e=this;t.each(e.S("["+this.attr_name()+"-content]"),function(){e.close.call(e,e.S(this))})},open:function(t,e){this.css(t.addClass(this.settings.active_class),e),t.prev("["+this.attr_name()+"]").addClass(this.settings.active_class),t.data("target",e.get(0)).trigger("opened").trigger("opened.fndtn.dropdown",[t,e]),t.attr("aria-hidden","false"),e.attr("aria-expanded","true"),t.focus()},data_attr:function(){return this.namespace.length>0?this.namespace+"-"+this.name:this.name},toggle:function(t){if(!t.hasClass(this.settings.disabled_class)){var e=this.S("#"+t.data(this.data_attr()));0!==e.length&&(this.close.call(this,this.S("["+this.attr_name()+"-content]").not(e)),e.hasClass(this.settings.active_class)?(this.close.call(this,e),e.data("target")!==t.get(0)&&this.open.call(this,e,t)):this.open.call(this,e,t))}},resize:function(){var t=this.S("["+this.attr_name()+"-content].open"),e=this.S("["+this.attr_name()+"='"+t.attr("id")+"']");t.length&&e.length&&this.css(t,e)},css:function(t,e){var a=Math.max((e.width()-t.width())/2,8),i=e.data(this.attr_name(!0)+"-init")||this.settings;if(this.clear_idx(),this.small()){var s=this.dirs.bottom.call(t,e,i);t.attr("style","").removeClass("drop-left drop-right drop-top").css({position:"absolute",width:"95%","max-width":"none",top:s.top}),t.css(Foundation.rtl?"right":"left",a)}else this.style(t,e,i);return t},style:function(e,a,i){var s=t.extend({position:"absolute"},this.dirs[i.align].call(e,a,i));e.attr("style","").css(s)},dirs:{_base:function(t){var e=this.offsetParent(),a=e.offset(),i=t.offset();return i.top-=a.top,i.left-=a.left,i},top:function(t,e){var a=Foundation.libs.dropdown,i=a.dirs._base.call(this,t);return this.addClass("drop-top"),(t.outerWidth()<this.outerWidth()||a.small()||this.hasClass(e.mega_menu))&&a.adjust_pip(this,t,e,i),Foundation.rtl?{left:i.left-this.outerWidth()+t.outerWidth(),top:i.top-this.outerHeight()}:{left:i.left,top:i.top-this.outerHeight()}},bottom:function(t,e){var a=Foundation.libs.dropdown,i=a.dirs._base.call(this,t);return(t.outerWidth()<this.outerWidth()||a.small()||this.hasClass(e.mega_menu))&&a.adjust_pip(this,t,e,i),a.rtl?{left:i.left-this.outerWidth()+t.outerWidth(),top:i.top+t.outerHeight()}:{left:i.left,top:i.top+t.outerHeight()}},left:function(t){var e=Foundation.libs.dropdown.dirs._base.call(this,t);return this.addClass("drop-left"),{left:e.left-this.outerWidth(),top:e.top}},right:function(t){var e=Foundation.libs.dropdown.dirs._base.call(this,t);return this.addClass("drop-right"),{left:e.left+t.outerWidth(),top:e.top}}},adjust_pip:function(t,e,a,i){var s=Foundation.stylesheet,n=8;t.hasClass(a.mega_class)?n=i.left+e.outerWidth()/2-8:this.small()&&(n+=i.left-8),this.rule_idx=s.cssRules.length;var o=".f-dropdown.open:before",r=".f-dropdown.open:after",d="left: "+n+"px;",l="left: "+(n-1)+"px;";s.insertRule?(s.insertRule([o,"{",d,"}"].join(" "),this.rule_idx),s.insertRule([r,"{",l,"}"].join(" "),this.rule_idx+1)):(s.addRule(o,d,this.rule_idx),s.addRule(r,l,this.rule_idx+1))},clear_idx:function(){var t=Foundation.stylesheet;"undefined"!=typeof this.rule_idx&&(t.deleteRule(this.rule_idx),t.deleteRule(this.rule_idx),delete this.rule_idx)},small:function(){return matchMedia(Foundation.media_queries.small).matches&&!matchMedia(Foundation.media_queries.medium).matches},off:function(){this.S(this.scope).off(".fndtn.dropdown"),this.S("html, body").off(".fndtn.dropdown"),this.S(e).off(".fndtn.dropdown"),this.S("[data-dropdown-content]").off(".fndtn.dropdown")},reflow:function(){}}}(jQuery,window,window.document);