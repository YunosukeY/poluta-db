export const videos = [
  {
    'id': 'PuFk_XfNXiM',
    'title': 'POLKA♡SUMMER♡LIVE☆2020 #ぽるうた【ホロライブ/尾丸ポルカ】',
    'date': '2020/08/30'
  },
]

export const songs = [
  { 'title': 'HOLOGRAM CIRCUS', 'artistId': 0, 'genreId': 0 },
  { 'title': 'only my railgun', 'artistId': 1, 'genreId': 1 },
  { 'title': 'Unmei♪wa♪Endless!', 'artistId': 2, 'genreId': 1 },
  { 'title': 'Chai Maxx', 'artistId': 3, 'genreId': 2 },
  { 'title': 'おジャ魔女カーニバル!!', 'artistId': 4, 'genreId': 1 },
  { 'title': '空色デイズ', 'artistId': 5, 'genreId': 1 },
  { 'title': 'ようこそジャパリパークへ', 'artistId': 6, 'genreId': 1 },
]

export const genres = [
  { 'name': 'オリジナル' },
  { 'name': 'アニソン' },
  { 'name': 'アイドル' },
]

export const artists = [
  { 'name': '尾丸ポルカ' },
  { 'name': 'fripSide' },
  { 'name': '放課後ティータイム' },
  { 'name': 'ももいろクローバー' },
  { 'name': 'MAHO堂' },
  { 'name': '中川翔子' },
  { 'name': 'どうぶつビスケッツ×PPP' },
]

export const singings = [
  { 'videoId': 0, 'songId': 0, 'start': '272' },
  { 'videoId': 0, 'songId': 1, 'start': '377' },
  { 'videoId': 0, 'songId': 2, 'start': '774' },
  { 'videoId': 0, 'songId': 3, 'start': '1064' },
  { 'videoId': 0, 'songId': 4, 'start': '1410' },
  { 'videoId': 0, 'songId': 5, 'start': '1755' },
  { 'videoId': 0, 'songId': 6, 'start': '2167' },
]

export function setData() {
  // set video
  let videoElement = document.getElementById('video')!;
  let option = document.createElement('option');
  option.setAttribute('value', '-1');
  option.innerHTML = '-';
  videoElement.appendChild(option);
  for (let i in videos) {
    option = document.createElement('option');
    option.setAttribute('value', i);
    option.innerHTML = videos[i]['title'];
    videoElement.appendChild(option);
  }

  // set song
  let songElement = document.getElementById('song')!;
  option = document.createElement('option');
  option.setAttribute('value', '-1');
  option.innerHTML = '-';
  songElement.appendChild(option);
  for (let i in songs) {
    option = document.createElement('option');
    option.setAttribute('value', i);
    option.innerHTML = songs[i]['title'];
    songElement.appendChild(option);
  }

  // song artist
  let artistElement = document.getElementById('artist')!;
  option = document.createElement('option');
  option.setAttribute('value', '-1');
  option.innerHTML = '-';
  artistElement.appendChild(option);
  for (let i in artists) {
    option = document.createElement('option');
    option.setAttribute('value', i);
    option.innerHTML = artists[i]['name'];
    artistElement.appendChild(option);
  }
}