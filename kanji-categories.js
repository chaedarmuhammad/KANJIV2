/**
 * Kanji Categories - Dual Tag System
 * 
 * KATEGORI TEMATIK (Topik):
 * 1. alam        - Alam & Geografi
 * 2. angka       - Angka & Hitungan
 * 3. tubuh       - Tubuh & Kesehatan
 * 4. waktu       - Waktu & Kalender
 * 5. arah        - Arah & Posisi
 * 6. orang       - Orang & Keluarga
 * 7. makanan     - Makanan & Minuman
 * 8. aktivitas   - Aktivitas & Gerakan
 * 9. pendidikan  - Pendidikan & Bahasa
 * 10. tempat     - Transportasi & Tempat
 * 11. sifat      - Sifat & Keadaan
 * 12. cuaca      - Cuaca & Musim
 * 13. warna      - Warna
 * 14. kerja      - Pekerjaan & Ekonomi
 * 15. hiburan    - Hiburan & Media
 * 16. abstrak    - Kata Abstrak & Umum
 *
 * JENIS KATA (Tata Bahasa):
 * 1. doushi      - 動詞 (Kata Kerja)
 * 2. i_keiyoushi - い形容詞 (Kata Sifat-i)
 * 3. na_keiyoushi- な形容詞 (Kata Sifat-na)
 * 4. meishi      - 名詞 (Kata Benda)
 * 5. fukushi     - 副詞 (Kata Keterangan)
 */


const THEMATIC_CATEGORIES = {
  alam: { label: "Alam & Geografi", icon: "🌿" },
  angka: { label: "Angka & Hitungan", icon: "🔢" },
  tubuh: { label: "Tubuh & Kesehatan", icon: "🫀" },
  waktu: { label: "Waktu & Kalender", icon: "🕐" },
  arah: { label: "Arah & Posisi", icon: "🧭" },
  orang: { label: "Orang & Keluarga", icon: "👥" },
  makanan: { label: "Makanan & Minuman", icon: "🍵" },
  aktivitas: { label: "Aktivitas & Gerakan", icon: "🏃" },
  pendidikan: { label: "Pendidikan & Bahasa", icon: "📚" },
  tempat: { label: "Transportasi & Tempat", icon: "🏘️" },
  sifat: { label: "Sifat & Keadaan", icon: "📐" },
  cuaca: { label: "Cuaca & Musim", icon: "🌤️" },
  warna: { label: "Warna", icon: "🎨" },
  kerja: { label: "Pekerjaan & Ekonomi", icon: "💼" },
  hiburan: { label: "Hiburan & Media", icon: "🎬" },
  abstrak: { label: "Kata Abstrak & Umum", icon: "💭" }
};

const WORD_TYPE_CATEGORIES = {
  doushi: { label: "動詞 (Kata Kerja)", icon: "⚡" },
  i_keiyoushi: { label: "い形容詞 (Sifat-i)", icon: "🔵" },
  na_keiyoushi: { label: "な形容詞 (Sifat-na)", icon: "🟢" },
  meishi: { label: "名詞 (Kata Benda)", icon: "📦" },
  fukushi: { label: "副詞 (Keterangan)", icon: "〰️" }
};


