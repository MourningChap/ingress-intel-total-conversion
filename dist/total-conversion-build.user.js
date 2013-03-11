// ==UserScript==
// @id             ingress-intel-total-conversion@breunigs
// @name           intel map total conversion
// @version        0.8-2013-03-11-080223
// @namespace      https://github.com/breunigs/ingress-intel-total-conversion
// @updateURL      https://iitcserv.appspot.com/dist/total-conversion-build.user.js
// @downloadURL    https://iitcserv.appspot.com/dist/total-conversion-build.user.js
// @description    total conversion for the ingress intel map.
// @include        http://www.ingress.com/intel*
// @include        https://www.ingress.com/intel*
// @match          http://www.ingress.com/intel*
// @match          https://www.ingress.com/intel*
// ==/UserScript==
// REPLACE ORIG SITE ///////////////////////////////////////////////////
function wrapper(){function boot(){window.debug.console.overwriteNativeIfRequired(),console.log("loading done, booting. Built: 2013-03-11-080223"),window.deviceID&&console.log("Your device ID: "+window.deviceID),window.runOnSmartphonesBeforeBoot();var e="https://iitcserv.appspot.com/dist/images";L.Icon.Default.imagePath=e,window.iconEnl=L.Icon.Default.extend({options:{iconUrl:e+"/marker-green.png"}}),window.iconRes=L.Icon.Default.extend({options:{iconUrl:e+"/marker-blue.png"}}),window.setupTaphold(),window.setupStyles(),window.setupDialogs(),window.setupMap(),window.setupGeosearch(),window.setupRedeem(),window.setupLargeImagePreview(),window.setupSidebarToggle(),window.updateGameScore(),window.setupPlayerStat(),window.setupTooltips(),window.chat.setup(),window.setupQRLoadLib(),window.setupLayerChooserSelectOne(),window.setupBackButton(),urlPortal=getURLParam("pguid");var t=window.PLAYER.nickname;window.PLAYER.nickMatcher=new RegExp("\b("+t+")\b","ig"),$("#sidebar").show(),window.bootPlugins&&$.each(window.bootPlugins,function(e,t){t()}),$("#scrollwrapper").css("max-height",$("#sidebar").get(0).scrollHeight+3+"px"),window.runOnSmartphonesAfterBoot(),setTimeout("window.map.invalidateSize(false);",500),window.iitcLoaded=!0}function asyncLoadScript(e){return function(t,n){var r=document.createElement("script");r.type="text/javascript",r.src=e,r.onload=t,r.onerror=n,r.onreadystatechange=function(){var e=this.readyState;if(e==="loaded"||e==="complete")r.onreadystatechange=null,t()},head.insertBefore(r,head.firstChild)}}L_PREFER_CANVAS=!1,window.REFRESH=30,window.ZOOM_LEVEL_ADJ=5,window.REFRESH_GAME_SCORE=300,window.MAX_IDLE_TIME=4,window.PRECACHE_PLAYER_NAMES_ZOOM=17,window.HIDDEN_SCROLLBAR_ASSUMED_WIDTH=20,window.SIDEBAR_WIDTH=300,window.CHAT_MIN_RANGE=6,window.VIEWPORT_PAD_RATIO=.3,window.CHAT_PUBLIC_ITEMS=200,window.CHAT_FACTION_ITEMS=50,window.CHAT_REQUEST_SCROLL_TOP=200,window.CHAT_SHRINKED=60,window.MAX_DRAWN_PORTALS=1e3,window.MAX_DRAWN_LINKS=400,window.MAX_DRAWN_FIELDS=200,window.RESONATOR_DISPLAY_ZOOM_LEVEL=17,window.FIELD_MU_DISPLAY_AREA_ZOOM_RATIO=.001,window.FIELD_MU_DISPLAY_POINT_TOLERANCE=60,window.COLOR_SELECTED_PORTAL="#f00",window.COLORS=["#FFCE00","#0088FF","#03DC03"],window.COLORS_LVL=["#000","#FECE5A","#FFA630","#FF7315","#E40000","#FD2992","#EB26CD","#C124E0","#9627F4"],window.COLORS_MOD={VERY_RARE:"#F78AF6",RARE:"#AD8AFF",COMMON:"#84FBBD"},window.OPTIONS_RESONATOR_SELECTED={color:"#fff",weight:2,radius:4},window.OPTIONS_RESONATOR_NON_SELECTED={color:"#aaa",weight:1,radius:3},window.OPTIONS_RESONATOR_LINE_SELECTED={opacity:.7,weight:3},window.OPTIONS_RESONATOR_LINE_NON_SELECTED={opacity:.25,weight:2},window.ACCESS_INDICATOR_COLOR="orange",window.RANGE_INDICATOR_COLOR="red",window.PORTAL_RADIUS_ENLARGE_MOBILE=5,window.DEFAULT_PORTAL_IMG="https://commondatastorage.googleapis.com/ingress/img/default-portal-image.png",window.NOMINATIM="http://nominatim.openstreetmap.org/search?format=json&limit=1&q=",window.RESO_NRG=[0,1e3,1500,2e3,2500,3e3,4e3,5e3,6e3],window.MAX_XM_PER_LEVEL=[0,3e3,4e3,5e3,6e3,7e3,8e3,9e3,1e4],window.MIN_AP_FOR_LEVEL=[0,1e4,3e4,7e4,15e4,3e5,6e5,12e5],window.HACK_RANGE=40,window.OCTANTS=["E","NE","N","NW","W","SW","S","SE"],window.DESTROY_RESONATOR=75,window.DESTROY_LINK=187,window.DESTROY_FIELD=750,window.CAPTURE_PORTAL=500,window.DEPLOY_RESONATOR=125,window.COMPLETION_BONUS=250,window.UPGRADE_ANOTHERS_RESONATOR=65,window.MAX_PORTAL_LEVEL=8,window.MAX_RESO_PER_PLAYER=[0,8,4,4,4,2,2,1,1],window.TEAM_NONE=0,window.TEAM_RES=1,window.TEAM_ENL=2,window.TEAM_TO_CSS=["none","res","enl"],window.TYPE_UNKNOWN=0,window.TYPE_PORTAL=1,window.TYPE_LINK=2,window.TYPE_FIELD=3,window.TYPE_PLAYER=4,window.TYPE_CHAT=5,window.TYPE_RESONATOR=6,window.SLOT_TO_LAT=[0,Math.sqrt(2)/2,1,Math.sqrt(2)/2,0,-Math.sqrt(2)/2,-1,-Math.sqrt(2)/2],window.SLOT_TO_LNG=[1,Math.sqrt(2)/2,0,-Math.sqrt(2)/2,-1,-Math.sqrt(2)/2,0,Math.sqrt(2)/2],window.EARTH_RADIUS=6378137,window.DEG2RAD=Math.PI/180;var refreshTimeout,urlPortal=null;window.playersToResolve=[],window.playersInResolving=[],window.selectedPortal=null,window.portalRangeIndicator=null,window.portalAccessIndicator=null,window.mapRunsUserAction=!1;var portalsLayers,linksLayer,fieldsLayer;window.portals={},window.links={},window.fields={},window.resonators={},typeof window.plugin!="function"&&(window.plugin=function(){}),window._hooks={},window.VALID_HOOKS=["portalAdded","portalDetailsUpdated","publicChatDataAvailable","portalDataLoaded","beforePortalReRender","checkRenderLimit","requestFinished"],window.runHooks=function(e,t){if(VALID_HOOKS.indexOf(e)===-1)throw"Unknown event type: "+e;if(!_hooks[e])return;$.each(_hooks[e],function(e,n){n(t)})},window.addHook=function(e,t){if(VALID_HOOKS.indexOf(e)===-1)throw"Unknown event type: "+e;if(typeof t!="function")throw"Callback must be a function.";_hooks[e]?_hooks[e].push(t):_hooks[e]=[t]},window.requestData=function(){console.log("refreshing data"),requests.abort(),cleanUp();var e=convertCenterLat(map.getCenter().lat),t=calculateR(e),n=map.getBounds();topRight=convertLatLngToPoint(n.getNorthEast(),e,t),bottomLeft=convertLatLngToPoint(n.getSouthWest(),e,t),quadsX=Math.abs(bottomLeft.x-topRight.x),quadsY=Math.abs(bottomLeft.y-topRight.y),tiles={};for(var r=0;r<=quadsX;r++){var i=Math.abs(topRight.x-r),s=pointToQuadKey(i,topRight.y),o=convertPointToLatLng(i,topRight.y,e,t);tiles[s.slice(0,-1)]||(tiles[s.slice(0,-1)]=[]),tiles[s.slice(0,-1)].push(generateBoundsParams(s,o));for(var u=1;u<=quadsY;u++){var s=pointToQuadKey(i,topRight.y+u),o=convertPointToLatLng(i,topRight.y+u,e,t);tiles[s.slice(0,-1)]||(tiles[s.slice(0,-1)]=[]),tiles[s.slice(0,-1)].push(generateBoundsParams(s,o))}}portalRenderLimit.init(),$.each(tiles,function(e,t){data={minLevelOfDetail:-1},data.boundsParamsList=t,window.requests.add(window.postAjax("getThinnedEntitiesV2",data,window.handleDataResponse,window.handleFailedRequest))})},window.handleFailedRequest=function(){if(requests.isLastRequest("getThinnedEntitiesV2")){var e=portalRenderLimit.mergeLowLevelPortals(null);handlePortalsRender(e)}runHooks("requestFinished",{success:!1})},window.handleDataResponse=function(e,t,n){if(!e||!e.result){window.failedRequestCount++,console.warn(e),handleFailedRequest();return}var r=e.result.map,i=[],s={};$.each(r,function(e,t){$.each(t.deletedGameEntityGuids||[],function(e,t){getTypeByGuid(t)===TYPE_FIELD&&window.fields[t]!==undefined&&$.each(window.fields[t].options.vertices,function(e,n){if(window.portals[n.guid]===undefined)return!0;fieldArray=window.portals[n.guid].options.details.portalV2.linkedFields,fieldArray.splice($.inArray(t,fieldArray),1)}),window.removeByGuid(t)}),$.each(t.gameEntities||[],function(e,t){if(t[2].turret!==undefined){var n=[t[2].locationE6.latE6/1e6,t[2].locationE6.lngE6/1e6];if(!window.getPaddedBounds().contains(n)&&selectedPortal!==t[0]&&urlPortal!==t[0])return;i.push(t)}else if(t[2].edge!==undefined)renderLink(t);else{if(t[2].capturedRegion===undefined)throw"Unknown entity: "+JSON.stringify(t);$.each(t[2].capturedRegion,function(e,n){s[n.guid]===undefined&&(s[n.guid]=new Array),s[n.guid].push(t[0])}),renderField(t)}})}),$.each(i,function(e,t){t[2].portalV2.linkedFields===undefined&&(t[2].portalV2.linkedFields=[]),s[t[0]]!==undefined&&($.merge(s[t[0]],t[2].portalV2.linkedFields),t[2].portalV2.linkedFields=uniqueArray(s[t[0]]))});var o=portalRenderLimit.splitOrMergeLowLevelPortals(i);handlePortalsRender(o),resolvePlayerNames(),renderUpdateStatus(),runHooks("requestFinished",{success:!0})},window.handlePortalsRender=function(e){var t=!1,n=selectedPortal;runHooks("portalDataLoaded",{portals:e}),$.each(e,function(e,n){urlPortal&&n[0]===urlPortal&&(t=!0),renderPortal(n)});var r=e[n];if(r){selectedPortal=n,renderPortalDetails(selectedPortal);try{r.bringToFront()}catch(i){}}t&&(renderPortalDetails(urlPortal),urlPortal=null)},window.cleanUp=function(){var e=[0,0,0],t=getPaddedBounds(),n=getMinPortalLevel();for(var r=0;r<portalsLayers.length;r++)portalsLayers[r].eachLayer(function(s){var o=s.options.guid;if(getTypeByGuid(o)!=TYPE_PORTAL)return!0;if(o==window.selectedPortal||t.contains(s.getLatLng())&&r>=n)return!0;e[0]++,portalsLayers[r].removeLayer(s)});linksLayer.eachLayer(function(n){if(t.intersects(n.getBounds()))return;e[1]++,linksLayer.removeLayer(n)}),fieldsLayer.eachLayer(function(n){n.eachLayer(function(r){if(!r.options.guid)return!0;if(t.intersects(r.getBounds()))return;e[2]++,fieldsLayer.removeLayer(n)})}),console.log("removed out-of-bounds: "+e[0]+" portals, "+e[1]+" links, "+e[2]+" fields")},window.removeByGuid=function(e){switch(getTypeByGuid(e)){case TYPE_PORTAL:if(!window.portals[e])return;var t=window.portals[e];for(var n=0;n<portalsLayers.length;n++)portalsLayers[n].removeLayer(t);break;case TYPE_LINK:if(!window.links[e])return;linksLayer.removeLayer(window.links[e]);break;case TYPE_FIELD:if(!window.fields[e])return;fieldsLayer.removeLayer(window.fields[e]);break;case TYPE_RESONATOR:if(!window.resonators[e])return;var r=window.resonators[e];for(var n=1;n<portalsLayers.length;n++)portalsLayers[n].removeLayer(r);break;default:console.warn("unknown GUID type: "+e)}},window.renderPortal=function(e){if(Object.keys(portals).length>=MAX_DRAWN_PORTALS&&e[0]!==selectedPortal)return removeByGuid(e[0]);var t=getPortalLevel(e[2]);if(t<getMinPortalLevel()&&e[0]!==selectedPortal)return removeByGuid(e[0]);var n=getTeam(e[2]),r=portalsLayers[parseInt(t)],i=findEntityInLeaflet(r,window.portals,e[0]);if(i){var s=i.options,o=s.team!==n;o=o||s.level!==t;var u={portal:e[2],oldPortal:s.details,reRender:!1};runHooks("beforePortalReRender",u),o=o||u.reRender;if(!o){renderResonators(e,i),i.options.details=e[2];return}}removeByGuid(e[0]);var a=[e[2].locationE6.latE6/1e6,e[2].locationE6.lngE6/1e6];loadPlayerNamesForPortal(e[2]);var f=Math.max(2,Math.floor(t)/1.5),l=Math.floor(t)+4;n===window.TEAM_NONE&&(l=7);var c=L.circleMarker(a,{radius:l+(L.Browser.mobile?PORTAL_RADIUS_ENLARGE_MOBILE:0),color:e[0]===selectedPortal?COLOR_SELECTED_PORTAL:COLORS[n],opacity:1,weight:f,fillColor:COLORS[n],fillOpacity:.5,clickable:!0,level:t,team:n,details:e[2],guid:e[0]});c.on("remove",function(){var e=this.options.guid;if(isResonatorsShow())for(var t=0;t<=7;t++)removeByGuid(portalResonatorGuid(e,t));delete window.portals[e],window.selectedPortal===e&&(window.unselectOldPortal(),window.map.removeLayer(window.portalAccessIndicator),window.portalAccessIndicator=null)}),c.on("add",function(){if(window.portals[this.options.guid])throw"duplicate portal detected";window.portals[this.options.guid]=this,window.selectedPortal!==this.options.guid&&window.portalResetColor(this)}),c.on("click",function(){window.renderPortalDetails(e[0])}),c.on("dblclick",function(){window.renderPortalDetails(e[0]),window.map.setView(a,17)}),window.renderResonators(e,null),window.runHooks("portalAdded",{portal:c}),c.addTo(r)},window.renderResonators=function(e,t){if(!isResonatorsShow())return;var n=getPortalLevel(e[2]);if(n<getMinPortalLevel()&&e[0]!==selectedPortal)return;var r=[e[2].locationE6.latE6/1e6,e[2].locationE6.lngE6/1e6],i=portalsLayers[parseInt(n)],s=!1;$.each(e[2].resonatorArray.resonators,function(o,u){if(t){var a=findEntityInLeaflet(i,window.resonators,portalResonatorGuid(e[0],o));if(a&&isSameResonator(a.options.details,u))return!0;if(a){if(isSameResonator(a.options.details,u))return!0;removeByGuid(a.options.guid)}}if(u===null)return!0;var f=u.distanceToPortal*SLOT_TO_LAT[u.slot],l=u.distanceToPortal*SLOT_TO_LNG[u.slot],c=f/EARTH_RADIUS,h=l/(EARTH_RADIUS*Math.cos(Math.PI/180*(e[2].locationE6.latE6/1e6))),p=e[2].locationE6.latE6/1e6+c*180/Math.PI,d=e[2].locationE6.lngE6/1e6+h*180/Math.PI,v=[p,d],m=portalResonatorGuid(e[0],o),g=e[0]===selectedPortal?OPTIONS_RESONATOR_SELECTED:OPTIONS_RESONATOR_NON_SELECTED,y=$.extend({opacity:1,fillColor:COLORS_LVL[u.level],fillOpacity:u.energyTotal/RESO_NRG[u.level],clickable:!1,guid:m},g),b=L.circleMarker(v,y),w=e[0]===selectedPortal?OPTIONS_RESONATOR_LINE_SELECTED:OPTIONS_RESONATOR_LINE_NON_SELECTED,E=$.extend({color:"#FFA000",dashArray:"0,10,8,4,8,4,8,4,8,4,8,4,8,4,8,4,8,4,8,4",fill:!1,clickable:!1},w),S=L.polyline([r,v],E),x=L.layerGroup([b,S]);x.options={level:u.level,details:u,pDetails:e[2],guid:m},b.on("remove",function(){delete window.resonators[this.options.guid]}),b.on("add",function(){window.resonators[this.options.guid]&&(console.error("dup reso: "+this.options.guid),window.debug.printStackTrace()),window.resonators[this.options.guid]=x}),x.addTo(portalsLayers[parseInt(n)]),s=!0}),s&&t&&t.bringToFront()},window.portalResonatorGuid=function(e,t){return e+"-resonator-"+t},window.isResonatorsShow=function(){return map.getZoom()>=RESONATOR_DISPLAY_ZOOM_LEVEL},window.isSameResonator=function(e,t){return!e&&!t?!0:!e||!t?!1:typeof e!=typeof t?!1:e.level!==t.level?!1:e.energyTotal!==t.energyTotal?!1:e.distanceToPortal!==t.distanceToPortal?!1:!0},window.portalResetColor=function(e){e.setStyle({color:COLORS[getTeam(e.options.details)]}),resonatorsResetStyle(e.options.guid)},window.resonatorsResetStyle=function(e){window.resonatorsSetStyle(e,OPTIONS_RESONATOR_NON_SELECTED,OPTIONS_RESONATOR_LINE_NON_SELECTED)},window.resonatorsSetSelectStyle=function(e){window.resonatorsSetStyle(e,OPTIONS_RESONATOR_SELECTED,OPTIONS_RESONATOR_LINE_SELECTED)},window.resonatorsSetStyle=function(e,t,n){for(var r=0;r<8;r++){resonatorLayerGroup=resonators[portalResonatorGuid(e,r)];if(!resonatorLayerGroup)continue;resonatorLayerGroup.eachLayer(function(e){e.options.guid||e.bringToFront().setStyle(n)}),resonatorLayerGroup.eachLayer(function(e){e.options.guid&&e.bringToFront().setStyle(t)})}portals[e].bringToFront()},window.renderLink=function(e){if(Object.keys(links).length>=MAX_DRAWN_LINKS)return removeByGuid(e[0]);if(findEntityInLeaflet(linksLayer,links,e[0]))return;var t=getTeam(e[2]),n=e[2].edge,r=[[n.originPortalLocation.latE6/1e6,n.originPortalLocation.lngE6/1e6],[n.destinationPortalLocation.latE6/1e6,n.destinationPortalLocation.lngE6/1e6]],i=L.polyline(r,{color:COLORS[t],opacity:1,weight:2,clickable:!1,guid:e[0],data:e[2],smoothFactor:0});i._map=window.map,i.projectLatlngs();var s=i._originalPoints,o=Math.abs(s[0].x-s[1].x)+Math.abs(s[0].y-s[1].y);if(o<=10)return;if(!getPaddedBounds().intersects(i.getBounds()))return;i.on("remove",function(){delete window.links[this.options.guid]}),i.on("add",function(){if(window.links[this.options.guid])throw"duplicate link detected";window.links[this.options.guid]=this,this.bringToBack()}),i.addTo(linksLayer)},window.renderField=function(e){if(Object.keys(fields).length>=MAX_DRAWN_FIELDS)return window.removeByGuid(e[0]);var t=findEntityInLeaflet(fieldsLayer,window.fields,e[0]);if(t&&map.getZoom()===t.options.creationZoom)return;var n=getTeam(e[2]),r=e[2].capturedRegion,i=[L.latLng(r.vertexA.location.latE6/1e6,r.vertexA.location.lngE6/1e6),L.latLng(r.vertexB.location.latE6/1e6,r.vertexB.location.lngE6/1e6),L.latLng(r.vertexC.location.latE6/1e6,r.vertexC.location.lngE6/1e6)],s=L.polygon(i,{fillColor:COLORS[n],fillOpacity:.25,stroke:!1,clickable:!1,smoothFactor:0,guid:e[0]});s._map=window.map,s.projectLatlngs();var o=L.LineUtil.simplify(s._originalPoints,6).length;if(o<=2)return;if(!getPaddedBounds().intersects(s.getBounds()))return;var u=calcTriArea(i)/Math.exp(14.2714860198866-1.384987247*map.getZoom()),a=L.LineUtil.simplify(s._originalPoints,FIELD_MU_DISPLAY_POINT_TOLERANCE).length;if(t){var f=0;t.eachLayer(function(e){f++});if(u>FIELD_MU_DISPLAY_AREA_ZOOM_RATIO&&a>2&&f===2)return;if(u<=FIELD_MU_DISPLAY_AREA_ZOOM_RATIO&&a<=2&&f===1)return;removeByGuid(e[0])}if(u>FIELD_MU_DISPLAY_AREA_ZOOM_RATIO&&a>2)var l=[(i[0].lat+i[1].lat+i[2].lat)/3,(i[0].lng+i[1].lng+i[2].lng)/3],c=L.marker(l,{icon:L.divIcon({className:"fieldmu",iconSize:[70,12],html:digits(e[2].entityScore.entityScore)}),clickable:!1}),h=L.layerGroup([s,c]);else var h=L.layerGroup([s]);h.options={vertices:r,lastUpdate:e[1],creationZoom:map.getZoom(),guid:e[0],data:e[2]},s.on("remove",function(){delete window.fields[this.options.guid]}),s.on("add",function(){window.fields[this.options.guid]&&console.warn("duplicate field detected"),window.fields[this.options.guid]=h,this.bringToBack()}),h.addTo(fieldsLayer)},window.findEntityInLeaflet=function(e,t,n){if(map.hasLayer(e))return t[n]||null;var r=null;return e.eachLayer(function(e){return e.options.guid!==n?!0:(r=e,!1)}),r},window.activeRequests=[],window.failedRequestCount=0,window.requests=function(){},window.requests.add=function(e){window.activeRequests.push(e),renderUpdateStatus()},window.requests.remove=function(e){window.activeRequests.splice(window.activeRequests.indexOf(e),1),renderUpdateStatus()},window.requests.abort=function(){$.each(window.activeRequests,function(e,t){t&&t.abort()}),window.activeRequests=[],window.failedRequestCount=0,window.chat._requestPublicRunning=!1,window.chat._requestFactionRunning=!1,renderUpdateStatus()},window.renderUpdateStatus=function(){var e="<b>map status:</b> ";mapRunsUserAction?e+="paused during interaction":isIdle()?e+='<span style="color:red">Idle, not updating.</span>':window.activeRequests.length>0?e+=window.activeRequests.length+" requests running.":e+="Up to date.",renderLimitReached()&&(e+=' <span style="color:red" class="help" title="Can only render so much before it gets unbearably slow. Not all entities are shown. Zoom in or increase the limit (search for MAX_DRAWN_*).">RENDER LIMIT</span> '),window.failedRequestCount>0&&(e+=' <span style="color:red">'+window.failedRequestCount+" failed</span>."),e+="<br/>(";var t=getMinPortalLevel();t===0?e+="loading all portals":e+="only loading portals with level "+t+" and up",e+=")";var n=$(".leaflet-control-layers-overlays label");n.slice(0,t+1).addClass("disabled").attr("title","Zoom in to show those."),n.slice(t,8).removeClass("disabled").attr("title",""),$("#updatestatus").html(e)},window.startRefreshTimeout=function(e){window.renderUpdateStatus(),refreshTimeout&&clearTimeout(refreshTimeout);var t=0;if(e)t=e;else{t=REFRESH*1e3;var n=ZOOM_LEVEL_ADJ*(18-window.map.getZoom());n>0&&(t+=n*1e3)}var r=(new Date((new Date).getTime()+t)).toLocaleTimeString();console.log("planned refresh: "+r),refreshTimeout=setTimeout(window.requests._callOnRefreshFunctions,t)},window.requests._onRefreshFunctions=[],window.requests._callOnRefreshFunctions=function(){startRefreshTimeout();if(isIdle()){console.log("user has been idle for "+idleTime+" minutes. Skipping refresh."),renderUpdateStatus();return}console.log("refreshing"),$.each(window.requests._onRefreshFunctions,function(e,t){t()})},window.requests.addRefreshFunction=function(e){window.requests._onRefreshFunctions.push(e)},window.requests.isLastRequest=function(e){var t=!0;return $.each(window.activeRequests,function(n,r){if(r.action===e)return t=!1,!1}),t},window.layerGroupLength=function(e){var t=0,n=e._layers;return n&&(t=Object.keys(n).length),t},window.getURLParam=function(e){var t=document.URL,n=t.indexOf(e);return n<=-1?"":(t=t.substr(n),n=t.indexOf("&"),n>=0&&(t=t.substr(0,n)),t.replace(e+"=",""))};var cookies;window.readCookie=function(e,t,n,r){if(cookies)return cookies[e];t=document.cookie.split("; "),cookies={};for(r=t.length-1;r>=0;r--)n=t[r].split("="),cookies[n[0]]=unescape(n[1]);return cookies[e]},window.writeCookie=function(e,t){document.cookie=e+"="+t+"; expires=Thu, 31 Dec 2020 23:59:59 GMT; path=/"},window.digits=function(e){return(e+"").replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1 ")},window.postAjax=function(e,t,n,r){t=JSON.stringify($.extend({method:"dashboard."+e},t));var i=function(e,t,n){window.requests.remove(n)},s=function(e){window.failedRequestCount++,window.requests.remove(e)},o=$.ajax({url:"https://www.ingress.com/rpc/dashboard."+e,type:"POST",data:t,dataType:"json",success:[i,n],error:r?[s,r]:s,contentType:"application/json; charset=utf-8",beforeSend:function(e){e.setRequestHeader("X-CSRFToken",readCookie("csrftoken"))}});return o.action=e,o},window.unixTimeToString=function(e,t){if(!e)return null;var n=new Date(typeof e=="string"?parseInt(e):e),e=n.toLocaleTimeString(),r=n.getFullYear()+"-"+(n.getMonth()+1)+"-"+n.getDate();return typeof t!="undefined"&&t?r+" "+e:n.toDateString()==(new Date).toDateString()?e:r},window.unixTimeToHHmm=function(e){if(!e)return null;var t=new Date(typeof e=="string"?parseInt(e):e),n=""+t.getHours();n=n.length===1?"0"+n:n;var r=""+t.getMinutes();return r=r.length===1?"0"+r:r,n+":"+r},window.rangeLinkClick=function(){window.portalRangeIndicator&&window.map.fitBounds(window.portalRangeIndicator.getBounds()),window.isSmartphone&&window.smartphone.mapButton.click()},window.showPortalPosLinks=function(e,t){var n='<div id="qrcode"></div>',r="<script>$('#qrcode').qrcode({text:'GEO:"+e+","+t+"'});</script>",i='<a href="https://maps.google.com/?q='+e+","+t+'">gmaps</a>',s='<a href="http://www.openstreetmap.org/?mlat='+e+"&mlon="+t+'&zoom=16">OSM</a>';alert('<div style="text-align: center;">'+n+r+i+" "+s+"</div>")},window.reportPortalIssue=function(e){var t="Redirecting you to a Google Help Page.

The text box contains all necessary information. Press CTRL+C to copy it.",n=window.portals[window.selectedPortal].options.details,e="Your Nick: "+PLAYER.nickname+"        "+"Portal: "+n.portalV2.descriptiveText.TITLE+"        "+"Location: "+n.portalV2.descriptiveText.ADDRESS+" (lat "+n.locationE6.latE6/1e6+"; lng "+n.locationE6.lngE6/1e6+")";prompt(t,e)!==null&&(location.href="https://support.google.com/ingress?hl=en&contact=1")},window._storedPaddedBounds=undefined,window.getPaddedBounds=function(){_storedPaddedBounds===undefined&&map.on("zoomstart zoomend movestart moveend",function(){window._storedPaddedBounds=null});if(renderLimitReached(.7))return window.map.getBounds();if(window._storedPaddedBounds)return window._storedPaddedBounds;var e=window.map.getBounds().pad(VIEWPORT_PAD_RATIO);return window._storedPaddedBounds=e,e},window.renderLimitReached=function(e){e=e||1;if(Object.keys(portals).length*e>=MAX_DRAWN_PORTALS)return!0;if(Object.keys(links).length*e>=MAX_DRAWN_LINKS)return!0;if(Object.keys(fields).length*e>=MAX_DRAWN_FIELDS)return!0;var t={reached:!1};return window.runHooks("checkRenderLimit",t),t.reached},window.getMinPortalLevel=function(){var e=map.getZoom();if(e>=16)return 0;var t=["impossible",8,7,7,6,6,5,5,4,4,3,3,2,2,1,1],n=portalRenderLimit.getMinLevel(),r=n>t[e]?n:t[e];return r},window.scrollBottom=function(e){typeof e=="string"&&(e=$(e));try{return e.get(0).scrollHeight-e.innerHeight()-e.scrollTop()}catch(t){return console.warn("elmget undefined error"),debug.printStackTrace(),0}},window.zoomToAndShowPortal=function(e,t){map.setView(t,17),window.portals[e]?renderPortalDetails(e):urlPortal=e},window.getTypeByGuid=function(e){switch(e.slice(33)){case"11":case"12":return TYPE_PORTAL;case"9":return TYPE_LINK;case"b":return TYPE_FIELD;case"c":return TYPE_PLAYER;case"d":return TYPE_CHAT;default:if(e.slice(-11,-2)=="resonator")return TYPE_RESONATOR;return TYPE_UNKNOWN}},String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1).toLowerCase()},typeof String.prototype.startsWith!="function"&&(String.prototype.startsWith=function(e){return this.slice(0,e.length)===e}),window.prettyEnergy=function(e){return e>1e3?Math.round(e/1e3)+" k":e},window.setPermaLink=function(e){var t=map.getCenter(),n=Math.round(t.lat*1e6),r=Math.round(t.lng*1e6),i="latE6="+n+"&lngE6="+r+"&z="+(map.getZoom()-1);$(e).attr("href","https://www.ingress.com/intel?"+i)},window.uniqueArray=function(e){return $.grep(e,function(t,n){return $.inArray(t,e)===n})},window.genFourColumnTable=function(e){var t=$.map(e,function(e,t){return e?t%2===0?"<tr><td>"+e[1]+"</td><th>"+e[0]+"</th>":"    <th>"+e[0]+"</th><td>"+e[1]+"</td></tr>":""}).join("");return t.length%2===1&&t+"<td></td><td></td></tr>",t},window.convertTextToTableMagic=function(e){if(!e.match(/	/))return e.replace(/
/g,"<br>");var t=[],n=0,r=e.split("
");$.each(r,function(e,r){t[e]=r.split("	"),t[e].length>n&&(n=t[e].length)});var i="<table>";return $.each(t,function(e,r){i+="<tr>",$.each(t[e],function(r,s){var o="";r===0&&t[e].length<n&&(o=' colspan="'+(n-t[e].length+1)+'"'),i+="<td"+o+">"+s+"</td>"}),i+="</tr>"}),i+="</table>",i},window.calcTriArea=function(e){return Math.abs((e[0].lat*(e[1].lng-e[2].lng)+e[1].lat*(e[2].lng-e[0].lng)+e[2].lat*(e[0].lng-e[1].lng))/2)},window.setupBackButton=function(){var e=window.isSmartphone()?window.smartphone.mapButton:$("#chatcontrols a.active");window.setupBackButton._actions=[e.get(0)],$("#chatcontrols a").click(function(){if($(this).hasClass("toggle"))return;window.setupBackButton._actions.push(this),window.setupBackButton._actions=window.setupBackButton._actions.slice(-2)}),window.goBack=function(){var e=window.setupBackButton._actions[0];if(!e)return;$(e).click(),window.setupBackButton._actions=[e]}},window.setupLargeImagePreview=function(){$("#portaldetails").on("click",".imgpreview",function(){var e=$("#largepreview");if(e.length>0){e.remove();return}var t=$(this).find("img")[0],n=t.naturalWidth/2,r=t.naturalHeight/2,i=$("#portaldetails").attr("class");$("body").append('<div id="largepreview" class="'+i+'" style="margin-left: '+(-SIDEBAR_WIDTH/2-n-2)+"px; margin-top: "+(-r-2)+'px">'+t.outerHTML+"</div>"),$("#largepreview").click(function(){$(this).remove()})})},window.setupLayerChooserSelectOne=function(){$(".leaflet-control-layers-overlays").on("click taphold","label",function(e){if(!e)return;if(!(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.type==="taphold"))return;var t=window.map,n=function(e){t.hasLayer(e.layer)||t.addLayer(e.layer)},r=function(e){t.hasLayer(e.layer)&&t.removeLayer(e.layer)},i=$(e.target).find("input").is(":checked"),s=$(".leaflet-control-layers-overlays input:checked").length;if(i&&s===1||s===0)$.each(window.layerChooser._layers,function(e,t){if(!t.overlay)return!0;n(t)});else{var o=$.trim($(e.target).text());$.each(window.layerChooser._layers,function(e,t){if(t.overlay!==!0)return!0;if(t.name===o)return n(t),!0;r(t)})}e.preventDefault()})},window.setupStyles=function(){$("head").append("<style>"+["#largepreview.enl img { border:2px solid "+COLORS[TEAM_ENL]+"; } ","#largepreview.res img { border:2px solid "+COLORS[TEAM_RES]+"; } ","#largepreview.none img { border:2px solid "+COLORS[TEAM_NONE]+"; } ","#chatcontrols { bottom: "+(CHAT_SHRINKED+22)+"px; }","#chat { height: "+CHAT_SHRINKED+"px; } ",".leaflet-right { margin-right: "+(SIDEBAR_WIDTH+1)+"px } ","#updatestatus { width:"+(SIDEBAR_WIDTH+2)+"px;  } ","#sidebar { width:"+(SIDEBAR_WIDTH+HIDDEN_SCROLLBAR_ASSUMED_WIDTH+1)+"px;  } ","#sidebartoggle { right:"+(SIDEBAR_WIDTH+1)+"px;  } ","#scrollwrapper  { width:"+(SIDEBAR_WIDTH+2*HIDDEN_SCROLLBAR_ASSUMED_WIDTH)+"px; right:-"+(2*HIDDEN_SCROLLBAR_ASSUMED_WIDTH-2)+"px } ","#sidebar > * { width:"+(SIDEBAR_WIDTH+1)+"px;  }"].join("
")+"</style>")},window.setupMap=function(){$("#map").text("");var e={attribution:"Map data © OpenStreetMap contributors",maxZoom:18},t=new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",e),n={attribution:"Map data © OpenStreetMap contributors, Imagery © CloudMade",maxZoom:18},r=new L.TileLayer("http://{s}.tile.cloudmade.com/654cef5fd49a432ab81267e200ecc502/22677/256/{z}/{x}/{y}.png",n),i=new L.TileLayer("http://{s}.tile.cloudmade.com/654cef5fd49a432ab81267e200ecc502/999/256/{z}/{x}/{y}.png",n),s=[i,r,t,new L.Google("INGRESS"),new L.Google("ROADMAP"),new L.Google("SATELLITE"),new L.Google("HYBRID")];window.map=new L.Map("map",$.extend(getPosition(),{zoomControl:localStorage["iitc.zoom.buttons"]!=="false"}));var o={};portalsLayers=[];for(var u=0;u<=8;u++){portalsLayers[u]=L.layerGroup([]),map.addLayer(portalsLayers[u]);var a=(u===0?"Unclaimed":"Level "+u)+" Portals";o[a]=portalsLayers[u]}fieldsLayer=L.layerGroup([]),map.addLayer(fieldsLayer,!0),o.Fields=fieldsLayer,linksLayer=L.layerGroup([]),map.addLayer(linksLayer,!0),o.Links=linksLayer,window.layerChooser=new L.Control.Layers({"OSM Midnight":s[0],"OSM Minimal":s[1],"OSM Mapnik":s[2],"Default Ingress Map":s[3],"Google Roads":s[4],"Google Satellite":s[5],"Google Hybrid":s[6]},o),map.addControl(window.layerChooser);try{map.addLayer(s[readCookie("ingress.intelmap.type")])}catch(f){map.addLayer(s[0])}map.attributionControl.setPrefix(""),map.on("moveend",window.storeMapPosition),map.on("zoomend",function(){window.storeMapPosition();if(isResonatorsShow())return;for(var e=1;e<portalsLayers.length;e++)portalsLayers[e].eachLayer(function(t){var n=t.options.guid;if(getTypeByGuid(n)!=TYPE_RESONATOR)return!0;portalsLayers[e].removeLayer(t)});console.log("Remove all resonators")}),map.on("baselayerchange",function(){var e=$("[name=leaflet-base-layers]:checked").parent().index();writeCookie("ingress.intelmap.type",e)}),map.on("movestart zoomstart",function(){window.mapRunsUserAction=!0}),map.on("moveend zoomend",function(){window.mapRunsUserAction=!1}),map.on("movestart zoomstart",window.requests.abort),map.on("moveend zoomend",function(){window.startRefreshTimeout(500)}),window.requestData(),window.startRefreshTimeout(),window.addResumeFunction(window.requestData),window.requests.addRefreshFunction(window.requestData)},window.setupPlayerStat=function(){PLAYER.guid=playerNameToGuid(PLAYER.nickname);var e,t=parseInt(PLAYER.ap);for(e=0;e<MIN_AP_FOR_LEVEL.length;e++)if(t<MIN_AP_FOR_LEVEL[e])break;PLAYER.level=e;var n=MIN_AP_FOR_LEVEL[e-1],r=MIN_AP_FOR_LEVEL[e]||t,i=digits(r-t),s=Math.round((t-n)/(r-n)*100),o=MAX_XM_PER_LEVEL[e],u=Math.round(PLAYER.energy/o*100),a=PLAYER.team==="ALIENS"?"enl":"res",f="Level:	"+e+"
"+"XM:	"+PLAYER.energy+" / "+o+"
"+"AP:	"+digits(t)+"
"+(e<8?"level up in:	"+i+" AP":"Congrats! (neeeeerd)")+"
Invites:	"+PLAYER.available_invites;0/0,$("#playerstat").html('<h2 title="'+f+'">'+e+"&nbsp;"+'<div id="name">'+'<span class="'+a+'">'+PLAYER.nickname+"</span>"+'<a href="https://www.ingress.com/_ah/logout?continue=https://www.google.com/accounts/Logout%3Fcontinue%3Dhttps://appengine.google.com/_ah/logout%253Fcontinue%253Dhttps://www.ingress.com/intel%26service%3Dah" id="signout">sign out</a>'+"</div>"+'<div id="stats">'+"<sup>XM: "+u+"%</sup>"+"<sub>"+(e<8?"level: "+s+"%":"max level")+"</sub>"+"</div>"+"</h2>"),$("#name").mouseenter(function(){$("#signout").show()}).mouseleave(function(){$("#signout").hide()})},window.setupSidebarToggle=function(){$("#sidebartoggle").on("click",function(){var e=$("#sidebartoggle"),t=$("#scrollwrapper");t.is(":visible")?(t.hide().css("z-index",1),$(".leaflet-right").css("margin-right","0"),e.html('<span class="toggle open"></span>'),e.css("right","0")):(t.css("z-index",1001).show(),$(".leaflet-right").css("margin-right",SIDEBAR_WIDTH+1+"px"),e.html('<span class="toggle close"></span>'),e.css("right",SIDEBAR_WIDTH+1+"px"))})},window.setupTooltips=function(e){e=e||$(document),e.tooltip({show:{effect:"hide",duration:0},hide:!1,open:function(e,t){t.tooltip.delay(300).fadeIn(0)},content:function(){var e=$(this).attr("title");return window.convertTextToTableMagic(e)}}),window.tooltipClearerHasBeenSetup||(window.tooltipClearerHasBeenSetup=!0,$(document).on("click",".ui-tooltip",function(){$(this).remove()}))},window.setupDialogs=function(){$("#dialog").dialog({autoOpen:!1,modal:!0,buttons:[{text:"OK",click:function(){$(this).dialog("close")}}]}),window.alert=function(e,t){var n=t?e:window.convertTextToTableMagic(e);$("#dialog").html(n).dialog("open")}},window.setupTaphold=function(){(function(e){function t(e){var t=jQuery(this);if(typeof t.data("events")!="undefined"&&typeof t.data("events").click!="undefined"){for(var n in t.data("events").click)if(t.data("events").click[n].namespace==""){var r=t.data("events").click[n].handler;t.data("taphold_click_handler",r),t.unbind("click",r);break}}else typeof e.data!="undefined"&&e.data!=null&&typeof e.data.clickHandler=="function"&&t.data("taphold_click_handler",e.data.clickHandler);t.data("taphold_triggered",!1),t.data("taphold_clicked",!1),t.data("taphold_cancelled",!1),t.data("taphold_timer",setTimeout(function(){!t.data("taphold_cancelled")&&!t.data("taphold_clicked")&&(t.trigger(jQuery.extend(e,jQuery.Event("taphold"))),t.data("taphold_triggered"
,!0))},1e3))}function n(e){var t=jQuery(this);if(t.data("taphold_cancelled"))return;clearTimeout(t.data("taphold_timer")),!t.data("taphold_triggered")&&!t.data("taphold_clicked")&&(typeof t.data("taphold_click_handler")=="function"&&t.data("taphold_click_handler")(jQuery.extend(e,jQuery.Event("click"))),t.data("taphold_clicked",!0))}function r(t){e(this).data("taphold_cancelled",!0)}var i=e.event.special.taphold={setup:function(i){e(this).bind("touchstart mousedown",i,t).bind("touchend mouseup",n).bind("touchmove mouseleave",r)},teardown:function(i){e(this).unbind("touchstart mousedown",t).unbind("touchend mouseup",n).unbind("touchmove mouseleave",r)}}})(jQuery)},window.setupQRLoadLib=function(){(function(e){e.fn.qrcode=function(t){function i(e){this.mode=n,this.data=e}function s(e,t){this.typeNumber=e,this.errorCorrectLevel=t,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}function o(e,t){if(void 0==e.length)throw Error(e.length+"/"+t);for(var n=0;n<e.length&&0==e[n];)n++;this.num=Array(e.length-n+t);for(var r=0;r<e.length-n;r++)this.num[r]=e[r+n]}function u(e,t){this.totalCount=e,this.dataCount=t}function a(){this.buffer=[],this.length=0}var n;i.prototype={getLength:function(){return this.data.length},write:function(e){for(var t=0;t<this.data.length;t++)e.put(this.data.charCodeAt(t),8)}},s.prototype={addData:function(e){this.dataList.push(new i(e)),this.dataCache=null},isDark:function(e,t){if(0>e||this.moduleCount<=e||0>t||this.moduleCount<=t)throw Error(e+","+t);return this.modules[e][t]},getModuleCount:function(){return this.moduleCount},make:function(){if(1>this.typeNumber){for(var e=1,e=1;40>e;e++){for(var t=u.getRSBlocks(e,this.errorCorrectLevel),n=new a,r=0,i=0;i<t.length;i++)r+=t[i].dataCount;for(i=0;i<this.dataList.length;i++)t=this.dataList[i],n.put(t.mode,4),n.put(t.getLength(),f.getLengthInBits(t.mode,e)),t.write(n);if(n.getLengthInBits()<=8*r)break}this.typeNumber=e}this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(e,t){this.moduleCount=4*this.typeNumber+17,this.modules=Array(this.moduleCount);for(var n=0;n<this.moduleCount;n++){this.modules[n]=Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++)this.modules[n][r]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(e,t),7<=this.typeNumber&&this.setupTypeNumber(e),null==this.dataCache&&(this.dataCache=s.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,t)},setupPositionProbePattern:function(e,t){for(var n=-1;7>=n;n++)if(!(-1>=e+n||this.moduleCount<=e+n))for(var r=-1;7>=r;r++)-1>=t+r||this.moduleCount<=t+r||(this.modules[e+n][t+r]=0<=n&&6>=n&&(0==r||6==r)||0<=r&&6>=r&&(0==n||6==n)||2<=n&&4>=n&&2<=r&&4>=r?!0:!1)},getBestMaskPattern:function(){for(var e=0,t=0,n=0;8>n;n++){this.makeImpl(!0,n);var r=f.getLostPoint(this);if(0==n||e>r)e=r,t=n}return t},createMovieClip:function(e,t,n){e=e.createEmptyMovieClip(t,n),this.make();for(t=0;t<this.modules.length;t++)for(var n=1*t,r=0;r<this.modules[t].length;r++){var i=1*r;this.modules[t][r]&&(e.beginFill(0,100),e.moveTo(i,n),e.lineTo(i+1,n),e.lineTo(i+1,n+1),e.lineTo(i,n+1),e.endFill())}return e},setupTimingPattern:function(){for(var e=8;e<this.moduleCount-8;e++)null==this.modules[e][6]&&(this.modules[e][6]=0==e%2);for(e=8;e<this.moduleCount-8;e++)null==this.modules[6][e]&&(this.modules[6][e]=0==e%2)},setupPositionAdjustPattern:function(){for(var e=f.getPatternPosition(this.typeNumber),t=0;t<e.length;t++)for(var n=0;n<e.length;n++){var r=e[t],i=e[n];if(null==this.modules[r][i])for(var s=-2;2>=s;s++)for(var o=-2;2>=o;o++)this.modules[r+s][i+o]=-2==s||2==s||-2==o||2==o||0==s&&0==o?!0:!1}},setupTypeNumber:function(e){for(var t=f.getBCHTypeNumber(this.typeNumber),n=0;18>n;n++){var r=!e&&1==(t>>n&1);this.modules[Math.floor(n/3)][n%3+this.moduleCount-8-3]=r}for(n=0;18>n;n++)r=!e&&1==(t>>n&1),this.modules[n%3+this.moduleCount-8-3][Math.floor(n/3)]=r},setupTypeInfo:function(e,t){for(var n=f.getBCHTypeInfo(this.errorCorrectLevel<<3|t),r=0;15>r;r++){var i=!e&&1==(n>>r&1);6>r?this.modules[r][8]=i:8>r?this.modules[r+1][8]=i:this.modules[this.moduleCount-15+r][8]=i}for(r=0;15>r;r++)i=!e&&1==(n>>r&1),8>r?this.modules[8][this.moduleCount-r-1]=i:9>r?this.modules[8][15-r-1+1]=i:this.modules[8][15-r-1]=i;this.modules[this.moduleCount-8][8]=!e},mapData:function(e,t){for(var n=-1,r=this.moduleCount-1,i=7,s=0,o=this.moduleCount-1;0<o;o-=2)for(6==o&&o--;;){for(var u=0;2>u;u++)if(null==this.modules[r][o-u]){var a=!1;s<e.length&&(a=1==(e[s]>>>i&1)),f.getMask(t,r,o-u)&&(a=!a),this.modules[r][o-u]=a,i--,-1==i&&(s++,i=7)}r+=n;if(0>r||this.moduleCount<=r){r-=n,n=-n;break}}}},s.PAD0=236,s.PAD1=17,s.createData=function(e,t,n){for(var t=u.getRSBlocks(e,t),r=new a,i=0;i<n.length;i++){var o=n[i];r.put(o.mode,4),r.put(o.getLength(),f.getLengthInBits(o.mode,e)),o.write(r)}for(i=e=0;i<t.length;i++)e+=t[i].dataCount;if(r.getLengthInBits()>8*e)throw Error("code length overflow. ("+r.getLengthInBits()+">"+8*e+")");for(r.getLengthInBits()+4<=8*e&&r.put(0,4);0!=r.getLengthInBits()%8;)r.putBit(!1);for(;!(r.getLengthInBits()>=8*e);){r.put(s.PAD0,8);if(r.getLengthInBits()>=8*e)break;r.put(s.PAD1,8)}return s.createBytes(r,t)},s.createBytes=function(e,t){for(var n=0,r=0,i=0,s=Array(t.length),u=Array(t.length),a=0;a<t.length;a++){var l=t[a].dataCount,c=t[a].totalCount-l,r=Math.max(r,l),i=Math.max(i,c);s[a]=Array(l);for(var h=0;h<s[a].length;h++)s[a][h]=255&e.buffer[h+n];n+=l,h=f.getErrorCorrectPolynomial(c),l=(new o(s[a],h.getLength()-1)).mod(h),u[a]=Array(h.getLength()-1);for(h=0;h<u[a].length;h++)c=h+l.getLength()-u[a].length,u[a][h]=0<=c?l.get(c):0}for(h=a=0;h<t.length;h++)a+=t[h].totalCount;n=Array(a);for(h=l=0;h<r;h++)for(a=0;a<t.length;a++)h<s[a].length&&(n[l++]=s[a][h]);for(h=0;h<i;h++)for(a=0;a<t.length;a++)h<u[a].length&&(n[l++]=u[a][h]);return n},n=4;for(var f={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(e){for(var t=e<<10;0<=f.getBCHDigit(t)-f.getBCHDigit(f.G15);)t^=f.G15<<f.getBCHDigit(t)-f.getBCHDigit(f.G15);return(e<<10|t)^f.G15_MASK},getBCHTypeNumber:function(e){for(var t=e<<12;0<=f.getBCHDigit(t)-f.getBCHDigit(f.G18);)t^=f.G18<<f.getBCHDigit(t)-f.getBCHDigit(f.G18);return e<<12|t},getBCHDigit:function(e){for(var t=0;0!=e;)t++,e>>>=1;return t},getPatternPosition:function(e){return f.PATTERN_POSITION_TABLE[e-1]},getMask:function(e,t,n){switch(e){case 0:return 0==(t+n)%2;case 1:return 0==t%2;case 2:return 0==n%3;case 3:return 0==(t+n)%3;case 4:return 0==(Math.floor(t/2)+Math.floor(n/3))%2;case 5:return 0==t*n%2+t*n%3;case 6:return 0==(t*n%2+t*n%3)%2;case 7:return 0==(t*n%3+(t+n)%2)%2;default:throw Error("bad maskPattern:"+e)}},getErrorCorrectPolynomial:function(e){for(var t=new o([1],0),n=0;n<e;n++)t=t.multiply(new o([1,l.gexp(n)],0));return t},getLengthInBits:function(e,t){if(1<=t&&10>t)switch(e){case 1:return 10;case 2:return 9;case n:return 8;case 8:return 8;default:throw Error("mode:"+e)}else if(27>t)switch(e){case 1:return 12;case 2:return 11;case n:return 16;case 8:return 10;default:throw Error("mode:"+e)}else{if(!(41>t))throw Error("type:"+t);switch(e){case 1:return 14;case 2:return 13;case n:return 16;case 8:return 12;default:throw Error("mode:"+e)}}},getLostPoint:function(e){for(var t=e.getModuleCount(),n=0,r=0;r<t;r++)for(var i=0;i<t;i++){for(var s=0,o=e.isDark(r,i),u=-1;1>=u;u++)if(!(0>r+u||t<=r+u))for(var a=-1;1>=a;a++)0>i+a||t<=i+a||0==u&&0==a||o==e.isDark(r+u,i+a)&&s++;5<s&&(n+=3+s-5)}for(r=0;r<t-1;r++)for(i=0;i<t-1;i++)if(s=0,e.isDark(r,i)&&s++,e.isDark(r+1,i)&&s++,e.isDark(r,i+1)&&s++,e.isDark(r+1,i+1)&&s++,0==s||4==s)n+=3;for(r=0;r<t;r++)for(i=0;i<t-6;i++)e.isDark(r,i)&&!e.isDark(r,i+1)&&e.isDark(r,i+2)&&e.isDark(r,i+3)&&e.isDark(r,i+4)&&!e.isDark(r,i+5)&&e.isDark(r,i+6)&&(n+=40);for(i=0;i<t;i++)for(r=0;r<t-6;r++)e.isDark(r,i)&&!e.isDark(r+1,i)&&e.isDark(r+2,i)&&e.isDark(r+3,i)&&e.isDark(r+4,i)&&!e.isDark(r+5,i)&&e.isDark(r+6,i)&&(n+=40);for(i=s=0;i<t;i++)for(r=0;r<t;r++)e.isDark(r,i)&&s++;return e=Math.abs(100*s/t/t-50)/5,n+10*e}},l={glog:function(e){if(1>e)throw Error("glog("+e+")");return l.LOG_TABLE[e]},gexp:function(e){for(;0>e;)e+=255;for(;256<=e;)e-=255;return l.EXP_TABLE[e]},EXP_TABLE:Array(256),LOG_TABLE:Array(256)},c=0;8>c;c++)l.EXP_TABLE[c]=1<<c;for(c=8;256>c;c++)l.EXP_TABLE[c]=l.EXP_TABLE[c-4]^l.EXP_TABLE[c-5]^l.EXP_TABLE[c-6]^l.EXP_TABLE[c-8];for(c=0;255>c;c++)l.LOG_TABLE[l.EXP_TABLE[c]]=c;return o.prototype={get:function(e){return this.num[e]},getLength:function(){return this.num.length},multiply:function(e){for(var t=Array(this.getLength()+e.getLength()-1),n=0;n<this.getLength();n++)for(var r=0;r<e.getLength();r++)t[n+r]^=l.gexp(l.glog(this.get(n))+l.glog(e.get(r)));return new o(t,0)},mod:function(e){if(0>this.getLength()-e.getLength())return this;for(var t=l.glog(this.get(0))-l.glog(e.get(0)),n=Array(this.getLength()),r=0;r<this.getLength();r++)n[r]=this.get(r);for(r=0;r<e.getLength();r++)n[r]^=l.gexp(l.glog(e.get(r))+t);return(new o(n,0)).mod(e)}},u.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],u.getRSBlocks=function(e,t){var n=u.getRsBlockTable(e,t);if(void 0==n)throw Error("bad rs block @ typeNumber:"+e+"/errorCorrectLevel:"+t);for(var r=n.length/3,i=[],s=0;s<r;s++)for(var o=n[3*s+0],a=n[3*s+1],f=n[3*s+2],l=0;l<o;l++)i.push(new u(a,f));return i},u.getRsBlockTable=function(e,t){switch(t){case 1:return u.RS_BLOCK_TABLE[4*(e-1)+0];case 0:return u.RS_BLOCK_TABLE[4*(e-1)+1];case 3:return u.RS_BLOCK_TABLE[4*(e-1)+2];case 2:return u.RS_BLOCK_TABLE[4*(e-1)+3]}},a.prototype={get:function(e){return 1==(this.buffer[Math.floor(e/8)]>>>7-e%8&1)},put:function(e,t){for(var n=0;n<t;n++)this.putBit(1==(e>>>t-n-1&1))},getLengthInBits:function(){return this.length},putBit:function(e){var t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},"string"==typeof t&&(t={text:t}),t=e.extend({},{render:"canvas",width:256,height:256,typeNumber:-1,correctLevel:2,background:"#ffffff",foreground:"#000000"},t),this.each(function(){var n;if("canvas"==t.render){n=new s(t.typeNumber,t.correctLevel),n.addData(t.text),n.make();var i=document.createElement("canvas");i.width=t.width,i.height=t.height;for(var o=i.getContext("2d"),u=t.width/n.getModuleCount(),a=t.height/n.getModuleCount(),f=0;f<n.getModuleCount();f++)for(var l=0;l<n.getModuleCount();l++){o.fillStyle=n.isDark(f,l)?t.foreground:t.background;var c=Math.ceil((l+1)*u)-Math.floor(l*u),p=Math.ceil((f+1)*u)-Math.floor(f*u);o.fillRect(Math.round(l*u),Math.round(f*a),c,p)}}else{n=new s(t.typeNumber,t.correctLevel),n.addData(t.text),n.make(),i=e("<table></table>").css("width",t.width+"px").css("height",t.height+"px").css("border","0px").css("border-collapse","collapse").css("background-color",t.background),o=t.width/n.getModuleCount(),u=t.height/n.getModuleCount();for(a=0;a<n.getModuleCount();a++){f=e("<tr></tr>").css("height",u+"px").appendTo(i);for(l=0;l<n.getModuleCount();l++)e("<td></td>").css("width",o+"px").css("background-color",n.isDark(a,l)?t.foreground:t.background).appendTo(f)}}n=i,jQuery(n).appendTo(this)})}})(jQuery)},function(e){e=e||{};var t={},n,r;n=function(e,r,i){var s=e.halt=!1;e.error=function(e){throw e},e.next=function(n){n&&(s=!1);if(!e.halt&&r&&r.length){var i=r.shift(),o=i.shift();s=!0;try{t[o].apply(e,[i,i.length,o])}catch(u){e.error(u)}}return e};for(var o in t){if(typeof e[o]=="function")continue;(function(i){e[i]=function(){var o=Array.prototype.slice.call(arguments);if(i==="onError"){if(r)return t.onError.apply(e,[o,o.length]),e;var u={};return t.onError.apply(u,[o,o.length]),n(u,null,"onError")}return o.unshift(i),r?(e.then=e[i],r.push(o),s?e:e.next()):n({},[o],i)}})(o)}return i&&(e.then=e[i]),e.call=function(t,n){n.unshift(t),r.unshift(n),e.next(!0)},e.next()},r=e.addMethod=function(r){var i=Array.prototype.slice.call(arguments),s=i.pop();for(var o=0,u=i.length;o<u;o++)typeof i[o]=="string"&&(t[i[o]]=s);--u||(t["then"+r.substr(0,1).toUpperCase()+r.substr(1)]=s),n(e)},r("chain",function(e){var t=this,n=function(){if(!t.halt){if(!e.length)return t.next(!0);try{null!=e.shift().call(t,n,t.error)&&n()}catch(r){t.error(r)}}};n()}),r("run",function(e,t){var n=this,r=function(){n.halt||--t||n.next(!0)},i=function(e){n.error(e)};for(var s=0,o=t;!n.halt&&s<o;s++)null!=e[s].call(n,r,i)&&r()}),r("defer",function(e){var t=this;setTimeout(function(){t.next(!0)},e.shift())}),r("onError",function(e,t){var n=this;this.error=function(r){n.halt=!0;for(var i=0;i<t;i++)e[i].call(n,r)}})}(this);var head=document.getElementsByTagName("head")[0]||document.documentElement;addMethod("load",function(e,t){for(var n=[],r=0;r<t;r++)(function(t){n.push(asyncLoadScript(e[t]))})(r);this.call("run",n)});try{console.log("Loading included JS now")}catch(e){}(function(e,t,n){var r,i;typeof exports!=n+""?r=exports:(i=e.L,r={},r.noConflict=function(){return e.L=i,this},e.L=r),r.version="0.5",r.Util={extend:function(e){var t,n,r,i,s=Array.prototype.slice.call(arguments,1);for(n=0,r=s.length;r>n;n++){i=s[n]||{};for(t in i)i.hasOwnProperty(t)&&(e[t]=i[t])}return e},bind:function(e,t){var n=arguments.length>2?Array.prototype.slice.call(arguments,2):null;return function(){return e.apply(t,n||arguments)}},stamp:function(){var e=0,t="_leaflet_id";return function(n){return n[t]=n[t]||++e,n[t]}}(),limitExecByInterval:function(e,t,r){var i,s;return function o(){var u=arguments;return i?(s=!0,n):(i=!0,setTimeout(function(){i=!1,s&&(o.apply(r,u),s=!1)},t),e.apply(r,u),n)}},falseFn:function(){return!1},formatNum:function(e,t){var n=Math.pow(10,t||5);return Math.round(e*n)/n},splitWords:function(e){return e.replace(/^\s+|\s+$/g,"").split(/\s+/)},setOptions:function(e,t){return e.options=r.extend({},e.options,t),e.options},getParamString:function(e,t){var n=[];for(var r in e)e.hasOwnProperty(r)&&n.push(r+"="+e[r]);return(t&&-1!==t.indexOf("?")?"&":"?")+n.join("&")},template:function(e,t){return e.replace(/\{ *([\w_]+) *\}/g,function(e,n){var r=t[n];if(!t.hasOwnProperty(n))throw Error("No value provided for variable "+e);return r})},isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)},emptyImageUrl:"data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="},function(){function t(t){var n,r,i=["webkit","moz","o","ms"];for(n=0;i.length>n&&!r;n++)r=e[i[n]+t];return r}function i(t){var n=+(new Date),r=Math.max(0,16-(n-s));return s=n+r,e.setTimeout(t,r)}var s=0,o=e.requestAnimationFrame||t("RequestAnimationFrame")||i,u=e.cancelAnimationFrame||t("CancelAnimationFrame")||t("CancelRequestAnimationFrame")||function(t){e.clearTimeout(t)};r.Util.requestAnimFrame=function(t,s,u,f){return t=r.bind(t,s),u&&o===i?(t(),n):o.call(e,t,f)},r.Util.cancelAnimFrame=function(t){t&&u.call(e,t)}}(),r.extend=r.Util.extend,r.bind=r.Util.bind,r.stamp=r.Util.stamp,r.setOptions=r.Util.setOptions,r.Class=function(){},r.Class.extend=function(e){var t=function(){this.initialize&&this.initialize.apply(this,arguments),this._initHooks&&this.callInitHooks()},n=function(){};n.prototype=this.prototype;var i=new n;i.constructor=t,t.prototype=i;for(var s in this)this.hasOwnProperty(s)&&"prototype"!==s&&(t[s]=this[s]);e.statics&&(r.extend(t,e.statics),delete e.statics),e.includes&&(r.Util.extend.apply(null,[i].concat(e.includes)),delete e.includes),e.options&&i.options&&(e.options=r.extend({},i.options,e.options)),r.extend(i,e),i._initHooks=[];var o=this;return i.callInitHooks=function(){if(!this._initHooksCalled){o.prototype.callInitHooks&&o.prototype.callInitHooks.call(this),this._initHooksCalled=!0;for(var e=0,t=i._initHooks.length;t>e;e++)i._initHooks[e].call(this)}},t},r.Class.include=function(e){r.extend(this.prototype,e)},r.Class.mergeOptions=function(e){r.extend(this.prototype.options,e)},r.Class.addInitHook=function(e){var t=Array.prototype.slice.call(arguments,1),n="function"==typeof e?e:function(){this[e].apply(this,t)};this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(n)};var s="_leaflet_events";r.Mixin={},r.Mixin.Events={addEventListener:function(e,t,n){var i,o,u,a=this[s]=this[s]||{};if("object"==typeof e){for(i in e)e.hasOwnProperty(i)&&this.addEventListener(i,e[i],t);return this}for(e=r.Util.splitWords(e),o=0,u=e.length;u>o;o++)a[e[o]]=a[e[o]]||[],a[e[o]].push({action:t,context:n||this});return this},hasEventListeners:function(e){return s in this&&e in this[s]&&this[s][e].length>0},removeEventListener:function(e,t,n){var i,o,u,a,f,l=this[s];if("object"==typeof e){for(i in e)e.hasOwnProperty(i)&&this.removeEventListener(i,e[i],t);return this}for(e=r.Util.splitWords(e),o=0,u=e.length;u>o;o++)if(this.hasEventListeners(e[o]))for(a=l[e[o]],f=a.length-1;f>=0;f--)t&&a[f].action!==t||n&&a[f].context!==n||a.splice(f,1);return this},fireEvent:function(e,t){if(!this.hasEventListeners(e))return this;for(var n=r.extend({type:e,target:this},t),i=this[s][e].slice(),o=0,u=i.length;u>o;o++)i[o].action.call(i[o].context||this,n);return this}},r.Mixin.Events.on=r.Mixin.Events.addEventListener,r.Mixin.Events.off=r.Mixin.Events.removeEventListener,r.Mixin.Events.fire=r.Mixin.Events.fireEvent,function(){var i=!!e.ActiveXObject,s=i&&!e.XMLHttpRequest,o=i&&!t.querySelector,u=navigator.userAgent.toLowerCase(),a=-1!==u.indexOf("webkit"),f=-1!==u.indexOf("chrome"),l=-1!==u.indexOf("android"),c=-1!==u.search("android [23]"),h=typeof orientation!=n+"",p=e.navigator&&e.navigator.msPointerEnabled&&e.navigator.msMaxTouchPoints,d="devicePixelRatio"in e&&e.devicePixelRatio>1||"matchMedia"in e&&e.matchMedia("(min-resolution:144dpi)")&&e.matchMedia("(min-resolution:144dpi)").matches,v=t.documentElement,m=i&&"transition"in v.style,g="WebKitCSSMatrix"in e&&"m11"in new e.WebKitCSSMatrix,y="MozPerspective"in v.style,b="OTransition"in v.style,w=!e.L_DISABLE_3D&&(m||g||y||b),E=!e.L_NO_TOUCH&&function(){var e="ontouchstart";if(p||e in v)return!0;var n=t.createElement("div"),r=!1;return n.setAttribute?(n.setAttribute(e,"return;"),"function"==typeof n[e]&&(r=!0),n.removeAttribute(e),n=null,r):!1}();r.Browser={ie:i,ie6:s,ie7:o,webkit:a,android:l,android23:c,chrome:f,ie3d:m,webkit3d:g,gecko3d:y,opera3d:b,any3d:w,mobile:h,mobileWebkit:h&&a,mobileWebkit3d:h&&g,mobileOpera:h&&e.opera,touch:E,msTouch:p,retina:d}}(),r.Point=function(e,t,n){this.x=n?Math.round(e):e,this.y=n?Math.round(t):t},r.Point.prototype={clone:function(){return new r.Point(this.x,this.y)},add:function(e){return this.clone()._add(r.point(e))},_add:function(e){return this.x+=e.x,this.y+=e.y,this},subtract:function(e){return this.clone()._subtract(r.point(e))},_subtract:function(e){return this.x-=e.x,this.y-=e.y,this},divideBy:function(e){return this.clone()._divideBy(e)},_divideBy:function(e){return this.x/=e,this.y/=e,this},multiplyBy:function(e){return this.clone()._multiplyBy(e)},_multiplyBy:function(e){return this.x*=e,this.y*=e,this},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},distanceTo:function(e){e=r.point(e);var t=e.x-this.x,n=e.y-this.y;return Math.sqrt(t*t+n*n)},equals:function(e){return e.x===this.x&&e.y===this.y},toString:function(){return"Point("+r.Util.formatNum(this.x)+", "+r.Util.formatNum(this.y)+")"}},r.point=function(e,t,n){return e instanceof r.Point?e:r.Util.isArray(e)?new r.Point(e[0],e[1]):isNaN(e)?e:new r.Point(e,t,n)},r.Bounds=function(e,t){if(e)for(var n=t?[e,t]:e,r=0,i=n.length;i>r;r++)this.extend(n[r])},r.Bounds.prototype={extend:function(e){return e=r.point(e),this.min||this.max?(this.min.x=Math.min(e.x,this.min.x),this.max.x=Math.max(e.x,this.max.x),this.min.y=Math.min(e.y,this.min.y),this.max.y=Math.max(e.y,this.max.y)):(this.min=e.clone(),this.max=e.clone()),this},getCenter:function(e){return new r.Point((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,e)},getBottomLeft:function(){return new r.Point(this.min.x,this.max.y)},getTopRight:function(){return new r.Point(this.max.x,this.min.y)},getSize:function(){return this.max.subtract(this.min)},contains:function(e){var t,n;return e="number"==typeof e[0]||e instanceof r.Point?r.point(e):r.bounds(e),e instanceof r.Bounds?(t=e.min,n=e.max):t=n=e,t.x>=this.min.x&&n.x<=this.max.x&&t.y>=this.min.y&&n.y<=this.max.y},intersects:function(e){e=r.bounds(e);var t=this.min,n=this.max,i=e.min,s=e.max,o=s.x>=t.x&&i.x<=n.x,u=s.y>=t.y&&i.y<=n.y;return o&&u},isValid:function(){return!!this.min&&!!this.max}},r.bounds=function(e,t){return!e||e instanceof r.Bounds?e:new r.Bounds(e,t)},r.Transformation=function(e,t,n,r){this._a=e,this._b=t,this._c=n,this._d=r},r.Transformation.prototype={transform:function(e,t){return this._transform(e.clone(),t)},_transform:function(e,t){return t=t||1,e.x=t*(this._a*e.x+this._b),e.y=t*(this._c*e.y+this._d),e},untransform:function(e,t){return t=t||1,new r.Point((e.x/t-this._b)/this._a,(e.y/t-this._d)/this._c)}},r.DomUtil={get:function(e){return"string"==typeof e?t.getElementById(e):e},getStyle:function(e,n){var r=e.style[n];if(!r&&e.currentStyle&&(r=e.currentStyle[n]),(!r||"auto"===r)&&t.defaultView){var i=t.defaultView.getComputedStyle(e,null);r=i?i[n]:null}return"auto"===r?null:r},getViewportOffset:function(e){var n,i=0,s=0,o=e,u=t.body,a=r.Browser.ie7;do{if(i+=o.offsetTop||0,s+=o.offsetLeft||0,i+=parseInt(r.DomUtil.getStyle(o,"borderTopWidth"),10)||0,s+=parseInt(r.DomUtil.getStyle(o,"borderLeftWidth"),10)||0,n=r.DomUtil.getStyle(o,"position"),o.offsetParent===u&&"absolute"===n)break;if("fixed"===n){i+=u.scrollTop||0,s+=u.scrollLeft||0;break}o=o.offsetParent}while(o);o=e;do{if(o===u)break;i-=o.scrollTop||0,s-=o.scrollLeft||0,r.DomUtil.documentIsLtr()||!r.Browser.webkit&&!a||(s+=o.scrollWidth-o.clientWidth,a&&"hidden"!==r.DomUtil.getStyle(o,"overflow-y")&&"hidden"!==r.DomUtil.getStyle(o,"overflow")&&(s+=17)),o=o.parentNode}while(o);return new r.Point(s,i)},documentIsLtr:function(){return r.DomUtil._docIsLtrCached||(r.DomUtil._docIsLtrCached=!0,r.DomUtil._docIsLtr="ltr"===r.DomUtil.getStyle(t.body,"direction")),r.DomUtil._docIsLtr},create:function(e,n,r){var i=t.createElement(e);return i.className=n,r&&r.appendChild(i),i},disableTextSelection:function(){t.selection&&t.selection.empty&&t.selection.empty(),this._onselectstart||(this._onselectstart=t.onselectstart||null,t.onselectstart=r.Util.falseFn)},enableTextSelection:function(){t.onselectstart===r.Util.falseFn&&(t.onselectstart=this._onselectstart,this._onselectstart=null)},hasClass:function(e,t){return e.className.length>0&&RegExp("(^|\s)"+t+"(\s|$)").test(e.className)},addClass:function(e,t){r.DomUtil.hasClass(e,t)||(e.className+=(e.className?" ":"")+t)},removeClass:function(e,t){function n(e,n){return n===t?"":e}e.className=e.className.replace(/(\S+)\s*/g,n).replace(/(^\s+|\s+$)/,"")},setOpacity:function(e,t){if("opacity"in e.style)e.style.opacity=t;else if("filter"in e.style){var n=!1,r="DXImageTransform.Microsoft.Alpha";try{n=e.filters.item(r)}catch(i){}t=Math.round(100*t),n?(n.Enabled=100!==t,n.Opacity=t):e.style.filter+=" progid:"+r+"(opacity="+t+")"}},testProp:function(e){for(var n=t.documentElement.style,r=0;e.length>r;r++)if(e[r]in n)return e[r];return!1},getTranslateString:function(e){var t=r.Browser.webkit3d,n="translate"+(t?"3d":"")+"(",i=(t?",0":"")+")";return n+e.x+"px,"+e.y+"px"+i},getScaleString:function(e,t){var n=r.DomUtil.getTranslateString(t.add(t.multiplyBy(-1*e))),i=" scale("+e+") ";return n+i},setPosition:function(e,t,n){e._leaflet_pos=t,!n&&r.Browser.any3d?(e.style[r.DomUtil.TRANSFORM]=r.DomUtil.getTranslateString(t),r.Browser.mobileWebkit3d&&(e.style.WebkitBackfaceVisibility="hidden")):(e.style.left=t.x+"px",e.style.top=t.y+"px")},getPosition:function(e){return e._leaflet_pos}},r.DomUtil.TRANSFORM=r.DomUtil.testProp(["transform","WebkitTransform","OTransform","MozTransform","msTransform"]),r.DomUtil.TRANSITION=r.DomUtil.testProp(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),r.DomUtil.TRANSITION_END="webkitTransition"===r.DomUtil.TRANSITION||"OTransition"===r.DomUtil.TRANSITION?r.DomUtil.TRANSITION+"End":"transitionend",r.LatLng=function(e,t){var n=parseFloat(e),r=parseFloat(t);if(isNaN(n)||isNaN(r))throw Error("Invalid LatLng object: ("+e+", "+t+")");this.lat=n,this.lng=r},r.extend(r.LatLng,{DEG_TO_RAD:Math.PI/180,RAD_TO_DEG:180/Math.PI,MAX_MARGIN:1e-9}),r.LatLng.prototype={equals:function(e){if(!e)return!1;e=r.latLng(e);var t=Math.max(Math.abs(this.lat-e.lat),Math.abs(this.lng-e.lng));return r.LatLng.MAX_MARGIN>=t},toString:function(e){return"LatLng("+r.Util.formatNum(this.lat,e)+", "+r.Util.formatNum(this.lng,e)+")"},distanceTo:function(e){e=r.latLng(e);var t=6378137,n=r.LatLng.DEG_TO_RAD,i=(e.lat-this.lat)*n,s=(e.lng-this.lng)*n,o=this.lat*n,u=e.lat*n,a=Math.sin(i/2),f=Math.sin(s/2),l=a*a+f*f*Math.cos(o)*Math.cos(u);return 2*t*Math.atan2(Math.sqrt(l),Math.sqrt(1-l))},wrap:function(e,t){var n=this.lng;return e=e||-180,t=t||180,n=(n+t)%(t-e)+(e>n||n===t?t:e),new r.LatLng(this.lat,n)}},r.latLng=function(e,t){return e instanceof r.LatLng?e:r.Util.isArray(e)?new r.LatLng(e[0],e[1]):isNaN(e)?e:new r.LatLng(e,t)},r.LatLngBounds=function(e,t){if(e)for(var n=t?[e,t]:e,r=0,i=n.length;i>r;r++)this.extend(n[r])},r.LatLngBounds.prototype={extend:function(e){return e="number"==typeof e[0]||"string"==typeof e[0]||e instanceof r.LatLng?r.latLng(e):r.latLngBounds(e),e instanceof r.LatLng?this._southWest||this._northEast?(this._southWest.lat=Math.min(e.lat,this._southWest.lat),this._southWest.lng=Math.min(e.lng,this._southWest.lng),this._northEast.lat=Math.max(e.lat,this._northEast.lat),this._northEast.lng=Math.max(e.lng,this._northEast.lng)):(this._southWest=new r.LatLng(e.lat,e.lng),this._northEast=new r.LatLng(e.lat,e.lng)):e instanceof r.LatLngBounds&&(this.extend(e._southWest),this.extend(e._northEast)),this},pad:function(e){var t=this._southWest,n=this._northEast,i=Math.abs(t.lat-n.lat)*e,s=Math.abs(t.lng-n.lng)*e;return new r.LatLngBounds(new r.LatLng(t.lat-i,t.lng-s),new r.LatLng(n.lat+i,n.lng+s))},getCenter:function(){return new r.LatLng((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new r.LatLng(this._northEast.lat,this._southWest.lng)},getSouthEast:function(){return new r.LatLng(this._southWest.lat,this._northEast.lng)},contains:function(e){e="number"==typeof e[0]||e instanceof r.LatLng?r.latLng(e):r.latLngBounds(e);var t,n,i=this._southWest,s=this._northEast;return e instanceof r.LatLngBounds?(t=e.getSouthWest(),n=e.getNorthEast()):t=n=e,t.lat>=i.lat&&n.lat<=s.lat&&t.lng>=i.lng&&n.lng<=s.lng},intersects:function(e){e=r.latLngBounds(e);var t=this._southWest,n=this._northEast,i=e.getSouthWest(),s=e.getNorthEast(),o=s.lat>=t.lat&&i.lat<=n.lat,u=s.lng>=t.lng&&i.lng<=n.lng;return o&&u},toBBoxString:function(){var e=this._southWest,t=this._northEast;return[e.lng,e.lat,t.lng,t.lat].join(",")},equals:function(e){return e?(e=r.latLngBounds(e),this._southWest.equals(e.getSouthWest())&&this._northEast.equals(e.getNorthEast())):!1},isValid:function(){return!!this._southWest&&!!this._northEast}},r.latLngBounds=function(e,t){return!e||e instanceof r.LatLngBounds?e:new r.LatLngBounds(e,t)},r.Projection={},r.Projection.SphericalMercator={MAX_LATITUDE:85.0511287798,project:function(e){var t=r.LatLng.DEG_TO_RAD,n=this.MAX_LATITUDE,i=Math.max(Math.min(n,e.lat),-n),s=e.lng*t,o=i*t;return o=Math.log(Math.tan(Math.PI/4+o/2)),new r.Point(s,o)},unproject:function(e){var t=r.LatLng.RAD_TO_DEG,n=e.x*t,i=(2*Math.atan(Math.exp(e.y))-Math.PI/2)*t;return new r.LatLng(i,n)}},r.Projection.LonLat={project:function(e){return new r.Point(e.lng,e.lat)},unproject:function(e){return new r.LatLng(e.y,e.x)}},r.CRS={latLngToPoint:function(e,t){var n=this.projection.project(e),r=this.scale(t);return this.transformation._transform(n,r)},pointToLatLng:function(e,t){var n=this.scale(t),r=this.transformation.untransform(e,n);return this.projection.unproject(r)},project:function(e){return this.projection.project(e)},scale:function(e){return 256*Math.pow(2,e)}},r.CRS.Simple=r.extend({},r.CRS,{projection:r.Projection.LonLat,transformation:new r.Transformation(1,0,-1,0),scale:function(e){return Math.pow(2,e)}}),r.CRS.EPSG3857=r.extend({},r.CRS,{code:"EPSG:3857",projection:r.Projection.SphericalMercator,transformation:new r.Transformation(.5/Math.PI,.5,-0.5/Math.PI,.5),project:function(e){var t=this.projection.project(e),n=6378137;return t.multiplyBy(n)}}),r.CRS.EPSG900913=r.extend({},r.CRS.EPSG3857,{code:"EPSG:900913"}),r.CRS.EPSG4326=r.extend({},r.CRS,{code:"EPSG:4326",projection:r.Projection.LonLat,transformation:new r.Transformation(1/360,.5,-1/360,.5)}),r.Map=r.Class.extend({includes:r.Mixin.Events,options:{crs:r.CRS.EPSG3857,fadeAnimation:r.DomUtil.TRANSITION&&!r.Browser.android23,trackResize:!0,markerZoomAnimation:r.DomUtil.TRANSITION&&r.Browser.any3d},initialize:function(e,t){t=r.setOptions(this,t),this._initContainer(e),this._initLayout(),this.callInitHooks(),this._initEvents(),t.maxBounds&&this.setMaxBounds(t.maxBounds),t.center&&t.zoom!==n&&this.setView(r.latLng(t.center),t.zoom,!0),this._initLayers(t.
layers)},setView:function(e,t){return this._resetView(r.latLng(e),this._limitZoom(t)),this},setZoom:function(e){return this.setView(this.getCenter(),e)},zoomIn:function(e){return this.setZoom(this._zoom+(e||1))},zoomOut:function(e){return this.setZoom(this._zoom-(e||1))},fitBounds:function(e){var t=this.getBoundsZoom(e);return this.setView(r.latLngBounds(e).getCenter(),t)},fitWorld:function(){var e=new r.LatLng(-60,-170),t=new r.LatLng(85,179);return this.fitBounds(new r.LatLngBounds(e,t))},panTo:function(e){return this.setView(e,this._zoom)},panBy:function(e){return this.fire("movestart"),this._rawPanBy(r.point(e)),this.fire("move"),this.fire("moveend")},setMaxBounds:function(e){if(e=r.latLngBounds(e),this.options.maxBounds=e,!e)return this._boundsMinZoom=null,this;var t=this.getBoundsZoom(e,!0);return this._boundsMinZoom=t,this._loaded&&(t>this._zoom?this.setView(e.getCenter(),t):this.panInsideBounds(e)),this},panInsideBounds:function(e){e=r.latLngBounds(e);var t=this.getBounds(),n=this.project(t.getSouthWest()),i=this.project(t.getNorthEast()),s=this.project(e.getSouthWest()),o=this.project(e.getNorthEast()),u=0,a=0;return i.y<o.y&&(a=o.y-i.y),i.x>o.x&&(u=o.x-i.x),n.y>s.y&&(a=s.y-n.y),n.x<s.x&&(u=s.x-n.x),this.panBy(new r.Point(u,a,!0))},addLayer:function(e){var t=r.stamp(e);return this._layers[t]?this:(this._layers[t]=e,!e.options||isNaN(e.options.maxZoom)&&isNaN(e.options.minZoom)||(this._zoomBoundLayers[t]=e,this._updateZoomLevels()),this.options.zoomAnimation&&r.TileLayer&&e instanceof r.TileLayer&&(this._tileLayersNum++,this._tileLayersToLoad++,e.on("load",this._onTileLayerLoad,this)),this.whenReady(function(){e.onAdd(this),this.fire("layeradd",{layer:e})},this),this)},removeLayer:function(e){var t=r.stamp(e);if(this._layers[t])return e.onRemove(this),delete this._layers[t],this._zoomBoundLayers[t]&&(delete this._zoomBoundLayers[t],this._updateZoomLevels()),this.options.zoomAnimation&&r.TileLayer&&e instanceof r.TileLayer&&(this._tileLayersNum--,this._tileLayersToLoad--,e.off("load",this._onTileLayerLoad,this)),this.fire("layerremove",{layer:e})},hasLayer:function(e){var t=r.stamp(e);return this._layers.hasOwnProperty(t)},invalidateSize:function(e){var t=this.getSize();if(this._sizeChanged=!0,this.options.maxBounds&&this.setMaxBounds(this.options.maxBounds),!this._loaded)return this;var n=t._subtract(this.getSize())._divideBy(2)._round();return e===!0?this.panBy(n):(this._rawPanBy(n),this.fire("move"),clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(r.bind(this.fire,this,"moveend"),200)),this},addHandler:function(e,t){return t?(this[e]=new t(this),this.options[e]&&this[e].enable(),this):n},getCenter:function(){return this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var e=this.getPixelBounds(),t=this.unproject(e.getBottomLeft()),n=this.unproject(e.getTopRight());return new r.LatLngBounds(t,n)},getMinZoom:function(){var e=this.options.minZoom||0,t=this._layersMinZoom||0,n=this._boundsMinZoom||0;return Math.max(e,t,n)},getMaxZoom:function(){var e=this.options.maxZoom===n?1/0:this.options.maxZoom,t=this._layersMaxZoom===n?1/0:this._layersMaxZoom;return Math.min(e,t)},getBoundsZoom:function(e,t){e=r.latLngBounds(e);var n,i,s,o=this.getSize(),u=this.options.minZoom||0,a=this.getMaxZoom(),f=e.getNorthEast(),l=e.getSouthWest(),c=!0;t&&u--;do u++,i=this.project(f,u),s=this.project(l,u),n=new r.Point(Math.abs(i.x-s.x),Math.abs(s.y-i.y)),c=t?n.x<o.x||n.y<o.y:n.x<=o.x&&n.y<=o.y;while(c&&a>=u);return c&&t?null:t?u:u-1},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new r.Point(this._container.clientWidth,this._container.clientHeight),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(){var e=this._getTopLeftPoint();return new r.Bounds(e,e.add(this.getSize()))},getPixelOrigin:function(){return this._initialTopLeftPoint},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(e){var t=this.options.crs;return t.scale(e)/t.scale(this._zoom)},getScaleZoom:function(e){return this._zoom+Math.log(e)/Math.LN2},project:function(e,t){return t=t===n?this._zoom:t,this.options.crs.latLngToPoint(r.latLng(e),t)},unproject:function(e,t){return t=t===n?this._zoom:t,this.options.crs.pointToLatLng(r.point(e),t)},layerPointToLatLng:function(e){var t=r.point(e).add(this._initialTopLeftPoint);return this.unproject(t)},latLngToLayerPoint:function(e){var t=this.project(r.latLng(e))._round();return t._subtract(this._initialTopLeftPoint)},containerPointToLayerPoint:function(e){return r.point(e).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(e){return r.point(e).add(this._getMapPanePos())},containerPointToLatLng:function(e){var t=this.containerPointToLayerPoint(r.point(e));return this.layerPointToLatLng(t)},latLngToContainerPoint:function(e){return this.layerPointToContainerPoint(this.latLngToLayerPoint(r.latLng(e)))},mouseEventToContainerPoint:function(e){return r.DomEvent.getMousePosition(e,this._container)},mouseEventToLayerPoint:function(e){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(e))},mouseEventToLatLng:function(e){return this.layerPointToLatLng(this.mouseEventToLayerPoint(e))},_initContainer:function(e){var t=this._container=r.DomUtil.get(e);if(t._leaflet)throw Error("Map container is already initialized.");t._leaflet=!0},_initLayout:function(){var e=this._container;r.DomUtil.addClass(e,"leaflet-container"),r.Browser.touch&&r.DomUtil.addClass(e,"leaflet-touch"),this.options.fadeAnimation&&r.DomUtil.addClass(e,"leaflet-fade-anim");var t=r.DomUtil.getStyle(e,"position");"absolute"!==t&&"relative"!==t&&"fixed"!==t&&(e.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var e=this._panes={};this._mapPane=e.mapPane=this._createPane("leaflet-map-pane",this._container),this._tilePane=e.tilePane=this._createPane("leaflet-tile-pane",this._mapPane),e.objectsPane=this._createPane("leaflet-objects-pane",this._mapPane),e.shadowPane=this._createPane("leaflet-shadow-pane"),e.overlayPane=this._createPane("leaflet-overlay-pane"),e.markerPane=this._createPane("leaflet-marker-pane"),e.popupPane=this._createPane("leaflet-popup-pane");var t=" leaflet-zoom-hide";this.options.markerZoomAnimation||(r.DomUtil.addClass(e.markerPane,t),r.DomUtil.addClass(e.shadowPane,t),r.DomUtil.addClass(e.popupPane,t))},_createPane:function(e,t){return r.DomUtil.create("div",e,t||this._panes.objectsPane)},_initLayers:function(e){e=e?r.Util.isArray(e)?e:[e]:[],this._layers={},this._zoomBoundLayers={},this._tileLayersNum=0;var t,n;for(t=0,n=e.length;n>t;t++)this.addLayer(e[t])},_resetView:function(e,t,n,i){var s=this._zoom!==t;i||(this.fire("movestart"),s&&this.fire("zoomstart")),this._zoom=t,this._initialTopLeftPoint=this._getNewTopLeftPoint(e),n?this._initialTopLeftPoint._add(this._getMapPanePos()):r.DomUtil.setPosition(this._mapPane,new r.Point(0,0)),this._tileLayersToLoad=this._tileLayersNum;var o=!this._loaded;this._loaded=!0,this.fire("viewreset",{hard:!n}),this.fire("move"),(s||i)&&this.fire("zoomend"),this.fire("moveend",{hard:!n}),o&&this.fire("load")},_rawPanBy:function(e){r.DomUtil.setPosition(this._mapPane,this._getMapPanePos().subtract(e))},_updateZoomLevels:function(){var e,t=1/0,r=-1/0;for(e in this._zoomBoundLayers)if(this._zoomBoundLayers.hasOwnProperty(e)){var i=this._zoomBoundLayers[e];isNaN(i.options.minZoom)||(t=Math.min(t,i.options.minZoom)),isNaN(i.options.maxZoom)||(r=Math.max(r,i.options.maxZoom))}e===n?this._layersMaxZoom=this._layersMinZoom=n:(this._layersMaxZoom=r,this._layersMinZoom=t)},_initEvents:function(){if(r.DomEvent){r.DomEvent.on(this._container,"click",this._onMouseClick,this);var t,n,i=["dblclick","mousedown","mouseup","mouseenter","mouseleave","mousemove","contextmenu"];for(t=0,n=i.length;n>t;t++)r.DomEvent.on(this._container,i[t],this._fireMouseEvent,this);this.options.trackResize&&r.DomEvent.on(e,"resize",this._onResize,this)}},_onResize:function(){r.Util.cancelAnimFrame(this._resizeRequest),this._resizeRequest=r.Util.requestAnimFrame(this.invalidateSize,this,!1,this._container)},_onMouseClick:function(e){!this._loaded||this.dragging&&this.dragging.moved()||(this.fire("preclick"),this._fireMouseEvent(e))},_fireMouseEvent:function(e){if(this._loaded){var t=e.type;if(t="mouseenter"===t?"mouseover":"mouseleave"===t?"mouseout":t,this.hasEventListeners(t)){"contextmenu"===t&&r.DomEvent.preventDefault(e);var n=this.mouseEventToContainerPoint(e),i=this.containerPointToLayerPoint(n),s=this.layerPointToLatLng(i);this.fire(t,{latlng:s,layerPoint:i,containerPoint:n,originalEvent:e})}}},_onTileLayerLoad:function(){this._tileLayersToLoad--,this._tileLayersNum&&!this._tileLayersToLoad&&this._tileBg&&(clearTimeout(this._clearTileBgTimer),this._clearTileBgTimer=setTimeout(r.bind(this._clearTileBg,this),500))},whenReady:function(e,t){return this._loaded?e.call(t||this,this):this.on("load",e,t),this},_getMapPanePos:function(){return r.DomUtil.getPosition(this._mapPane)},_getTopLeftPoint:function(){if(!this._loaded)throw Error("Set map center and zoom first.");return this._initialTopLeftPoint.subtract(this._getMapPanePos())},_getNewTopLeftPoint:function(e,t){var n=this.getSize()._divideBy(2);return this.project(e,t)._subtract(n)._round()},_latLngToNewLayerPoint:function(e,t,n){var r=this._getNewTopLeftPoint(n,t).add(this._getMapPanePos());return this.project(e,t)._subtract(r)},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(e){return this.latLngToLayerPoint(e).subtract(this._getCenterLayerPoint())},_limitZoom:function(e){var t=this.getMinZoom(),n=this.getMaxZoom();return Math.max(t,Math.min(n,e))}}),r.map=function(e,t){return new r.Map(e,t)},r.Projection.Mercator={MAX_LATITUDE:85.0840591556,R_MINOR:6356752.3142,R_MAJOR:6378137,project:function(e){var t=r.LatLng.DEG_TO_RAD,n=this.MAX_LATITUDE,i=Math.max(Math.min(n,e.lat),-n),s=this.R_MAJOR,o=this.R_MINOR,u=e.lng*t*s,a=i*t,f=o/s,l=Math.sqrt(1-f*f),c=l*Math.sin(a);c=Math.pow((1-c)/(1+c),.5*l);var h=Math.tan(.5*(.5*Math.PI-a))/c;return a=-o*Math.log(h),new r.Point(u,a)},unproject:function(e){for(var t,n=r.LatLng.RAD_TO_DEG,i=this.R_MAJOR,s=this.R_MINOR,o=e.x*n/i,u=s/i,a=Math.sqrt(1-u*u),f=Math.exp(-e.y/s),l=Math.PI/2-2*Math.atan(f),c=15,h=1e-7,p=c,d=.1;Math.abs(d)>h&&--p>0;)t=a*Math.sin(l),d=Math.PI/2-2*Math.atan(f*Math.pow((1-t)/(1+t),.5*a))-l,l+=d;return new r.LatLng(l*n,o)}},r.CRS.EPSG3395=r.extend({},r.CRS,{code:"EPSG:3395",projection:r.Projection.Mercator,transformation:function(){var e=r.Projection.Mercator,t=e.R_MAJOR,n=e.R_MINOR;return new r.Transformation(.5/(Math.PI*t),.5,-0.5/(Math.PI*n),.5)}()}),r.TileLayer=r.Class.extend({includes:r.Mixin.Events,options:{minZoom:0,maxZoom:18,tileSize:256,subdomains:"abc",errorTileUrl:"",attribution:"",zoomOffset:0,opacity:1,unloadInvisibleTiles:r.Browser.mobile,updateWhenIdle:r.Browser.mobile},initialize:function(e,t){t=r.setOptions(this,t),t.detectRetina&&r.Browser.retina&&t.maxZoom>0&&(t.tileSize=Math.floor(t.tileSize/2),t.zoomOffset++,t.minZoom>0&&t.minZoom--,this.options.maxZoom--),this._url=e;var n=this.options.subdomains;"string"==typeof n&&(this.options.subdomains=n.split(""))},onAdd:function(e){this._map=e,this._initContainer(),this._createTileProto(),e.on({viewreset:this._resetCallback,moveend:this._update},this),this.options.updateWhenIdle||(this._limitedUpdate=r.Util.limitExecByInterval(this._update,150,this),e.on("move",this._limitedUpdate,this)),this._reset(),this._update()},addTo:function(e){return e.addLayer(this),this},onRemove:function(e){this._container.parentNode.removeChild(this._container),e.off({viewreset:this._resetCallback,moveend:this._update},this),this.options.updateWhenIdle||e.off("move",this._limitedUpdate,this),this._container=null,this._map=null},bringToFront:function(){var e=this._map._panes.tilePane;return this._container&&(e.appendChild(this._container),this._setAutoZIndex(e,Math.max)),this},bringToBack:function(){var e=this._map._panes.tilePane;return this._container&&(e.insertBefore(this._container,e.firstChild),this._setAutoZIndex(e,Math.min)),this},getAttribution:function(){return this.options.attribution},setOpacity:function(e){return this.options.opacity=e,this._map&&this._updateOpacity(),this},setZIndex:function(e){return this.options.zIndex=e,this._updateZIndex(),this},setUrl:function(e,t){return this._url=e,t||this.redraw(),this},redraw:function(){return this._map&&(this._map._panes.tilePane.empty=!1,this._reset(!0),this._update()),this},_updateZIndex:function(){this._container&&this.options.zIndex!==n&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(e,t){var n,r,i,s=e.children,o=-t(1/0,-1/0);for(r=0,i=s.length;i>r;r++)s[r]!==this._container&&(n=parseInt(s[r].style.zIndex,10),isNaN(n)||(o=t(o,n)));this.options.zIndex=this._container.style.zIndex=(isFinite(o)?o:0)+t(1,-1)},_updateOpacity:function(){r.DomUtil.setOpacity(this._container,this.options.opacity);var e,t=this._tiles;if(r.Browser.webkit)for(e in t)t.hasOwnProperty(e)&&(t[e].style.webkitTransform+=" translate(0,0)")},_initContainer:function(){var e=this._map._panes.tilePane;(!this._container||e.empty)&&(this._container=r.DomUtil.create("div","leaflet-layer"),this._updateZIndex(),e.appendChild(this._container),1>this.options.opacity&&this._updateOpacity())},_resetCallback:function(e){this._reset(e.hard)},_reset:function(e){var t=this._tiles;for(var n in t)t.hasOwnProperty(n)&&this.fire("tileunload",{tile:t[n]});this._tiles={},this._tilesToLoad=0,this.options.reuseTiles&&(this._unusedTiles=[]),e&&this._container&&(this._container.innerHTML=""),this._initContainer()},_update:function(){if(this._map){var e=this._map.getPixelBounds(),t=this._map.getZoom(),n=this.options.tileSize;if(!(t>this.options.maxZoom||this.options.minZoom>t)){var i=new r.Point(Math.floor(e.min.x/n),Math.floor(e.min.y/n)),s=new r.Point(Math.floor(e.max.x/n),Math.floor(e.max.y/n)),o=new r.Bounds(i,s);this._addTilesFromCenterOut(o),(this.options.unloadInvisibleTiles||this.options.reuseTiles)&&this._removeOtherTiles(o)}}},_addTilesFromCenterOut:function(e){var n,i,s,o=[],u=e.getCenter();for(n=e.min.y;e.max.y>=n;n++)for(i=e.min.x;e.max.x>=i;i++)s=new r.Point(i,n),this._tileShouldBeLoaded(s)&&o.push(s);var a=o.length;if(0!==a){o.sort(function(e,t){return e.distanceTo(u)-t.distanceTo(u)});var f=t.createDocumentFragment();for(this._tilesToLoad||this.fire("loading"),this._tilesToLoad+=a,i=0;a>i;i++)this._addTile(o[i],f);this._container.appendChild(f)}},_tileShouldBeLoaded:function(e){if(e.x+":"+e.y in this._tiles)return!1;if(!this.options.continuousWorld){var t=this._getWrapTileNum();if(this.options.noWrap&&(0>e.x||e.x>=t)||0>e.y||e.y>=t)return!1}return!0},_removeOtherTiles:function(e){var t,n,r,i;for(i in this._tiles)this._tiles.hasOwnProperty(i)&&(t=i.split(":"),n=parseInt(t[0],10),r=parseInt(t[1],10),(e.min.x>n||n>e.max.x||e.min.y>r||r>e.max.y)&&this._removeTile(i))},_removeTile:function(e){var t=this._tiles[e];this.fire("tileunload",{tile:t,url:t.src}),this.options.reuseTiles?(r.DomUtil.removeClass(t,"leaflet-tile-loaded"),this._unusedTiles.push(t)):t.parentNode===this._container&&this._container.removeChild(t),r.Browser.android||(t.src=r.Util.emptyImageUrl),delete this._tiles[e]},_addTile:function(e,t){var n=this._getTilePos(e),i=this._getTile();r.DomUtil.setPosition(i,n,r.Browser.chrome||r.Browser.android23),this._tiles[e.x+":"+e.y]=i,this._loadTile(i,e),i.parentNode!==this._container&&t.appendChild(i)},_getZoomForUrl:function(){var e=this.options,t=this._map.getZoom();return e.zoomReverse&&(t=e.maxZoom-t),t+e.zoomOffset},_getTilePos:function(e){var t=this._map.getPixelOrigin(),n=this.options.tileSize;return e.multiplyBy(n).subtract(t)},getTileUrl:function(e){return this._adjustTilePoint(e),r.Util.template(this._url,r.extend({s:this._getSubdomain(e),z:this._getZoomForUrl(),x:e.x,y:e.y},this.options))},_getWrapTileNum:function(){return Math.pow(2,this._getZoomForUrl())},_adjustTilePoint:function(e){var t=this._getWrapTileNum();this.options.continuousWorld||this.options.noWrap||(e.x=(e.x%t+t)%t),this.options.tms&&(e.y=t-e.y-1)},_getSubdomain:function(e){var t=(e.x+e.y)%this.options.subdomains.length;return this.options.subdomains[t]},_createTileProto:function(){var e=this._tileImg=r.DomUtil.create("img","leaflet-tile");e.style.width=e.style.height=this.options.tileSize+"px",e.galleryimg="no"},_getTile:function(){if(this.options.reuseTiles&&this._unusedTiles.length>0){var e=this._unusedTiles.pop();return this._resetTile(e),e}return this._createTile()},_resetTile:function(){},_createTile:function(){var e=this._tileImg.cloneNode(!1);return e.onselectstart=e.onmousemove=r.Util.falseFn,e},_loadTile:function(e,t){e._layer=this,e.onload=this._tileOnLoad,e.onerror=this._tileOnError,e.src=this.getTileUrl(t)},_tileLoaded:function(){this._tilesToLoad--,this._tilesToLoad||this.fire("load")},_tileOnLoad:function(){var e=this._layer;this.src!==r.Util.emptyImageUrl&&(r.DomUtil.addClass(this,"leaflet-tile-loaded"),e.fire("tileload",{tile:this,url:this.src})),e._tileLoaded()},_tileOnError:function(){var e=this._layer;e.fire("tileerror",{tile:this,url:this.src});var t=e.options.errorTileUrl;t&&(this.src=t),e._tileLoaded()}}),r.tileLayer=function(e,t){return new r.TileLayer(e,t)},r.TileLayer.WMS=r.TileLayer.extend({defaultWmsParams:{service:"WMS",request:"GetMap",version:"1.1.1",layers:"",styles:"",format:"image/jpeg",transparent:!1},initialize:function(e,t){this._url=e;var n=r.extend({},this.defaultWmsParams);n.width=n.height=t.detectRetina&&r.Browser.retina?2*this.options.tileSize:this.options.tileSize;for(var i in t)this.options.hasOwnProperty(i)||(n[i]=t[i]);this.wmsParams=n,r.setOptions(this,t)},onAdd:function(e){var t=parseFloat(this.wmsParams.version)>=1.3?"crs":"srs";this.wmsParams[t]=e.options.crs.code,r.TileLayer.prototype.onAdd.call(this,e)},getTileUrl:function(e,t){this._adjustTilePoint(e);var n=this._map,i=n.options.crs,s=this.options.tileSize,o=e.multiplyBy(s),u=o.add(new r.Point(s,s)),a=i.project(n.unproject(o,t)),f=i.project(n.unproject(u,t)),l=[a.x,f.y,f.x,a.y].join(","),c=r.Util.template(this._url,{s:this._getSubdomain(e)});return c+r.Util.getParamString(this.wmsParams,c)+"&bbox="+l},setParams:function(e,t){return r.extend(this.wmsParams,e),t||this.redraw(),this}}),r.tileLayer.wms=function(e,t){return new r.TileLayer.WMS(e,t)},r.TileLayer.Canvas=r.TileLayer.extend({options:{async:!1},initialize:function(e){r.setOptions(this,e)},redraw:function(){var e=this._tiles;for(var t in e)e.hasOwnProperty(t)&&this._redrawTile(e[t])},_redrawTile:function(e){this.drawTile(e,e._tilePoint,this._map._zoom)},_createTileProto:function(){var e=this._canvasProto=r.DomUtil.create("canvas","leaflet-tile");e.width=e.height=this.options.tileSize},_createTile:function(){var e=this._canvasProto.cloneNode(!1);return e.onselectstart=e.onmousemove=r.Util.falseFn,e},_loadTile:function(e,t){e._layer=this,e._tilePoint=t,this._redrawTile(e),this.options.async||this.tileDrawn(e)},drawTile:function(){},tileDrawn:function(e){this._tileOnLoad.call(e)}}),r.tileLayer.canvas=function(e){return new r.TileLayer.Canvas(e)},r.ImageOverlay=r.Class.extend({includes:r.Mixin.Events,options:{opacity:1},initialize:function(e,t,n){this._url=e,this._bounds=r.latLngBounds(t),r.setOptions(this,n)},onAdd:function(e){this._map=e,this._image||this._initImage(),e._panes.overlayPane.appendChild(this._image),e.on("viewreset",this._reset,this),e.options.zoomAnimation&&r.Browser.any3d&&e.on("zoomanim",this._animateZoom,this),this._reset()},onRemove:function(e){e.getPanes().overlayPane.removeChild(this._image),e.off("viewreset",this._reset,this),e.options.zoomAnimation&&e.off("zoomanim",this._animateZoom,this)},addTo:function(e){return e.addLayer(this),this},setOpacity:function(e){return this.options.opacity=e,this._updateOpacity(),this},bringToFront:function(){return this._image&&this._map._panes.overlayPane.appendChild(this._image),this},bringToBack:function(){var e=this._map._panes.overlayPane;return this._image&&e.insertBefore(this._image,e.firstChild),this},_initImage:function(){this._image=r.DomUtil.create("img","leaflet-image-layer"),this._map.options.zoomAnimation&&r.Browser.any3d?r.DomUtil.addClass(this._image,"leaflet-zoom-animated"):r.DomUtil.addClass(this._image,"leaflet-zoom-hide"),this._updateOpacity(),r.extend(this._image,{galleryimg:"no",onselectstart:r.Util.falseFn,onmousemove:r.Util.falseFn,onload:r.bind(this._onImageLoad,this),src:this._url})},_animateZoom:function(e){var t=this._map,n=this._image,i=t.getZoomScale(e.zoom),s=this._bounds.getNorthWest(),o=this._bounds.getSouthEast(),u=t._latLngToNewLayerPoint(s,e.zoom,e.center),a=t._latLngToNewLayerPoint(o,e.zoom,e.center)._subtract(u),f=u._add(a._multiplyBy(.5*(1-1/i)));n.style[r.DomUtil.TRANSFORM]=r.DomUtil.getTranslateString(f)+" scale("+i+") "},_reset:function(){var e=this._image,t=this._map.latLngToLayerPoint(this._bounds.getNorthWest()),n=this._map.latLngToLayerPoint(this._bounds.getSouthEast())._subtract(t);r.DomUtil.setPosition(e,t),e.style.width=n.x+"px",e.style.height=n.y+"px"},_onImageLoad:function(){this.fire("load")},_updateOpacity:function(){r.DomUtil.setOpacity(this._image,this.options.opacity)}}),r.imageOverlay=function(e,t,n){return new r.ImageOverlay(e,t,n)},r.Icon=r.Class.extend({options:{className:""},initialize:function(e){r.setOptions(this,e)},createIcon:function(){return this._createIcon("icon")},createShadow:function(){return this._createIcon("shadow")},_createIcon:function(e){var t=this._getIconUrl(e);if(!t){if("icon"===e)throw Error("iconUrl not set in Icon options (see the docs).");return null}var n=this._createImg(t);return this._setIconStyles(n,e),n},_setIconStyles:function(e,t){var n,i=this.options,s=r.point(i[t+"Size"]);n="shadow"===t?r.point(i.shadowAnchor||i.iconAnchor):r.point(i.iconAnchor),!n&&s&&(n=s.divideBy(2,!0)),e.className="leaflet-marker-"+t+" "+i.className,n&&(e.style.marginLeft=-n.x+"px",e.style.marginTop=-n.y+"px"),s&&(e.style.width=s.x+"px",e.style.height=s.y+"px")},_createImg:function(e){var n;return r.Browser.ie6?(n=t.createElement("div"),n.style.filter='progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+e+'")'):(n=t.createElement("img"),n.src=e),n},_getIconUrl:function(e){return r.Browser.retina&&this.options[e+"RetinaUrl"]?this.options[e+"RetinaUrl"]:this.options[e+"Url"]}}),r.icon=function(e){return new r.Icon(e)},r.Icon.Default=r.Icon.extend({options:{iconSize:new r.Point(25,41),iconAnchor:new r.Point(12,41),popupAnchor:new r.Point(1,-34),shadowSize:new r.Point(41,41)},_getIconUrl:function(e){var t=e+"Url";if(this.options[t])return this.options[t];r.Browser.retina&&"icon"===e&&(e+="_2x");var n=r.Icon.Default.imagePath;if(!n)throw Error("Couldn't autodetect L.Icon.Default.imagePath, set it manually.");return n+"/marker-"+e+".png"}}),r.Icon.Default.imagePath=function(){var e,n,r,i,s=t.getElementsByTagName("script"),o=/\/?leaflet[\-\._]?([\w\-\._]*)\.js\??/;for(e=0,n=s.length;n>e;e++)if(r=s[e].src,i=r.match(o))return r.split(o)[0]+"/images"}(),r.Marker=r.Class.extend({includes:r.Mixin.Events,options:{icon:new r.Icon.Default,title:"",clickable:!0,draggable:!1,zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250},initialize:function(e,t){r.setOptions(this,t),this._latlng=r.latLng(e)},onAdd:function(e){this._map=e,e.on("viewreset",this.update,this),this._initIcon(),this.update(),e.options.zoomAnimation&&e.options.markerZoomAnimation&&e.on("zoomanim",this._animateZoom,this)},addTo:function(e){return e.addLayer(this),this},onRemove:function(e){this._removeIcon(),this.fire("remove"),e.off({viewreset:this.update,zoomanim:this._animateZoom},this),this._map=null},getLatLng:function(){return this._latlng},setLatLng:function(e){return this._latlng=r.latLng(e),this.update(),this.fire("move",{latlng:this._latlng})},setZIndexOffset:function(e){return this.options.zIndexOffset=e,this.update(),this},setIcon:function(e){return this._map&&this._removeIcon(),this.options.icon=e,this._map&&(this._initIcon(),this.update()),this},update:function(){if(this._icon){var e=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(e)}return this},_initIcon:function(){var e=this.options,t=this._map,n=t.options.zoomAnimation&&t.options.markerZoomAnimation,i=n?"leaflet-zoom-animated":"leaflet-zoom-hide",s=!1;this._icon||(this._icon=e.icon.createIcon(),e.title&&(this._icon.title=e.title),this._initInteraction(),s=1>this.options.opacity,r.DomUtil.addClass(this._icon,i),e.riseOnHover&&r.DomEvent.on(this._icon,"mouseover",this._bringToFront,this).on(this._icon,"mouseout",this._resetZIndex,this)),this._shadow||(this._shadow=e.icon.createShadow(),this._shadow&&(r.DomUtil.addClass(this._shadow,i),s=1>this.options.opacity)),s&&this._updateOpacity();var o=this._map._panes;o.markerPane.appendChild(this._icon),this._shadow&&o.shadowPane.appendChild(this._shadow)},_removeIcon:function(){var e=this._map._panes;this.options.riseOnHover&&r.DomEvent.off(this._icon,"mouseover",this._bringToFront).off(this._icon,"mouseout",this._resetZIndex),e.markerPane.removeChild(this._icon),this._shadow&&e.shadowPane.removeChild(this._shadow),this._icon=this._shadow=null},_setPos:function(e){r.DomUtil.setPosition(this._icon,e),this._shadow&&r.DomUtil.setPosition(this._shadow,e),this._zIndex=e.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(e){this._icon.style.zIndex=this._zIndex+e},_animateZoom:function(e){var t=this._map._latLngToNewLayerPoint(this._latlng,e.zoom,e.center);this._setPos(t)},_initInteraction:function(){if(this.options.clickable){var e=this._icon,t=["dblclick","mousedown","mouseover","mouseout","contextmenu"];r.DomUtil.addClass(e,"leaflet-clickable"),r.DomEvent.on(e,"click",this._onMouseClick,this);for(var n=0;t.length>n;n++)r.DomEvent.on(e,t[n],this._fireMouseEvent,this);r.Handler.MarkerDrag&&(this.dragging=new r.Handler.MarkerDrag(this),this.options.draggable&&this.dragging.enable())}},_onMouseClick:function(e){var t=this.dragging&&this.dragging.moved();(this.hasEventListeners(e.type)||t)&&r.DomEvent.stopPropagation(e),t||(this.dragging&&this.dragging._enabled||!this._map.dragging||!this._map.dragging.moved())&&this.fire(e.type,{originalEvent:e})},_fireMouseEvent:function(e){this.fire(e.type,{originalEvent:e}),"contextmenu"===e.type&&this.hasEventListeners(e.type)&&r.DomEvent.preventDefault(e),"mousedown"!==e.type&&r.DomEvent.stopPropagation(e)},setOpacity:function(e){this.options.opacity=e,this._map&&this._updateOpacity()},_updateOpacity:function(){r.DomUtil.setOpacity(this._icon,this.options.opacity),this._shadow&&r.DomUtil.setOpacity(this._shadow,this.options.opacity)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)}}),r.marker=function(e,t){return new r.Marker(e,t)},r.DivIcon=r.Icon.extend({options:{iconSize:new r.Point(12,12),className:"leaflet-div-icon"},createIcon:function(){var e=t.createElement("div"),n=this.options;return n.html&&(e.innerHTML=n.html),n.bgPos&&(e.style.backgroundPosition=-n.bgPos.x+"px "+ -n.bgPos.y+"px"),this._setIconStyles(e,"icon"),e},createShadow:function(){return null}}),r.divIcon=function(e){return new r.DivIcon(e)},r.Map.mergeOptions({closePopupOnClick:!0}),r.Popup=r.Class.extend({includes:r.Mixin.Events,options:{minWidth:50,maxWidth:300,maxHeight:null,autoPan:!0,closeButton:!0,offset:new r.Point(0,6),autoPanPadding:new r.Point(5,5),className:"",zoomAnimation:!0},initialize:function(e,t){r.setOptions(this,e),this._source=t,this._animated=r.Browser.any3d&&this.options.zoomAnimation},onAdd:function(e){this._map=e,this._container||this._initLayout(),this._updateContent();var t=e.options.fadeAnimation;t&&r.DomUtil.setOpacity(this._container,0),e._panes.popupPane.appendChild(this._container),e.on("viewreset",this._updatePosition,this),this._animated&&e.on("zoomanim",this._zoomAnimation,this),e.options.closePopupOnClick&&e.on("preclick",this._close,this),this._update(),t&&r.DomUtil.setOpacity(this._container,1)},addTo:function(e){return e.addLayer(this),this},openOn:function(e){return e.openPopup(this),this},onRemove:function(e){e._panes.popupPane.removeChild(this._container),r.Util.falseFn(this._container.offsetWidth),e.off({viewreset:this._updatePosition,preclick:this._close,zoomanim:this._zoomAnimation},this),e.options.fadeAnimation&&r.DomUtil.setOpacity(this._container,0),this._map=null},setLatLng:function(e){return this._latlng=r.latLng(e),this._update(),this},setContent:function(e){return this._content=e,this._update(),this},_close:function(){var e=this._map;e&&(e._popup=null,e.removeLayer(this).fire("popupclose",{popup:this}))},_initLayout:function(){var e,t="leaflet-popup",n=t+" "+this.options.className+" leaflet-zoom-"+(this._animated?"animated":"hide"),i=this._container=r.DomUtil.create("div",n);this.options.closeButton&&(e=this._closeButton=r.DomUtil.create("a",t+"-close-button",i),e.href="#close",e.innerHTML="&#215;",r.DomEvent.on(e,"click",this._onCloseButtonClick,this));var s=this._wrapper=r.DomUtil.create("div",t+"-content-wrapper",i);r.DomEvent.disableClickPropagation(s),this._contentNode=r.DomUtil.create("div",t+"-content",s),r.DomEvent.on(this._contentNode,"mousewheel",r.DomEvent.stopPropagation),this._tipContainer=r.DomUtil.create("div",t+"-tip-container",i),this._tip=r.DomUtil.create("div",t+"-tip",this._tipContainer)},_update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},_updateContent:function(){if(this._content){if("string"==typeof this._content)this._contentNode.innerHTML=this._content;else{for(;this._contentNode.hasChildNodes();)this._contentNode.removeChild(this._contentNode.firstChild);this._contentNode.appendChild(this._content)}this.fire("contentupdate")}},_updateLayout:function(){var e=this._contentNode,t=e.style;t.width="",t.whiteSpace="nowrap";var n=e.offsetWidth;n=Math.min(n,this.options.maxWidth),n=Math.max(n,this.options.minWidth),t.width=n+1+"px",t.whiteSpace="",t.height="";var i=e.offsetHeight,s=this.options.maxHeight,o="leaflet-popup-scrolled";s&&i>s?(t.height=s+"px",r.DomUtil.addClass(e,o)):r.DomUtil.removeClass(e,o),this._containerWidth=this._container.offsetWidth},_updatePosition:function(){if(this._map){var e=this._map.latLngToLayerPoint(this._latlng),t=this._animated,n=this.options.offset;t&&r.DomUtil.setPosition(this._container,e),this._containerBottom=-n.y-(t?0:e.y),this._containerLeft=-Math.round(this._containerWidth/2)+n.x+(t?0:e.x),this._container.style.bottom=this._containerBottom+"px",this._container.style.left=this._containerLeft+"px"}},_zoomAnimation:function(e){var t=this._map._latLngToNewLayerPoint(this._latlng,e.zoom,e.center);r.DomUtil.setPosition(this._container,t)},_adjustPan:function(){if(this.options.autoPan){var e=this._map,t=this._container.offsetHeight,n=this._containerWidth,i=new r.Point(this._containerLeft,-t-this._containerBottom);this._animated&&i._add(r.DomUtil.getPosition(this._container));var s=e.layerPointToContainerPoint(i),o=this.options.autoPanPadding,u=e.getSize(),a=0,f=0;0>s.x&&(a=s.x-o.x),s.x+n>u.x&&(a=s.x+n-u.x+o.x),0>s.y&&(f=s.y-o.y),s.y+t>u.y&&(f=s.y+t-u.y+o.y),(a||f)&&e.panBy(new r.Point(a,f))}},_onCloseButtonClick:function(e){this._close(),r.DomEvent.stop(e)}}),r.popup=function(e,t){return new r.Popup(e,t)},r.Marker.include({openPopup:function(){return this._popup&&this._map&&(this._popup.setLatLng(this._latlng),this._map.openPopup(this._popup)),this},closePopup:function(){return this._popup&&this._popup._close(),this},bindPopup:function(e,t){var n=r.point(this.options.icon.options.popupAnchor)||new r.Point(0,0);return n=n.add(r.Popup.prototype.options.offset),t&&t.offset&&(n=n.add(t.offset)),t=r.extend({offset:n},t),this._popup||this.on("click",this.openPopup,this).on("remove",this.closePopup,this).on("move",this._movePopup,this),this._popup=(new r.Popup(t,this)).setContent(e),this},unbindPopup:function(){return this._popup&&(this._popup=null,this.off("click",this.openPopup).off("remove",this.closePopup).off("move",this._movePopup)),this},_movePopup:function(e){this._popup.setLatLng(e.latlng)}}),r.Map.include({openPopup:function(e){return this.closePopup(),this._popup=e,this.addLayer(e).fire("popupopen",{popup:this._popup})},closePopup:function(){return this._popup&&this._popup._close(),this}}),r.LayerGroup=r.Class.extend({initialize:function(e){this._layers={};var t,n;if(e)for(t=0,n=e.length;n>t;t++)this.addLayer(e[t])},addLayer:function(e){var t=r.stamp(e);return this._layers[t]=e,this._map&&this._map.addLayer(e),this},removeLayer:function(e){var t=r.stamp(e);return delete this._layers[
t],this._map&&this._map.removeLayer(e),this},clearLayers:function(){return this.eachLayer(this.removeLayer,this),this},invoke:function(e){var t,n,r=Array.prototype.slice.call(arguments,1);for(t in this._layers)this._layers.hasOwnProperty(t)&&(n=this._layers[t],n[e]&&n[e].apply(n,r));return this},onAdd:function(e){this._map=e,this.eachLayer(e.addLayer,e)},onRemove:function(e){this.eachLayer(e.removeLayer,e),this._map=null},addTo:function(e){return e.addLayer(this),this},eachLayer:function(e,t){for(var n in this._layers)this._layers.hasOwnProperty(n)&&e.call(t,this._layers[n])},setZIndex:function(e){return this.invoke("setZIndex",e)}}),r.layerGroup=function(e){return new r.LayerGroup(e)},r.FeatureGroup=r.LayerGroup.extend({includes:r.Mixin.Events,statics:{EVENTS:"click dblclick mouseover mouseout mousemove contextmenu"},addLayer:function(e){return this._layers[r.stamp(e)]?this:(e.on(r.FeatureGroup.EVENTS,this._propagateEvent,this),r.LayerGroup.prototype.addLayer.call(this,e),this._popupContent&&e.bindPopup&&e.bindPopup(this._popupContent,this._popupOptions),this.fire("layeradd",{layer:e}))},removeLayer:function(e){return e.off(r.FeatureGroup.EVENTS,this._propagateEvent,this),r.LayerGroup.prototype.removeLayer.call(this,e),this._popupContent&&this.invoke("unbindPopup"),this.fire("layerremove",{layer:e})},bindPopup:function(e,t){return this._popupContent=e,this._popupOptions=t,this.invoke("bindPopup",e,t)},setStyle:function(e){return this.invoke("setStyle",e)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var e=new r.LatLngBounds;return this.eachLayer(function(t){e.extend(t instanceof r.Marker?t.getLatLng():t.getBounds())}),e},_propagateEvent:function(e){e.layer=e.target,e.target=this,this.fire(e.type,e)}}),r.featureGroup=function(e){return new r.FeatureGroup(e)},r.Path=r.Class.extend({includes:[r.Mixin.Events],statics:{CLIP_PADDING:r.Browser.mobile?Math.max(0,Math.min(.5,(1280/Math.max(e.innerWidth,e.innerHeight)-1)/2)):.5},options:{stroke:!0,color:"#0033ff",dashArray:null,weight:5,opacity:.5,fill:!1,fillColor:null,fillOpacity:.2,clickable:!0},initialize:function(e){r.setOptions(this,e)},onAdd:function(e){this._map=e,this._container||(this._initElements(),this._initEvents()),this.projectLatlngs(),this._updatePath(),this._container&&this._map._pathRoot.appendChild(this._container),this.fire("add"),e.on({viewreset:this.projectLatlngs,moveend:this._updatePath},this)},addTo:function(e){return e.addLayer(this),this},onRemove:function(e){e._pathRoot.removeChild(this._container),this.fire("remove"),this._map=null,r.Browser.vml&&(this._container=null,this._stroke=null,this._fill=null),e.off({viewreset:this.projectLatlngs,moveend:this._updatePath},this)},projectLatlngs:function(){},setStyle:function(e){return r.setOptions(this,e),this._container&&this._updateStyle(),this},redraw:function(){return this._map&&(this.projectLatlngs(),this._updatePath()),this}}),r.Map.include({_updatePathViewport:function(){var e=r.Path.CLIP_PADDING,t=this.getSize(),n=r.DomUtil.getPosition(this._mapPane),i=n.multiplyBy(-1)._subtract(t.multiplyBy(e)._round()),s=i.add(t.multiplyBy(1+2*e)._round());this._pathViewport=new r.Bounds(i,s)}}),r.Path.SVG_NS="http://www.w3.org/2000/svg",r.Browser.svg=!!t.createElementNS&&!!t.createElementNS(r.Path.SVG_NS,"svg").createSVGRect,r.Path=r.Path.extend({statics:{SVG:r.Browser.svg},bringToFront:function(){var e=this._map._pathRoot,t=this._container;return t&&e.lastChild!==t&&e.appendChild(t),this},bringToBack:function(){var e=this._map._pathRoot,t=this._container,n=e.firstChild;return t&&n!==t&&e.insertBefore(t,n),this},getPathString:function(){},_createElement:function(e){return t.createElementNS(r.Path.SVG_NS,e)},_initElements:function(){this._map._initPathRoot(),this._initPath(),this._initStyle()},_initPath:function(){this._container=this._createElement("g"),this._path=this._createElement("path"),this._container.appendChild(this._path)},_initStyle:function(){this.options.stroke&&(this._path.setAttribute("stroke-linejoin","round"),this._path.setAttribute("stroke-linecap","round")),this.options.fill&&this._path.setAttribute("fill-rule","evenodd"),this._updateStyle()},_updateStyle:function(){this.options.stroke?(this._path.setAttribute("stroke",this.options.color),this._path.setAttribute("stroke-opacity",this.options.opacity),this._path.setAttribute("stroke-width",this.options.weight),this.options.dashArray?this._path.setAttribute("stroke-dasharray",this.options.dashArray):this._path.removeAttribute("stroke-dasharray")):this._path.setAttribute("stroke","none"),this.options.fill?(this._path.setAttribute("fill",this.options.fillColor||this.options.color),this._path.setAttribute("fill-opacity",this.options.fillOpacity)):this._path.setAttribute("fill","none")},_updatePath:function(){var e=this.getPathString();e||(e="M0 0"),this._path.setAttribute("d",e)},_initEvents:function(){if(this.options.clickable){(r.Browser.svg||!r.Browser.vml)&&this._path.setAttribute("class","leaflet-clickable"),r.DomEvent.on(this._container,"click",this._onMouseClick,this);for(var e=["dblclick","mousedown","mouseover","mouseout","mousemove","contextmenu"],t=0;e.length>t;t++)r.DomEvent.on(this._container,e[t],this._fireMouseEvent,this)}},_onMouseClick:function(e){this._map.dragging&&this._map.dragging.moved()||this._fireMouseEvent(e)},_fireMouseEvent:function(e){if(this.hasEventListeners(e.type)){var t=this._map,n=t.mouseEventToContainerPoint(e),i=t.containerPointToLayerPoint(n),s=t.layerPointToLatLng(i);this.fire(e.type,{latlng:s,layerPoint:i,containerPoint:n,originalEvent:e}),"contextmenu"===e.type&&r.DomEvent.preventDefault(e),"mousemove"!==e.type&&r.DomEvent.stopPropagation(e)}}}),r.Map.include({_initPathRoot:function(){this._pathRoot||(this._pathRoot=r.Path.prototype._createElement("svg"),this._panes.overlayPane.appendChild(this._pathRoot),this.options.zoomAnimation&&r.Browser.any3d?(this._pathRoot.setAttribute("class"," leaflet-zoom-animated"),this.on({zoomanim:this._animatePathZoom,zoomend:this._endPathZoom})):this._pathRoot.setAttribute("class"," leaflet-zoom-hide"),this.on("moveend",this._updateSvgViewport),this._updateSvgViewport())},_animatePathZoom:function(e){var t=this.getZoomScale(e.zoom),n=this._getCenterOffset(e.center)._multiplyBy(-t)._add(this._pathViewport.min);this._pathRoot.style[r.DomUtil.TRANSFORM]=r.DomUtil.getTranslateString(n)+" scale("+t+") ",this._pathZooming=!0},_endPathZoom:function(){this._pathZooming=!1},_updateSvgViewport:function(){if(!this._pathZooming){this._updatePathViewport();var e=this._pathViewport,t=e.min,n=e.max,i=n.x-t.x,s=n.y-t.y,o=this._pathRoot,u=this._panes.overlayPane;r.Browser.mobileWebkit&&u.removeChild(o),r.DomUtil.setPosition(o,t),o.setAttribute("width",i),o.setAttribute("height",s),o.setAttribute("viewBox",[t.x,t.y,i,s].join(" ")),r.Browser.mobileWebkit&&u.appendChild(o)}}}),r.Path.include({bindPopup:function(e,t){return(!this._popup||t)&&(this._popup=new r.Popup(t,this)),this._popup.setContent(e),this._popupHandlersAdded||(this.on("click",this._openPopup,this).on("remove",this.closePopup,this),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this._popup=null,this.off("click",this._openPopup).off("remove",this.closePopup),this._popupHandlersAdded=!1),this},openPopup:function(e){return this._popup&&(e=e||this._latlng||this._latlngs[Math.floor(this._latlngs.length/2)],this._openPopup({latlng:e})),this},closePopup:function(){return this._popup&&this._popup._close(),this},_openPopup:function(e){this._popup.setLatLng(e.latlng),this._map.openPopup(this._popup)}}),r.Browser.vml=!r.Browser.svg&&function(){try{var e=t.createElement("div");e.innerHTML='<v:shape adj="1"/>';var n=e.firstChild;return n.style.behavior="url(#default#VML)",n&&"object"==typeof n.adj}catch(r){return!1}}(),r.Path=r.Browser.svg||!r.Browser.vml?r.Path:r.Path.extend({statics:{VML:!0,CLIP_PADDING:.02},_createElement:function(){try{return t.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(e){return t.createElement("<lvml:"+e+' class="lvml">')}}catch(e){return function(e){return t.createElement("<"+e+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}}(),_initPath:function(){var e=this._container=this._createElement("shape");r.DomUtil.addClass(e,"leaflet-vml-shape"),this.options.clickable&&r.DomUtil.addClass(e,"leaflet-clickable"),e.coordsize="1 1",this._path=this._createElement("path"),e.appendChild(this._path),this._map._pathRoot.appendChild(e)},_initStyle:function(){this._updateStyle()},_updateStyle:function(){var e=this._stroke,t=this._fill,n=this.options,r=this._container;r.stroked=n.stroke,r.filled=n.fill,n.stroke?(e||(e=this._stroke=this._createElement("stroke"),e.endcap="round",r.appendChild(e)),e.weight=n.weight+"px",e.color=n.color,e.opacity=n.opacity,e.dashStyle=n.dashArray?n.dashArray instanceof Array?n.dashArray.join(" "):n.dashArray.replace(/ *, */g," "):""):e&&(r.removeChild(e),this._stroke=null),n.fill?(t||(t=this._fill=this._createElement("fill"),r.appendChild(t)),t.color=n.fillColor||n.color,t.opacity=n.fillOpacity):t&&(r.removeChild(t),this._fill=null)},_updatePath:function(){var e=this._container.style;e.display="none",this._path.v=this.getPathString()+" ",e.display=""}}),r.Map.include(r.Browser.svg||!r.Browser.vml?{}:{_initPathRoot:function(){if(!this._pathRoot){var e=this._pathRoot=t.createElement("div");e.className="leaflet-vml-container",this._panes.overlayPane.appendChild(e),this.on("moveend",this._updatePathViewport),this._updatePathViewport()}}}),r.Browser.canvas=function(){return!!t.createElement("canvas").getContext}(),r.Path=r.Path.SVG&&!e.L_PREFER_CANVAS||!r.Browser.canvas?r.Path:r.Path.extend({statics:{CANVAS:!0,SVG:!1},redraw:function(){return this._map&&(this.projectLatlngs(),this._requestUpdate()),this},setStyle:function(e){return r.setOptions(this,e),this._map&&(this._updateStyle(),this._requestUpdate()),this},onRemove:function(e){e.off("viewreset",this.projectLatlngs,this).off("moveend",this._updatePath,this),this.options.clickable&&this._map.off("click",this._onClick,this),this._requestUpdate(),this._map=null},_requestUpdate:function(){this._map&&!r.Path._updateRequest&&(r.Path._updateRequest=r.Util.requestAnimFrame(this._fireMapMoveEnd,this._map))},_fireMapMoveEnd:function(){r.Path._updateRequest=null,this.fire("moveend")},_initElements:function(){this._map._initPathRoot(),this._ctx=this._map._canvasCtx},_updateStyle:function(){var e=this.options;e.stroke&&(this._ctx.lineWidth=e.weight,this._ctx.strokeStyle=e.color),e.fill&&(this._ctx.fillStyle=e.fillColor||e.color)},_drawPath:function(){var e,t,n,i,s,o;for(this._ctx.beginPath(),e=0,n=this._parts.length;n>e;e++){for(t=0,i=this._parts[e].length;i>t;t++)s=this._parts[e][t],o=(0===t?"move":"line")+"To",this._ctx[o](s.x,s.y);this instanceof r.Polygon&&this._ctx.closePath()}},_checkIfEmpty:function(){return!this._parts.length},_updatePath:function(){if(!this._checkIfEmpty()){var e=this._ctx,t=this.options;this._drawPath(),e.save(),this._updateStyle(),t.fill&&(e.globalAlpha=t.fillOpacity,e.fill()),t.stroke&&(e.globalAlpha=t.opacity,e.stroke()),e.restore()}},_initEvents:function(){this.options.clickable&&this._map.on("click",this._onClick,this)},_onClick:function(e){this._containsPoint(e.layerPoint)&&this.fire("click",{latlng:e.latlng,layerPoint:e.layerPoint,containerPoint:e.containerPoint,originalEvent:e})}}),r.Map.include(r.Path.SVG&&!e.L_PREFER_CANVAS||!r.Browser.canvas?{}:{_initPathRoot:function(){var e,n=this._pathRoot;n||(n=this._pathRoot=t.createElement("canvas"),n.style.position="absolute",e=this._canvasCtx=n.getContext("2d"),e.lineCap="round",e.lineJoin="round",this._panes.overlayPane.appendChild(n),this.options.zoomAnimation&&(this._pathRoot.className="leaflet-zoom-animated",this.on("zoomanim",this._animatePathZoom),this.on("zoomend",this._endPathZoom)),this.on("moveend",this._updateCanvasViewport),this._updateCanvasViewport())},_updateCanvasViewport:function(){if(!this._pathZooming){this._updatePathViewport();var e=this._pathViewport,t=e.min,n=e.max.subtract(t),i=this._pathRoot;r.DomUtil.setPosition(i,t),i.width=n.x,i.height=n.y,i.getContext("2d").translate(-t.x,-t.y)}}}),r.LineUtil={simplify:function(e,t){if(!t||!e.length)return e.slice();var n=t*t;return e=this._reducePoints(e,n),e=this._simplifyDP(e,n)},pointToSegmentDistance:function(e,t,n){return Math.sqrt(this._sqClosestPointOnSegment(e,t,n,!0))},closestPointOnSegment:function(e,t,n){return this._sqClosestPointOnSegment(e,t,n)},_simplifyDP:function(e,t){var r=e.length,i=typeof Uint8Array!=n+""?Uint8Array:Array,s=new i(r);s[0]=s[r-1]=1,this._simplifyDPStep(e,s,t,0,r-1);var o,u=[];for(o=0;r>o;o++)s[o]&&u.push(e[o]);return u},_simplifyDPStep:function(e,t,n,r,i){var s,o,u,a=0;for(o=r+1;i-1>=o;o++)u=this._sqClosestPointOnSegment(e[o],e[r],e[i],!0),u>a&&(s=o,a=u);a>n&&(t[s]=1,this._simplifyDPStep(e,t,n,r,s),this._simplifyDPStep(e,t,n,s,i))},_reducePoints:function(e,t){for(var n=[e[0]],r=1,i=0,s=e.length;s>r;r++)this._sqDist(e[r],e[i])>t&&(n.push(e[r]),i=r);return s-1>i&&n.push(e[s-1]),n},clipSegment:function(e,t,n,r){var i,s,o,u=r?this._lastCode:this._getBitCode(e,n),a=this._getBitCode(t,n);for(this._lastCode=a;;){if(!(u|a))return[e,t];if(u&a)return!1;i=u||a,s=this._getEdgeIntersection(e,t,i,n),o=this._getBitCode(s,n),i===u?(e=s,u=o):(t=s,a=o)}},_getEdgeIntersection:function(e,t,i,s){var o=t.x-e.x,u=t.y-e.y,a=s.min,f=s.max;return 8&i?new r.Point(e.x+o*(f.y-e.y)/u,f.y):4&i?new r.Point(e.x+o*(a.y-e.y)/u,a.y):2&i?new r.Point(f.x,e.y+u*(f.x-e.x)/o):1&i?new r.Point(a.x,e.y+u*(a.x-e.x)/o):n},_getBitCode:function(e,t){var n=0;return e.x<t.min.x?n|=1:e.x>t.max.x&&(n|=2),e.y<t.min.y?n|=4:e.y>t.max.y&&(n|=8),n},_sqDist:function(e,t){var n=t.x-e.x,r=t.y-e.y;return n*n+r*r},_sqClosestPointOnSegment:function(e,t,n,i){var s,o=t.x,u=t.y,a=n.x-o,f=n.y-u,l=a*a+f*f;return l>0&&(s=((e.x-o)*a+(e.y-u)*f)/l,s>1?(o=n.x,u=n.y):s>0&&(o+=a*s,u+=f*s)),a=e.x-o,f=e.y-u,i?a*a+f*f:new r.Point(o,u)}},r.Polyline=r.Path.extend({initialize:function(e,t){r.Path.prototype.initialize.call(this,t),this._latlngs=this._convertLatLngs(e)},options:{smoothFactor:1,noClip:!1},projectLatlngs:function(){this._originalPoints=[];for(var e=0,t=this._latlngs.length;t>e;e++)this._originalPoints[e]=this._map.latLngToLayerPoint(this._latlngs[e])},getPathString:function(){for(var e=0,t=this._parts.length,n="";t>e;e++)n+=this._getPathPartStr(this._parts[e]);return n},getLatLngs:function(){return this._latlngs},setLatLngs:function(e){return this._latlngs=this._convertLatLngs(e),this.redraw()},addLatLng:function(e){return this._latlngs.push(r.latLng(e)),this.redraw()},spliceLatLngs:function(){var e=[].splice.apply(this._latlngs,arguments);return this._convertLatLngs(this._latlngs),this.redraw(),e},closestLayerPoint:function(e){for(var t,n,i=1/0,s=this._parts,o=null,u=0,a=s.length;a>u;u++)for(var f=s[u],l=1,c=f.length;c>l;l++){t=f[l-1],n=f[l];var h=r.LineUtil._sqClosestPointOnSegment(e,t,n,!0);i>h&&(i=h,o=r.LineUtil._sqClosestPointOnSegment(e,t,n))}return o&&(o.distance=Math.sqrt(i)),o},getBounds:function(){var e,t,n=new r.LatLngBounds,i=this.getLatLngs();for(e=0,t=i.length;t>e;e++)n.extend(i[e]);return n},_convertLatLngs:function(e){var t,n;for(t=0,n=e.length;n>t;t++){if(r.Util.isArray(e[t])&&"number"!=typeof e[t][0])return;e[t]=r.latLng(e[t])}return e},_initEvents:function(){r.Path.prototype._initEvents.call(this)},_getPathPartStr:function(e){for(var t,n=r.Path.VML,i=0,s=e.length,o="";s>i;i++)t=e[i],n&&t._round(),o+=(i?"L":"M")+t.x+" "+t.y;return o},_clipPoints:function(){var e,t,i,s=this._originalPoints,o=s.length;if(this.options.noClip)return this._parts=[s],n;this._parts=[];var u=this._parts,a=this._map._pathViewport,f=r.LineUtil;for(e=0,t=0;o-1>e;e++)i=f.clipSegment(s[e],s[e+1],a,e),i&&(u[t]=u[t]||[],u[t].push(i[0]),(i[1]!==s[e+1]||e===o-2)&&(u[t].push(i[1]),t++))},_simplifyPoints:function(){for(var e=this._parts,t=r.LineUtil,n=0,i=e.length;i>n;n++)e[n]=t.simplify(e[n],this.options.smoothFactor)},_updatePath:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),r.Path.prototype._updatePath.call(this))}}),r.polyline=function(e,t){return new r.Polyline(e,t)},r.PolyUtil={},r.PolyUtil.clipPolygon=function(e,t){var n,i,s,o,u,a,f,l,c,h=[1,4,2,8],p=r.LineUtil;for(i=0,f=e.length;f>i;i++)e[i]._code=p._getBitCode(e[i],t);for(o=0;4>o;o++){for(l=h[o],n=[],i=0,f=e.length,s=f-1;f>i;s=i++)u=e[i],a=e[s],u._code&l?a._code&l||(c=p._getEdgeIntersection(a,u,l,t),c._code=p._getBitCode(c,t),n.push(c)):(a._code&l&&(c=p._getEdgeIntersection(a,u,l,t),c._code=p._getBitCode(c,t),n.push(c)),n.push(u));e=n}return e},r.Polygon=r.Polyline.extend({options:{fill:!0},initialize:function(e,t){r.Polyline.prototype.initialize.call(this,e,t),e&&r.Util.isArray(e[0])&&"number"!=typeof e[0][0]&&(this._latlngs=this._convertLatLngs(e[0]),this._holes=e.slice(1))},projectLatlngs:function(){if(r.Polyline.prototype.projectLatlngs.call(this),this._holePoints=[],this._holes){var e,t,n,i;for(e=0,n=this._holes.length;n>e;e++)for(this._holePoints[e]=[],t=0,i=this._holes[e].length;i>t;t++)this._holePoints[e][t]=this._map.latLngToLayerPoint(this._holes[e][t])}},_clipPoints:function(){var e=this._originalPoints,t=[];if(this._parts=[e].concat(this._holePoints),!this.options.noClip){for(var n=0,i=this._parts.length;i>n;n++){var s=r.PolyUtil.clipPolygon(this._parts[n],this._map._pathViewport);s.length&&t.push(s)}this._parts=t}},_getPathPartStr:function(e){var t=r.Polyline.prototype._getPathPartStr.call(this,e);return t+(r.Browser.svg?"z":"x")}}),r.polygon=function(e,t){return new r.Polygon(e,t)},function(){function e(e){return r.FeatureGroup.extend({initialize:function(e,t){this._layers={},this._options=t,this.setLatLngs(e)},setLatLngs:function(t){var n=0,r=t.length;for(this.eachLayer(function(e){r>n?e.setLatLngs(t[n++]):this.removeLayer(e)},this);r>n;)this.addLayer(new e(t[n++],this._options));return this}})}r.MultiPolyline=e(r.Polyline),r.MultiPolygon=e(r.Polygon),r.multiPolyline=function(e,t){return new r.MultiPolyline(e,t)},r.multiPolygon=function(e,t){return new r.MultiPolygon(e,t)}}(),r.Rectangle=r.Polygon.extend({initialize:function(e,t){r.Polygon.prototype.initialize.call(this,this._boundsToLatLngs(e),t)},setBounds:function(e){this.setLatLngs(this._boundsToLatLngs(e))},_boundsToLatLngs:function(e){return e=r.latLngBounds(e),[e.getSouthWest(),e.getNorthWest(),e.getNorthEast(),e.getSouthEast()]}}),r.rectangle=function(e,t){return new r.Rectangle(e,t)},r.Circle=r.Path.extend({initialize:function(e,t,n){r.Path.prototype.initialize.call(this,n),this._latlng=r.latLng(e),this._mRadius=t},options:{fill:!0},setLatLng:function(e){return this._latlng=r.latLng(e),this.redraw()},setRadius:function(e){return this._mRadius=e,this.redraw()},projectLatlngs:function(){var e=this._getLngRadius(),t=new r.LatLng(this._latlng.lat,this._latlng.lng-e),n=this._map.latLngToLayerPoint(t);this._point=this._map.latLngToLayerPoint(this._latlng),this._radius=Math.max(Math.round(this._point.x-n.x),1)},getBounds:function(){var e=this._getLngRadius(),t=360*(this._mRadius/40075017),n=this._latlng,i=new r.LatLng(n.lat-t,n.lng-e),s=new r.LatLng(n.lat+t,n.lng+e);return new r.LatLngBounds(i,s)},getLatLng:function(){return this._latlng},getPathString:function(){var e=this._point,t=this._radius;return this._checkIfEmpty()?"":r.Browser.svg?"M"+e.x+","+(e.y-t)+"A"+t+","+t+",0,1,1,"+(e.x-.1)+","+(e.y-t)+" z":(e._round(),t=Math.round(t),"AL "+e.x+","+e.y+" "+t+","+t+" 0,"+23592600)},getRadius:function(){return this._mRadius},_getLatRadius:function(){return 360*(this._mRadius/40075017)},_getLngRadius:function(){return this._getLatRadius()/Math.cos(r.LatLng.DEG_TO_RAD*this._latlng.lat)},_checkIfEmpty:function(){if(!this._map)return!1;var e=this._map._pathViewport,t=this._radius,n=this._point;return n.x-t>e.max.x||n.y-t>e.max.y||n.x+t<e.min.x||n.y+t<e.min.y}}),r.circle=function(e,t,n){return new r.Circle(e,t,n)},r.CircleMarker=r.Circle.extend({options:{radius:10,weight:2},initialize:function(e,t){r.Circle.prototype.initialize.call(this,e,null,t),this._radius=this.options.radius},projectLatlngs:function(){this._point=this._map.latLngToLayerPoint(this._latlng)},_updateStyle:function(){r.Circle.prototype._updateStyle.call(this),this.setRadius(this.options.radius)},setRadius:function(e){return this._radius=e,this.redraw()}}),r.circleMarker=function(e,t){return new r.CircleMarker(e,t)},r.Polyline.include(r.Path.CANVAS?{_containsPoint:function(e,t){var n,i,s,o,u,a,f,l=this.options.weight/2;for(r.Browser.touch&&(l+=10),n=0,o=this._parts.length;o>n;n++)for(f=this._parts[n],i=0,u=f.length,s=u-1;u>i;s=i++)if((t||0!==i)&&(a=r.LineUtil.pointToSegmentDistance(e,f[s],f[i]),l>=a))return!0;return!1}}:{}),r.Polygon.include(r.Path.CANVAS?{_containsPoint:function(e){var t,n,i,s,o,u,a,f,l=!1;if(r.Polyline.prototype._containsPoint.call(this,e,!0))return!0;for(s=0,a=this._parts.length;a>s;s++)for(t=this._parts[s],o=0,f=t.length,u=f-1;f>o;u=o++)n=t[o],i=t[u],n.y>e.y!=i.y>e.y&&e.x<(i.x-n.x)*(e.y-n.y)/(i.y-n.y)+n.x&&(l=!l);return l}}:{}),r.Circle.include(r.Path.CANVAS?{_drawPath:function(){var e=this._point;this._ctx.beginPath(),this._ctx.arc(e.x,e.y,this._radius,0,2*Math.PI,!1)},_containsPoint:function(e){var t=this._point,n=this.options.stroke?this.options.weight/2:0;return e.distanceTo(t)<=this._radius+n}}:{}),r.GeoJSON=r.FeatureGroup.extend({initialize:function(e,t){r.setOptions(this,t),this._layers={},e&&this.addData(e)},addData:function(e){var t,n,i=r.Util.isArray(e)?e:e.features;if(i){for(t=0,n=i.length;n>t;t++)(i[t].geometries||i[t].geometry)&&this.addData(i[t]);return this}var s=this.options;if(!s.filter||s.filter(e)){var o=r.GeoJSON.geometryToLayer(e,s.pointToLayer);return o.feature=e,o.defaultOptions=o.options,this.resetStyle(o),s.onEachFeature&&s.onEachFeature(e,o),this.addLayer(o)}},resetStyle:function(e){var t=this.options.style;t&&(r.Util.extend(e.options,e.defaultOptions),this._setLayerStyle(e,t))},setStyle:function(e){this.eachLayer(function(t){this._setLayerStyle(t,e)},this)},_setLayerStyle:function(e,t){"function"==typeof t&&(t=t(e.feature)),e.setStyle&&e.setStyle(t)}}),r.extend(r.GeoJSON,{geometryToLayer:function(e,t){var n,i,s,o,u,a="Feature"===e.type?e.geometry:e,f=a.coordinates,l=[];switch(a.type){case"Point":return n=this.coordsToLatLng(f),t?t(e,n):new r.Marker(n);case"MultiPoint":for(s=0,o=f.length;o>s;s++)n=this.coordsToLatLng(f[s]),u=t?t(e,n):new r.Marker(n),l.push(u);return new r.FeatureGroup(l);case"LineString":return i=this.coordsToLatLngs(f),new r.Polyline(i);case"Polygon":return i=this.coordsToLatLngs(f,1),new r.Polygon(i);case"MultiLineString":return i=this.coordsToLatLngs(f,1),new r.MultiPolyline(i);case"MultiPolygon":return i=this.coordsToLatLngs(f,2),new r.MultiPolygon(i);case"GeometryCollection":for(s=0,o=a.geometries.length;o>s;s++)u=this.geometryToLayer({geometry:a.geometries[s],type:"Feature",properties:e.properties},t),l.push(u);return new r.FeatureGroup(l);default:throw Error("Invalid GeoJSON object.")}},coordsToLatLng:function(e,t){var n=parseFloat(e[t?0:1]),i=parseFloat(e[t?1:0]);return new r.LatLng(n,i)},coordsToLatLngs:function(e,t,n){var r,i,s,o=[];for(i=0,s=e.length;s>i;i++)r=t?this.coordsToLatLngs(e[i],t-1,n):this.coordsToLatLng(e[i],n),o.push(r);return o}}),r.geoJson=function(e,t){return new r.GeoJSON(e,t)},r.DomEvent={addListener:function(e,t,i,s){var o,u,a,f=r.stamp(i),l="_leaflet_"+t+f;return e[l]?this:(o=function(t){return i.call(s||e,t||r.DomEvent._getEvent())},r.Browser.msTouch&&0===t.indexOf("touch")?this.addMsTouchListener(e,t,o,f):(r.Browser.touch&&"dblclick"===t&&this.addDoubleTapListener&&this.addDoubleTapListener(e,o,f),"addEventListener"in e?"mousewheel"===t?(e.addEventListener("DOMMouseScroll",o,!1),e.addEventListener(t,o,!1)):"mouseenter"===t||"mouseleave"===t?(u=o,a="mouseenter"===t?"mouseover":"mouseout",o=function(t){return r.DomEvent._checkMouse(e,t)?u(t):n},e.addEventListener(a,o,!1)):e.addEventListener(t,o,!1):"attachEvent"in e&&e.attachEvent("on"+t,o),e[l]=o,this))},removeListener:function(e,t,n){var i=r.stamp(n),s="_leaflet_"+t+i,o=e[s];if(o)return r.Browser.msTouch&&0===t.indexOf("touch")?this.removeMsTouchListener(e,t,i):r.Browser.touch&&"dblclick"===t&&this.removeDoubleTapListener?this.removeDoubleTapListener(e,i):"removeEventListener"in e?"mousewheel"===t?(e.removeEventListener("DOMMouseScroll",o,!1),e.removeEventListener(t,o,!1)):"mouseenter"===t||"mouseleave"===t?e.removeEventListener("mouseenter"===t?"mouseover":"mouseout",o,!1):e.removeEventListener(t,o,!1):"detachEvent"in e&&e.detachEvent("on"+t,o),e[s]=null,this},stopPropagation:function(e){return e.stopPropagation?e.stopPropagation():e.cancelBubble=!0,this},disableClickPropagation:function(e){for(var t=r.DomEvent.stopPropagation,n=r.Draggable.START.length-1;n>=0;n--)r.DomEvent.addListener(e,r.Draggable.START[n],t);return r.DomEvent.addListener(e,"click",t).addListener(e,"dblclick",t)},preventDefault:function(e){return e.preventDefault?e.preventDefault():e.returnValue=!1,this},stop:function(e){return r.DomEvent.preventDefault(e).stopPropagation(e)},getMousePosition:function(e,n){var i=t.body,s=t.documentElement,o=e.pageX?e.pageX:e.clientX+i.scrollLeft+s.scrollLeft,u=e.pageY?e.pageY:e.clientY+i.scrollTop+s.scrollTop,a=new r.Point(o,u);return n?a._subtract(r.DomUtil.getViewportOffset(n)):a},getWheelDelta:function(e){var t=0;return e.wheelDelta&&(t=e.wheelDelta/120),e.detail&&(t=-e.detail/3),t},_checkMouse:function(e,t){var n=t.relatedTarget;if(!n)return!0;try{for(;n&&n!==e;)n=n.parentNode}catch(r){return!1}return n!==e},_getEvent:function(){var t=e.event;if(!t)for(var n=arguments.callee.caller;n&&(t=n.arguments[0],!t||e.Event!==t.constructor);)n=n.caller;return t}},r.DomEvent.on=r.DomEvent.addListener,r.DomEvent.off=r.DomEvent.removeListener,r.Draggable=r.Class.extend({includes:r.Mixin.Events,statics:{START:r.Browser.touch?["touchstart","mousedown"]:["mousedown"],END:{mousedown:"mouseup",touchstart:"touchend",MSPointerDown:"touchend"},MOVE:{mousedown:"mousemove",touchstart:"touchmove",MSPointerDown:"touchmove"},TAP_TOLERANCE:15},initialize:function(e,t,n){this._element=e,this._dragStartTarget=t||e,this._longPress=n&&!r.Browser.msTouch},enable:function(){if(!this._enabled){for(var e=r.Draggable.START.length-1;e>=0;e--)r.DomEvent.on(this._dragStartTarget,r.Draggable.START[e],this._onDown,this);this._enabled=!0}},disable:function(){if(this._enabled){for(var e=r.Draggable.START.length-1;e>=0;e--)r.DomEvent.off(this._dragStartTarget,r.Draggable.START[e],this._onDown,this);this._enabled=!1,this._moved=!1}},_onDown:function(e){if(!(!r.Browser.touch&&e.shiftKey||1!==e.which&&1!==e.button&&!e.touches||(r.DomEvent.preventDefault(e),r.DomEvent.stopPropagation(e),r.Draggable._disabled))){if(this._simulateClick=!0,e.touches&&e.touches.length>1)return this._simulateClick=!1,clearTimeout(this._longPressTimeout),n;var i=e.touches&&1===e.touches.length?e.touches[0]:e,s=i.target;r.Browser.touch&&"a"===s.tagName.toLowerCase()&&r.DomUtil.addClass(s,"leaflet-active"),this._moved=!1,this._moving||(this._startPoint=new r.Point(i.clientX,i.clientY),this._startPos=this._newPos=r.DomUtil.getPosition(this._element),e.touches&&1===e.touches.length&&r.Browser.touch&&this._longPress&&(this._longPressTimeout=setTimeout(r.bind(function(){var e=this._newPos&&this._newPos.distanceTo(this._startPos)||0;r.Draggable.TAP_TOLERANCE>e&&(this._simulateClick=!1,this._onUp(),this._simulateEvent("contextmenu",i))},this),1e3)),r.DomEvent.on(t,r.Draggable.MOVE[e.type],this._onMove,this),r.DomEvent.on(t,r.Draggable.END[e.type],this._onUp,this))}},_onMove:function(e){if(!(e.touches&&e.touches.length>1)){var t=e.touches&&1===e.touches.length?e.touches[0]:e,n=new r.Point(t.clientX,t.clientY),i=n.subtract(this._startPoint);(i.x||i.y)&&(r.DomEvent.preventDefault(e),this._moved||(this.fire("dragstart"),this._moved=!0,this._startPos=r.DomUtil.getPosition(this._element).subtract(i),r.Browser.touch||(r.DomUtil.disableTextSelection(),this._setMovingCursor())),this._newPos=this._startPos.add(i),this._moving=!0,r.Util.cancelAnimFrame(this._animRequest),this._animRequest=r.Util.requestAnimFrame(this._updatePosition,this,!0,this._dragStartTarget))}},_updatePosition:function(){this.fire("predrag"),r.DomUtil.setPosition(this._element,this._newPos),this.fire("drag")},_onUp:function(e){var n;if(clearTimeout(this._longPressTimeout),this._simulateClick&&e.changedTouches){var i=e.changedTouches[0],s=i.target,o=this._newPos&&this._newPos.distanceTo(this._startPos)||0;"a"===s.tagName.toLowerCase()&&r.DomUtil.removeClass(s,"leaflet-active"),r.Draggable.TAP_TOLERANCE>o&&(n=i)}r.Browser.touch||(r.DomUtil.enableTextSelection(),this._restoreCursor());for(var u in r.Draggable.MOVE)r.Draggable.MOVE.hasOwnProperty(u)&&(r.DomEvent.off(t,r.Draggable.MOVE[u],this._onMove),r.DomEvent.off(t,r.Draggable.END[u],this._onUp));this._moved&&(r.Util.cancelAnimFrame(this._animRequest),this.fire("dragend")),this._moving=!1,n&&(this._moved=!1,this._simulateEvent("click",n))},_setMovingCursor:function(){r.DomUtil.addClass(t.body,"leaflet-dragging")},_restoreCursor:function(){r.DomUtil.removeClass(t.body,"leaflet-dragging")},_simulateEvent:function(n,r){var i=t.createEvent("MouseEvents");i.initMouseEvent(n,!0,!0,e,1,r.screenX,r.screenY,r.clientX,r.clientY,!1,!1,!1,!1,0,null),r.target.dispatchEvent(i)}}),r.Handler=r.Class.extend({initialize:function(e){this._map=e},enable:function(){this._enabled||(this._enabled=!0,this.addHooks())},disable:function(){this._enabled&&(this._enabled=!1,this.removeHooks())},enabled:function(){return!!this._enabled}}),r.Map.mergeOptions({dragging:!0,inertia:!r.Browser.android23,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,inertiaThreshold:r.Browser.touch?32:18,easeLinearity:.25,longPress:!0,worldCopyJump:!1}),r.Map.Drag=r.Handler.extend({addHooks:function(){if(!this._draggable){var e=this._map;this._draggable=new r.Draggable(e._mapPane,e._container,e.options.longPress),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),e.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDrag,this),e.on("viewreset",this._onViewReset,this))}this._draggable.enable()},removeHooks:function(){this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},_onDragStart:function(){var e=this._map;e._panAnim&&e._panAnim.stop(),e.fire("movestart").fire("dragstart"),e.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(){if(this._map.options.inertia){var e=this._lastTime=+(new Date),t=this._lastPos=this._draggable._newPos;this._positions.push(t),this._times.push(e),e-this._times[0]>200&&(this._positions.shift(),this._times.shift())}this._map.fire("move").fire("drag")},_onViewReset:function(){var e=this._map.getSize()._divideBy(2),t=this._map.latLngToLayerPoint(new r.LatLng(0,0));this._initialWorldOffset=t.subtract(e).x,this._worldWidth=this._map.project(new r.LatLng(0,180)).x},_onPreDrag:function(){var e=this._worldWidth,t=Math.round(e/2),n=this._initialWorldOffset,r=this._draggable._newPos.x,i=(r-t+n)%e+t-n,s=(r+t+n)%e-t-n,o=Math.abs(i+n)<Math.abs(s+n)?i:s;this._draggable._newPos.x=o},_onDragEnd:function(){var e=this._map,t=e.options,n=+(new Date)-this._lastTime,i=!t.inertia||n>t.inertiaThreshold||!this._positions[0];if(i)e.fire("moveend");else{var s=this._lastPos.subtract(this._positions[0]),o=(this._lastTime+n-this._times[0])/1e3,u=t.easeLinearity,a=s.multiplyBy(u/o),f=a.distanceTo(new r.Point(0,0)),l=Math.min(t.inertiaMaxSpeed,f),c=a.multiplyBy(l/f),h=l/(t.inertiaDeceleration*u),p=c.multiplyBy(-h/2).round();r.Util.requestAnimFrame(function(){e.panBy(p,h,u)})}e.fire("dragend"),t.maxBounds&&r.Util.requestAnimFrame(this._panInsideMaxBounds,e,!0,e._container)},_panInsideMaxBounds:function(){this.panInsideBounds(this.options.maxBounds)}}),r.Map.addInitHook("addHandler","dragging",r.Map.Drag),r.Map.mergeOptions({doubleClickZoom:!0}),r.Map.DoubleClickZoom=r.Handler.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick)},_onDoubleClick:function(e){this.setView(e.latlng,this._zoom+1)}}),r.Map.addInitHook("addHandler","doubleClickZoom",r.Map.DoubleClickZoom),r.Map.mergeOptions({scrollWheelZoom:!0}),r.Map.ScrollWheelZoom=r.Handler.extend({addHooks:function(){r.DomEvent.on(this._map._container,"mousewheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){r.DomEvent.off(this._map._container,"mousewheel",this._onWheelScroll)},_onWheelScroll:function(e){var t=r.DomEvent.getWheelDelta(e);this._delta+=t,this._lastMousePos=this._map.mouseEventToContainerPoint(e),this._startTime||(this._startTime=+(new Date));var n=Math.max(40-(+(new Date)-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout
(r.bind(this._performZoom,this),n),r.DomEvent.preventDefault(e),r.DomEvent.stopPropagation(e)},_performZoom:function(){var e=this._map,t=this._delta,n=e.getZoom();if(t=t>0?Math.ceil(t):Math.round(t),t=Math.max(Math.min(t,4),-4),t=e._limitZoom(n+t)-n,this._delta=0,this._startTime=null,t){var r=n+t,i=this._getCenterForScrollWheelZoom(r);e.setView(i,r)}},_getCenterForScrollWheelZoom:function(e){var t=this._map,n=t.getZoomScale(e),r=t.getSize()._divideBy(2),i=this._lastMousePos._subtract(r)._multiplyBy(1-1/n),s=t._getTopLeftPoint()._add(r)._add(i);return t.unproject(s)}}),r.Map.addInitHook("addHandler","scrollWheelZoom",r.Map.ScrollWheelZoom),r.extend(r.DomEvent,{_touchstart:r.Browser.msTouch?"MSPointerDown":"touchstart",_touchend:r.Browser.msTouch?"MSPointerUp":"touchend",addDoubleTapListener:function(e,n,i){function s(e){var t;if(r.Browser.msTouch?(d.push(e.pointerId),t=d.length):t=e.touches.length,!(t>1)){var n=Date.now(),i=n-(u||n);a=e.touches?e.touches[0]:e,f=i>0&&l>=i,u=n}}function o(e){if(r.Browser.msTouch){var t=d.indexOf(e.pointerId);if(-1===t)return;d.splice(t,1)}if(f){if(r.Browser.msTouch){var i,s={};for(var o in a)i=a[o],s[o]="function"==typeof i?i.bind(a):i;a=s}a.type="dblclick",n(a),u=null}}var u,a,f=!1,l=250,c="_leaflet_",h=this._touchstart,p=this._touchend,d=[];e[c+h+i]=s,e[c+p+i]=o;var v=r.Browser.msTouch?t.documentElement:e;return e.addEventListener(h,s,!1),v.addEventListener(p,o,!1),r.Browser.msTouch&&v.addEventListener("MSPointerCancel",o,!1),this},removeDoubleTapListener:function(e,n){var i="_leaflet_";return e.removeEventListener(this._touchstart,e[i+this._touchstart+n],!1),(r.Browser.msTouch?t.documentElement:e).removeEventListener(this._touchend,e[i+this._touchend+n],!1),r.Browser.msTouch&&t.documentElement.removeEventListener("MSPointerCancel",e[i+this._touchend+n],!1),this}}),r.extend(r.DomEvent,{_msTouches:[],_msDocumentListener:!1,addMsTouchListener:function(e,t,n,r){switch(t){case"touchstart":return this.addMsTouchListenerStart(e,t,n,r);case"touchend":return this.addMsTouchListenerEnd(e,t,n,r);case"touchmove":return this.addMsTouchListenerMove(e,t,n,r);default:throw"Unknown touch event type"}},addMsTouchListenerStart:function(e,n,r,i){var s="_leaflet_",o=this._msTouches,u=function(e){for(var t=!1,n=0;o.length>n;n++)if(o[n].pointerId===e.pointerId){t=!0;break}t||o.push(e),e.touches=o.slice(),e.changedTouches=[e],r(e)};if(e[s+"touchstart"+i]=u,e.addEventListener("MSPointerDown",u,!1),!this._msDocumentListener){var a=function(e){for(var t=0;o.length>t;t++)if(o[t].pointerId===e.pointerId){o.splice(t,1);break}};t.documentElement.addEventListener("MSPointerUp",a,!1),t.documentElement.addEventListener("MSPointerCancel",a,!1),this._msDocumentListener=!0}return this},addMsTouchListenerMove:function(e,t,n,r){function i(e){if(e.pointerType!==e.MSPOINTER_TYPE_MOUSE||0!==e.buttons){for(var t=0;o.length>t;t++)if(o[t].pointerId===e.pointerId){o[t]=e;break}e.touches=o.slice(),e.changedTouches=[e],n(e)}}var s="_leaflet_",o=this._msTouches;return e[s+"touchmove"+r]=i,e.addEventListener("MSPointerMove",i,!1),this},addMsTouchListenerEnd:function(e,t,n,r){var i="_leaflet_",s=this._msTouches,o=function(e){for(var t=0;s.length>t;t++)if(s[t].pointerId===e.pointerId){s.splice(t,1);break}e.touches=s.slice(),e.changedTouches=[e],n(e)};return e[i+"touchend"+r]=o,e.addEventListener("MSPointerUp",o,!1),e.addEventListener("MSPointerCancel",o,!1),this},removeMsTouchListener:function(e,t,n){var r="_leaflet_",i=e[r+t+n];switch(t){case"touchstart":e.removeEventListener("MSPointerDown",i,!1);break;case"touchmove":e.removeEventListener("MSPointerMove",i,!1);break;case"touchend":e.removeEventListener("MSPointerUp",i,!1),e.removeEventListener("MSPointerCancel",i,!1)}return this}}),r.Map.mergeOptions({touchZoom:r.Browser.touch&&!r.Browser.android23}),r.Map.TouchZoom=r.Handler.extend({addHooks:function(){r.DomEvent.on(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){r.DomEvent.off(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(e){var n=this._map;if(e.touches&&2===e.touches.length&&!n._animatingZoom&&!this._zooming){var i=n.mouseEventToLayerPoint(e.touches[0]),s=n.mouseEventToLayerPoint(e.touches[1]),o=n._getCenterLayerPoint();this._startCenter=i.add(s)._divideBy(2),this._startDist=i.distanceTo(s),this._moved=!1,this._zooming=!0,this._centerOffset=o.subtract(this._startCenter),n._panAnim&&n._panAnim.stop(),r.DomEvent.on(t,"touchmove",this._onTouchMove,this).on(t,"touchend",this._onTouchEnd,this),r.DomEvent.preventDefault(e)}},_onTouchMove:function(e){if(e.touches&&2===e.touches.length){var t=this._map,n=t.mouseEventToLayerPoint(e.touches[0]),i=t.mouseEventToLayerPoint(e.touches[1]);this._scale=n.distanceTo(i)/this._startDist,this._delta=n._add(i)._divideBy(2)._subtract(this._startCenter),1!==this._scale&&(this._moved||(r.DomUtil.addClass(t._mapPane,"leaflet-zoom-anim leaflet-touching"),t.fire("movestart").fire("zoomstart")._prepareTileBg(),this._moved=!0),r.Util.cancelAnimFrame(this._animRequest),this._animRequest=r.Util.requestAnimFrame(this._updateOnMove,this,!0,this._map._container),r.DomEvent.preventDefault(e))}},_updateOnMove:function(){var e=this._map,t=this._getScaleOrigin(),n=e.layerPointToLatLng(t);e.fire("zoomanim",{center:n,zoom:e.getScaleZoom(this._scale)}),e._tileBg.style[r.DomUtil.TRANSFORM]=r.DomUtil.getTranslateString(this._delta)+" "+r.DomUtil.getScaleString(this._scale,this._startCenter)},_onTouchEnd:function(){if(this._moved&&this._zooming){var e=this._map;this._zooming=!1,r.DomUtil.removeClass(e._mapPane,"leaflet-touching"),r.DomEvent.off(t,"touchmove",this._onTouchMove).off(t,"touchend",this._onTouchEnd);var n=this._getScaleOrigin(),i=e.layerPointToLatLng(n),s=e.getZoom(),o=e.getScaleZoom(this._scale)-s,u=o>0?Math.ceil(o):Math.floor(o),a=e._limitZoom(s+u);e.fire("zoomanim",{center:i,zoom:a}),e._runAnimation(i,a,e.getZoomScale(a)/this._scale,n,!0)}},_getScaleOrigin:function(){var e=this._centerOffset.subtract(this._delta).divideBy(this._scale);return this._startCenter.add(e)}}),r.Map.addInitHook("addHandler","touchZoom",r.Map.TouchZoom),r.Map.mergeOptions({boxZoom:!0}),r.Map.BoxZoom=r.Handler.extend({initialize:function(e){this._map=e,this._container=e._container,this._pane=e._panes.overlayPane},addHooks:function(){r.DomEvent.on(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){r.DomEvent.off(this._container,"mousedown",this._onMouseDown)},_onMouseDown:function(e){return!e.shiftKey||1!==e.which&&1!==e.button?!1:(r.DomUtil.disableTextSelection(),this._startLayerPoint=this._map.mouseEventToLayerPoint(e),this._box=r.DomUtil.create("div","leaflet-zoom-box",this._pane),r.DomUtil.setPosition(this._box,this._startLayerPoint),this._container.style.cursor="crosshair",r.DomEvent.on(t,"mousemove",this._onMouseMove,this).on(t,"mouseup",this._onMouseUp,this).preventDefault(e),this._map.fire("boxzoomstart"),n)},_onMouseMove:function(e){var t=this._startLayerPoint,n=this._box,i=this._map.mouseEventToLayerPoint(e),s=i.subtract(t),o=new r.Point(Math.min(i.x,t.x),Math.min(i.y,t.y));r.DomUtil.setPosition(n,o),n.style.width=Math.max(0,Math.abs(s.x)-4)+"px",n.style.height=Math.max(0,Math.abs(s.y)-4)+"px"},_onMouseUp:function(e){this._pane.removeChild(this._box),this._container.style.cursor="",r.DomUtil.enableTextSelection(),r.DomEvent.off(t,"mousemove",this._onMouseMove).off(t,"mouseup",this._onMouseUp);var n=this._map,i=n.mouseEventToLayerPoint(e);if(!this._startLayerPoint.equals(i)){var s=new r.LatLngBounds(n.layerPointToLatLng(this._startLayerPoint),n.layerPointToLatLng(i));n.fitBounds(s),n.fire("boxzoomend",{boxZoomBounds:s})}}}),r.Map.addInitHook("addHandler","boxZoom",r.Map.BoxZoom),r.Map.mergeOptions({keyboard:!0,keyboardPanOffset:80,keyboardZoomOffset:1}),r.Map.Keyboard=r.Handler.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61],zoomOut:[189,109,173]},initialize:function(e){this._map=e,this._setPanOffset(e.options.keyboardPanOffset),this._setZoomOffset(e.options.keyboardZoomOffset)},addHooks:function(){var e=this._map._container;-1===e.tabIndex&&(e.tabIndex="0"),r.DomEvent.on(e,"focus",this._onFocus,this).on(e,"blur",this._onBlur,this).on(e,"mousedown",this._onMouseDown,this),this._map.on("focus",this._addHooks,this).on("blur",this._removeHooks,this)},removeHooks:function(){this._removeHooks();var e=this._map._container;r.DomEvent.off(e,"focus",this._onFocus,this).off(e,"blur",this._onBlur,this).off(e,"mousedown",this._onMouseDown,this),this._map.off("focus",this._addHooks,this).off("blur",this._removeHooks,this)},_onMouseDown:function(){this._focused||this._map._container.focus()},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanOffset:function(e){var t,n,r=this._panKeys={},i=this.keyCodes;for(t=0,n=i.left.length;n>t;t++)r[i.left[t]]=[-1*e,0];for(t=0,n=i.right.length;n>t;t++)r[i.right[t]]=[e,0];for(t=0,n=i.down.length;n>t;t++)r[i.down[t]]=[0,e];for(t=0,n=i.up.length;n>t;t++)r[i.up[t]]=[0,-1*e]},_setZoomOffset:function(e){var t,n,r=this._zoomKeys={},i=this.keyCodes;for(t=0,n=i.zoomIn.length;n>t;t++)r[i.zoomIn[t]]=e;for(t=0,n=i.zoomOut.length;n>t;t++)r[i.zoomOut[t]]=-e},_addHooks:function(){r.DomEvent.on(t,"keydown",this._onKeyDown,this)},_removeHooks:function(){r.DomEvent.off(t,"keydown",this._onKeyDown,this)},_onKeyDown:function(e){var t=e.keyCode,n=this._map;if(this._panKeys.hasOwnProperty(t))n.panBy(this._panKeys[t]),n.options.maxBounds&&n.panInsideBounds(n.options.maxBounds);else{if(!this._zoomKeys.hasOwnProperty(t))return;n.setZoom(n.getZoom()+this._zoomKeys[t])}r.DomEvent.stop(e)}}),r.Map.addInitHook("addHandler","keyboard",r.Map.Keyboard),r.Handler.MarkerDrag=r.Handler.extend({initialize:function(e){this._marker=e},addHooks:function(){var e=this._marker._icon;this._draggable||(this._draggable=(new r.Draggable(e,e)).on("dragstart",this._onDragStart,this).on("drag",this._onDrag,this).on("dragend",this._onDragEnd,this)),this._draggable.enable()},removeHooks:function(){this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},_onDragStart:function(){this._marker.closePopup().fire("movestart").fire("dragstart")},_onDrag:function(){var e=this._marker,t=e._shadow,n=r.DomUtil.getPosition(e._icon),i=e._map.layerPointToLatLng(n);t&&r.DomUtil.setPosition(t,n),e._latlng=i,e.fire("move",{latlng:i}).fire("drag")},_onDragEnd:function(){this._marker.fire("moveend").fire("dragend")}}),r.Handler.PolyEdit=r.Handler.extend({options:{icon:new r.DivIcon({iconSize:new r.Point(8,8),className:"leaflet-div-icon leaflet-editing-icon"})},initialize:function(e,t){this._poly=e,r.setOptions(this,t)},addHooks:function(){this._poly._map&&(this._markerGroup||this._initMarkers(),this._poly._map.addLayer(this._markerGroup))},removeHooks:function(){this._poly._map&&(this._poly._map.removeLayer(this._markerGroup),delete this._markerGroup,delete this._markers)},updateMarkers:function(){this._markerGroup.clearLayers(),this._initMarkers()},_initMarkers:function(){this._markerGroup||(this._markerGroup=new r.LayerGroup),this._markers=[];var e,t,n,i,s=this._poly._latlngs;for(e=0,n=s.length;n>e;e++)i=this._createMarker(s[e],e),i.on("click",this._onMarkerClick,this),this._markers.push(i);var o,u;for(e=0,t=n-1;n>e;t=e++)(0!==e||r.Polygon&&this._poly instanceof r.Polygon)&&(o=this._markers[t],u=this._markers[e],this._createMiddleMarker(o,u),this._updatePrevNext(o,u))},_createMarker:function(e,t){var n=new r.Marker(e,{draggable:!0,icon:this.options.icon});return n._origLatLng=e,n._index=t,n.on("drag",this._onMarkerDrag,this),n.on("dragend",this._fireEdit,this),this._markerGroup.addLayer(n),n},_fireEdit:function(){this._poly.fire("edit")},_onMarkerDrag:function(e){var t=e.target;r.extend(t._origLatLng,t._latlng),t._middleLeft&&t._middleLeft.setLatLng(this._getMiddleLatLng(t._prev,t)),t._middleRight&&t._middleRight.setLatLng(this._getMiddleLatLng(t,t._next)),this._poly.redraw()},_onMarkerClick:function(e){if(!(3>this._poly._latlngs.length)){var t=e.target,n=t._index;this._markerGroup.removeLayer(t),this._markers.splice(n,1),this._poly.spliceLatLngs(n,1),this._updateIndexes(n,-1),this._updatePrevNext(t._prev,t._next),t._middleLeft&&this._markerGroup.removeLayer(t._middleLeft),t._middleRight&&this._markerGroup.removeLayer(t._middleRight),t._prev&&t._next?this._createMiddleMarker(t._prev,t._next):t._prev?t._next||(t._prev._middleRight=null):t._next._middleLeft=null,this._poly.fire("edit")}},_updateIndexes:function(e,t){this._markerGroup.eachLayer(function(n){n._index>e&&(n._index+=t)})},_createMiddleMarker:function(e,t){var n,r,i,s=this._getMiddleLatLng(e,t),o=this._createMarker(s);o.setOpacity(.6),e._middleRight=t._middleLeft=o,r=function(){var r=t._index;o._index=r,o.off("click",n).on("click",this._onMarkerClick,this),s.lat=o.getLatLng().lat,s.lng=o.getLatLng().lng,this._poly.spliceLatLngs(r,0,s),this._markers.splice(r,0,o),o.setOpacity(1),this._updateIndexes(r,1),t._index++,this._updatePrevNext(e,o),this._updatePrevNext(o,t)},i=function(){o.off("dragstart",r,this),o.off("dragend",i,this),this._createMiddleMarker(e,o),this._createMiddleMarker(o,t)},n=function(){r.call(this),i.call(this),this._poly.fire("edit")},o.on("click",n,this).on("dragstart",r,this).on("dragend",i,this),this._markerGroup.addLayer(o)},_updatePrevNext:function(e,t){e&&(e._next=t),t&&(t._prev=e)},_getMiddleLatLng:function(e,t){var n=this._poly._map,r=n.latLngToLayerPoint(e.getLatLng()),i=n.latLngToLayerPoint(t.getLatLng());return n.layerPointToLatLng(r._add(i)._divideBy(2))}}),r.Polyline.addInitHook(function(){r.Handler.PolyEdit&&(this.editing=new r.Handler.PolyEdit(this),this.options.editable&&this.editing.enable()),this.on("add",function(){this.editing&&this.editing.enabled()&&this.editing.addHooks()}),this.on("remove",function(){this.editing&&this.editing.enabled()&&this.editing.removeHooks()})}),r.Control=r.Class.extend({options:{position:"topright"},initialize:function(e){r.setOptions(this,e)},getPosition:function(){return this.options.position},setPosition:function(e){var t=this._map;return t&&t.removeControl(this),this.options.position=e,t&&t.addControl(this),this},addTo:function(e){this._map=e;var t=this._container=this.onAdd(e),n=this.getPosition(),i=e._controlCorners[n];return r.DomUtil.addClass(t,"leaflet-control"),-1!==n.indexOf("bottom")?i.insertBefore(t,i.firstChild):i.appendChild(t),this},removeFrom:function(e){var t=this.getPosition(),n=e._controlCorners[t];return n.removeChild(this._container),this._map=null,this.onRemove&&this.onRemove(e),this}}),r.control=function(e){return new r.Control(e)},r.Map.include({addControl:function(e){return e.addTo(this),this},removeControl:function(e){return e.removeFrom(this),this},_initControlPos:function(){function e(e,s){var u=n+e+" "+n+s;t[e+s]=r.DomUtil.create("div",u,i)}var t=this._controlCorners={},n="leaflet-",i=this._controlContainer=r.DomUtil.create("div",n+"control-container",this._container);e("top","left"),e("top","right"),e("bottom","left"),e("bottom","right")}}),r.Control.Zoom=r.Control.extend({options:{position:"topleft"},onAdd:function(e){var t="leaflet-control-zoom",n="leaflet-bar",i=n+"-part",s=r.DomUtil.create("div",t+" "+n);return this._map=e,this._zoomInButton=this._createButton("+","Zoom in",t+"-in "+i+" "+i+"-top",s,this._zoomIn,this),this._zoomOutButton=this._createButton("-","Zoom out",t+"-out "+i+" "+i+"-bottom",s,this._zoomOut,this),e.on("zoomend",this._updateDisabled,this),s},onRemove:function(e){e.off("zoomend",this._updateDisabled,this)},_zoomIn:function(e){this._map.zoomIn(e.shiftKey?3:1)},_zoomOut:function(e){this._map.zoomOut(e.shiftKey?3:1)},_createButton:function(e,t,n,i,s,o){var u=r.DomUtil.create("a",n,i);u.innerHTML=e,u.href="#",u.title=t;var a=r.DomEvent.stopPropagation;return r.DomEvent.on(u,"click",a).on(u,"mousedown",a).on(u,"dblclick",a).on(u,"click",r.DomEvent.preventDefault).on(u,"click",s,o),u},_updateDisabled:function(){var e=this._map,t="leaflet-control-zoom-disabled";r.DomUtil.removeClass(this._zoomInButton,t),r.DomUtil.removeClass(this._zoomOutButton,t),e._zoom===e.getMinZoom()&&r.DomUtil.addClass(this._zoomOutButton,t),e._zoom===e.getMaxZoom()&&r.DomUtil.addClass(this._zoomInButton,t)}}),r.Map.mergeOptions({zoomControl:!0}),r.Map.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new r.Control.Zoom,this.addControl(this.zoomControl))}),r.control.zoom=function(e){return new r.Control.Zoom(e)},r.Control.Attribution=r.Control.extend({options:{position:"bottomright",prefix:'Powered by <a href="http://leafletjs.com">Leaflet</a>'},initialize:function(e){r.setOptions(this,e),this._attributions={}},onAdd:function(e){return this._container=r.DomUtil.create("div","leaflet-control-attribution"),r.DomEvent.disableClickPropagation(this._container),e.on("layeradd",this._onLayerAdd,this).on("layerremove",this._onLayerRemove,this),this._update(),this._container},onRemove:function(e){e.off("layeradd",this._onLayerAdd).off("layerremove",this._onLayerRemove)},setPrefix:function(e){return this.options.prefix=e,this._update(),this},addAttribution:function(e){return e?(this._attributions[e]||(this._attributions[e]=0),this._attributions[e]++,this._update(),this):n},removeAttribution:function(e){return e?(this._attributions[e]--,this._update(),this):n},_update:function(){if(this._map){var e=[];for(var t in this._attributions)this._attributions.hasOwnProperty(t)&&this._attributions[t]&&e.push(t);var n=[];this.options.prefix&&n.push(this.options.prefix),e.length&&n.push(e.join(", ")),this._container.innerHTML=n.join(" &#8212; ")}},_onLayerAdd:function(e){e.layer.getAttribution&&this.addAttribution(e.layer.getAttribution())},_onLayerRemove:function(e){e.layer.getAttribution&&this.removeAttribution(e.layer.getAttribution())}}),r.Map.mergeOptions({attributionControl:!0}),r.Map.addInitHook(function(){this.options.attributionControl&&(this.attributionControl=(new r.Control.Attribution).addTo(this))}),r.control.attribution=function(e){return new r.Control.Attribution(e)},r.Control.Scale=r.Control.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0,updateWhenIdle:!1},onAdd:function(e){this._map=e;var t="leaflet-control-scale",n=r.DomUtil.create("div",t),i=this.options;return this._addScales(i,t,n),e.on(i.updateWhenIdle?"moveend":"move",this._update,this),e.whenReady(this._update,this),n},onRemove:function(e){e.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(e,t,n){e.metric&&(this._mScale=r.DomUtil.create("div",t+"-line",n)),e.imperial&&(this._iScale=r.DomUtil.create("div",t+"-line",n))},_update:function(){var e=this._map.getBounds(),t=e.getCenter().lat,n=6378137*Math.PI*Math.cos(t*Math.PI/180),r=n*(e.getNorthEast().lng-e.getSouthWest().lng)/180,i=this._map.getSize(),s=this.options,o=0;i.x>0&&(o=r*(s.maxWidth/i.x)),this._updateScales(s,o)},_updateScales:function(e,t){e.metric&&t&&this._updateMetric(t),e.imperial&&t&&this._updateImperial(t)},_updateMetric:function(e){var t=this._getRoundNum(e);this._mScale.style.width=this._getScaleWidth(t/e)+"px",this._mScale.innerHTML=1e3>t?t+" m":t/1e3+" km"},_updateImperial:function(e){var t,n,r,i=3.2808399*e,s=this._iScale;i>5280?(t=i/5280,n=this._getRoundNum(t),s.style.width=this._getScaleWidth(n/t)+"px",s.innerHTML=n+" mi"):(r=this._getRoundNum(i),s.style.width=this._getScaleWidth(r/i)+"px",s.innerHTML=r+" ft")},_getScaleWidth:function(e){return Math.round(this.options.maxWidth*e)-10},_getRoundNum:function(e){var t=Math.pow(10,(Math.floor(e)+"").length-1),n=e/t;return n=n>=10?10:n>=5?5:n>=3?3:n>=2?2:1,t*n}}),r.control.scale=function(e){return new r.Control.Scale(e)},r.Control.Layers=r.Control.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0},initialize:function(e,t,n){r.setOptions(this,n),this._layers={},this._lastZIndex=0,this._handlingClick=!1;for(var i in e)e.hasOwnProperty(i)&&this._addLayer(e[i],i);for(i in t)t.hasOwnProperty(i)&&this._addLayer(t[i],i,!0)},onAdd:function(e){return this._initLayout(),this._update(),e.on("layeradd",this._onLayerChange,this).on("layerremove",this._onLayerChange,this),this._container},onRemove:function(e){e.off("layeradd",this._onLayerChange).off("layerremove",this._onLayerChange)},addBaseLayer:function(e,t){return this._addLayer(e,t),this._update(),this},addOverlay:function(e,t){return this._addLayer(e,t,!0),this._update(),this},removeLayer:function(e){var t=r.stamp(e);return delete this._layers[t],this._update(),this},_initLayout:function(){var e="leaflet-control-layers",t=this._container=r.DomUtil.create("div",e);r.Browser.touch?r.DomEvent.on(t,"click",r.DomEvent.stopPropagation):(r.DomEvent.disableClickPropagation(t),r.DomEvent.on(t,"mousewheel",r.DomEvent.stopPropagation));var n=this._form=r.DomUtil.create("form",e+"-list");if(this.options.collapsed){r.DomEvent.on(t,"mouseover",this._expand,this).on(t,"mouseout",this._collapse,this);var i=this._layersLink=r.DomUtil.create("a",e+"-toggle",t);i.href="#",i.title="Layers",r.Browser.touch?r.DomEvent.on(i,"click",r.DomEvent.stopPropagation).on(i,"click",r.DomEvent.preventDefault).on(i,"click",this._expand,this):r.DomEvent.on(i,"focus",this._expand,this),this._map.on("movestart",this._collapse,this)}else this._expand();this._baseLayersList=r.DomUtil.create("div",e+"-base",n),this._separator=r.DomUtil.create("div",e+"-separator",n),this._overlaysList=r.DomUtil.create("div",e+"-overlays",n),t.appendChild(n)},_addLayer:function(e,t,n){var i=r.stamp(e);this._layers[i]={layer:e,name:t,overlay:n},this.options.autoZIndex&&e.setZIndex&&(this._lastZIndex++,e.setZIndex(this._lastZIndex))},_update:function(){if(this._container){this._baseLayersList.innerHTML="",this._overlaysList.innerHTML="";var e=!1,t=!1;for(var n in this._layers)if(this._layers.hasOwnProperty(n)){var r=this._layers[n];this._addItem(r),t=t||r.overlay,e=e||!r.overlay}this._separator.style.display=t&&e?"":"none"}},_onLayerChange:function(e){var t=r.stamp(e.layer);this._layers[t]&&!this._handlingClick&&this._update()},_createRadioElement:function(e,n){var r='<input type="radio" class="leaflet-control-layers-selector" name="'+e+'"';n&&(r+=' checked="checked"'),r+="/>";var i=t.createElement("div");return i.innerHTML=r,i.firstChild},_addItem:function(e){var n,i=t.createElement("label"),s=this._map.hasLayer(e.layer);e.overlay?(n=t.createElement("input"),n.type="checkbox",n.className="leaflet-control-layers-selector",n.defaultChecked=s):n=this._createRadioElement("leaflet-base-layers",s),n.layerId=r.stamp(e.layer),r.DomEvent.on(n,"click",this._onInputClick,this);var o=t.createElement("span");o.innerHTML=" "+e.name,i.appendChild(n),i.appendChild(o);var u=e.overlay?this._overlaysList:this._baseLayersList;return u.appendChild(i),i},_onInputClick:function(){var e,t,n,r,i=this._form.getElementsByTagName("input"),s=i.length;for(this._handlingClick=!0,e=0;s>e;e++)t=i[e],n=this._layers[t.layerId],t.checked&&!this._map.hasLayer(n.layer)?(this._map.addLayer(n.layer),n.overlay||(r=n.layer)):!t.checked&&this._map.hasLayer(n.layer)&&this._map.removeLayer(n.layer);r&&(this._map.setZoom(this._map.getZoom()),this._map.fire("baselayerchange",{layer:r})),this._handlingClick=!1},_expand:function(){r.DomUtil.addClass(this._container,"leaflet-control-layers-expanded")},_collapse:function(){this._container.className=this._container.className.replace(" leaflet-control-layers-expanded","")}}),r.control.layers=function(e,t,n){return new r.Control.Layers(e,t,n)},r.PosAnimation=r.Class.extend({includes:r.Mixin.Events,run:function(e,t,n,i){this.stop(),this._el=e,this._inProgress=!0,this.fire("start"),e.style[r.DomUtil.TRANSITION]="all "+(n||.25)+"s cubic-bezier(0,0,"+(i||.5)+",1)",r.DomEvent.on(e,r.DomUtil.TRANSITION_END,this._onTransitionEnd,this),r.DomUtil.setPosition(e,t),r.Util.falseFn(e.offsetWidth),this._stepTimer=setInterval(r.bind(this.fire,this,"step"),50)},stop:function(){this._inProgress&&(r.DomUtil.setPosition(this._el,this._getPos()),this._onTransitionEnd(),r.Util.falseFn(this._el.offsetWidth))},_transformRe:/(-?[\d\.]+), (-?[\d\.]+)\)/,_getPos:function(){var t,n,i,s=this._el,o=e.getComputedStyle(s);return r.Browser.any3d?(i=o[r.DomUtil.TRANSFORM].match(this._transformRe),t=parseFloat(i[1]),n=parseFloat(i[2])):(t=parseFloat(o.left),n=parseFloat(o.top)),new r.Point(t,n,!0)},_onTransitionEnd:function(){r.DomEvent.off(this._el,r.DomUtil.TRANSITION_END,this._onTransitionEnd,this),this._inProgress&&(this._inProgress=!1,this._el.style[r.DomUtil.TRANSITION]="",clearInterval(this._stepTimer),this.fire("step").fire("end"))}}),r.Map.include({setView:function(e,t,n){t=this._limitZoom(t);var r=this._zoom!==t;if(this._loaded&&!n&&this._layers){this._panAnim&&this._panAnim.stop();var i=r?this._zoomToIfClose&&this._zoomToIfClose(e,t):this._panByIfClose(e);if(i)return clearTimeout(this._sizeTimer),this}return this._resetView(e,t),this},panBy:function(e,t,n){if(e=r.point(e),!e.x&&!e.y)return this;this._panAnim||(this._panAnim=new r.PosAnimation,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),this.fire("movestart"),r.DomUtil.addClass(this._mapPane,"leaflet-pan-anim");var i=r.DomUtil.getPosition(this._mapPane).subtract(e)._round();return this._panAnim.run(this._mapPane,i,t||.25,n),this},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){r.DomUtil.removeClass(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_panByIfClose:function(e){var t=this._getCenterOffset(e)._floor();return this._offsetIsWithinView(t)?(this.panBy(t),!0):!1},_offsetIsWithinView:function(e,t){var n=t||1,r=this.getSize();return Math.abs(e.x)<=r.x*n&&Math.abs(e.y)<=r.y*n}}),r.PosAnimation=r.DomUtil.TRANSITION?r.PosAnimation:r.PosAnimation.extend({run:function(e,t,n,i){this.stop(),this._el=e,this._inProgress=!0,this._duration=n||.25,this._easeOutPower=1/Math.max(i||.5,.2),this._startPos=r.DomUtil.getPosition(e),this._offset=t.subtract(this._startPos),this._startTime=+(new Date),this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(),this._complete())},_animate:function(){this._animId=r.Util.requestAnimFrame(this._animate,this),this._step()},_step:function(){var e=+(new Date)-this._startTime,t=1e3*this._duration;t>e?this._runFrame(this._easeOut(e/t)):(this._runFrame(1),this._complete())},_runFrame:function(e){var t=this._startPos.add(this._offset.multiplyBy(e));r.DomUtil.setPosition(this._el,t),this.fire("step")},_complete:function(){r.Util.cancelAnimFrame(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(e){return 1-Math.pow(1-e,this._easeOutPower)}}),r.Map.mergeOptions({zoomAnimation:r.DomUtil.TRANSITION&&!r.Browser.android23&&!r.Browser.mobileOpera}),r.DomUtil.TRANSITION&&r.Map.addInitHook(function(){r.DomEvent.on(this._mapPane,r.DomUtil.TRANSITION_END,this._catchTransitionEnd,this)}),r.Map.include(r.DomUtil.TRANSITION?{_zoomToIfClose:function(e,t){if(this._animatingZoom)return!0;if(!this.options.zoomAnimation)return!1;var n=this.getZoomScale(t),i=this._getCenterOffset(e)._divideBy(1-1/n);if(!this._offsetIsWithinView(i,1))return!1;r.DomUtil.addClass(this._mapPane,"leaflet-zoom-anim"),this.fire("movestart").fire("zoomstart"),this.fire("zoomanim",{center:e,zoom:t});var s=this._getCenterLayerPoint().add(i);return this._prepareTileBg(),this._runAnimation(e,t,n,s),!0},_catchTransitionEnd:function(){this._animatingZoom&&this._onZoomTransitionEnd()},_runAnimation:function(e,t,n,i,s){this._animateToCenter=e,this._animateToZoom=t,this._animatingZoom=!0,r.Draggable&&(r.Draggable._disabled=!0);var o=r.DomUtil.TRANSFORM,u=this._tileBg;clearTimeout(this._clearTileBgTimer),r.Util.falseFn(u.offsetWidth);var a=r.DomUtil.getScaleString(n,i),f=u.style[o];u.style[o]=s?f+" "+a:a+" "+f},_prepareTileBg:function(){var e=this._tilePane,t=this._tileBg;if(t&&this._getLoadedTilesPercentage(t)>.5&&.5>this._getLoadedTilesPercentage(e))return e.style.visibility="hidden",e.empty=!0,this._stopLoadingImages(e),n;t||(t=this._tileBg=this._createPane("leaflet-tile-pane",this._mapPane),t.style.zIndex=1),t.style[r.DomUtil.TRANSFORM]="",t.style.visibility="hidden",t.empty=!0,e.empty=!1,this._tilePane=this._panes.tilePane=t;var i=this._tileBg=e;r.DomUtil.addClass(i,"leaflet-zoom-animated"),this._stopLoadingImages(i)},_getLoadedTilesPercentage:function(e){var t,n,r=e.getElementsByTagName("img"),i=0;for(t=0,n=r.length;n>t;t++)r[t].complete&&i++;return i/n},_stopLoadingImages:function(e){var t,n,i,s=Array.prototype.slice.call(e.getElementsByTagName("img"));for(t=0,n=s.length;n>t;t++)i=s[t],i.complete||(i.onload=r.Util.falseFn,i.onerror=r.Util.falseFn,i.src=r.Util.emptyImageUrl,i.parentNode.removeChild(i))},_onZoomTransitionEnd:function(){this._restoreTileFront(),r.DomUtil.removeClass(this._mapPane,"leaflet-zoom-anim"),r.Util.falseFn(this._tileBg.offsetWidth),this._animatingZoom=!1,this._resetView(this._animateToCenter,this._animateToZoom,!0,!0),r.Draggable&&(r.Draggable._disabled=!1)},_restoreTileFront:function(){this._tilePane.innerHTML="",this._tilePane.style.visibility="",this._tilePane.style.zIndex=2,this._tileBg.style.zIndex=1},_clearTileBg:function(){this._animatingZoom||this.touchZoom._zooming||(this._tileBg.innerHTML="")}}:{}),r.Map.include({_defaultLocateOptions:{watch:!1,setView:!1,maxZoom:1/0,timeout:1e4,maximumAge:0,enableHighAccuracy:!1},locate:function(e){if(e=this._locationOptions=r.extend(this._defaultLocateOptions,e),!navigator.geolocation)return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var t=r.bind(this._handleGeolocationResponse,this),n=r.bind(this._handleGeolocationError,this);return e.watch?this._locationWatchId=navigator.geolocation.watchPosition(t,n,e):navigator.geolocation.getCurrentPosition(t,n,e),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch(this._locationWatchId),this},_handleGeolocationError:function(e){var t=e.code,n=e.message||(1===t?"permission denied":2===t?"position unavailable":"timeout");this._locationOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:t,message:"Geolocation error: "+n+"."})},_handleGeolocationResponse:function(e){var t=180*e.coords.accuracy/4e7,n=2*t,i=e.coords.latitude,s=e.coords.longitude,o=new r.LatLng(i,s),u=new r.LatLng(i-t,s-n),a=new r.LatLng(i+t,s+n),f=new r.LatLngBounds(u,a),l=this._locationOptions;if(l.setView){var c=Math.min(this.getBoundsZoom(f),l.maxZoom);this.setView(o,c)}this.fire("locationfound",{latlng:o,bounds:f,accuracy:e.coords.accuracy})}})})(this,document),L.Google=L.Class.extend({includes:L.Mixin.Events,options:{minZoom:0,maxZoom:18,tileSize:256,subdomains:"abc",errorTileUrl:"",attribution:"",opacity:1,continuousWorld:!1,noWrap:!1},initialize:function(e,t,n){L.Util.setOptions(this,t),e==="INGRESS"?(e="ROADMAP",this._styles=[{featureType:"all",elementType:"all",stylers:[{visibility:"on"},{hue:"#131c1c"},{saturation:"-50"},{invert_lightness:!0}]},{featureType:"water",elementType:"all",stylers:[{visibility:"on"},{hue:"#005eff"},{invert_lightness:!0}]},{featureType:"poi",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]}]):this._styles=null,this._type=google.maps.MapTypeId[e||"SATELLITE"]},onAdd:function(e,t){this._map=e,this._insertAtTheBottom=t,this._initContainer(),this._initMapObject(),this._map.options.zoomAnimation=!1,e.on("move",this._update,this),this._reset(),this._update()},onRemove:function(e){this._map._container.removeChild(this._container),this._map.options.zoomAnimation=!0,this._map.off("move",this._update,this)},getAttribution:function(){return this.options.attribution},setOpacity:function(e){this.options.opacity=e,e<1&&L.DomUtil.setOpacity(this._container,e)},_initContainer:function(){var e=this._map._container;first=e.firstChild,this._container||(this._container=L.DomUtil.create("div","leaflet-google-layer leaflet-top leaflet-left"),this._container.id="_GMapContainer"),e.insertBefore(this._container,first),this.setOpacity(this.options.opacity);var t=this._map.getSize();this._container.style.width=t.x+"px",this._container.style.height=t.y+"px"},_initMapObject:function(){this._google_center=new google.maps.LatLng(0,0);var e=new google.maps.Map(this._container,{center:this._google_center,zoom:0,styles:this._styles,tilt:0,mapTypeId:this._type,disableDefaultUI:!0,keyboardShortcuts:!1,draggable:!1,disableDoubleClickZoom:!0,scrollwheel:!1,streetViewControl:!1}),t=this;this._reposition=google.maps.event.addListenerOnce(e,"center_changed",function(){t.onReposition()}),e.backgroundColor="#ff0000",this._google=e},_resetCallback:function(e){this._reset(e.hard)},_reset:function(e){this._initContainer()},_update:function(){this._resize();var e=this._map.getCenter(),t=new google.maps.LatLng(e.lat,e.lng);this.
_google.setCenter(t),this._google.setZoom(this._map.getZoom())},_resize:function(){var e=this._map.getSize();if(parseInt(this._container.style.width)==e.x&&parseInt(this._container.style.height)==e.y)return;this._container.style.width=e.x+"px",this._container.style.height=e.y+"px",google.maps.event.trigger(this._google,"resize")},onReposition:function(){}}),function(){var e,t=[].slice;e=function(){var e,n,r,i,s,o,u;s=1<=arguments.length?t.call(arguments,0):[],r="",i=s[0],o=/(^|\s)((https?|ftp):\/\/[\-A-Z0-9+\u0026@#\/%?=~_|!:,.;]*[\-A-Z0-9+\u0026@#\/%=~_|])/gi;if(s.length>0){i["callback"]!=null&&typeof i.callback=="function"&&(e=i.callback,delete i.callback);for(n in i)u=i[n],r+=" "+n+"='"+u+"'";return this.replace(o,function(t,n,i){var s,o;return o=e&&e(i),s=o||"<a href='"+i+"'"+r+">"+i+"</a>",""+n+s})}return this.replace(o,"$1<a href='$2'>$2</a>")},String.prototype.autoLink=e}.call(this),function(){(function(){var e={}.hasOwnProperty,t=[].slice;null!=this.L&&(this.OverlappingMarkerSpiderfier=function(){function r(t,r){var i,s,o,u,a=this;this.map=t,null==r&&(r={});for(i in r)e.call(r,i)&&(s=r[i],this[i]=s);this.initMarkerArrays(),this.listeners={},u=["click","zoomend"],s=0;for(o=u.length;s<o;s++)i=u[s],this.map.addEventListener(i,function(){return a.unspiderfy()})}var i,s;return i=r.prototype,i.VERSION="0.2.5",s=2*Math.PI,i.keepSpiderfied=!1,i.nearbyDistance=20,i.circleSpiralSwitchover=9,i.circleFootSeparation=25,i.circleStartAngle=s/12,i.spiralFootSeparation=28,i.spiralLengthStart=11,i.spiralLengthFactor=5,i.legWeight=1.5,i.legColors={usual:"#222",highlighted:"#f00"},i.initMarkerArrays=function(){return this.markers=[],this.markerListeners=[]},i.addMarker=function(e){var t,n=this;return null!=e._oms?this:(e._oms=!0,t=function(){return n.spiderListener(e)},e.addEventListener("click",t),this.markerListeners.push(t),this.markers.push(e),this)},i.getMarkers=function(){return this.markers.slice(0)},i.removeMarker=function(e){var t,n;return null!=e._omsData&&this.unspiderfy(),t=this.arrIndexOf(this.markers,e),0>t?this:(n=this.markerListeners.splice(t,1)[0],e.removeEventListener("click",n),delete e._oms,this.markers.splice(t,1),this)},i.clearMarkers=function(){var e,t,n,r,i;this.unspiderfy(),i=this.markers,e=n=0;for(r=i.length;n<r;e=++n)t=i[e],e=this.markerListeners[e],t.removeEventListener("click",e),delete t._oms;return this.initMarkerArrays(),this},i.addListener=function(e,t){var n,r;return(null!=(r=(n=this.listeners)[e])?r:n[e]=[]).push(t),this},i.removeListener=function(e,t){var n;return n=this.arrIndexOf(this.listeners[e],t),0>n||this.listeners[e].splice(n,1),this},i.clearListeners=function(e){return this.listeners[e]=[],this},i.trigger=function(){var e,n,r,i,s,u;n=arguments[0],e=2<=arguments.length?t.call(arguments,1):[],n=null!=(r=this.listeners[n])?r:[],u=[],i=0;for(s=n.length;i<s;i++)r=n[i],u.push(r.apply(null,e));return u},i.generatePtsCircle=function(e,t){var n,r,i,o,u;i=this.circleFootSeparation*(2+e)/s,r=s/e,u=[];for(n=o=0;0<=e?o<e:o>e;n=0<=e?++o:--o)n=this.circleStartAngle+n*r,u.push(new L.Point(t.x+i*Math.cos(n),t.y+i*Math.sin(n)));return u},i.generatePtsSpiral=function(e,t){var n,r,i,o,u;i=this.spiralLengthStart,n=0,u=[];for(r=o=0;0<=e?o<e:o>e;r=0<=e?++o:--o)n+=this.spiralFootSeparation/i+5e-4*r,r=new L.Point(t.x+i*Math.cos(n),t.y+i*Math.sin(n)),i+=s*this.spiralLengthFactor/n,u.push(r);return u},i.spiderListener=function(e){var t,n,r,i,s,o,u,a,f;t=null!=e._omsData,(!t||!this.keepSpiderfied)&&this.unspiderfy();if(t)return this.trigger("click",e);i=[],s=[],o=this.nearbyDistance*this.nearbyDistance,r=this.map.latLngToLayerPoint(e.getLatLng()),f=this.markers,u=0;for(a=f.length;u<a;u++)t=f[u],n=this.map.latLngToLayerPoint(t.getLatLng()),this.ptDistanceSq(n,r)<o?i.push({marker:t,markerPt:n}):s.push(t);return 1===i.length?this.trigger("click",e):this.spiderfy(i,s)},i.makeHighlightListeners=function(e){var t=this;return{highlight:function(){return e._omsData.leg.setStyle({color:t.legColors.highlighted})},unhighlight:function(){return e._omsData.leg.setStyle({color:t.legColors.usual})}}},i.spiderfy=function(e,t){var n,r,i,s,o,u,a,f,l,c;return this.spiderfying=!0,c=e.length,n=this.ptAverage(function(){var t,n,r;r=[],t=0;for(n=e.length;t<n;t++)a=e[t],r.push(a.markerPt);return r}()),s=c>=this.circleSpiralSwitchover?this.generatePtsSpiral(c,n).reverse():this.generatePtsCircle(c,n),n=function(){var t,n,a,c=this;a=[],t=0;for(n=s.length;t<n;t++)i=s[t],r=this.map.layerPointToLatLng(i),l=this.minExtract(e,function(e){return c.ptDistanceSq(e.markerPt,i)}),u=l.marker,o=new L.Polyline([u.getLatLng(),r],{color:this.legColors.usual,weight:this.legWeight,clickable:!1}),this.map.addLayer(o),u._omsData={usualPosition:u.getLatLng(),leg:o},this.legColors.highlighted!==this.legColors.usual&&(f=this.makeHighlightListeners(u),u._omsData.highlightListeners=f,u.addEventListener("mouseover",f.highlight),u.addEventListener("mouseout",f.unhighlight)),u.setLatLng(r),u.setZIndexOffset(1e6),a.push(u);return a}.call(this),delete this.spiderfying,this.spiderfied=!0,this.trigger("spiderfy",n,t)},i.unspiderfy=function(e){var t,n,r,i,s,o,u;null==e&&(e=null);if(null==this.spiderfied)return this;this.unspiderfying=!0,i=[],r=[],u=this.markers,s=0;for(o=u.length;s<o;s++)t=u[s],null!=t._omsData?(this.map.removeLayer(t._omsData.leg),t!==e&&t.setLatLng(t._omsData.usualPosition),t.setZIndexOffset(0),n=t._omsData.highlightListeners,null!=n&&(t.removeEventListener("mouseover",n.highlight),t.removeEventListener("mouseout",n.unhighlight)),delete t._omsData,i.push(t)):r.push(t);return delete this.unspiderfying,delete this.spiderfied,this.trigger("unspiderfy",i,r),this},i.ptDistanceSq=function(e,t){var n,r;return n=e.x-t.x,r=e.y-t.y,n*n+r*r},i.ptAverage=function(e){var t,n,r,i,s;i=n=r=0;for(s=e.length;i<s;i++)t=e[i],n+=t.x,r+=t.y;return e=e.length,new L.Point(n/e,r/e)},i.minExtract=function(e,t){var n,r,i,s,o,u;i=o=0;for(u=e.length;o<u;i=++o)if(s=e[i],s=t(s),"undefined"==typeof n||null===n||s<r)r=s,n=i;return e.splice(n,1)[0]},i.arrIndexOf=function(e,t){var n,r,i,s;if(null!=e.indexOf)return e.indexOf(t);n=i=0;for(s=e.length;i<s;n=++i)if(r=e[n],r===t)return n;return-1},r}())}).call(this)}.call(this);try{console.log("done loading included JS")}catch(e){}var JQUERY="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js",JQUERYUI="https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.0/jquery-ui.min.js";load(JQUERY).then(JQUERYUI).thenRun(boot),window.chat=function(){},window.chat.handleTabCompletion=function(){var e=$("#chatinput input"),t=e.get(0).selectionStart,n=e.val(),r=n.slice(0,t).replace(/.*([a-z0-9-_])/,"$1").toLowerCase(),i=$("#chat > div:visible mark");i=i.map(function(e,t){return $(t).text()}),i=uniqueArray(i);var s=null;for(var o=0;o<i.length;o++){if(!i[o].toLowerCase().startsWith(r))continue;if(s&&s!==i[o]){console.log("More than one nick matches, aborting. ("+i[o]+" vs "+s+")");return}s=i[o]}if(!s){console.log("No matches for "+r);return}var u=t-r.length,a=n.substring(0,u);a+=s+(u===0?": ":" "),a+=n.substring(t),e.val(a)},window.chat.getTimestamps=function(e){var t=e?chat._factionData:chat._publicData;return $.map(t,function(e,t){return[e[0]]})},window.chat.getOldestTimestamp=function(e){var t=Math.min.apply(null,chat.getTimestamps(e));return t===Infinity?-1:t},window.chat.getNewestTimestamp=function(e){var t=Math.max.apply(null,chat.getTimestamps(e));return t===-1*Infinity?-1:t},window.chat._oldBBox=null,window.chat.genPostData=function(e,t){if(typeof e!="boolean")throw"Need to know if public or faction chat.";chat._localRangeCircle.setLatLng(map.getCenter());var n=map.getBounds().extend(chat._localRangeCircle.getBounds()),r=n.getNorthEast(),i=n.getSouthWest(),s=$.map([r.lat,r.lng,i.lat,i.lng],function(e){return Math.round(e*1e4)}).join();chat._oldBBox&&chat._oldBBox!==s&&($("#chat > div").data("needsClearing",!0),console.log("Bounding Box changed, chat will be cleared (old: "+chat._oldBBox+" ; new: "+s+" )"),chat._factionData={},chat._publicData={}),chat._oldBBox=s;var r=n.getNorthEast(),i=n.getSouthWest(),o={desiredNumItems:e?CHAT_FACTION_ITEMS:CHAT_PUBLIC_ITEMS,minLatE6:Math.round(i.lat*1e6),minLngE6:Math.round(i.lng*1e6),maxLatE6:Math.round(r.lat*1e6),maxLngE6:Math.round(r.lng*1e6),minTimestampMs:-1,maxTimestampMs:-1,factionOnly:e};if(t)o=$.extend(o,{maxTimestampMs:chat.getOldestTimestamp(e)});else{var u=chat.getNewestTimestamp(e);$.extend(o,{minTimestampMs:u})}return o},window.chat._requestFactionRunning=!1,window.chat.requestFaction=function(e,t){if(chat._requestFactionRunning&&!t)return;if(isIdle())return renderUpdateStatus();chat._requestFactionRunning=!0;var n=chat.genPostData(!0,e),r=window.postAjax("getPaginatedPlextsV2",n,chat.handleFaction,t?function(){window.chat._requestFactionRunning=!1}:function(){window.chat.requestFaction(e,!0)});requests.add(r)},window.chat._factionData={},window.chat.handleFaction=function(e,t,n){chat._requestFactionRunning=!1;if(!e||!e.result)return window.failedRequestCount++,console.warn("faction chat error. Waiting for next auto-refresh.");if(e.result.length===0)return;var r=chat.getOldestTimestamp(!0);chat.writeDataToHash(e,chat._factionData,!1);var i=r!==chat.getOldestTimestamp(!0);window.chat.renderFaction(i),e.result.length>=CHAT_FACTION_ITEMS&&chat.needMoreMessages()},window.chat.renderFaction=function(e){chat.renderData(chat._factionData,"chatfaction",e)},window.chat._requestPublicRunning=!1,window.chat.requestPublic=function(e,t){if(chat._requestPublicRunning&&!t)return;if(isIdle())return renderUpdateStatus();chat._requestPublicRunning=!0;var n=chat.genPostData(!1,e),r=window.postAjax("getPaginatedPlextsV2",n,chat.handlePublic,t?function(){window.chat._requestPublicRunning=!1}:function(){window.chat.requestPublic(e,!0)});requests.add(r)},window.chat._publicData={},window.chat.handlePublic=function(e,t,n){chat._requestPublicRunning=!1;if(!e||!e.result)return window.failedRequestCount++,console.warn("public chat error. Waiting for next auto-refresh.");if(e.result.length===0)return;var r=chat.getOldestTimestamp(!1);chat.writeDataToHash(e,chat._publicData,!0);var i=r!==chat.getOldestTimestamp(!1);runHooks("publicChatDataAvailable",{raw:e,processed:chat._publicData});switch(chat.getActive()){case"public":window.chat.renderPublic(i);break;case"compact":window.chat.renderCompact(i);break;case"full":window.chat.renderFull(i)}e.result.length>=CHAT_PUBLIC_ITEMS&&chat.needMoreMessages()},window.chat.renderPublic=function(e){var t=$.map(chat._publicData,function(e){if(!e[1])return[e]});chat.renderData(t,"chatpublic",e)},window.chat.renderCompact=function(e){var t={};$.each(chat._publicData,function(e,n){if(!n[1])return!0;var r=n[3];if(t[r]&&t[r][0]>n[0])return!0;t[r]=n}),chat.renderData(t,"chatcompact",e)},window.chat.renderFull=function(e){var t=$.map(chat._publicData,function(e){if(e[1])return[e]});chat.renderData(t,"chatfull",e)},window.chat.writeDataToHash=function(e,t,n){$.each(e.result,function(e,r){if(r[0]in t)return!0;var i=!1,s=r[1],o=r[2].plext.team==="ALIENS"?TEAM_ENL:TEAM_RES,u=r[2].plext.plextType!=="PLAYER_GENERATED",a="",f="",l;$.each(r[2].plext.markup,function(e,t){switch(t[0]){case"SENDER":f=t[1].plain.slice(0,-2),l=t[1].guid;break;case"PLAYER":l=t[1].guid,f=t[1].plain,o=t[1].team==="ALIENS"?TEAM_ENL:TEAM_RES,e>0&&(a+=f);break;case"TEXT":var r=$("<div/>").text(t[1].plain).html().autoLink();a+=r.replace(window.PLAYER.nickMatcher,"<em>$1</em>");break;case"PORTAL":var s=[t[1].latE6/1e6,t[1].lngE6/1e6],u="https://ingress.com/intel?latE6="+t[1].latE6+"&lngE6="+t[1].lngE6+"&z=17&pguid="+t[1].guid,c="window.zoomToAndShowPortal('"+t[1].guid+"', ["+s[0]+", "+s[1]+"]);return false";a+='<a onclick="'+c+'"'+' title="'+t[1].address+'"'+' href="'+u+'" class="help">'+window.chat.getChatPortalName(t[1])+"</a>";break;case"SECURE":if(n)return i=!0,!1}});if(i)return!0;t[r[0]]=[r[1],u,chat.renderMsg(a,f,s,o),l],window.setPlayerName(l,f)})},window.chat.getChatPortalName=function(e){var t=e.name;if(t==="US Post Office"){var n=e.address.split(",");t="USPS: "+n[0]}return t},window.chat.renderData=function(e,t,n){var r=$("#"+t);if(r.is(":hidden"))return;var i=$.map(e,function(e,t){return[e]});i=i.sort(function(e,t){return e[0]-t[0]});var s="",o=null;$.each(i,function(e,t){var n=(new Date(t[0])).toLocaleDateString();o&&o!==n&&(s+=chat.renderDivider(n)),s+=t[2],o=n});var u=scrollBottom(r);r.html("<table>"+s+"</table>"),chat.keepScrollPosition(r,u,n)},window.chat.renderDivider=function(e){var t=" ──────────────────────────────────────────────────────────────────────────";return'<tr><td colspan="3" style="padding-top:3px"><summary>─ '+e+t+"</summary></td></tr>"},window.chat.renderMsg=function(e,t,n,r){var i=unixTimeToHHmm(n),s=unixTimeToString(n,!0),o='<time title="'+s+'" data-timestamp="'+n+'">'+i+"</time>",u='style="color:'+COLORS[r]+'"',a=t.length>=8?'title="'+t+'" class="help"':"",f=['<span class="invisep">&lt;</span>','<span class="invisep">&gt;</span>'];return"<tr><td>"+o+"</td><td>"+f[0]+'<mark class="nickname" '+u+">"+t+"</mark>"+f[1]+"</td><td>"+e+"</td></tr>"},window.chat.getActive=function(){return $("#chatcontrols .active").text()},window.chat.toggle=function(){var e=$("#chat, #chatcontrols");if(e.hasClass("expand")){$("#chatcontrols a:first").html('<span class="toggle expand"></span>'),e.removeClass("expand");var t=$("#chat > div:visible");t.data("ignoreNextScroll",!0),t.scrollTop(99999999),$(".leaflet-control").css("margin-left","13px")}else $("#chatcontrols a:first").html('<span class="toggle shrink"></span>'),e.addClass("expand"),$(".leaflet-control").css("margin-left","720px"),chat.needMoreMessages()},window.chat.request=function(){console.log("refreshing chat"),chat.requestFaction(!1),chat.requestPublic(!1)},window.chat.needMoreMessages=function(){var e=chat.getActive();if(e==="debug")return;var t=$("#chat > :visible");if(t.length===0)return;var n=scrollBottom(t)!==0||t.scrollTop()!==0,r=t.scrollTop()<=CHAT_REQUEST_SCROLL_TOP;if(n&&!r)return;console.log("No scrollbar or near top in active chat. Requesting more data."),e==="faction"?chat.requestFaction(!0):chat.requestPublic(!0)},window.chat.chooser=function(event){var t=$(event.target),tt=t.text(),mark=$("#chatinput mark"),input=$("#chatinput input");$("#chatcontrols .active").removeClass("active"),t.addClass("active"),$("#chat > div").hide();var elm;switch(tt){case"faction":input.css("color",""),mark.css("color",""),mark.text("tell faction:");break;case"public":input.css("cssText","color: red !important"),mark.css("cssText","color: red !important"),mark.text("broadcast:");break;case"compact":case"full":mark.css("cssText","color: #bbb !important"),input.css("cssText","color: #bbb !important"),mark.text("tell Jarvis:");break;default:throw"chat.chooser was asked to handle unknown button: "+tt}var elm=$("#chat"+tt);elm.show(),eval("chat.render"+tt.capitalize()+"(false);"),elm.data("needsScrollTop")&&(elm.data("ignoreNextScroll",!0),elm.scrollTop(elm.data("needsScrollTop")),elm.data("needsScrollTop",null)),chat.needMoreMessages()},window.chat.keepScrollPosition=function(e,t,n){if(e.is(":hidden")&&!n){e.data("needsScrollTop",99999999);return}if(t===0||n)e.data("ignoreNextScroll",!0),e.scrollTop(e.scrollTop()+(scrollBottom(e)-t))},window.chat.setup=function(){window.chat._localRangeCircle=L.circle(map.getCenter(),CHAT_MIN_RANGE*1e3),$("#chatcontrols, #chat, #chatinput").show(),$("#chatcontrols a:first").click(window.chat.toggle),$("#chatcontrols a").each(function(e,t){$.inArray($(t).text(),["full","compact","public","faction"])!==-1&&$(t).click(window.chat.chooser)}),$("#chatinput").click(function(){$("#chatinput input").focus()}),window.chat.setupTime(),window.chat.setupPosting(),$("#chatfaction").scroll(function(){var e=$(this);if(e.data("ignoreNextScroll"))return e.data("ignoreNextScroll",!1);e.scrollTop()<CHAT_REQUEST_SCROLL_TOP&&chat.requestFaction(!0),scrollBottom(e)===0&&chat.requestFaction(!1)}),$("#chatpublic, #chatfull, #chatcompact").scroll(function(){var e=$(this);if(e.data("ignoreNextScroll"))return e.data("ignoreNextScroll",!1);e.scrollTop()<CHAT_REQUEST_SCROLL_TOP&&chat.requestPublic(!0),scrollBottom(e)===0&&chat.requestPublic(!1)}),chat.request(),window.addResumeFunction(chat.request),window.requests.addRefreshFunction(chat.request);var e=PLAYER.team==="ALIENS"?"enl":"res";$("#chatinput mark").addClass(e)},window.chat.setupTime=function(){var e=$("#chatinput time"),t=function(){if(window.isIdle())return;var n=new Date,r=n.getHours()+"";r.length===1&&(r="0"+r);var i=n.getMinutes()+"";i.length===1&&(i="0"+i),e.text(r+":"+i),setTimeout(t,(60-n.getSeconds())*1e3+1)};t(),window.addResumeFunction(t)},window.chat.setupPosting=function(){$("#chatinput input").keydown(function(e){try{var t=e.keyCode?e.keyCode:e.which;t===13?(chat.postMsg(),e.preventDefault()):t===9&&(e.preventDefault(),window.chat.handleTabCompletion())}catch(n){console.log(n),debug.printStackTrace()}}),$("#chatinput").submit(function(e){e.preventDefault(),chat.postMsg()})},window.chat.postMsg=function(){var e=chat.getActive();if(e==="full"||e==="compact")return alert("Jarvis: A strange game. The only winning move is not to play. How about a nice game of chess?");var t=$.trim($("#chatinput input").val());if(!t||t==="")return;if(e==="debug")return(new Function(t))();var n=e==="public",r=map.getCenter(),i={message:t,latE6:Math.round(r.lat*1e6),lngE6:Math.round(r.lng*1e6),factionOnly:!n},s="Your message could not be delivered. You can copy&paste it here and try again if you want:

"+t;window.postAjax("sendPlext",i,function(e){e.error&&alert(s),n?chat.requestPublic(!1):chat.requestFaction(!1)},function(){alert(s)}),$("#chatinput input").val("")},window.getRangeText=function(e){var t=getPortalRange(e);return["range",'<a onclick="window.rangeLinkClick()">'+(t>1e3?Math.round(t/1e3)+" km":Math.round(t)+" m")+"</a>"]},window.getPortalDescriptionFromDetails=function(e){var t=e.portalV2.descriptiveText,n=t.TITLE+"
"+t.ADDRESS;return t.ATTRIBUTION&&(n+="
by "+t.ATTRIBUTION+" ("+t.ATTRIBUTION_LINK+")"),n},window.getModDetails=function(e){var t=[],n=[],r=[];$.each(e.portalV2.linkedModArray,function(e,i){if(!i)t.push(""),n.push(""),r.push("#000");else if(i.type==="RES_SHIELD"){var s=i.rarity.capitalize()+" "+i.displayName+"
";s+="Installed by: "+getPlayerName(i.installingUser),s+="
Stats:";for(var o in i.stats){if(!i.stats.hasOwnProperty(o))continue;s+="
+"+i.stats[o]+" "+o.capitalize()}t.push(i.rarity.capitalize().replace("_"," ")+" "+i.displayName),n.push(s),r.push(COLORS_MOD[i.rarity])}else t.push(i.type),n.push("Unknown mod. No further details available."),r.push("#FFF")});var i="<span"+(n[0].length?' title="'+n[0]+'"':"")+' style="color:'+r[0]+'">'+t[0]+"</span>"+"<span"+(n[1].length?' title="'+n[1]+'"':"")+' style="color:'+r[1]+'">'+t[1]+"</span>"+"<span"+(n[2].length?' title="'+n[2]+'"':"")+' style="color:'+r[2]+'">'+t[2]+"</span>"+"<span"+(n[3].length?' title="'+n[3]+'"':"")+' style="color:'+r[3]+'">'+t[3]+"</span>";return i},window.getEnergyText=function(e){var t=getCurrentPortalEnergy(e),n=getTotalPortalEnergy(e),r=t+" / "+n,i=prettyEnergy(t)+" / "+prettyEnergy(n);return["energy",'<tt title="'+r+'">'+i+"</tt>"]},window.getAvgResoDistText=function(e){var t=Math.round(10*getAvgResoDist(e))/10;return["reso dist",t+" m"]},window.getResonatorDetails=function(e){var t=[];return $.each([2,1,3,0,4,7,5,6],function(n,r){var i=e.resonatorArray.resonators[r];if(!i)return t.push(renderResonatorDetails(r,0,0,null,null)),!0;var s=parseInt(i.level),o=parseInt(i.energyTotal),u=window.getPlayerName(i.ownerGuid),a=i.distanceToPortal;r=parseInt(i.slot),t.push(renderResonatorDetails(r,s,o,a,u))}),genFourColumnTable(t)},window.renderResonatorDetails=function(e,t,n,r,i){if(t===0)var s='<span class="meter" title="octant:	'+OCTANTS[e]+'"></span>';else var o=RESO_NRG[t],u=n/o*100,a="energy:	"+n+" / "+o+" ("+Math.round(u)+"%)
"+"level:	"+t+"
"+"distance:	"+r+"m
"+"owner:	"+i+"
"+"octant:	"+OCTANTS[e],f="width:"+u+"%; background:"+COLORS_LVL[t]+";",l=t<3?"#9900FF":"#FFFFFF",c='<span class="meter-level" style="color: '+l+';"> '+t+" </span>",h='<span style="'+f+'"></span>',s='<span class="meter" title="'+a+'">'+h+c+"</span>";return i=i?'<span class="nickname">'+i+"</span>":null,[s,i||""]},window.getAttackApGainText=function(e){function n(e){var n="Destroy &amp; Capture:
";return n+=t.resoCount+"×	Resonators	= "+digits(t.resoAp)+"
",n+=t.linkCount+"×	Links	= "+digits(t.linkAp)+"
",n+=t.fieldCount+"×	Fields	= "+digits(t.fieldAp)+"
",n+="1×	Capture	= "+CAPTURE_PORTAL+"
",n+="8×	Deploy	= "+8*DEPLOY_RESONATOR+"
",n+="1×	Bonus	= "+COMPLETION_BONUS+"
",n+="Sum: "+digits(t.totalAp)+" AP",'<tt title="'+n+'">'+digits(e)+"</tt>"}var t=getAttackApGain(e);return[n("AP Gain"),n(t.totalAp)]},window.updateGameScore=function(e){if(!e){window.postAjax("getGameScore",{},window.updateGameScore);return}var t=parseInt(e.result.resistanceScore),n=parseInt(e.result.alienScore),r=t+n,i=t/r*100,s=n/r*100;t=digits(t),n=digits(n);var o='<span class="res" style="width:'+i+'%;">'+Math.round(i)+"%&nbsp;</span>",u='<span class="enl" style="width:'+s+'%;">&nbsp;'+Math.round(s)+"%</span>";$("#gamestat").html(o+u).one("click",function(){window.updateGameScore()}),$("#gamestat").attr("title","Resistance:	"+t+" MindUnits
Enlightened:	"+n+" MindUnits"),window.setTimeout("window.updateGameScore",REFRESH_GAME_SCORE*1e3)},window.convertCenterLat=function(e){return Math.round(255.9744*Math.abs(1/Math.cos(e*DEG2RAD)))},window.calculateR=function(e){return 1<<window.map.getZoom()-(e/256-1)},window.convertLatLngToPoint=function(e,t,n){var r=(t/2+e.lng*t/360)*n,i=Math.sin(e.lat*DEG2RAD),s=(t/2+.5*Math.log((1+i)/(1-i))*-(t/(2*Math.PI)))*n;return{x:Math.floor(r/t),y:Math.floor(s/t)}},window.convertPointToLatLng=function(e,t,n,r){var i={};return i.sw={lat:360*Math.atan(Math.exp(Math.PI-2*Math.PI*(t+1)/r))/Math.PI-90,lng:360*e/r-180},i.ne={lat:360*Math.atan(Math.exp(Math.PI-2*Math.PI*t/r))/Math.PI-90,lng:360*(e+1)/r-180},i},window.pointToQuadKey=function(e,t){var n=[];for(var r=window.map.getZoom();r>0;r--){var i=0,s=1<<r-1;(e&s)!=0&&i++,(t&s)!=0&&(i++,i++),n.push(i)}return n.join("")},window.generateBoundsParams=function(e,t){return{id:e,qk:e,minLatE6:Math.round(t.sw.lat*1e6),minLngE6:Math.round(t.sw.lng*1e6),maxLatE6:Math.round(t.ne.lat*1e6),maxLngE6:Math.round(t.ne.lng*1e6)}},window.getTeam=function(e){var t=TEAM_NONE;return e.controllingTeam.team==="ALIENS"&&(t=TEAM_ENL),e.controllingTeam.team==="RESISTANCE"&&(t=TEAM_RES),t},window.idleTime=0,setInterval("window.idleTime += 1",6e4);var idleReset=function(){isIdle()&&(window.idleTime=0,$.each(window._onResumeFunctions,function(e,t){t()})),window.idleTime=0};$("body").mousemove(idleReset).keypress(idleReset),window.isIdle=function(){return window.idleTime>=MAX_IDLE_TIME},window._onResumeFunctions=[],window.addResumeFunction=function(e){window._onResumeFunctions.push(e)},window.portalRenderLimit=function(){},window.portalRenderLimit.initialized=!1,window.portalRenderLimit.minLevelSet=!1,window.portalRenderLimit.minLevel=-1,window.portalRenderLimit.previousMinLevel=-1,window.portalRenderLimit.previousZoomLevel,window.portalRenderLimit.newPortalsPerLevel=new Array(MAX_PORTAL_LEVEL+1),window.portalRenderLimit.portalsPreviousMinLevel=new Array(MAX_PORTAL_LEVEL+1),window.portalRenderLimit.init=function(){var e=map.getZoom();portalRenderLimit.previousZoomLevel=portalRenderLimit.previousZoomLevel||e;if(portalRenderLimit.minLevelSet){var t=e-portalRenderLimit.previousZoomLevel;portalRenderLimit.previousMinLevel=Math.max(portalRenderLimit.minLevel-t,-1),portalRenderLimit.previousMinLevel=Math.min(portalRenderLimit.previousMinLevel,MAX_PORTAL_LEVEL)}portalRenderLimit.previousZoomLevel=e,portalRenderLimit.initialized=!0,portalRenderLimit.minLevel=-1,portalRenderLimit.resetCounting(),portalRenderLimit.resetPortalsPreviousMinLevel()},window.portalRenderLimit.resetCounting=function(){portalRenderLimit.minLevelSet=!1;for(var e=0;e<=MAX_PORTAL_LEVEL;e++)portalRenderLimit.newPortalsPerLevel[e]=0},window.portalRenderLimit.resetPortalsPreviousMinLevel=function(){for(var e=0;e<=MAX_PORTAL_LEVEL;e++)portalRenderLimit.portalsPreviousMinLevel[e]=new Array},window.portalRenderLimit.splitOrMergeLowLevelPortals=function(e){portalRenderLimit.resetCounting(),portalRenderLimit.countingPortals(e);var t=requests.isLastRequest("getThinnedEntitiesV2")?portalRenderLimit.mergeLowLevelPortals(e):portalRenderLimit.splitLowLevelPortals(e);return t},window.portalRenderLimit.countingPortals=function(e){$.each(e,function(e,t){var n=t[0],r=parseInt(getPortalLevel(t[2])),i=portalsLayers[r];if(findEntityInLeaflet(i,window.portals,n))return!0;portalRenderLimit.newPortalsPerLevel[r]++})},window.portalRenderLimit.splitLowLevelPortals=function(e){var t=new Array;return $.each(e,function(e,n){var r=parseInt(getPortalLevel(n[2]));r<portalRenderLimit.previousMinLevel?portalRenderLimit.portalsPreviousMinLevel[r].push(n):t.push(n)}),t},window.portalRenderLimit.mergeLowLevelPortals=function(e){var t=e?e:new Array;for(var n=portalRenderLimit.getMinLevel();n<portalRenderLimit.previousMinLevel;n++)$.merge(t,portalRenderLimit.portalsPreviousMinLevel[n]);return portalRenderLimit.resetPortalsPreviousMinLevel(),t},window.portalRenderLimit.getMinLevel=function(){return portalRenderLimit.initialized?(portalRenderLimit.minLevelSet||portalRenderLimit.setMinLevel(),portalRenderLimit.minLevel):-1},window.portalRenderLimit.setMinLevel=function(){var e=0,t=MAX_PORTAL_LEVEL+1;while(t>0){var n=layerGroupLength(portalsLayers[t-1]),r=portalRenderLimit.newPortalsPerLevel[t-1];e+=n+r;if(e>=MAX_DRAWN_PORTALS)break;t--}t=Math.min(t,MAX_PORTAL_LEVEL),portalRenderLimit.minLevel=Math.max(t,portalRenderLimit.minLevel),portalRenderLimit.minLevelSet=!0},window.storeMapPosition=function(){var e=window.map.getCenter();e.lat>=-90&&e.lat<=90&&writeCookie("ingress.intelmap.lat",e.lat),e.lng>=-180&&e.lng<=180&&writeCookie("ingress.intelmap.lng",e.lng),writeCookie("ingress.intelmap.zoom",window.map.getZoom())},window.getPosition=function(){if(getURLParam("latE6")&&getURLParam("lngE6")){console.log("mappos: reading URL params");var e=parseInt(getURLParam("latE6"))/1e6||0,t=parseInt(getURLParam("lngE6"))/1e6||0,n=parseInt(getURLParam("z"))+1||17;return{center:new L.LatLng(e,t),zoom:n>18?18:n}}if(readCookie("ingress.intelmap.lat")&&readCookie("ingress.intelmap.lng")){console.log("mappos: reading cookies");var e=parseFloat(readCookie("ingress.intelmap.lat"))||0,t=parseFloat(readCookie("ingress.intelmap.lng"))||0,n=parseInt(readCookie("ingress.intelmap.zoom"))||17;if(e<-90||e>90)e=0;if(t<-180||t>180)t=0;return{center:new L.LatLng(e,t),zoom:n>18?18:n}}return setTimeout("window.map.locate({setView : true, maxZoom: 13});",50),{center:new L.LatLng(0,0),zoom:1}},window.renderPortalDetails=function(e){function r(e){return'<tt title="↳ incoming links
↴ outgoing links
• is meant to be the portal.">'+e+"</tt>"}console.warn("rendering for = "+e+" which is: "+window.portals[e]);if(!window.portals[e]){unselectOldPortal(),urlPortal=e;return}var t=window.portals[e].options.details;selectPortal(e);var n={incoming:0,outgoing:0};t.portalV2.linkedEdges&&$.each(t.portalV2.linkedEdges,function(e,t){n[t.isOrigin?"outgoing":"incoming"]++});var i=[r("links"),r(" ↳ "+n.incoming+"&nbsp;&nbsp;•&nbsp;&nbsp;"+n.outgoing+" ↴")],s=t.captured&&t.captured.capturingPlayerId?'<span class="nickname">'+getPlayerName(t.captured.capturingPlayerId)+"</span>":null,o=s?["owner",s]:null,u=t.captured?'<span title="'+unixTimeToString(t.captured.capturedTime,!0)+'">'+unixTimeToString(t.captured.capturedTime)+"</span>":null,a=u?["since",u]:null,f=["fields",t.portalV2.linkedFields.length],l=[o,a,getRangeText(t),getEnergyText(t),i,getAvgResoDistText(t),f,getAttackApGainText(t)];l='<table id="randdetails">'+genFourColumnTable(l)+"</table>";var c='<table id="resodetails">'+getResonatorDetails(t)+"</table>";setPortalIndicators(t);var h=t.imageByUrl&&t.imageByUrl.imageUrl?t.imageByUrl.imageUrl:DEFAULT_PORTAL_IMG,p=t.locationE6.latE6,d=t.locationE6.lngE6,v="https://ingress.com/intel?latE6="+p+"&lngE6="+d+"&z=17&pguid="+e,m='title="'+getPortalDescriptionFromDetails(t)+'

Click to show full image."',g="window.showPortalPosLinks("+p/1e6+","+d/1e6+")",y="Send in a postcard. Will put it online after receiving. Address:\n\nStefan Breunig\nINF 305 – R045\n69120 Heidelberg\nGermany";$("#portaldetails").attr("class",TEAM_TO_CSS[getTeam(t)]).html("<h3>"+t.portalV2.descriptiveText.TITLE+"</h3>"+'<div class="imgpreview" '+m+' style="background-image: url('+h+')">'+'<img class="hide" src="'+h+'"/>'+'<span id="level">'+Math.floor(getPortalLevel(t))+"</span>"+"</div>"+'<div class="mods">'+getModDetails(t)+"</div>"+l+c+'<div class="linkdetails">'+'<aside><a href="'+v+'">portal link</a></aside>'+'<aside><a onclick="'+g+'">poslinks</a></aside>'+"<aside><a onclick=\"alert('"+y+"');\">donate</a></aside>"+'<aside><a onclick="window.reportPortalIssue()">report issue</a></aside>'+"</div>"),resolvePlayerNames(),runHooks("portalDetailsUpdated",{portalDetails:t})},window.setPortalIndicators=function(e){portalRangeIndicator&&map.removeLayer(portalRangeIndicator);var t=getPortalRange(e),n=[e.locationE6.latE6/1e6,e.locationE6.lngE6/1e6];portalRangeIndicator=(t>0?L.circle(n,t,{fill:!1,color:RANGE_INDICATOR_COLOR,weight:3,clickable:!1}):L.circle(n,t,{fill:!1,stroke:!1,clickable:!1})).addTo(map),portalAccessIndicator?portalAccessIndicator.setLatLng(n):portalAccessIndicator=L.circle(n,HACK_RANGE,{fill:!1,color:ACCESS_INDICATOR_COLOR,weight:2,clickable:!1}).addTo(map)},window.selectPortal=function(e){var t=selectedPortal===e,n=portals[selectedPortal];return!t&&n&&portalResetColor(n),selectedPortal=e,portals[e]&&(resonatorsSetSelectStyle(e),portals[e].bringToFront().setStyle({color:COLOR_SELECTED_PORTAL})),t},window.unselectOldPortal=function(){var e=portals[selectedPortal];e&&portalResetColor(e),selectedPortal=null,$("#portaldetails").html(""),debug.printStackTrace()},window.handleRedeemResponse=function(e,t,n){if(e.error){var r="";e.error==="ALREADY_REDEEMED"?r="The passcode has already been redeemed.":e.error==="ALREADY_REDEEMED_BY_PLAYER"?r="You have already redeemed this passcode.":e.error==="INVALID_PASSCODE"?r="This passcode is invalid.":r="There was a problem redeeming the passcode. Try again?",alert("<strong>"+e.error+"</strong>
"+r)}else if(e.result){var i=$('<table class="redeem-result" />');i.append($('<tr><th colspan="2">Passcode accepted!</th></tr>')),e.result.apAward&&i.append($("<tr><td>+</td><td>"+e.result.apAward+"AP</td></tr>")),e.result.xmAward&&i.append($("<tr><td>+</td><td>"+e.result.xmAward+"XM</td></tr>"));var s={},o={},u={};for(var a in e.result.inventoryAward){var f=e.result.inventoryAward[a][2];if(f.modResource){if(f.modResource.resourceType==="RES_SHIELD"){var l=f.modResource.rarity.split("_").map(function(e){return e[0]}).join("");u[l]||(u[l]=0),u[l]+=1}}else if(f.resourceWithLevels)if(f.resourceWithLevels.resourceType==="EMITTER_A"){var c=f.resourceWithLevels.level;s[c]||(s[c]=0),s[c]+=1}else if(f.resourceWithLevels.resourceType==="EMP_BURSTER"){var c=f.resourceWithLevels.level;o[c]||(o[c]=0),o[c]+=1}}$.each(s,function(e,t){var n="Resonator";t>=2&&(n+=" ("+t+")"),i.append($('<tr ><td style="color: '+window.COLORS_LVL[e]+';">L'+e+"</td><td>"+n+"</td></tr>"))}),$.each(o,function(e,t){var n="Xmp Burster";t>=2&&(n+=" ("+t+")"),i.append($('<tr ><td style="color: '+window.COLORS_LVL[e]+';">L'+e+"</td><td>"+n+"</td></tr>"))}),$.each(u,function(e,t){var n="Portal Shield";t>=2&&(n+=" ("+t+")"),i.append($("<tr><td>"+e+"</td><td>"+n+"</td></tr>"))}),alert(i,!0)}},window.setupRedeem=function(){$("#redeem").keypress(function(e){if((e.keyCode?e.keyCode:e.which)!=13)return;var t={passcode:$(this).val()};window.postAjax("redeemReward",t,window.handleRedeemResponse,function(e){var t="";e&&e.status?(e.status===429?t="You have been rate-limited by the server. Wait a bit and try again.":t="The server indicated an error.",t+='
Response: HTTP <a href="http://httpstatus.es/'+e.status+'" alt="HTTP '+e.status+'">'+e.status+"</a>."):t="No status code was returned.",alert("<strong>The HTTP request failed.</strong> "+t)})})},window.getPlayerName=function(e){return localStorage[e]?localStorage[e]:(playersToResolve.indexOf(e)===-1&&playersInResolving.indexOf(e)===-1&&(console.log("resolving player guid="+e),debug.printStackTrace(),playersToResolve.push(e)),"{"+e.slice(0,12)+"}")},window.playerNameToGuid=function(e){var t=null;return $.each(Object.keys(localStorage),function(n,r){if(e===localStorage[r])return t=r,!1}),t},window.resolvePlayerNames=function(){if(window.playersToResolve.length===0)return;var e=window.playersToResolve,t={guids:e};playersInResolving=window.playersInResolving.concat(e),playersToResolve=[],postAjax("getPlayersByGuids",t,function(e){$.each(e.result,
function(e,t){window.setPlayerName(t.guid,t.nickname),window.playersInResolving.splice(window.playersInResolving.indexOf(t.guid),1)}),window.selectedPortal&&window.renderPortalDetails(window.selectedPortal)},function(){console.warn("resolving player guids failed: "+e.join(", ")),window.playersToResolve.concat(e)})},window.setPlayerName=function(e,t){$.trim(""+t).slice(0,5)==='{"L":'&&!window.alertFor37WasShown&&(window.alertFor37WasShown=!0,alert("You have run into bug #37. Please help me solve it!
Copy and paste this text and post it here:
https://github.com/breunigs/ingress-intel-total-conversion/issues/37
If copy & pasting doesn’t work, make a screenshot instead.


"+window.debug.printStackTrace()+"


"+JSON.stringify(t))),localStorage[e]=t},window.loadPlayerNamesForPortal=function(e){if(map.getZoom()<PRECACHE_PLAYER_NAMES_ZOOM)return;var t=e;t.captured&&t.captured.capturingPlayerId&&getPlayerName(t.captured.capturingPlayerId);if(!t.resonatorArray||!t.resonatorArray.resonators)return;$.each(t.resonatorArray.resonators,function(e,t){t&&getPlayerName(t.ownerGuid)})},window.isSmartphone=function(){return navigator.userAgent.match(/Android.*Mobile/)},window.smartphone=function(){},window.runOnSmartphonesBeforeBoot=function(){if(!isSmartphone())return;console.warn("running smartphone pre boot stuff"),window.localStorage["iitc.zoom.buttons"]="false",window.setupStyles=function(){$("head").append("<style>"+["#largepreview.enl img { border:2px solid "+COLORS[TEAM_ENL]+"; } ","#largepreview.res img { border:2px solid "+COLORS[TEAM_RES]+"; } ","#largepreview.none img { border:2px solid "+COLORS[TEAM_NONE]+"; } "].join("
")+"</style>")},$("#chatcontrols a").click(function(){$("#scrollwrapper, #updatestatus").hide(),$("#map").css("visibility","hidden"),$("#chat, #chatinput").show()}),window.smartphone.mapButton=$("<a>map</a>").click(function(){$("#chat, #chatinput, #scrollwrapper").hide(),$("#map").css("visibility","visible"),$("#updatestatus").show(),$(".active").removeClass("active"),$(this).addClass("active")}),window.smartphone.sideButton=$("<a>info</a>").click(function(){$("#chat, #chatinput, #updatestatus").hide(),$("#map").css("visibility","hidden"),$("#scrollwrapper").show(),$(".active").removeClass("active"),$(this).addClass("active")}),$("#chatcontrols").append(smartphone.mapButton).append(smartphone.sideButton),window.addHook("portalDetailsUpdated",function(e){var t=$(".imgpreview img").removeClass("hide");if(!t.length){$(".fullimg").remove();return}$(".fullimg").length?$(".fullimg").replaceWith(t.addClass("fullimg")):t.addClass("fullimg").appendTo("#sidebar")})},window.runOnSmartphonesAfterBoot=function(){if(!isSmartphone())return;console.warn("running smartphone post boot stuff"),chat.toggle(),smartphone.mapButton.click(),$("#portaldetails").off("click","**"),$(".leaflet-right").addClass("leaflet-left").removeClass("leaflet-right");var e=$("#chatcontrols a:visible");e.css("width",100/e.length+"%"),window.addHook("portalAdded",function(e){e.portal.on("add",function(){if(!this._container||this.options.addedTapHoldHandler)return;this.options.addedTapHoldHandler=!0;var e=this.options.guid;$(this._container).on("taphold",function(){window.renderPortalDetails(e),window.smartphone.sideButton.click()})})})},window.debug=function(){},window.debug.renderDetails=function(){console.log("portals: "+Object.keys(portals).length),console.log("links:   "+Object.keys(links).length),console.log("fields:  "+Object.keys(fields).length)},window.debug.printStackTrace=function(){var e=new Error("dummy");return console.log(e.stack),e.stack},window.debug.clearPortals=function(){for(var e=0;e<portalsLayers.length;e++)portalsLayers[e].clearLayers()},window.debug.clearLinks=function(){linksLayer.clearLayers()},window.debug.clearFields=function(){fieldsLayer.clearLayers()},window.debug.getFields=function(){return fields},window.debug.forceSync=function(){localStorage.clear(),window.playersToResolve=[],window.playersInResolving=[],debug.clearFields(),debug.clearLinks(),debug.clearPortals(),updateGameScore(),requestData()},window.debug.console=function(){$("#debugconsole").text()},window.debug.console.create=function(){if($("#debugconsole").length)return;$("#chatcontrols").append("<a>debug</a>"),$("#chatcontrols a:last").click(function(){$("#chatinput mark").css("cssText","color: #bbb !important").text("debug:"),$("#chat > div").hide(),$("#debugconsole").show(),$("#chatcontrols .active").removeClass("active"),$(this).addClass("active")}),$("#chat").append('<div style="display: none" id="debugconsole"><table></table></div>')},window.debug.console.renderLine=function(e,t){debug.console.create();switch(t){case"error":var n="#FF424D";break;case"warning":var n="#FFDE42";break;default:var n="#eee"}if(typeof e!="string"&&typeof e!="number"){var r=[];e=JSON.stringify(e,function(e,t){if(typeof t=="object"&&t!==null){if(r.indexOf(t)!==-1)return;r.push(t)}return t}),r=null}var i=new Date,s=i.toLocaleTimeString(),o=i.toLocaleString(),u='<time title="'+o+'" data-timestamp="'+i.getTime()+'">'+s+"</time>",a='style="color:'+n+'"',f="<tr><td>"+u+"</td><td><mark "+a+">"+t+"</mark></td><td>"+e+"</td></tr>";$("#debugconsole table").prepend(f)},window.debug.console.log=function(e){debug.console.renderLine(e,"notice")},window.debug.console.warn=function(e){debug.console.renderLine(e,"warning")},window.debug.console.error=function(e){debug.console.renderLine(e,"error")},window.debug.console.overwriteNative=function(){window.debug.console.create(),window.console=function(){},window.console.log=window.debug.console.log,window.console.warn=window.debug.console.warn,window.console.error=window.debug.console.error},window.debug.console.overwriteNativeIfRequired=function(){(!window.console||L.Browser.mobile)&&window.debug.console.overwriteNative()},window.setupGeosearch=function(){$("#geosearch").keypress(function(e){if((e.keyCode?e.keyCode:e.which)!=13)return;$.getJSON(NOMINATIM+encodeURIComponent($(this).val()),function(e){if(!e||!e[0])return;var t=e[0].boundingbox;if(!t)return;var n=new L.LatLng(t[0],t[2]),r=new L.LatLng(t[1],t[3]),i=new L.LatLngBounds(n,r);window.map.fitBounds(i),window.isSmartphone()&&window.smartphone.mapButton.click()}),e.preventDefault()})},window.getPortalLevel=function(e){var t=0,n=!1;return $.each(e.resonatorArray.resonators,function(e,r){if(!r)return!0;t+=parseInt(r.level),n=!0}),n?Math.max(1,t/8):0},window.getTotalPortalEnergy=function(e){var t=0;return $.each(e.resonatorArray.resonators,function(e,n){if(!n)return!0;var r=parseInt(n.level),i=RESO_NRG[r];t+=i}),t},window.getPortalEnergy=window.getTotalPortalEnergy,window.getCurrentPortalEnergy=function(e){var t=0;return $.each(e.resonatorArray.resonators,function(e,n){if(!n)return!0;t+=parseInt(n.energyTotal)}),t},window.getPortalRange=function(e){var t=0,n=!1;return $.each(e.resonatorArray.resonators,function(e,r){if(!r)return n=!0,!1;t+=parseInt(r.level)}),n?0:160*Math.pow(getPortalLevel(e),4)},window.getAvgResoDist=function(e){var t=0,n=0;return $.each(e.resonatorArray.resonators,function(e,r){if(!r)return!0;t+=parseInt(r.distanceToPortal),n++}),n?t/n:0},window.getAttackApGain=function(e){var t=0;$.each(e.resonatorArray.resonators,function(e,n){if(!n)return!0;t+=1});var n=e.portalV2.linkedEdges?e.portalV2.linkedEdges.length:0,r=e.portalV2.linkedFields?e.portalV2.linkedFields.length:0,i=t*DESTROY_RESONATOR,s=n*DESTROY_LINK,o=r*DESTROY_FIELD,u=i+s+o,a=CAPTURE_PORTAL+8*DEPLOY_RESONATOR+COMPLETION_BONUS,f=u+a;return{totalAp:f,destroyAp:u,captureAp:a,resoCount:t,resoAp:i,linkCount:n,linkAp:s,fieldCount:r,fieldAp:o}}}if(document.getElementsByTagName("html")[0].getAttribute("itemscope")!=null)throw"Ingress Intel Website is down, not a userscript issue.";window.iitcBuildDate="2013-03-11-080223",window.onload=function(){};if(window.location.protocol!=="https:"){var redir=window.location.href.replace(/^http:/,"https:");throw window.location=redir,"Need to load HTTPS version."}var scr=document.getElementsByTagName("script");for(var x in scr){var s=scr[x];if(s.src)continue;if(s.type!=="text/javascript")continue;var d=s.innerHTML.split("
");break}if(!d)throw document.getElementById("header_email")?(setTimeout("location.reload();",3e3),"Page doesn’t have player data, but you are logged in. Reloading in 3s."):"Couldn’t retrieve player data. Are you logged in?";for(var i=0;i<d.length;i++){if(!d[i].match("var PLAYER = "))continue;eval(d[i].match(/^var /,"window."));break}document.getElementsByTagName("head")[0].innerHTML='<title>Ingress Intel Map</title><style>/* general rules ******************************************************/

html, body, #map {
  height: 100%;
  width: 100%;
  overflow: hidden; /* workaround for #373 */
  background: #0e3d4e;
}

body {
  font-size: 14px;
  font-family: "coda",arial,helvetica,sans-serif;
  margin: 0;
}

#scrollwrapper {
  overflow: hidden;
  position: fixed;
  right: -38px;
  top: 0;
  width: 340px;
  bottom: 45px;
  z-index: 1001;
}

#sidebar {
  background-color: rgba(8, 48, 78, 0.9);
  border-left: 1px solid #20A8B1;
  color: #888;
  position: relative;
  left: 0;
  top: 0;
  max-height: 100%;
  overflow-y:scroll;
  overflow-x:hidden;
  z-index: 3000;
}

