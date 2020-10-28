import * as React from 'react';
import { useEffect } from 'react';
import { mInit } from './materialize';
import { getGenres, getTypes, getVideos, getSongs, getArtists } from './data';

export function Select(props: {
  genre: number, setGenre: any,
  type: number, setType: any,
  video: number, setVideo: any,
  song: number, setSong: any,
  artist: number, setArtist: any,
  withInst: boolean, setWithInst: any,
  aCappella: boolean, setACappella: any,
  full: boolean, setFull: any,
  onechorus: boolean, setOnechorus: any,
  displaynum: number, setDisplaynum: any
}) {
  useEffect(() => {
    mInit();
  });

  // checkbox
  function onChange(setter: any) {
    return ((event: any) => setter(event.target.checked));
  }

  return (
    <div className='block select-block'>
      <h4>Search</h4>
      <Genre genre={props.genre} setGenre={props.setGenre} />
      <Type type={props.type} setType={props.setType} />
      <Video video={props.video} setVideo={props.setVideo} />
      <Song song={props.song} setSong={props.setSong} />
      <Artist artist={props.artist} setArtist={props.setArtist} />
      <Inst withInst={props.withInst} setWithInst={onChange(props.setWithInst)} aCappella={props.aCappella} setACappella={onChange(props.setACappella)} />
      <Length full={props.full} setFull={onChange(props.setFull)} onechorus={props.onechorus} setOnechorus={onChange(props.setOnechorus)} />
      <Displaynum displaynum={props.displaynum} setDisplaynum={props.setDisplaynum} />
    </div>
  );
}

function Genre(props: { genre: number, setGenre: any }) {
  let genres = getGenres().map(genre => <option value={genre.i}>{genre.name}</option>);
  return (
    <label>
      <h6>曲ジャンル</h6>
      <select name='genre' id='genre' value={props.genre} onChange={(event) => props.setGenre(event.target.value)}>
        <option value='-1'>-</option>
        {genres}
      </select>
    </label>
  );
}

function Type(props: { type: number, setType: any }) {
  let types = getTypes().map(type => <option value={type.i}>{type.name}</option>);
  return (
    <label>
      <h6>枠タイプ</h6>
      <select name='type' id='type' value={props.type} onChange={(event) => props.setType(event.target.value)}>
        <option value='-1'>-</option>
        {types}
      </select>
    </label>
  );
}

function Video(props: { video: number, setVideo: any }) {
  let videos = getVideos().map(video => <option value={video.i}>{video.date}: {video.title}</option>);
  return (
    <label>
      <h6>動画</h6>
      <select name='video' id='video' value={props.video} onChange={(event) => props.setVideo(event.target.value)}>
        <option value='-1'>-</option>
        {videos}
      </select>
    </label>
  );
}

function Song(props: { song: number, setSong: any }) {
  let songs = getSongs().map(song => <option value={song.i}>{song.title}</option>);
  return (
    <label>
      <h6>曲</h6>
      <select name='song' id='song' value={props.song} onChange={(event) => props.setSong(event.target.value)}>
        <option value='-1'>-</option>
        {songs}
      </select>
    </label>
  );
}

function Artist(props: { artist: number, setArtist: any }) {
  let artists = getArtists().map(artist => <option value={artist.i}>{artist.name}</option>);
  return (
    <label>
      <h6>アーティスト</h6>
      <select name='artist' id='artist' value={props.artist} onChange={(event) => props.setArtist(event.target.value)}>
        <option value='-1'>-</option>
        {artists}
      </select>
    </label>
  );
}

function Inst(props: { withInst: boolean, setWithInst: any, aCappella: boolean, setACappella: any }) {
  return (
    <label>
      <h6>伴奏</h6>
      <div className='row'>
        <label className='col s4 m2'>
          <input type="checkbox" className="filled-in" checked={props.withInst} onChange={props.setWithInst} />
          <span>あり</span>
        </label>
        <label className='col s8 m10'>
          <input type="checkbox" className="filled-in" checked={props.aCappella} onChange={props.setACappella} />
          <span>なし（アカペラ）</span>
        </label>
      </div>
    </label>
  );
}

function Length(props: { full: boolean, setFull: any, onechorus: boolean, setOnechorus: any }) {
  return (
    <label>
      <h6>尺</h6>
      <div className='row'>
        <label className='col s4 m2'>
          <input type="checkbox" className="filled-in" checked={props.full} onChange={props.setFull} />
          <span>フル</span>
        </label>
        <label className='col s8 m10'>
          <input type="checkbox" className="filled-in" checked={props.onechorus} onChange={props.setOnechorus} />
          <span>ワンコーラス</span>
        </label>
      </div>
    </label>
  );
}

function Displaynum(props: { displaynum: number, setDisplaynum: any }) {
  return (
    <>
      <label>
        <h6>表示件数</h6>
      </label>
      <form action='#' className='row'>
        <Radio num={5} setDisplaynum={props.setDisplaynum} checked={props.displaynum == 5} />
        <Radio num={10} setDisplaynum={props.setDisplaynum} checked={props.displaynum == 10} />
        <Radio num={20} setDisplaynum={props.setDisplaynum} checked={props.displaynum == 20} />
      </form>
    </>
  );
}

function Radio(props: { num: number, setDisplaynum: any, checked: boolean }) {
  return (
    <label className='col s2 m1'>
      <input className='with-gap' name='display-num' type='radio' value={props.num} checked={props.checked} onChange={() => props.setDisplaynum(props.num)} />
      <span>{props.num}</span>
    </label>
  );
}
