import * as React from 'react';
import { useFormContext, useController } from 'react-hook-form';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import { useOnChange, useStyles } from '../util';
import { useSongs } from '../../../../data/utils';

export default function Song() {
  const classes = useStyles();

  const { control } = useFormContext();
  const {
    field: { onChange, value, ...inputProps },
  } = useController({
    name: 'song',
    control,
    defaultValue: -1,
  });

  const onChangeSong = useOnChange(onChange, (q, v) => (q.song = v));

  const songs = useSongs();
  return (
    <FormControl className={classes.formControl}>
      <Autocomplete
        options={songs}
        onChange={(e, v) => onChangeSong(v == null ? -1 : v.i)}
        {...inputProps}
        value={value === -1 ? { title: '', i: -1 } : songs.find((v) => v.i === value)}
        isOptionEqualToValue={(option) => option.i == value}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => <TextField {...params} label='曲' />}
      />
    </FormControl>
  );
}
