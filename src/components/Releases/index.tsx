import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import * as React from 'react';
import { useToggle, useWindowSize } from 'react-use';

import { Grid, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { useVideo } from '../../data/utils';
import type { FCWithChildren } from '../../types/react';
import HR from '../common/HR';
import Pane from '../common/Pane';

const useStyles = makeStyles({
  icon: {
    fontSize: 28,
  },
});

const Releases = () => {
  const width = Math.min(useWindowSize().width - 20, 1000);

  return (
    <Grid container direction='column' alignItems='center'>
      <Grid item style={{ width }}>
        <LatestRelease>{ReleaseArray[0]}</LatestRelease>
      </Grid>
      <Grid item style={{ width }}>
        <OldReleases>
          {ReleaseArray.slice(1).map((node, i) => (
            <React.Fragment key={i}>{node}</React.Fragment>
          ))}
        </OldReleases>
      </Grid>
    </Grid>
  );
};
export default Releases;

const LatestRelease: FCWithChildren = ({ children }) => {
  return (
    <Pane>
      <Typography variant='h4'>Latest Release Note</Typography>
      <HR />
      {children}
    </Pane>
  );
};

const OldReleases: FCWithChildren = ({ children }) => {
  const classes = useStyles();

  const [isHidden, toggleIsHidden] = useToggle(true);

  return (
    <Pane>
      {isHidden && (
        <Typography variant='h4' onClick={toggleIsHidden} style={{ marginBottom: 0 }}>
          Old Release Notes
          <ArrowDropDownIcon className={classes.icon} />
        </Typography>
      )}
      {!isHidden && (
        <>
          <Typography variant='h4' onClick={toggleIsHidden}>
            Old Release Notes
            <ArrowDropUpIcon className={classes.icon} />
          </Typography>
          <HR />
          {children}
        </>
      )}
    </Pane>
  );
};

const ReleaseArray: React.ReactNode[] = [
  <>
    <Date date='2025/03/03' />
    <AddData />
    <AddVideo videoId={268} />
    <AddVideo videoId={269} />
    <AddVideo videoId={270} />
  </>,
  <>
    <Date date='2025/03/03' />
    <AddData />
    <AddVideo videoId={266} />
    <AddVideo videoId={267} />
  </>,
  <>
    <Date date='2025/02/27' />
    <AddData />
    <AddVideo videoId={265} />
  </>,
  <>
    <Date date='2025/02/02' />
    <AddData />
    <AddVideo videoId={263} />
    <AddVideo videoId={264} />
  </>,
  <>
    <Date date='2025/01/31' />
    <AddData />
    <AddVideo videoId={262} />
  </>,
  <>
    <Date date='2025/01/26' />
    <AddData />
    <AddVideo videoId={261} />
  </>,
  <>
    <Date date='2025/01/17' />
    <AddData />
    <AddVideo videoId={260} />
  </>,
  <>
    <Date date='2025/01/14' />
    <AddData />
    <AddVideo videoId={259} />
  </>,
  <>
    <Date date='2025/01/01' />
    <AddData />
    <AddVideo videoId={258} />
  </>,
  <>
    <Date date='2024/12/27' />
    <AddData />
    <AddVideo videoId={257} />
  </>,
  <>
    <Date date='2024/12/25' />
    <AddData />
    <AddVideo videoId={256} />
  </>,
  <>
    <Date date='2024/12/24' />
    <AddData />
    <Content
      content={
        '『【歌ってみたコラボ】白い雪のプリンセスは-Re:incarnation- 尾丸ポルカ&小鳩りあ【クリスマスに🩷❤】』分を追加しました'
      }
    />
  </>,
  <>
    <Date date='2024/12/14' />
    <AddData />
    <AddVideo videoId={254} />
    <AddVideo videoId={255} />
  </>,
  <>
    <Date date='2024/12/07' />
    <AddData />
    <AddVideo videoId={253} />
  </>,
  <>
    <Date date='2024/11/23' />
    <AddData />
    <AddVideo videoId={252} />
  </>,
  <>
    <Date date='2024/11/16' />
    <AddData />
    <AddVideo videoId={251} />
  </>,
  <>
    <Date date='2024/11/15' />
    <AddData />
    <AddVideo videoId={249} />
    <AddVideo videoId={250} />
  </>,
  <>
    <Date date='2024/11/02' />
    <AddData />
    <AddVideo videoId={248} />
  </>,
  <>
    <Date date='2024/10/12' />
    <AddData />
    <AddVideo videoId={247} />
  </>,
  <>
    <Date date='2024/10/07' />
    <AddData />
    <AddVideo videoId={244} />
    <AddVideo videoId={245} />
    <AddVideo videoId={246} />
  </>,
  <>
    <Date date='2024/09/25' />
    <AddData />
    <AddVideo videoId={243} />
  </>,
  <>
    <Date date='2024/08/22' />
    <AddData />
    <AddVideo videoId={242} />
  </>,
  <>
    <Date date='2024/08/17' />
    <AddData />
    <AddVideo videoId={240} />
    <AddVideo videoId={241} />
  </>,
  <>
    <Date date='2024/08/12' />
    <AddData />
    <AddVideo videoId={237} />
    <AddVideo videoId={238} />
    <AddVideo videoId={239} />
  </>,
  <>
    <Date date='2024/08/10' />
    <AddData />
    <AddVideo videoId={236} />
  </>,
  <>
    <Date date='2024/08/09' />
    <AddData />
    <AddVideo videoId={235} />
  </>,
  <>
    <Date date='2024/07/15' />
    <AddData />
    <AddVideo videoId={234} />
  </>,
  <>
    <Date date='2024/07/15' />
    <AddData />
    <AddVideo videoId={233} />
  </>,
  <>
    <Date date='2024/07/11' />
    <AddData />
    <AddVideo videoId={232} />
  </>,
  <>
    <Date date='2024/06/29' />
    <AddData />
    <AddVideo videoId={230} />
  </>,
  <>
    <Date date='2024/05/30' />
    <AddData />
    <AddVideo videoId={229} />
  </>,
  <>
    <Date date='2024/05/20' />
    <AddData />
    <AddVideo videoId={228} />
  </>,
  <>
    <Date date='2024/05/06' />
    <AddData />
    <AddVideo videoId={227} />
  </>,
  <>
    <Date date='2024/04/22' />
    <AddData />
    <AddVideo videoId={226} />
  </>,
  <>
    <Date date='2024/04/21' />
    <AddData />
    <AddVideo videoId={225} />
  </>,
  <>
    <Date date='2024/04/14' />
    <AddData />
    <AddVideo videoId={223} />
    <AddVideo videoId={224} />
  </>,
  <>
    <Date date='2024/04/06' />
    <AddData />
    <AddVideo videoId={222} />
  </>,
  <>
    <Date date='2024/03/29' />
    <AddData />
    <AddVideo videoId={220} />
    <AddVideo videoId={221} />
  </>,
  <>
    <Date date='2024/03/25' />
    <AddData />
    <AddVideo videoId={219} />
  </>,
  <>
    <Date date='2024/03/15' />
    <AddData />
    <AddVideo videoId={218} />
  </>,
  <>
    <Date date='2024/03/10' />
    <AddData />
    <AddVideo videoId={217} />
  </>,
  <>
    <Date date='2024/03/08' />
    <AddData />
    <AddVideo videoId={216} />
  </>,
  <>
    <Date date='2024/03/03' />
    <AddData />
    <AddVideo videoId={214} />
    <AddVideo videoId={215} />
  </>,
  <>
    <Date date='2024/01/31' />
    <AddData />
    <AddVideo videoId={213} />
  </>,
  <>
    <Date date='2024/01/02' />
    <AddData />
    <AddVideo videoId={212} />
  </>,
  <>
    <Date date='2023/12/31' />
    <AddData />
    <AddVideo videoId={210} />
    <AddVideo videoId={211} />
  </>,
  <>
    <Date date='2023/12/28' />
    <AddData />
    <AddVideo videoId={209} />
  </>,
  <>
    <Date date='2023/12/24' />
    <AddData />
    <AddVideo videoId={207} />
    <AddVideo videoId={208} />
  </>,
  <>
    <Date date='2023/12/19' />
    <AddData />
    <AddVideo videoId={206} />
  </>,
  <>
    <Date date='2023/12/18' />
    <AddData />
    <AddVideo videoId={205} />
  </>,
  <>
    <Date date='2023/12/17' />
    <AddData />
    <AddVideo videoId={204} />
  </>,
  <>
    <Date date='2023/12/13' />
    <AddData />
    <AddVideo videoId={202} />
    <AddVideo videoId={203} />
  </>,
  <>
    <Date date='2023/12/05' />
    <AddData />
    <AddVideo videoId={201} />
  </>,
  <>
    <Date date='2023/12/02' />
    <AddData />
    <AddVideo videoId={200} />
  </>,
  <>
    <Date date='2023/11/27' />
    <AddData />
    <AddVideo videoId={199} />
  </>,
  <>
    <Date date='2023/11/26' />
    <AddData />
    <AddVideo videoId={198} />
  </>,
  <>
    <Date date='2023/11/24' />
    <AddData />
    <AddVideo videoId={196} />
    <AddVideo videoId={197} />
  </>,
  <>
    <Date date='2023/11/12' />
    <AddData />
    <AddVideo videoId={195} />
  </>,
  <>
    <Date date='2023/11/10' />
    <AddData />
    <AddVideo videoId={192} />
    <AddVideo videoId={193} />
    <AddVideo videoId={194} />
  </>,
  <>
    <Date date='2023/10/20' />
    <AddData />
    <AddVideo videoId={191} />
  </>,
  <>
    <Date date='2023/10/16' />
    <AddData />
    <AddVideo videoId={190} />
  </>,
  <>
    <Date date='2023/10/15' />
    <AddData />
    <AddVideo videoId={189} />
  </>,
  <>
    <Date date='2023/10/14' />
    <AddData />
    <AddVideo videoId={187} />
    <AddVideo videoId={188} />
  </>,
  <>
    <Date date='2023/09/29' />
    <AddData />
    <AddVideo videoId={186} />
  </>,
  <>
    <Date date='2023/09/26' />
    <AddData />
    <AddVideo videoId={184} />
    <AddVideo videoId={185} />
  </>,
  <>
    <Date date='2023/09/06' />
    <AddData />
    <AddVideo videoId={183} />
  </>,
  <>
    <Date date='2023/08/16' />
    <AddData />
    <AddVideo videoId={181} />
    <AddVideo videoId={182} />
  </>,
  <>
    <Date date='2023/07/30' />
    <AddData />
    <AddVideo videoId={180} />
  </>,
  <>
    <Date date='2023/07/16' />
    <AddData />
    <AddVideo videoId={177} />
    <AddVideo videoId={178} />
    <AddVideo videoId={179} />
  </>,
  <>
    <Date date='2023/06/21' />
    <AddData />
    <AddVideo videoId={176} />
  </>,
  <>
    <Date date='2023/05/29' />
    <AddData />
    <AddVideo videoId={173} />
    <AddVideo videoId={174} />
    <AddVideo videoId={175} />
  </>,
  <>
    <Date date='2023/05/26' />
    <AddData />
    <AddVideo videoId={172} />
  </>,
  <>
    <Date date='2023/05/17' />
    <AddData />
    <AddVideo videoId={171} />
  </>,
  <>
    <Date date='2023/05/08' />
    <AddData />
    <AddVideo videoId={169} />
    <AddVideo videoId={170} />
  </>,
  <>
    <Date date='2023/04/03' />
    <AddData />
    <AddVideo videoId={168} />
  </>,
  <>
    <Date date='2023/04/02' />
    <AddData />
    <AddVideo videoId={167} />
  </>,
  <>
    <Date date='2023/04/01' />
    <AddData />
    <AddVideo videoId={166} />
  </>,
  <>
    <Date date='2023/03/25' />
    <AddData />
    <AddVideo videoId={165} />
  </>,
  <>
    <Date date='2023/03/17' />
    <AddData />
    <AddVideo videoId={164} />
  </>,
  <>
    <Date date='2023/03/15' />
    <AddData />
    <AddVideo videoId={163} />
  </>,
  <>
    <Date date='2023/03/06' />
    <AddData />
    <AddVideo videoId={162} />
  </>,
  <>
    <Date date='2023/02/28' />
    <AddData />
    <AddVideo videoId={161} />
  </>,
  <>
    <Date date='2023/02/25' />
    <AddData />
    <AddVideo videoId={160} />
  </>,
  <>
    <Date date='2023/02/19' />
    <AddData />
    <AddVideo videoId={159} />
  </>,
  <>
    <Date date='2023/02/01' />
    <AddData />
    <AddVideo videoId={157} />
    <AddVideo videoId={158} />
  </>,
  <>
    <Date date='2023/01/28' />
    <AddData />
    <AddVideo videoId={141} />
    <AddVideo videoId={142} />
    <AddVideo videoId={143} />
    <AddVideo videoId={144} />
    <AddVideo videoId={145} />
    <AddVideo videoId={146} />
    <AddVideo videoId={147} />
    <AddVideo videoId={148} />
    <AddVideo videoId={149} />
    <AddVideo videoId={150} />
    <AddVideo videoId={151} />
    <AddVideo videoId={152} />
    <AddVideo videoId={153} />
    <AddVideo videoId={154} />
    <AddVideo videoId={155} />
    <AddVideo videoId={156} />
  </>,
  <>
    <Date date='2022/09/04' />
    <AddData />
    <AddVideo videoId={134} />
    <AddVideo videoId={135} />
    <AddVideo videoId={136} />
    <AddVideo videoId={137} />
    <AddVideo videoId={138} />
    <AddVideo videoId={139} />
    <AddVideo videoId={140} />
  </>,
  <>
    <Date date='2022/08/28' />
    <AddData />
    <AddVideo videoId={126} />
    <AddVideo videoId={127} />
    <AddVideo videoId={128} />
    <AddVideo videoId={129} />
    <AddVideo videoId={130} />
    <AddVideo videoId={131} />
    <AddVideo videoId={132} />
    <AddVideo videoId={133} />
  </>,
  <>
    <Date date='2022/08/11' />
    <AddData />
    <AddVideo videoId={125} />
  </>,
  <>
    <Date date='2022/08/01' />
    <AddData />
    <AddVideo videoId={121} />
    <AddVideo videoId={122} />
    <AddVideo videoId={123} />
    <AddVideo videoId={124} />
  </>,
  <>
    <Date date='2022/07/17' />
    <AddData />
    <AddVideo videoId={120} />
  </>,
  <>
    <Date date='2022/07/10' />
    <AddData />
    <AddVideo videoId={119} />
  </>,
  <>
    <Date date='2022/06/30' />
    <AddData />
    <AddVideo videoId={115} />
    <AddVideo videoId={116} />
    <AddVideo videoId={117} />
    <AddVideo videoId={118} />
  </>,
  <>
    <Date date='2022/06/05' />
    <AddData />
    <AddVideo videoId={113} />
    <AddVideo videoId={114} />
  </>,
  <>
    <Date date='2022/06/04' />
    <AddData />
    <AddVideo videoId={112} />
  </>,
  <>
    <Date date='2022/05/21' />
    <AddData />
    <AddVideo videoId={109} />
    <AddVideo videoId={110} />
    <AddVideo videoId={111} />
  </>,
  <>
    <Date date='2022/04/29' />
    <AddData />
    <AddVideo videoId={108} />
  </>,
  <>
    <Date date='2022/04/24' />
    <AddData />
    <AddVideo videoId={106} />
    <AddVideo videoId={107} />
  </>,
  <>
    <Date date='2022/03/26' />
    <AddData />
    <AddVideo videoId={105} />
  </>,
  <>
    <Date date='2022/03/23' />
    <AddData />
    <AddVideo videoId={101} />
    <AddVideo videoId={102} />
    <AddVideo videoId={103} />
    <AddVideo videoId={104} />
  </>,
  <>
    <Date date='2022/03/06' />
    <AddData />
    <AddVideo videoId={99} />
    <AddVideo videoId={100} />
  </>,
  <>
    <Date date='2022/02/27' />
    <AddData />
    <AddVideo videoId={96} />
    <AddVideo videoId={97} />
    <AddVideo videoId={98} />
  </>,
  <>
    <Date date='2022/02/06' />
    <AddFeature />
    <Content content='サイトのレイアウトをリニューアルしました' />
    <Content content='/searchを廃止しました' />
    <Content content='検索結果読み込み速度の改善を行なったため、表示件数と表示形式を廃止しました' />
  </>,
  <>
    <Date date='2022/02/05' />
    <AddData />
    <AddVideo videoId={92} />
    <AddVideo videoId={93} />
    <AddVideo videoId={94} />
    <AddVideo videoId={95} />
  </>,
  <>
    <Date date='2022/01/01' />
    <AddData />
    <AddVideo videoId={91} />
  </>,
  <>
    <Date date='2021/12/25' />
    <AddData />
    <AddVideo videoId={88} />
    <AddVideo videoId={89} />
    <AddVideo videoId={90} />
  </>,
  <>
    <Date date='2021/12/12' />
    <AddData />
    <AddVideo videoId={86} />
    <AddVideo videoId={87} />
  </>,
  <>
    <Date date='2021/12/05' />
    <AddData />
    <AddVideo videoId={84} />
    <AddVideo videoId={85} />
  </>,
  <>
    <Date date='2021/11/20' />
    <AddData />
    <AddVideo videoId={81} />
    <AddVideo videoId={82} />
    <AddVideo videoId={83} />
  </>,
  <>
    <Date date='2021/11/06' />
    <AddData />
    <AddVideo videoId={80} />
  </>,
  <>
    <Date date='2021/10/26' />
    <AddData />
    <AddVideo videoId={79} />
  </>,
  <>
    <Date date='2021/10/11' />
    <AddData />
    <AddVideo videoId={77} />
    <AddVideo videoId={78} />
  </>,
  <>
    <Date date='2021/10/04' />
    <AddData />
    <AddVideo videoId={75} />
    <AddVideo videoId={76} />
  </>,
  <>
    <Date date='2021/09/22' />
    <AddData />
    <AddVideo videoId={72} />
    <AddVideo videoId={73} />
    <AddVideo videoId={74} />
  </>,
  <>
    <Date date='2021/09/04' />
    <AddData />
    <AddVideo videoId={71} />
  </>,
  <>
    <Date date='2021/09/02' />
    <AddData />
    <AddVideo videoId={70} />
    <AddVideo videoId={69} />
  </>,
  <>
    <Date date='2021/08/28' />
    <AddData />
    <AddVideo videoId={68} />
  </>,
  <>
    <Date date='2021/08/23' />
    <AddData />
    <AddVideo videoId={65} />
    <AddVideo videoId={66} />
    <AddVideo videoId={67} />
  </>,
  <>
    <Date date='2021/08/16' />
    <AddData />
    <AddVideo videoId={58} />
    <AddVideo videoId={59} />
    <AddVideo videoId={60} />
    <AddVideo videoId={61} />
    <AddVideo videoId={62} />
    <AddVideo videoId={63} />
    <AddVideo videoId={64} />
  </>,
  <>
    <Date date='2021/08/07' />
    <AddData />
    <AddVideo videoId={57} />
  </>,
  <>
    <Date date='2021/08/02' />
    <AddData />
    <AddVideo videoId={56} />
  </>,
  <>
    <Date date='2021/07/13' />
    <AddData />
    <AddVideo videoId={55} />
  </>,
  <>
    <Date date='2021/07/03' />
    <AddData />
    <AddVideo videoId={54} />
  </>,
  <>
    <Date date='2021/06/29' />
    <AddData />
    <AddVideo videoId={53} />
  </>,
  <>
    <Date date='2021/06/25' />
    <AddData />
    <AddVideo videoId={52} />
  </>,
  <>
    <Date date='2021/06/21' />
    <AddData />
    <AddVideo videoId={51} />
  </>,
  <>
    <Date date='2021/06/16' />
    <AddData />
    <AddVideo videoId={50} />
  </>,
  <>
    <Date date='2021/06/01' />
    <AddData />
    <AddVideo videoId={49} />
  </>,
  <>
    <Date date='2021/05/23' />
    <AddData />
    <AddVideo videoId={48} />
  </>,
  <>
    <Date date='2021/05/16' />
    <AddData />
    <AddVideo videoId={47} />
  </>,
  <>
    <Date date='2021/05/13' />
    <AddData />
    <AddVideo videoId={46} />
  </>,
  <>
    <Date date='2021/05/11' />
    <AddData />
    <AddVideo videoId={45} />
  </>,
  <>
    <Date date='2021/04/28' />
    <AddData />
    <AddVideo videoId={43} />
    <AddVideo videoId={44} />
  </>,
  <>
    <Date date='2021/04/13' />
    <AddData />
    <AddVideo videoId={42} />
  </>,
  <>
    <Date date='2021/03/31' />
    <AddData />
    <AddVideo videoId={41} />
  </>,
  <>
    <Date date='2021/03/25' />
    <AddData />
    <AddVideo videoId={40} />
  </>,
  <>
    <Date date='2021/03/07' />
    <AddData />
    <AddVideo videoId={39} />
  </>,
  <>
    <Date date='2021/03/01' />
    <AddData />
    <AddVideo videoId={38} />
    <AddFeature />
    <Content content='トップページのレイアウトを変更しました' />
  </>,
  <>
    <Date date='2020/02/27' />
    <AddData />
    <AddVideo videoId={37} />
  </>,
  <>
    <Date date='2020/02/22' />
    <AddData />
    <AddVideo videoId={36} />
  </>,
  <>
    <Date date='2021/02/14' />
    <AddFeature />
    <Content content='ソート機能を追加しました' />
  </>,
  <>
    <Date date='2020/02/11' />
    <AddData />
    <AddVideo videoId={35} />
  </>,
  <>
    <Date date='2020/02/06' />
    <AddData />
    <AddVideo videoId={34} />
  </>,
  <>
    <Date date='2020/01/30' />
    <AddData />
    <AddVideo videoId={32} />
    <AddVideo videoId={33} />
  </>,
  <>
    <Date date='2020/01/15' />
    <AddData />
    <AddVideo videoId={31} />
  </>,
  <>
    <Date date='2020/01/10' />
    <AddData />
    <AddVideo videoId={29} />
    <AddVideo videoId={30} />
    <ContentType type='細かい変更' />
    <Content content='枠タイプに3Dを追加しました' />
    <Content content='リンクに原曲プレイリスト（Spotify）を追加しました' />
  </>,
  <>
    <Date date='2021/01/05' />
    <AddFeature />
    <Content content='簡易表示モードを追加しました' />
  </>,
  <>
    <Date date='2021/01/04' />
    ・Puunyan様（<a href='https://twitter.com/Puunyannyan'>@Puunyannyan</a>
    ）のイラストを使わせていただけることになりました
  </>,
  <>
    <Date date='2020/12/30' />
    <AddData />
    <AddVideo videoId={28} />
  </>,
  <>
    <Date date='2020/12/26' />
    <AddData />
    <AddVideo videoId={27} />
  </>,
  <>
    <Date date='2020/12/25' />
    <AddData />
    <AddVideo videoId={24} />
    <AddVideo videoId={25} />
    <AddVideo videoId={26} />
  </>,
  <>
    <Date date='2020/12/20' />
    <AddFeature />
    <Content content='お気に入り機能を追加しました' />
    <Content content='ツイート機能を追加しました' />
  </>,
  <>
    <Date date='2020/12/19' />
    <AddData />
    <AddVideo videoId={23} />
  </>,
  <>
    <Date date='2020/12/13' />
    <AddData />
    <AddVideo videoId={21} />
    <AddVideo videoId={22} />
  </>,
  <>
    <Date date='2020/11/29' />
    <AddData />
    <AddVideo videoId={20} />
  </>,
  <>
    <Date date='2020/11/21' />
    <AddData />
    <AddVideo videoId={19} />
  </>,
  <>
    <Date date='2020/11/14' />
    <AddData />
    <AddVideo videoId={18} />
    <AddVideo videoId={17} />
  </>,
  <>
    <Date date='2020/11/09' />
    <AddData />
    <AddVideo videoId={16} />
    <AddFeature />
    <Content content='全文検索を追加しました' />
  </>,
  <>
    <Date date='2020/11/08' />
    <AddFeature />
    <Content content='ページのルーティングに対応しました' />
  </>,
  <>
    <Date date='2020/11/03' />
    <AddData />
    <AddVideo videoId={15} />
  </>,
  <>
    <Date date='2020/10/31' />
    <AddData />
    <AddVideo videoId={13} />
    <AddVideo videoId={14} />
  </>,
  <>
    <Date date='2020/10/28' />
    <AddData />
    <AddVideo videoId={12} />
    <AddFeature />
    <Content content='伴奏の有無、歌の長さでの検索を追加しました' />
    <Content content='アカペラかワンコーラスの場合には結果で補足を表示するようにしました' />
    <ContentType type='細かい変更' />
    <Content content='リリースノートページを追加しました' />
  </>,
  <>
    <Date date='2020/10/27' />
    <ContentType type='細かい変更' />
    <Content content='『ももいろクローバー』と『ももいろクローバーZ』を区別するようにしました' />
  </>,
  <>
    <Date date='2020/10/24' />
    <ContentType type='細かい変更' />
    <Content content='統計情報ページを追加しました' />
  </>,
  <>
    <Date date='2020/10/23' />
    <AddData />
    <AddVideo videoId={11} />
    <ContentType type='細かい変更' />
    <Content content='『桜高軽音部』と『放課後ティータイム』を区別するようにしました' />
  </>,
  <>
    <Date date='2020/10/21' />
    <Content content='本サイトを公開しました' />
  </>,
];

function Date(props: { date: string }) {
  return (
    <Typography variant='h5' style={{ marginTop: '30px' }}>
      {props.date}
    </Typography>
  );
}

function AddData() {
  return <ContentType type='データの追加' />;
}

function AddFeature() {
  return <ContentType type='機能の追加' />;
}

function AddVideo(props: { videoId: number }) {
  return <Content content={`『${useVideo(props.videoId)}』分を追加しました`} />;
}

function ContentType(props: { type: string }) {
  return (
    <Typography variant='h6' style={{ marginTop: '30px' }}>
      {props.type}
    </Typography>
  );
}

function Content(props: { content: string }) {
  return <Typography variant='body1'>・{props.content}</Typography>;
}
