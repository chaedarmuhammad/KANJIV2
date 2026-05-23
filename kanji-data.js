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

// --- Daratan (Besar→Kecil): 山→地→田→野→土 ---
// 山 (Gunung)
[1,"山","やま - さん","Gunung"],
[2,"富士山","ふじさん","Gunung Fuji"],
[3,"登山","とざん","Mendaki gunung"],
[7,"火山","かざん","Gunung berapi"],
// 地 (Tanah/Tempat)
[575,"地","つち - ち","Bumi/Tempat"],
[576,"地元","じもと","Lokal"],
[577,"地下","ちか","Bawah tanah"],
[578,"地図","ちず","Peta"],
[579,"地震","じしん","Gempa bumi"],
// 田 (Sawah)
[283,"田","た - でん","Sawah"],
[284,"田舎","いなか","Pedesaan"],
// 野 (Padang/Liar)
[412,"野","の - や","Padang/Liar"],
// 土 (Tanah)
[20,"土","つち - ど","Tanah"],
[22,"土地","とち","Lahan"],
[21,"お土産","おみやげ","Oleh-oleh"],


// --- Perairan (Besar→Kecil): 海→川→池 ---
// 海 (Laut)
[155,"海","うみ - かい","Laut"],
[156,"海外","かいがい","Luar negeri"],
// 川 (Sungai)
[4,"川","かわ - せん","Sungai"],
[5,"川遊び","かわあそび","Bermain di sungai"],
// 池 (Kolam)
[190,"池","いけ - ち","Kolam"],

// --- Elemen Alam (Pasangan lawan): 火↔水 ---
// 火 (Api)
[6,"火","ひ - か","Api"],
[652,"花火","はなび","Kembang api"],
// 水 (Air)
[9,"水","みず - すい","Air"],
[12,"水道","すいどう","Saluran air"],
[10,"水泳","すいえい","Berenang"],

// --- Tumbuhan (Besar→Kecil): 森→林→木→花 ---
// 森 (Hutan lebat)
[144,"森","もり","Hutan lebat"],
[145,"森林","しんりん","Hutan (formal)"],
// 林 (Hutan kecil)
[143,"林","はやし","Hutan kecil"],
// 木 (Pohon)
[13,"木","き - もく","Pohon"],
// 花 (Bunga)
[650,"花","はな - か","Bunga"],
[651,"花見","はなみ","Melihat bunga"],
[653,"花屋","はなや","Toko bunga"],


// --- Langit & Cuaca (Atas→Bawah secara visual): 天→空→風→雲→雪 ---
// 天 (Langit/Surga)
[266,"天","あめ - てん","Langit/Surga"],
[267,"天気","てんき","Cuaca"],
// 空 (Langit)
[223,"空","そら - くう","Langit/Kosong"],
[224,"空気","くうき","Udara"],
[225,"空腹","くうふく","Lapar"],
[226,"空港","くうこう","Bandara"],
// 風 (Angin)
[227,"風","かぜ - ふう","Angin"],
[228,"秋風","あきかぜ","Angin gugur"],
[229,"台風","たいふう","Topan"],
[230,"風呂","ふろ","Bak mandi"],
[231,"風邪","かぜ","Pilek"],
// 曇 (Awan)
[202,"曇","くもり - どん","Mendung"],
// 雪 (Salju)
[203,"雪","ゆき - せつ","Salju"],
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
[600,"季","- き","Musim"],
[601,"季節","きせつ","Musim (periode)"],
// 春 (Semi)
[219,"春","はる - しゅん","Musim semi"],
// 夏 (Panas)
[220,"夏","なつ - か","Musim panas"],
[221,"夏休み","なつやすみ","Libur musim panas"],
// 秋 (Gugur)
[725,"秋","あき - しゅう","Musim gugur"],
// 冬 (Dingin)
[222,"冬","ふゆ - とう","Musim dingin"],

// --- Suhu (Pasangan lawan): 暑↔寒, 暖/温↔冷 ---
// 暑 (Panas cuaca) ↔ 寒 (Dingin cuaca)
[647,"暑","あつ - しょ","Panas (cuaca)"],
[648,"暑い","あつい","Gerah"],
[649,"暑さ","あつさ","Kepanasan"],
[461,"寒","さむ - かん","Dingin (cuaca)"],
[462,"寒い","さむい","Kedinginan"],
[463,"寒さ","さむさ","Rasa dingin"],
// 暖 (Hangat cuaca)
[523,"暖","あたた - だん","Hangat (cuaca)"],
[524,"暖かい","あたたかい","Hangat cuaca (adj)"],
[525,"暖める","あたためる","Menghangatkan"],
// 温 (Hangat benda) ↔ 冷 (Dingin benda)
[474,"温","あたた - おん","Hangat (benda)"],
[475,"温かい","あたたかい","Hangat benda (adj)"],
[476,"温度","おんど","Suhu"],
[477,"温泉","おんせん","Pemandian air panas"],
[629,"冷","つめ - れい","Dingin (benda)"],
[630,"冷たい","つめたい","Dingin saat disentuh"],
[631,"冷える","ひえる","Menjadi dingin"],
[632,"冷やす","ひやす","Mendinginkan"],
[633,"冷蔵庫","れいぞうこ","Kulkas"],


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 3. ANGKA & HITUNGAN
//    Logika: Urutan numerik kecil→besar (1→10000)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// 一 (Satu)
[24,"一","ひと - いち","Satu"],
[25,"一月","いちがつ","Januari"],
[26,"一日中","いちにちじゅう","Seharian"],
[27,"一言","ひとこと","Sepatah kata"],
[28,"一時","いちじ","Jam 1"],
[29,"一週間","いっしゅうかん","Seminggu"],
[30,"一度","いちど","1 kali"],
// 二 (Dua)
[31,"二","ふた - に","Dua"],
// 三 (Tiga)
[32,"三","み - さん","Tiga"],
[33,"三十分","さんじゅっぷん","30 menit"],
// 四 (Empat)
[34,"四","よ - し","Empat"],
[35,"四季","しき","4 musim"],
// 五 (Lima)
[36,"五","いつ - ご","Lima"],
// 六 (Enam)
[37,"六","む - ろく","Enam"],
// 七 (Tujuh)
[38,"七","なな - しち","Tujuh"],
// 八 (Delapan)
[39,"八","や - はち","Delapan"],
// 九 (Sembilan)
[40,"九","ここの - きゅう","Sembilan"],
// 十 (Sepuluh)
[41,"十","とお - じゅう","Sepuluh"],
// 百 (Seratus)
[42,"百","もも - ひゃく","Seratus"],
// 千 (Seribu)
[43,"千","ち - せん","Seribu"],
// 万 (Sepuluh ribu)
[44,"万","よろず - まん","Sepuluh ribu"],

