const ap = new APlayer({
    container: document.getElementById('aplayer'),
	listFolded: true,//列表默认折叠
	autoplay: true,
    loop: 'all',
	volume: 0.7,
    audio: [
		{
			name: '心做し',
			artist: 'majiko',
			url: 'http:////music.163.com/outchain/player?type=2&id=478303470&auto=1&height=66',
			cover: 'cover1.jpg'
		},
		{
            name: 'Unravel',
            artist: 'TK from 凛として時雨',
            url: 'http://m10.music.126.net/20210226203213/390106f4593e4d8ded248fca094fc463/ymusic/ddb9/26e4/e863/193e5769cbc9598eaba2526a3be1007e.mp3',
            cover: 'cover2.jpg',
        },
		{
            name: '嚣张',
            artist: 'en',
            url: 'http://m10.music.126.net/20210226204154/ba2c0c34cb62ae558ede9f2805e6f593/ymusic/550b/060b/0258/ba7c9d95531a5e52e59052b2825a920f.mp3',
            cover: 'cover3.jpg',
        }
	]
});