#sidebartoggle {
  display: block;
  padding: 20px 5px;
  margin-top: -31px; /* -(toggle height / 2) */
  line-height: 10px;
  position: absolute;
  top: 340px; /* (sidebar height / 2) */
  z-index: 3001;
  background-color: rgba(8, 48, 78, 0.9);
  color: #FFCE00;
  border: 1px solid #20A8B1;
  border-right: none;
  border-radius: 5px 0 0 5px;
  text-decoration: none;
  right: 301px; /* overwritten later by the script with SIDEBAR_WIDTH */
}

.enl {
  color: #03fe03 !important;
}

.res {
  color: #00c5ff !important;
}

.none {
  color: #fff;
}

a {
  color: #ffce00;
  cursor: pointer;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

/* map display, required because GMaps uses a high z-index which is
 * normally above Leaflet’s vector pane */
.leaflet-map-pane {
  z-index: 1000;
}

.leaflet-control-layers-overlays label.disabled {
  text-decoration: line-through;
  cursor: help;
}

.help {
  cursor: help;
}

.toggle {
  display: block;
  height: 0;
  width: 0;
}

/* field mu count */
.fieldmu {
  color: #FFCE00;
  font-size:13px;
  font-family: "coda",arial,helvetica,sans-serif; /*override leaflet-container */
  text-align: center;
  text-shadow: 0 0 0.2em black, 0 0 0.2em black, 0 0 0.2em black;
}


/* chat ***************************************************************/

#chatcontrols {
  color: #FFCE00;
  background: rgba(8, 48, 78, 0.9);
  position: absolute;
  left: 0;
  z-index: 3001;
  height: 26px;
  padding-left:1px;
}

