import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.82820f36.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"practice/js-date.md","filePath":"practice/js-date.md","lastUpdated":1694189773000}'),p={name:"practice/js-date.md"},l=e(`<h2 id="js获取日期相关" tabindex="-1">JS获取日期相关 <a class="header-anchor" href="#js获取日期相关" aria-label="Permalink to &quot;JS获取日期相关&quot;">​</a></h2><h2 id="参考资料-https-www-jianshu-com-p-8eb4309730e9" tabindex="-1">参考资料：<a href="https://www.jianshu.com/p/8eb4309730e9" target="_blank" rel="noreferrer">https://www.jianshu.com/p/8eb4309730e9</a> <a class="header-anchor" href="#参考资料-https-www-jianshu-com-p-8eb4309730e9" aria-label="Permalink to &quot;参考资料：https://www.jianshu.com/p/8eb4309730e9&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#dbd7caee;">var myDate = new Date();</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;">myDate.getYear();      </span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;">//获取当前年份(2位)myDate.getFullYear();    </span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;">//获取完整的年份(4位,1970-????)myDate.getMonth();      </span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;">//获取当前月份(0-11,0代表1月)myDate.getDate();    </span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;">//获取当前日(1-31)myDate.getDay();      </span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;">//获取当前星期X(0-6,0代表星期天)myDate.getTime();       </span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;">//获取当前时间(从1970.1.1开始的毫秒数)myDate.getHours();    </span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;">//获取当前小时数(0-23)myDate.getMinutes();   </span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;">//获取当前分钟数(0-59)myDate.getSeconds();    </span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;">//获取当前秒数(0-59)myDate.getMilliseconds();  </span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;">//获取当前毫秒数(0-999)myDate.toLocaleDateString();  </span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;">//获取当前日期var mytime=myDate.toLocaleTimeString();   </span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;">//获取当前时间myDate.toLocaleString( );</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;">//获取日期与时间</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;">**[日期时间](http://www.cnblogs.com/carekee/admin/file::;)**脚本库方法列表</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;">**[Date](http://www.cnblogs.com/carekee/admin/file::;)**.prototype.isLeapYear 判断闰年</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;">Date.prototype.Format 日期格式化D</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;">ate.prototype.DateAdd 日期计算</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;">Date.prototype.DateDiff 比较日期差</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;">Date.prototype.toString 日期转字符串</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;">Date.prototype.toArray 日期分割为数组</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;">Date.prototype.DatePart 取日期的部分信息</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;">Date.prototype.MaxDayOfDate 取日期所在月的最大**[天数](http://www.cnblogs.com/carekee/admin/file::;)**</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;">Date.prototype.WeekNumOfYear 判断日期所在年的第几周</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;">StringToDate 字符串转日期型</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;">IsValidDate 验证日期有效性</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;">CheckDateTime 完整日期时间检查</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;">daysBetween 日期天数差</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;">// 对Date的扩展，将 Date 转化为指定格式的String</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;">// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;"> // 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) </span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;">// 例子：</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;"> // (new Date()).Format(&quot;yyyy-MM-dd hh:mm:ss.S&quot;) ==&gt; 2006-07-02 08:09:04.423</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;"> // (new Date()).Format(&quot;yyyy-M-d h:m:s.S&quot;)      ==&gt; 2006-7-2 8:9:4.18 Date.prototype.Format = function (fmt) { </span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;">//author: meizz     </span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;">var o = {       </span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;"> &quot;M+&quot;: this.getMonth() + 1, //月份     </span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;">    &quot;d+&quot;: this.getDate(), //日   </span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;">      &quot;h+&quot;: this.getHours(), //小时     </span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;">    &quot;m+&quot;: this.getMinutes(),//分     </span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;">    &quot;s+&quot;: this.getSeconds(), //秒      </span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;">   &quot;q+&quot;: Math.floor((this.getMonth() + 3) / 3), //季度        </span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;"> &quot;S&quot;: this.getMilliseconds() // 毫秒  </span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;">};   </span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;"> if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + &quot;&quot;).substr(4 - RegExp.$1.length));    for (var k in o)    if (new RegExp(&quot;(&quot; + k + &quot;)&quot;).test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : ((&quot;00&quot; + o[k]).substr((&quot;&quot; + o[k]).length)));    return fmt;}</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;">调用：</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;">var time1 = new Date().Format(&quot;yyyy-MM-dd&quot;);</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;">var time2 = new Date().Format(&quot;yyyy-MM-dd HH:mm:ss&quot;);</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#393a34;">var myDate = new Date();</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">myDate.getYear();      </span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">//获取当前年份(2位)myDate.getFullYear();    </span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">//获取完整的年份(4位,1970-????)myDate.getMonth();      </span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">//获取当前月份(0-11,0代表1月)myDate.getDate();    </span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">//获取当前日(1-31)myDate.getDay();      </span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">//获取当前星期X(0-6,0代表星期天)myDate.getTime();       </span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">//获取当前时间(从1970.1.1开始的毫秒数)myDate.getHours();    </span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">//获取当前小时数(0-23)myDate.getMinutes();   </span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">//获取当前分钟数(0-59)myDate.getSeconds();    </span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">//获取当前秒数(0-59)myDate.getMilliseconds();  </span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">//获取当前毫秒数(0-999)myDate.toLocaleDateString();  </span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">//获取当前日期var mytime=myDate.toLocaleTimeString();   </span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">//获取当前时间myDate.toLocaleString( );</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">//获取日期与时间</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">**[日期时间](http://www.cnblogs.com/carekee/admin/file::;)**脚本库方法列表</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">**[Date](http://www.cnblogs.com/carekee/admin/file::;)**.prototype.isLeapYear 判断闰年</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">Date.prototype.Format 日期格式化D</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">ate.prototype.DateAdd 日期计算</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">Date.prototype.DateDiff 比较日期差</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">Date.prototype.toString 日期转字符串</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">Date.prototype.toArray 日期分割为数组</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">Date.prototype.DatePart 取日期的部分信息</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">Date.prototype.MaxDayOfDate 取日期所在月的最大**[天数](http://www.cnblogs.com/carekee/admin/file::;)**</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">Date.prototype.WeekNumOfYear 判断日期所在年的第几周</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">StringToDate 字符串转日期型</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">IsValidDate 验证日期有效性</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">CheckDateTime 完整日期时间检查</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">daysBetween 日期天数差</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">// 对Date的扩展，将 Date 转化为指定格式的String</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;"> // 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) </span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">// 例子：</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;"> // (new Date()).Format(&quot;yyyy-MM-dd hh:mm:ss.S&quot;) ==&gt; 2006-07-02 08:09:04.423</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;"> // (new Date()).Format(&quot;yyyy-M-d h:m:s.S&quot;)      ==&gt; 2006-7-2 8:9:4.18 Date.prototype.Format = function (fmt) { </span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">//author: meizz     </span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">var o = {       </span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;"> &quot;M+&quot;: this.getMonth() + 1, //月份     </span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">    &quot;d+&quot;: this.getDate(), //日   </span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">      &quot;h+&quot;: this.getHours(), //小时     </span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">    &quot;m+&quot;: this.getMinutes(),//分     </span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">    &quot;s+&quot;: this.getSeconds(), //秒      </span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">   &quot;q+&quot;: Math.floor((this.getMonth() + 3) / 3), //季度        </span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;"> &quot;S&quot;: this.getMilliseconds() // 毫秒  </span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">};   </span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;"> if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + &quot;&quot;).substr(4 - RegExp.$1.length));    for (var k in o)    if (new RegExp(&quot;(&quot; + k + &quot;)&quot;).test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : ((&quot;00&quot; + o[k]).substr((&quot;&quot; + o[k]).length)));    return fmt;}</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">调用：</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">var time1 = new Date().Format(&quot;yyyy-MM-dd&quot;);</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">var time2 = new Date().Format(&quot;yyyy-MM-dd HH:mm:ss&quot;);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br></div></div>`,3),c=[l];function o(t,r,i,b,y,d){return a(),n("div",null,c)}const D=s(p,[["render",o]]);export{u as __pageData,D as default};
