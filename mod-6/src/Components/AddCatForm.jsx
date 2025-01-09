const AddCatForm = ({ addCat }) => {
    const [name, setName] = useState('');
    const [latinName, setLatinName] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && latinName && image) {
            addCat({ name, latinName, image });
            setName('');
            setLatinName('');
            setImage('');
        } else {
            alert('All fields are required!');
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
            <div style={{ marginBottom: '10px' }}>
                <label>
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={{ marginLeft: '10px' }}
                    />
                </label>
            </div>
            <div style={{ marginBottom: '10px' }}>
                <label>
                    Latin Name:
                    <input
                        type="text"
                        value={latinName}
                        onChange={(e) => setLatinName(e.target.value)}
                        style={{ marginLeft: '10px' }}
                    />
                </label>
            </div>
            <div style={{ marginBottom: '10px' }}>
                <label>
                    Image URL:
                    <input
                        type="text"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        style={{ marginLeft: '10px' }}
                    />
                </label>
            </div>
            <button type="submit" style={{ padding: '5px 10px' }}>Add Cat</button>
        </form>
    );
};

export default AddCatForm;