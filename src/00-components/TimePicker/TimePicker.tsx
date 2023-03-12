import { useState } from "react";
import TimeOverlay from "./TimeOverlay";
import StyledTimePicker from "./TimePicker.styled";

interface Props {
  label:string;
  onChange: (time:Date) => void;
}


const TimePicker = ({label,onChange}:Props) => {
  const [time,setTime] = useState(new Date());
  const [timeOverlay,setTimeOverlay] = useState(false);
  const stringToDate = (time:string) => {
    const [hours,minutes] = time.split(':');
    const date = new Date();
    date.setHours(parseInt(hours));
    date.setMinutes(parseInt(minutes));
    return date;
  }

  return(
    <StyledTimePicker.Container>
      <label htmlFor="time">{label}</label>
      {timeOverlay && <TimeOverlay 
        time={time}
      setTime={setTime}
      /> }
      <StyledTimePicker.Input 
        type="time"
        value={time.toLocaleTimeString('en-GB').slice(0,5)}
        onChange={(e) => {
          setTime(stringToDate(e.target.value));
          onChange(stringToDate(e.target.value));
        }}
        onClick={()=>{setTimeOverlay(!timeOverlay)}}
      />
    </StyledTimePicker.Container>
  )
}

export default TimePicker