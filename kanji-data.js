/**
 * Kanji Flashcard Data
 * Format: [id, kanji, kana, arti]
 * 
 * LOGIKA PENYUSUNAN:
 * 1. Tematik — Kanji induk dikelompokkan berdasarkan tema
 * 2. Pasangan lawan arti berdekatan — 上↔下, 大↔小, dll.
 * 3. Besar → Kecil — Dalam satu kelompok, dari skala besar ke kecil
 * 4. Kronologis / Alur proses — Jika ada urutan waktu/kejadian
 * 5. Atas → Bawah — Khusus kategori tubuh
 * 6. Umum → Spesifik — Jika tidak ada logika di atas
 *
 * ATURAN: Kanji INDUK yang disusun. Turunan hanya mengikuti induknya.
 */
const KANJI_DATA = [

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 1. ALAM & GEOGRAFI
//    Logika: Besar→Kecil per kelompok (Daratan, Perairan, Elemen, Tumbuhan)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// --- Daratan (Besar→Kecil): 山→地→田→土 ---
// 山 (Gunung)
[1,"山","やま","Gunung"],
[2,"富士山","ふじさん","Gunung Fuji"],
[3,"登山","とざん","Mendaki gunung"],
[7,"火山","かざん","Gunung berapi"],
// 地 (Tanah/Tempat)
[575,"地","ち","Tanah/Tempat"],
[576,"地元","じもと","Lokal"],
[577,"地下","ちか","Bawah tanah"],
[578,"地図","ちず","Peta"],
[579,"地震","じしん","Gempa bumi"],
// 田 (Sawah)
[283,"田","た","Sawah"],
[284,"田舎","いなか","Desa"],
// 土 (Tanah)
[20,"土","つち","Tanah"],
[22,"土地","とち","Tanah"],
[21,"お土産","おみやげ","Oleh-oleh"],

// --- Perairan (Besar→Kecil): 海→川→池 ---
// 海 (Laut)
[155,"海","うみ","Laut"],
[156,"海外","かいがい","Luar negeri"],
// 川 (Sungai)
[4,"川","かわ","Sungai"],
[5,"川遊び","かわあそび","Bermain di sungai"],
// 池 (Kolam)
[190,"池","いけ","Kolam"],

// --- Elemen Alam (Pasangan lawan): 火↔水 ---
// 火 (Api)
[6,"火","ひ","Api"],
[652,"花火","はなび","Kembang api"],
// 水 (Air)
[9,"水","みず","Air"],
[12,"水道","すいどう","Saluran air"],
[10,"水泳","すいえい","Berenang"],

// --- Tumbuhan (Kecil→Besar): 花→木(→林→森) ---
// 花 (Bunga)
[650,"花","はな","Bunga"],
[651,"花見","はなみ","Melihat bunga"],
[653,"花屋","はなや","Toko bunga"],
// 木 (Pohon → 林, 森 adalah turunan dari 木)
[13,"木","き","Pohon"],
[143,"林","はやし","Hutan kecil"],
[144,"森","もり","Hutan lebat"],
[145,"森林","しんりん","Hutan"],

// --- Langit & Cuaca (Atas→Bawah secara visual): 天→空→風→雲→雪 ---
// 天 (Langit/Surga)
[266,"天","てん","Langit/Surga"],
[267,"天気","てんき","Cuaca"],
// 空 (Langit)
[223,"空","そら","Langit"],
[224,"空気","くうき","Udara"],
[225,"空腹","くうふく","Lapar"],
[226,"空港","くうこう","Bandara"],
// 風 (Angin)
[227,"風","かぜ","Angin"],
[228,"秋風","あきかぜ","Angin gugur"],
[229,"台風","たいふう","Topan"],
[230,"風呂","ふろ","Mandi"],
[231,"風邪","かぜ","Pilek"],
// 曇 (Awan)
[202,"曇","くも","Awan"],
// 雪 (Salju)
[203,"雪","ゆき","Salju"],
[204,"雪国","ゆきぐに","Negara salju"],

// --- Geografi Tambahan ---
// 太平洋/大西洋 dipindah ke sini karena terkait geografi
[269,"太平洋","たいへいよう","Samudra Pasifik"],
[79,"大西洋","たいせいよう","Samudra Atlantik"],

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 2. MUSIM & SUHU
//    Logika: Kronologis (春→夏→秋→冬) + Pasangan lawan suhu
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// --- Musim (Kronologis): 春→夏→秋→冬 ---
// 季 (Musim - konsep umum dulu)
[600,"季","き","Musim"],
[601,"季節","きせつ","Musim"],
// 春 (Semi)
[219,"春","はる","Semi"],
// 夏 (Panas)
[220,"夏","なつ","Panas"],
[221,"夏休み","なつやすみ","Libur musim panas"],
// 冬 (Dingin)
[222,"冬","ふゆ","Dingin"],

// --- Suhu (Pasangan lawan): 暑↔寒, 暖/温↔冷 ---
// 暑 (Panas cuaca) ↔ 寒 (Dingin cuaca)
[647,"暑","あつ","Panas (cuaca)"],
[648,"暑い","あつい","Panas (cuaca)"],
[649,"暑さ","あつさ","Panasnya"],
[461,"寒","さむ","Dingin (cuaca)"],
[462,"寒い","さむい","Dingin (cuaca)"],
[463,"寒さ","さむさ","Dinginnya"],
// 暖 (Hangat cuaca)
[523,"暖","だん","Hangat (cuaca)"],
[524,"暖かい","あたたかい","Hangat (cuaca)"],
[525,"暖める","あたためる","Hangatkan"],
// 温 (Hangat benda) ↔ 冷 (Dingin benda)
[474,"温","おん","Hangat"],
[475,"温かい","あたたかい","Hangat"],
[476,"温度","おんど","Suhu"],
[477,"温泉","おんせん","Onsen"],
[629,"冷","れい","Dingin"],
[630,"冷たい","つめたい","Dingin (benda)"],
[631,"冷える","ひえる","Dingin"],
[632,"冷やす","ひやす","Dinginkan"],
[633,"冷蔵庫","れいぞうこ","Kulkas"],

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 3. ANGKA & HITUNGAN
//    Logika: Urutan numerik kecil→besar (1→10000)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// 一 (Satu)
[24,"一","いち","Satu"],
[25,"一月","いちがつ","Januari"],
[26,"一日中","いちにちじゅう","Seharian"],
[27,"一言","ひとこと","Sepatah kata"],
[28,"一時","いちじ","Jam 1"],
[29,"一週間","いっしゅうかん","Seminggu"],
[30,"一度","いちど","1 kali"],
// 二 (Dua)
[31,"二","に","Dua"],
// 三 (Tiga)
[32,"三","さん","Tiga"],
[33,"三十分","さんじゅっぷん","30 menit"],
// 四 (Empat)
[34,"四","よん","Empat"],
[35,"四季","しき","4 musim"],
// 五 (Lima)
[36,"五","こ","Lima"],
// 六 (Enam)
[37,"六","ろく","Enam"],
// 七 (Tujuh)
[38,"七","なな","Tujuh"],
// 八 (Delapan)
[39,"八","はち","Delapan"],
// 九 (Sembilan)
[40,"九","きゅう","Sembilan"],
// 十 (Sepuluh)
[41,"十","じゅう","Sepuluh"],
// 百 (Seratus)
[42,"百","ひゃく","Seratus"],
// 千 (Seribu)
[43,"千","せん","Seribu"],
// 万 (Sepuluh ribu)
[44,"万","まん","Sepuluh ribu"],

// --- Hitungan & Ukuran ---
// 分 (Menit/Bagian)
[88,"分","ふん","Menit"],
[89,"半分","はんぶん","Setengah"],
// 番 (Nomor/Giliran)
[556,"番","ばん","Nomor/Giliran"],
[557,"番号","ばんごう","Nomor"],

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 4. WAKTU & KALENDER
//    Logika: Besar→Kecil (Tahun→Bulan→Minggu→Hari→Jam)
//            + Kronologis (Pagi→Siang→Sore→Malam)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// --- Skala Waktu (Besar→Kecil): 年→月→日→時 ---
// 年 (Tahun)
[93,"年","とし","Tahun"],
[94,"去年","きょねん","Tahun lalu"],
[198,"今年","ことし","Tahun ini"],
[370,"毎年","まいとし","Setiap tahun"],
// 月 (Bulan)
[56,"月","つき","Bulan"],
[197,"今月","こんげつ","Bulan ini"],
[367,"毎月","まいつき","Setiap bulan"],
// 日 (Hari/Matahari)
[372,"日","ひ","Hari/Matahari"],
[376,"日光","にっこう","Matahari"],
[374,"日本人","にほんじん","Orang Jepang"],
[375,"日本語","にほんご","Bahasa Jepang"],
[368,"毎日","まいにち","Setiap hari"],
// 時 (Waktu/Jam)
[482,"時","とき","Waktu"],
[483,"時間","じかん","Waktu"],
[484,"時々","ときどき","Kadang-kadang"],
[485,"時計","とけい","Jam"],
[486,"時代","じだい","Zaman"],

// --- Hari dalam Seminggu (Kronologis: Senin→Minggu) ---
[57,"月曜日","げつようび","Senin"],
[8,"火曜日","かようび","Selasa"],
[11,"水曜日","すいようび","Rabu"],
[14,"木曜日","もくようび","Kamis"],
[18,"金曜日","きんようび","Jumat"],
[23,"土曜日","どようび","Sabtu"],
[373,"日曜日","にちようび","Minggu"],

// --- Waktu Harian (Kronologis: Pagi→Malam) ---
// 朝 (Pagi)
[232,"朝","あさ","Pagi"],
[233,"朝ごはん","あさごはん","Sarapan"],
// 午 (Siang) + 午前↔午後
[490,"午","ご","Siang"],
[491,"午前","ごぜん","Pagi/AM"],
[492,"午前中","ごぜんちゅう","Pagi hari"],
[493,"午後","ごご","Sore/PM"],
// 昼 (Siang)
[234,"昼","ひる","Siang"],
[235,"昼休み","ひるやすみ","Istirahat siang"],
// 夕 (Sore)
[239,"夕方","ゆうがた","Sore"],
// 夜 (Malam)
[236,"夜","よる","Malam"],
[200,"今夜","こんや","Malam ini"],
[237,"真夜中","まよなか","Tengah malam"],
// 晩 (Malam)
[497,"晩","ばん","Malam"],
[498,"晩ご飯","ばんごはん","Makan malam"],
[369,"毎晩","まいばん","Setiap malam"],

// --- Relatif Waktu ---
// 今 (Sekarang)
[196,"今","いま","Sekarang"],
[199,"今週","こんしゅう","Minggu ini"],
[201,"今度","こんど","Lain kali"],
// 毎 (Setiap)
[366,"毎","まい","Setiap"],
[371,"毎週","まいしゅう","Setiap minggu"],
// 明 (Besok/Terang) — aspek waktu
[318,"明日","あした","Besok"],
[320,"明後日","あさって","Lusa"],
// 先 (Duluan/Sebelumnya) ↔ 来 (Akan datang)
[397,"先","さき","Duluan/Ujung"],
[400,"先週","せんしゅう","Minggu lalu"],
[108,"来","くる","Datang"],
[109,"来月","らいげつ","Bulan depan"],
[110,"来年","らいねん","Tahun depan"],
[111,"来週","らいしゅう","Minggu depan"],
[112,"未来","みらい","Masa depan"],
// 過 (Lewat/Masa lalu)
[348,"過","か","Lewat/Berlebihan"],
[349,"過去","かこ","Masa lalu"],

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 5. ARAH & POSISI
//    Logika: Pasangan lawan arti berdekatan
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// --- Vertikal: 上↔下 ---
// 上 (Atas)
[58,"上","うえ","Atas"],
[59,"以上","いじょう","Lebih"],
// 下 (Bawah)
[60,"下","した","Bawah"],
[61,"下手","へた","Tidak pandai"],
[62,"以下","いか","Kurang"],

// --- Horizontal: 左↔右 ---
// 左 (Kiri)
[63,"左","ひだり","Kiri"],
[64,"左手","ひだりて","Tangan kiri"],
// 右 (Kanan)
[65,"右","みぎ","Kanan"],
[66,"右手","みぎて","Tangan kanan"],

// --- Pusat: 中 ---
// 中 (Tengah)
[67,"中","なか","Tengah"],
[68,"中国","ちゅうごく","China"],
[69,"中南米","ちゅうなんべい","Amerika Latin"],
[70,"真ん中","まんなか","Tengah"],

// --- Kompas: 東↔西, 南↔北 ---
// 東 (Timur) ↔ 西 (Barat)
[162,"東","ひがし","Timur"],
[163,"東口","ひがしぐち","Pintu timur"],
[164,"東京","とうきょう","Tokyo"],
[165,"東洋","とうよう","Timur"],
[166,"西","にし","Barat"],
[167,"西口","にしぐち","Pintu barat"],
[168,"西洋","せいよう","Barat"],
// 南 (Selatan) ↔ 北 (Utara)
[169,"南","みなみ","Selatan"],
[170,"南口","みなみぐち","Pintu selatan"],
[171,"北","きた","Utara"],
[172,"北口","きたぐち","Pintu utara"],

// --- Relatif Posisi: 前↔後, 外↔内, 近↔遠 ---
// 前 (Depan) ↔ 後 (Belakang)
[173,"前","まえ","Depan"],
[541,"後","あと","Setelah"],
[542,"後ろ","うしろ","Belakang"],
[543,"後で","あとで","Nanti"],
// 外 (Luar) ↔ 内 (Dalam)
[175,"外","そと","Luar"],
[176,"外国","がいこく","Luar negeri"],
[177,"外国語","がいこくご","Bahasa asing"],
[246,"内","うち","Dalam"],
[247,"内科","ないか","Penyakit dalam"],
// 近 (Dekat) ↔ 遠 (Jauh)
[298,"近","ちか","Dekat"],
[299,"近い","ちかい","Dekat"],
[300,"近く","ちかく","Dekat"],
[301,"近所","きんじょ","Tetangga"],
[660,"遠","とお","Jauh"],
[661,"遠い","とおい","Jauh"],
[662,"遠く","とおく","Jauh"],

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 6. UKURAN & SIFAT FISIK
//    Logika: Pasangan lawan arti berdekatan
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// --- 大↔小 (Besar↔Kecil) ---
// 大 (Besar)
[71,"大","だい","Besar"],
[72,"大人","おとな","Dewasa"],
[73,"大学","だいがく","Universitas"],
[74,"大体","だいたい","Kira-kira"],
[75,"大きい","おおきい","Besar"],
[76,"大丈夫","だいじょうぶ","Tidak apa-apa"],
[77,"大切な","たいせつな","Penting"],
[78,"大変な","たいへんな","Berat"],
[80,"大使館","たいしかん","Kedutaan"],
[81,"大事な","だいじな","Penting"],
// 小 (Kecil)
[82,"小","しょう","Kecil"],
[83,"小さい","ちいさい","Kecil"],
[84,"小学生","しょうがくせい","Murid SD"],

// --- 高↔低 (Tinggi↔Rendah) ---
// 高 (Tinggi)
[526,"高","たか","Tinggi"],
[527,"高い","たかい","Tinggi/mahal"],
[528,"高校","こうこう","SMA"],
// 低 (Rendah)
[363,"低","ひく","Rendah"],
[364,"低い","ひくい","Rendah"],
[365,"低温","ていおん","Suhu rendah"],

// --- 長↔短 (Panjang — pasangan 短 belum ada di data) ---
// 長 (Panjang)
[334,"長","なが","Panjang"],
[335,"長男","ちょうなん","Anak laki-laki pertama"],
[336,"長い","ながい","Panjang"],

// --- 広 (Luas) ---
// 広 (Luas)
[625,"広","ひろ","Luas"],
[626,"広い","ひろい","Luas"],
[627,"広さ","ひろさ","Luasnya"],
[628,"広島","ひろしま","Hiroshima"],

// --- 多↔少 (Banyak↔Sedikit) ---
// 多 (Banyak)
[285,"多","おおい","Banyak"],
[286,"多い","おおい","Banyak"],
[287,"多分","たぶん","Mungkin"],
// 少 (Sedikit)
[377,"少","すこし","Sedikit"],
[378,"少し","すこし","Sedikit"],
[379,"少ない","すくない","Sedikit"],

// --- 重↔軽 (Berat↔Ringan) ---
// 重 (Berat)
[448,"重","おも","Berat"],
[449,"重い","おもい","Berat"],
[450,"重要な","じゅうような","Penting"],
// 軽 (Ringan)
[443,"軽","かる","Ringan"],
[444,"軽い","かるい","Ringan"],

// --- 新↔古 (Baru↔Lama) ---
// 新 (Baru)
[621,"新","しん","Baru"],
[622,"新聞","しんぶん","Koran"],
// 古 (Lama)
[547,"古","ふる","Lama"],
[548,"古い","ふるい","Lama/tua"],

// --- 早 (Cepat) ---
[451,"早","はや","Cepat"],
[452,"早い","はやい","Cepat"],

// --- 太 (Gemuk/Tebal) ---
[268,"太","ふとい","Gemuk/Tebal"],

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 7. SIFAT & KEADAAN
//    Logika: Pasangan lawan arti + Umum→Spesifik
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// --- 明↔悪 (Terang/Baik↔Buruk) ---
// 明 (Terang)
[316,"明","あかり","Terang"],
[317,"明るい","あかるい","Terang"],
[319,"明らか","あきらか","Jelas"],
// 悪 (Buruk)
[345,"悪","わる","Buruk"],
[346,"悪い","わるい","Buruk"],
[347,"悪口","わるくち","Gunjingan"],

// --- 正↔変 (Benar/Normal↔Aneh/Berubah) ---
// 正 (Benar)
[324,"正","ただ","Benar"],
[325,"お正月","おしょうがつ","Tahun baru"],
[326,"正しい","ただしい","Benar"],
// 変 (Aneh/Berubah)
[352,"変","へん","Aneh/Berubah"],
[353,"変わる","かわる","Berubah"],
[354,"変える","かえる","Mengubah"],
[355,"変な","へんな","Aneh"],
[356,"変化する","へんかする","Berubah"],

// --- 安 (Murah/Aman) ↔ 不 (Tidak/Negatif) ---
// 安 (Murah/Aman)
[359,"安","やす","Murah/Aman"],
[360,"安い","やすい","Murah"],
[361,"安心する","あんしんする","Lega"],
[362,"安全な","あんぜんな","Aman"],
// 不 (Tidak — negasi)
[390,"不","ふ","Tidak"],
[391,"不安な","ふあんな","Cemas"],
[392,"不便な","ふべんな","Tidak praktis"],

// --- 光 (Cahaya) ---
[357,"光","ひかり","Cahaya"],
[358,"光る","ひかる","Sinar"],

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 8. TUBUH MANUSIA
//    Logika: Atas→Bawah (Kepala→Kaki)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// 頭 (Kepala)
[241,"頭","あたま","Kepala"],
[242,"頭痛","ずつう","Sakit kepala"],
// 顔 (Wajah)
[243,"顔","かお","Wajah"],
[244,"笑顔","えがお","Senyum"],
// 目 (Mata)
[47,"目","め","Mata"],
[48,"目薬","めぐすり","Obat mata"],
// 耳 (Telinga)
[49,"耳","みみ","Telinga"],
// 口 (Mulut)
[45,"口","くち","Mulut"],
// 声 (Suara)
[245,"声","こえ","Suara"],
// 首 (Leher)
[205,"首","くび","Leher"],
// 背 (Punggung)
[207,"背","せ","Punggung"],
[208,"背中","せなか","Punggung"],
// 体 (Badan)
[146,"体","からだ","Badan"],
[147,"体操","たいそう","Senam"],
[148,"体験","たいけん","Pengalaman"],
[149,"体重","たいじゅう","Berat badan"],
// 腹 (Perut)
[440,"腹","はら","Perut"],
[441,"お腹","おなか","Perut"],
[442,"腹が立つ","はらがたつ","Marah"],
// 手 (Tangan)
[50,"手","て","Tangan"],
[51,"お手洗い","おてあらい","Kamar mandi"],
[52,"手紙","てがみ","Surat"],
// 指 (Jari)
[206,"指","ゆび","Jari"],
// 足 (Kaki)
[53,"足","あし","Kaki"],
[54,"足首","あしくび","Pergelangan kaki"],
// 力 (Tenaga)
[55,"力","ちから","Tenaga"],

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 9. KESEHATAN
//    Logika: Alur proses (Sakit→Dokter→Obat→Sembuh)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// 病 (Sakit)
[313,"病","びょう","Sakit"],
[314,"病気","びょうき","Sakit"],
[315,"病院","びょういん","Rumah sakit"],
// 痛 (Nyeri)
[614,"痛","いた","Sakit"],
[615,"痛い","いたい","Sakit"],
[616,"痛む","いたむ","Sakit"],
// 熱 (Demam/Panas)
[194,"熱","ねつ","Demam"],
[195,"熱い","あつい","Panas (benda)"],
// 医 (Dokter)
[520,"医","い","Medis/Dokter"],
[521,"医者","いしゃ","Dokter"],
[522,"医学","いがく","Kedokteran"],
// 薬 (Obat)
[188,"薬","くすり","Obat"],
[189,"薬屋","くすりや","Toko obat"],
// 元 (Sehat/Asal — hasil sembuh)
[272,"元","もと","Asal"],
[273,"元気な","げんきな","Sehat"],
[274,"元日","がんじつ","Hari tahun baru"],
[275,"元気","げんき","Sehat"],

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 10. ORANG & KELUARGA
//     Logika: Umum→Spesifik + Pasangan lawan (男↔女, 兄↔弟)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// --- Umum ---
// 人 (Orang)
[85,"人","ひと","Orang"],
[86,"人口","じんこう","Populasi"],
[87,"人間","にんげん","Manusia"],
// 私 (Saya)
[248,"私","わたし","Saya"],

// --- Pasangan Lawan: 男↔女 ---
// 男 (Laki-laki)
[589,"男","おとこ","Laki-laki"],
[590,"男の子","おとこのこ","Anak laki-laki"],
[591,"男性","だんせい","Pria"],
[592,"男の人","おとこのひと","Laki-laki"],
[593,"男子学生","だんしがくせい","Murid laki-laki"],
// 女 (Perempuan)
[311,"女","おんな","Perempuan"],
[312,"女子","じょし","Perempuan"],

// --- Pasangan Lawan: 若↔老 (Muda↔Tua) ---
// 若 (Muda)
[309,"若","わかい","Muda"],
[310,"若者","わかもの","Anak muda"],

// --- Keluarga (Pasangan: 兄↔弟, 姉↔妹) ---
// 兄 (Kakak laki) ↔ 弟 (Adik laki)
[249,"兄","あに","Kakak laki-laki"],
[250,"弟","おとうと","Adik laki-laki"],
// 姉 (Kakak perempuan) ↔ 妹 (Adik perempuan)
[191,"姉","あね","Kakak perempuan"],
[192,"姉妹","しまい","Saudara perempuan"],
[193,"妹","いもうと","Adik perempuan"],
// 妻 (Istri)
[251,"妻","つま","Istri"],
// 赤ちゃん (Bayi) — dipindah dari Warna ke sini
[186,"赤ちゃん","あかちゃん","Bayi"],

// --- Rumah & Keluarga ---
// 家 (Rumah/Keluarga)
[513,"家","いえ","Rumah"],
[514,"家族","かぞく","Keluarga"],
[515,"家事","かじ","Pekerjaan rumah"],

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 11. MAKANAN & MINUMAN
//     Logika: Alur proses (Bahan→Masak→Makan→Minum)
//             + Pasangan lawan: 食↔飲
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// --- Bahan ---
// 米 (Beras)
[113,"米","こめ","Beras"],
[114,"米国","べいこく","Amerika"],
// 野菜 (Sayur)
[413,"野菜","やさい","Sayur"],
// 飯 (Nasi)
[503,"飯","はん","Nasi"],
[504,"ご飯","ごはん","Nasi"],

// --- Memasak ---
// 料 (Bahan/Biaya)
[663,"料","りょう","Biaya/Bahan"],
[664,"料理","りょうり","Masakan"],
[665,"料金","りょうきん","Biaya"],
[536,"お好み焼き","おこのみやき","Okonomiyaki"],
// 味 (Rasa)
[252,"味","あじ","Rasa"],

// --- Pasangan: 食↔飲 (Makan↔Minum) ---
// 食 (Makan)
[118,"食","たべる","Makan"],
[119,"食事","しょくじ","Makanan"],
[120,"食堂","しょくどう","Kantin"],
// 飲 (Minum)
[115,"飲","のむ","Minum"],
[116,"飲酒","いんしゅ","Minum alkohol"],
[117,"飲料水","いんりょうすい","Air minum"],

// --- Minuman ---
// 茶 (Teh)
[509,"茶","ちゃ","Teh"],
[510,"お茶","おちゃ","Teh hijau"],
[639,"紅茶","こうちゃ","Teh hitam"],

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 12. AKTIVITAS & GERAKAN
//     Logika: Pasangan lawan arti + Alur proses perjalanan
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// --- Pasangan Lawan: 行↔来 (Pergi↔Datang) ---
// 行 (Pergi)
[106,"行","いく","Pergi"],
[107,"行動する","こうどうする","Bertindak"],

// --- Pasangan Lawan: 出↔入 (Keluar↔Masuk) ---
// 出 (Keluar)
[605,"出","で","Keluar"],
[606,"出口","でぐち","Pintu keluar"],
[607,"出発する","しゅっぱつする","Berangkat"],
// 入 (Masuk)
[46,"入口","いりぐち","Pintu masuk"],

// --- Pasangan Lawan: 開↔閉 (Buka↔Tutup) ---
// 開 (Buka)
[673,"開","ひらく","Buka"],
[674,"開く","あく","Terbuka"],
[675,"開ける","あける","Membuka"],
[676,"開店","かいてん","Buka toko"],
[677,"開始","かいし","Mulai"],
// 閉 (Tutup)
[436,"閉","とじる","Tutup"],
[437,"閉まる","しまる","Tertutup"],
[438,"閉める","しめる","Menutup"],
[439,"閉店","へいてん","Tutup toko"],

// --- Pasangan Lawan: 始↔終 (Mulai↔Selesai) ---
// 始 (Mulai)
[583,"始","はじ","Mulai"],
[584,"始める","はじめる","Memulai"],
[585,"始まる","はじまる","Mulai"],
// 終 (Selesai)
[342,"終","お","Selesai"],
[343,"終わり","おわり","Selesai"],
[344,"終わる","おわる","Selesai"],

// --- Pasangan Lawan: 生↔死 (Hidup↔Mati) ---
// 生 (Hidup)
[95,"生","せい","Hidup"],
[96,"生活","せいかつ","Kehidupan"],
[97,"生産する","せいさんする","Produksi"],
// 死 (Mati)
[410,"死","し","Mati"],
[411,"死ぬ","しぬ","Mati"],

// --- Pasangan Lawan: 進↔止 (Maju↔Berhenti) ---
// 進 (Maju)
[386,"進","すす","Maju"],
[387,"進む","すすむ","Maju"],
// 止 (Berhenti)
[602,"止","と","Berhenti"],
[603,"止める","とめる","Menghentikan"],
[604,"止む","やむ","Berhenti"],

// --- Pasangan Lawan: 乗↔降 (Naik↔Turun) ---
// 乗 (Naik)
[419,"乗","の","Naik"],
[420,"乗る","のる","Naik"],
[421,"乗客","じょうきゃく","Penumpang"],
// 降 (Turun)
[276,"降","ふ","Turun"],
[277,"降りる","おりる","Turun"],
[278,"降る","ふる","Turun (hujan)"],

// --- Alur Proses Perjalanan: 起→出→行→通→到→帰 ---
// 起 (Bangun)
[678,"起","お","Bangun"],
[679,"起きる","おきる","Bangun"],
[680,"起こる","おこる","Terjadi"],
// 歩 (Berjalan)
[270,"歩","ほ","Berjalan"],
[271,"歩く","あるく","Berjalan"],
// 散 (Jalan-jalan)
[384,"散","さん","Menyebar"],
[385,"散歩する","さんぽする","Jalan-jalan"],
// 走 (Berlari)
[395,"走","はし","Berlari"],
[396,"走る","はしる","Berlari"],
// 通 (Lewat)
[279,"通","つう","Lewat"],
[280,"通る","とおる","Melewati"],
[281,"通う","かよう","Pulang pergi"],
[282,"通学する","つうがくする","Sekolah"],
// 到 (Sampai)
[350,"到","とう","Sampai"],
[351,"到着","とうちゃく","Datang"],
// 帰 (Pulang)
[657,"帰","かえ","Pulang"],
[658,"帰る","かえる","Pulang"],
[659,"帰国","きこく","Pulang ke negara"],

// --- Gerakan Tangan/Badan ---
// 持 (Pegang/Bawa)
[388,"持","も","Pegang"],
[389,"持つ","もつ","Membawa"],
// 運 (Angkut)
[428,"運","うん","Nasib/Angkut"],
[429,"運ぶ","はこぶ","Mengangkut"],
[430,"運動","うんどう","Olahraga"],
[431,"運転","うんてん","Setir"],
// 送 (Kirim)
[293,"送","おく","Kirim"],
[294,"送る","おくる","Kirim"],
// 返 (Kembali/Kembalikan)
[565,"返","かえ","Kembali"],
[566,"返事","へんじ","Jawaban"],
[567,"返す","かえす","Kembalikan"],
// 動 (Gerakan)
[586,"動","どう","Gerakan"],
[587,"動かす","うごかす","Menggerakkan"],
[588,"動物","どうぶつ","Hewan"],
// 押 (Tekan)
[596,"押","お","Tekan"],
[597,"押す","おす","Menekan"],
// 洗 (Cuci)
[466,"洗","あら","Cuci"],
[467,"洗う","あらう","Mencuci"],
// 訪 (Kunjungi)
[608,"訪","ほう","Kunjungan"],
[609,"訪問する","ほうもんする","Mengunjungi"],

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 13. PENDIDIKAN
//     Logika: Alur proses (Belajar→Diajar→Ujian→Lulus)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// --- Pasangan: 教↔学 (Mengajar↔Belajar) ---
// 教 (Ajar)
[487,"教","おし","Ajar"],
[488,"教科書","きょうかしょ","Buku pelajaran"],
[489,"教える","おしえる","Mengajar"],
// 学 (Belajar)
[132,"学","まなぶ","Belajar"],
[133,"学生","がくせい","Siswa"],
[134,"学校","がっこう","Sekolah"],
[135,"学習","がくしゅう","Belajar"],
[136,"学ぶ","まなぶ","Belajar"],
[137,"科学者","かがくしゃ","Ilmuwan"],
// 勉 (Rajin/Belajar)
[408,"勉","べん","Rajin"],
[409,"勉強","べんきょう","Belajar"],
// 校 (Sekolah)
[307,"校","こう","Sekolah"],
[308,"校長","こうちょう","Kepala sekolah"],
// 先生 (Guru — dipindah dari 生↔死 ke sini)
[398,"先生","せんせい","Guru"],

// --- Ujian & Lulus (Alur: 試→受→卒) ---
// 試 (Coba/Ujian)
[302,"試","し","Coba"],
[303,"試験","しけん","Ujian"],
[304,"試合","しあい","Pertandingan"],
// 受 (Menerima/Ikut ujian)
[671,"受","じゅ","Menerima"],
[672,"受験する","じゅけんする","Mengikuti ujian"],
// 卒 (Lulus)
[432,"卒","そつ","Lulus"],
[433,"卒業","そつぎょう","Lulus"],
// 宿題 (PR)
[506,"宿題","しゅくだい","PR"],

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 14. BAHASA & KOMUNIKASI
//     Logika: Pasangan lawan (読↔書, 聞↔話, 問↔答)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// --- Pasangan: 読↔書 (Membaca↔Menulis) ---
// 読 (Membaca)
[121,"読","よむ","Membaca"],
[122,"読書","どくしょ","Membaca buku"],
[123,"読む","よむ","Membaca"],
// 書 (Menulis)
[125,"書","かく","Menulis"],
[126,"図書館","としょかん","Perpustakaan"],
[127,"辞書","じしょ","Kamus"],

// --- Pasangan: 聞↔話 (Mendengar↔Berbicara) ---
// 聞 (Dengar)
[644,"聞","きく","Dengar"],
[645,"聞く","きく","Mendengar"],
[646,"聞こえる","きこえる","Terdengar"],
// 話 (Berbicara)
[128,"話","はなす","Berbicara"],
[129,"話す","はなす","Berbicara"],

// --- Pasangan: 問↔答 (Pertanyaan↔Jawaban) ---
// 問 (Pertanyaan)
[401,"問","もん","Pertanyaan"],
[402,"問題","もんだい","Masalah"],
[403,"問い合わせ","といあわせ","Pertanyaan"],
[641,"質問する","しつもんする","Bertanya"],
// 答 (Jawab)
[434,"答","こた","Jawab"],
[435,"答え","こたえ","Jawab"],

// --- Bahasa & Huruf (Umum→Spesifik) ---
// 言 (Kata/Bicara)
[598,"言","げん","Kata/Bicara"],
[599,"言語","げんご","Bahasa"],
// 字 (Huruf)
[150,"字","じ","Huruf"],
[151,"漢字","かんじ","Huruf kanji"],
[152,"数字","すうじ","Angka"],
[153,"名字","みょうじ","Nama keluarga"],
[154,"文字","もじ","Huruf"],
// 句 (Frasa)
[124,"句","く","Frasa"],
// 単 (Tunggal/Sederhana)
[642,"単","たん","Tunggal/Sederhana"],
[643,"単語","たんご","Kosakata"],
// 英 (Inggris)
[470,"英","えい","Inggris/Cemerlang"],
[471,"英語","えいご","Bahasa Inggris"],
// 発 (Pelafalan/Terbit)
[404,"発","はつ","Berangkat/Terbit"],
[405,"発売","はつばい","Jual"],
[406,"発明する","はつめいする","Menemukan"],
[407,"発音","はつおん","Pelafalan"],
// 本 (Buku)
[666,"本","ほん","Buku/Asal"],
[667,"本屋","ほんや","Toko buku"],

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 15. TRANSPORTASI & PERJALANAN
//     Logika: Umum→Spesifik (Jalan→Kendaraan→Tempat transit)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// 道 (Jalan)
[209,"道","みち","Jalan"],
[210,"道具","どうぐ","Alat"],
// 車 (Mobil)
[130,"車","くるま","Mobil"],
[131,"駐車場","ちゅうしゃじょう","Tempat parkir"],
// 自 (Diri sendiri — konteks kendaraan)
[453,"自","じ","Diri sendiri"],
[454,"自分","じぶん","Diri sendiri"],
[455,"自ら","みずから","Diri sendiri"],
[456,"自転車","じてんしゃ","Sepeda"],
[457,"自由","じゅう","Bebas"],
[458,"自動車","じどうしゃ","Mobil"],
[460,"自信","じしん","Percaya diri"],
[459,"自動販売機","じどうはんばいき","Vending machine"],
// 電 (Listrik/Kereta)
[568,"電","でん","Listrik"],
[569,"電話","でんわ","Telepon"],
[570,"電車","でんしゃ","Kereta"],
[571,"電話","てんわ","Telepon"],
[572,"電池","でんち","Baterai"],
[573,"電気","でんき","Listrik"],
[574,"電子レンジ","でんしレンジ","Microwave"],
// 駅 (Stasiun)
[157,"駅","えき","Stasiun"],
[158,"駅員","えきいん","Petugas stasiun"],

// --- Perjalanan ---
// 旅 (Perjalanan)
[211,"旅","たび","Perjalanan"],
[212,"旅行","りょこう","Wisata"],
[213,"旅行する","りょこうする","Wisata"],
[214,"旅館","りょかん","Ryokan"],
[215,"旅費","りょひ","Biaya jalan"],

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 16. TEMPAT & BANGUNAN
//     Logika: Besar→Kecil (Negara→Kota→Desa→Toko→Rumah→Kamar)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// 国 (Negara)
[90,"国","くに","Negara"],
[91,"国会","こっかい","Parlemen"],
[92,"国歌","こっか","Lagu kebangsaan"],
[399,"先進国","せんしんこく","Negara maju"],
// 市 (Kota)
[259,"市","し","Kota"],
// 町 (Kota kecil)
[260,"町","まち","Kota"],
// 村 (Desa)
[261,"村","むら","Desa"],
// 所 (Tempat)
[256,"所","ところ","Tempat"],
[258,"場所","ばしょ","Tempat"],
// 住 (Tinggal)
[415,"住","じゅう","Tinggal"],
[416,"住む","すむ","Tinggal"],
[417,"住所","じゅうしょ","Alamat"],
[418,"住まい","すまい","Tempat tinggal"],
// 店 (Toko)
[255,"店","みせ","Toko"],
// 宿 (Penginapan)
[505,"宿","しゅく","Penginapan"],
// 郵 (Pos)
[330,"郵","ゆう","Pos"],
[331,"郵便局","ゆうびんきょく","Kantor pos"],
// 台所 (Dapur)
[257,"台所","だいどころ","Dapur"],
// 部屋 (Kamar)
[297,"部屋","へや","Kamar"],
// 借 (Pinjam — konteks tempat tinggal)
[681,"借","しゃく","Pinjam"],
[682,"借りる","かりる","Meminjam"],
[683,"借家","しゃくや","Rumah sewaan"],

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 17. WARNA
//     Logika: Spektrum warna (Merah→Biru→Perak→Umum)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// 赤 (Merah)
[184,"赤","あか","Merah"],
[185,"赤い","あかい","Merah"],
[187,"赤外線","せきがいせん","Sinar inframerah"],
// 紅 (Merah tua)
[638,"紅","べに","Merah"],
// 青 (Biru)
[181,"青","あお","Biru"],
[182,"青い","あおい","Biru"],
[183,"青信号","あおしんごう","Lampu hijau"],
// 銀 (Perak)
[216,"銀","ぎん","Perak"],
[217,"銀行","ぎんこう","Bank"],
[218,"銀色","ぎんいろ","Warna perak"],
// 色 (Warna — konsep umum)
[263,"色","いろ","Warna"],

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 18. PEKERJAAN & EKONOMI
//     Logika: Pasangan lawan (売↔買) + Alur (Kerja→Perusahaan→Uang)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// --- Kerja ---
// 働 (Bekerja)
[264,"働","はたら","Bekerja"],
[265,"働く","はたらく","Bekerja"],
// 仕 (Melayani/Pekerjaan)
[668,"仕","し","Melayani"],
[669,"仕事","しごと","Pekerjaan"],
[670,"仕方","しかた","Cara"],
// 職 (Profesi)
[468,"職","しょく","Pekerjaan"],
[469,"職業","しょくぎょう","Profesi"],
// 作 (Membuat)
[537,"作","さく","Membuat"],
[538,"作る","つくる","Membuat"],
[539,"作文","さくぶん","Karangan"],
[540,"作業","さぎょう","Pengerjaan"],

// --- Perusahaan (Besar→Kecil: 会社→部) ---
// 会 (Bertemu/Perusahaan)
[98,"会","あう","Bertemu"],
[99,"会話","かいわ","Percakapan"],
[100,"会社","かいしゃ","Perusahaan"],
[101,"都会","とかい","Kota"],
// 社 (Perusahaan)
[332,"社","しゃ","Perusahaan"],
[333,"社長","しゃちょう","Direktur utama"],
// 部 (Bagian)
[295,"部","ぶ","Bagian"],
[296,"部長","ぶちょう","Kepala bagian"],
// 工 (Pabrik)
[464,"工","こう","Kerajinan/Pabrik"],
[465,"工場","こうじょう","Pabrik"],

// --- Industri ---
// 農 (Pertanian)
[478,"農","のう","Pertanian"],
[479,"農業","のうぎょう","Tani"],
// 産 (Produksi)
[529,"産","さん","Melahirkan/Produksi"],
[530,"産業","さんぎょう","Industri"],

// --- Pasangan: 売↔買 (Jual↔Beli) ---
// 売 (Jual)
[654,"売","う","Jual"],
[655,"売る","うる","Menjual"],
[656,"売店","ばいてん","Toko"],

// --- Uang ---
// 金 (Uang)
[15,"金","かね","Uang"],
[16,"現金","げんきん","Uang tunai"],
[17,"お金","おかね","Uang"],
[19,"お金持ち","おかねもち","Orang kaya"],

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 19. HIBURAN & MEDIA
//     Logika: Umum→Spesifik (Musik→Film→Siaran→Hobi)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// 音 (Suara)
[518,"音","おと","Suara"],
[519,"音楽","おんがく","Musik"],
// 楽 (Senang/Musik)
[580,"楽","たの","Senang"],
[581,"楽しい","たのしい","Menyenangkan"],
[582,"楽な","らくな","Mudah"],
// 歌 (Lagu)
[178,"歌","うた","Lagu"],
[179,"歌う","うたう","Menyanyi"],
[180,"歌手","かしゅ","Penyanyi"],
// 映 (Film/Pantulan)
[560,"映","えい","Pantulan"],
[561,"映画","えいが","Film"],
[562,"映る","うつる","Pantul"],
[563,"映す","うつす","Pantulkan"],
[564,"映画館","えいがかん","Bioskop"],
// 放 (Siaran)
[554,"放","ほう","Melepaskan"],
[555,"放送","ほうそう","Siaran"],
// 写 (Foto)
[610,"写","しゃ","Menyalin/Foto"],
[611,"写真","しゃしん","Foto"],
// 趣味 (Hobi)
[254,"趣味","しゅみ","Hobi"],
// 野球 (Bisbol — olahraga/hiburan)
[414,"野球","やきゅう","Bisbol"],

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 20. PIKIRAN & PERASAAN
//     Logika: Pasangan lawan (好↔嫌) + Umum→Spesifik
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// 思 (Pikir)
[499,"思","おも","Pikir"],
[500,"思う","おもう","Berpikir"],
[501,"思い出す","おもいだす","Teringat"],
[502,"思い出","おもいで","Kenangan"],
// 知 (Tahu)
[288,"知","し","Tahu"],
[289,"知る","しる","Mengetahui"],
[290,"知らせる","しらせる","Memberitahu"],
[291,"知り合い","しりあい","Kenalan"],
[292,"知識","ちしき","Pengetahuan"],
// 好 (Suka)
[533,"好","す","Suka"],
[534,"好きな","すきな","Suka"],
[535,"好み","このみ","Kesukaan"],
// 気 (Semangat/Perasaan)
[549,"気","き","Semangat/Udara"],
[550,"気持ち","きもち","Perasaan"],
// 泣 (Menangis)
[634,"泣","な","Menangis"],
[635,"泣く","なく","Menangis"],

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 21. MELIHAT & PERSEPSI
//     Logika: Umum→Spesifik
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// 見 (Melihat)
[102,"見","みる","Melihat"],
[103,"見学","けんがく","Studi banding"],
[104,"見本","みほん","Contoh"],
[105,"意見","いけん","Pendapat"],
// 意味 (Arti)
[253,"意味","いみ","Arti"],

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 22. TINDAKAN & KEPERLUAN
//     Logika: Pasangan lawan (待↔急, 集↔別, 禁↔自由)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// --- Pasangan: 待↔急 (Tunggu↔Buru-buru) ---
// 待 (Tunggu)
[422,"待","ま","Tunggu"],
[423,"待つ","まつ","Menunggu"],
// 急 (Tiba-tiba/Buru-buru)
[494,"急","きゅう","Tiba-tiba"],
[495,"急に","きゅうに","Tiba-tiba"],
[496,"急ぐ","いそぐ","Buru-buru"],

// --- Pasangan: 集↔別 (Kumpul↔Pisah) ---
// 集 (Kumpul)
[551,"集","しゅう","Kumpul"],
[552,"集める","あつめる","Mengumpulkan"],
[553,"集まる","あつまる","Berkumpul"],
// 別 (Pisah/Lain)
[424,"別","べつ","Lain"],
[425,"別れる","わかれる","Berpisah"],
[426,"別の","べつの","Yang lain"],
[427,"別々に","べつべつに","Pisah-pisah"],

// --- Pasangan: 禁↔許 (Larang — pasangan belum ada) ---
// 禁 (Larang)
[511,"禁","きん","Larangan"],
[512,"禁止する","きんしする","Melarang"],

// --- Gunakan & Keperluan ---
// 使 (Gunakan)
[305,"使","つか","Gunakan"],
[306,"使う","つかう","Gunakan"],
// 用 (Keperluan)
[445,"用","よう","Keperluan"],
[446,"用事","ようじ","Keperluan"],
[447,"用意","ようい","Siap"],
// 利 (Untung/Gunakan)
[594,"利","り","Untung"],
[595,"利用する","りようする","Gunakan"],

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 23. INFORMASI & PENJELASAN
//     Logika: Umum→Spesifik
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// 説 (Penjelasan)
[516,"説","せつ","Penjelasan"],
[517,"説明","せつめい","Penjelasan"],
// 調 (Menyelidiki)
[636,"調","ちょう","Menyelidiki"],
[637,"調子","ちょうし","Kondisi"],
// 質 (Kualitas)
[640,"質","しつ","Kualitas"],
// 理 (Alasan/Logika)
[612,"理","り","Alasan/Logika"],
[613,"理由","りゆう","Alasan"],
// 注 (Perhatian)
[337,"注","ちゅう","Perhatian"],
[338,"注意する","ちゅういする","Memperhatikan"],
[339,"注文する","ちゅうもんする","Memesan"],

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 24. KEHIDUPAN SEHARI-HARI
//     Logika: Alur harian (Istirahat→Pakaian→Mandi→Tidur)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// 休 (Istirahat)
[138,"休","やすむ","Istirahat"],
[139,"休み","やすみ","Hari libur"],
[140,"休む","やすむ","Beristirahat"],
[141,"休日","きゅうじつ","Hari libur"],
[142,"定休日","ていきゅうび","Hari libur tetap"],
// 着 (Pakai/Tiba)
[380,"着","き","Pakai/Tiba"],
[381,"着く","つく","Tiba"],
[382,"着る","きる","Memakai"],
[383,"着物","きもの","Kimono"],
// 浴 (Mandi)
[623,"浴","よく","Mandi"],
[624,"浴びる","あびる","Mandi"],

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 25. KONSEP ABSTRAK & HUBUNGAN
//     Logika: Pasangan lawan (同↔別 sudah di atas) + Umum→Spesifik
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// --- Kepercayaan ---
// 信 (Percaya)
[340,"信","しん","Percaya"],
[341,"信号","しんごう","Lampu lalu lintas"],

// --- Nama & Identitas ---
// 名 (Nama)
[174,"名前","なまえ","Nama"],
// 有 (Ada/Terkenal)
[327,"有","ゆう","Ada"],
[328,"有名な","ゆうめいな","Terkenal"],
[329,"有名","ゆうめい","Terkenal"],

// --- Cara & Metode ---
// 方 (Cara)
[238,"方","かた","Cara"],
[240,"方法","ほうほう","Cara"],

// --- Waktu & Urutan ---
// 最 (Paling)
[321,"最","さい","Paling"],
[322,"最後","さいご","Terakhir"],
[323,"最良","さいりょう","Terbaik"],
// 経 (Pengalaman/Lewat)
[393,"経","けい","Lewat/Pengalaman"],
[394,"経験","けいけん","Pengalaman"],

// --- Khusus & Umum ---
// 特 (Khusus)
[544,"特","とく","Khusus"],
[545,"特別な","とくべつな","Spesial"],
[546,"特に","とくに","Terutama"],
// 同 (Sama)
[531,"同","どう","Sama"],
[532,"同じ","おなじ","Sama"],
// 様 (Keadaan/Tuan)
[558,"様","さま","Tuan/Keadaan"],
[559,"様子","ようす","Keadaan"],

// --- Batas & Kebebasan ---
// 限 (Batas)
[480,"限","げん","Batas"],
[481,"限界","げんかい","Batas"],

// --- Hal & Kejadian ---
// 事 (Hal)
[472,"事","こと","Hal"],
[473,"事故","じこ","Kecelakaan"],
// 間 (Antara)
[159,"間","あいだ","Antara"],
[160,"間に合う","まにあう","Tepat waktu"],
[161,"間違い","まちがい","Kesalahan"],

// --- Dunia & Generasi ---
// 世 (Dunia)
[617,"世","せ","Dunia"],
[618,"世界","せかい","Dunia"],
[619,"世話","せわ","Merawat"],
[620,"世代","せだい","Generasi"],

// --- Benda ---
// 紙 (Kertas)
[262,"紙","かみ","Kertas"],
// 便 (Praktis)
[507,"便","べん","Praktis"],
[508,"便利な","べんりな","Praktis"],
// 野 (Ladang)
[412,"野","の","Ladang"],
];
