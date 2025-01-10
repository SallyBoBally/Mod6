const SingleCat = ({ cat }) => {
    return (
        <><h2>{cat.name}</h2><p>{cat.latin}</p><img
            src={cat.name}
            alt={cat.name} /></>
    )
}

export default SingleCat;