// --- Hitungan & Ukuran ---
// 分 (Menit/Bagian)
[88,"分","わ - ぶん","Bagian/Menit"],
[89,"半分","はんぶん","Setengah"],
// 番 (Nomor/Giliran)
[556,"番","- ばん","Nomor/Giliran"],
[557,"番号","ばんごう","Nomor urut"],


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 4. WAKTU & KALENDER
//    Logika: Besar→Kecil (Tahun→Bulan→Minggu→Hari→Jam)
//            + Kronologis (Pagi→Siang→Sore→Malam)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// --- Skala Waktu (Besar→Kecil): 年→月→日→時 ---
// 年 (Tahun)
[93,"年","とし - ねん","Tahun"],
[94,"去年","きょねん","Tahun lalu"],
[198,"今年","ことし","Tahun ini"],
[370,"毎年","まいとし","Setiap tahun"],
// 月 (Bulan)
[56,"月","つき - げつ","Bulan"],
[197,"今月","こんげつ","Bulan ini"],
[367,"毎月","まいつき","Setiap bulan"],
// 日 (Hari/Matahari)
[372,"日","ひ - にち","Hari/Matahari"],
[376,"日光","にっこう","Sinar matahari"],
[374,"日本人","にほんじん","Orang Jepang"],
[375,"日本語","にほんご","Bahasa Jepang"],
[368,"毎日","まいにち","Setiap hari"],
// 時 (Waktu/Jam)
[482,"時","とき - じ","Waktu/Jam"],
[483,"時間","じかん","Durasi waktu"],
[484,"時々","ときどき","Kadang-kadang"],
[485,"時計","とけい","Jam (alat)"],
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
[232,"朝","あさ - ちょう","Pagi"],
[233,"朝ごはん","あさごはん","Sarapan"],
// 午 (Siang) + 午前↔午後
[490,"午","- ご","Tengah hari"],
[491,"午前","ごぜん","Pagi/AM"],
[492,"午前中","ごぜんちゅう","Sepanjang pagi"],
[493,"午後","ごご","Sore/PM"],
// 昼 (Siang)
[234,"昼","ひる - ちゅう","Siang hari"],
[235,"昼休み","ひるやすみ","Istirahat siang"],
// 夕 (Sore)
[239,"夕方","ゆうがた","Sore hari"],
// 夜 (Malam)
[236,"夜","よる - や","Malam"],
[200,"今夜","こんや","Malam ini"],
[237,"真夜中","まよなか","Tengah malam"],
// 晩 (Malam)
[497,"晩","- ばん","Malam (waktu makan)"],
[498,"晩ご飯","ばんごはん","Makan malam"],
[369,"毎晩","まいばん","Setiap malam"],


// --- Relatif Waktu ---
// 今 (Sekarang)
[196,"今","いま - こん","Sekarang"],
[199,"今週","こんしゅう","Minggu ini"],
[201,"今度","こんど","Lain kali"],
// 毎 (Setiap)
[366,"毎","- まい","Setiap"],
[371,"毎週","まいしゅう","Setiap minggu"],
// 明 (Besok/Terang) — aspek waktu
[318,"明日","あした","Besok"],
[320,"明後日","あさって","Lusa"],
// 先 (Duluan/Sebelumnya) ↔ 来 (Akan datang)
[397,"先","さき - せん","Duluan/Ujung"],
[400,"先週","せんしゅう","Minggu lalu"],
[108,"来","く - らい","Datang/Akan"],
[109,"来月","らいげつ","Bulan depan"],
[110,"来年","らいねん","Tahun depan"],
[111,"来週","らいしゅう","Minggu depan"],
[112,"未来","みらい","Masa depan"],
// 過 (Lewat/Masa lalu)
[348,"過","す - か","Lewat/Berlebihan"],
[349,"過去","かこ","Masa lalu"],



// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 5. ARAH & POSISI
//    Logika: Pasangan lawan arti berdekatan
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// --- Vertikal: 上↔下 ---
// 上 (Atas)
[58,"上","うえ - じょう","Atas"],
[59,"以上","いじょう","Lebih dari"],
// 下 (Bawah)
[60,"下","した - か","Bawah"],
[61,"下手","へた","Tidak pandai"],
[62,"以下","いか","Kurang dari"],

// --- Horizontal: 左↔右 ---
// 左 (Kiri)
[63,"左","ひだり - さ","Kiri"],
[64,"左手","ひだりて","Tangan kiri"],
// 右 (Kanan)
[65,"右","みぎ - う","Kanan"],
[66,"右手","みぎて","Tangan kanan"],

// --- Pusat: 中 ---
// 中 (Tengah)
[67,"中","なか - ちゅう","Tengah/Dalam"],
[68,"中国","ちゅうごく","China"],
[69,"中南米","ちゅうなんべい","Amerika Latin"],
[70,"真ん中","まんなか","Tepat di tengah"],

// --- Kompas: 東↔西, 南↔北 ---
// 東 (Timur) ↔ 西 (Barat)
[162,"東","ひがし - とう","Timur"],
[163,"東口","ひがしぐち","Pintu timur"],
[164,"東京","とうきょう","Tokyo"],
[165,"東洋","とうよう","Dunia timur"],
[166,"西","にし - せい","Barat"],
[167,"西口","にしぐち","Pintu barat"],
[168,"西洋","せいよう","Dunia barat"],
// 南 (Selatan) ↔ 北 (Utara)
[169,"南","みなみ - なん","Selatan"],
[170,"南口","みなみぐち","Pintu selatan"],
[171,"北","きた - ほく","Utara"],
[172,"北口","きたぐち","Pintu utara"],


// --- Relatif Posisi: 前↔後, 外↔内, 近↔遠 ---
// 前 (Depan) ↔ 後 (Belakang)
[173,"前","まえ - ぜん","Depan/Sebelum"],
[541,"後","あと - ご","Belakang/Setelah"],
[542,"後ろ","うしろ","Di belakang"],
[543,"後で","あとで","Nanti"],
// 外 (Luar) ↔ 内 (Dalam)
[175,"外","そと - がい","Luar"],
[176,"外国","がいこく","Luar negeri"],
[177,"外国語","がいこくご","Bahasa asing"],
[246,"内","うち - ない","Dalam"],
[247,"内科","ないか","Penyakit dalam"],
// 近 (Dekat) ↔ 遠 (Jauh)
[298,"近","ちか - きん","Dekat"],
[299,"近い","ちかい","Dekat (adj)"],
[300,"近く","ちかく","Di sekitar"],
[301,"近所","きんじょ","Tetangga"],
[660,"遠","とお - えん","Jauh"],
[661,"遠い","とおい","Jauh (adj)"],
[662,"遠く","とおく","Di kejauhan"],

// --- 間 (Antara) ---
[159,"間","あいだ - かん","Antara/Jarak"],
[160,"間に合う","まにあう","Tepat waktu"],
[161,"間違い","まちがい","Kesalahan"],

// --- 方 (Arah/Cara) ---
[238,"方","かた - ほう","Cara/Arah"],
[240,"方法","ほうほう","Metode"],



// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 6. UKURAN & SIFAT FISIK
//    Logika: Pasangan lawan arti berdekatan
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// --- 大↔小 (Besar↔Kecil) ---
// 大 (Besar)
[71,"大","おお - だい","Besar"],
[72,"大人","おとな","Dewasa"],
[73,"大学","だいがく","Universitas"],
[74,"大体","だいたい","Kira-kira"],
[75,"大きい","おおきい","Besar (adj)"],
[76,"大丈夫","だいじょうぶ","Tidak apa-apa"],
[77,"大切な","たいせつな","Penting (berharga)"],
[78,"大変な","たいへんな","Sangat/Berat"],
[80,"大使館","たいしかん","Kedutaan"],
[81,"大事な","だいじな","Penting (serius)"],
// 小 (Kecil)
[82,"小","こ - しょう","Kecil"],
[83,"小さい","ちいさい","Kecil (adj)"],
[84,"小学生","しょうがくせい","Murid SD"],

// --- 太 (Gemuk/Tebal) ---
[268,"太","ふと - たい","Gemuk/Tebal"],

// --- 高↔低 (Tinggi↔Rendah) ---
// 高 (Tinggi)
[526,"高","たか - こう","Tinggi/Mahal"],
[527,"高い","たかい","Tinggi/Mahal (adj)"],
[528,"高校","こうこう","SMA"],
// 低 (Rendah)
[363,"低","ひく - てい","Rendah"],
[364,"低い","ひくい","Rendah (adj)"],
[365,"低温","ていおん","Suhu rendah"],

// --- 長↔短 (Panjang↔Pendek) ---
// 長 (Panjang)
[334,"長","なが - ちょう","Panjang"],
[335,"長男","ちょうなん","Anak sulung laki-laki"],
[336,"長い","ながい","Panjang (adj)"],
// 短 (Pendek)
[688,"短","みじか - たん","Pendek"],
[689,"短い","みじかい","Pendek (adj)"],
[690,"短所","たんしょ","Kekurangan"],
[691,"短期","たんき","Jangka pendek"],


// --- 広↔狭 (Luas↔Sempit) ---
// 広 (Luas)
[625,"広","ひろ - こう","Luas"],
[626,"広い","ひろい","Luas (adj)"],
[627,"広さ","ひろさ","Keluasan"],
[628,"広島","ひろしま","Hiroshima"],
// 狭 (Sempit)
[692,"狭","せま - きょう","Sempit"],
[693,"狭い","せまい","Sempit (adj)"],
[694,"狭さ","せまさ","Kesempitan"],

// --- 多↔少 (Banyak↔Sedikit) ---
// 多 (Banyak)
[285,"多","おお - た","Banyak"],
[286,"多い","おおい","Banyak (adj)"],
[287,"多分","たぶん","Mungkin"],
// 少 (Sedikit)
[377,"少","すこ - しょう","Sedikit"],
[378,"少し","すこし","Sedikit (adv)"],
[379,"少ない","すくない","Sedikit (adj)"],

// --- 重↔軽 (Berat↔Ringan) ---
// 重 (Berat)
[448,"重","おも - じゅう","Berat"],
[449,"重い","おもい","Berat (adj)"],
[450,"重要な","じゅうような","Penting (krusial)"],
// 軽 (Ringan)
[443,"軽","かる - けい","Ringan"],
[444,"軽い","かるい","Ringan (adj)"],

// --- 新↔古 (Baru↔Lama) ---
// 新 (Baru)
[621,"新","あたら - しん","Baru"],
[622,"新聞","しんぶん","Koran"],
// 古 (Lama)
[547,"古","ふる - こ","Lama/Kuno"],
[548,"古い","ふるい","Tua/Usang (adj)"],

// --- 早↔遅 (Cepat↔Lambat) ---
[451,"早","はや - そう","Cepat/Pagi"],
[452,"早い","はやい","Cepat/Pagi (adj)"],
// 遅 (Lambat)
[695,"遅","おそ - ち","Lambat/Terlambat"],
[696,"遅い","おそい","Lambat (adj)"],
[697,"遅れる","おくれる","Terlambat"],
[698,"遅刻する","ちこくする","Terlambat (formal)"],

// --- Derajat & Batas ---
// 最 (Paling)
[321,"最","もっと - さい","Paling"],
[322,"最後","さいご","Terakhir"],
[323,"最良","さいりょう","Terbaik"],
// 限 (Batas)
[480,"限","かぎ - げん","Batas"],
[481,"限界","げんかい","Batas kemampuan"],



// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 7. SIFAT & KEADAAN
//    Logika: Pasangan lawan arti + Umum→Spesifik
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// --- 明↔暗 (Terang↔Gelap) ---
// 明 (Terang)
[316,"明","あか - めい","Terang/Jelas"],
[317,"明るい","あかるい","Terang/Ceria (adj)"],
[319,"明らか","あきらか","Jelas/Nyata"],
// 暗 (Gelap)
[709,"暗","くら - あん","Gelap"],
[710,"暗い","くらい","Gelap (adj)"],
[711,"暗記する","あんきする","Menghafal"],

// --- 良↔悪 (Baik↔Buruk) ---
// 悪 (Buruk)
[345,"悪","わる - あく","Buruk/Jahat"],
[346,"悪い","わるい","Buruk (adj)"],
[347,"悪口","わるくち","Gunjingan"],

// --- 正↔変 (Benar/Normal↔Aneh/Berubah) ---
// 正 (Benar)
[324,"正","ただ - せい","Benar/Tepat"],
[325,"お正月","おしょうがつ","Tahun baru"],
[326,"正しい","ただしい","Benar (adj)"],
// 変 (Aneh/Berubah)
[352,"変","か - へん","Aneh/Berubah"],
[353,"変わる","かわる","Berubah (intransitif)"],
[354,"変える","かえる","Mengubah (transitif)"],
[355,"変な","へんな","Aneh (adj)"],
[356,"変化する","へんかする","Berubah (formal)"],

// --- 安 (Murah/Aman) ↔ 不 (Tidak/Negatif) ---
// 安 (Murah/Aman)
[359,"安","やす - あん","Murah/Aman"],
[360,"安い","やすい","Murah (adj)"],
[361,"安心する","あんしんする","Merasa lega"],
[362,"安全な","あんぜんな","Aman (adj)"],
// 不 (Tidak — negasi)
[390,"不","- ふ","Tidak/Ketiadaan"],
[391,"不安な","ふあんな","Cemas (adj)"],
[392,"不便な","ふべんな","Tidak praktis (adj)"],

// --- 便 (Praktis) ---
[507,"便","たよ - べん","Praktis/Surat"],
[508,"便利な","べんりな","Praktis (adj)"],

// --- 光 (Cahaya) ---
[357,"光","ひかり - こう","Cahaya"],
[358,"光る","ひかる","Bersinar"],

// --- 特 (Khusus) ---
[544,"特","- とく","Khusus/Istimewa"],
[545,"特別な","とくべつな","Spesial"],
[546,"特に","とくに","Terutama"],

