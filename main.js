let root = document.getElementById("root");

/*
 * 將要隨機派發的網址放入下方（不需排序）
 *
 * 並請注意：
 * 1. 除最後一項外，其餘項目用逗號分隔
 * 2. 網址請用引號包起來
 */

const urls = [
	// 'https://google.com',
	// 'https://youtube.com',
	// 'https://drive.google.com/'
    "https://www.surveycake.com/s/Yl16Z",
    "https://www.surveycake.com/s/LbWvp",
    "https://www.surveycake.com/s/xxRDW"
];

window.location.href = 
    urls.length > 0 ? 
        urls[Math.floor(Math.random() * urls.length)] : 
        'https://fugle.tw';