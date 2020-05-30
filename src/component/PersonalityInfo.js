import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { green } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function PersonalTraitForm(props) {
  const [interested, setInterested] = React.useState({
    Technical: false,
    Finance: false,
    Accounting: false,
    ActuriaLScience: false,
    Architecture: false,
    Art_Humanities: false,
    Bioscience: false,
    Computing_IT: false,
    Dentistry: false,
    HealthScience: false,
    Engineering: false,
  });

  const [personality, setPersonality] = React.useState({
    Introverts: false,
    Extroverts: false,
    Sensors: false,
    Intuitives: false,
    Thinkers: false,
    Feelers: false,
    Judgers: false,
    Perceivers: false,
  });

  const handleInterested = (event) => {
    setInterested({ ...interested, [event.target.name]: event.target.checked });
  };

  const handlePersonality = (event) => {
    setPersonality({
      ...personality,
      [event.target.name]: event.target.checked,
    });
  };

  useEffect(() => {
    let obj = {
      ...props.data,
      interested: Object.keys(interested).filter((item) => {
        return interested[item] && item;
      }),
      personality: Object.keys(personality).filter((item) => {
        return personality[item] && item;
      }),
    };
    props.callback(obj);
  }, [interested, personality]);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Personal Trait & Interested Field
      </Typography>
      <Grid container spacing={3} direction="column">
        <Grid item xs={3}>
          <FormLabel component="legend">Interested Field</FormLabel>
        </Grid>
        <FormGroup row>
          <FormControlLabel
            control={
              <GreenCheckbox
                checked={interested.Technical}
                onChange={handleInterested}
                name="Technical"
              />
            }
            label="Technical"
          />
          <FormControlLabel
            control={
              <GreenCheckbox
                checked={interested.Finance}
                onChange={handleInterested}
                name="Finance"
              />
            }
            label="Finance"
          />
          <FormControlLabel
            control={
              <GreenCheckbox
                checked={interested.Accounting}
                onChange={handleInterested}
                name="Accounting"
              />
            }
            label="Accounting"
          />
          <FormControlLabel
            control={
              <GreenCheckbox
                checked={interested.ActuriaLScience}
                onChange={handleInterested}
                name="ActuriaLScience"
              />
            }
            label="Acturial Science"
          />
          <FormControlLabel
            control={
              <GreenCheckbox
                checked={interested.Architecture}
                onChange={handleInterested}
                name="Architecture"
              />
            }
            label="Architecture"
          />
          <FormControlLabel
            control={
              <GreenCheckbox
                checked={interested.Art_Humanities}
                onChange={handleInterested}
                name="Art_Humanities"
              />
            }
            label="Art & Humanities"
          />
          <FormControlLabel
            control={
              <GreenCheckbox
                checked={interested.Bioscience}
                onChange={handleInterested}
                name="Bioscience"
              />
            }
            label="Bioscience"
          />
          <FormControlLabel
            control={
              <GreenCheckbox
                checked={interested.Computing_IT}
                onChange={handleInterested}
                name="Computing_IT"
              />
            }
            label="Computing & IT"
          />
          <FormControlLabel
            control={
              <GreenCheckbox
                checked={interested.Dentistry}
                onChange={handleInterested}
                name="Dentistry"
              />
            }
            label="Dentistry"
          />
          <FormControlLabel
            control={
              <GreenCheckbox
                checked={interested.HealthScience}
                onChange={handleInterested}
                name="HealthScience"
              />
            }
            label="Health Science"
          />
          <FormControlLabel
            control={
              <GreenCheckbox
                checked={interested.Engineering}
                onChange={handleInterested}
                name="Engineering"
              />
            }
            label="Engineering"
          />
        </FormGroup>
        &nbsp;&nbsp;
        <Grid item xs={3}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Personality Trait</FormLabel>
          </FormControl>
        </Grid>
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox
                checked={personality.Introverts}
                onChange={handlePersonality}
                name="Introverts"
              />
            }
            label="Introverts"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={personality.Extroverts}
                onChange={handlePersonality}
                name="Extroverts"
              />
            }
            label="Extroverts"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={personality.Sensors}
                onChange={handlePersonality}
                name="Sensors"
              />
            }
            label="Sensors"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={personality.Intuitives}
                onChange={handlePersonality}
                name="Intuitives"
              />
            }
            label="Intuitives"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={personality.Thinkers}
                onChange={handlePersonality}
                name="Thinkers"
              />
            }
            label="Thinkers"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={personality.Feelers}
                onChange={handlePersonality}
                name="Feelers"
              />
            }
            label="Feelers"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={personality.Judgers}
                onChange={handlePersonality}
                name="Judgers"
              />
            }
            label="Judgers"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={personality.Perceivers}
                onChange={handlePersonality}
                name="Perceivers"
              />
            }
            label="Perceivers"
          />
        </FormGroup>
      </Grid>
    </React.Fragment>
  );
}