// --- 様 (Keadaan/Tuan) ---
[558,"様","さま - よう","Tuan/Keadaan"],
[559,"様子","ようす","Keadaan/Situasi"],

// --- 有 (Ada/Memiliki) ---
[327,"有","あ - ゆう","Ada/Memiliki"],
[328,"有名な","ゆうめいな","Terkenal (adj)"],



// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 8. TUBUH MANUSIA
//    Logika: Atas→Bawah (Kepala→Kaki)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// 頭 (Kepala)
[241,"頭","あたま - とう","Kepala"],
[242,"頭痛","ずつう","Sakit kepala"],
// 顔 (Wajah)
[243,"顔","かお - がん","Wajah"],
[244,"笑顔","えがお","Wajah tersenyum"],
// 目 (Mata)
[47,"目","め - もく","Mata"],
[48,"目薬","めぐすり","Obat tetes mata"],
// 耳 (Telinga)
[49,"耳","みみ - じ","Telinga"],
// 口 (Mulut)
[45,"口","くち - こう","Mulut"],
// 声 (Suara)
[245,"声","こえ - せい","Suara"],
// 首 (Leher)
[205,"首","くび - しゅ","Leher"],
// 背 (Punggung)
[207,"背","せ - はい","Punggung/Tinggi badan"],
[208,"背中","せなか","Punggung (area)"],
// 体 (Badan)
[146,"体","からだ - たい","Tubuh"],
[147,"体操","たいそう","Senam"],
[148,"体験","たいけん","Pengalaman langsung"],
[149,"体重","たいじゅう","Berat badan"],
// 腹 (Perut)
[440,"腹","はら - ふく","Perut"],
[441,"お腹","おなか","Perut (sopan)"],
[442,"腹が立つ","はらがたつ","Kesal/Marah"],
// 手 (Tangan)
[50,"手","て - しゅ","Tangan"],
[51,"お手洗い","おてあらい","Toilet"],
[52,"手紙","てがみ","Surat"],
// 指 (Jari)
[206,"指","ゆび - し","Jari"],
// 足 (Kaki)
[53,"足","あし - そく","Kaki"],
[54,"足首","あしくび","Pergelangan kaki"],
// 力 (Tenaga)
[55,"力","ちから - りょく","Kekuatan"],



// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 9. KESEHATAN
//    Logika: Alur proses (Sakit→Dokter→Obat→Sembuh)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// 病 (Sakit)
[313,"病","やまい - びょう","Penyakit"],
[314,"病気","びょうき","Sakit (kondisi)"],
[315,"病院","びょういん","Rumah sakit"],
// 痛 (Nyeri)
[614,"痛","いた - つう","Nyeri/Sakit"],
[615,"痛い","いたい","Sakit (adj)"],
[616,"痛む","いたむ","Terasa nyeri"],
// 熱 (Demam/Panas)
[194,"熱","あつ - ねつ","Demam/Panas"],
[195,"熱い","あつい","Panas benda (adj)"],
// 医 (Dokter)
[520,"医","- い","Medis/Kedokteran"],
[521,"医者","いしゃ","Dokter"],
[522,"医学","いがく","Ilmu kedokteran"],
// 薬 (Obat)
[188,"薬","くすり - やく","Obat"],
[189,"薬屋","くすりや","Toko obat"],
// 元 (Sehat/Asal — hasil sembuh)
[272,"元","もと - げん","Asal/Dasar"],
[273,"元気な","げんきな","Sehat (adj)"],
[274,"元日","がんじつ","Hari tahun baru"],



// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 10. ORANG & KELUARGA
//     Logika: Umum→Spesifik + Pasangan lawan (男↔女, 兄↔弟)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// --- Umum ---
// 人 (Orang)
[85,"人","ひと - じん","Orang"],
[86,"人口","じんこう","Populasi"],
[87,"人間","にんげん","Manusia"],
// 私 (Saya)
[248,"私","わたし - し","Saya/Pribadi"],

// --- Pasangan Lawan: 男↔女 ---
// 男 (Laki-laki)
[589,"男","おとこ - だん","Laki-laki"],
[590,"男の子","おとこのこ","Anak laki-laki"],
[591,"男性","だんせい","Pria (formal)"],
[592,"男の人","おとこのひと","Orang laki-laki"],
[593,"男子学生","だんしがくせい","Mahasiswa pria"],
// 女 (Perempuan)
[311,"女","おんな - じょ","Perempuan"],
[312,"女子","じょし","Wanita (formal)"],

// --- Pasangan Lawan: 若↔老 (Muda↔Tua) ---
// 若 (Muda)
[309,"若","わか - じゃく","Muda"],
[310,"若者","わかもの","Anak muda"],
// 老 (Tua)
[699,"老","おい - ろう","Tua/Uzur"],
[700,"老人","ろうじん","Lansia"],
[701,"老後","ろうご","Masa tua"],

// --- Siklus Hidup: 生↔死 ---
// 生 (Hidup)
[95,"生","い - せい","Hidup/Lahir"],
[96,"生活","せいかつ","Kehidupan"],
[97,"生産する","せいさんする","Memproduksi"],
// 死 (Mati)
[410,"死","し - し","Kematian"],
[411,"死ぬ","しぬ","Mati (v)"],


// --- Keluarga (Pasangan: 兄↔弟, 姉↔妹) ---
// 兄 (Kakak laki) ↔ 弟 (Adik laki)
[249,"兄","あに - けい","Kakak laki-laki"],
[250,"弟","おとうと - てい","Adik laki-laki"],
// 姉 (Kakak perempuan) ↔ 妹 (Adik perempuan)
[191,"姉","あね - し","Kakak perempuan"],
[192,"姉妹","しまい","Saudara perempuan"],
[193,"妹","いもうと - まい","Adik perempuan"],
// 妻 (Istri)
[251,"妻","つま - さい","Istri"],
// 夫 (Suami)
[702,"夫","おっと - ふ","Suami"],
[703,"夫婦","ふうふ","Pasangan suami istri"],
[704,"夫人","ふじん","Nyonya"],

// --- Rumah & Keluarga ---
// 家 (Rumah/Keluarga)
[513,"家","いえ - か","Rumah/Keluarga"],
[514,"家族","かぞく","Keluarga"],
[515,"家事","かじ","Pekerjaan rumah tangga"],

// --- Hubungan ---
[619,"世話","せわ","Merawat/Mengurus"],



// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 11. MAKANAN & MINUMAN
//     Logika: Alur proses (Bahan→Masak→Makan→Minum)
//             + Pasangan lawan: 食↔飲
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// --- Bahan ---
// 米 (Beras)
[113,"米","こめ - べい","Beras"],
[114,"米国","べいこく","Amerika"],
// 野菜 (Sayur)
[413,"野菜","やさい","Sayur-mayur"],
// 飯 (Nasi)
[503,"飯","めし - はん","Nasi/Makan"],
[504,"ご飯","ごはん","Nasi/Makanan"],

