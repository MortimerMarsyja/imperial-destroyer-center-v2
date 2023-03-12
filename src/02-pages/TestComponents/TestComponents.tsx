import TimePicker from "@components/TimePicker";

const TestComponents = () => {
  return (
    <div>
      <h1>TestComponents</h1>
      <p><TimePicker
        label="Time"
        onChange={(time) => console.log(time)}
      /></p>
    </div>
  );
};

export default TestComponents;