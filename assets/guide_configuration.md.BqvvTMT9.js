import{_ as n,o as a,c as p,ae as e}from"./chunks/framework.D_vkKrCz.js";const _=JSON.parse('{"title":"参数配置指南","description":"","frontmatter":{},"headers":[],"relativePath":"guide/configuration.md","filePath":"guide/configuration.md"}'),l={name:"guide/configuration.md"};function i(c,s,t,o,r,d){return a(),p("div",null,[...s[0]||(s[0]=[e(`<h1 id="参数配置指南" tabindex="-1">参数配置指南 <a class="header-anchor" href="#参数配置指南" aria-label="Permalink to &quot;参数配置指南&quot;">​</a></h1><blockquote><p>未加说明的长度单位都是Angstrom，能量单位是eV</p></blockquote><h2 id="基础参数说明" tabindex="-1">基础参数说明 <a class="header-anchor" href="#基础参数说明" aria-label="Permalink to &quot;基础参数说明&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>SystemName # 体系名称，后面加一个字符串，长度不超过20</span></span>
<span class="line"><span></span></span>
<span class="line"><span>NumberOfSpecies # 体系元素种类，输入整数,范围[1,10]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>NumberOfElements # 每种元素对应的原子个数，输入NumberOfSpecies个，整数，范围[1,100]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>NameOfElements # 每种元素对应的元素名称，输入NumberOfSpecies个，字符串，长度不超过2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Volumn # 初始原胞体积(大概估一下)，浮点数，以后每代会自动更新</span></span>
<span class="line"><span></span></span>
<span class="line"><span>DistanceOfAtom # 下面跟着NumberOfSpecies行，每行有NumberOfSpecies个数(浮点型)，输入</span></span>
<span class="line"><span>## 元素间的最小距离，每种元素与其他元素间的距离用一个向量DIS1, DIS2表示</span></span>
<span class="line"><span>DistanceOfAtom=</span></span>
<span class="line"><span>## Matrix Element1 Element2</span></span>
<span class="line"><span>DIS1 = 1.6 1.8 ## Element1 ## 交叉点为第i个和第j个元素之间的最小距离</span></span>
<span class="line"><span>DIS2 = 1.8 1.2 ## Element2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Population # 种群数，即每代产生的结构数，整数，范围[4, 500]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>MaxStep # 最大代数，即程序总共跑几代，整数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>De_ratio # 每代有多少比例的结构直接由DE产生，其余随机产生，浮点数，范围(0,1)</span></span>
<span class="line"><span>## 要满足De_ratio*Population&gt;4，否则无法进行DE的操作(DE算法本身限制)</span></span>
<span class="line"><span>## 如果想要每代都random，不用DE，可以使De_ratio*Population=0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>SelectiveDynamics # 只动一部分的原子(仅在有输入文件struct.in的情况下有效，bool, default = F</span></span>
<span class="line"><span>## 在T时，struct.in文件的写法有所变化，在原子坐标后面加上T/F, T表示由vasp进行位置优化，F表示固定(见程序包里的struct.in_selective_dynamics)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Symmetry # 是否加上空间群优化，bool, default = T(仅在产生块体结构时有效)</span></span>
<span class="line"><span>spg_front # 起始空间群号，default=1</span></span>
<span class="line"><span>spg_rear # 终止空间群号，default=230，这两个数限定产生结构选取的空间群范围</span></span>
<span class="line"><span>## 1-2   三斜</span></span>
<span class="line"><span>## 3-15  单斜</span></span>
<span class="line"><span>## 16-74 正交</span></span>
<span class="line"><span>## 75-142 四方</span></span>
<span class="line"><span>## 143-167 三角</span></span>
<span class="line"><span>## 168-194 六角</span></span>
<span class="line"><span>## 195-230 立方</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Pickup # 是否从某一代继续计算, bool</span></span>
<span class="line"><span>## 注：在results文件夹里一定要有de_opt_*. 比如从第5代开始跑，把Pickup_step设成5, 准备好results/de_opt_5文件</span></span>
<span class="line"><span>Pickup_step # 继续计算的代数，整数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Mystruct # 输入自己认为比较好的结构的个数，整数</span></span>
<span class="line"><span>## 结构文件放在mystruct1, mystruct2, 其中原子种类顺序、要和de.in的一致</span></span>
<span class="line"><span>## 如果遇到有衬底的情况，先写衬底原子，再写全局优化的原子</span></span></code></pre></div><h2 id="多目标优化参数" tabindex="-1">多目标优化参数 <a class="header-anchor" href="#多目标优化参数" aria-label="Permalink to &quot;多目标优化参数&quot;">​</a></h2><p>在晶体结构搜索的基础上加下面标签，目前支持<code>free energy &amp; hardness</code> 同时优化和 <code>free energy &amp; bandgap</code> 同时优化：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Multi-Objective # 多目标，bool</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Hardness # (计算方法用的PRB32,7988 &amp;&amp; Mat. Sci. &amp; Eng. A209 1996 1-4)是否最大化bulk modulus, bool，需同时加rcut和ionicity</span></span>
<span class="line"><span>Rcut # max bond length，取一个第一近邻和第二近邻间的数)，浮点数</span></span>
<span class="line"><span>Iconicity # 根据元素不同来取，详细参考Cohen的文章(PRB41,10727)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ESflag # 是否考虑bandgap，bool，需要写Matrix_elements,来判断哪里有跃迁</span></span>
<span class="line"><span>Es_mod # bandgap的优化方式，整数，范围[1,6]</span></span>
<span class="line"><span>## 1: maximal bandgap</span></span>
<span class="line"><span>## 2: minimal bandgap</span></span>
<span class="line"><span>## 3: a target bandgap</span></span>
<span class="line"><span>## 4: only direct gap, largest</span></span>
<span class="line"><span>## 5: only direct gap, largest (recommended)</span></span>
<span class="line"><span>## 6: a target direct gap</span></span>
<span class="line"><span>ES_Eg # 目标gap，浮点数，当Es_mod=3/6时需要设置</span></span>
<span class="line"><span>ES_opt # 在es_mod=3/6时，用于处理直接带隙是否有跃迁的情况，当且仅当vasp写 Matrix_elements 的时候有效，需要直接带隙跃迁把ES_opt的值设的和ES_Eg一样，其余的在ES_opt以下有跃迁的都可以</span></span>
<span class="line"><span></span></span>
<span class="line"><span>HSE # 在band gap运算中加入HSE，bool，需增加 run_pvasp_HSE.sh 投递HSE的任务</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 第一步跑静态的LDA，算能量值。要在LDA跑完后把这步跑的 OUTCACR 拷成 OUTCAR.old 读取能量。</span></span>
<span class="line"><span>## Population设成LDA_population，另外增加以下参数：</span></span>
<span class="line"><span>HSE_population # 每一代优化完后用来做HSE计算的结构数</span></span>
<span class="line"><span>LDA_population # 用LDA来做全局优化的结构数，与population含义相同</span></span>
<span class="line"><span>energy_cut # 能量截断，在每次LDA计算后只有能量低于energy_cut的结构进行HSE计算</span></span>
<span class="line"><span>gap_cut # 第二个目标函数的截断</span></span>
<span class="line"><span>LDA_ES_Eg # 同上面ES_Eg的定义，针对LDA计算所得gap值</span></span>
<span class="line"><span>LDA_Es_opt # 同上面ES_opt的定义，针对LDA计算所得gap值</span></span>
<span class="line"><span>HSE_ES_Eg # 同上面ES_Eg的定义，针对HSE计算所得gap值</span></span>
<span class="line"><span>HSE_Es_opt # 同上面ES_opt的定义，针对HSE计算所得gap值</span></span></code></pre></div><h2 id="准二维材料参数" tabindex="-1">准二维材料参数 <a class="header-anchor" href="#准二维材料参数" aria-label="Permalink to &quot;准二维材料参数&quot;">​</a></h2><p>在晶体结构搜索的基础上加上以下标签：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Q2D # 准二维, bool</span></span>
<span class="line"><span>vacuum_layer # 真空层，浮点数，需要先测试(通常在10左右，这里产生的结构真空层沿c方向)</span></span>
<span class="line"><span>Area # 准二维材料原胞在二维平面内投影的面积，浮点数</span></span>
<span class="line"><span>Layer_hight # 准二维材料的原子层厚度，浮点数</span></span></code></pre></div><h2 id="团簇-衬底-缺陷-表面-晶界参数" tabindex="-1">团簇/衬底/缺陷/表面/晶界参数 <a class="header-anchor" href="#团簇-衬底-缺陷-表面-晶界参数" aria-label="Permalink to &quot;团簇/衬底/缺陷/表面/晶界参数&quot;">​</a></h2><p>包括简单的cluster搜索和cluster+substrate的搜索，<strong>一定要打开fix_lat标签</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>cluster # 搜索cluster标签，bool</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## cluster下面有3种模式，分别是ball, shell,和plate。这3种模式用于产生不同构型的cluster。定义如下：</span></span>
<span class="line"><span>model_ball # 产生球形cluster的比例，(0,1)</span></span>
<span class="line"><span>model_shell # 产生笼状cluster的比例，(0,1)</span></span>
<span class="line"><span>model_plate # 产生盘状cluster的比例，(0,1)，上述三个加起来总和为1，如：</span></span>
<span class="line"><span>## model_ball=0.8</span></span>
<span class="line"><span>## model_shell=0.1</span></span>
<span class="line"><span>## model_plate=0.1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## model_boll有参数如下：</span></span>
<span class="line"><span>init_radius # 初始的cluster半径，浮点数(这里给个大概就行)</span></span>
<span class="line"><span>cluster_ctr_x # cluster的中心坐标(direct)</span></span>
<span class="line"><span>cluster_ctr_y</span></span>
<span class="line"><span>cluster_ctr_z</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## model_shell有参数如下：</span></span>
<span class="line"><span>shell_radius_out # 笼状cluster外半径</span></span>
<span class="line"><span>shell_radius_in # 笼状cluster内半径</span></span>
<span class="line"><span>shell_ctr_x # 笼状cluster的中心坐标(direct)</span></span>
<span class="line"><span>shell_ctr_y</span></span>
<span class="line"><span>shell_ctr_z</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## model_plate有参数如下：</span></span>
<span class="line"><span>plate_radius # 盘状cluster半径</span></span>
<span class="line"><span>plate_height # 盘状cluster厚度</span></span>
<span class="line"><span>plate_ctr_x # 盘状cluster的中心坐标(direct)</span></span>
<span class="line"><span>plate_ctr_y</span></span>
<span class="line"><span>plate_ctr_z</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cluster_substrate # 是否加衬底标签，bool，需增加一个输入文件struct.in，里面是衬底的原子坐标</span></span>
<span class="line"><span>## 元素顺序和SubstrateElements对应，体系中NumberOfElements是衬底原子总数+cluster原子总数</span></span>
<span class="line"><span>SubstrateElements # 衬底中每种元素对应的原子数，形式和顺序上都和NumberOfElements的写法一致</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fix_lat # 标签，bool</span></span>
<span class="line"><span>fix_a</span></span>
<span class="line"><span>fix_b</span></span>
<span class="line"><span>fix_c</span></span>
<span class="line"><span>fix_alpha</span></span>
<span class="line"><span>fix_beta</span></span>
<span class="line"><span>fix_gama # 以上都是浮点数，alpha, beta, gama用(0,180)间的数表示</span></span>
<span class="line"><span></span></span>
<span class="line"><span>注：在Q2D情况下打开fix_lat标签，fix_c表示原子层厚度而不是晶格常数</span></span>
<span class="line"><span></span></span>
<span class="line"><span>find_defect # 标签，bool</span></span>
<span class="line"><span>## 在晶体中产生defect的形式与cluster+substrate一样，之后的参数详细设置见cluster，用到的参数有：</span></span>
<span class="line"><span>cluster=T # (fixed)</span></span>
<span class="line"><span>model_ball=1.0 # (fixed)</span></span>
<span class="line"><span>init_radius # (自行设置，defect原子限定半径)</span></span>
<span class="line"><span>cluster_ctr_x # (自行设置，defect中心坐标)</span></span>
<span class="line"><span>cluster_ctr_y # (同上)</span></span>
<span class="line"><span>cluster_ctr_z # (同上)</span></span>
<span class="line"><span>cluster_substrate=T</span></span>
<span class="line"><span>SubstrateElements # (defect中固定的原子个数，由struct.in文件读入)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>因为該模块是在cluster_substrate上改的，所以要加上部分cluster_substrate的 tag：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>注：下面原子层的原子坐标在struct.in文件里写</span></span>
<span class="line"><span>强烈建议用SelectiveDynamics，struct.in里面原子层远离全局优化层设F，靠近的两层用T</span></span>
<span class="line"><span></span></span>
<span class="line"><span>model_surface # 标签，bool</span></span>
<span class="line"><span>surface_height # 表面全局优化洒原子层的厚度(不是整个slab的厚度)，浮点数，单位：Astron</span></span>
<span class="line"><span>cluster=T</span></span>
<span class="line"><span>cluster_substrate=T</span></span>
<span class="line"><span>SubstrateElements # (下层的原子个数，由struct.in文件读入)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>注：用真空层模型,上下原子层坐标写在struct.in文件里</span></span>
<span class="line"><span></span></span>
<span class="line"><span>model_gb # 标签，bool</span></span>
<span class="line"><span>bottom_height # 底层衬底的厚度(从零点开始计算)</span></span>
<span class="line"><span>gb_height # 全局优化的洒原子层的厚度(程序会自动优化)</span></span>
<span class="line"><span>top_height # 顶层原子层厚度(从0,0,1点开始计算)</span></span>
<span class="line"><span>transverse_a # 顶层原子平移x方向单位晶格的自由度，范围[0,1]</span></span>
<span class="line"><span>transverse_b # 顶层原子平移y方向单位晶格的自由度，范围[0,1]</span></span></code></pre></div><h2 id="配置示例" tabindex="-1">配置示例 <a class="header-anchor" href="#配置示例" aria-label="Permalink to &quot;配置示例&quot;">​</a></h2><h3 id="tio2多目标带隙优化" tabindex="-1">TiO₂多目标带隙优化 <a class="header-anchor" href="#tio2多目标带隙优化" aria-label="Permalink to &quot;TiO₂多目标带隙优化&quot;">​</a></h3><blockquote><p>目标带隙0.8eV，半导体材料设计</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># input file for de</span></span>
<span class="line"><span># search for TiO2, muti-objective, objective bandgap = 0.8</span></span>
<span class="line"><span>SystemName=TiO</span></span>
<span class="line"><span>NumberOfSpecies=2</span></span>
<span class="line"><span>NumberOfElements=4 8</span></span>
<span class="line"><span>NameOfElements=Ti O</span></span>
<span class="line"><span>Volumn=132</span></span>
<span class="line"><span>DistanceOfAtom=</span></span>
<span class="line"><span>DIS1=1.6 1.2</span></span>
<span class="line"><span>DIS2=1.2 1.0</span></span>
<span class="line"><span>Population=30</span></span>
<span class="line"><span>MaxStep=20</span></span>
<span class="line"><span>De_ratio=0.6</span></span>
<span class="line"><span>Symmetry=T</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Multi-Objective=T</span></span>
<span class="line"><span>hardness=F</span></span>
<span class="line"><span># rcut=2.5</span></span>
<span class="line"><span># ionicity=0.0</span></span>
<span class="line"><span>ESflag=T</span></span>
<span class="line"><span>ES_mod=6</span></span>
<span class="line"><span>ES_Eg=0.8</span></span>
<span class="line"><span>ES_opt=1.5</span></span></code></pre></div><h3 id="fese准二维材料搜索" tabindex="-1">FeSe准二维材料搜索 <a class="header-anchor" href="#fese准二维材料搜索" aria-label="Permalink to &quot;FeSe准二维材料搜索&quot;">​</a></h3><blockquote><p>二维铁基超导体材料设计</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># input file for de</span></span>
<span class="line"><span>SystemName=Fe Se</span></span>
<span class="line"><span>NumberOfSpecies=2</span></span>
<span class="line"><span>NumberOfElements=4 4</span></span>
<span class="line"><span>NameOfElements=Fe Se</span></span>
<span class="line"><span>Volumn=160</span></span>
<span class="line"><span>DistanceOfAtom=</span></span>
<span class="line"><span>DIS1=2.2 1.5</span></span>
<span class="line"><span>DIS2=1.5 2.2</span></span>
<span class="line"><span>Population=8</span></span>
<span class="line"><span>MaxStep=1</span></span>
<span class="line"><span>De_ratio=0.6</span></span>
<span class="line"><span>Symmetry=T</span></span>
<span class="line"><span># spg_front=168</span></span>
<span class="line"><span># spg_rear=194</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Q2D=T</span></span>
<span class="line"><span>vacuum_layer=10</span></span>
<span class="line"><span>Area=70.15</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fix_lat=T</span></span>
<span class="line"><span>fix_a=7.8</span></span>
<span class="line"><span>fix_b=7.8</span></span>
<span class="line"><span>fix_c=0.8</span></span>
<span class="line"><span>fix_alpha=120</span></span>
<span class="line"><span>fix_beta=90</span></span>
<span class="line"><span>fix_gama=90</span></span></code></pre></div><h3 id="pdau团簇搜索" tabindex="-1">PdAu团簇搜索 <a class="header-anchor" href="#pdau团簇搜索" aria-label="Permalink to &quot;PdAu团簇搜索&quot;">​</a></h3><blockquote><p>零维团簇结构设计</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>SystemName=PdAu</span></span>
<span class="line"><span>NumberOfSpecies=2</span></span>
<span class="line"><span>NumberOfElements=4 1</span></span>
<span class="line"><span>NameOfElements=Pd Au</span></span>
<span class="line"><span>Volumn=3375</span></span>
<span class="line"><span>DistanceOfAtom=</span></span>
<span class="line"><span>DIS1=1.5 1.5</span></span>
<span class="line"><span>DIS2=1.5 1.5</span></span>
<span class="line"><span>Population=15</span></span>
<span class="line"><span>MaxStep=10</span></span>
<span class="line"><span>De_ratio=0.6</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cluster=T</span></span>
<span class="line"><span>init_radius=3</span></span>
<span class="line"><span>cluster_ctr_x=0.5</span></span>
<span class="line"><span>cluster_ctr_y=0.5</span></span>
<span class="line"><span>cluster_ctr_z=0.5</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fix_lat=T</span></span>
<span class="line"><span>fix_a=15.0</span></span>
<span class="line"><span>fix_b=15.0</span></span>
<span class="line"><span>fix_c=15.0</span></span>
<span class="line"><span>fix_alpha=90</span></span>
<span class="line"><span>fix_beta=90</span></span>
<span class="line"><span>fix_gama=90</span></span></code></pre></div><h3 id="tio2表面结构搜索" tabindex="-1">TiO₂表面结构搜索 <a class="header-anchor" href="#tio2表面结构搜索" aria-label="Permalink to &quot;TiO₂表面结构搜索&quot;">​</a></h3><blockquote><p>表面/界面结构设计</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>SystemName=TiO</span></span>
<span class="line"><span>NumberOfSpecies=2</span></span>
<span class="line"><span>NumberOfElements=16 32</span></span>
<span class="line"><span>NameOfElements=Ti O</span></span>
<span class="line"><span>Volumn=954.87</span></span>
<span class="line"><span>DistanceOfAtom=</span></span>
<span class="line"><span>DIS1=2.2 1.8</span></span>
<span class="line"><span>DIS2=1.8 1.2</span></span>
<span class="line"><span>Population=30</span></span>
<span class="line"><span>MaxStep=20</span></span>
<span class="line"><span>De_ratio=0.6</span></span>
<span class="line"><span>SelectiveDynamics=T</span></span>
<span class="line"><span>Pickup=F</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cluster=T</span></span>
<span class="line"><span>cluster_substrate=T</span></span>
<span class="line"><span>SubstrateElements=12 24</span></span>
<span class="line"><span></span></span>
<span class="line"><span>model_surface=T</span></span>
<span class="line"><span>surface_height=3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fix_lat=T</span></span>
<span class="line"><span>fix_a=10.2913</span></span>
<span class="line"><span>fix_b=3.8015</span></span>
<span class="line"><span>fix_c=24.4223</span></span>
<span class="line"><span>fix_alpha=90</span></span>
<span class="line"><span>fix_beta=90</span></span>
<span class="line"><span>fix_gama=90</span></span></code></pre></div><h3 id="晶界结构搜索" tabindex="-1">晶界结构搜索 <a class="header-anchor" href="#晶界结构搜索" aria-label="Permalink to &quot;晶界结构搜索&quot;">​</a></h3><blockquote><p>晶界/缺陷结构设计</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>SystemName=STOSi</span></span>
<span class="line"><span>NumberOfSpecies=5</span></span>
<span class="line"><span>NumberOfElements=28 8 10 28 8</span></span>
<span class="line"><span>NameOfElements=Si Sr Ti O H</span></span>
<span class="line"><span>Volumn=1983.885</span></span>
<span class="line"><span>DistanceOfAtom=</span></span>
<span class="line"><span>DIS1=1.0 1.5 1.5 1.0 1.0</span></span>
<span class="line"><span>DIS2=1.5 2.0 2.0 1.5 1.0</span></span>
<span class="line"><span>DIS3=1.0 2.0 2.0 1.5 1.0</span></span>
<span class="line"><span>DIS4=1.0 1.5 1.5 1.5 1.0</span></span>
<span class="line"><span>DIS5=1.0 1.0 1.0 1.0 1.0</span></span>
<span class="line"><span>Population=30</span></span>
<span class="line"><span>MaxStep=30</span></span>
<span class="line"><span>De_ratio=0.6</span></span>
<span class="line"><span>SelectiveDynamics=T</span></span>
<span class="line"><span>cluster_substrate=T</span></span>
<span class="line"><span>SubstrateElements=28 8 8 24 8</span></span>
<span class="line"><span></span></span>
<span class="line"><span># for grain boundary generation</span></span>
<span class="line"><span>model_gb=T</span></span>
<span class="line"><span># the following three are cartisian coordinations</span></span>
<span class="line"><span>bottom_height=14.964</span></span>
<span class="line"><span>gb_height=4.084</span></span>
<span class="line"><span>top_height=14.102</span></span>
<span class="line"><span># transverse freedom for the top layer (direct)</span></span>
<span class="line"><span>transverse_a=1.0</span></span>
<span class="line"><span>transverse_b=1.0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fix_lat=T</span></span>
<span class="line"><span>fix_a=7.736</span></span>
<span class="line"><span>fix_b=7.736</span></span>
<span class="line"><span>fix_c=35.15</span></span>
<span class="line"><span>fix_alpha=90</span></span>
<span class="line"><span>fix_beta=90</span></span>
<span class="line"><span>fix_gama=90</span></span></code></pre></div><h2 id="程序运行说明" tabindex="-1">程序运行说明 <a class="header-anchor" href="#程序运行说明" aria-label="Permalink to &quot;程序运行说明&quot;">​</a></h2><p>现在发布的程序包都是<code>DE-package_日期.tar.gz</code>，最新的稳定版本是<code>DE-package-20140627.tar.gz</code> 使用<code>tar -xzvf DE-package_日期.tar.gz</code>解压，装有gfortran的机器都能编译，<code>make</code>一下就行了</p><p>用<code>de.pbs</code>把<code>de.x</code>投到机器上去跑，然后<code>de.x</code>会调用<code>run_pvasp.sh</code>，这个脚本是把所有的<code>POSCAR*</code>用<code>vasp.pbs</code>投机器上并检测有没有跑完。 一般对于不同的机器改一下这几个脚本就行了。</p><p>运行后每一步的结果都在<code>results</code>文件夹里：</p><ul><li><code>de_ini_*</code> 是每一代初始化的结构</li><li><code>de_opt_*</code> 是优化好的结构，每个结构文件前面是能量(eV/atom)，如果用muti-objective，前面多加一个fitness的值</li></ul><p>主程序跑完后把<code>tools</code>文件夹下的<code>outPOSCAR.cpp</code>和<code>input.dat</code>拷到<code>results</code>文件夹下：</p><ul><li><code>input.dat</code>里第一行的那个数是个标签，跑一般的de用<code>1</code>, mode用<code>2</code></li><li>在标签=1的情况下，第二行设一个实数，表示energy/atom低于那个数的结构全部取出来</li><li>在标签=2的情况下，第二行设两个实数，第一个同上，第二个是mode的另一个目标函数的最大值</li><li>第三行的两个数<code>a,b</code>表示处理第a-b代运行的结果，一般设a=1, b和de.in里面的一致</li></ul><p>运行后<code>out.dat</code>里是所有结构能量(multi-objective情况是按frontier)的排序，输出<code>POSCAR*</code>是符合input.dat中设定条件的结构</p><blockquote><p>🔗 更多使用案例见 <a href="/im2ode.github.io/cases.html">应用案例库</a></p></blockquote>`,38)])])}const m=n(l,[["render",i]]);export{_ as __pageData,m as default};