// --- Memasak ---
// 料 (Bahan/Biaya)
[663,"料","- りょう","Bahan/Biaya"],
[664,"料理","りょうり","Masakan"],
[665,"料金","りょうきん","Tarif/Biaya"],
[536,"お好み焼き","おこのみやき","Okonomiyaki"],
// 味 (Rasa)
[252,"味","あじ - み","Rasa"],

// --- Pasangan: 食↔飲 (Makan↔Minum) ---
// 食 (Makan)
[118,"食","た - しょく","Makan"],
[119,"食事","しょくじ","Makan (kegiatan)"],
[120,"食堂","しょくどう","Kantin"],
// 飲 (Minum)
[115,"飲","の - いん","Minum"],
[116,"飲酒","いんしゅ","Minum alkohol"],
[117,"飲料水","いんりょうすい","Air minum"],

// --- Minuman ---
// 茶 (Teh)
[509,"茶","- ちゃ","Teh"],
[510,"お茶","おちゃ","Teh hijau"],
[639,"紅茶","こうちゃ","Teh hitam"],



// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 12. AKTIVITAS & PERPINDAHAN
//     Logika: Pasangan lawan arti + Alur proses perjalanan
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// --- Pasangan Lawan: 行↔来 (Pergi↔Datang) ---
// 行 (Pergi)
[106,"行","い - こう","Pergi/Baris"],
[107,"行動する","こうどうする","Bertindak"],

// --- Pasangan Lawan: 出↔入 (Keluar↔Masuk) ---
// 出 (Keluar)
[605,"出","で - しゅつ","Keluar"],
[606,"出口","でぐち","Pintu keluar"],
[607,"出発する","しゅっぱつする","Berangkat"],
// 入 (Masuk)
[46,"入口","いりぐち","Pintu masuk"],

// --- Pasangan Lawan: 開↔閉 (Buka↔Tutup) ---
// 開 (Buka)
[673,"開","あ - かい","Buka/Membuka"],
[674,"開く","あく","Terbuka (intransitif)"],
[675,"開ける","あける","Membuka (transitif)"],
[676,"開店","かいてん","Buka toko"],
[677,"開始","かいし","Dimulai"],
// 閉 (Tutup)
[436,"閉","し - へい","Tutup/Menutup"],
[437,"閉まる","しまる","Tertutup (intransitif)"],
[438,"閉める","しめる","Menutup (transitif)"],
[439,"閉店","へいてん","Tutup toko"],

// --- Pasangan Lawan: 始↔終 (Mulai↔Selesai) ---
// 始 (Mulai)
[583,"始","はじ - し","Awal/Mulai"],
[584,"始める","はじめる","Memulai (transitif)"],
[585,"始まる","はじまる","Dimulai (intransitif)"],
// 終 (Selesai)
[342,"終","お - しゅう","Akhir/Selesai"],
[343,"終わり","おわり","Akhir (noun)"],
[344,"終わる","おわる","Berakhir"],

// --- Pasangan Lawan: 進↔止 (Maju↔Berhenti) ---
// 進 (Maju)
[386,"進","すす - しん","Maju"],
[387,"進む","すすむ","Maju (v)"],
// 止 (Berhenti)
[602,"止","と - し","Berhenti"],
[603,"止める","とめる","Menghentikan"],
[604,"止む","やむ","Mereda"],


// --- Pasangan Lawan: 乗↔降 (Naik↔Turun) ---
// 乗 (Naik)
[419,"乗","の - じょう","Naik (kendaraan)"],
[420,"乗る","のる","Menaiki"],
[421,"乗客","じょうきゃく","Penumpang"],
// 降 (Turun)
[276,"降","お/ふ - こう","Turun"],
[277,"降りる","おりる","Turun (dari kendaraan)"],
[278,"降る","ふる","Turun (hujan/salju)"],

// --- Alur Proses Perjalanan: 起→歩→散→走→通→到→帰 ---
// 起 (Bangun)
[678,"起","お - き","Bangun/Terjadi"],
[679,"起きる","おきる","Bangun tidur"],
[680,"起こる","おこる","Terjadi"],
// 歩 (Berjalan)
[270,"歩","ある - ほ","Berjalan"],
[271,"歩く","あるく","Berjalan (v)"],
// 散 (Jalan-jalan)
[384,"散","ち - さん","Menyebar"],
[385,"散歩する","さんぽする","Jalan-jalan"],
// 走 (Berlari)
[395,"走","はし - そう","Berlari"],
[396,"走る","はしる","Berlari (v)"],
// 通 (Lewat)
[279,"通","とお - つう","Lewat/Melintas"],
[280,"通る","とおる","Melewati"],
[281,"通う","かよう","Bolak-balik"],
[282,"通学する","つうがくする","Pergi ke sekolah"],
// 到 (Sampai)
[350,"到","- とう","Tiba/Sampai"],
[351,"到着","とうちゃく","Kedatangan"],
// 帰 (Pulang)
[657,"帰","かえ - き","Pulang"],
[658,"帰る","かえる","Pulang (v)"],
[659,"帰国","きこく","Pulang ke negara asal"],



// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 13. GERAKAN TANGAN & BADAN
//     Logika: Pasangan lawan (押↔引) + Alur proses (持→運→送→届→返)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// --- Alur: 持→運→送→届→返 (Pegang→Angkut→Kirim→Sampai→Kembali) ---
// 持 (Pegang/Bawa)
[388,"持","も - じ","Memegang/Membawa"],
[389,"持つ","もつ","Memegang (v)"],
// 運 (Angkut)
[428,"運","はこ - うん","Mengangkut/Nasib"],
[429,"運ぶ","はこぶ","Mengangkut"],
[430,"運動","うんどう","Olahraga"],
[431,"運転","うんてん","Mengemudi"],
// 送 (Kirim)
[293,"送","おく - そう","Mengirim"],
[294,"送る","おくる","Mengirim (v)"],
// 届 (Sampai/Terkirim)
[716,"届","とど - かい","Menyampaikan"],
[717,"届く","とどく","Sampai/Terkirim"],
[718,"届ける","とどける","Mengantarkan"],
[719,"届け","とどけ","Laporan/Pemberitahuan"],
// 返 (Kembali/Kembalikan)
[565,"返","かえ - へん","Mengembalikan"],
[566,"返事","へんじ","Balasan"],
[567,"返す","かえす","Mengembalikan (v)"],

// --- Pasangan Lawan: 押↔引 (Tekan↔Tarik) ---
// 押 (Tekan)
[596,"押","お - おう","Menekan/Mendorong"],
[597,"押す","おす","Menekan (v)"],
// 引 (Tarik)
[720,"引","ひ - いん","Menarik"],
[721,"引く","ひく","Menarik (v)"],
[722,"引き出し","ひきだし","Laci"],
[723,"引っ越す","ひっこす","Pindah rumah"],
[724,"引っ越し","ひっこし","Pindahan"],

