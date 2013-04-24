var akoola = {};

akoola.remote = {};
akoola.remote.handshake = "handshake.php";

akoola.tv = {};
akoola.tv.tan = 704/530;
akoola.tv.space = 256;

akoola.tv.getMinSize = function() {
    var width = $(window).width();
    var height = $(window).height();
    return width < height ? width : height;
};
akoola.tv.getWindowSize = function() {
    console.log($(window).width());
    console.log($(window).height());
    var width = $(window).width();
    var height = $(window).height();
    
    if(height < width)
    {
        width = Math.round(height * akoola.tv.tan);
    } 
    else {
        height = Math.round(width / akoola.tv.tan);
    }
    return {"width":width, "height":height};
};
akoola.tv.setChannelPos = function() {
    var left = Math.round($(window).width() / 2) + 704/2 - 100;
    $("#akoola_channel").css("left", left + "px");
};
akoola.tv.setChannelPos();
//akoola.tv.size = akoola.tv.getWindowSize();
akoola.tv.size = {"width":704, "height":530};
akoola.tv.minSize = akoola.tv.getMinSize();

akoola.tv.getTVSrc = function(width, height, cid) {
    return "<iframe src=\"http://mini.fengyunzhibo.com/mini/fymini.htm?f=akoola&code=null#width=" + (width + akoola.tv.space)+ "&height=530&tv="+cid+"\" frameborder=\"0\" scrolling=\"no\" width=\""+width+"\" height=\""+height+"\"></iframe>";
};
                  
