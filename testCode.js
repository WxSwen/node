// a phantomjs example
// var page = require('webpage').create();
// var fs = require('fs');

// var file = fs.open('./code', 'r');

// var content = fs.read('./code');

// phantom.outputEncoding="utf-8";
// page.open("http://m.ctrip.com/html5/", function(status) {
//    if ( status === "success" ) {
    window.CHLOROFP_STATUS="start";
    
      var surl = '?????';
      
    
      var submiting=false, //当用iframe提交的时候用到的变量
          guid = null,
          rsg_ = null,
          version = 5,
          existsRsgGuid = false,
          G_NAME="_RGUID",
          S_NAME="_RSG";
    
      var serverName = '.....';
    
      var log = function(msg){
          if(window.console){
              console.log(msg);
          }
      }
      var Dictionary={
          WEBGL_EXTENSIONS:["ANGLE_instanced_arrays",
              "EXT_blend_minmax",
              "EXT_color_buffer_half_float",
              "EXT_disjoint_timer_query",
              "EXT_frag_depth",
              "EXT_sRGB",
              "EXT_shader_texture_lod",
              "EXT_texture_filter_anisotropic",
              "MOZ_EXT_texture_filter_anisotropic",
              "MOZ_WEBGL_compressed_texture_atc",
              "MOZ_WEBGL_compressed_texture_s3tc",
              "MOZ_WEBGL_depth_texture",
              "MOZ_WEBGL_lose_context",
              "OES_element_index_uint",
              "OES_standard_derivatives",
              "OES_texture_float",
              "OES_texture_float_linear",
              "OES_texture_half_float",
              "OES_texture_half_float_linear",
              "OES_vertex_array_object",
              "WEBGL_color_buffer_float",
              "WEBGL_compressed_texture_atc",
              "WEBGL_compressed_texture_etc1",
              "WEBGL_compressed_texture_s3tc",
              "WEBGL_debug_renderer_info",
              "WEBGL_debug_shaders",
              "WEBGL_depth_texture",
              "WEBGL_draw_buffers",
              "WEBGL_lose_context",
              "WEBKIT_EXT_texture_filter_anisotropic",
              "WEBKIT_WEBGL_compressed_texture_atc",
              "WEBKIT_WEBGL_compressed_texture_pvrtc",
              "WEBKIT_WEBGL_compressed_texture_s3tc",
              "WEBKIT_WEBGL_depth_texture",
              "WEBKIT_WEBGL_lose_context"],
    //2b
          WEBGL_fragmentShaderFloatIntPrecision:[
              "highp/highp",
              "highp/lowp",
              "mediump/highp",
              "mediump/lowp",
              "not available"],
    //2b
          NAVIGATOR_doNotTrack:[
              "do not track",//00
              "enable",//01
              "unspecified"//10
          ],
    //1B
          NAVIGATOR_language:[
              "af",
              "af-za",
              "ar",
              "ar-ae",
              "ar-bh",
              "ar-dz",
              "ar-eg",
              "ar-iq",
              "ar-jo",
              "ar-kw",
              "ar-lb",
              "ar-ly",
              "ar-ma",
              "ar-om",
              "ar-qa",
              "ar-sa",
              "ar-sy",
              "ar-tn",
              "ar-ye",
              "az",
              "az-az-cyrl",
              "az-az-latn",
              "be",
              "be-by",
              "bg",
              "bg-bg",
              "bs-ba",
              "ca",
              "ca-es",
              "cs",
              "cs-cz",
              "cy",
              "cy-gb",
              "da",
              "da-dk",
              "de",
              "de-at",
              "de-ch",
              "de-de",
              "de-li",
              "de-lu",
              "dv",
              "dv-mv",
              "el",
              "el-gr",
              "en",
              "en-au",
              "en-bz",
              "en-ca",
              "en-cb",
              "en-gb",
              "en-ie",
              "en-jm",
              "en-nz",
              "en-ph",
              "en-tt",
              "en-us",
              "en-za",
              "en-zw",
              "eo",
              "es",
              "es-ar",
              "es-bo",
              "es-cl",
              "es-co",
              "es-cr",
              "es-do",
              "es-ec",
              "es-es",
              "es-gt",
              "es-hn",
              "es-mx",
              "es-ni",
              "es-pa",
              "es-pe",
              "es-pr",
              "es-py",
              "es-sv",
              "es-uy",
              "es-ve",
              "et",
              "et-ee",
              "eu",
              "eu-es",
              "fa",
              "fa-ir",
              "fi",
              "fi-fi",
              "fo",
              "fo-fo",
              "fr",
              "fr-be",
              "fr-ca",
              "fr-ch",
              "fr-fr",
              "fr-lu",
              "fr-mc",
              "gl",
              "gl-es",
              "gu",
              "gu-in",
              "he",
              "he-il",
              "hi",
              "hi-in",
              "hr",
              "hr-ba",
              "hr-hr",
              "hu",
              "hu-hu",
              "hy",
              "hy-am",
              "id",
              "id-id",
              "is",
              "is-is",
              "it",
              "it-ch",
              "it-it",
              "ja",
              "ja-jp",
              "ka",
              "ka-ge",
              "kk",
              "kk-kz",
              "kn",
              "kn-in",
              "ko",
              "ko-kr",
              "kok",
              "kok-in",
              "ky",
              "ky-kg",
              "lt",
              "lt-lt",
              "lv",
              "lv-lv",
              "mi",
              "mi-nz",
              "mk",
              "mk-mk",
              "mn",
              "mn-mn",
              "mr",
              "mr-in",
              "ms",
              "ms-bn",
              "ms-my",
              "mt",
              "mt-mt",
              "nb",
              "nb-no",
              "nl",
              "nl-be",
              "nl-nl",
              "nn-no",
              "ns",
              "ns-za",
              "pa",
              "pa-in",
              "pl",
              "pl-pl",
              "pt",
              "pt-br",
              "pt-pt",
              "qu",
              "qu-bo",
              "qu-ec",
              "qu-pe",
              "ro",
              "ro-ro",
              "ru",
              "ru-ru",
              "sa",
              "sa-in",
              "se",
              "se-fi",
              "se-no",
              "se-se",
              "sk",
              "sk-sk",
              "sl",
              "sl-si",
              "sq",
              "sq-al",
              "sr-ba",
              "sr-sp",
              "sv",
              "sv-fi",
              "sv-se",
              "sw",
              "sw-ke",
              "syr",
              "syr-sy",
              "ta",
              "ta-in",
              "te",
              "te-in",
              "th",
              "th-th",
              "tl",
              "tl-ph",
              "tn",
              "tn-za",
              "tr",
              "tr-tr",
              "ts",
              "tt",
              "tt-ru",
              "uk",
              "uk-ua",
              "ur",
              "ur-pk",
              "uz",
              "uz-uz",
              "vi",
              "vi-vn",
              "xh",
              "xh-za",
              "zh",
              "zh-cn",
              "zh-hk",
              "zh-mo",
              "zh-sg",
              "zh-tw",
              "zu",
              "zu-za"
          ],
    //3b
          BASIC_os:[
              "android",//001
              "ios",//000
              "linux",//010
              "mac",//011
              "other",//100
              "windows",//101
              "windows phone"//110
          ],
    //1b
          BASIC_DeviceType:[
              "desktop",//0
              "mobiledevice"//1
          ],
          WEBGL_contextName_webgl:"webgl",
          WEBGL_contextName_experimental:"experimental-webgl",
          UNKOWN:"unkown",
          UNKOWN_IX:255,
          UNKOWN_IX2:15,
          CPUNUM_LIST:[1,2,4,8,16,32,64,128],
          BOOLEAN_ENUM:[true,false]
      }
      var hasProp = function(obj){
          if(!obj)
              return false;
          if(typeof(obj)!="object")
              return true;
          for(var p in obj){
              if(Object.prototype.hasOwnProperty.call(obj, p))
                  return true;
          }
          return false;
      }
    
      var DIGITS_LOWER =
          ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
      var toHex=function(data){
          var l = data.length;
          var  out = "";
          // two characters form the hex value.
          for (var i = 0, j = 0; i < l; i++) {
              out += DIGITS_LOWER[(0xF0 & data[i]) >>> 4];
              out += DIGITS_LOWER[0x0F & data[i]];
          }
          return out;
      }
      var stringify1 = (typeof JSON === "undefined" || typeof JSON.stringify === "undefined")?
          function (obj) {
              var t = typeof(obj);
              if (t != "object" || obj === null) {
                  if (t == "string") obj = '"'+obj+'"';
                  return String(obj);
              }
              else {
                  var n, v, json = [], arr = (obj && obj.constructor == Array);
                  for (n in obj) {
                      v = obj[n]; t = typeof(v);
                      if(v===undefined || v==="--") // || !hasProp(v)
                          continue;
                      if (t == "string") v = '"'+v+'"';
                      else if (t == "object" && v !== null) v = stringify1(v);
                      json.push((arr ? "" : '"' + n + '":') + String(v));
                  }
                  return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
              }
          }:JSON.stringify;
    
      var stringify = function (obj) {
          for(var i in pdata){
            if(Object.prototype.toString.call(pdata[i]) === '[object Object]'){
              for(var j in pdata[i]){
                console.log(i,j,':',pdata[i][j]);
              }
            }else{
              console.log(i,':',pdata[i]);
            }
          }
          //static data
          var encoder = new Encoder();
          var data = encoder.encodeStatic(pdata);
          var hex = toHex(data);
          // fs.write('./code', LZString.compressToEncodedURIComponent(hex), 'w');
          // file.close();
          console.log(LZString.compressToEncodedURIComponent(hex));
          return LZString.compressToEncodedURIComponent(hex);
          // console.log(LZString.compressToEncodedURIComponent(hex));
      };
    
      //获取当前毫秒数
      var currTimes = function(){
          if (typeof window.performance !== 'undefined' && typeof performance.now !== 'undefined')
              return Math.round(performance.now()*1000);
          return (new Date()).getTime()*1000;
      }
    
      var CookieUtil = (function(){
          var decode = decodeURIComponent;
          var encode = encodeURIComponent;
          var Cookie = {};
    
          Cookie.get = function(name, options) {
              validateCookieName(name);
              if (typeof options === 'function') {
                  options = { converter: options };
              } else {
                  options = options || {};
              }
              var cookies = parseCookieString(document.cookie, !options['raw']);
              return (options.converter || same)(cookies[name]);
          };
    
          Cookie.set = function(name, value, options) {
              validateCookieName(name);
              options = options || {};
              var expires = options['expires'];
              var domain = options['domain'];
              var path = options['path'];
              if (!options['raw']) {
                  value = encode(String(value));
              }
              var text = name + '=' + value;
              var date = expires;
              if (typeof date === 'number') {
                  date = new Date();
                  date.setDate(date.getDate() + expires);
              }
              if (date instanceof Date) {
                  text += '; expires=' + date.toUTCString();
              }
              if (isNonEmptyString(domain)) {
                  text += '; domain=' + domain;
              }
              if (isNonEmptyString(path)) {
                  text += '; path=' + path;
              }
              if (options['secure']) {
                  text += '; secure';
              }
              document.cookie = text;
              return text;
          };
    
          Cookie.remove = function(name, options) {
              options = options || {};
              options['expires'] = new Date(0);
              return this.set(name, '', options);
          };
    
          function parseCookieString(text, shouldDecode) {
              var cookies = {};
    
              if (isString(text) && text.length > 0) {
                  var decodeValue = shouldDecode ? decode : same;
                  var cookieParts = text.split(/;\s/g);
                  var cookieName, cookieValue, cookieNameValue;
    
                  for (var i = 0, len = cookieParts.length; i < len; i++) {
                      cookieNameValue = cookieParts[i].match(/([^=]+)=/i);
                      if (cookieNameValue instanceof Array) {
                          try {
                              cookieName = decode(cookieNameValue[1]);
                              cookieValue = decodeValue(cookieParts[i].substring(cookieNameValue[1].length + 1));
                          } catch (ex) {
                          }
                      } else {
                          cookieName = decode(cookieParts[i]);
                          cookieValue = '';
                      }
                      if (cookieName) {
                          cookies[cookieName] = cookieValue;
                      }
                  }
              }
              return cookies;
          }
    
          function isString(o) {
              return typeof o === 'string';
          }
    
          function isNonEmptyString(s) {
              return isString(s) && s !== '';
          }
    
          function validateCookieName(name) {
              if (!isNonEmptyString(name)) {
                  throw new TypeError('Cookie name must be a non-empty string');
              }
          }
    
          function same(s) {
              return s;
          }
          return Cookie;
      })();
    
      /* murmurHash3算法 https://github.com/Valve/fingerprintjs2/blob/master/fingerprint2.js */
      var murmurHash3  = (function(){
          var x64Add = function(m, n) {
                  m = [m[0] >>> 16, m[0] & 0xffff, m[1] >>> 16, m[1] & 0xffff];
                  n = [n[0] >>> 16, n[0] & 0xffff, n[1] >>> 16, n[1] & 0xffff];
                  var o = [0, 0, 0, 0];
                  o[3] += m[3] + n[3];
                  o[2] += o[3] >>> 16;
                  o[3] &= 0xffff;
                  o[2] += m[2] + n[2];
                  o[1] += o[2] >>> 16;
                  o[2] &= 0xffff;
                  o[1] += m[1] + n[1];
                  o[0] += o[1] >>> 16;
                  o[1] &= 0xffff;
                  o[0] += m[0] + n[0];
                  o[0] &= 0xffff;
                  return [(o[0] << 16) | o[1], (o[2] << 16) | o[3]];
              },
              x64Multiply = function(m, n) {
                  m = [m[0] >>> 16, m[0] & 0xffff, m[1] >>> 16, m[1] & 0xffff];
                  n = [n[0] >>> 16, n[0] & 0xffff, n[1] >>> 16, n[1] & 0xffff];
                  var o = [0, 0, 0, 0];
                  o[3] += m[3] * n[3];
                  o[2] += o[3] >>> 16;
                  o[3] &= 0xffff;
                  o[2] += m[2] * n[3];
                  o[1] += o[2] >>> 16;
                  o[2] &= 0xffff;
                  o[2] += m[3] * n[2];
                  o[1] += o[2] >>> 16;
                  o[2] &= 0xffff;
                  o[1] += m[1] * n[3];
                  o[0] += o[1] >>> 16;
                  o[1] &= 0xffff;
                  o[1] += m[2] * n[2];
                  o[0] += o[1] >>> 16;
                  o[1] &= 0xffff;
                  o[1] += m[3] * n[1];
                  o[0] += o[1] >>> 16;
                  o[1] &= 0xffff;
                  o[0] += (m[0] * n[3]) + (m[1] * n[2]) + (m[2] * n[1]) + (m[3] * n[0]);
                  o[0] &= 0xffff;
                  return [(o[0] << 16) | o[1], (o[2] << 16) | o[3]];
              },
              x64Rotl = function(m, n) {
                  n %= 64;
                  if (n === 32) {
                      return [m[1], m[0]];
                  }
                  else if (n < 32) {
                      return [(m[0] << n) | (m[1] >>> (32 - n)), (m[1] << n) | (m[0] >>> (32 - n))];
                  }
                  else {
                      n -= 32;
                      return [(m[1] << n) | (m[0] >>> (32 - n)), (m[0] << n) | (m[1] >>> (32 - n))];
                  }
              },
    
              x64LeftShift = function(m, n) {
                  n %= 64;
                  if (n === 0) {
                      return m;
                  }
                  else if (n < 32) {
                      return [(m[0] << n) | (m[1] >>> (32 - n)), m[1] << n];
                  }
                  else {
                      return [m[1] << (n - 32), 0];
                  }
              },
              x64Xor = function(m, n) {
                  return [m[0] ^ n[0], m[1] ^ n[1]];
              },
              x64Fmix = function(h) {
                  h = x64Xor(h, [0, h[0] >>> 1]);
                  h = x64Multiply(h, [0xff51afd7, 0xed558ccd]);
                  h = x64Xor(h, [0, h[0] >>> 1]);
                  h = x64Multiply(h, [0xc4ceb9fe, 0x1a85ec53]);
                  h = x64Xor(h, [0, h[0] >>> 1]);
                  return h;
              };
    
          return function (key, seed) {
              key = key || "";
              seed = seed || 0;
              var remainder = key.length % 16;
              var bytes = key.length - remainder;
              var h1 = [0, seed];
              var h2 = [0, seed];
              var k1 = [0, 0];
              var k2 = [0, 0];
              var c1 = [0x87c37b91, 0x114253d5];
              var c2 = [0x4cf5ad43, 0x2745937f];
              for (var i = 0; i < bytes; i = i + 16) {
                  k1 = [((key.charCodeAt(i + 4) & 0xff)) | ((key.charCodeAt(i + 5) & 0xff) << 8) | ((key.charCodeAt(i + 6) & 0xff) << 16) | ((key.charCodeAt(i + 7) & 0xff) << 24), ((key.charCodeAt(i) & 0xff)) | ((key.charCodeAt(i + 1) & 0xff) << 8) | ((key.charCodeAt(i + 2) & 0xff) << 16) | ((key.charCodeAt(i + 3) & 0xff) << 24)];
                  k2 = [((key.charCodeAt(i + 12) & 0xff)) | ((key.charCodeAt(i + 13) & 0xff) << 8) | ((key.charCodeAt(i + 14) & 0xff) << 16) | ((key.charCodeAt(i + 15) & 0xff) << 24), ((key.charCodeAt(i + 8) & 0xff)) | ((key.charCodeAt(i + 9) & 0xff) << 8) | ((key.charCodeAt(i + 10) & 0xff) << 16) | ((key.charCodeAt(i + 11) & 0xff) << 24)];
                  k1 = x64Multiply(k1, c1);
                  k1 = x64Rotl(k1, 31);
                  k1 = x64Multiply(k1, c2);
                  h1 = x64Xor(h1, k1);
                  h1 = x64Rotl(h1, 27);
                  h1 = x64Add(h1, h2);
                  h1 = x64Add(x64Multiply(h1, [0, 5]), [0, 0x52dce729]);
                  k2 = x64Multiply(k2, c2);
                  k2 = x64Rotl(k2, 33);
                  k2 = x64Multiply(k2, c1);
                  h2 = x64Xor(h2, k2);
                  h2 = x64Rotl(h2, 31);
                  h2 = x64Add(h2, h1);
                  h2 = x64Add(x64Multiply(h2, [0, 5]), [0, 0x38495ab5]);
              }
              k1 = [0, 0];
              k2 = [0, 0];
              switch(remainder) {
                  case 15:
                      k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 14)], 48));
                  case 14:
                      k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 13)], 40));
                  case 13:
                      k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 12)], 32));
                  case 12:
                      k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 11)], 24));
                  case 11:
                      k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 10)], 16));
                  case 10:
                      k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 9)], 8));
                  case 9:
                      k2 = x64Xor(k2, [0, key.charCodeAt(i + 8)]);
                      k2 = x64Multiply(k2, c2);
                      k2 = x64Rotl(k2, 33);
                      k2 = x64Multiply(k2, c1);
                      h2 = x64Xor(h2, k2);
                  case 8:
                      k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 7)], 56));
                  case 7:
                      k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 6)], 48));
                  case 6:
                      k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 5)], 40));
                  case 5:
                      k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 4)], 32));
                  case 4:
                      k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 3)], 24));
                  case 3:
                      k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 2)], 16));
                  case 2:
                      k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 1)], 8));
                  case 1:
                      k1 = x64Xor(k1, [0, key.charCodeAt(i)]);
                      k1 = x64Multiply(k1, c1);
                      k1 = x64Rotl(k1, 31);
                      k1 = x64Multiply(k1, c2);
                      h1 = x64Xor(h1, k1);
              }
              h1 = x64Xor(h1, [0, key.length]);
              h2 = x64Xor(h2, [0, key.length]);
              h1 = x64Add(h1, h2);
              h2 = x64Add(h2, h1);
              h1 = x64Fmix(h1);
              h2 = x64Fmix(h2);
              h1 = x64Add(h1, h2);
              h2 = x64Add(h2, h1);
              return ("00000000" + (h1[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (h1[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (h2[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (h2[1] >>> 0).toString(16)).slice(-8);
          };
      })();
    
      //自定义的一个数组队列
      function Q(limit) {
          var size = limit || 50, list=[];
          this.push = function(data){
              if (data==null) {
                  return false;
              }
              if (list.length == size) {
                  this.pop();
              }
              list.unshift(data);
              return true;
          }
          this.pop = function() {
              return list.pop();
          }
          this.size = function() {
              return list.length;
          }
          this.getData = function() {
              return list;
          }
      }
    
    
    
      var LZString = (function(){
          var keyStrUriSafe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$";
          var _compress = function (uncompressed, bitsPerChar, getCharFromInt) {
              if (uncompressed == null) return "";
              var i, value,
                  context_dictionary= {},
                  context_dictionaryToCreate= {},
                  context_c="",
                  context_wc="",
                  context_w="",
                  context_enlargeIn= 2, // Compensate for the first entry which should not count
                  context_dictSize= 3,
                  context_numBits= 2,
                  context_data=[],
                  context_data_val=0,
                  context_data_position=0,
                  ii;
    
              for (ii = 0; ii < uncompressed.length; ii += 1) {
                  context_c = uncompressed.charAt(ii);
                  if (!Object.prototype.hasOwnProperty.call(context_dictionary,context_c)) {
                      context_dictionary[context_c] = context_dictSize++;
                      context_dictionaryToCreate[context_c] = true;
                  }
    
                  context_wc = context_w + context_c;
                  if (Object.prototype.hasOwnProperty.call(context_dictionary,context_wc)) {
                      context_w = context_wc;
                  } else {
                      if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate,context_w)) {
                          if (context_w.charCodeAt(0)<256) {
                              for (i=0 ; i<context_numBits ; i++) {
                                  context_data_val = (context_data_val << 1);
                                  if (context_data_position == bitsPerChar-1) {
                                      context_data_position = 0;
                                      context_data.push(getCharFromInt(context_data_val));
                                      context_data_val = 0;
                                  } else {
                                      context_data_position++;
                                  }
                              }
                              value = context_w.charCodeAt(0);
                              for (i=0 ; i<8 ; i++) {
                                  context_data_val = (context_data_val << 1) | (value&1);
                                  if (context_data_position == bitsPerChar-1) {
                                      context_data_position = 0;
                                      context_data.push(getCharFromInt(context_data_val));
                                      context_data_val = 0;
                                  } else {
                                      context_data_position++;
                                  }
                                  value = value >> 1;
                              }
                          } else {
                              value = 1;
                              for (i=0 ; i<context_numBits ; i++) {
                                  context_data_val = (context_data_val << 1) | value;
                                  if (context_data_position ==bitsPerChar-1) {
                                      context_data_position = 0;
                                      context_data.push(getCharFromInt(context_data_val));
                                      context_data_val = 0;
                                  } else {
                                      context_data_position++;
                                  }
                                  value = 0;
                              }
                              value = context_w.charCodeAt(0);
                              for (i=0 ; i<16 ; i++) {
                                  context_data_val = (context_data_val << 1) | (value&1);
                                  if (context_data_position == bitsPerChar-1) {
                                      context_data_position = 0;
                                      context_data.push(getCharFromInt(context_data_val));
                                      context_data_val = 0;
                                  } else {
                                      context_data_position++;
                                  }
                                  value = value >> 1;
                              }
                          }
                          context_enlargeIn--;
                          if (context_enlargeIn == 0) {
                              context_enlargeIn = Math.pow(2, context_numBits);
                              context_numBits++;
                          }
                          delete context_dictionaryToCreate[context_w];
                      } else {
                          value = context_dictionary[context_w];
                          for (i=0 ; i<context_numBits ; i++) {
                              context_data_val = (context_data_val << 1) | (value&1);
                              if (context_data_position == bitsPerChar-1) {
                                  context_data_position = 0;
                                  context_data.push(getCharFromInt(context_data_val));
                                  context_data_val = 0;
                              } else {
                                  context_data_position++;
                              }
                              value = value >> 1;
                          }
    
    
                      }
                      context_enlargeIn--;
                      if (context_enlargeIn == 0) {
                          context_enlargeIn = Math.pow(2, context_numBits);
                          context_numBits++;
                      }
                      // Add wc to the dictionary.
                      context_dictionary[context_wc] = context_dictSize++;
                      context_w = String(context_c);
                  }
              }
    
              if (context_w !== "") {
                  if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate,context_w)) {
                      if (context_w.charCodeAt(0)<256) {
                          for (i=0 ; i<context_numBits ; i++) {
                              context_data_val = (context_data_val << 1);
                              if (context_data_position == bitsPerChar-1) {
                                  context_data_position = 0;
                                  context_data.push(getCharFromInt(context_data_val));
                                  context_data_val = 0;
                              } else {
                                  context_data_position++;
                              }
                          }
                          value = context_w.charCodeAt(0);
                          for (i=0 ; i<8 ; i++) {
                              context_data_val = (context_data_val << 1) | (value&1);
                              if (context_data_position == bitsPerChar-1) {
                                  context_data_position = 0;
                                  context_data.push(getCharFromInt(context_data_val));
                                  context_data_val = 0;
                              } else {
                                  context_data_position++;
                              }
                              value = value >> 1;
                          }
                      } else {
                          value = 1;
                          for (i=0 ; i<context_numBits ; i++) {
                              context_data_val = (context_data_val << 1) | value;
                              if (context_data_position == bitsPerChar-1) {
                                  context_data_position = 0;
                                  context_data.push(getCharFromInt(context_data_val));
                                  context_data_val = 0;
                              } else {
                                  context_data_position++;
                              }
                              value = 0;
                          }
                          value = context_w.charCodeAt(0);
                          for (i=0 ; i<16 ; i++) {
                              context_data_val = (context_data_val << 1) | (value&1);
                              if (context_data_position == bitsPerChar-1) {
                                  context_data_position = 0;
                                  context_data.push(getCharFromInt(context_data_val));
                                  context_data_val = 0;
                              } else {
                                  context_data_position++;
                              }
                              value = value >> 1;
                          }
                      }
                      context_enlargeIn--;
                      if (context_enlargeIn == 0) {
                          context_enlargeIn = Math.pow(2, context_numBits);
                          context_numBits++;
                      }
                      delete context_dictionaryToCreate[context_w];
                  } else {
                      value = context_dictionary[context_w];
                      for (i=0 ; i<context_numBits ; i++) {
                          context_data_val = (context_data_val << 1) | (value&1);
                          if (context_data_position == bitsPerChar-1) {
                              context_data_position = 0;
                              context_data.push(getCharFromInt(context_data_val));
                              context_data_val = 0;
                          } else {
                              context_data_position++;
                          }
                          value = value >> 1;
                      }
    
    
                  }
                  context_enlargeIn--;
                  if (context_enlargeIn == 0) {
                      context_enlargeIn = Math.pow(2, context_numBits);
                      context_numBits++;
                  }
              }
    
              value = 2;
              for (i=0 ; i<context_numBits ; i++) {
                  context_data_val = (context_data_val << 1) | (value&1);
                  if (context_data_position == bitsPerChar-1) {
                      context_data_position = 0;
                      context_data.push(getCharFromInt(context_data_val));
                      context_data_val = 0;
                  } else {
                      context_data_position++;
                  }
                  value = value >> 1;
              }
    
              // Flush the last char
              while (true) {
                  context_data_val = (context_data_val << 1);
                  if (context_data_position == bitsPerChar-1) {
                      context_data.push(getCharFromInt(context_data_val));
                      break;
                  }
                  else context_data_position++;
              }
              return context_data.join('');
          }
    
          return {compressToEncodedURIComponent: function (input) {
              if (input == null) return "";
              return _compress(input, 6, function(a){return keyStrUriSafe.charAt(a);});
          }};
      } )()
    
      // 'use strict';
      // var cors = (function() {
      //     var win = window,
      //         CORSxhr = (function () {
      //             var xhr;
      //             if (win.XMLHttpRequest && ('withCredentials' in new win.XMLHttpRequest())) {
      //                 xhr = win.XMLHttpRequest;
      //             } else if (win.XDomainRequest) {
      //                 xhr = win.XDomainRequest;
      //             }
      //             return xhr;
      //         }()), methods = ['head', 'get', 'post', 'put', 'delete'], cors = {};
    
      //     function Request(options) {
      //         this.init(options);
      //     }
    
      //     Request.prototype.init = function (options) {
      //         var that = this;
      //         that.xhr = new CORSxhr();
      //         that.method = options.method;
      //         that.url = options.url;
      //         that.success = options.success;
      //         that.error = options.error;
      //         try { //IE某些版本下有问题
      //             that.xhr.timeout = 2000; // 毫秒数
      //             that.xhr.ontimeout = function (e) {};
      //             if (options.credentials === true) {
      //                 that.xhr.withCredentials = true;
      //             }
      //         }catch(e){}
      //         var sendData = (options.params)?options.params:options.data;
      //         that.headers = options.headers;
      //         that.send(sendData);
      //         return that;
      //     };
    
      //     Request.prototype.send = function (data) {
      //         var that = this;
      //         if (that.success !== undefined) {
      //             that.xhr.onload = function () {
      //                 that.success.call(this, this.responseText);
      //             };
      //         }
      //         if (that.error !== undefined) {
      //             that.xhr.error = function () {
      //                 that.error.call(this, this.responseText);
      //             };
      //         }
      //         that.xhr.open(that.method, that.url, true);
      //         if (that.headers !== undefined) {
      //             that.setHeaders();
      //         }
      //         if(data)
      //             that.xhr.send(data);
      //         else
      //             that.xhr.send();
      //         return that;
      //     };
    
      //     Request.prototype.setHeaders = function () {
      //         var that = this,
      //             headers = that.headers,
      //             key;
      //         try {
      //             for (key in headers) {
      //                 if (headers.hasOwnProperty(key)) {
      //                     that.xhr.setRequestHeader(key, headers[key]);
      //                 }
      //             }
      //         }catch(e){}
      //         return that;
      //     };
    
      //     for (var i=0; i < methods.length; i++) {
      //         (function () {
      //             var method = methods[i];
      //             cors[method] = function (url, success) {
      //                 var options = {};
      //                 if (url === undefined) {
      //                     throw new Error('CORS: url must be defined');
      //                 }
      //                 if (typeof url === 'object') {
      //                     options = url;
      //                 } else {
      //                     if (typeof success === 'function') {
      //                         options.success = success;
      //                     }
      //                     options.url = url;
      //                 }
      //                 options.method = method.toUpperCase();
      //                 return new Request(options).xhr;
      //             };
      //         }());
      //     }
      //     return cors;
      // })();
    
      var pdata = {basic: {}, header: {}, navigator: {}, screenData:{}, geoAndISP:{}, webGL:{}, webRtc:{}, battery:{}, browserType:{}, performanceTiming:{}, canvasFp:{}, visTime:[], other:{}}; //定义需要获取的数据
    
      /*-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-需要异步获取的数据 start-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/
      var latitude, longitude;
      /**
       (function getLocation(){
          if (navigator.geolocation){
              navigator.geolocation.getCurrentPosition(function(position){
                  latitude = position.coords.latitude;
                  longitude = position.coords.longitude;
              });
          }
      })(); */
    
      var mediaSources = [], ipaddrs = [], iceCandidates = [];
      var deviceCount, hasMicrophone, hasWebcam, hasSpeakers, iceSupport;
      try{
          if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
              //enumerateDevices() not supported.
          } else {
              navigator.mediaDevices.enumerateDevices().then(function(devices) {
                  deviceCount = devices.length;
                  devices.forEach(function(device) {
                      mediaSources.push({"id":device.deviceId, "kind":device.kind, "label":device.label, "groupid":device.groupId});
                      if (device.kind === 'audioinput')
                          hasMicrophone = true;
                      else if (device.kind === 'audiooutput')
                          hasSpeakers = true;
                      else if (device.kind === 'videoinput')
                          hasWebcam = true;
                  });
              })/*.catch(function(err) {
               log(err.name + ": " + err.message);
               })*/;
    
          }
      }catch(e){}
    
      var getIPs = function(callback){
          try {
              var ip_dups = {};
              var RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
              var useWebKit = !!window.webkitRTCPeerConnection;
    
              if(!RTCPeerConnection){
                  //create an iframe node
                  var iframe = document.createElement('iframe');
                  iframe.style.display = 'none';
                  //invalidate content script
                  iframe.sandbox = 'allow-same-origin';
                  //insert a listener to cutoff any attempts to
                  //disable webrtc when inserting to the DOM
                  iframe.addEventListener("DOMNodeInserted", function(e){
                      e.stopPropagation();
                  }, false);
                  iframe.addEventListener("DOMNodeInsertedIntoDocument", function(e){
                      e.stopPropagation();
                  }, false);
                  //insert into the DOM and get that iframe's webrtc
                  try {
                      var node = document.documentElement.firstChild;
                      if (node) {
                          node.parentNode.insertBefore(iframe, node);
                      } else {
                          document.documentElement.appendChild(iframe);
                      }
                  }catch(e){}
                  var win = iframe.contentWindow;
                  RTCPeerConnection = win.RTCPeerConnection
                      || win.mozRTCPeerConnection
                      || win.webkitRTCPeerConnection;
                  useWebKit = !!win.webkitRTCPeerConnection;
              }
              var mediaConstraints = {
                  optional: [{RtpDataChannels: true}]
              };
    
              var servers = {iceServers: [{urls: "stun:stun.services.mozilla.com"}]};
              var pc = new RTCPeerConnection(servers, mediaConstraints);
    
              function handleCandidate(candidate) {
                  var ip_regex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{0,4}){5})/
                  var ip_addr = ip_regex.exec(candidate)[1];
                  if (ip_dups[ip_addr] === undefined)
                      callback(ip_addr);
                  ip_dups[ip_addr] = true;
              }
    
              pc.onicecandidate = function (ice) {
                  iceSupport = true;
                  if (ice.candidate) {
                      handleCandidate(ice.candidate.candidate);
                      if (ice.candidate.candidate)
                          iceCandidates.push(ice.candidate.candidate);
                  }
              };
              pc.createDataChannel("");
    
              pc.createOffer(function (result) {
                  pc.setLocalDescription(result, function () {
                  }, function () {
                  });
              }, function () {
              });
    
              setTimeout(function () {
                  if (pc && pc.localDescription && pc.localDescription.sdp) {
                      var lines = pc.localDescription.sdp.split('\n');
                      lines.forEach(function (line) {
                          if (undefined!=line&&line.indexOf('a=candidate:') === 0)
                              handleCandidate(line);
                      });
                  }
              }, 100);
          }catch(e){}
      }
      getIPs(function(ip){ipaddrs.push(ip);});
    
      /*-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-需要异步获取的数据 end-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/
    
      var basic = function(){
          var getOs = function(){
              var os = "Other";
              var userAgent = navigator.userAgent.toLowerCase();
              if(userAgent.indexOf("windows phone") >= 0){
                  os = "Windows Phone";
              } else if(userAgent.indexOf("win") >= 0){
                  os = "Windows";
              } else if(userAgent.indexOf("android") >= 0){
                  os = "Android";
              } else if(userAgent.indexOf("linux") >= 0){
                  os = "Linux";
              } else if(userAgent.indexOf("iphone") >= 0 || userAgent.indexOf("ipad") >= 0 ){
                  os = "iOS";
              } else if(userAgent.indexOf("mac") >= 0){
                  os = "Mac";
              }
              return os;
          }
          return {
              "platform":navigator.platform.toLowerCase(),
              "os":getOs(),
              "architecture":navigator.oscpu,
              "DeviceType":(("ontouchstart" in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0))?"mobileDevice":"desktop",
              "Browser":(function(){
                  var ua= navigator.userAgent, tem,
                      M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
                  if(/trident/i.test(M[1])){
                      tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
                      return 'IE '+(tem[1] || '');
                  }
                  if(M[1]=== 'Chrome'){
                      tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
                      if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
                  }
                  M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
                  if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
                  return M.join(' ');
              })(),
              "localStorage":!!getWindowProp("localStorage"),
              "sessionStorage":!!getWindowProp("sessionStorage")
          };
      }
      function getWindowProp(p){
          try{
              return window[p];
          }catch(e){
              log(e);
          }
          return null;
      }
      var header = function(){
          return {
              "Connection":navigator.onLine,
              //"Accept":"--XX",
              //"Upgrade-Insecure-Requests":"--XX",
              //"Accept-Encoding":"--XX",
              //"Accept-Language":"--XX",
              "historyLength":history.length
          };
      }
    
      var navigatorData = function(){
    
          var getDoNotTrack = function () {
              if(navigator.doNotTrack) {
                  return navigator.doNotTrack;
              } else if (navigator.msDoNotTrack) {
                  return navigator.msDoNotTrack;
              } else if (window.doNotTrack) {
                  return window.doNotTrack;
              } else {
                  return undefined;
              }
          }
    
          return {
              "useragent":navigator.userAgent,
              "language":navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage,
              "vendor":window.navigator.vendor,
              "appVersion":window.navigator.appVersion,
              "numCPU":window.navigator.hardwareConcurrency,
              "appName":window.navigator.appName,
              "appCodeName":window.navigator.appCodeName,
              "cookieEnabled":navigator.cookieEnabled,
              "cpuClass":window.navigator.cpuClass,
              "doNotTrack":getDoNotTrack(),
              "platform":navigator.platform,
              "product":window.navigator.product,
              "productSub":window.navigator.productSub,
              "vendorSub":window.navigator.vendorSub,
              "buildID" : navigator.buildID
          };
      }
    
      var screenData = function(){
          return {
              "width":screen.width,
              "height":screen.height,
              "availWidth":screen.availWidth,
              "availHeight":screen.availHeight,
              "colorDepth":screen.colorDepth,
              "pixelDepth":screen.pixelDepth,
              "devicePixelRatio":window.devicePixelRatio || 1,
              "realWidth":screen.width*(window.devicePixelRatio || 1),
              "realHeight":screen.height*(window.devicePixelRatio || 1)
          };
      }
    
      var geoAndISP = function(){
          return {
              "latitude":latitude,
              "longitude":longitude,
              "ClientTimezoneOffset":new Date().getTimezoneOffset()
          };
      }
    
    
      var webgl = function() {
          var contextNames = [];
          function getWebglCanvas() {
              var allnames = ["webgl", "experimental-webgl", "webgl2", "experimental-webgl2"];
              for(var i=0;i<allnames.length; i++){ //判断支持的context
                  var cs = document.createElement("canvas");
                  try{
                      var t = cs.getContext(allnames[i], {stencil: true});
                      if(!!t)
                          contextNames.push(allnames[i]);
                  }catch(e){}
                  try {
                      cs.remove();
                      cs = null;
                      t = null;
                  }catch(e){}
              }
              var canvas = document.createElement("canvas");
              var gl = null;
              try {
                  gl = canvas.getContext("webgl2", {stencil: true}) || canvas.getContext("experimental-webgl2", {stencil: true}) || canvas.getContext("webgl", {stencil: true}) || canvas.getContext("experimental-webgl", {stencil: true});
              } catch(e) {}
              if (!gl) { gl = null; }
              try {
                  canvas.remove();
              }catch(e){}
              return gl;
          }
    
          var maxAnisotropy = function(gl) {
              var anisotropy, ext = gl.getExtension("EXT_texture_filter_anisotropic") || gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || gl.getExtension("MOZ_EXT_texture_filter_anisotropic");
              return ext ? (anisotropy = gl.getParameter(ext.MAX_TEXTURE_MAX_ANISOTROPY_EXT), 0 === anisotropy && (anisotropy = 2), anisotropy) : null;
          }
    
          var maxColorBuffers = function(a){
              var b = 1,
                  e = a.getExtension('WEBGL_draw_buffers');
              null != e && (b = a.getParameter(e.MAX_DRAW_BUFFERS_WEBGL));
              return b
          }
    
          var fragmentShaderFloatIntPrecision = function(a){
              try {
                  var b = a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT),
                      e = 0 !== b.precision ? 'highp/' : 'mediump/',
                      b = a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT);
                  return e += 0 !== b.rangeMax ? 'highp' : 'lowp'
              } catch (c) {
                  return 'Not Available'
              }
          }
    
          var fa2s = function(fa) {
              if(fa==null)
                  return null;
              return "[" + fa[0] + ", " + fa[1] + "]";
          };
          var gl = getWebglCanvas();
          if(!gl) { return {"isSupported":false}; }
    
    
          var maskedRV = (function getUnmaskedVendor(a){
              var b = {
                  renderer: 'Not Available',
                  vendor: 'Not Available'
              },e = a.getExtension('WEBGL_debug_renderer_info');
              null != e && (b.renderer = a.getParameter(e.UNMASKED_RENDERER_WEBGL), b.vendor = a.getParameter(e.UNMASKED_VENDOR_WEBGL));
              return b
          })(gl);
          return {
              "isSupported":true,
              "WebGLVendor":gl.getParameter(gl.VENDOR),
              "WebGLRenderer":gl.getParameter(gl.RENDERER),
              "unMaskedVendor": maskedRV.vendor,
              "unMaskedRenderer": maskedRV.renderer,
              "maxColorBuffers":maxColorBuffers(gl),
              "isEnabled":gl.isEnabled(gl.STENCIL_TEST),
              "contextNames":contextNames,
              "glVersion":gl.getParameter(gl.VERSION),
              "shadingLanguageVersion":gl.getParameter(gl.SHADING_LANGUAGE_VERSION),
              "redBits":gl.getParameter(gl.RED_BITS),
              "greenBits":gl.getParameter(gl.GREEN_BITS),
              "blueBits":gl.getParameter(gl.BLUE_BITS),
              "alphaBits":gl.getParameter(gl.ALPHA_BITS),
              "maxRenderBufferSize":gl.getParameter(gl.MAX_RENDERBUFFER_SIZE),
              "maxCombinedTextureImageUnits":gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
              "maxCubeMapTextureSize":gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE),
              "maxFragmentUniformVectors":gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS),
              "maxTextureImageUnits":gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS),
              "maxTextureSize":gl.getParameter(gl.MAX_TEXTURE_SIZE),
              "maxVaryingVectors":gl.getParameter(gl.MAX_VARYING_VECTORS),
              "maxVertexAttributes":gl.getParameter(gl.MAX_VERTEX_ATTRIBS),
              "maxVertexUniformVectors":gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS),
              "aliasedLineWidthRange":fa2s(gl.getParameter(gl.ALIASED_LINE_WIDTH_RANGE)),
              "aliasedPointSizeRange":fa2s(gl.getParameter(gl.ALIASED_POINT_SIZE_RANGE)),
              "maxViewportDimensions":fa2s(gl.getParameter(gl.MAX_VIEWPORT_DIMS)),
              "maxAnisotropy":maxAnisotropy(gl),
              "vertexShaderBestPrecision":gl.getShaderPrecisionFormat?gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_FLOAT).precision:0,
              "maxVertexTextureImageUnits":gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
              "fragmentShaderBestPrecision":gl.getShaderPrecisionFormat?gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_FLOAT).precision:0,
              "depthBits":gl.getParameter(gl.DEPTH_BITS),
              "stencilBits":gl.getParameter(gl.STENCIL_BITS),
              "fragmentShaderFloatIntPrecision":fragmentShaderFloatIntPrecision(gl),
              "extensions":gl.getSupportedExtensions(),
              //"webgl2Status":"--",
              //"webgl2Functions":"--",
              "hardwareConcurrency":navigator.hardwareConcurrency
          };
      }
    
      var webRtc = function(){
          return {
              "shouldBeSupported":  (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia)?true:false,
              "deviceEnum": (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices())?true:false,
              "mediaSources":mediaSources,
              "AudioContext": !!window.AudioContext || !!window.webkitAudioContext,
              "hasMic": hasMicrophone,
              "hasWebcam": hasWebcam,
              "hasSpeaker": hasSpeakers,
              "deviceCount": deviceCount,
              "IceSupport": iceSupport,
              "IceCandidates": iceCandidates,
              //"SDP": "--",
              "IPADDR":ipaddrs
          };
      }
    
      var getBatteryInfo = function(){
          var battery = navigator.battery || navigator.webkitBattery || navigator.mozBattery || navigator.msBattery;
          if(battery){
              return {
                  "charging": battery.charging,
                  "level": battery.level,
                  "dischargingTime": battery.dischargingTime
              }
          } else {
    
          }
          return {};
      }
    
      var getCanvasFp = function() {
          var canvas = document.createElement("canvas");
          if(!!(canvas.getContext && canvas.getContext("2d"))) {
              canvas.width = 2000;
              canvas.height = 200;
              canvas.style.display = "inline";
              var ctx = canvas.getContext("2d");
              ctx.rect(0, 0, 10, 10);
              ctx.rect(2, 2, 6, 6);
              var canvasWinding = (ctx.isPointInPath(5, 5, "evenodd") === false);
    
              ctx.textBaseline = "alphabetic";
              ctx.fillStyle = "#f60";
              ctx.fillRect(125, 1, 62, 20);
              ctx.fillStyle = "#069";
              try {
                  ctx.font = "11pt Arial";
              }catch(e){}
              ctx.fillText("http://www.ctrip.com", 2, 15);
              ctx.fillStyle = "rgba(102, 204, 0, 0.2)";
              ctx.font = "18pt Arial";
              ctx.fillText("携程", 4, 45);
    
              ctx.globalCompositeOperation = "multiply";
              ctx.fillStyle = "rgb(255,0,255)";
              ctx.beginPath();
              ctx.arc(50, 50, 50, 0, Math.PI * 2, true);
              ctx.closePath();
              ctx.fill();
              ctx.fillStyle = "rgb(0,255,255)";
              ctx.beginPath();
              ctx.arc(100, 50, 50, 0, Math.PI * 2, true);
              ctx.closePath();
              ctx.fill();
              ctx.fillStyle = "rgb(255,255,0)";
              ctx.beginPath();
              ctx.arc(75, 100, 50, 0, Math.PI * 2, true);
              ctx.closePath();
              ctx.fill();
              ctx.fillStyle = "rgb(255,0,255)";
              ctx.arc(75, 75, 75, 0, Math.PI * 2, true);
              ctx.arc(75, 75, 25, 0, Math.PI * 2, true);
              ctx.fill("evenodd");
    
              var canvasData = canvas.toDataURL();
              return {canvasWinding:canvasWinding, canvasData:murmurHash3(canvasData, 0)};
          }
          return {};
      }
    
      var getBrowserType = function(){
          var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0; // Opera 8.0+
          var isFirefox = typeof InstallTrigger !== 'undefined'; // Firefox 1.0+
          var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0; // At least Safari 3+: "[object HTMLElementConstructor]"
          var isIE = /*@cc_on!@*/false || !!document.documentMode; // Internet Explorer 6-11
          var isEdge = !isIE && !!window.StyleMedia; // Edge 20+
          var isChrome = !!window.chrome && !!window.chrome.webstore; // Chrome 1+
          var isBlink = (isChrome || isOpera) && !!window.CSS; // Blink engine detection
          var u = navigator.userAgent, app = navigator.appVersion;
          return {
              "isOpera":isOpera,
              "isFirefox":isFirefox,
              "isSafari":isSafari,
              "isIE":isIE,
              "isEdge":isEdge,
              "isChrome":isChrome,
              "isBlink":isBlink,
              "isWebKit": u.indexOf('AppleWebKit') > -1,
              "isWeixin": u.indexOf('MicroMessenger') > -1, //是否微信
              "isQQ": u.match(/\sQQ/i) == " qq" //是否QQ
          };
      }
    
      var getTiming = function(){
          if(typeof performance != 'undefined') {
              if (performance && performance.timing) {
                  var ret = {};
                  for(var p in performance.timing){
                      if(typeof performance.timing[p] == "number")
                          ret[p] = performance.timing[p];
                  }
                  return ret;
              }
          }
          return {};
      }
    
      var getVisitPageTime = function(){
          var pagetimes, ptname = "page_time";
          if(CookieUtil.get(ptname))
              pagetimes = CookieUtil.get(ptname).split(",");
          else
              pagetimes = [];
          if(pagetimes.length>24)
              pagetimes = pagetimes.slice(pagetimes.length-24);
          pagetimes.push(""+new Date()*1);
    
          var cookieString = pagetimes.join(",");
          if(cookieString && cookieString.length > 400){
              var op_={"path":"/", "domain":rootDomain()};
              CookieUtil.remove(ptname,op_);
          }else{
              setCookieValue(ptname,cookieString );
          }
    
          return pagetimes;
      }
    
    
      var otherInfo = function(){
          var getAdBlock = function(){
              var ads = document.createElement("div");
              ads.innerHTML = "&nbsp;";
              ads.className = "adsbox";
              var result = false;
              try {
                  var node = document.body.firstChild;
                  if(node){node.parentNode.insertBefore(iframe,node);}else{document.body.appendChild(ads);}
                  result = document.getElementsByClassName("adsbox")[0].offsetHeight === 0;
                  document.body.removeChild(ads);
              } catch (e) {
                  result = false;
              }
              return result;
          }
    
          var getHasLiedLanguages = function(){
              if(typeof navigator.languages !== "undefined"){
                  try {
                      var firstLanguages = navigator.languages[0].substr(0, 2);
                      if(firstLanguages !== navigator.language.substr(0, 2)){
                          return true;
                      }
                  } catch(err) {
                      return true;
                  }
              }
              return false;
          }
    
          var getHasLiedResolution = function(){
              if(screen.width < screen.availWidth){
                  return true;
              }
              if(screen.height < screen.availHeight){
                  return true;
              }
              return false;
          }
    
          var getHasLiedOs = function(){
              var userAgent = navigator.userAgent.toLowerCase();
              var oscpu = navigator.oscpu;
              var platform = navigator.platform.toLowerCase();
              var os;
              //We extract the OS from the user agent (respect the order of the if else if statement)
              if(userAgent.indexOf("windows phone") >= 0){
                  os = "Windows Phone";
              } else if(userAgent.indexOf("win") >= 0){
                  os = "Windows";
              } else if(userAgent.indexOf("android") >= 0){
                  os = "Android";
              } else if(userAgent.indexOf("linux") >= 0){
                  os = "Linux";
              } else if(userAgent.indexOf("iphone") >= 0 || userAgent.indexOf("ipad") >= 0 ){
                  os = "iOS";
              } else if(userAgent.indexOf("mac") >= 0){
                  os = "Mac";
              } else{
                  os = "Other";
              }
              // We detect if the person uses a mobile device
              var mobileDevice;
              if (("ontouchstart" in window) ||
                  (navigator.maxTouchPoints > 0) ||
                  (navigator.msMaxTouchPoints > 0)) {
                  mobileDevice = true;
              } else{
                  mobileDevice = false;
              }
    
              if(mobileDevice && os !== "Windows Phone" && os !== "Android" && os !== "iOS" && os !== "Other"){
                  return true;
              }
    
              // We compare oscpu with the OS extracted from the UA
              if(typeof oscpu !== "undefined"){
                  oscpu = oscpu.toLowerCase();
                  if(oscpu.indexOf("win") >= 0 && os !== "Windows" && os !== "Windows Phone"){
                      return true;
                  } else if(oscpu.indexOf("linux") >= 0 && os !== "Linux" && os !== "Android"){
                      return true;
                  } else if(oscpu.indexOf("mac") >= 0 && os !== "Mac" && os !== "iOS"){
                      return true;
                  } else if(oscpu.indexOf("win") === 0 && oscpu.indexOf("linux") === 0 && oscpu.indexOf("mac") >= 0 && os !== "other"){
                      return true;
                  }
              }
    
              //We compare platform with the OS extracted from the UA
              if(platform.indexOf("win") >= 0 && os !== "Windows" && os !== "Windows Phone"){
                  return true;
              } else if((platform.indexOf("linux") >= 0 || platform.indexOf("android") >= 0 || platform.indexOf("pike") >= 0) && os !== "Linux" && os !== "Android"){
                  return true;
              } else if((platform.indexOf("mac") >= 0 || platform.indexOf("ipad") >= 0 || platform.indexOf("ipod") >= 0 || platform.indexOf("iphone") >= 0) && os !== "Mac" && os !== "iOS"){
                  return true;
              } else if(platform.indexOf("win") === 0 && platform.indexOf("linux") === 0 && platform.indexOf("mac") >= 0 && os !== "other"){
                  return true;
              }
    
              if(typeof navigator.plugins === "undefined" && os !== "Windows" && os !== "Windows Phone"){
                  //We are are in the case where the person uses ie, therefore we can infer that it's windows
                  return true;
              }
    
              return false;
          }
    
          var getHasLiedBrowser = function () {
              var userAgent = navigator.userAgent.toLowerCase();
              var productSub = navigator.productSub;
    
              var browser;
              if(userAgent.indexOf("firefox") >= 0){
                  browser = "Firefox";
              } else if(userAgent.indexOf("opera") >= 0 || userAgent.indexOf("opr") >= 0){
                  browser = "Opera";
              } else if(userAgent.indexOf("chrome") >= 0){
                  browser = "Chrome";
              } else if(userAgent.indexOf("safari") >= 0){
                  browser = "Safari";
              } else if(userAgent.indexOf("trident") >= 0){
                  browser = "Internet Explorer";
              } else{
                  browser = "Other";
              }
    
              if((browser === "Chrome" || browser === "Safari" || browser === "Opera") && productSub !== "20030107"){
                  return true;
              }
    
              var tempRes = eval.toString().length;
              if(tempRes === 37 && browser !== "Safari" && browser !== "Firefox" && browser !== "Other"){
                  return true;
              } else if(tempRes === 39 && browser !== "Internet Explorer" && browser !== "Other"){
                  return true;
              } else if(tempRes === 33 && browser !== "Chrome" && browser !== "Opera" && browser !== "Other"){
                  return true;
              }
    
              var errFirefox;
              try {
                  throw "a";
              } catch(err){
                  try{
                      err.toSource();
                      errFirefox = true;
                  } catch(errOfErr){
                      errFirefox = false;
                  }
              }
              if(errFirefox && browser !== "Firefox" && browser !== "Other"){
                  return true;
              }
              return false;
          }
    
          return {
              "adblock":getAdBlock(),
              "hasLiedLanguages":getHasLiedLanguages(),
              "hasLiedResolution":getHasLiedResolution(),
              "hasLiedOs":getHasLiedOs()
          }
      }
    
      var rootDomain = function(){
          var root_domain = location.hostname;
          var special_domain = ["ctrip.co.kr", "ctrip.co.id", "ctrip.co.th", "ctrip.com.hk"];
          var sdf=true;
          for(var i= 0, j=special_domain.length; i<j; i++){
              if(root_domain.indexOf(special_domain[i])>0){
                  root_domain = special_domain[i];
                  sdf = false;
                  break;
              }
          }
          if(sdf) {
              var temp = root_domain.split('.').reverse();
              if (temp.length > 1)
                  root_domain = temp[1] + '.' + temp[0];
          }
          return root_domain;
      }
    
      var setCookieValue = function(key, value){
          var op_={"path":"/", "expires":new Date(2098,1,1), "domain":rootDomain()};
          CookieUtil.set(key, value, op_);
          window.CHLOROFP_STATUS="set_cookie_success";
    
          if(key==G_NAME || key==S_NAME)
              existsRsgGuid = true;
      }
    
      function cleanObject(ds1){
          for(var p in ds1){
              if(ds1[p]==undefined || ds1[p]==null || ds1[p]==NaN)
                  delete ds1[p]
              else {
                  if (typeof ds1[p] == "object") {
                      if (hasProp(ds1[p]))
                          cleanObject(ds1[p]);
                      else
                          delete ds1[p];
                  } else if (Object.prototype.toString.call(ds1[p]) === '[object Array]') {
                      if(ds1[p].length<1)
                          delete ds1[p];
                  }
              }
          }
      }
    
      var init = function(){
          window.CHLOROFP_STATUS="basic";
          pdata.basic = basic();
          window.CHLOROFP_STATUS="header";
          pdata.header = header();
          window.CHLOROFP_STATUS="navigatorData";
          pdata.navigator = navigatorData();
          window.CHLOROFP_STATUS="screenData";
          pdata.screenData = screenData();
          window.CHLOROFP_STATUS="geoAndISP";
          pdata.geoAndISP = geoAndISP();
          window.CHLOROFP_STATUS="webgl";
          pdata.webGL = webgl();
          window.CHLOROFP_STATUS="webRtc";
          pdata.webRtc = webRtc();
          window.CHLOROFP_STATUS="getBatteryInfo";
          pdata.battery = getBatteryInfo();
          window.CHLOROFP_STATUS="getBrowserType";
          pdata.browserType = getBrowserType();
          window.CHLOROFP_STATUS="getTiming";
          pdata.performanceTiming = getTiming();
          window.CHLOROFP_STATUS="getCanvasFp";
          pdata.canvasFp = getCanvasFp();
          window.CHLOROFP_STATUS="getVisitPageTime";
          pdata.visTime = getVisitPageTime();
          window.CHLOROFP_STATUS="otherInfo";
          pdata.other = otherInfo();
          window.CHLOROFP_STATUS="cleanObject";
          cleanObject(pdata);
      }
    
    
      var isUseIframe = function(){
          var isIe = /*@cc_on!@*/false || !!document.documentMode;
          return isIe && document.documentMode && document.documentMode<10;
      }
    
    
      var submit_ = function (url, key, value) {
        //   if(submiting) { //IE8下不起作用，先注释掉
        //       return setTimeout(function(){
        //           submit_(url, key, value);
        //       }, 30);
        //   }
        //   submiting = true;
          // if(!isUseIframe()){
              var cid = "";
              if(localStorage){cid = localStorage.getItem("GUID")}
              var params = key+"="+value + "&version="+version + "&serverName="+serverName+"&cid="+cid;
              if(guid)
                  params += "&guid="+guid;
              // cors.post({
              //     'url':  url,
              //     'credentials': true,
              //     'params': params,
              //     'method': 'post',
              //     "headers": {
              //         "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
              //     },
              //     'success': function (data) {
              //         window.CHLOROFP_STATUS="data_back";
              //         submiting = false;
              //         if(data) {
              //             window.CHLOROFP_STATUS="data_exist";
              //             if(verifyGuid(data.split("\n")[0])) {
              //                 guid = data.split("\n")[0];
              //                 if(guid.indexOf("|")>0){
              //                     var tmp_ = guid.split("|");
              //                     guid = tmp_[0];
              //                     window.CHLOROFP_IP=tmp_[1];
              //                     setCookieValue("_RF1", tmp_[1]);
              //                     if(tmp_.length>1){
              //                         rsg_ = tmp_[2];
              //                         setCookieValue(S_NAME, rsg_);
              //                     }
              //                 }
              //                 setCookieValue(G_NAME, guid);
              //                 return;
              //             }
              //         }
              //         window.CHLOROFP_STATUS="data_not_exist";
              //     },
              //     'error': function () {
              //         log("cors error");
              //         window.CHLOROFP_STATUS="cors_error";
              //         submiting = false;
              //     }
              // });
          // }
      }
    
      var verifyGuid=function(uid){
          return uid&&(uid.split("-").length==5 || uid.split("-").length==6);
      }
      var did = function(){
          try {
              window.CHLOROFP_STATUS="init";
              init();
              window.CHLOROFP_STATUS="init_end";
          }catch(e){
              log(e);
          }
          try {
              if(device_callback__){
                  device_callback__(pdata);
              }
          }catch(e){}
          window.CHLOROFP_STATUS="before_submit";
          submit_(surl, "data",stringify(pdata));
      }
    
    
      var intervalID = setInterval(function(){
    
          if(existsRsgGuid && guid && rsg_){
              try {
                  if (!CookieUtil.get(G_NAME))
                      setCookieValue(G_NAME, guid);
                  if (!CookieUtil.get(S_NAME))
                      setCookieValue(S_NAME, rsg_);
              }catch(e){
                  if(intervalID)
                      clearInterval(intervalID);
              }
          }
    
      }, 600);
    
      //ready(function(){
    
      if(CookieUtil.get(G_NAME)) {
          guid = CookieUtil.get(G_NAME);
          existsRsgGuid = true;
      } else if(CookieUtil.get("guid__")) {
          guid = CookieUtil.get("guid__");
          setCookieValue(G_NAME, guid);
      }
      if(CookieUtil.get(S_NAME))
          rsg_ = CookieUtil.get(S_NAME);
      // setTimeout(did, 200);
      console.log('fuck');
      did();
      //});
      function Encoder(){
          this.version=5;
          this.performanceKeyList=["navigationStart","unloadEventStart","unloadEventEnd","redirectStart","redirectEnd"
              ,"fetchStart","domainLookupStart","domainLookupEnd","connectStart","connectEnd","requestStart","responseStart","responseEnd"
              ,"domLoading","domInteractive","domContentLoadedEventStart","domContentLoadedEventEnd","domComplete","loadEventStart","loadEventEnd"];
          this.stringify = (typeof JSON === "undefined" || typeof JSON.stringify === "undefined")?
              function (obj) {
                  var t = typeof(obj);
                  if (t != "object" || obj === null) {
                      if (t == "string") obj = '"'+obj+'"';
                      return String(obj);
                  }
                  else {
                      var n, v, json = [], arr = (obj && obj.constructor == Array);
                      for (n in obj) {
                          v = obj[n]; t = typeof(v);
                          if(v===undefined || v==="--") // || !hasProp(v)
                              continue;
                          if (t == "string") v = '"'+v+'"';
                          else if (t == "object" && v !== null) v = this.stringify(v);
                          json.push((arr ? "" : '"' + n + '":') + String(v));
                      }
                      return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
                  }
              }:JSON.stringify;
          this.binarySearch=function(arr,fromIndex,toIndex,key){
              var low = fromIndex;
              var high = toIndex - 1;
    
              while (low <= high) {
                  var mid = (low + high) >>> 1;
                  var cmp = (arr[mid]==key)?0:(arr[mid]>key?1:-1);
                  if (cmp < 0)
                      low = mid + 1;
                  else if (cmp > 0)
                      high = mid - 1;
                  else
                      return mid; // key found
              }
              return -(low + 1);  // key not found.
          }
          this.toBytes = function(str){
              if(undefined==str) return [];
              var utf8 = [];
              str=str+"";
              for (var i=0; i < str.length; i++) {
                  var charcode = str.charCodeAt(i);
                  if (charcode < 0x80) utf8.push(charcode);
                  else if (charcode < 0x800) {
                      utf8.push(0xc0 | (charcode >> 6),
                          0x80 | (charcode & 0x3f));
                  }
                  else if (charcode < 0xd800 || charcode >= 0xe000) {
                      utf8.push(0xe0 | (charcode >> 12),
                          0x80 | ((charcode>>6) & 0x3f),
                          0x80 | (charcode & 0x3f));
                  }
                  else {
                      // let's keep things simple and only handle chars up to U+FFFF...
                      utf8.push(0xef, 0xbf, 0xbd); // U+FFFE "replacement character"
                  }
              }
              return utf8;
          }
          this.x64Xor = function(m, n) {
              return [m[0] ^ n[0], m[1] ^ n[1]];
          };
          this.ipV4StringToInteger = function(string) {
              if(undefined==string) return 0;
              var parts = string.split(".");
    
              var sum = 0;
    
              for(var i = 0; i < 4; i++) {
                  var partVal = Number(parts[i]);
                  sum = (sum << 8) + partVal;
              }
    
              return sum;
          };
          this.serializeBooleanSegment=function(data,buf){
              var basic = data.basic;
              var header = data.header;
              var navigator = data.navigator;
              var webGL = data.webGL;
              var webRtc = data.webRtc;
              var battery = data.battery;
              var browserType = data.browserType;
              var flash = data.flash;
              var canvasFp = data.canvasFp;
              var other = data.other;
              buf.put(this.serializeInByte([(basic)?basic.localStorage:false,(basic)?basic.sessionStorage:false,(header)?header.Connection:false,(navigator)?navigator.cookieEnabled:false,
                  (webGL)?webGL.isSupported:false,(webGL)?webGL.isEnabled:false,(webRtc)?webRtc.shouldBeSupported:false,(webRtc)?webRtc.deviceEnum:false]));
              buf.put(this.serializeInByte([(webRtc)?webRtc.AudioContext:false,(webRtc)?webRtc.hasMic:false,(webRtc)?webRtc.hasWebcam:false,(webRtc)?webRtc.hasSpeaker:false,
                  (webRtc)?webRtc.IceSupport:false,(battery)?battery.charging:false,(browserType)?browserType.isWeixin:false,(browserType)?browserType.isQQ:false]));
              buf.put(this.serializeInByte([(browserType)?browserType.isOpera:false,(browserType)?browserType.isFirefox:false,(browserType)?browserType.isSafari:false,(browserType)?browserType.isIE:false,
                  (browserType)?browserType.isEdge:false,(browserType)?browserType.isChrome:false,(browserType)?browserType.isBlink:false,(browserType)?browserType.isWebKit:false]));
    
              var b = this.serializeInByte([(other)?other.adblock:false,(other)?other.hasLiedLanguages:false,(other)?other.hasLiedResolution:false,(other)?other.hasLiedOs:false]);
              b = this.serializeEnumValue( this.getValue(webGL,"fragmentShaderFloatIntPrecision",Dictionary.WEBGL_fragmentShaderFloatIntPrecision[4]),
                  b,0x7<<1,1, Dictionary.WEBGL_fragmentShaderFloatIntPrecision,4);
              buf.put(b);
              buf.put(this.serializeInByte([(flash)?flash.hasPrinting:false,(flash)?flash.hasScreenBroadcast:false,(flash)?flash.hasScreenPlayback:false,(flash)?flash.hasStreamingVideo:false,
                  (flash)?flash.hasStreamingAudio:false,(flash)?flash.hasVideoEncoder:false,(flash)?flash.isDebugger:false,(flash)?flash.hasEmbeddedVideo:false]));
              buf.put(this.serializeInByte([(flash)?flash.localFileReadDisable:false,(flash)?flash.hasIME:false,(flash)?flash.hasAudio:false,(flash)?flash.hasTLS:false,
                  (flash)?flash.avHardwareDisable:false,(flash)?flash.hasAccessibility:false,(flash)?flash.hasAudioEncoder:false,(flash)?flash.hasMP3:false]));
              b = this.serializeInByte([(flash)?flash.supports32BitProcesses:false,(flash)?flash.supports64BitProcesses:false,(flash)?flash.lsoStorageTest:false,(canvasFp)?canvasFp.canvasWinding:false]);
    
              var v=(undefined==basic)?Dictionary.BASIC_DeviceType[0]:basic.DeviceType;
              b=this.serializeEnumValue(undefined==v?Dictionary.BASIC_DeviceType[0]:v,b,0x1<<3,3,Dictionary.BASIC_DeviceType,0);
              v=(undefined==basic)?Dictionary.BASIC_os[4]:basic.os;
              b=this.serializeEnumValue(undefined==v?Dictionary.BASIC_os[4]:v,b,0x7,0,Dictionary.BASIC_os,4);
              buf.put(b);
          }
          this.serializeInByte=function(data){
              var b =0;
              for(var i=0;i<data.length;i++){
                  if(data[i])
                      b|=(1<<(7-i));
              }
              return b;
          }
          this.serializeEnumValue=function(value,ref,mask,startPos,enumValues,def){
              var i = def;
              if(undefined!=enumValues) {
                  i = this.binarySearch(enumValues, 0, enumValues.length, value.toLowerCase());
                  if (i < 0) i = def;
              }
              return ((ref&(~mask)) | ((i<<startPos)&mask));
          }
          this.serializeTouchPlayerCpuArch=function(flash,buf){
              var b=0;
              b =  this.serializeEnumValue( this.getValue(flash,"touchscreenType",undefined),b,0x3<<6,6,undefined,1);
              b =  this.serializeEnumValue( this.getValue(flash,"playerType",undefined),b, 0x7<<3,3,undefined,3);
              b =  this.serializeEnumValue( this.getValue(flash,"cpuArchitecture",undefined),b,0x7,0,undefined,1);
              buf.put(b);
          }
          this.getValue = function (json,key,def,dictionary) {
              var v=(undefined==json?def:(undefined==json[key]?def:json[key]));
              if(undefined!=dictionary) {
                  if( (typeof v=='string')&&v.constructor==String) v= v.toLowerCase();
                  var ix = this.binarySearch(dictionary, 0, dictionary.length,v);
                  if (ix < 0)//not found
                      return def;
              }
              return v;
          }
          this.serializeHistoryLen = function(header,buf){
              var historyLength = this.getValue(header,"historyLength",0);
              if(historyLength>255)
                  buf.put(255);
              else
                  buf.put(historyLength);
          }
          this.serializeNumCpuHardwareFragment=function(navigator,webGL,buf){
              var b =0;
              b =  this.serializeNumCpuOrHardwareConcurrency( this.getValue(navigator,"numCPU",1),b,0x7<<5,5);
              b =  this.serializeNumCpuOrHardwareConcurrency( this.getValue(navigator,"hardwareConcurrency",1),b,0x7<<2,2);
              buf.put(b);
          }
          this.serializeNumCpuOrHardwareConcurrency = function(num,b,mask,startPos){
              var x;
              switch (num){
                  case 2: x=1;break;
                  case 4: x=2;break;
                  case 8: x=3;break;
                  case 16: x=4;break;
                  case 32: x=5;break;
                  case 64: x=6;break;
                  case 128: x=7;break;
                  default: x=0;break;
              }
              return (b&(~mask)) | ((x<<startPos)&mask);
          }
          this.serializeEnumValOneByte=function(val,dictionary,buf){
              var ix =  this.binarySearch(dictionary,0,dictionary.length,val.toLowerCase());
              if(ix<0)//not found
                  buf.put(Dictionary.UNKOWN_IX);
              else
                  buf.put(ix);
          }
          this.serializeTrackColorLevel=function(navigator,flash,battery,buf){
              var b = 0;
              b =  this.serializeEnumValue( this.getValue(navigator,"doNotTrack",Dictionary.NAVIGATOR_doNotTrack[2]),b,0x3<<6,6,Dictionary.NAVIGATOR_doNotTrack,2);
              b =  this.serializeEnumValue( this.getValue(flash,"screenColor",undefined),b,0x3<<4,4,undefined,3);
              b =  this.serializeBatteryLevel( this.getValue(battery,"level"),b,0x0f,0);
              buf.put(b);
          }
          this.serializeBatteryLevel=function(val,ref,mask,startPos){
              if(val>1) {
                  log("the value must less than or equal 1.");
                  return ref;
              }
              return (ref&(~mask)) | (((val*10)<<startPos)&mask);
          }
          this.serializeBatteryDischarg=function(battery,buf){
              var discharging = (undefined==battery?undefined:battery.discharging);
              var discharg;
              if(null == discharging) discharg = 0;
              else if(discharging=="Infinity") discharg = -32768;
              else discharg = discharging;
              buf.putShort(discharg);
          }
          this.serializeCanvasData=function(canvasData,buf){
              if(undefined==canvasData){buf.put(0);return;}
              buf.put(canvasData.length%2!=0?canvasData.length/2+1
                  :canvasData.length/2);
              for(var i=0;i<canvasData.length;i++){
                  if(i%2==1){
                      buf.put(parseInt(canvasData.substring(i-1,i+1),16));
                  }
              }
              if(canvasData.length%2!=0)
                  buf.put(parseInt(canvasData.substring(canvasData.length-1),16));
          }
          this.serializeGeoAndISP=function(geoAndISP,buf){
              var timeZone =  this.getValue(geoAndISP,"ClientTimezoneOffset",-1);
              if(-1==timeZone)
                  buf.put(-1);
              else
                  buf.put(timeZone/15);
              buf.putFloat( this.getValue(geoAndISP,"latitude",0));
              buf.putFloat( this.getValue(geoAndISP,"longitude",0));
          }
          this.serializeScreenData=function(screenData,buf){
              this.serializeWidthAndHeight(buf, this.getValue(screenData,"width",0), this.getValue(screenData,"height",0));
              this.serializeWidthAndHeight(buf, this.getValue(screenData,"availWidth",0), this.getValue(screenData,"availHeight",0));
              this.serializeWidthAndHeight(buf, this.getValue(screenData,"realWidth",0), this.getValue(screenData,"realHeight",0));
              buf.put( this.getValue(screenData,"colorDepth",0));
              buf.put( this.getValue(screenData,"pixelDepth",0));
              buf.put( this.getValue(screenData,"devicePixelRatio",0))
          }
          this.serializeWidthAndHeight=function(buf,width,height){
              //width and height occupied 3B
              buf.putShort(width|((height&0x0f)<<12));
              buf.put(height>>>4);
          }
          this.serializeWebGLFixedSegment=function(webgl,buf){
              var aliasedLineWidthRange =  this.getValue(webgl,"aliasedLineWidthRange",undefined);
              var aliasedPointSizeRange =  this.getValue(webgl,"aliasedPointSizeRange",undefined);
              var maxViewportDimensions =  this.getValue(webgl,"maxViewportDimensions",undefined);
              buf.put( this.getValue(webgl,"maxColorBuffers",0));
              buf.put( this.getValue(webgl,"redBits",0));
              buf.put( this.getValue(webgl,"greenBits",0));
              buf.put( this.getValue(webgl,"blueBits",0));
              buf.put( this.getValue(webgl,"alphaBits",0));
              buf.putShort( this.getValue(webgl,"maxRenderBufferSize",0));
              buf.put( this.getValue(webgl,"maxCombinedTextureImageUnits",0));
              buf.putShort( this.getValue(webgl,"maxCubeMapTextureSize",0));
              buf.putShort( this.getValue(webgl,"maxFragmentUniformVectors",0));
              buf.put( this.getValue(webgl,"maxTextureImageUnits",0));
              buf.putShort( this.getValue(webgl,"maxTextureSize"));
              buf.put( this.getValue(webgl,"maxVaryingVectors",0,0));
              buf.put( this.getValue(webgl,"maxVertexAttributes",0));
              buf.putShort( this.getValue(webgl,"maxVertexUniformVectors",0));
              buf.put( this.getValue(webgl,"maxAnisotropy",0));
              buf.put( this.getValue(webgl,"vertexShaderBestPrecision",0));
              buf.put( this.getValue(webgl,"maxVertexTextureImageUnits",0));
              buf.put( this.getValue(webgl,"fragmentShaderBestPrecision",0));
              buf.put( this.getValue(webgl,"depthBits",0));
              buf.put( this.getValue(webgl,"stencilBits",0));
    
              this.serializeRange(aliasedLineWidthRange,buf,false);
              this.serializeRange(aliasedPointSizeRange,buf,false);
              this.serializeRange(maxViewportDimensions,buf,true);
          }
          this.serializeRange=function(range,buf,twoBytes){
              if(undefined==range) {
                  if(twoBytes)
                      buf.putShort(0);
                  else
                      buf.put(0);
                  buf.putShort(0);
                  return;
              }
              var strArr = range.substring(1,range.length-1).split(",");
              var floor = parseInt(strArr[0].trim());
              var upper = parseInt(strArr[1].trim());
              if(twoBytes)
                  buf.putShort(floor);
              else
                  buf.put(floor);
              buf.putShort(upper);
          }
          this.serializeFlashFixedSegment=function(flash,buf){
              buf.put( this.getValue(flash,"pixelAspectRatio",0));
              buf.put( this.getValue(flash,"screenDPI",0));
              buf.putShort( this.getValue(flash,"screenResolutionX",0));
              buf.putShort( this.getValue(flash,"screenResolutionY",0));
              this.serializeEnumValOneByte( this.getValue(flash,"language","zh-cn"),Dictionary.NAVIGATOR_language,buf);
          }
          this.serializeUserAgent=function(navigator,buf){
              var ua =  this.getValue(navigator,"useragent",undefined);
              if(undefined==ua) buf.putShort(0);
              else{
                  var bs =  this.toBytes(ua);
                  buf.putShort(bs.length);
                  buf.putBytes(bs);
              }
          }
          this.serializePlugins=function(plugins,buf){
              buf.put(0);
              buf.put(0);
              return;
          }
          this.serializeMimeTypeOrFonts=function(fonts,buf,dictionary,twoByte){
              if(!twoByte){
                  buf.put(0);
                  buf.put(0);
              }else{
                  buf.putShort(0);
                  buf.putShort(0);
              }
              return;
          }
          this.serializeContextName=function(vals, buf){
              if(undefined==vals||vals.length==0){
                  buf.put(0);
                  return;
              }
              var size = 0;
              var flag = 0;
              var pos = buf.position();
              buf.put(flag);
              var val;
              for(var i=0;i<vals.length;i++){
                  val = vals[i];
                  if(val==Dictionary.WEBGL_contextName_experimental)
                      flag|=0x02;
                  else if(val==Dictionary.WEBGL_contextName_webgl)
                      flag|=0x04;
                  else {
                      size++;
                      var bytes =  this.toBytes(val);
                      buf.put(bytes.length);
                      buf.putBytes(bytes);
                  }
              }
              if(size>0x1f) {
                  log("UnsupportedOperationException:elements size could not greater than 31");
                  return;
              }
              if(size>0) flag= (flag|0x01)|(size<<3);
              buf.putAtIndex(pos,flag);
          }
          this.serializeWebGLExtensions=function(extensions, buf){
              if(undefined==extensions||extensions.length==0){
                  buf.put(0);
                  return;
              }
              buf.put(extensions.length);
              var extension;
              var ix;
              for(var i=0;i<extensions.length;i++){
                  extension = extensions[i];
                  ix =  this.binarySearch(Dictionary.WEBGL_EXTENSIONS,0,Dictionary.WEBGL_EXTENSIONS.length,extension);
                  if(ix<0&&undefined!=extension){
                      var bytes =  this.toBytes(extension);
                      buf.put(-bytes.length);
                      buf.putBytes(bytes);
                  }else{
                      buf.put(ix);
                  }
              }
          }
          this.serializeIp=function(ips, buf){
              if(undefined==ips||ips.length==0){
                  buf.put(0);
                  return;
              }
              var startPos = buf.position();
              buf.put(0);
              var ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
              var len=0;
              for(var i=0;i<ips.length;i++){
                  if(!ipv4Regex.exec(ips[i]))
                      continue;
                  buf.putInt( this.ipV4StringToInteger(ips[i]));
                  len++;
              }
              buf.putAtIndex(startPos,len);
          }
          this.serializeVisTime=function(visTime,buf){
              if(undefined==visTime||visTime.length==0){
                  buf.put(0);
                  return;
              }
              var bytes =  this.timeSeriesToBytes(visTime);
              buf.put(bytes.length);
              buf.putBytes(bytes);
          }
          this.longToBytes2 = function(time){
              if(undefined==time) time=0;
              var longStr = parseInt(time).toString(16);
              //console.log(longStr);
              var bytes=[0,0,0,0,0,0,0,0];
              for(var i=longStr.length,j=7;i>0;i-=2,j--){
                  //console.log(longStr.substring(i-2,i));
                  bytes[j]=parseInt(longStr.substring(i-2,i),16);
              }
              return bytes;
          }
          this.longToInt=function(l){
              if(undefined==l) l=0;
              var longStr = parseInt(l).toString(16);
              var bytes=[0,0];
              for(var i=longStr.length,j=1;i>0;i-=8,j--){
                  bytes[j]=parseInt(longStr.substring(i-8,i),16);
              }
              return bytes;
          }
          this.longBitLen = function(l){
              var len1 = l[0].toString(2).length;
              var len2 = (len1!=0)?32:l[1].toString(2).length;
              return len1+len2;
    
          }
          this.timeSeriesToBytes = function(times){
              times.sort();
              var max=times[times.length-1];
              var maxIntArr =  this.longToInt(max);
              var minIntArr =  this.longToInt(times[0]);
              var xorArr = this.x64Xor(maxIntArr,minIntArr);
              var commonByteLen=parseInt((64- this.longBitLen(xorArr))/8);//common bytes length
              var size=times.length;
              var memSize=commonByteLen+1+(8-commonByteLen)*size;
              var data=new Array(memSize);
              data[0]=size & 0xFF;
              var maxbytes =  this.longToBytes2(max);
              for(var j=1;j<=commonByteLen;j++){
                  data[j]=(maxbytes[j-1]);
              }
              var unCommonLen = 8-commonByteLen;
              for(var i=0;i<size;i++){
                  var t =  this.longToBytes2(times[i]);
                  for(var k=1;k<=unCommonLen;k++){
                      data[commonByteLen+i*unCommonLen+k]=t[commonByteLen+k-1];
                  }
              }
              return data;
          }
          this.serializePerformanceTimeing=function(performanceTiming,buf){
              if(undefined==performanceTiming||performanceTiming.length==0){
                  buf.put(0);
                  return;
              }
              var delta=new Array( this.performanceKeyList.length-1);
              var n=0;
              var empty=true;
              var pre=performanceTiming[ this.performanceKeyList[0]];
              for(var m=1;m< this.performanceKeyList.length;m++){
                  var next=performanceTiming[this.performanceKeyList[m]];
                  if(next==undefined || next==0){
                      delta[n++]=undefined;
                  }else{
                      var d=next-pre;
                      delta[n++]=d;
                      empty=false;
                  }
              }
              var  byteBuffer = new ByteBuffer();
              if(pre==undefined || empty){
                  buf.put(1);
                  buf.put(-1);
                  return;
              }
              byteBuffer.putBytes( this.longToBytes2(pre));
              var b=[0,0,0,0,0];
              byteBuffer.putBytes(b);
              for(var i=0;i<delta.length;i++){
                  var index=parseInt(i/4);
                  var offset=parseInt(i%4*2);
                  var mask=0;
                  if(delta[i]==undefined) mask=0;
                  else if(delta[i]<=256) mask=0x1;
                  else if(delta[i]<=65535) mask=0x2;
                  else mask=0x3;
                  b[index]=b[index] | (mask<<offset);
                  if(mask==0x1){
                      byteBuffer.put(delta[i]& 0xFF);
                  }else if(mask==0x2){
                      byteBuffer.put(delta[i]& 0xFF);
                      byteBuffer.put(((delta[i]>>8)& 0xFF));
                  }else if(mask==0x3){
                      byteBuffer.put(delta[i]& 0xFF);
                      byteBuffer.put((delta[i]>>8)& 0xFF);
                      byteBuffer.put((delta[i]>>16)& 0xFF);
                  }
              }
              for(var i=0;i<b.length;i++){
                  byteBuffer.putAtIndex(8+i, b[i]);
              }
              buf.put(byteBuffer.position());
              buf.putBytes(byteBuffer.getBytes());
          }
          this.serializeOther=function(json,buf){
              var basic = json.basic;
              var navigator = json.navigator;
              var webGL  = json.webGL;
              var webRtc = json.webRtc;
              var flash   = json.flash;
              this.serializeStringWithByteLength( this.getValue(basic,"platform",undefined),buf);
              this.serializeStringWithByteLength( this.getValue(basic,"architecture",undefined),buf);
              this.serializeStringWithByteLength( this.getValue(basic,"Browser",undefined),buf);
    
              this.serializeStringWithByteLength( this.getValue(navigator,"vendor",undefined),buf);
              this.serializeStringWithByteLength( this.getValue(navigator,"appVersion",undefined),buf);
              //navigator.appName="Mozilla/5.0 (Windows NT 6.1; Trident/7.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E; staticlogin:product=cboxf2011&act=login&info=ZmlsZW5hbWU9cHcyMDA5LjAwMDAwLjAwMDAuZXhlJm1hYz0mcGFzc3BvcnQ9JnZlcnNpb249MjAxMS45LjMwLjEmY3Jhc2h0eXBlPTE=&verify=bde20c22893488a3e7aa0c796bc7d171; InfoPath.2; Tablet PC 2.0; InfoPath.3; rv:11.0) like Gecko";
              this.serializeStringWithByteLength( this.getValue(navigator,"appName",undefined),buf);
              this.serializeStringWithByteLength( this.getValue(navigator,"appCodeName",undefined),buf);
              this.serializeStringWithByteLength( this.getValue(navigator,"cpuClass",undefined),buf);
              this.serializeStringWithByteLength( this.getValue(navigator,"platform",undefined),buf);
              this.serializeStringWithByteLength( this.getValue(navigator,"product",undefined),buf);
              this.serializeStringWithByteLength( this.getValue(navigator,"productSub",undefined),buf);
              this.serializeStringWithByteLength( this.getValue(navigator,"vendorSub",undefined),buf);
              this.serializeStringWithByteLength( this.getValue(navigator,"buildID",undefined),buf);
    
              if(null!=webGL&&undefined!=webGL) {
                  this.serializeStringWithByteLength( this.getValue(webGL, "WebGLVendor",undefined), buf);
                  this.serializeStringWithByteLength( this.getValue(webGL, "WebGLRenderer",undefined), buf);
                  this.serializeStringWithByteLength( this.getValue(webGL, "unMaskedVendor",undefined), buf);
                  this.serializeStringWithByteLength( this.getValue(webGL, "unMaskedRenderer",undefined), buf);
                  this.serializeStringWithByteLength( this.getValue(webGL, "glVersion",undefined), buf);
                  this.serializeStringWithByteLength( this.getValue(webGL, "shadingLanguageVersion",undefined), buf);
              }
    
              if(null!=webRtc&&undefined!=webRtc) {
                  var ms =  this.getValue(webRtc, "mediaSources",undefined);
                  //ms=[{id:"787bbaf475c2cbfaeb1c4dc774a018fb2f605e2a6d247a7444dd356e5d6976f5",kind:"audioinput",label:"",groupid:"4037905827"},{id:"787bbaf475c2cbfaeb1c4dc774a018fb2f605e2a6d247a743655555",kind:"2wersdf",label:"",groupid:"cddfsfs"}];
                  var msList=undefined;
                  if(undefined!=ms) {
                      msList = [];
                      for (var i = 0; i < ms.length; i++) {
                          msList[i] =  this.stringify(ms[i]);
                      }
                  }
    
                  this.serializeStringList(msList,buf);
                  buf.put(this.getValue(webRtc, "deviceCount",0));
                  this.serializeStringList( this.getValue(webRtc, "IceCandidates",undefined), buf);
              }
    
              if(null!=flash&&undefined!=flash) {
                  this.serializeStringWithByteLength( this.getValue(flash, "version",undefined), buf);
                  this.serializeStringWithByteLength( this.getValue(flash, "guid",undefined), buf);
                  this.serializeStringWithByteLength( this.getValue(flash, "manufacturer",undefined), buf);
                  this.serializeStringWithByteLength( this.getValue(flash, "os",undefined), buf);
                  this.serializeStringWithByteLength( this.getValue(flash, "maxLevelIDC",undefined), buf);
              }
          }
          this.serializeStringList=function(list,buf){
              if(undefined==list||list.length==0){
                  buf.put(0);
                  return;
              }
              buf.put(list.length);
              for(var s=0;s<list.length;s++) {
                  var bytes =  this.toBytes(list[s]);
                  buf.put(bytes.length);
                  buf.putBytes(bytes);
              }
          }
          this.serializeStringWithByteLength=function(val,buf){
              if(undefined==val) {
                  buf.put(0);
                  return;
              }
              if(val.length>255)
                  val = val.substring(0,255);
              var bytes =  this.toBytes(val);
              buf.put(bytes.length);
              buf.putBytes(bytes);
          }
          this.browserFp=function(data){
              var screenData = data.screenData;
              var canvasFp = data.canvasFp;
              var navigator = data.navigator;
              var basic = data.basic;
              var other = data.other;
              var geoAndISP = data.geoAndISP;
              var fpdata={};
              var fill= function (json,key,value) {
                  if(value==undefined) return;
                  json[key]=value;
              }
              fill(fpdata,"width",this.getValue(screenData,"width",0));
              fill(fpdata,"height",this.getValue(screenData,"height",0));
              fill(fpdata,"canvas",this.getValue(canvasFp,"canvasData",undefined));
              fill(fpdata,"userAgent",this.getValue(navigator,"useragent",undefined));
              fill(fpdata,"timeZone",this.getValue(geoAndISP,"ClientTimezoneOffset",-1));
              fill(fpdata,"platform",this.getValue(basic,"platform",undefined));
              fill(fpdata,"os",this.getValue(basic,"os",Dictionary.BASIC_os[4],Dictionary.BASIC_os));
              fill(fpdata,"numCpu",this.getValue(navigator,"numCPU",1,Dictionary.CPUNUM_LIST));
              fill(fpdata,"hardwareConcurrency",this.getValue(navigator,"hardwareConcurrency",1,Dictionary.CPUNUM_LIST));
              fill(fpdata,"language",this.getValue(navigator,"language","zh-cn",Dictionary.NAVIGATOR_language));
              fill(fpdata,"cpuClass",this.getValue(navigator,"cpuClass",undefined));
              fill(fpdata,"doNotTrack",this.getValue(navigator,"doNotTrack",Dictionary.NAVIGATOR_doNotTrack[2],Dictionary.NAVIGATOR_doNotTrack));
              fill(fpdata,"localStorage",this.getValue(basic,"localStorage",false,Dictionary.BOOLEAN_ENUM));
              fill(fpdata,"sessionStorage",this.getValue(basic,"sessionStorage",false,Dictionary.BOOLEAN_ENUM));
              fill(fpdata,"cookieEnabled",this.getValue(navigator,"cookieEnabled",false,Dictionary.BOOLEAN_ENUM));
              fill(fpdata,"hasIME",false);
              fill(fpdata,"hasMP3",false);
              fill(fpdata,"hasTLS",false);
              fill(fpdata,"hasPrinting",false);
              fill(fpdata,"hasStreamingAudio",false);
              fill(fpdata,"hasStreamingVideo",false);
              fill(fpdata,"adblock",this.getValue(other,"adblock",false,Dictionary.BOOLEAN_ENUM));
              var str = this.stringify(fpdata);
              //console.log("fpstr:"+str);
              //alert("fpstr:"+str);
              var fp =  murmurHash3(str,0);
              //console.log("browserFp:"+fp);
              return fp;
          }
          this.encodeStatic =  function(data){
              var header = data.header;
              var navigator = data.navigator;
              var screenData = data.screenData;
              var sysfonts = data.sysfonts;
              var webGL = data.webGL;
              var webRtc = data.webRtc;
              var battery = data.battery;
              var performanceTiming = data.performanceTiming;
              var visTime = data.visTime;
              var flash = data.flash;
              var canvasFp = data.canvasFp;
              var geoAndISP = data.geoAndISP;
              var buf = new ByteBuffer();
              buf.put(this.version);
              var extension =1;
              if(null!=canvasFp&&undefined!=canvasFp)
                  extension|=0x8000;
              if(null!=flash&&undefined!=flash)
                  extension|=0x4000;
              if(null!=webGL&&undefined!=webGL)
                  extension|=0x2000;
              if(null!=webRtc&&undefined!=webRtc)
                  extension|=0x1000;
              if(null!=geoAndISP&&undefined!=geoAndISP)
                  extension|=0x0800;
              if(null!=sysfonts&&undefined!=sysfonts)
                  extension|=0x0400;
              buf.putShort(extension);
              buf.putBytes([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
              this.serializeBooleanSegment(data,buf);
              this.serializeTouchPlayerCpuArch(flash,buf);
              this.serializeHistoryLen(header,buf);
              this.serializeNumCpuHardwareFragment(navigator,webGL,buf);
              this.serializeEnumValOneByte( this.getValue(navigator,"language","zh-cn"),Dictionary.NAVIGATOR_language,buf);
              this.serializeTrackColorLevel(navigator,flash,battery,buf);
              this.serializeBatteryDischarg(battery,buf);
              if(null!=canvasFp&&undefined!=canvasFp)
                  this.serializeCanvasData(canvasFp.canvasData,buf);
              if(null!=geoAndISP&&undefined!=geoAndISP)
                  this.serializeGeoAndISP(geoAndISP,buf);
              this.serializeScreenData(screenData,buf);
              if(null!=webGL&&undefined!=webGL)
                  this.serializeWebGLFixedSegment(webGL,buf);
              if(null!=flash&&undefined!=flash)
                  this.serializeFlashFixedSegment(flash,buf);
              this.serializeUserAgent(navigator,buf);
              buf.putShortAtIndex(3,buf.position());
              var plugins =  this.getValue(navigator,"plugins",undefined);
              this.serializePlugins(plugins,buf);
              buf.putShortAtIndex(5, buf.position()-buf.getShort(3));
              var pos = buf.position();
              this.serializeMimeTypeOrFonts(undefined,buf,undefined,false);
              buf.putShortAtIndex(7,buf.position()-pos);
              pos = buf.position();
              if(null!=sysfonts&&undefined!=sysfonts)
                  this.serializeMimeTypeOrFonts(sysfonts,buf,undefined,true);
              buf.putIntAtIndex(9,buf.position()-pos);
              pos = buf.position();
              if(null!=flash&&undefined!=flash) {
                  this.serializeMimeTypeOrFonts(flash.fontNames, buf,undefined, true);
              }
              buf.putIntAtIndex(13, buf.position()-pos);
              pos = buf.position();
              if(null!=webGL&&undefined!=webGL) {
                  this.serializeContextName(webGL.contextNames,buf);
                  buf.putAtIndex(17, buf.position()-pos);
                  pos = buf.position();
                  this.serializeWebGLExtensions(webGL.extensions, buf);
              }
              buf.putAtIndex(18,buf.position()-pos);
              pos = buf.position();
              if(null!=webRtc&&undefined!=webRtc) {
                  this.serializeIp(webRtc.IPADDR, buf);
              }
              buf.putAtIndex(19,buf.position()-pos);
              pos = buf.position();
              this.serializeOther(data,buf);
              buf.putShortAtIndex(20,buf.position()-pos);
              pos = buf.position();
              this.serializeVisTime(visTime,buf);
              buf.putAtIndex(22,buf.position()-pos);
              this.serializePerformanceTimeing(performanceTiming,buf);
              //browerfp is same serialized as canvas data
              var browserfp = this.browserFp(data);
              this.serializeCanvasData(browserfp,buf);
              return buf.getBytes();
          }
      }
      function ByteBuffer(){
          this.pos =0;//byte array current position
          this.bytes = new Array();
          this.get=function(ix){
              return this.bytes[ix];
          }
          this.getShort=function(ix){
              return (this.bytes[ix]<<8)|this.bytes[ix+1];
          }
          this.position=function(){
              return this.pos;
          }
          this.getBytes=function(){
              return  this.bytes;
          }
          this.put = function(byte){
              this.bytes[ this.pos]=byte;
              this.pos++;
          }
          this.putAtIndex = function(index,byte){
              this.bytes[index]=byte;
          }
          this.putBytes = function(arr){
              for(var i=0;i<arr.length;i++){
                  this.put(arr[i]);
              }
          }
          this.putInt = function(int){
              this.toBytes(int,4);
          }
          this.putIntAtIndex = function(index,int){
              this.toBytesAtIndex(int,4,index);
          }
          this.putShort = function(short){
              this.toBytes(short,2);
          }
          this.putShortAtIndex = function(index,short){
              this.toBytesAtIndex(short,2,index);
          }
          this.putLong = function(long){
              this.toBytes(long,8);
          }
          this.putLongAtIndex = function(index,long){
              this.toBytesAtIndex(long,8,index);
          }
          this.putFloat = function(float){
              this.putInt(this.toFloat32(float));
          }
    
          this.toBytesAtIndex = function(x,byteSize,index){
              var i = byteSize;
              do {
                  this.bytes[index-1+i] = x & (255);
                  i--;
                  x = x>>8;
              } while ( i )
          }
          this.toFloat32 = function(value){
              var bytes = 0;
              switch (value) {
                  case Number.POSITIVE_INFINITY: bytes = 0x7F800000; break;
                  case Number.NEGATIVE_INFINITY: bytes = 0xFF800000; break;
                  //case +0.0: bytes = 0x40000000; break;
                  //case -0.0: bytes = 0xC0000000; break;
                  case 0: bytes = 0; break;
                  default:
                      if (Number.isNaN(value)) { bytes = 0x7FC00000; break; }
    
                      if (value <= -0.0) {
                          bytes = 0x80000000;
                          value = -value;
                      }
    
                      var exponent = Math.floor(Math.log(value) / Math.log(2));
                      var significand = ((value / Math.pow(2, exponent)) * 0x00800000) | 0;
    
                      exponent += 127;
                      if (exponent >= 0xFF) {
                          exponent = 0xFF;
                          significand = 0;
                      } else if (exponent < 0) exponent = 0;
    
                      bytes = bytes | (exponent << 23);
                      bytes = bytes | (significand & ~(-1 << 23));
                      break;
              }
              return bytes;
          };
          this.toBytes = function(x,byteSize){
              var i = byteSize;
              do {
                  this.bytes[this.pos-1+i] = x & (255);
                  i--;
                  x = x>>8;
              } while ( i )
              this.pos+=byteSize;
          }
      }
//    } else {
//       console.log("fuck you"); 
//    }
//    phantom.exit(0);
// });