#chatcontrols.expand {
  top: 0;
  bottom: auto;
}

#chatcontrols a {
  margin-left: -1px;
  display: inline-block;
  width: 94px;
  text-align: center;
  height: 24px;
  line-height: 24px;
  border: 1px solid #20A8B1;
  vertical-align: top;
}

#chatcontrols a:first-child {
  letter-spacing:-1px;
  text-decoration: none !important;
}

#chatcontrols a.active {
  border-color: #FFCE00;
  border-bottom-width:0px;
  font-weight:bold
}

#chatcontrols a.active + a {
  border-left-color: #FFCE00
}


#chatcontrols .toggle {
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  margin: 6px auto auto;
}

#chatcontrols .expand {
  border-bottom: 10px solid #FFCE00;
}

#chatcontrols .shrink {
  border-top: 10px solid #FFCE00;
}


#chat {
  position: absolute;
  width: 708px;
  bottom: 23px;
  left: 0;
  z-index: 3000;
  background: rgba(8, 48, 78, 0.9);
  font-size: 12.6px;
  color: #eee;
  border: 1px solid #20A8B1;
  border-bottom: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

em {
  color: red;
  font-style: normal;
}

#chat.expand {
  height:auto;
  top: 25px;
}

#chatpublic, #chatfull, #chatcompact {
  display: none;
}