// Mapping: kanji ID → kategori tematik
const THEMATIC_MAP = {
  // Alam & Geografi (山, 川, 火, 水, 木, 土, 林, 森, 海, 池, 田, 花, 地)
  1:"alam", 2:"alam", 3:"alam", 4:"alam", 5:"alam",
  6:"alam", 7:"alam", 9:"alam", 12:"alam",
  13:"alam", 20:"alam", 22:"alam",
  143:"alam", 144:"alam", 145:"alam",
  155:"alam", 156:"alam", 190:"alam",
  283:"alam", 284:"alam",
  575:"alam", 576:"alam", 577:"alam", 578:"alam", 579:"alam",
  650:"alam", 651:"alam", 652:"alam", 653:"alam",

  // Angka & Hitungan
  24:"angka", 25:"angka", 26:"angka", 27:"angka", 28:"angka",
  29:"angka", 30:"angka", 31:"angka", 32:"angka", 33:"angka",
  34:"angka", 35:"angka", 36:"angka", 37:"angka", 38:"angka",
  39:"angka", 40:"angka", 41:"angka", 42:"angka", 43:"angka",
  44:"angka", 88:"angka", 89:"angka",
  556:"angka", 557:"angka",


  // Tubuh & Kesehatan (口, 目, 耳, 手, 足, 首, 指, 背, 腹, 体, 頭, 顔, 病, 痛, 薬, 医)
  45:"tubuh", 46:"tubuh", 47:"tubuh", 48:"tubuh", 49:"tubuh",
  50:"tubuh", 51:"tubuh", 52:"tubuh", 53:"tubuh", 54:"tubuh",
  55:"tubuh", 146:"tubuh", 147:"tubuh", 148:"tubuh", 149:"tubuh",
  188:"tubuh", 189:"tubuh", 194:"tubuh", 195:"tubuh",
  205:"tubuh", 206:"tubuh", 207:"tubuh", 208:"tubuh",
  241:"tubuh", 242:"tubuh", 243:"tubuh", 244:"tubuh", 245:"tubuh",
  313:"tubuh", 314:"tubuh", 315:"tubuh",
  440:"tubuh", 441:"tubuh", 442:"tubuh",
  520:"tubuh", 521:"tubuh", 522:"tubuh",
  614:"tubuh", 615:"tubuh", 616:"tubuh",
  231:"tubuh",

  // Waktu & Kalender (月, 日, 年, 朝, 昼, 夜, 今, 毎, 時, 午, 晩, 曜日)
  8:"waktu", 11:"waktu", 14:"waktu", 18:"waktu", 23:"waktu",
  56:"waktu", 57:"waktu", 93:"waktu", 94:"waktu",
  196:"waktu", 197:"waktu", 198:"waktu", 199:"waktu",
  200:"waktu", 201:"waktu",
  232:"waktu", 233:"waktu", 234:"waktu", 235:"waktu",
  236:"waktu", 237:"waktu", 239:"waktu",
  318:"waktu", 320:"waktu",
  366:"waktu", 367:"waktu", 368:"waktu", 369:"waktu",
  370:"waktu", 371:"waktu", 372:"waktu", 373:"waktu",
  482:"waktu", 483:"waktu", 484:"waktu", 485:"waktu", 486:"waktu",
  490:"waktu", 491:"waktu", 492:"waktu", 493:"waktu",
  497:"waktu", 498:"waktu",


  // Arah & Posisi (上, 下, 左, 右, 中, 前, 東, 西, 南, 北, 内, 外, 近, 遠)
  58:"arah", 59:"arah", 60:"arah", 61:"arah", 62:"arah",
  63:"arah", 64:"arah", 65:"arah", 66:"arah",
  67:"arah", 68:"arah", 69:"arah", 70:"arah",
  162:"arah", 163:"arah", 164:"arah", 165:"arah",
  166:"arah", 167:"arah", 168:"arah",
  169:"arah", 170:"arah", 171:"arah", 172:"arah",
  173:"arah", 175:"arah", 176:"arah", 177:"arah",
  246:"arah", 247:"arah",
  298:"arah", 299:"arah", 300:"arah", 301:"arah",
  541:"arah", 542:"arah", 543:"arah",
  660:"arah", 661:"arah", 662:"arah",

  // Orang & Keluarga (人, 私, 兄, 弟, 姉, 妹, 妻, 男, 女, 若)
  85:"orang", 86:"orang", 87:"orang",
  191:"orang", 192:"orang", 193:"orang",
  248:"orang", 249:"orang", 250:"orang", 251:"orang",
  309:"orang", 310:"orang", 311:"orang", 312:"orang",
  335:"orang",
  589:"orang", 590:"orang", 591:"orang", 592:"orang", 593:"orang",
  72:"orang",


  // Makanan & Minuman (飲, 食, 飯, 茶, 米, 料理, 野菜)
  113:"makanan", 114:"makanan",
  115:"makanan", 116:"makanan", 117:"makanan",
  118:"makanan", 119:"makanan", 120:"makanan",
  252:"makanan", 413:"makanan",
  503:"makanan", 504:"makanan",
  509:"makanan", 510:"makanan",
  536:"makanan",
  639:"makanan",
  663:"makanan", 664:"makanan", 665:"makanan",

  // Aktivitas & Gerakan (行, 来, 出, 入, 歩, 走, 乗, 降, 通, 帰, 返, 送, 運, 散歩, 動)
  106:"aktivitas", 107:"aktivitas",
  108:"aktivitas", 109:"aktivitas", 110:"aktivitas", 111:"aktivitas", 112:"aktivitas",
  270:"aktivitas", 271:"aktivitas",
  276:"aktivitas", 277:"aktivitas", 278:"aktivitas",
  279:"aktivitas", 280:"aktivitas", 281:"aktivitas", 282:"aktivitas",
  293:"aktivitas", 294:"aktivitas",
  350:"aktivitas", 351:"aktivitas",
  384:"aktivitas", 385:"aktivitas", 386:"aktivitas", 387:"aktivitas",
  388:"aktivitas", 389:"aktivitas",
  395:"aktivitas", 396:"aktivitas",
  419:"aktivitas", 420:"aktivitas", 421:"aktivitas",
  428:"aktivitas", 429:"aktivitas", 430:"aktivitas", 431:"aktivitas",
  565:"aktivitas", 566:"aktivitas", 567:"aktivitas",
  586:"aktivitas", 587:"aktivitas", 588:"aktivitas",
  602:"aktivitas", 603:"aktivitas", 604:"aktivitas",
  605:"aktivitas", 606:"aktivitas", 607:"aktivitas",
  657:"aktivitas", 658:"aktivitas", 659:"aktivitas",


  // Pendidikan & Bahasa (学, 教, 勉, 試, 校, 字, 文, 問, 読, 書, 話, 句, 単語, 言, 英)
  121:"pendidikan", 122:"pendidikan", 123:"pendidikan",
  124:"pendidikan", 125:"pendidikan", 126:"pendidikan", 127:"pendidikan",
  128:"pendidikan", 129:"pendidikan",
  132:"pendidikan", 133:"pendidikan", 134:"pendidikan",
  135:"pendidikan", 136:"pendidikan", 137:"pendidikan",
  150:"pendidikan", 151:"pendidikan", 152:"pendidikan",
  153:"pendidikan", 154:"pendidikan",
  307:"pendidikan", 308:"pendidikan",
  302:"pendidikan", 303:"pendidikan", 304:"pendidikan",
  374:"pendidikan", 375:"pendidikan",
  398:"pendidikan",
  401:"pendidikan", 402:"pendidikan", 403:"pendidikan",
  404:"pendidikan", 405:"pendidikan", 406:"pendidikan", 407:"pendidikan",
  408:"pendidikan", 409:"pendidikan",
  432:"pendidikan", 433:"pendidikan",
  434:"pendidikan", 435:"pendidikan",
  470:"pendidikan", 471:"pendidikan",
  487:"pendidikan", 488:"pendidikan", 489:"pendidikan",
  506:"pendidikan",
  598:"pendidikan", 599:"pendidikan",
  641:"pendidikan", 642:"pendidikan", 643:"pendidikan",
  644:"pendidikan", 645:"pendidikan", 646:"pendidikan",
  666:"pendidikan", 667:"pendidikan",
  671:"pendidikan", 672:"pendidikan",


  // Transportasi & Tempat (車, 駅, 道, 店, 家, 所, 市, 町, 村, 宿, 住)
  130:"tempat", 131:"tempat",
  157:"tempat", 158:"tempat",
  209:"tempat", 210:"tempat",
  211:"tempat", 212:"tempat", 213:"tempat", 214:"tempat", 215:"tempat",
  255:"tempat", 256:"tempat", 257:"tempat", 258:"tempat",
  259:"tempat", 260:"tempat", 261:"tempat",
  297:"tempat",
  330:"tempat", 331:"tempat",
  415:"tempat", 416:"tempat", 417:"tempat", 418:"tempat",
  456:"tempat", 458:"tempat", 459:"tempat",
  505:"tempat",
  513:"tempat", 514:"tempat", 515:"tempat",
  568:"tempat", 569:"tempat", 570:"tempat", 571:"tempat",
  572:"tempat", 573:"tempat", 574:"tempat",
  226:"tempat",
  439:"tempat", 676:"tempat",
  681:"tempat", 682:"tempat", 683:"tempat",

  // Sifat & Keadaan (大, 小, 高, 低, 長, 多, 少, 古, 新, 広, 軽, 重, 早)
  71:"sifat", 73:"sifat", 74:"sifat", 75:"sifat", 76:"sifat",
  78:"sifat", 82:"sifat", 83:"sifat", 84:"sifat",
  285:"sifat", 286:"sifat", 287:"sifat",
  334:"sifat", 336:"sifat",
  363:"sifat", 364:"sifat", 365:"sifat",
  377:"sifat", 378:"sifat", 379:"sifat",
  443:"sifat", 444:"sifat",
  448:"sifat", 449:"sifat",
  451:"sifat", 452:"sifat",
  526:"sifat", 527:"sifat", 528:"sifat",
  547:"sifat", 548:"sifat",
  621:"sifat", 622:"sifat",
  625:"sifat", 626:"sifat", 627:"sifat", 628:"sifat",


  // Cuaca & Musim (天, 風, 雪, 曇, 寒, 暑, 暖, 温, 冷, 春, 夏, 冬, 季, 空)
  202:"cuaca", 203:"cuaca", 204:"cuaca",
  219:"cuaca", 220:"cuaca", 221:"cuaca", 222:"cuaca",
  223:"cuaca", 224:"cuaca", 225:"cuaca",
  227:"cuaca", 228:"cuaca", 229:"cuaca", 230:"cuaca",
  266:"cuaca", 267:"cuaca",
  461:"cuaca", 462:"cuaca", 463:"cuaca",
  474:"cuaca", 475:"cuaca", 476:"cuaca", 477:"cuaca",
  523:"cuaca", 524:"cuaca", 525:"cuaca",
  549:"cuaca",
  600:"cuaca", 601:"cuaca",
  629:"cuaca", 630:"cuaca", 631:"cuaca", 632:"cuaca", 633:"cuaca",
  647:"cuaca", 648:"cuaca", 649:"cuaca",

  // Warna (青, 赤, 銀, 色, 紅)
  181:"warna", 182:"warna", 183:"warna",
  184:"warna", 185:"warna", 186:"warna", 187:"warna",
  216:"warna", 218:"warna",
  263:"warna",
  638:"warna",

  // Pekerjaan & Ekonomi (金, 働, 会社, 仕事, 職, 工, 農, 産, 売, 借)
  15:"kerja", 16:"kerja", 17:"kerja", 19:"kerja",
  95:"kerja", 96:"kerja", 97:"kerja",
  98:"kerja", 99:"kerja", 100:"kerja", 101:"kerja",
  264:"kerja", 265:"kerja",
  295:"kerja", 296:"kerja",
  332:"kerja", 333:"kerja",
  464:"kerja", 465:"kerja",
  468:"kerja", 469:"kerja",
  478:"kerja", 479:"kerja",
  529:"kerja", 530:"kerja",
  537:"kerja", 538:"kerja", 539:"kerja", 540:"kerja",
  654:"kerja", 655:"kerja", 656:"kerja",
  668:"kerja", 669:"kerja", 670:"kerja",


  // Hiburan & Media (映, 歌, 音, 写真, 放送, 楽)
  178:"hiburan", 179:"hiburan", 180:"hiburan",
  518:"hiburan", 519:"hiburan",
  554:"hiburan", 555:"hiburan",
  560:"hiburan", 561:"hiburan", 562:"hiburan",
  563:"hiburan", 564:"hiburan",
  580:"hiburan", 581:"hiburan", 582:"hiburan",
  610:"hiburan", 611:"hiburan",
  254:"hiburan", 414:"hiburan",

  // Kata Abstrak & Umum
  10:"abstrak", 21:"abstrak",
  77:"abstrak", 79:"abstrak", 80:"abstrak", 81:"abstrak",
  90:"abstrak", 91:"abstrak", 92:"abstrak",
  102:"abstrak", 103:"abstrak", 104:"abstrak", 105:"abstrak",
  138:"abstrak", 139:"abstrak", 140:"abstrak", 141:"abstrak", 142:"abstrak",
  159:"abstrak", 160:"abstrak", 161:"abstrak",
  174:"abstrak", 253:"abstrak",
  262:"abstrak", 268:"abstrak", 269:"abstrak",
  272:"abstrak", 273:"abstrak", 274:"abstrak", 275:"abstrak",
  288:"abstrak", 289:"abstrak", 290:"abstrak", 291:"abstrak", 292:"abstrak",
  305:"abstrak", 306:"abstrak",
  316:"abstrak", 317:"abstrak", 319:"abstrak",
  321:"abstrak", 322:"abstrak", 323:"abstrak",
  324:"abstrak", 325:"abstrak", 326:"abstrak",
  327:"abstrak", 328:"abstrak", 329:"abstrak",
  337:"abstrak", 338:"abstrak", 339:"abstrak",
  340:"abstrak", 341:"abstrak",
  342:"abstrak", 343:"abstrak", 344:"abstrak",
  345:"abstrak", 346:"abstrak", 347:"abstrak",
  348:"abstrak", 349:"abstrak",
  352:"abstrak", 353:"abstrak", 354:"abstrak", 355:"abstrak", 356:"abstrak",
  357:"abstrak", 358:"abstrak",
  359:"abstrak", 360:"abstrak", 362:"abstrak",
  380:"abstrak", 381:"abstrak", 382:"abstrak", 383:"abstrak",
  390:"abstrak", 391:"abstrak", 392:"abstrak",
  393:"abstrak", 394:"abstrak",
  397:"abstrak", 399:"abstrak", 400:"abstrak",
  410:"abstrak", 411:"abstrak", 412:"abstrak",
  422:"abstrak", 423:"abstrak",
  424:"abstrak", 425:"abstrak", 426:"abstrak", 427:"abstrak",
  445:"abstrak", 446:"abstrak", 447:"abstrak",
  450:"abstrak",
  453:"abstrak", 454:"abstrak", 455:"abstrak", 457:"abstrak", 460:"abstrak",
  472:"abstrak", 473:"abstrak",
  480:"abstrak", 481:"abstrak",
  494:"abstrak", 495:"abstrak", 496:"abstrak",
  499:"abstrak", 500:"abstrak", 501:"abstrak", 502:"abstrak",
  507:"abstrak", 508:"abstrak",
  511:"abstrak", 512:"abstrak",
  516:"abstrak", 517:"abstrak",
  531:"abstrak", 532:"abstrak",
  533:"abstrak", 534:"abstrak", 535:"abstrak",
  544:"abstrak", 545:"abstrak", 546:"abstrak",
  550:"abstrak", 551:"abstrak", 552:"abstrak", 553:"abstrak",
  558:"abstrak", 559:"abstrak",
  583:"abstrak", 584:"abstrak", 585:"abstrak",
  594:"abstrak", 595:"abstrak",
  596:"abstrak", 597:"abstrak",
  608:"abstrak", 609:"abstrak",
  612:"abstrak", 613:"abstrak",
  617:"abstrak", 618:"abstrak", 619:"abstrak", 620:"abstrak",
  623:"abstrak", 624:"abstrak",
  634:"abstrak", 635:"abstrak",
  636:"abstrak", 637:"abstrak",
  640:"abstrak",
  673:"abstrak", 674:"abstrak", 675:"abstrak", 677:"abstrak",
  678:"abstrak", 679:"abstrak", 680:"abstrak",

  // Extra - items that bridge categories
  217:"kerja", 361:"abstrak", 376:"cuaca",
  466:"aktivitas", 467:"aktivitas",
  10:"aktivitas",
  238:"abstrak", 240:"abstrak",
  436:"aktivitas", 437:"aktivitas", 438:"aktivitas"
};



