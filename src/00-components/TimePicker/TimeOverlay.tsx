import StyledTimePicker from "./TimePicker.styled";

interface Props {
  setTime: (time:Date) => void;
  time:Date;
}

const TimeOverlay = ({setTime,time}:Props) => {
  return(
    <StyledTimePicker.Modal>
      <ul>
        {Array.from(Array(24).keys()).map((hour) => {
          return(
            <li
            className={hour === new Date(time).getHours() ? 'active' : ''}
            onClick={
              () => {
                setTime(
                  new Date(
                    new Date(time).setHours(hour)
                  )
                )
              }
            }
            key={hour}>
            {hour}
            </li>
          )
        })
        }
      </ul>
      <ul>
      {Array.from(Array(60).keys()).map((minute) => {
            return(
              <li 
              className={minute === new Date(time).getMinutes() ? 'active' : ''}
              onClick={
                () => {
                  setTime(
                    new Date(
                      new Date(time).setMinutes(minute)
                    )
                  )
                }
              } key={minute}>
                {minute}
              </li>
            )
          })
        }
      </ul>
    </StyledTimePicker.Modal>
  )
}

export default TimeOverlay