#chat > div {
  overflow-x:hidden;
  overflow-y:scroll;
  height: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 2px;
  position:relative;
}

#chat table, #chatinput table {
  width: 100%;
  table-layout: fixed;
  border-spacing: 0m;
  border-collapse: collapse;
}

#chatinput table {
  height: 100%;
}

#chat td, #chatinput td {
  font-family: Verdana, sans-serif;
  font-size: 12.6px;
  vertical-align: top;
  padding-bottom: 3px;
}

/* time */
#chat td:first-child, #chatinput td:first-child {
  width: 44px;
  overflow: hidden;
  padding-left: 2px;
  color: #bbb;
  white-space: nowrap;
}

#chat time {
  cursor: help;
}

/* nick */
#chat td:nth-child(2), #chatinput td:nth-child(2) {
  width: 91px;
  overflow: hidden;
  padding-left: 2px;
  white-space: nowrap;
}

mark {
  background: transparent;
}

.invisep {
  display: inline-block;
  width: 1px;
  height: 1px;
  overflow:hidden;
  color: transparent;
}

/* divider */
summary {
  color: #bbb;
  display: inline-block;
  font-family: Verdana,sans-serif;
  height: 16px;
  overflow: hidden;
  padding: 0 2px;
  white-space: nowrap;
  width: 100%;
}

