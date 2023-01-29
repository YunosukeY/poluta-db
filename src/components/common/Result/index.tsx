import * as React from 'react';

import ResultCount from './ResultCount';
import Pagenation from './Pagenation';
import FavoCount from './FavoCount';
import { Singing } from '../../../data/types';
import ResultCards from './ResultCards';
import { useDisplayNum } from '../../../lib/useWidth';
import { useRecoilState } from 'recoil';
import { appState } from '../../../store/state';

export default function Result(props: { result: Singing[]; isFavo: boolean }) {
  const [state, setState] = useRecoilState(appState);

  const ref = React.createRef<HTMLDivElement>();
  const onPageClick = (p: number) => {
    setState((state) => ({ ...state, pagenum: p }));
    ref?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const displaynum = useDisplayNum();

  return (
    <>
      <div ref={ref} />
      <div style={{ textAlign: 'center', marginTop: 50 }}>
        {props.isFavo ? <FavoCount favonum={props.result.length} /> : <ResultCount resultnum={props.result.length} />}
      </div>
      <ResultCards
        singings={props.result.slice(
          (state.pagenum - 1) * displaynum,
          Math.min(state.pagenum * displaynum, props.result.length),
        )}
      />
      <Pagenation
        pagenum={state.pagenum}
        setPagenum={onPageClick}
        lastPageNum={Math.ceil(props.result.length / displaynum)}
      />
    </>
  );
}
