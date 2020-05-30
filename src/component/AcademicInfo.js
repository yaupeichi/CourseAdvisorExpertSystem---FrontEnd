import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function AcademicForm(props) {

  const classes = useStyles();
  const [stream, setStream] = React.useState(props.data.stream);
  const [grade, setGrade] = React.useState(props.data.grade);

  const handleStream = (event) => {
    setStream(event.target.value);
  };

  const handleGrade = (event) => {
    setGrade(event.target.value);
  };


  useEffect(() => {
    let obj = {
      ...props.data,
      stream: stream,
      grade: grade
    }
    props.callback(obj)
  }, [stream, grade])


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Academic Background
      </Typography>
      <Grid container spacing={3} direction="column" >
        <Grid item xs={3}>
          <FormControl className={classes.formControl}>
            <InputLabel>Stream</InputLabel>
            <Select
              value={stream}
              onChange={handleStream}
            >
              <MenuItem value={""}></MenuItem>
              <MenuItem value={"Art"}>Art</MenuItem>
              <MenuItem value={"Science"}>Science</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <FormControl className={classes.formControl}>
            <InputLabel >Grade</InputLabel>
            <Select

              value={grade}
              onChange={handleGrade}
            >
              <MenuItem value={""}></MenuItem>
              <MenuItem value={"2.0 and below"}>2.0 and below</MenuItem>
              <MenuItem value={"2.1 - 2.5"}>2.1 - 2.5</MenuItem>
              <MenuItem value={"2.6 - 3.0"}>2.6 - 3.0</MenuItem>
              <MenuItem value={"3.0 - 3.5"}>3.0 - 3.5</MenuItem>
              <MenuItem value={"3.5 and above"}>3.5 and above</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}