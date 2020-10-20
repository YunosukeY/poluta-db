import { singings, getUrl, getArtist, getSong, getArtistId, Singing } from './data';

let result: Singing[] = [];

function genHtml(pageNum: number) {
  let displayNum = Number($('input:radio[name="display-num"]:checked').val() as string);

  // result table
  let html = `<h4>Result</h4>
              <table class="centered"><tbody>`;
  for (let i = (pageNum - 1) * displayNum; i < Math.min(pageNum * displayNum, result.length); i++) {
    html += '<tr>';
    html += `<td width="500">
              <iframe width="480" height="270" src="https://www.youtube-nocookie.com/embed/${getUrl(result[i]['videoId'])}?start=${result[i]['start']}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
              </iframe>
            </td>`;
    html += `<td>
              <h5>
                『${getSong(result[i]['songId'])}』<br>
                ${getArtist(result[i]['songId'])}
              </h5>
            </td>`;
    html += '<tr>';
  }
  html += '</tbody></table>';

  // page nation
  html += '<ul class="pagination" id="result-page">';
  html += `${pageNum == 1 ? '<li class="disabled">' : '<li class="waves-effect">'}<a><i class="material-icons">chevron_left</i></a></li>`;
  let lastPageNum = Math.ceil(result.length / displayNum);
  for (let i = 1; i <= lastPageNum; i++) {
    html += `${i == pageNum ? '<li class="active" id="current-page">' : '<li class="waves-effect">'}<a>${i}</a></li>`;
  }
  html += `${pageNum >= lastPageNum ? '<li class="disabled">' : '<li class="waves-effect">'}<a><i class="material-icons">chevron_right</i></a></li>`;
  html += '</ul>';

  return html;
}

function search() {
  let videoId = Number($('#video').val() as string);
  let songId = Number($('#song').val() as string);
  let artistId = Number($('#artist').val() as string);

  let tmpres = singings;
  if (videoId != -1) {
    tmpres = tmpres.filter(singingInfo => singingInfo['videoId'] == videoId);
  }
  if (songId != -1) {
    tmpres = tmpres.filter(singingInfo => singingInfo['songId'] == songId);
  }
  if (artistId != -1) {
    tmpres = tmpres.filter(singingInfo => getArtistId(singingInfo['songId']) == artistId);
  }
  result = tmpres;
}

function scroll2ResultTop() {
  let speed = 400; // ミリ秒
  let position = $('.result-block').offset()!.top;
  $('body,html').animate({ scrollTop: position }, speed, 'swing');
  return false;
}

function standbyFlippingPage() {
  $('#result-page li').on('click', function () {
    if ($(this).hasClass('waves-effect')) {
      let currentPage = Number($('#current-page').text());

      if ($(this).text() == 'chevron_left') {
        $('#result').html(genHtml(currentPage - 1));
      } else if ($(this).text() == 'chevron_right') {
        $('#result').html(genHtml(currentPage + 1));
      } else {
        let nextPage = Number($(this).text());
        $('#result').html(genHtml(nextPage));
      }
      scroll2ResultTop();
      standbyFlippingPage();
    }
  });
}

export function searchInit() {
  $('#video, #song, #artist').on('change', function () {
    search();
    $('#result').html(genHtml(1));
    standbyFlippingPage();
  });
  $('input[name="display-num"]:radio').on('change', function () {
    $('#result').html(genHtml(1));
    standbyFlippingPage();
  });
}