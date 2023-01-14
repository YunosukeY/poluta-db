import * as React from 'react';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';

import Result from '../result/Result';
import { appState } from '../../lib/AppState';
import { Query } from '../../lib/query';
import { search } from '../../lib/search';

export default function ResultPane(props: {
  pagenum: number;
  setPagenum: React.Dispatch<React.SetStateAction<number>>;
}) {
  const state = useRecoilValue(appState);
  const router = useRouter();
  const query = new Query(router.query);
  const result = search(query, state);

  return <Result result={result} {...props} isFavo={false} />;
}