#chatinput {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0 2px;
  background: rgba(8, 48, 78, 0.9);
  width: 708px;
  border: 1px solid #20A8B1;
  z-index: 3001;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

#chatinput td {
  padding-bottom: 1px;
  vertical-align: middle;
}


#chatinput input {
  background: transparent;
  font-size: 12.6px;
  font-family: Verdana,sans-serif;
  color: #EEEEEE;
  width: 100%;
  height: 100%;
}



/* sidebar ************************************************************/

#sidebar > * {
  border-bottom: 1px solid #20A8B1;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}



#sidebartoggle .toggle {
  border-bottom: 10px solid transparent;
  border-top: 10px solid transparent;
}

#sidebartoggle .open {
  border-right: 10px solid #FFCE00;
}

#sidebartoggle .close {
  border-left: 10px solid #FFCE00;
}

/* player stats */
#playerstat {
  height: 30px;
}

h2 {
  color: #ffce00;
  font-size: 21px;
  padding: 0 4px;
  margin: 0;
  cursor:help;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
}

h2 #name {
  display: inline-block;
  overflow: hidden;
  text-overflow: "~";
  vertical-align: top;
  white-space: nowrap;
  width: 205px;
  position: relative;
}

h2 #stats {
  float: right;
  height: 100%;
  overflow: hidden;
}