akoola.tv.channels = [{"id":"0000000001_1342934731354", "cid":"0000000001_1342934731354", "channel_name":"湖南卫视", "online_num":1409},
{"id":"265_1345619812256", "cid":"265_1345619812256", "channel_name":"TVB翡翠台", "online_num":540},
{"id":"0000000001_1342934175248", "cid":"0000000001_1342934175248", "channel_name":"CCTV13-新闻", "online_num":254},
{"id":"cctv5", "cid":"cctv5", "channel_name":"CCTV5-体育", "online_num":59},
{"id":"0000000001_1342932961705", "cid":"0000000001_1342932961705", "channel_name":"CCTV3-综艺", "online_num":47},

{"id":"cctv1", "cid":"cctv1", "channel_name":"CCTV1-综合", "online_num":31},
{"id":"0000000001_1342935258488", "cid":"0000000001_1342935258488", "channel_name":"江苏卫视", "online_num":20},
{"id":"17803_1345190518981", "cid":"17803_1345190518981", "channel_name":"凤凰中文", "online_num":20},
{"id":"244712_1355970228914", "cid":"244712_1355970228914", "channel_name":"百思应用——风云日文频道2", "online_num":18},
{"id":"0000000001_1342935092275", "cid":"0000000001_1342935092275", "channel_name":"浙江卫视", "online_num":15},
{"id":"265_1343546661670", "cid":"265_1343546661670", "channel_name":"凤凰资讯", "online_num":15},
{"id":"6826_1355886800481", "cid":"6826_1355886800481", "channel_name":"经典动漫电影轮放", "online_num":14},
{"id":"0000000001_1342936231562", "cid":"0000000001_1342936231562", "channel_name":"山东卫视", "online_num":12},
{"id":"244712_1355970144020", "cid":"244712_1355970144020", "channel_name":"百思应用——风云日文频道1", "online_num":12},
{"id":"265_1344618988477", "cid":"265_1344618988477", "channel_name":"黑龙江卫视", "online_num":12},
{"id":"0000000001_1342934919515", "cid":"0000000001_1342934919515", "channel_name":"东方卫视", "online_num":11},
{"id":"244712_1355970928373", "cid":"244712_1355970928373", "channel_name":"百思应用——风云日文频道12", "online_num":11},
{"id":"244712_1355970488467", "cid":"244712_1355970488467", "channel_name":"百思应用——风云日文频道6", "online_num":10},
{"id":"0000000001_1342932659277", "cid":"0000000001_1342932659277", "channel_name":"CCTV2-财经", "online_num":9},
{"id":"gdty", "cid":"gdty", "channel_name":"广东体育", "online_num":9},
{"id":"17803_1351140653989", "cid":"17803_1351140653989", "channel_name":"HBO HD", "online_num":8},
{"id":"265_1343545217387", "cid":"265_1343545217387", "channel_name":"CCTV-10", "online_num":7},
{"id":"265_1345111218776", "cid":"265_1345111218776", "channel_name":"WCG 世界总决赛主舞台频道", "online_num":7},
{"id":"fyzq", "cid":"fyzq", "channel_name":"风云足球", "online_num":7},
{"id":"0000000001_1342933339979", "cid":"0000000001_1342933339979", "channel_name":"CCTV6-电影", "online_num":6},
{"id":"0000000001_1342934731354", "cid":"0000000001_1342934731354", "channel_name":"湖南卫视", "online_num":2234},
{"id":"265_1345619812256", "cid":"265_1345619812256", "channel_name":"TVB翡翠台", "online_num":1706},
{"id":"0000000001_1342934175248", "cid":"0000000001_1342934175248", "channel_name":"CCTV13-新闻", "online_num":1706},
{"id":"0000000001_1342932961705", "cid":"0000000001_1342932961705", "channel_name":"CCTV3-综艺", "online_num":419},
{"id":"cctv1", "cid":"cctv1", "channel_name":"CCTV1-综合", "online_num":31},
{"id":"0000000001_1342932659277", "cid":"0000000001_1342932659277", "channel_name":"CCTV2-财经", "online_num":22},
{"id":"0000000001_1342935092275", "cid":"0000000001_1342935092275", "channel_name":"浙江卫视", "online_num":21},
{"id":"0000000001_1342933566327", "cid":"0000000001_1342933566327", "channel_name":"CCTV7-军事农业", "online_num":17},
{"id":"265_1343545217387", "cid":"265_1343545217387", "channel_name":"CCTV-10", "online_num":16},
{"id":"265_1343546661670", "cid":"265_1343546661670", "channel_name":"凤凰资讯", "online_num":16},
{"id":"0000000001_1342935258488", "cid":"0000000001_1342935258488", "channel_name":"江苏卫视", "online_num":15},
{"id":"265_1344618988477", "cid":"265_1344618988477", "channel_name":"黑龙江卫视", "online_num":13},
{"id":"0000000001_1342933339979", "cid":"0000000001_1342933339979", "channel_name":"CCTV6-电影", "online_num":12},
{"id":"265_1344618178850", "cid":"265_1344618178850", "channel_name":"宁夏卫视", "online_num":11},
{"id":"0000000001_1342933223812", "cid":"0000000001_1342933223812", "channel_name":"CCTV4-中文国际", "online_num":11},
{"id":"0000000001_1342934919515", "cid":"0000000001_1342934919515", "channel_name":"东方卫视", "online_num":10},
{"id":"0000000001_1342936231562", "cid":"0000000001_1342936231562", "channel_name":"山东卫视", "online_num":9},
{"id":"17803_1351140653989", "cid":"17803_1351140653989", "channel_name":"HBO HD", "online_num":9},
{"id":"0000000001_1342936114278", "cid":"0000000001_1342936114278", "channel_name":"四川卫视", "online_num":6},
{"id":"0000000001_1342933777206", "cid":"0000000001_1342933777206", "channel_name":"CCTV8-电视剧", "online_num":4},
{"id":"0000000001_1342935872009", "cid":"0000000001_1342935872009", "channel_name":"辽宁卫视", "online_num":4},
{"id":"0000000001_1342936359838", "cid":"0000000001_1342936359838", "channel_name":"广东卫视", "online_num":4},
{"id":"0000000001_1342936939535", "cid":"0000000001_1342936939535", "channel_name":"深圳卫视", "online_num":4},
{"id":"265_1344618256329", "cid":"265_1344618256329", "channel_name":"青海卫视", "online_num":3},
{"id":"0000000001_1342935971991", "cid":"0000000001_1342935971991", "channel_name":"东南卫视", "online_num":3},
{"id":"17803_1345198217999", "cid":"17803_1345198217999", "channel_name":"[V] 音乐频道", "online_num":3},
{"id":"265_1344617846569", "cid":"265_1344617846569", "channel_name":"云南卫视", "online_num":3},
{"id":"10917_1355888380481", "cid":"10917_1355888380481", "channel_name":"上海东方财经", "online_num":3},
{"id":"0000000001_1342935582985", "cid":"0000000001_1342935582985", "channel_name":"北京卫视", "online_num":2},
{"id":"0000000001_1342935706118", "cid":"0000000001_1342935706118", "channel_name":"天津卫视", "online_num":2},
{"id":"265_1344618931160", "cid":"265_1344618931160", "channel_name":"甘肃卫视", "online_num":2},
{"id":"10917_1355888820684", "cid":"10917_1355888820684", "channel_name":"上海东方电影", "online_num":2},
{"id":"0000000001_1342935418853", "cid":"0000000001_1342935418853", "channel_name":"安徽卫视", "online_num":1},
{"id":"265_1344619001503", "cid":"265_1344619001503", "channel_name":"贵州卫视", "online_num":1},
{"id":"265_1344618588460", "cid":"265_1344618588460", "channel_name":"内蒙古卫视", "online_num":1},
{"id":"265_1348456614764", "cid":"265_1348456614764", "channel_name":"河南卫视", "online_num":1},
{"id":"265_1344618530527", "cid":"265_1344618530527", "channel_name":"山西卫视", "online_num":1},
{"id":"17803_1348061485429", "cid":"17803_1348061485429", "channel_name":"星空卫视", "online_num":1},
{"id":"0000000001_1342933941391", "cid":"0000000001_1342933941391", "channel_name":"CCTV14-少儿", "online_num":0},
{"id":"0000000001_1342936776533", "cid":"0000000001_1342936776533", "channel_name":"江西卫视", "online_num":0},
{"id":"265_1343545941346", "cid":"265_1343545941346", "channel_name":"河北卫视", "online_num":0},
{"id":"265_1344618074194", "cid":"265_1344618074194", "channel_name":"吉林卫视", "online_num":0},
{"id":"17803_1346818490324", "cid":"17803_1346818490324", "channel_name":"旅游卫视", "online_num":0},
{"id":"265_1344618317431", "cid":"265_1344618317431", "channel_name":"陕西卫视", "online_num":0},
{"id":"265_1344618737328", "cid":"265_1344618737328", "channel_name":"广西卫视", "online_num":0},
{"id":"265_1344618648713", "cid":"265_1344618648713", "channel_name":"重庆卫视", "online_num":0},
{"id":"265_1344618945681", "cid":"265_1344618945681", "channel_name":"新疆卫视", "online_num":0},
{"id":"265_1344618957290", "cid":"265_1344618957290", "channel_name":"西藏卫视", "online_num":0},
{"id":"17803_1345198393692", "cid":"17803_1345198393692", "channel_name":"广东珠江", "online_num":0},
{"id":"19858_1344677244792", "cid":"19858_1344677244792", "channel_name":"武汉电视台新闻综合频道", "online_num":0},
{"id":"87287_1348546771814", "cid":"87287_1348546771814", "channel_name":"THX动漫频道", "online_num":0},
{"id":"17803_1348666331443", "cid":"17803_1348666331443", "channel_name":"TVBS-G 欢乐台", "online_num":0},
{"id":"17803_1346228686684", "cid":"17803_1346228686684", "channel_name":"TVBS综合台", "online_num":0},
{"id":"17803_1346229300001", "cid":"17803_1346229300001", "channel_name":"华娱卫视", "online_num":0},
{"id":"9418_1352226030264", "cid":"9418_1352226030264", "channel_name":"自贡综合", "online_num":0},
{"id":"9418_1352226063576", "cid":"9418_1352226063576", "channel_name":"自贡公共", "online_num":0},
{"id":"265_1343546293150", "cid":"265_1343546293150", "channel_name":"湖北卫视", "online_num":0},
{"id":"187699_1353883584665", "cid":"187699_1353883584665", "channel_name":"嘉佳卡通频道", "online_num":0},
{"id":"195046_1353331658401", "cid":"195046_1353331658401", "channel_name":"兰州新闻综合", "online_num":0},
{"id":"195046_1353331730824", "cid":"195046_1353331730824", "channel_name":"兰州公共频道", "online_num":0},
{"id":"19858_1344677318225", "cid":"19858_1344677318225", "channel_name":"武汉电视台文艺频道", "online_num":0},
{"id":"9418_1352226241251", "cid":"9418_1352226241251", "channel_name":"重庆时尚", "online_num":0},
{"id":"9418_1352226288372", "cid":"9418_1352226288372", "channel_name":"重庆少儿", "online_num":0},
{"id":"9418_1352226377599", "cid":"9418_1352226377599", "channel_name":"重庆财经", "online_num":0},
{"id":"9418_1352226446138", "cid":"9418_1352226446138", "channel_name":"重庆汽摩", "online_num":0},
{"id":"9418_1352226494599", "cid":"9418_1352226494599", "channel_name":"重庆魅力时装", "online_num":0},
{"id":"9418_1352232073228", "cid":"9418_1352232073228", "channel_name":"蚌埠综合", "online_num":0},
{"id":"9418_1352232103958", "cid":"9418_1352232103958", "channel_name":"蚌埠生活", "online_num":0},
{"id":"9418_1353404004206", "cid":"9418_1353404004206", "channel_name":"广东新闻频道", "online_num":0},
{"id":"9418_1353404109903", "cid":"9418_1353404109903", "channel_name":"广东国际频道 ", "online_num":0},
{"id":"9418_1353404243596", "cid":"9418_1353404243596", "channel_name":"深圳国际频道(亚洲)", "online_num":0},
{"id":"9418_1353404316900", "cid":"9418_1353404316900", "channel_name":"深圳移动电视频道", "online_num":0},
{"id":"9418_1353404369912", "cid":"9418_1353404369912", "channel_name":"深圳宜和购物频道", "online_num":0},
{"id":"9418_1353406353393", "cid":"9418_1353406353393", "channel_name":"武汉少儿频道 ", "online_num":0},
{"id":"9418_1353408016006", "cid":"9418_1353408016006", "channel_name":"兰州生活经济频道 ", "online_num":0},
{"id":"9418_1353409837464", "cid":"9418_1353409837464", "channel_name":"重庆青少 ", "online_num":0},
{"id":"9418_1353579342905", "cid":"9418_1353579342905", "channel_name":"南京市江宁电视台3频道", "online_num":0},
{"id":"9418_1353926863121", "cid":"9418_1353926863121", "channel_name":"鄂尔多斯1新闻综合", "online_num":0},
{"id":"9418_1353926892081", "cid":"9418_1353926892081", "channel_name":"鄂尔多斯2经济服务", "online_num":0},
{"id":"9418_1353926942844", "cid":"9418_1353926942844", "channel_name":"鄂尔多斯3城市生活", "online_num":0},
{"id":"9418_1353926984945", "cid":"9418_1353926984945", "channel_name":"鄂尔多斯4蒙语综合", "online_num":0},
{"id":"5_1355977464222", "cid":"5_1355977464222", "channel_name":"BON蓝海卫视", "online_num":0},
{"id":"5_1355974252601", "cid":"5_1355974252601", "channel_name":"优漫卡通", "online_num":0},
{"id":"10917_1355887943641", "cid":"10917_1355887943641", "channel_name":"上海星尚", "online_num":0},
{"id":"10917_1355888501965", "cid":"10917_1355888501965", "channel_name":"上海理财频道", "online_num":0},
{"id":"10917_1355888684793", "cid":"10917_1355888684793", "channel_name":"上海电视剧", "online_num":0},
{"id":"10917_1355888961383", "cid":"10917_1355888961383", "channel_name":"上海纪实", "online_num":0},
{"id":"10917_1355889517857", "cid":"10917_1355889517857", "channel_name":"上海东方娱乐", "online_num":0},
{"id":"10917_1355890298036", "cid":"10917_1355890298036", "channel_name":"上海教育", "online_num":0},
{"id":"10917_1355891914544", "cid":"10917_1355891914544", "channel_name":"上海外语", "online_num":0},
{"id":"247032_1355890169120", "cid":"247032_1355890169120", "channel_name":"江苏综艺", "online_num":0},
{"id":"247032_1355899042996", "cid":"247032_1355899042996", "channel_name":"江苏国际", "online_num":0},
{"id":"247032_1355900268419", "cid":"247032_1355900268419", "channel_name":"江苏靓妆", "online_num":0},
{"id":"247032_1355900533869", "cid":"247032_1355900533869", "channel_name":"江苏城市", "online_num":0},
{"id":"247032_1355901378836", "cid":"247032_1355901378836", "channel_name":"江苏影视", "online_num":0},
{"id":"247032_1355904776564", "cid":"247032_1355904776564", "channel_name":"江苏幸福", "online_num":0},
{"id":"247032_1355914138232", "cid":"247032_1355914138232", "channel_name":"江苏公共", "online_num":0},
{"id":"5_1355973557311", "cid":"5_1355973557311", "channel_name":"江苏靓妆频道", "online_num":0},
{"id":"5_1355972310172", "cid":"5_1355972310172", "channel_name":"金鹰卡通", "online_num":0},
{"id":"5_1355972729496", "cid":"5_1355972729496", "channel_name":"上海新闻综合", "online_num":0},
{"id":"5_1355972934405", "cid":"5_1355972934405", "channel_name":"上海第一财经", "online_num":0},
{"id":"5_1355920791069", "cid":"5_1355920791069", "channel_name":"上海人文艺术", "online_num":0},
{"id":"5_1355976356569", "cid":"5_1355976356569", "channel_name":"财富天下频道", "online_num":-1},
{"id":"5_1355977982779", "cid":"5_1355977982779", "channel_name":"南京新闻综合", "online_num":-1},
{"id":"5_1355974076776", "cid":"5_1355974076776", "channel_name":"上海星尚", "online_num":-1},
{"id":"10917_1355898327774", "cid":"10917_1355898327774", "channel_name":"上海生活时尚", "online_num":-1},
{"id":"10917_1355899314596", "cid":"10917_1355899314596", "channel_name":"魅力音乐", "online_num":-1},
{"id":"247032_1355970390118", "cid":"247032_1355970390118", "channel_name":"优漫卡通", "online_num":-1},
{"id":"5_1355971573715", "cid":"5_1355971573715", "channel_name":"北京财经", "online_num":-1},
{"id":"5_1355971824099", "cid":"5_1355971824099", "channel_name":"北京文艺", "online_num":-1},
{"id":"5_1355971896269", "cid":"5_1355971896269", "channel_name":"江苏国际", "online_num":-1},
{"id":"5_1355971972168", "cid":"5_1355971972168", "channel_name":"北京科教", "online_num":-1},
{"id":"5_1355972214548", "cid":"5_1355972214548", "channel_name":"卡酷少儿", "online_num":-1},
{"id":"5_1355982349412", "cid":"5_1355982349412", "channel_name":"苏州新闻综合", "online_num":-1},
{"id":"cctv5", "cid":"cctv5", "channel_name":"CCTV5-体育", "online_num":63},
{"id":"fyzq", "cid":"fyzq", "channel_name":"风云足球", "online_num":10},
{"id":"wxty", "cid":"wxty", "channel_name":"上海五星体育", "online_num":8},
{"id":"gdty", "cid":"gdty", "channel_name":"广东体育", "online_num":6},
{"id":"guanlan", "cid":"guanlan", "channel_name":"风云灌篮", "online_num":5},
{"id":"cctvGW", "cid":"cctvGW", "channel_name":"高尔夫网球", "online_num":3},
{"id":"jbty", "cid":"jbty", "channel_name":"劲爆体育", "online_num":3},
{"id":"10917_1355731858823", "cid":"10917_1355731858823", "channel_name":"意甲直播1", "online_num":2},
{"id":"5_1354508230543", "cid":"5_1354508230543", "channel_name":"江苏体育频道", "online_num":2},
{"id":"asty", "cid":"asty", "channel_name":"澳视体育", "online_num":1},
{"id":"265_1345025890259", "cid":"265_1345025890259", "channel_name":"风云体育3", "online_num":1},
{"id":"17803_1345020718475", "cid":"17803_1345020718475", "channel_name":"WWE美国摔跤", "online_num":1},
{"id":"17803_1346334303855", "cid":"17803_1346334303855", "channel_name":"天空体育3频道", "online_num":0},
{"id":"17803_1345898756614", "cid":"17803_1345898756614", "channel_name":"Speed TV", "online_num":0},
{"id":"stars", "cid":"stars", "channel_name":"卫视体育中国", "online_num":0},
{"id":"17803_1345171765208", "cid":"17803_1345171765208", "channel_name":"ESPN中国", "online_num":0},
{"id":"hbty", "cid":"hbty", "channel_name":"湖北体育", "online_num":0},
{"id":"17803_1345199152123", "cid":"17803_1345199152123", "channel_name":"天空体育1频道", "online_num":0},
{"id":"yingchao", "cid":"yingchao", "channel_name":"英超直播1", "online_num":0},
{"id":"superfb", "cid":"superfb", "channel_name":"风云FIFA", "online_num":0},
{"id":"chinafb", "cid":"chinafb", "channel_name":"风云国足", "online_num":0},
{"id":"tyzb1", "cid":"tyzb1", "channel_name":"风云体育1", "online_num":0},
{"id":"tyzb2", "cid":"tyzb2", "channel_name":"风云体育2", "online_num":0},
{"id":"265_1345026154255", "cid":"265_1345026154255", "channel_name":"风云体育4", "online_num":0},
{"id":"pyxf", "cid":"pyxf", "channel_name":"先锋乒羽", "online_num":0},
{"id":"265_1343545356877", "cid":"265_1343545356877", "channel_name":"山东体育", "online_num":0},
{"id":"17803_1346003384786", "cid":"17803_1346003384786", "channel_name":"英超直播3", "online_num":0},
{"id":"3828_1344340028460", "cid":"3828_1344340028460", "channel_name":"睿柯赛车高清直播", "online_num":0},
{"id":"17803_1345899253764", "cid":"17803_1345899253764", "channel_name":"德甲直播1", "online_num":0},
{"id":"17803_1350201667680", "cid":"17803_1350201667680", "channel_name":"新视觉HD", "online_num":0},
{"id":"17803_1345199226040", "cid":"17803_1345199226040", "channel_name":"意甲足球频道", "online_num":0},
{"id":"66256_1350347239714", "cid":"66256_1350347239714", "channel_name":"纬来体育", "online_num":0},
{"id":"0000000001_1342667475488", "cid":"0000000001_1342667475488", "channel_name":"广州竞赛", "online_num":0},
{"id":"17803_1345896365739", "cid":"17803_1345896365739", "channel_name":"切尔西TV", "online_num":0},
{"id":"17803_1346228564546", "cid":"17803_1346228564546", "channel_name":"天空体育4频道", "online_num":0},
{"id":"17803_1350540444178", "cid":"17803_1350540444178", "channel_name":"欧洲体育频道", "online_num":0},
{"id":"17803_1346086192359", "cid":"17803_1346086192359", "channel_name":"意甲直播2", "online_num":0},
{"id":"17803_1345899433278", "cid":"17803_1345899433278", "channel_name":"NBA TV", "online_num":0},
{"id":"155551_1351307841224", "cid":"155551_1351307841224", "channel_name":"风云NBA-4", "online_num":0},
{"id":"155551_1351307857692", "cid":"155551_1351307857692", "channel_name":"风云NBA-6", "online_num":0},
{"id":"42815_1346217498223", "cid":"42815_1346217498223", "channel_name":"ESPN HD台湾", "online_num":0},
{"id":"155551_1351307872220", "cid":"155551_1351307872220", "channel_name":"风云NBA-1", "online_num":0},
{"id":"155551_1351307883386", "cid":"155551_1351307883386", "channel_name":"风云NBA-2", "online_num":0},
{"id":"17803_1345199524093", "cid":"17803_1345199524093", "channel_name":"欧洲体育2台", "online_num":0},
{"id":"155551_1351307893289", "cid":"155551_1351307893289", "channel_name":"风云NBA-3", "online_num":0},
{"id":"155551_1351831639157", "cid":"155551_1351831639157", "channel_name":"风云NBA-9", "online_num":0},
{"id":"155551_1351831646288", "cid":"155551_1351831646288", "channel_name":"风云NBA-10", "online_num":0},
{"id":"jingying", "cid":"jingying", "channel_name":"精英体育", "online_num":0},
{"id":"17803_1346060235886", "cid":"17803_1346060235886", "channel_name":"天空体育2频道", "online_num":0},
{"id":"155551_1353376497403", "cid":"155551_1353376497403", "channel_name":"风云NBA-13", "online_num":0},
{"id":"155551_1353376486500", "cid":"155551_1353376486500", "channel_name":"风云NBA-12", "online_num":0},
{"id":"155551_1353376467812", "cid":"155551_1353376467812", "channel_name":"风云NBA-11", "online_num":0},
{"id":"155551_1351831630714", "cid":"155551_1351831630714", "channel_name":"风云NBA-8", "online_num":0},
{"id":"155551_1351831623030", "cid":"155551_1351831623030", "channel_name":"风云NBA-7", "online_num":0},
{"id":"155551_1351307850506", "cid":"155551_1351307850506", "channel_name":"风云NBA-5", "online_num":0},
{"id":"shenhua", "cid":"shenhua", "channel_name":"申花频道", "online_num":0},
{"id":"265_1345888938353", "cid":"265_1345888938353", "channel_name":"西甲直播", "online_num":0},
{"id":"265_1346830831196", "cid":"265_1346830831196", "channel_name":"风云NFL", "online_num":0},
{"id":"155551_1354077025288", "cid":"155551_1354077025288", "channel_name":"风云CBA-1", "online_num":0},
{"id":"155551_1354077108882", "cid":"155551_1354077108882", "channel_name":"风云CBA-2", "online_num":0},
{"id":"17803_1345199626218", "cid":"17803_1345199626218", "channel_name":"皇家马德里TV", "online_num":0},
{"id":"17803_1345902508097", "cid":"17803_1345902508097", "channel_name":"希腊TileSport体育台", "online_num":0},
{"id":"265_1345730957408", "cid":"265_1345730957408", "channel_name":"西班牙体育", "online_num":0},
{"id":"265_1345731090574", "cid":"265_1345731090574", "channel_name":"西班牙体育2", "online_num":0},
{"id":"21833_1354474494017", "cid":"21833_1354474494017", "channel_name":"大连文体", "online_num":0},
{"id":"btv6", "cid":"btv6", "channel_name":"北京体育", "online_num":0},
{"id":"10917_1355727482932", "cid":"10917_1355727482932", "channel_name":"风云NFL", "online_num":0},
{"id":"10917_1355979701765", "cid":"10917_1355979701765", "channel_name":"俄超阿甲荷甲", "online_num":0},
{"id":"10917_1355975272748", "cid":"10917_1355975272748", "channel_name":"足球直播1", "online_num":0},
{"id":"10917_1355899577256", "cid":"10917_1355899577256", "channel_name":"超级足球", "online_num":0},
{"id":"247032_1355903062706", "cid":"247032_1355903062706", "channel_name":"江苏体育休闲", "online_num":0},
{"id":"17803_1351084960840", "cid":"17803_1351084960840", "channel_name":"探索频道[asia-HD]", "online_num":7},
{"id":"17803_1353295456726", "cid":"17803_1353295456726", "channel_name":"国家地理[HD]", "online_num":7},
{"id":"17803_1345897668075", "cid":"17803_1345897668075", "channel_name":"香港卫视", "online_num":4},
{"id":"17803_1348118489485", "cid":"17803_1348118489485", "channel_name":"澳门澳视高清频道", "online_num":1},
{"id":"17803_1345896950615", "cid":"17803_1345896950615", "channel_name":"TVB8", "online_num":1},
{"id":"17803_1345189605547", "cid":"17803_1345189605547", "channel_name":"NASA国际空间站", "online_num":1},
{"id":"17803_1345198280660", "cid":"17803_1345198280660", "channel_name":"SKY TG24频道", "online_num":0},
{"id":"17803_1345198320795", "cid":"17803_1345198320795", "channel_name":"时代广场直播", "online_num":0},
{"id":"265_1345608082409", "cid":"265_1345608082409", "channel_name":"ESPN美国", "online_num":0},
{"id":"17803_1345198298043", "cid":"17803_1345198298043", "channel_name":"NASA教育频道", "online_num":0},
{"id":"1373_1351587118866", "cid":"1373_1351587118866", "channel_name":"MBN HD", "online_num":0},
{"id":"90536_1350111976890", "cid":"90536_1350111976890", "channel_name":"starpravah印度", "online_num":0},
{"id":"173962_1351654537240", "cid":"173962_1351654537240", "channel_name":"Mnet 韩国 (M!countdown直播)", "online_num":0},
{"id":"187699_1353883703051", "cid":"187699_1353883703051", "channel_name":"傳媒綜藝台", "online_num":0},
{"id":"1373_1353935440026", "cid":"1373_1353935440026", "channel_name":"Heart TV ", "online_num":0},
{"id":"9418_1351592463145", "cid":"9418_1351592463145", "channel_name":"arirang world", "online_num":0},
{"id":"52636_1350572650675", "cid":"52636_1350572650675", "channel_name":"汉语频道", "online_num":0},
{"id":"9418_1351592844514", "cid":"9418_1351592844514", "channel_name":"MBN HD", "online_num":0},
{"id":"9418_1351593919994", "cid":"9418_1351593919994", "channel_name":"视讯中国火星视频", "online_num":0},
{"id":"9418_1353713447124", "cid":"9418_1353713447124", "channel_name":"cbs", "online_num":0},
{"id":"132950_1352278771686", "cid":"132950_1352278771686", "channel_name":"孟 Star Jalsha   ", "online_num":0},
{"id":"68688_1354372915944", "cid":"68688_1354372915944", "channel_name":"Comedy tv", "online_num":0},
{"id":"244712_1355459514496", "cid":"244712_1355459514496", "channel_name":"中天综合", "online_num":0},
{"id":"8923_1346382255834", "cid":"8923_1346382255834", "channel_name":"17173直播第四频道", "online_num":30},
{"id":"yxfy", "cid":"yxfy", "channel_name":"游戏风云", "online_num":1222},
{"id":"89337_1355707358394", "cid":"89337_1355707358394", "channel_name":"影视大放映", "online_num":47},
{"id":"39079_1354004699650", "cid":"39079_1354004699650", "channel_name":"游戏风云G联赛", "online_num":41},
{"id":"pluLOL", "cid":"pluLOL", "channel_name":"pluLOL", "online_num":39},
{"id":"244712_1355781586867", "cid":"244712_1355781586867", "channel_name":"纬来日本台", "online_num":0}];