// --- Gerakan Lain ---
// 動 (Gerakan)
[586,"動","うご - どう","Bergerak"],
[587,"動かす","うごかす","Menggerakkan"],
// 動物 — tetap mengikuti induk 動 meskipun makna berbeda
[588,"動物","どうぶつ","Hewan"],
// 洗 (Cuci)
[466,"洗","あら - せん","Mencuci"],
[467,"洗う","あらう","Mencuci (v)"],
// 訪 (Kunjungi)
[608,"訪","おとず - ほう","Mengunjungi"],
[609,"訪問する","ほうもんする","Berkunjung (formal)"],



// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 14. PENDIDIKAN
//     Logika: Alur proses (Belajar→Diajar→Ujian→Lulus)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// --- Pasangan: 教↔学 (Mengajar↔Belajar) ---
// 教 (Ajar)
[487,"教","おし - きょう","Mengajar"],
[488,"教科書","きょうかしょ","Buku pelajaran"],
[489,"教える","おしえる","Mengajar (v)"],
// 学 (Belajar)
[132,"学","まな - がく","Belajar/Ilmu"],
[133,"学生","がくせい","Siswa"],
[134,"学校","がっこう","Sekolah"],
[135,"学習","がくしゅう","Pembelajaran"],
[136,"学ぶ","まなぶ","Mempelajari"],
[137,"科学者","かがくしゃ","Ilmuwan"],
// 勉 (Rajin/Belajar)
[408,"勉","- べん","Rajin/Tekun"],
[409,"勉強","べんきょう","Belajar (kegiatan)"],
// 校 (Sekolah)
[307,"校","- こう","Sekolah (institusi)"],
[308,"校長","こうちょう","Kepala sekolah"],
// 先生 (Guru — dipindah dari 生↔死 ke sini)
[398,"先生","せんせい","Guru"],

// --- Ujian & Lulus (Alur: 試→受→卒) ---
// 試 (Coba/Ujian)
[302,"試","ため - し","Mencoba/Ujian"],
[303,"試験","しけん","Ujian"],
[304,"試合","しあい","Pertandingan"],
// 受 (Menerima/Ikut ujian)
[671,"受","う - じゅ","Menerima"],
[672,"受験する","じゅけんする","Mengikuti ujian"],
// 卒 (Lulus)
[432,"卒","- そつ","Lulus/Tamat"],
[433,"卒業","そつぎょう","Kelulusan"],
// 宿題 (PR)
[506,"宿題","しゅくだい","Pekerjaan rumah (PR)"],



// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 15. BAHASA & KOMUNIKASI
//     Logika: Pasangan lawan (読↔書, 聞↔話, 問↔答)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// --- Pasangan: 読↔書 (Membaca↔Menulis) ---
// 読 (Membaca)
[121,"読","よ - どく","Membaca"],
[122,"読書","どくしょ","Membaca buku"],
[123,"読む","よむ","Membaca (v)"],
// 書 (Menulis)
[125,"書","か - しょ","Menulis/Tulisan"],
[126,"図書館","としょかん","Perpustakaan"],
[127,"辞書","じしょ","Kamus"],
// 紙 (Kertas)
[262,"紙","かみ - し","Kertas"],
// 本 (Buku)
[666,"本","もと - ほん","Buku/Asal"],
[667,"本屋","ほんや","Toko buku"],

// --- Pasangan: 聞↔話 (Mendengar↔Berbicara) ---
// 聞 (Dengar)
[644,"聞","き - ぶん","Mendengar"],
[645,"聞く","きく","Mendengar (v)"],
[646,"聞こえる","きこえる","Terdengar"],
// 話 (Berbicara)
[128,"話","はなし - わ","Berbicara/Cerita"],
[129,"話す","はなす","Berbicara (v)"],

// --- Pasangan: 問↔答 (Pertanyaan↔Jawaban) ---
// 問 (Pertanyaan)
[401,"問","と - もん","Pertanyaan"],
[402,"問題","もんだい","Masalah/Soal"],
[403,"問い合わせ","といあわせ","Penanyaan/Inquiry"],
[641,"質問する","しつもんする","Bertanya"],
// 答 (Jawab)
[434,"答","こた - とう","Jawaban"],
[435,"答え","こたえ","Jawaban (noun)"],


// --- Bahasa & Huruf (Umum→Spesifik) ---
// 言 (Kata/Bicara)
[598,"言","い - げん","Kata/Ucapan"],
[599,"言語","げんご","Bahasa"],
// 意味 (Arti)
[253,"意味","いみ","Arti/Makna"],
// 字 (Huruf)
[150,"字","あざ - じ","Huruf/Karakter"],
[151,"漢字","かんじ","Huruf kanji"],
[152,"数字","すうじ","Angka (karakter)"],
[153,"名字","みょうじ","Nama keluarga"],
[154,"文字","もじ","Huruf/Aksara"],
// 句 (Frasa)
[124,"句","- く","Frasa/Kalimat"],
// 単 (Tunggal/Sederhana)
[642,"単","- たん","Tunggal/Sederhana"],
[643,"単語","たんご","Kosakata"],
// 英 (Inggris)
[470,"英","- えい","Inggris/Cemerlang"],
[471,"英語","えいご","Bahasa Inggris"],
// 発 (Pelafalan/Terbit)
[404,"発","- はつ","Terbit/Berangkat"],
[407,"発音","はつおん","Pelafalan"],

// --- 名 (Nama) ---
[174,"名前","なまえ","Nama"],

// --- 信 (Kepercayaan/Sinyal) ---
[340,"信","- しん","Kepercayaan"],
[341,"信号","しんごう","Lampu lalu lintas"],



// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 16. TRANSPORTASI & PERJALANAN
//     Logika: Umum→Spesifik (Jalan→Kendaraan→Tempat transit)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// 道 (Jalan)
[209,"道","みち - どう","Jalan"],
[210,"道具","どうぐ","Alat/Perkakas"],
// 車 (Mobil)
[130,"車","くるま - しゃ","Mobil/Kendaraan"],
[131,"駐車場","ちゅうしゃじょう","Tempat parkir"],
// 自 (Diri sendiri — konteks kendaraan)
[453,"自","みずか - じ","Diri sendiri"],
[456,"自転車","じてんしゃ","Sepeda"],
[458,"自動車","じどうしゃ","Mobil (formal)"],
[459,"自動販売機","じどうはんばいき","Mesin penjual otomatis"],
// 電 (Listrik/Kereta)
[568,"電","- でん","Listrik"],
[569,"電話","でんわ","Telepon"],
[570,"電車","でんしゃ","Kereta listrik"],
[572,"電池","でんち","Baterai"],
[573,"電気","でんき","Listrik (energi)"],
[574,"電子レンジ","でんしレンジ","Microwave"],
// 駅 (Stasiun)
[157,"駅","- えき","Stasiun"],
[158,"駅員","えきいん","Petugas stasiun"],

// --- Perjalanan ---
// 旅 (Perjalanan)
[211,"旅","たび - りょ","Perjalanan"],
[212,"旅行","りょこう","Wisata"],
[213,"旅行する","りょこうする","Berwisata"],
[214,"旅館","りょかん","Penginapan Jepang"],
[215,"旅費","りょひ","Biaya perjalanan"],