h2 #signout {
  font-size: 12px;
  font-weight: normal;
  line-height: 29px;
  padding: 0 4px;
  position: absolute;
  top: 0;
  right: 0;
  background-color: rgba(8, 48, 78, 0.5);
  display: none; /* starts hidden */
}

h2 sup, h2 sub {
  display: block;
  font-size: 11px;
  margin-bottom: -1px;
}


/* gamestats */
#gamestat {
  height: 22px;
}

#gamestat span {
  display: block;
  float: left;
  font-weight: bold;
  cursor:help;
  height: 21px;
  line-height: 22px;
}

#gamestat .res {
  background: #005684;
  text-align: right;
}

#gamestat .enl {
  background: #017f01;
}


/* geosearch input, and others */
input {
  background-color: rgba(0, 0, 0, 0.3);
  color: #ffce00;
  height: 24px;
  padding:3px 4px 1px 4px;
  font-size: 14px;
  border:0;
  font-family:inherit;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

::-webkit-input-placeholder {
  font-style: italic;
}

:-moz-placeholder {
  font-style: italic;
}

::-moz-placeholder {
  font-style: italic;
}

.leaflet-control-layers input {
  height: auto;
  padding: 0;
}


/* portal title and image */
h3 {
  font-size: 17px;
  padding: 0 4px;
  margin:0;
  height: 25px;
  width: 100%;
  overflow:hidden;
  text-overflow: "~";
  white-space: nowrap;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.imgpreview {
  height: 200px;
  background: no-repeat center center;
  background-size: contain;
  cursor: help;
  overflow: hidden;
}

.imgpreview img.hide {
  display: none;
}

#level {
  font-size: 40px;
  text-shadow: -1px -1px #000, 1px -1px #000, -1px 1px #000, 1px 1px #000, 0 0 5px #fff;
  display: block;
  margin-right: 15px;
  text-align:right;
}

/* portal mods */
.mods {
  margin: 5px auto 1px auto;
  padding: 0 2px;
  width: 296px;
  height: 75px;
  text-align: center;
}

.mods span {
  background-color: rgba(0, 0, 0, 0.3);
  /* can’t use inline-block because Webkit’s implementation is buggy and
   * introduces additional margins in random cases. No clear necessary,
   * as that’s solved by setting height on .mods. */
  display: block;
  float:left;
  height: 63px;
  margin: 0 2px;
  overflow: hidden;
  padding: 2px;
  text-align: center;
  width: 63px;
  cursor:help;
  border: 1px solid #666;
}

.mods span:not([title]) {
  cursor: auto;
}

.res .mods span, .res .meter {
  border: 1px solid #0076b6;
}
.enl .mods span, .enl .meter {
  border: 1px solid #017f01;
}

/* random details, resonator details */
#randdetails, #resodetails {
  width: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0 4px;
  table-layout: fixed;
  border-spacing: 0m;
  border-collapse: collapse;
}