/**
 *
 */
akoola.getRemoteInetAddress = function() {
    var key_ip   = "IP";
    var key_port = "PORT";

    //Read from remote server
    $.ajax({
        url: akoola.remote.handshake,
        async: false,
        dataType: "json",
        cache: false,
        success: function(data){
            akoola.remote.ip = data[key_ip];
            akoola.remote.port = data[key_port];
            akoola.remote.uri  = "ws://" + akoola.remote.ip + ":" + akoola.remote.port;
            console.log(akoola.remote.uri);
            }
        });
};

akoola.isLogoVisible = false;
akoola.showLogo = function() {
    var logoSize = {width:140, height:140};
    var position = $("#akoola_qrcode canvas").position();
    console.log(position.left);
    console.log(position.top);
    
    $("#akoola_logo").css({left:position.left + (akoola.tv.minSize - logoSize.width) / 2, top:position.top + (akoola.tv.minSize - logoSize.height) / 2 });
    $("#akoola_logo").show();
    akoola.isLogoVisible = true;
};

akoola.makeQRcode = function() {
    $("#akoola_qrcode").qrcode({
            width : akoola.tv.minSize - 10,
            height : akoola.tv.minSize - 10,
            text : 'http://akoola.sinaapp.com/akoola-tv-controller.apk'
        });
    akoola.showLogo();
};