// Mapping: kanji ID → jenis kata
// doushi = 動詞 (Kata Kerja)
// i_keiyoushi = い形容詞 (Kata Sifat-i)
// na_keiyoushi = な形容詞 (Kata Sifat-na)
// meishi = 名詞 (Kata Benda)
// fukushi = 副詞 (Kata Keterangan)
const WORD_TYPE_MAP = {
  // ─── 動詞 (Kata Kerja) ───
  // Berakhiran ~る, ~く, ~す, ~む, ~ぶ, ~う, ~つ, ~ぬ, dll
  3:"doushi",    // 登山 (mendaki - aktivitas verbal)
  5:"doushi",    // 川遊び (bermain)
  10:"doushi",   // 水泳 (berenang)
  98:"doushi",   // 会う (bertemu)
  102:"doushi",  // 見る (melihat)
  106:"doushi",  // 行く (pergi)
  107:"doushi",  // 行動する (bertindak)
  108:"doushi",  // 来る (datang)
  115:"doushi",  // 飲む (minum)
  118:"doushi",  // 食べる (makan)
  121:"doushi",  // 読む (membaca)
  123:"doushi",  // 読む (membaca)
  125:"doushi",  // 書く (menulis)
  128:"doushi",  // 話す (berbicara)
  129:"doushi",  // 話す (berbicara)
  132:"doushi",  // 学ぶ (belajar)
  136:"doushi",  // 学ぶ (belajar)
  138:"doushi",  // 休む (istirahat)
  140:"doushi",  // 休む (istirahat)
  160:"doushi",  // 間に合う (tepat waktu)
  179:"doushi",  // 歌う (menyanyi)
  213:"doushi",  // 旅行する (wisata)
  264:"doushi",  // 働く (bekerja)
  265:"doushi",  // 働く (bekerja)
  270:"doushi",  // 歩く (berjalan)
  271:"doushi",  // 歩く (berjalan)
  276:"doushi",  // 降る (turun)
  277:"doushi",  // 降りる (turun)
  278:"doushi",  // 降る (turun hujan)
  279:"doushi",  // 通る (lewat)
  280:"doushi",  // 通る (melewati)
  281:"doushi",  // 通う (pulang pergi)
  282:"doushi",  // 通学する (sekolah)
  289:"doushi",  // 知る (mengetahui)
  290:"doushi",  // 知らせる (memberitahu)
  293:"doushi",  // 送る (kirim)
  294:"doushi",  // 送る (kirim)
  305:"doushi",  // 使う (gunakan)
  306:"doushi",  // 使う (gunakan)

  338:"doushi",  // 注意する (memperhatikan)
  339:"doushi",  // 注文する (memesan)
  342:"doushi",  // 終わる (selesai)
  343:"doushi",  // 終わり (selesai)
  344:"doushi",  // 終わる (selesai)
  350:"doushi",  // 到着 (datang - する verb)
  351:"doushi",  // 到着 (datang)
  353:"doushi",  // 変わる (berubah)
  354:"doushi",  // 変える (mengubah)
  356:"doushi",  // 変化する (berubah)
  358:"doushi",  // 光る (sinar)
  361:"doushi",  // 安心する (lega)
  381:"doushi",  // 着く (tiba)
  382:"doushi",  // 着る (memakai)
  385:"doushi",  // 散歩する (jalan-jalan)
  386:"doushi",  // 進む (maju)
  387:"doushi",  // 進む (maju)
  388:"doushi",  // 持つ (pegang)
  389:"doushi",  // 持つ (membawa)
  395:"doushi",  // 走る (berlari)
  396:"doushi",  // 走る (berlari)
  411:"doushi",  // 死ぬ (mati)
  416:"doushi",  // 住む (tinggal)
  419:"doushi",  // 乗る (naik)
  420:"doushi",  // 乗る (naik)
  422:"doushi",  // 待つ (tunggu)
  423:"doushi",  // 待つ (menunggu)
  425:"doushi",  // 別れる (berpisah)
  429:"doushi",  // 運ぶ (mengangkut)
  434:"doushi",  // 答える (jawab)
  435:"doushi",  // 答え (jawab)
  436:"doushi",  // 閉じる (tutup)
  437:"doushi",  // 閉まる (tertutup)
  438:"doushi",  // 閉める (menutup)
  466:"doushi",  // 洗う (cuci)
  467:"doushi",  // 洗う (mencuci)
  489:"doushi",  // 教える (mengajar)
  496:"doushi",  // 急ぐ (buru-buru)
  499:"doushi",  // 思う (pikir)
  500:"doushi",  // 思う (berpikir)
  501:"doushi",  // 思い出す (teringat)
  512:"doushi",  // 禁止する (melarang)
  525:"doushi",  // 暖める (hangatkan)
  538:"doushi",  // 作る (membuat)
  552:"doushi",  // 集める (mengumpulkan)
  553:"doushi",  // 集まる (berkumpul)
  562:"doushi",  // 映る (pantul)
  563:"doushi",  // 映す (pantulkan)
  567:"doushi",  // 返す (kembalikan)
  583:"doushi",  // 始める (mulai)
  584:"doushi",  // 始める (memulai)
  585:"doushi",  // 始まる (mulai)

  587:"doushi",  // 動かす (menggerakkan)
  595:"doushi",  // 利用する (gunakan)
  596:"doushi",  // 押す (tekan)
  597:"doushi",  // 押す (menekan)
  602:"doushi",  // 止める (berhenti)
  603:"doushi",  // 止める (menghentikan)
  604:"doushi",  // 止む (berhenti)
  605:"doushi",  // 出る (keluar)
  607:"doushi",  // 出発する (berangkat)
  609:"doushi",  // 訪問する (mengunjungi)
  616:"doushi",  // 痛む (sakit)
  624:"doushi",  // 浴びる (mandi)
  631:"doushi",  // 冷える (dingin)
  632:"doushi",  // 冷やす (dinginkan)
  634:"doushi",  // 泣く (menangis)
  635:"doushi",  // 泣く (menangis)
  641:"doushi",  // 質問する (bertanya)
  645:"doushi",  // 聞く (mendengar)
  646:"doushi",  // 聞こえる (terdengar)
  655:"doushi",  // 売る (menjual)
  657:"doushi",  // 帰る (pulang)
  658:"doushi",  // 帰る (pulang)
  673:"doushi",  // 開く (buka)
  674:"doushi",  // 開く (terbuka)
  675:"doushi",  // 開ける (membuka)
  678:"doushi",  // 起きる (bangun)
  679:"doushi",  // 起きる (bangun)
  680:"doushi",  // 起こる (terjadi)
  682:"doushi",  // 借りる (meminjam)
  97:"doushi",   // 生産する (produksi)

  // ─── い形容詞 (Kata Sifat-i) ───
  75:"i_keiyoushi",   // 大きい (besar)
  83:"i_keiyoushi",   // 小さい (kecil)
  182:"i_keiyoushi",  // 青い (biru)
  185:"i_keiyoushi",  // 赤い (merah)
  195:"i_keiyoushi",  // 熱い (panas benda)
  286:"i_keiyoushi",  // 多い (banyak)
  299:"i_keiyoushi",  // 近い (dekat)
  317:"i_keiyoushi",  // 明るい (terang)
  326:"i_keiyoushi",  // 正しい (benar)
  336:"i_keiyoushi",  // 長い (panjang)
  346:"i_keiyoushi",  // 悪い (buruk)
  360:"i_keiyoushi",  // 安い (murah)
  364:"i_keiyoushi",  // 低い (rendah)
  379:"i_keiyoushi",  // 少ない (sedikit)
  444:"i_keiyoushi",  // 軽い (ringan)
  449:"i_keiyoushi",  // 重い (berat)
  452:"i_keiyoushi",  // 早い (cepat)
  462:"i_keiyoushi",  // 寒い (dingin cuaca)
  475:"i_keiyoushi",  // 温かい (hangat)
  524:"i_keiyoushi",  // 暖かい (hangat cuaca)
  527:"i_keiyoushi",  // 高い (tinggi/mahal)
  548:"i_keiyoushi",  // 古い (lama/tua)
  581:"i_keiyoushi",  // 楽しい (menyenangkan)
  615:"i_keiyoushi",  // 痛い (sakit)
  626:"i_keiyoushi",  // 広い (luas)
  630:"i_keiyoushi",  // 冷たい (dingin benda)
  648:"i_keiyoushi",  // 暑い (panas cuaca)
  661:"i_keiyoushi",  // 遠い (jauh)


  // ─── な形容詞 (Kata Sifat-na) ───
  76:"na_keiyoushi",   // 大丈夫 (tidak apa-apa)
  77:"na_keiyoushi",   // 大切な (penting)
  78:"na_keiyoushi",   // 大変な (berat)
  81:"na_keiyoushi",   // 大事な (penting)
  273:"na_keiyoushi",  // 元気な (sehat)
  328:"na_keiyoushi",  // 有名な (terkenal)
  355:"na_keiyoushi",  // 変な (aneh)
  362:"na_keiyoushi",  // 安全な (aman)
  391:"na_keiyoushi",  // 不安な (cemas)
  392:"na_keiyoushi",  // 不便な (tidak praktis)
  450:"na_keiyoushi",  // 重要な (penting)
  508:"na_keiyoushi",  // 便利な (praktis)
  534:"na_keiyoushi",  // 好きな (suka)
  545:"na_keiyoushi",  // 特別な (spesial)
  582:"na_keiyoushi",  // 楽な (mudah)

  // ─── 副詞 (Kata Keterangan) ───
  74:"fukushi",    // 大体 (kira-kira)
  287:"fukushi",   // 多分 (mungkin)
  378:"fukushi",   // 少し (sedikit)
  484:"fukushi",   // 時々 (kadang-kadang)
  495:"fukushi",   // 急に (tiba-tiba)
  546:"fukushi",   // 特に (terutama)

  // ─── 名詞 (Kata Benda) ─── Sisanya yang tidak masuk di atas
  1:"meishi",    // 山 (gunung)
  2:"meishi",    // 富士山
  4:"meishi",    // 川 (sungai)
  6:"meishi",    // 火 (api)
  7:"meishi",    // 火山
  8:"meishi",    // 火曜日
  9:"meishi",    // 水 (air)
  11:"meishi",   // 水曜日
  12:"meishi",   // 水道
  13:"meishi",   // 木 (pohon)
  14:"meishi",   // 木曜日
  15:"meishi",   // 金 (uang)
  16:"meishi",   // 現金
  17:"meishi",   // お金
  18:"meishi",   // 金曜日
  19:"meishi",   // お金持ち
  20:"meishi",   // 土 (tanah)
  21:"meishi",   // お土産
  22:"meishi",   // 土地
  23:"meishi",   // 土曜日
  24:"meishi",   // 一
  25:"meishi",   // 一月
  26:"meishi",   // 一日中
  27:"meishi",   // 一言
  28:"meishi",   // 一時
  29:"meishi",   // 一週間
  30:"meishi",   // 一度
  31:"meishi",   // 二
  32:"meishi",   // 三
  33:"meishi",   // 三十分
  34:"meishi",   // 四
  35:"meishi",   // 四季
  36:"meishi",   // 五
  37:"meishi",   // 六
  38:"meishi",   // 七
  39:"meishi",   // 八
  40:"meishi",   // 九
  41:"meishi",   // 十
  42:"meishi",   // 百
  43:"meishi",   // 千
  44:"meishi",   // 万

  45:"meishi",   // 口
  46:"meishi",   // 入口
  47:"meishi",   // 目
  48:"meishi",   // 目薬
  49:"meishi",   // 耳
  50:"meishi",   // 手
  51:"meishi",   // お手洗い
  52:"meishi",   // 手紙
  53:"meishi",   // 足
  54:"meishi",   // 足首
  55:"meishi",   // 力
  56:"meishi",   // 月
  57:"meishi",   // 月曜日
  58:"meishi",   // 上
  59:"meishi",   // 以上
  60:"meishi",   // 下
  62:"meishi",   // 以下
  63:"meishi",   // 左
  64:"meishi",   // 左手
  65:"meishi",   // 右
  66:"meishi",   // 右手
  67:"meishi",   // 中
  68:"meishi",   // 中国
  69:"meishi",   // 中南米
  70:"meishi",   // 真ん中
  71:"meishi",   // 大
  72:"meishi",   // 大人
  73:"meishi",   // 大学
  79:"meishi",   // 大西洋
  80:"meishi",   // 大使館
  82:"meishi",   // 小
  84:"meishi",   // 小学生
  85:"meishi",   // 人
  86:"meishi",   // 人口
  87:"meishi",   // 人間
  88:"meishi",   // 分
  89:"meishi",   // 半分
  90:"meishi",   // 国
  91:"meishi",   // 国会
  92:"meishi",   // 国歌
  93:"meishi",   // 年
  94:"meishi",   // 去年
  95:"meishi",   // 生
  96:"meishi",   // 生活
  99:"meishi",   // 会話
  100:"meishi",  // 会社
  101:"meishi",  // 都会
  103:"meishi",  // 見学
  104:"meishi",  // 見本
  105:"meishi",  // 意見

  109:"meishi",  // 来月
  110:"meishi",  // 来年
  111:"meishi",  // 来週
  112:"meishi",  // 未来
  113:"meishi",  // 米
  114:"meishi",  // 米国
  116:"meishi",  // 飲酒
  117:"meishi",  // 飲料水
  119:"meishi",  // 食事
  120:"meishi",  // 食堂
  122:"meishi",  // 読書
  124:"meishi",  // 句
  126:"meishi",  // 図書館
  127:"meishi",  // 辞書
  130:"meishi",  // 車
  131:"meishi",  // 駐車場
  133:"meishi",  // 学生
  134:"meishi",  // 学校
  135:"meishi",  // 学習
  137:"meishi",  // 科学者
  139:"meishi",  // 休み
  141:"meishi",  // 休日
  142:"meishi",  // 定休日
  143:"meishi",  // 林
  144:"meishi",  // 森
  145:"meishi",  // 森林
  146:"meishi",  // 体
  147:"meishi",  // 体操
  148:"meishi",  // 体験
  149:"meishi",  // 体重
  150:"meishi",  // 字
  151:"meishi",  // 漢字
  152:"meishi",  // 数字
  153:"meishi",  // 名字
  154:"meishi",  // 文字
  155:"meishi",  // 海
  156:"meishi",  // 海外
  157:"meishi",  // 駅
  158:"meishi",  // 駅員
  159:"meishi",  // 間
  161:"meishi",  // 間違い
  162:"meishi",  // 東
  163:"meishi",  // 東口
  164:"meishi",  // 東京
  165:"meishi",  // 東洋
  166:"meishi",  // 西
  167:"meishi",  // 西口
  168:"meishi",  // 西洋
  169:"meishi",  // 南
  170:"meishi",  // 南口

  171:"meishi",  // 北
  172:"meishi",  // 北口
  173:"meishi",  // 前
  174:"meishi",  // 名前
  175:"meishi",  // 外
  176:"meishi",  // 外国
  177:"meishi",  // 外国語
  178:"meishi",  // 歌
  180:"meishi",  // 歌手
  181:"meishi",  // 青
  183:"meishi",  // 青信号
  184:"meishi",  // 赤
  186:"meishi",  // 赤ちゃん
  187:"meishi",  // 赤外線
  188:"meishi",  // 薬
  189:"meishi",  // 薬屋
  190:"meishi",  // 池
  191:"meishi",  // 姉
  192:"meishi",  // 姉妹
  193:"meishi",  // 妹
  194:"meishi",  // 熱
  196:"meishi",  // 今
  197:"meishi",  // 今月
  198:"meishi",  // 今年
  199:"meishi",  // 今週
  200:"meishi",  // 今夜
  201:"meishi",  // 今度
  202:"meishi",  // 曇
  203:"meishi",  // 雪
  204:"meishi",  // 雪国
  205:"meishi",  // 首
  206:"meishi",  // 指
  207:"meishi",  // 背
  208:"meishi",  // 背中
  209:"meishi",  // 道
  210:"meishi",  // 道具
  211:"meishi",  // 旅
  212:"meishi",  // 旅行
  214:"meishi",  // 旅館
  215:"meishi",  // 旅費
  216:"meishi",  // 銀
  217:"meishi",  // 銀行
  218:"meishi",  // 銀色
  219:"meishi",  // 春
  220:"meishi",  // 夏
  221:"meishi",  // 夏休み
  222:"meishi",  // 冬
  223:"meishi",  // 空
  224:"meishi",  // 空気
  226:"meishi",  // 空港

  227:"meishi",  // 風
  228:"meishi",  // 秋風
  229:"meishi",  // 台風
  230:"meishi",  // 風呂
  231:"meishi",  // 風邪
  232:"meishi",  // 朝
  233:"meishi",  // 朝ごはん
  234:"meishi",  // 昼
  235:"meishi",  // 昼休み
  236:"meishi",  // 夜
  237:"meishi",  // 真夜中
  238:"meishi",  // 方
  239:"meishi",  // 夕方
  240:"meishi",  // 方法
  241:"meishi",  // 頭
  242:"meishi",  // 頭痛
  243:"meishi",  // 顔
  244:"meishi",  // 笑顔
  245:"meishi",  // 声
  246:"meishi",  // 内
  247:"meishi",  // 内科
  248:"meishi",  // 私
  249:"meishi",  // 兄
  250:"meishi",  // 弟
  251:"meishi",  // 妻
  252:"meishi",  // 味
  253:"meishi",  // 意味
  254:"meishi",  // 趣味
  255:"meishi",  // 店
  256:"meishi",  // 所
  257:"meishi",  // 台所
  258:"meishi",  // 場所
  259:"meishi",  // 市
  260:"meishi",  // 町
  261:"meishi",  // 村
  262:"meishi",  // 紙
  263:"meishi",  // 色
  266:"meishi",  // 天
  267:"meishi",  // 天気
  268:"meishi",  // 太
  269:"meishi",  // 太平洋
  272:"meishi",  // 元
  274:"meishi",  // 元日
  275:"meishi",  // 元気
  283:"meishi",  // 田
  284:"meishi",  // 田舎
  285:"meishi",  // 多
  288:"meishi",  // 知
  291:"meishi",  // 知り合い
  292:"meishi",  // 知識

  295:"meishi",  // 部
  296:"meishi",  // 部長
  297:"meishi",  // 部屋
  298:"meishi",  // 近
  300:"meishi",  // 近く
  301:"meishi",  // 近所
  302:"meishi",  // 試
  303:"meishi",  // 試験
  304:"meishi",  // 試合
  307:"meishi",  // 校
  308:"meishi",  // 校長
  309:"meishi",  // 若
  310:"meishi",  // 若者
  311:"meishi",  // 女
  312:"meishi",  // 女子
  313:"meishi",  // 病
  314:"meishi",  // 病気
  315:"meishi",  // 病院
  316:"meishi",  // 明
  318:"meishi",  // 明日
  319:"meishi",  // 明らか
  320:"meishi",  // 明後日
  321:"meishi",  // 最
  322:"meishi",  // 最後
  323:"meishi",  // 最良
  324:"meishi",  // 正
  325:"meishi",  // お正月
  327:"meishi",  // 有
  329:"meishi",  // 有名
  330:"meishi",  // 郵
  331:"meishi",  // 郵便局
  332:"meishi",  // 社
  333:"meishi",  // 社長
  334:"meishi",  // 長
  335:"meishi",  // 長男
  337:"meishi",  // 注
  340:"meishi",  // 信
  341:"meishi",  // 信号
  345:"meishi",  // 悪
  347:"meishi",  // 悪口
  348:"meishi",  // 過
  349:"meishi",  // 過去
  352:"meishi",  // 変
  357:"meishi",  // 光
  359:"meishi",  // 安
  363:"meishi",  // 低
  365:"meishi",  // 低温
  366:"meishi",  // 毎
  367:"meishi",  // 毎月
  368:"meishi",  // 毎日

  369:"meishi",  // 毎晩
  370:"meishi",  // 毎年
  371:"meishi",  // 毎週
  372:"meishi",  // 日
  373:"meishi",  // 日曜日
  374:"meishi",  // 日本人
  375:"meishi",  // 日本語
  376:"meishi",  // 日光
  377:"meishi",  // 少
  380:"meishi",  // 着
  383:"meishi",  // 着物
  384:"meishi",  // 散
  390:"meishi",  // 不
  393:"meishi",  // 経
  394:"meishi",  // 経験
  397:"meishi",  // 先
  398:"meishi",  // 先生
  399:"meishi",  // 先進国
  400:"meishi",  // 先週
  401:"meishi",  // 問
  402:"meishi",  // 問題
  403:"meishi",  // 問い合わせ
  404:"meishi",  // 発
  405:"meishi",  // 発売
  406:"meishi",  // 発明する
  407:"meishi",  // 発音
  408:"meishi",  // 勉
  409:"meishi",  // 勉強
  410:"meishi",  // 死
  412:"meishi",  // 野
  413:"meishi",  // 野菜
  414:"meishi",  // 野球
  415:"meishi",  // 住
  417:"meishi",  // 住所
  418:"meishi",  // 住まい
  421:"meishi",  // 乗客
  424:"meishi",  // 別
  426:"meishi",  // 別の
  427:"meishi",  // 別々に
  428:"meishi",  // 運
  430:"meishi",  // 運動
  431:"meishi",  // 運転
  432:"meishi",  // 卒
  433:"meishi",  // 卒業
  439:"meishi",  // 閉店
  440:"meishi",  // 腹
  441:"meishi",  // お腹
  442:"meishi",  // 腹が立つ
  443:"meishi",  // 軽
  445:"meishi",  // 用
  446:"meishi",  // 用事
  447:"meishi",  // 用意
  448:"meishi",  // 重

  451:"meishi",  // 早
  453:"meishi",  // 自
  454:"meishi",  // 自分
  455:"meishi",  // 自ら
  456:"meishi",  // 自転車
  457:"meishi",  // 自由
  458:"meishi",  // 自動車
  459:"meishi",  // 自動販売機
  460:"meishi",  // 自信
  461:"meishi",  // 寒
  463:"meishi",  // 寒さ
  464:"meishi",  // 工
  465:"meishi",  // 工場
  468:"meishi",  // 職
  469:"meishi",  // 職業
  470:"meishi",  // 英
  471:"meishi",  // 英語
  472:"meishi",  // 事
  473:"meishi",  // 事故
  474:"meishi",  // 温
  476:"meishi",  // 温度
  477:"meishi",  // 温泉
  478:"meishi",  // 農
  479:"meishi",  // 農業
  480:"meishi",  // 限
  481:"meishi",  // 限界
  482:"meishi",  // 時
  483:"meishi",  // 時間
  485:"meishi",  // 時計
  486:"meishi",  // 時代
  487:"meishi",  // 教
  488:"meishi",  // 教科書
  490:"meishi",  // 午
  491:"meishi",  // 午前
  492:"meishi",  // 午前中
  493:"meishi",  // 午後
  494:"meishi",  // 急
  497:"meishi",  // 晩
  498:"meishi",  // 晩ご飯
  502:"meishi",  // 思い出
  503:"meishi",  // 飯
  504:"meishi",  // ご飯
  505:"meishi",  // 宿
  506:"meishi",  // 宿題
  507:"meishi",  // 便
  509:"meishi",  // 茶
  510:"meishi",  // お茶
  511:"meishi",  // 禁
  513:"meishi",  // 家
  514:"meishi",  // 家族
  515:"meishi",  // 家事
  516:"meishi",  // 説
  517:"meishi",  // 説明
  518:"meishi",  // 音
  519:"meishi",  // 音楽

  520:"meishi",  // 医
  521:"meishi",  // 医者
  522:"meishi",  // 医学
  523:"meishi",  // 暖
  526:"meishi",  // 高
  528:"meishi",  // 高校
  529:"meishi",  // 産
  530:"meishi",  // 産業
  531:"meishi",  // 同
  532:"meishi",  // 同じ
  533:"meishi",  // 好
  535:"meishi",  // 好み
  536:"meishi",  // お好み焼き
  537:"meishi",  // 作
  539:"meishi",  // 作文
  540:"meishi",  // 作業
  541:"meishi",  // 後
  542:"meishi",  // 後ろ
  543:"meishi",  // 後で
  544:"meishi",  // 特
  547:"meishi",  // 古
  549:"meishi",  // 気
  550:"meishi",  // 気持ち
  551:"meishi",  // 集
  554:"meishi",  // 放
  555:"meishi",  // 放送
  556:"meishi",  // 番
  557:"meishi",  // 番号
  558:"meishi",  // 様
  559:"meishi",  // 様子
  560:"meishi",  // 映
  561:"meishi",  // 映画
  564:"meishi",  // 映画館
  565:"meishi",  // 返
  566:"meishi",  // 返事
  568:"meishi",  // 電
  569:"meishi",  // 電話
  570:"meishi",  // 電車
  571:"meishi",  // 電話
  572:"meishi",  // 電池
  573:"meishi",  // 電気
  574:"meishi",  // 電子レンジ
  575:"meishi",  // 地
  576:"meishi",  // 地元
  577:"meishi",  // 地下
  578:"meishi",  // 地図
  579:"meishi",  // 地震
  580:"meishi",  // 楽
  586:"meishi",  // 動
  588:"meishi",  // 動物
  589:"meishi",  // 男
  590:"meishi",  // 男の子
  591:"meishi",  // 男性
  592:"meishi",  // 男の人
  593:"meishi",  // 男子学生
  594:"meishi",  // 利

  598:"meishi",  // 言
  599:"meishi",  // 言語
  600:"meishi",  // 季
  601:"meishi",  // 季節
  606:"meishi",  // 出口
  608:"meishi",  // 訪
  610:"meishi",  // 写
  611:"meishi",  // 写真
  612:"meishi",  // 理
  613:"meishi",  // 理由
  614:"meishi",  // 痛
  617:"meishi",  // 世
  618:"meishi",  // 世界
  619:"meishi",  // 世話
  620:"meishi",  // 世代
  621:"meishi",  // 新
  622:"meishi",  // 新聞
  623:"meishi",  // 浴
  625:"meishi",  // 広
  627:"meishi",  // 広さ
  628:"meishi",  // 広島
  629:"meishi",  // 冷
  633:"meishi",  // 冷蔵庫
  636:"meishi",  // 調
  637:"meishi",  // 調子
  638:"meishi",  // 紅
  639:"meishi",  // 紅茶
  640:"meishi",  // 質
  642:"meishi",  // 単
  643:"meishi",  // 単語
  644:"meishi",  // 聞
  647:"meishi",  // 暑
  649:"meishi",  // 暑さ
  650:"meishi",  // 花
  651:"meishi",  // 花見
  652:"meishi",  // 花火
  653:"meishi",  // 花屋
  654:"meishi",  // 売
  656:"meishi",  // 売店
  659:"meishi",  // 帰国
  660:"meishi",  // 遠
  662:"meishi",  // 遠く
  663:"meishi",  // 料
  664:"meishi",  // 料理
  665:"meishi",  // 料金
  666:"meishi",  // 本
  667:"meishi",  // 本屋
  668:"meishi",  // 仕
  669:"meishi",  // 仕事
  670:"meishi",  // 仕方
  671:"meishi",  // 受
  676:"meishi",  // 開店
  677:"meishi",  // 開始
  681:"meishi",  // 借
  683:"meishi",  // 借家

  // Entries with special forms
  61:"meishi",   // 下手 (not adjective per se, noun-like)
  225:"meishi",  // 空腹
  336:"meishi",  // Handled above as i_keiyoushi override
  672:"doushi"   // 受験する (mengikuti ujian)
};



/**
 * Helper: get thematic category for a kanji ID
 * Returns category key or "abstrak" as default
 */
function getThematicCategory(id) {
  return THEMATIC_MAP[id] || "abstrak";
}

/**
 * Helper: get word type for a kanji ID
 * Returns word type key or "meishi" as default
 */
function getWordType(id) {
  return WORD_TYPE_MAP[id] || "meishi";
}

/**
 * Filter kanji IDs by thematic categories and/or word types
 * @param {string[]} themes - array of thematic category keys (empty = all)
 * @param {string[]} wordTypes - array of word type keys (empty = all)
 * @returns {number[]} - array of matching kanji IDs
 */
function filterByDualTag(themes, wordTypes) {
  const allThemes = themes.length === 0;
  const allTypes = wordTypes.length === 0;

  return KANJI_DATA
    .map(function(entry) { return entry[0]; })
    .filter(function(id) {
      const themeMatch = allThemes || themes.indexOf(getThematicCategory(id)) !== -1;
      const typeMatch = allTypes || wordTypes.indexOf(getWordType(id)) !== -1;
      return themeMatch && typeMatch;
    });
}
