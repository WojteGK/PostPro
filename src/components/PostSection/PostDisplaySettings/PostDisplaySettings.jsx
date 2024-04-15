import './PostDisplaySettings.css';

export default function PostDisplaySettings({ setPostCount }) {
  const handleNumberChange = (e) => {
    setPostCount(Number(e.target.value));
  };

  return (
    <div className="post-display-settings">
      <label htmlFor="number">Number of posts: </label>
      <select className="number" onChange={handleNumberChange} defaultValue={10}>
        <option value="1">1</option>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="25">25</option>
        <option value="100">100</option>
      </select>
    </div>
  );
}