akoola.clearQRcode = function() { 
    $("#akoola_qrcode").empty();
    $("#akoola_logo").hide();
    akoola.isLogoVisible = false;
};

akoola.showTV = function(idx) {
    akoola.tv.current = idx;
    var htmlContent = akoola.tv.getTVSrc(akoola.tv.size["width"], akoola.tv.size["height"], akoola.tv.channels[akoola.tv.current]["cid"]);
    $("#akoola_tv_wrapper").empty();
    $("#akoola_tv_wrapper").append(htmlContent);
            
    $("#akoola_channel").empty();
    $("#akoola_channel").append("<span>"+akoola.tv.current+"</span>");
    //$("#akoola_channel").append("<br />");
    //$("#akoola_channel").append("<span>"+akoola.tv.channels[akoola.tv.current]["channel_name"]+"</span>");
    $("#akoola_channel").show();
    setTimeout(function(){
         $("#akoola_channel").hide();
    },2000);
}
akoola.connect = function() {
    akoola.getRemoteInetAddress();
	if(akoola.remote.uri) {
		akoola.socket = new WebSocket(akoola.remote.uri);
		akoola.socket.onopen = function() {
			console.log("HELLO");
			akoola.socket.send("HELLO");
            akoola.clearQRcode();
            akoola.showTV(6);
		};
		akoola.socket.onmessage = function(msg) {
			console.log("Receive:" + msg.data);
            //$("#target_frame").attr("src", channel["c_" + msg.data]);
            //akoola.tv.current = "" + msg.data;
            akoola.showTV("" + msg.data);
		};
		akoola.socket.onerror = function(msg) {
			console.log("Error:" + msg);
            setTimeout(akoola.connect(),3000);
		};
		akoola.socket.onclose = function(msg) {
			console.log("BYE at" + msg);
            setTimeout(akoola.connect(),3000);
		}; 
	}
}

$(document).ready(function() {
    akoola.makeQRcode();
    akoola.connect();
    
    $(window).bind("resize", function(){
        // akoola.tv.size = akoola.tv.getWindowSize();
        // var htmlContent = akoola.tv.getTVSrc(akoola.tv.size["width"], akoola.tv.size["height"], akoola.tv.channels[akoola.tv.current]["cid"]);
        // $("#akoola_tv_wrapper").empty();
        // $("#akoola_tv_wrapper").append(htmlContent);
        akoola.tv.setChannelPos();
        if(akoola.isLogoVisible) {
            akoola.tv.minSize = akoola.tv.getMinSize();
            akoola.clearQRcode();
            akoola.makeQRcode();
            akoola.showLogo();
        }
    });
});