#randdetails td, #resodetails td {
  overflow: hidden;
  text-overflow: "~";
  vertical-align: top;
  white-space: nowrap;
  width: 50%;
  width: calc(50% - 62px);
}

#randdetails th, #resodetails th {
  font-weight: normal;
  text-align: right;
  width: 62px;
  padding-right:4px;
  padding-left:4px;
}

#randdetails th + th, #resodetails th + th {
  text-align: left;
  padding-right: 4px;
  padding-left: 4px;
}

#randdetails td:first-child, #resodetails td:first-child {
  text-align: right;
  padding-left: 2px;
}

#randdetails td:last-child, #resodetails td:last-child {
  text-align: left;
  padding-right: 2px;
}


#randdetails {
  margin-top: 9px;
  margin-bottom: 9px;
}


#randdetails tt {
  font-family: inherit;
  cursor: help;
}

/* resonators */
#resodetails {
  margin-bottom: 9px;
}

.meter {
  background: #000;
  cursor: help;
  display: inline-block;
  height: 18px;
  padding: 1px;
  width: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  position: relative;
  left: 0;
  top: 0;
}

.meter span {
  display: block;
  height: 14px;
}

.meter-level {
  position: absolute;
  top: -2px;
  left: 50%;
  margin-left: -6px;
  text-shadow: 0.0em 0.0em 0.3em #808080;
}
/* links below resos */