// --- Kecelakaan ---
[473,"事故","じこ","Kecelakaan"],



// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 17. TEMPAT & BANGUNAN
//     Logika: Besar→Kecil (Dunia→Negara→Kota→Desa→Toko→Rumah→Kamar)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// --- 世 (Dunia) ---
[617,"世","よ - せ","Dunia/Generasi"],
[618,"世界","せかい","Dunia"],
[620,"世代","せだい","Generasi"],

// 国 (Negara)
[90,"国","くに - こく","Negara"],
[91,"国会","こっかい","Parlemen"],
[92,"国歌","こっか","Lagu kebangsaan"],
[399,"先進国","せんしんこく","Negara maju"],
// 市 (Kota)
[259,"市","いち - し","Kota/Pasar"],
// 町 (Kota kecil)
[260,"町","まち - ちょう","Kota kecil"],
// 村 (Desa)
[261,"村","むら - そん","Desa"],
// 所 (Tempat)
[256,"所","ところ - しょ","Tempat"],
[258,"場所","ばしょ","Lokasi"],
// 住 (Tinggal)
[415,"住","す - じゅう","Tinggal/Bermukim"],
[416,"住む","すむ","Tinggal (v)"],
[417,"住所","じゅうしょ","Alamat"],
[418,"住まい","すまい","Tempat tinggal"],
// 店 (Toko)
[255,"店","みせ - てん","Toko"],
// 宿 (Penginapan)
[505,"宿","やど - しゅく","Penginapan"],
// 郵 (Pos)
[330,"郵","- ゆう","Pos/Surat"],
[331,"郵便局","ゆうびんきょく","Kantor pos"],
// 台所 (Dapur)
[257,"台所","だいどころ","Dapur"],
// 部屋 (Kamar)
[297,"部屋","へや","Kamar"],



// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 18. WARNA
//     Logika: Spektrum warna (Merah→Biru→Perak→Umum)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// 赤 (Merah)
[184,"赤","あか - せき","Merah"],
[185,"赤い","あかい","Merah (adj)"],
[187,"赤外線","せきがいせん","Sinar inframerah"],
[186,"赤ちゃん","あかちゃん","Bayi"],
// 紅 (Merah tua)
[638,"紅","べに - こう","Merah tua/Crimson"],
// 青 (Biru)
[181,"青","あお - せい","Biru"],
[182,"青い","あおい","Biru (adj)"],
[183,"青信号","あおしんごう","Lampu hijau"],
// 銀 (Perak)
[216,"銀","- ぎん","Perak"],
[217,"銀行","ぎんこう","Bank"],
[218,"銀色","ぎんいろ","Warna perak"],
// 色 (Warna — konsep umum)
[263,"色","いろ - しょく","Warna"],



// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 19. PEKERJAAN & EKONOMI
//     Logika: Pasangan lawan (売↔買) + Alur (Kerja→Perusahaan→Uang)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// --- Kerja ---
// 働 (Bekerja)
[264,"働","はたら - どう","Bekerja"],
[265,"働く","はたらく","Bekerja (v)"],
// 仕 (Melayani/Pekerjaan)
[668,"仕","つか - し","Melayani"],
[669,"仕事","しごと","Pekerjaan"],
[670,"仕方","しかた","Cara/Metode"],
// 職 (Profesi)
[468,"職","- しょく","Profesi/Jabatan"],
[469,"職業","しょくぎょう","Pekerjaan (jenis)"],
// 作 (Membuat)
[537,"作","つく - さく","Membuat/Karya"],
[538,"作る","つくる","Membuat (v)"],
[539,"作文","さくぶん","Karangan"],
[540,"作業","さぎょう","Pekerjaan (tugas)"],
// 発明する (Menemukan)
[406,"発明する","はつめいする","Menemukan"],

// --- Perusahaan (Besar→Kecil: 会社→部) ---
// 会 (Bertemu/Perusahaan)
[98,"会","あ - かい","Bertemu/Perkumpulan"],
[99,"会話","かいわ","Percakapan"],
[100,"会社","かいしゃ","Perusahaan"],
[101,"都会","とかい","Kota besar"],
// 社 (Perusahaan)
[332,"社","やしろ - しゃ","Perusahaan/Kuil"],
[333,"社長","しゃちょう","Direktur utama"],
// 部 (Bagian)
[295,"部","- ぶ","Bagian/Divisi"],
[296,"部長","ぶちょう","Kepala bagian"],
// 工 (Pabrik)
[464,"工","- こう","Kerajinan/Pabrik"],
[465,"工場","こうじょう","Pabrik"],

// --- Industri ---
// 農 (Pertanian)
[478,"農","- のう","Pertanian"],
[479,"農業","のうぎょう","Usaha tani"],
// 産 (Produksi)
[529,"産","う - さん","Melahirkan/Produksi"],
[530,"産業","さんぎょう","Industri"],


// --- Pasangan: 売↔買 (Jual↔Beli) ---
// 売 (Jual)
[654,"売","う - ばい","Menjual"],
[655,"売る","うる","Menjual (v)"],
[656,"売店","ばいてん","Kios"],
[405,"発売","はつばい","Penjualan"],
// 買 (Beli)
[684,"買","か - ばい","Membeli"],
[685,"買う","かう","Membeli (v)"],
[686,"買い物","かいもの","Belanja (noun)"],
[687,"買い物する","かいものする","Berbelanja"],
// 注文する (Memesan)
[339,"注文する","ちゅうもんする","Memesan"],

// --- Uang ---
// 金 (Uang)
[15,"金","かね - きん","Uang/Emas"],
[16,"現金","げんきん","Uang tunai"],
[17,"お金","おかね","Uang (sopan)"],
[19,"お金持ち","おかねもち","Orang kaya"],



// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 20. HIBURAN & MEDIA
//     Logika: Umum→Spesifik (Musik→Film→Siaran→Hobi)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// 音 (Suara)
[518,"音","おと - おん","Suara/Bunyi"],
[519,"音楽","おんがく","Musik"],
// 楽 (Senang/Musik)
[580,"楽","たの - がく","Senang/Musik"],
[581,"楽しい","たのしい","Menyenangkan (adj)"],
[582,"楽な","らくな","Mudah/Santai (adj)"],
// 歌 (Lagu)
[178,"歌","うた - か","Lagu"],
[179,"歌う","うたう","Menyanyi"],
[180,"歌手","かしゅ","Penyanyi"],
// 映 (Film/Pantulan)
[560,"映","うつ - えい","Pantulan/Film"],
[561,"映画","えいが","Film"],
[562,"映る","うつる","Terpantul (intransitif)"],
[563,"映す","うつす","Memantulkan (transitif)"],
[564,"映画館","えいがかん","Bioskop"],
// 放 (Siaran)
[554,"放","はな - ほう","Melepaskan/Menyiarkan"],
[555,"放送","ほうそう","Siaran"],
// 写 (Foto)
[610,"写","うつ - しゃ","Menyalin/Memotret"],
[611,"写真","しゃしん","Foto"],
// 趣味 (Hobi)
[254,"趣味","しゅみ","Hobi"],
// 野球 (Bisbol — olahraga/hiburan)
[414,"野球","やきゅう","Bisbol"],



// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 21. PIKIRAN, PERASAAN & PERSEPSI
//     Logika: Pasangan lawan (好↔嫌) + Umum→Spesifik
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// 思 (Pikir)
[499,"思","おも - し","Berpikir/Merasa"],
[500,"思う","おもう","Berpikir (v)"],
[501,"思い出す","おもいだす","Teringat"],
[502,"思い出","おもいで","Kenangan"],
// 知 (Tahu)
[288,"知","し - ち","Mengetahui"],
[289,"知る","しる","Mengetahui (v)"],
[290,"知らせる","しらせる","Memberitahu"],
[291,"知り合い","しりあい","Kenalan"],
[292,"知識","ちしき","Pengetahuan"],
// --- Pasangan lawan: 好↔嫌 (Suka↔Benci) ---
// 好 (Suka)
[533,"好","す - こう","Suka/Menyukai"],
[534,"好きな","すきな","Suka (adj)"],
[535,"好み","このみ","Selera/Kesukaan"],
// 嫌 (Benci)
[705,"嫌","きら/いや - けん","Benci/Tidak suka"],
[706,"嫌い","きらい","Benci (adj)"],
[707,"嫌な","いやな","Tidak menyenangkan"],
[708,"嫌がる","いやがる","Merasa enggan"],
// 気 (Semangat/Perasaan)
[549,"気","- き","Semangat/Energi"],
[550,"気持ち","きもち","Perasaan"],
// 泣 (Menangis)
[634,"泣","な - きゅう","Menangis"],
[635,"泣く","なく","Menangis (v)"],

// --- 見 (Melihat) ---
[102,"見","み - けん","Melihat"],
[103,"見学","けんがく","Kunjungan studi"],
[104,"見本","みほん","Contoh/Sampel"],
[105,"意見","いけん","Pendapat"],

// --- 自 (Diri Sendiri) ---
[454,"自分","じぶん","Diri sendiri (noun)"],
[455,"自ら","みずから","Sendiri (adv)"],
[457,"自由","じゆう","Kebebasan"],
[460,"自信","じしん","Percaya diri"],

// --- 経 (Pengalaman) ---
[393,"経","へ - けい","Melewati/Pengalaman"],
[394,"経験","けいけん","Pengalaman"],



// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 22. TINDAKAN & KEPERLUAN
//     Logika: Pasangan lawan (待↔急, 集↔別, 禁↔自由)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// --- Pasangan: 待↔急 (Tunggu↔Buru-buru) ---
// 待 (Tunggu)
[422,"待","ま - たい","Menunggu"],
[423,"待つ","まつ","Menunggu (v)"],
// 急 (Tiba-tiba/Buru-buru)
[494,"急","いそ - きゅう","Terburu-buru/Mendadak"],
[495,"急に","きゅうに","Tiba-tiba (adv)"],
[496,"急ぐ","いそぐ","Bergegas"],

// --- Pasangan: 集↔別 (Kumpul↔Pisah) ---
// 集 (Kumpul)
[551,"集","あつ - しゅう","Mengumpulkan"],
[552,"集める","あつめる","Mengumpulkan (transitif)"],
[553,"集まる","あつまる","Berkumpul (intransitif)"],
// 別 (Pisah/Lain)
[424,"別","わか - べつ","Berpisah/Lain"],
[425,"別れる","わかれる","Berpisah (v)"],
[426,"別の","べつの","Yang lain"],
[427,"別々に","べつべつに","Secara terpisah"],

// --- Pasangan: 同↔別 (Sama↔Berbeda) ---
[531,"同","おな - どう","Sama"],
[532,"同じ","おなじ","Sama (adj)"],

// --- Pasangan: 禁↔許 (Larang — pasangan belum ada) ---
// 禁 (Larang)
[511,"禁","- きん","Larangan"],
[512,"禁止する","きんしする","Melarang"],

// --- Gunakan & Keperluan ---
// 使 (Gunakan)
[305,"使","つか - し","Menggunakan"],
[306,"使う","つかう","Menggunakan (v)"],
// 用 (Keperluan)
[445,"用","もち - よう","Keperluan/Urusan"],
[446,"用事","ようじ","Urusan"],
[447,"用意","ようい","Persiapan"],
// 利 (Untung/Gunakan)
[594,"利","- り","Keuntungan/Manfaat"],
[595,"利用する","りようする","Memanfaatkan"],

// --- Pasangan: 借↔貸 (Pinjam↔Pinjamkan) ---
// 借 (Pinjam)
[681,"借","か - しゃく","Meminjam"],
[682,"借りる","かりる","Meminjam (v)"],
[683,"借家","しゃくや","Rumah sewaan"],
// 貸 (Meminjamkan)
[712,"貸","か - たい","Meminjamkan"],
[713,"貸す","かす","Meminjamkan (v)"],
[714,"貸し出し","かしだし","Peminjaman"],
[715,"貸家","かしや","Rumah disewakan"],

// --- 事 (Hal/Peristiwa) ---
[472,"事","こと - じ","Hal/Peristiwa"],



// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 23. INFORMASI & PENJELASAN
//     Logika: Umum→Spesifik
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// 説 (Penjelasan)
[516,"説","と - せつ","Teori/Penjelasan"],
[517,"説明","せつめい","Penjelasan (detail)"],
// 調 (Menyelidiki)
[636,"調","しら - ちょう","Menyelidiki/Nada"],
[637,"調子","ちょうし","Kondisi/Irama"],
// 質 (Kualitas)
[640,"質","- しつ","Kualitas/Sifat"],
// 理 (Alasan/Logika)
[612,"理","- り","Alasan/Logika"],
[613,"理由","りゆう","Alasan"],
// 注 (Perhatian)
[337,"注","そそ - ちゅう","Perhatian/Menuang"],
[338,"注意する","ちゅういする","Berhati-hati"],



// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 24. KEHIDUPAN SEHARI-HARI
//     Logika: Alur harian (Istirahat→Pakaian→Mandi→Tidur)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// 休 (Istirahat)
[138,"休","やす - きゅう","Istirahat"],
[139,"休み","やすみ","Libur/Istirahat (noun)"],
[140,"休む","やすむ","Beristirahat (v)"],
[141,"休日","きゅうじつ","Hari libur"],
[142,"定休日","ていきゅうび","Hari libur tetap"],
// 着 (Pakai/Tiba)
[380,"着","き/つ - ちゃく","Memakai/Tiba"],
[381,"着く","つく","Tiba (v)"],
[382,"着る","きる","Memakai pakaian"],
[383,"着物","きもの","Kimono"],
// 浴 (Mandi)
[623,"浴","あ - よく","Mandi/Berendam"],
[624,"浴びる","あびる","Mandi (v)"],
];
