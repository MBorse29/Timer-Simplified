# Plug and play with timer

- Start
- Stop
- Reset

It works on render props principle.

# Directions to use

```sh

  import Timer from "simplified-timer"

  <Timer>
    {({ value, stopTimer, startTimer, resetTimer })=>{
      <App />
    }}
  </Timer>

```