.linkdetails {
  margin-bottom: 8px;
}

aside {
  display: inline-block;
  padding-right: 9px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  text-align: center;
}

.linkdetails aside:last-child {
  padding-right: 0;
}

.linkdetails aside:nth-child(1) {
  text-align: right;
  width:88px;
}

.linkdetails aside:nth-child(2) {
  text-align: right;
  width:67px;
}

.linkdetails aside:nth-child(4) {
  margin-left:13px;
}

#toolbox {
  padding: 4px 2px;
  font-size:90%;
}

#toolbox > a {
  padding: 4px;
}

/* a common portal display takes this much space (prevents moving
 * content when first selecting a portal) */

#portaldetails {
  min-height: 553px;
}


/* update status */
#updatestatus {
  background-color: rgba(8, 48, 78, 0.9);
  border-bottom: 0;
  border-top: 1px solid #20A8B1;
  border-left: 1px solid #20A8B1;
  bottom: 0;
  color: #ffce00;
  font-size:13px;
  padding: 4px;
  position: fixed;
  right: 0;
  z-index:3002;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}


/* preview */

#largepreview {
  left: 50%;
  position: fixed;
  top: 50%;
  z-index: 2000;
}
#largepreview img {
  box-shadow: 0 0 40px #000;
}
#largepreview img {
  border: 2px solid #f8ff5e;
}

/* tooltips, dialogs */
.ui-tooltip, .ui-dialog {
  max-width: 300px;
  position: absolute;
  z-index: 9999;
  background-color: rgba(8, 48, 78, 0.9);
  border: 1px solid #20A8B1;
  color: #eee;
  font: 13px/15px "Helvetica Neue", Arial, Helvetica, sans-serif;
  padding: 2px 4px;
}

.ui-tooltip, .ui-dialog a {
  color: #FFCE00;
}

.ui-dialog {
  padding: 0;
  border-radius: 2px;
}

.ui-widget-overlay {
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index:9998;
  background:  #444;
  opacity: 0.6;
}

.ui-dialog-titlebar {
  display: none;
}

.ui-dialog-content {
  padding: 12px;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 600px !important;
  max-width: 700px !important;
}

.ui-dialog-buttonpane {
  padding: 12px;
  border-top: 1px solid #20A8B1;
}

.ui-dialog-buttonset {
  text-align: right;
}

.ui-dialog-buttonset button,
.ui-dialog-content button {
  padding: 2px;
  min-width: 80px;
  color: #FFCE00;
  border: 1px solid #FFCE00;
  background-color: rgba(8, 48, 78, 0.9);
}

.ui-dialog-buttonset button:hover {
  text-decoration: underline;
}

td {
  padding: 0;
  vertical-align: top;
}

td + td {
  padding-left: 4px;
}

/* redeem results *****************************************************/
.redeem-result {
  font-size: 14px;
  font-family: arial,helvetica,sans-serif;
  table-layout: fixed;
}

.redeem-result tr > td:first-child {
  width: 50px;
  text-align: right;
}
</style><style>/* required styles */

.leaflet-map-pane,
.leaflet-tile,
.leaflet-marker-icon,
.leaflet-marker-shadow,
.leaflet-tile-pane,
.leaflet-overlay-pane,
.leaflet-shadow-pane,
.leaflet-marker-pane,
.leaflet-popup-pane,
.leaflet-overlay-pane svg,
.leaflet-zoom-box,
.leaflet-image-layer,
.leaflet-layer {
	position: absolute;
	left: 0;
	top: 0;
	}
.leaflet-container {
	overflow: hidden;
	-ms-touch-action: none;
	}
.leaflet-tile,
.leaflet-marker-icon,
.leaflet-marker-shadow {
	-webkit-user-select: none;
	   -moz-user-select: none;
	        user-select: none;
	}
.leaflet-marker-icon,
.leaflet-marker-shadow {
	display: block;
	}
/* map is broken in FF if you have max-width: 100% on tiles */
.leaflet-container img {
	max-width: none !important;
	}
/* stupid Android 2 doesn\'t understand "max-width: none" properly */
.leaflet-container img.leaflet-image-layer {
	max-width: 15000px !important;
	}
.leaflet-tile {
	filter: inherit;
	visibility: hidden;
	}
.leaflet-tile-loaded {
	visibility: inherit;
	}
.leaflet-zoom-box {
	width: 0;
	height: 0;
	}

.leaflet-tile-pane    { z-index: 2; }
.leaflet-objects-pane { z-index: 3; }
.leaflet-overlay-pane { z-index: 4; }
.leaflet-shadow-pane  { z-index: 5; }
.leaflet-marker-pane  { z-index: 6; }
.leaflet-popup-pane   { z-index: 7; }


/* control positioning */

.leaflet-control {
	position: relative;
	z-index: 7;
	pointer-events: auto;
	}
.leaflet-top,
.leaflet-bottom {
	position: absolute;
	z-index: 1000;
	pointer-events: none;
	}
.leaflet-top {
	top: 0;
	}
.leaflet-right {
	right: 0;
	}
.leaflet-bottom {
	bottom: 0;
	}
.leaflet-left {
	left: 0;
	}
.leaflet-control {
	float: left;
	clear: both;
	}
.leaflet-right .leaflet-control {
	float: right;
	}
.leaflet-top .leaflet-control {
	margin-top: 10px;
	}
.leaflet-bottom .leaflet-control {
	margin-bottom: 10px;
	}
.leaflet-left .leaflet-control {
	margin-left: 10px;
	}
.leaflet-right .leaflet-control {
	margin-right: 10px;
	}


/* zoom and fade animations */

.leaflet-fade-anim .leaflet-tile,
.leaflet-fade-anim .leaflet-popup {
	opacity: 0;
	-webkit-transition: opacity 0.2s linear;
	   -moz-transition: opacity 0.2s linear;
	     -o-transition: opacity 0.2s linear;
	        transition: opacity 0.2s linear;
	}
.leaflet-fade-anim .leaflet-tile-loaded,
.leaflet-fade-anim .leaflet-map-pane .leaflet-popup {
	opacity: 1;
	}

.leaflet-zoom-anim .leaflet-zoom-animated {
	-webkit-transition: -webkit-transform 0.25s cubic-bezier(0,0,0.25,1);
	   -moz-transition:    -moz-transform 0.25s cubic-bezier(0,0,0.25,1);
	     -o-transition:      -o-transform 0.25s cubic-bezier(0,0,0.25,1);
	        transition:         transform 0.25s cubic-bezier(0,0,0.25,1);
	}
.leaflet-zoom-anim .leaflet-tile,
.leaflet-pan-anim .leaflet-tile,
.leaflet-touching .leaflet-zoom-animated {
	-webkit-transition: none;
	   -moz-transition: none;
	     -o-transition: none;
	        transition: none;
	}

.leaflet-zoom-anim .leaflet-zoom-hide {
	visibility: hidden;
	}


/* cursors */

.leaflet-clickable {
	cursor: pointer;
	}
.leaflet-container {
	cursor: -webkit-grab;
	cursor:    -moz-grab;
	}
.leaflet-popup-pane,
.leaflet-control {
	cursor: auto;
	}
.leaflet-dragging,
.leaflet-dragging .leaflet-clickable,
.leaflet-dragging .leaflet-container {
	cursor: move;
	cursor: -webkit-grabbing;
	cursor:    -moz-grabbing;
	}


/* visual tweaks */

.leaflet-container {
	background: #ddd;
	outline: 0;
	}
.leaflet-container a {
	color: #0078A8;
	}
.leaflet-container a.leaflet-active {
	outline: 2px solid orange;
	}
.leaflet-zoom-box {
	border: 2px dotted #05f;
	background: white;
	opacity: 0.5;
	}


/* general typography */
.leaflet-container {
	font: 12px/1.5 "Helvetica Neue", Arial, Helvetica, sans-serif;
	}


/* general toolbar styles */

.leaflet-bar {
	box-shadow: 0 0 8px rgba(0,0,0,0.4);
	border: 1px solid #888;
	-webkit-border-radius: 5px;
	        border-radius: 5px;
	}
.leaflet-bar-part {
	background-color: rgba(255, 255, 255, 0.8);
	border-bottom: 1px solid #aaa;
	}
.leaflet-bar-part-top {
	-webkit-border-radius: 4px 4px 0 0;
	        border-radius: 4px 4px 0 0;
	}
.leaflet-bar-part-bottom {
	-webkit-border-radius: 0 0 4px 4px;
	        border-radius: 0 0 4px 4px;
	border-bottom: none;
	}

.leaflet-touch .leaflet-bar {
	-webkit-border-radius: 10px;
	        border-radius: 10px;
	}
.leaflet-touch .leaflet-bar-part {
	border-bottom: 4px solid rgba(0,0,0,0.3);
	}
.leaflet-touch .leaflet-bar-part-top {
	-webkit-border-radius: 7px 7px 0 0;
	        border-radius: 7px 7px 0 0;
	}
.leaflet-touch .leaflet-bar-part-bottom {
	-webkit-border-radius: 0 0 7px 7px;
	        border-radius: 0 0 7px 7px;
	border-bottom: none;
	}


/* zoom control */

.leaflet-container .leaflet-control-zoom {
	margin-left: 13px;
	margin-top: 12px;
	}
.leaflet-control-zoom a {
	width: 22px;
	height: 22px;
	text-align: center;
	text-decoration: none;
	color: black;
	}
.leaflet-control-zoom a,
.leaflet-control-layers-toggle {
	background-position: 50% 50%;
	background-repeat: no-repeat;
	display: block;
	}
.leaflet-control-zoom a:hover {
	background-color: #fff;
	color: #777;
	}
.leaflet-control-zoom-in {
	font: bold 18px/24px Arial, Helvetica, sans-serif;
	}
.leaflet-control-zoom-out {
	font: bold 23px/20px Tahoma, Verdana, sans-serif;
	}
.leaflet-control-zoom a.leaflet-control-zoom-disabled {
	cursor: default;
	background-color: rgba(255, 255, 255, 0.8);
	color: #bbb;
	}

.leaflet-touch .leaflet-control-zoom a {
	width: 30px;
	height: 30px;
	}
.leaflet-touch .leaflet-control-zoom-in {
	font-size: 24px;
	line-height: 29px;
	}
.leaflet-touch .leaflet-control-zoom-out {
	font-size: 28px;
	line-height: 24px;
	}

/* layers control */

.leaflet-control-layers {
	box-shadow: 0 1px 7px rgba(0,0,0,0.4);
	background: #f8f8f9;
	-webkit-border-radius: 8px;
	        border-radius: 8px;
	}
.leaflet-control-layers-toggle {
	background-image: url(https://raw.github.com/breunigs/ingress-intel-total-conversion/gh-pages/dist/images/layers.png);
	width: 36px;
	height: 36px;
	}
.leaflet-touch .leaflet-control-layers-toggle {
	width: 44px;
	height: 44px;
	}
.leaflet-control-layers .leaflet-control-layers-list,
.leaflet-control-layers-expanded .leaflet-control-layers-toggle {
	display: none;
	}
.leaflet-control-layers-expanded .leaflet-control-layers-list {
	display: block;
	position: relative;
	}
.leaflet-control-layers-expanded {
	padding: 6px 10px 6px 6px;
	color: #333;
	background: #fff;
	}
.leaflet-control-layers-selector {
	margin-top: 2px;
	position: relative;
	top: 1px;
	}
.leaflet-control-layers label {
	display: block;
	}
.leaflet-control-layers-separator {
	height: 0;
	border-top: 1px solid #ddd;
	margin: 5px -10px 5px -6px;
	}


/* attribution and scale controls */

.leaflet-container .leaflet-control-attribution {
	background-color: rgba(255, 255, 255, 0.7);
	box-shadow: 0 0 5px #bbb;
	margin: 0;
	}
.leaflet-control-attribution,
.leaflet-control-scale-line {
	padding: 0 5px;
	color: #333;
	}
.leaflet-container .leaflet-control-attribution,
.leaflet-container .leaflet-control-scale {
	font-size: 11px;
	}
.leaflet-left .leaflet-control-scale {
	margin-left: 5px;
	}
.leaflet-bottom .leaflet-control-scale {
	margin-bottom: 5px;
	}
.leaflet-control-scale-line {
	border: 2px solid #777;
	border-top: none;
	color: black;
	line-height: 1.1;
	padding: 2px 5px 1px;
	font-size: 11px;
	text-shadow: 1px 1px 1px #fff;
	background-color: rgba(255, 255, 255, 0.5);
	box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.2);
	white-space: nowrap;
	overflow: hidden;
	}
.leaflet-control-scale-line:not(:first-child) {
	border-top: 2px solid #777;
	border-bottom: none;
	margin-top: -2px;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
	}
.leaflet-control-scale-line:not(:first-child):not(:last-child) {
	border-bottom: 2px solid #777;
	}

.leaflet-touch .leaflet-control-attribution,
.leaflet-touch .leaflet-control-layers,
.leaflet-touch .leaflet-control-zoom {
	box-shadow: none;
	}
.leaflet-touch .leaflet-control-layers,
.leaflet-touch .leaflet-control-zoom {
	border: 4px solid rgba(0,0,0,0.3);
	}


/* popup */

.leaflet-popup {
	position: absolute;
	text-align: center;
	}
.leaflet-popup-content-wrapper {
	padding: 1px;
	text-align: left;
	-webkit-border-radius: 20px;
	        border-radius: 20px;
	}
.leaflet-popup-content {
	margin: 14px 20px;
	line-height: 1.4;
	}
.leaflet-popup-content p {
	margin: 18px 0;
	}
.leaflet-popup-tip-container {
	margin: 0 auto;
	width: 40px;
	height: 20px;
	position: relative;
	overflow: hidden;
	}
.leaflet-popup-tip {
	width: 15px;
	height: 15px;
	padding: 1px;

	margin: -8px auto 0;

	-webkit-transform: rotate(45deg);
	   -moz-transform: rotate(45deg);
	    -ms-transform: rotate(45deg);
	     -o-transform: rotate(45deg);
	        transform: rotate(45deg);
	}
.leaflet-popup-content-wrapper, .leaflet-popup-tip {
	background: white;

	box-shadow: 0 3px 14px rgba(0,0,0,0.4);
	}
.leaflet-container a.leaflet-popup-close-button {
	position: absolute;
	top: 0;
	right: 0;
	padding: 4px 5px 0 0;
	text-align: center;
	width: 18px;
	height: 14px;
	font: 16px/14px Tahoma, Verdana, sans-serif;
	color: #c3c3c3;
	text-decoration: none;
	font-weight: bold;
	background: transparent;
	}
.leaflet-container a.leaflet-popup-close-button:hover {
	color: #999;
	}
.leaflet-popup-scrolled {
	overflow: auto;
	border-bottom: 1px solid #ddd;
	border-top: 1px solid #ddd;
	}


/* div icon */

.leaflet-div-icon {
	background: #fff;
	border: 1px solid #666;
	}
.leaflet-editing-icon {
	-webkit-border-radius: 2px;
	        border-radius: 2px;
	}
</style>'+(navigator.userAgent.match(/Android.*Mobile/)?"<style>body {
  background: #000;
  color: #fff;
}

#sidebar, #updatestatus, #chatcontrols, #chat, #chatinput {
  background: #0B3351 !important
}


.leaflet-control-layers {
  margin-left: 0 !important;
  margin-top: 40px !important;
}

#chatcontrols {
  height: 38px;
  width: 100%;
}

/* hide shrink button */
#chatcontrols a:first-child {
  display: none;
}

#chatcontrols a {
  width: 50px;
  height:36px;
  overflow: hidden;
  vertical-align: middle;
  line-height: 36px;
  text-decoration: none;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

#chat {
  left:0;
  right:0;
  top:37px !important;
  bottom:30px;
  width: auto;
}

#chatinput {
  width: 100%;
  height: 30px;
}

#chat td:nth-child(2), #chatinput td:nth-child(2) {
  width: 77px;
}




#sidebartoggle {
  display: none !important;
}

#scrollwrapper {
  top: 36px;
  bottom: 0;
  max-height: none !important;
  width: 100% !important;
  right: 0;
  left:0;
}

#sidebar {
  width: 100% !important;
  min-height: 100%;
  border:0;
}

#sidebar > * {
  width: 100%;
}

#playerstat {
  margin-top: 5px;
}

#portaldetails {
  min-height: 0;
}

.fullimg {
  width: 100%;
}

.leaflet-control-layers-base {
  float: left;
}

.leaflet-control-layers-overlays {
  float: left;
  margin-left: 8px;
  border-left: 1px solid #DDDDDD;
  padding-left: 8px;
}

.leaflet-control-layers-separator {
  display: none;
}

.leaflet-control-layers-list label {
  padding: 6px 0;
}

.leaflet-control-attribution {

}
</style>"
:"")+'<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Coda"/>',document.getElementsByTagName("body")[0].innerHTML='<div id="map">Loading, please wait</div><div id="chatcontrols" style="display:none">  <a><span class="toggle expand"></span></a><a>full</a><a>compact</a><a>public</a><a class="active">faction</a></div><div id="chat" style="display:none">  <div id="chatfaction"></div>  <div id="chatpublic"></div>  <div id="chatcompact"></div>  <div id="chatfull"></div></div><form id="chatinput" style="display:none"><table><tr>  <td><time></time></td>  <td><mark>tell faction:</mark></td>  <td><input type="text"/></td></tr></table></form><a id="sidebartoggle"><span class="toggle close"></span></a><div id="scrollwrapper">  <div id="sidebar" style="display: none">    <div id="playerstat">t</div>    <div id="gamestat">&nbsp;loading global control stats</div>    <input id="geosearch" placeholder="Search location…" type="text"/>    <div id="portaldetails"></div>    <input id="redeem" placeholder="Redeem code…" type="text"/>    <div id="toolbox">      <a onmouseover="setPermaLink(this)">permalink</a>      <a href="https://github.com/breunigs/ingress-intel-total-conversion#readme" title="IITC = Ingress Intel Total Conversion.

On the script’s homepage you can:
– find updates
– get plugins
– report bugs
– and contribute." style="cursor: help">IITC’s page</a></div>  </div></div><div id="updatestatus"></div><div id="dialog"></div>';var script=document.createElement("script");script.appendChild(document.createTextNode("("+wrapper+")();")),(document.body||document.head||document.documentElement).appendChild(script);
