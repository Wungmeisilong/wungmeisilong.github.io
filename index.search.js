var relearn_search_index = [
  {
    "breadcrumb": "王梅四郎maloudown",
    "content": " 1.计算机组成原理 2.AndroidStudio 2-1.Toolbar工具栏 3.STM32_RFID 4.Esp8266_WiFi 5.CC2530_ZigBee 实验2 IO端口输出实验 6.Arduino 创建hugo静态网站的经历 ",
    "description": "",
    "tags": null,
    "title": "一、博客文章",
    "uri": "/branch-bundle-1/"
  },
  {
    "breadcrumb": "王梅四郎maloudown",
    "content": "",
    "description": "",
    "tags": null,
    "title": "二、网站优化备忘录",
    "uri": "/about_create_web/"
  },
  {
    "breadcrumb": "王梅四郎maloudown \u003e 二、网站优化备忘录",
    "content": "不论是创建首页页面，还是左边框的选项，归根结底它们都是“目录”，从根上说，你需要创建一个目录然后在目录里面创建一个.md文件来装这个目录或说显示这个目录的内容。\n首页的创建 创建首页使用了命令\nhugo new –kind home _index.md\n而后产生的页面，它自动生成头文件\n+++ archetype = \"home\" title = \"\" +++ 值得注意的是，如果你用命令\nhugo new site myblog\n创建了一个myblog的目录，那么你在里面操作 hugo new –kind home _index.md 的时候,用于显示首页的文件_index.md会自动产生在content文件里。\n创建章节的方法 使用命令：\nhugo new \u003cchapter\u003e/\u003cname\u003e/_index.md 或者：\nhugo new \u003cchapter\u003e/\u003cname\u003e.md 在创建章节的时候需要加上alwaysopen = false,如下面的例子：\n+++ alwaysopen = false archetype = \"chapter\" title = \"2.AndroidStudio\" weight = 20 +++ 附件 ",
    "description": "",
    "tags": "计算机网络",
    "title": "1.目录与子目录",
    "uri": "/about_create_web/%E7%9B%AE%E5%BD%95%E5%88%9B%E5%BB%BA/"
  },
  {
    "breadcrumb": "王梅四郎maloudown \u003e 一、博客文章",
    "content": "Lorem Ipsum.\n",
    "description": "",
    "tags": null,
    "title": "1.计算机组成原理",
    "uri": "/branch-bundle-1/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BB%84%E6%88%90%E5%8E%9F%E7%90%86/"
  },
  {
    "breadcrumb": "王梅四郎maloudown \u003e 一、博客文章",
    "content": " 2-1.Toolbar工具栏Toolbar是什么？ 简单理解就是页面的上的菜单栏，或者叫工具栏，在AndroidStudio的页面布局中使用Toolbar， menu文件的\n",
    "description": "",
    "tags": null,
    "title": "2.AndroidStudio",
    "uri": "/branch-bundle-1/androidstudio/"
  },
  {
    "breadcrumb": "王梅四郎maloudown \u003e 一、博客文章",
    "content": "Lorem Ipsum.\n",
    "description": "",
    "tags": null,
    "title": "3.STM32_RFID",
    "uri": "/branch-bundle-1/stm32_rfid/"
  },
  {
    "breadcrumb": "王梅四郎maloudown \u003e 一、博客文章",
    "content": "Lorem Ipsum. ",
    "description": "",
    "tags": null,
    "title": "4.Esp8266_WiFi",
    "uri": "/branch-bundle-1/esp8266_wifi/"
  },
  {
    "breadcrumb": "王梅四郎maloudown \u003e 一、博客文章",
    "content": " 实验2 IO端口输出实验实验2 IO端口输出实验 1、实验要求： 利用实验箱的基础板，实现八盏灯的点亮，下面是八盏灯的位置图： 在实际中我们可能没有实验箱，往往需要自己做一\n",
    "description": "",
    "tags": null,
    "title": "5.CC2530_ZigBee",
    "uri": "/branch-bundle-1/cc2530_zigbee/"
  },
  {
    "breadcrumb": "王梅四郎maloudown \u003e 一、博客文章",
    "content": "Lorem Ipsum. ",
    "description": "",
    "tags": null,
    "title": "6.Arduino",
    "uri": "/branch-bundle-1/arduino/"
  },
  {
    "breadcrumb": "王梅四郎maloudown \u003e Categories",
    "content": "",
    "description": "",
    "tags": null,
    "title": "类别 :: B2-备忘录",
    "uri": "/categories/b2-%E5%A4%87%E5%BF%98%E5%BD%95/"
  },
  {
    "breadcrumb": "王梅四郎maloudown",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Categories",
    "uri": "/categories/"
  },
  {
    "breadcrumb": "王梅四郎maloudown",
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tags",
    "uri": "/tags/"
  },
  {
    "breadcrumb": "王梅四郎maloudown \u003e 一、博客文章",
    "content": " 附件 一、为什么要创建属于自己博客网站 自从进入大三的学习，自己接触了许多开发板、以及七七八八的软件，个人记忆力又不咋地，平时很容易把重要或者重复的知识忘记，所以我希望做一个网站记录自己所学的知识，方便查找，但我没学JS，深入学又耗费时间，如果你也有我的一些情况，想自己创建一个网站“玩玩”，那么请看下去，希望自己的一些分享能对想短期内创建静态网站、且没学过网站设计的朋友有所帮助。\n二、选择静态网站布局工具以及远程仓库 1、工具的选择 在这里我就只推荐hugo，因为本人用的就是hugo，其他的并不是很了解（如果你有更好的方法还请通过留言告诉我，谢谢！），首先确定自己要装在哪个系统上，比如装在Windows、Linux或者Mac（苹果系统），确定好这个后你就去网上搜安装方法即可，一定要搜和自己电脑系统有关的安装方法，不然安装会走很多坑的。 Windows系统。我建议使用choco工具在终端上安装，如果电脑没安装choco工具，还请自行安装。 Linux系统。首先确定自己的Linux的发行版本，举个例子，像红帽公司的和ContentOS的，这两个发行版本使用的工具可能就不一样，像ContentOS使用的是工具Yum工具安装的，还请你在网上自行搜索。 Mac系统。使用brew工具进行安装，不知道怎么用brew还请网上搜一下。 下载好后使用如下命令检查是否安装成功。\nhugo verser2、远程仓库的选择 因为要把网站的相关信息放到网上，一遍搜索查找，我们需要一个远程的仓库来装这些数据，无疑github是比较好的选择，当然Gitee、gitLab这些应该也可以（本人没有过）。至于为什么选github我想你只要稍微了解一点IT这行的，多少都知道其原因，不知道也没关系，只要能存放我们的网站数据就行。 首先你需要去注册一个github账号，并掌握在线创建、删除、导入和下载仓库，以及文件的上传、删除修改等操作，这些其实并不是很难，刚开始需要你换一点时间，详细请上网搜索。\n当我们hugo下载好和仓库创建等操作都学会后我们就可以开始操作了。\n三、仓库创建与静态网站布局 仓库创建最好是和自己github的账户名字一样，且都是小写，然后后面跟着 .github.io,例如：\nwang32.github.io\r这是比较稳妥的做法，如果你不想这么做还请自己花时间去琢磨别的方法。接着我么创建一个空项目，什么都不需要哦!\n下一步是静态网站的部署，首先你需要下载一个hugo的主题，也就是用别人的网页主题作为自己网站的基础，这样呢我们及时没学过JS也可以部署自己的网站。 创建一个目录，比如myblog，接着用code打开这个目录，在code编译器中打开终端窗口监视器，在里面输入命令\nhugo new site这个时候myblog目录下会生成一个theme的目录，用来放主题，把下载好的hugo主题放在该目录下，在使用如下命令：\nhugo --theme=\u003c主题名字\u003e --baseURL=\"\u003c你github仓库的路径\u003e\" --buildDrafts举个例子：\nhugo --theme=m10c --baseURL=\"https://wung32.github.io/\" --buildDrafts上面m10c是主题的名字，也就是你下载的hugo主题名字，而https://wung32.github.io/仓库路径。\n在这你需要注意：如果不是Windows系统这的baseURL可能写为baseUrl,要确定这件事就去看hugo.tolm文件，有的主题写为config.tolm,里面的第一二行就会提到baseURL，注意这里的要去主题目录里找。而不是在你创建的目录myblog下找。 运行上面的代码没问题就会在你创建的myblog目录下产生一个public的目录，里面装的就是你的网页信息。\n接着使用git命令把这个文件推送到远程的仓库，一般的步骤如下：\ngit init #初始化：本地建库（即文件夹）\rgit add #添加到仓库：代码文件放入本地库，\rgit commit -m “注释内容” #提交时要给注释\rgit remote add origin https://github.com/xu-xiaoya/Elegent.git #远程仓库关联\rgit push (-u) origin master #本地仓库的代码推送到远程仓库Github上如果报错：\nerror: RPC failed; HTTP 504 curl 18 HTTP/2 stream 7 was reset\rsend-pack: unexpected disconnect while reading sideband packet\rfatal: the remote end hung up unexpectedly\rEverything up-to-date\r那么加一句：\ngit config --global http.postBuffer 524288000接着继续推送就是了。\n然后去自己的仓库，点击设置，找到Page选项，有个Custom domain，在那里写上你的网站名称。\n四、买一个域名 我在没买之前网页一直加载不出来，自己也不知道为什么（如果你知道不用买域名也可以实现网站部署还请告诉我，谢谢啦！）。所以我自己是买了一个六块钱的域名的，试用期一年；当你买一个域名后要记得去解析域名，然后把解析的域名写到上面说的Custom domain那个地方，比如你解析得到的域名是：myblog.wang32.com,那么你就写这个上去。\n如果不知道怎么买。怎么解析，那么——是的，一样上网查一下。\n五、网站的优化 这个我不建议你一个人慢慢磨，慢慢的去网上找方法，其实制作主题的作者已经把怎么基于他的主题做出自己的网站的方法了，所以你老老实实的跟着作者的文档走就是了，实在有些地方不懂的在查一查看。\n补充 1、为什么我插入的图片无法显示？ 图片的显示：首先要看你的主题是基于什么语言写的，比如我的是markdown,对于这个语言只需要使用：\n![nihao](../../../public/webfonts/fa-brands-400.svg)上面的这个方法就可以让图片显示，但实际上不一定能可以，因为hugo有个目录创建规则——Page Bundles(连接：https://www.rectcircle.cn/series/hugo/content-management/page-bundles/)，如果不按照这个规则创建，那么你使用别人的主题，插入图片时可能无法显示。\n光是上面这点我就搞了一个星期，所以还是希望你好好看一下Page Bundles文档。\n今天先到这了…… 2023年12月11日\n",
    "description": "",
    "tags": "经历",
    "title": "创建hugo静态网站的经历",
    "uri": "/branch-bundle-1/experimence/"
  },
  {
    "breadcrumb": "王梅四郎maloudown \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "标签 :: 经历",
    "uri": "/tags/%E7%BB%8F%E5%8E%86/"
  },
  {
    "breadcrumb": "",
    "content": " 搜索 +++ title = “pretues+kiel5仿真软件配合使用时需要注意的地方” tags = [“go”, “golang”, “templates”, “themes”, “development”] date = “2023-11-17” +++\n不知道keil5从哪个版本开始就不支持了晶振的设置操作，我在网上搜也得到不同的答案，所以从哪个版本开始限制这就不提了， 好在这样的改变并不会形象我们使用keil5。最近在刚进阶学习stm32，用到了pretues_8.11 仿真软 件和keil5代码编辑器，自己把心中所得分享一下。\n别人编译编译成功的工程，我另外用keil5打开编译为什么会失败？\n假设你拿到的别人的工程所选芯片为stm32f103VC，那么你在另外的电脑打开keil5，在设置里选芯片也是stm32f103VC，如果选的芯片与工程最初选的型号不同，那编译可能会失败，接着在打勾生成.hex文件。\npretues里没有找到keil5里选择的芯片，能用别的芯片代替吗？\n答案是可以的，但尽量使用版本更高的芯片，使之能向下兼容，在keil5如果选了stm32f103VC，而pretues仿真的芯片是stm32f103C6，那么你并不用担心芯片不对应而导致你仿真失败。\n在pretues导入.hex文件后直接开始仿真，为什么报了许多错误？\n可能原因：在选择好.hex文件后，还必须设置晶振频率，即12MHz，如果没置会导致仿真失败，另外你不用担心选择的.hex文件路径有中文，我测过即使导入文件路径有中文也可以正常运行。\n",
    "description": "",
    "tags": null,
    "title": "王梅四郎maloudown",
    "uri": "/"
  },
  {
    "breadcrumb": "王梅四郎maloudown \u003e Categories",
    "content": "",
    "description": "",
    "tags": null,
    "title": "类别 :: C1-CC2530",
    "uri": "/categories/c1-cc2530/"
  },
  {
    "breadcrumb": "王梅四郎maloudown \u003e Categories",
    "content": "",
    "description": "",
    "tags": null,
    "title": "类别 :: D1-点灯实验",
    "uri": "/categories/d1-%E7%82%B9%E7%81%AF%E5%AE%9E%E9%AA%8C/"
  },
  {
    "breadcrumb": "王梅四郎maloudown \u003e 一、博客文章 \u003e 5.CC2530_ZigBee",
    "content": "实验2 IO端口输出实验 1、实验要求： 利用实验箱的基础板，实现八盏灯的点亮，下面是八盏灯的位置图： 在实际中我们可能没有实验箱，往往需要自己做一个八盏灯的板子，这个时候了解本次实验挤出实验板的八盏灯连接原理是很重要的，了解原理后你就可以自己做出自己的LED板子，并用cc2530控制它。\n2、LED灯驱动芯片 由于CC2530 单片机端口驱动能力有限，所以我们可以用ULN2003芯片做驱动，但使用uln2003需要使用到八个端口，为了不浪费端口，我们可以使用74HC595，该芯片只需要用到三个端口就可以控制八盏灯的亮灭，下面提供两块芯片的原理图： 如果你想用ULN2003还请查看相关手册，此处对74HC595进行详细说明。 74HC595 是 8 位输出锁存移位寄存器，数据输入由三个引脚组合控制，分别是数据输入引脚 SER、数据输入控制引脚 SRCK 和数据输出锁存引脚 RCK SER 引脚上的数据在 SRCK 引脚的上升沿信号保存到 QA 引脚，同时 QA 位上的数据移位到 QB位，QB 位的数据移位到 QC 位……，依次类推，所有数据向后串行移动一位，QH 位的数据被送到QH’位。所有位的数据在 RCK 引脚的上升沿信号被所存到输出端。 一下是我的个人理解： 这里我们用输入数据1001 0101，使第1、3、5、8盏灯亮（假设高电平有效）为例解释说明，首先，实际上数据输入74HC595是串行输入，所以可以数据输入时是在打开SER端口后，按照从高位到低位依次输入数据1001 0101，如上图的下面所示；接着打开SRCK，先把最高位1输入数据寄存器低位b0，接着输入次高位的0,通过0把1挤到b1，以此类推；接着再打开RCK显示灯的亮灭。\n3、IO端口输出控制 要使用CC2530的IO端口，我们需要对PxDIR、PxSEL、Px进行设置，PxDIR用来控制端口的输入输出模式，1表示输出模式，SEL为0时，表示通用IO端口，详细参照下表： 而这里的x可以取0、1、2，其实就是端口P0、P1、P2的意思,在端口下设8个端口0~7，例如P0_1,但是端口2只有0~4可用;\n下面是一个详细的例子： 当I/OP1_0~P1_7 各I/O端口输出高低电平时，设置方法如表 1.2所示： 了解以上知识后我们就可以写工程代码了。\n.xml文件 PrintfLED.h Delaye.h Initial.h 全码 //led输出设置 #include \u003cPrintfLED.h\u003e #define SER P1_0 #define SRCK P1_2 #define RCK P1_1 #define LOW 0 #define HIGE 1 void printfLED(unsigned char data,unsigned char byte){ SRCK = LOW; RCK = LOW; P1 = byte; //定义参考位 unsigned char getbit = 0x80; unsigned char i; for(i=8;i\u003e=1;i--){ if(data \u0026 getbit){ SER=1; } else{ SER=0; } SRCK = HIGE; getbit \u003e\u003e= 1; SRCK =LOW; } RCK = HIGE; } # include \"Delaye.h\" //延迟函数 void delaye() { int i,j,k; for(i=0;i\u003c5;i++) for(j=0;j\u003c200;j++) for(k=0;k\u003c255;k++) ; } #include \"Initial.h\" //初始化函数 void initial(){ P1SEL = 0x00; P1DIR = 0xFF; P1=0x00; } #include \"ioCC2530.h\" #include \"Initial.h\" #include \"Delaye.h\" #include \"PrintfLED.h\" #define Byte5 0x80 unsigned char btn[8]={0x01,0x02,0x04,0x08,0x10,0x20,0x40,0x80}; unsigned char btn1[8]={0x01,0x03,0x07,0x0f,0x1f,0x3f,0x7f,0xff}; unsigned char btn2[8]={0x81,0xc3,0xe7,0xff,0xe7,0xc3,0x81,0x00}; void main(void) { initial(); int i; while (1){ //1.发光二极管的循环点亮 for(i=0;i\u003c8;i++) { printfLED(btn[i],Byte5); delaye(); } printfLED(0x00,Byte5); delayed(); //2.流水灯正向流动随后反向流动 for(i=0;i\u003c8;i++) { printfLED(btn1[i],Byte5); delaye(); } for(i=7;i\u003c8\u0026 i\u003e=0;i--){ printfLED(btn1[i],Byte5); delaye(); } //3.流水灯两端逐步点亮，然后从中间向两边逐步熄灭 for(i=0;i\u003c8;i++){ printfLED(btn2[i],Byte5); delaye(); } } } 在使用时请建好一个外设文件专门放Initial.c、Initial.c、Delaye.c，然后在这些问阿金中引用与他们名字一样的.h文件，当然.h文件你自己也要先写好。 附件 ",
    "description": "",
    "tags": "硬件",
    "title": "实验2 IO端口输出实验",
    "uri": "/branch-bundle-1/cc2530_zigbee/experiment2/"
  },
  {
    "breadcrumb": "王梅四郎maloudown \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "标签 :: 硬件",
    "uri": "/tags/%E7%A1%AC%E4%BB%B6/"
  },
  {
    "breadcrumb": "王梅四郎maloudown \u003e 二、网站优化备忘录",
    "content": "代码分制表 以\u003c tabs title=\"file name\" \u003e，\u003c /tabs \u003e结尾； 然后里面写以% tab title=\"code name\" style=\"info\" color=\"blue \" %，% /tab %结尾 他们都需要用{{}}括起来 ​ 代码 {{\u003c tabs title=\"hello.\" \u003e}} //代码块一 {{% tab title=\"py\" %}} ```markdown **这里写代码** ``` {{% /tab %}} //代码块二 {{% tab title=\"sh\" %}} ```markdown **这里写代码** ``` {{% /tab %}} {{\u003c /tabs \u003e}} 附件 在双花括号里写：attachments color=\"fuchsia\" icon=\"fab fa-hackerrank\"，即可，\n{{% attachments color=\"fuchsia\" icon=\"fab fa-hackerrank\" %}}效果如下： 附件 ",
    "description": "",
    "tags": "模版",
    "title": "2.常用模版",
    "uri": "/about_create_web/%E5%B8%B8%E7%94%A8%E6%A8%A1%E7%89%88/"
  },
  {
    "breadcrumb": "王梅四郎maloudown \u003e Categories",
    "content": "",
    "description": "",
    "tags": null,
    "title": "类别 :: B1-备忘录",
    "uri": "/categories/b1-%E5%A4%87%E5%BF%98%E5%BD%95/"
  },
  {
    "breadcrumb": "王梅四郎maloudown \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "标签 :: 模版",
    "uri": "/tags/%E6%A8%A1%E7%89%88/"
  },
  {
    "breadcrumb": "王梅四郎maloudown \u003e 一、博客文章 \u003e 2.AndroidStudio",
    "content": "Toolbar是什么？ 简单理解就是页面的上的菜单栏，或者叫工具栏，在AndroidStudio的页面布局中使用Toolbar，\nmenu文件的创建 在创建menu这个目录前，请看查看res/目录下是否包含该目录，如果没有则创建。 接着在该目录下创建xml文件，此处文件名为content_menu。在该content_menu使用\u003citem,如下为部分代码： .xml文件 简码 全码 \u003citem android:id=\"@+id/content_menu_group_chat\" android:title=\"发起群聊\" android:orderInCategory=\"1\" /\u003e \u003c?xml version=\"1.0\" encoding=\"utf-8\"?\u003e \u003cmenu xmlns:android=\"http://schemas.android.com/apk/res/android\"\u003e \u003citem android:id=\"@+id/content_menu_group_chat\" android:title=\"发起群聊\" android:orderInCategory=\"1\" /\u003e \u003citem android:id=\"@+id/content_menu_add_friend\" android:title=\"添加朋友\" android:orderInCategory=\"2\" /\u003e \u003citem android:id=\"@+id/content_menu_add_RichScan\" android:title=\"扫一扫\" android:orderInCategory=\"3\" /\u003e \u003citem android:id=\"@+id/content_menu_add_QRcode\" android:title=\"扫码\" android:orderInCategory=\"4\" /\u003e \u003c/menu\u003e 在代码中orderInCategory属性是用来控制该item权重的，权重越小等级越高，该标题就会靠前显示， 结果 创建布局页面 详细代码如下： .xml文件 简码 全码 \u003candroidx.appcompat.widget.Toolbar android:id=\"@+id/options_menu_toolbar\" android:layout_width=\"409dp\" android:layout_height=\"wrap_content\" android:background=\"?attr/colorPrimary\" android:minHeight=\"?attr/actionBarSize\" android:theme=\"?attr/actionBarTheme\" app:layout_constraintLeft_toLeftOf=\"parent\" app:layout_constraintRight_toRightOf=\"parent\" app:layout_constraintTop_toTopOf=\"parent\" /\u003e \u003c?xml version=\"1.0\" encoding=\"utf-8\"?\u003e \u003candroidx.constraintlayout.widget.ConstraintLayout xmlns:android=\"http://schemas.android.com/apk/res/android\" xmlns:app=\"http://schemas.android.com/apk/res-auto\" xmlns:tools=\"http://schemas.android.com/tools\" android:layout_width=\"match_parent\" android:layout_height=\"match_parent\"\u003e \u003candroidx.appcompat.widget.Toolbar android:id=\"@+id/options_menu_toolbar\" android:layout_width=\"409dp\" android:layout_height=\"wrap_content\" android:background=\"?attr/colorPrimary\" android:minHeight=\"?attr/actionBarSize\" android:theme=\"?attr/actionBarTheme\" app:layout_constraintLeft_toLeftOf=\"parent\" app:layout_constraintRight_toRightOf=\"parent\" app:layout_constraintTop_toTopOf=\"parent\" /\u003e \u003c/androidx.constraintlayout.widget.ConstraintLayout\u003e Activity.java1文件中 此处创建类的步骤，继承AppCompatActivity方法就不再赘述。\n在onCreate获取Toolbar的id，这个过程也叫实例化； 接着使用方法setSupportActionBar; 在onCreate外重写onCreateOptionsMenu和onOptionsItemSelected方法。 .java文件 onCreate onCreateOptionsMenu onOptionsItemSelected 全码 @SuppressLint(\"MissingInflatedId\") @Override protected void onCreate(@Nullable Bundle savedInstanceState) { super.onCreate(savedInstanceState); setContentView(R.layout.opetions_menu); toolbar = findViewById(R.id.options_menu_toolbar); setSupportActionBar(toolbar); } @Override public boolean onCreateOptionsMenu(Menu menu) { getMenuInflater().inflate(R.menu.content_menu,menu); return super.onCreateOptionsMenu(menu); } @Override public boolean onOptionsItemSelected(@NonNull MenuItem item) { //获取menu目录中content_menu.xml文件里item的id int id = item.getItemId(); //判断id是否被点击，被点击就执行相应的动作，比如页面跳转 if(id == R.id.content_menu_add_friend){ Intent intent = new Intent(OpetionsMenu.this,ListDialogActivity.class); startActivity(intent); }else if(id == R.id.content_menu_group_chat){ return super.onContextItemSelected(item); } return false; } package com.example.practiceapplication; import android.annotation.SuppressLint; import android.content.Intent; import android.os.Bundle; import android.view.Menu; import android.view.MenuItem; import androidx.annotation.NonNull; import androidx.annotation.Nullable; import androidx.appcompat.app.AppCompatActivity; import androidx.appcompat.widget.Toolbar; public class OpetionsMenu extends AppCompatActivity { private Toolbar toolbar; @SuppressLint(\"MissingInflatedId\") @Override protected void onCreate(@Nullable Bundle savedInstanceState) { super.onCreate(savedInstanceState); setContentView(R.layout.opetions_menu); toolbar = findViewById(R.id.options_menu_toolbar); setSupportActionBar(toolbar); } @Override public boolean onCreateOptionsMenu(Menu menu) { getMenuInflater().inflate(R.menu.content_menu,menu); return super.onCreateOptionsMenu(menu); } @Override public boolean onOptionsItemSelected(@NonNull MenuItem item) { int id = item.getItemId(); if(id == R.id.content_menu_add_friend){ Intent intent = new Intent(OpetionsMenu.this,ListDialogActivity.class); startActivity(intent); }else if(id == R.id.content_menu_group_chat){ return super.onContextItemSelected(item); } return false; } } 最终结果 结果 展开 详细知识等我更新…… Activity.java这个文件的一般就是我们所说的主程序，类似与C语言中的包含main入口的文件。 ↩︎\n",
    "description": "",
    "tags": "前端",
    "title": "2-1.Toolbar工具栏",
    "uri": "/branch-bundle-1/androidstudio/toolbar/"
  },
  {
    "breadcrumb": "王梅四郎maloudown \u003e Categories",
    "content": "",
    "description": "",
    "tags": null,
    "title": "类别 :: A1-安卓APP",
    "uri": "/categories/a1-%E5%AE%89%E5%8D%93app/"
  },
  {
    "breadcrumb": "王梅四郎maloudown \u003e Categories",
    "content": "",
    "description": "",
    "tags": null,
    "title": "类别 :: Y1-用户界面设计",
    "uri": "/categories/y1-%E7%94%A8%E6%88%B7%E7%95%8C%E9%9D%A2%E8%AE%BE%E8%AE%A1/"
  },
  {
    "breadcrumb": "王梅四郎maloudown \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "标签 :: 前端",
    "uri": "/tags/%E5%89%8D%E7%AB%AF/"
  },
  {
    "breadcrumb": "王梅四郎maloudown \u003e Categories",
    "content": "",
    "description": "",
    "tags": null,
    "title": "类别 :: 博客",
    "uri": "/categories/%E5%8D%9A%E5%AE%A2/"
  },
  {
    "breadcrumb": "王梅四郎maloudown \u003e Tags",
    "content": "",
    "description": "",
    "tags": null,
    "title": "标签 :: 计算机网络",
    "uri": "/tags/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/"
  },
  {
    "breadcrumb": "王梅四郎maloudown \u003e Categories",
    "content": "",
    "description": "",
    "tags": null,
    "title": "类别 :: 文章",
    "uri": "/categories/%E6%96%87%E7%AB%A0/"
  }
]
