import * as React from 'react';
import { useFormContext, useController } from 'react-hook-form';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import { useOnChange, useStyles } from '../util';
import { useArtists } from '../../../../data/utils';

export default function Artist() {
  const classes = useStyles();

  const { control } = useFormContext();
  const {
    field: { onChange, value, ...inputProps },
  } = useController({
    name: 'artist',
    control,
    defaultValue: -1,
  });

  const onChangeArtist = useOnChange(onChange, (q, v) => (q.artist = v));

  const artists = useArtists();
  return (
    <FormControl className={classes.formControl}>
      <Autocomplete
        options={artists}
        onChange={(e, v) => onChangeArtist(v == null ? -1 : v.i)}
        {...inputProps}
        value={value === -1 ? { name: '', i: -1 } : artists.find((v) => v.i === value)}
        isOptionEqualToValue={(option) => option.i == value}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => <TextField {...params} label='アーティスト' />}
      />
    </FormControl>
  );
}
