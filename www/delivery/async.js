(function(c,b){var a="<?php echo $etag; ?>";b.reviveAsync=b.reviveAsync||{};if(!b.reviveAsync.hasOwnProperty(a)){var d=b.reviveAsync[a]={id:Object.keys(b.reviveAsync).length,start:function(){var e=function(){if(!d.done){c.removeEventListener("DOMContentLoaded",e,false);b.removeEventListener("load",e,false);d.done=true;d.apply(d.detect())}};if(c.readyState==="complete"){setTimeout(e)}else{c.addEventListener("DOMContentLoaded",e,false);b.addEventListener("load",e,false)}},ajax:function(e,f){var g=new XMLHttpRequest();g.onreadystatechange=function(){if(this.readyState==4){if(this.status==200){d.spc(JSON.parse(this.responseText))}}};g.open("GET",e+"?"+d.encode(f).join("&"),true);g.withCredentials=true;g.send()},encode:function(l,m){var e=[],g,h;for(g in l){if(l.hasOwnProperty(g)){var i=m?m+"["+g+"]":g;if((/string|number|boolean/).test(typeof l[g])){e.push(encodeURIComponent(i)+"="+encodeURIComponent(l[g]))}else{var f=d.encode(l[g],i);for(h in f){e.push(f[h])}}}}return e},apply:function(f){if(f.zones.length){var e=c.location.protocol=="http:"?"<?php echo MAX_commonConstructDeliveryUrl('asyncspc.php'); ?>":"<?php echo MAX_commonConstructSecureDeliveryUrl('asyncspc.php'); ?>";f.zones=f.zones.join("|");f.loc=c.location.href;if(c.referrer){f.referer=c.referrer}d.ajax(e,f)}},detect:function(){var g={"block-campaign":"blockcampaign","block-banner":"block"};var k=c.querySelectorAll("ins[data-revive-id='"+a+"']");var j={zones:[],prefix:"revive-"+d.id+"-"};for(var e=0;e<k.length;e++){var h=k[e];if(h.hasAttribute("data-revive-zone-id")){j.zones[e]=h.getAttribute("data-revive-zone-id");h.id=j.prefix+e;for(var f in g){if(g.hasOwnProperty(f)){if(h.hasAttribute("data-revive-"+f)&&!j[f]){j[g[f]]=h.getAttribute("data-revive-"+f)}}}}}return j},createFrame:function(g){var e=c.createElement("IFRAME"),f=e.style;e.scrolling="no";e.frameBorder=0;e.width=g.width>0?g.width:0;e.height=g.height>0?g.height:0;f.border=0;f.overflow="hidden";return e},loadFrame:function(f,e){var g=f.contentDocument||f.contentWindow.document;g.open();g.writeln("<!DOCTYPE html>");g.writeln("<html>");g.writeln('<head><base target="_top"></head>');g.writeln('<body border="0" margin="0" style="margin: 0; padding: 0">');g.writeln(e);g.writeln("</body>");g.writeln("</html>");g.close()},spc:function(g){for(var j in g){if(g.hasOwnProperty(j)){var h=g[j];var e=c.getElementById(j);if(e){var f=d.createFrame(h);e.appendChild(f);d.loadFrame(f,h.html)}}}}};d.start()}})(document,window);