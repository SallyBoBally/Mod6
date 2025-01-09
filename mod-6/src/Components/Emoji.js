const Emoji = () => {
    const [isHappy, setIsHappy] = useState(true);
  
    const toggleMood = () => {
      setIsHappy((prevMood) => !prevMood);
    };
  
    return (
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h1>{isHappy ? '😀' : '😛'}</h1>
        <button onClick={toggleMood}>Change Mood</button>
      </div>
    );
  };
  
  export default Emoji;