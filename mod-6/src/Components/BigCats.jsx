import SingleCat from "./SingleCat";

const cats = [
    { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus', image: 'https://bloximages.newyork1.vip.townnews.com/nrtoday.com/content/tncms/assets/v3/editorial/a/c9/ac96d05a-259a-11ee-8541-afe5f0192d3d/64b6dcca8f26a.image.jpg?resize=750%2C500' },
    { id: 2, name: 'Cougar', latinName: 'Puma concolor', image: 'https://britishcolumbia.com/wp-content/uploads/2024/09/cougar.jpg' },
    { id: 3, name: 'Jaguar', latinName: 'Panthera onca', image: 'https://cdn.britannica.com/09/143609-050-826EA62F/Jaguar-stream-Brazil.jpg' },
    { id: 4, name: 'Leopard', latinName: 'Panthera pardus', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7w0zrEHGS_YOyPHyPpaTm5oIjXEE19Tlm7g&s' },
    { id: 5, name: 'Lion', latinName: 'Panthera leo', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREL7rJ_0JG9CAJfSjIa67nthl3_tXmlo05Ug&s' },
    { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia', image: 'https://i.natgeofe.com/k/e196909e-a9f9-4437-95db-7cd9a039254f/snow-leopard-fullbody_3x2.jpg' },
    { id: 7, name: 'Tiger', latinName: 'Panthera tigris', image: 'https://assets.weforum.org/article/image/responsive_large_q8bpN98uMnTEXttXMZCBU8X0kmDdUSHvsmA9JO18-hs.jpg' },
];

const BigCats = () => {
    const [catList, setCatList] = useState(cats);

    const sortAlphabetically = () => {
        const sorted = [...catList].sort((a, b) => a.name.localeCompare(b.name));
        setCatList(sorted);
    };

    const filterPanthera = () => {
        const filtered = cats.filter(cat => cat.latinName.startsWith('Panthera'));
        setCatList(filtered);
    };

    const resetList = () => {
        setCatList(cats);
    };
    return (
            <><h1>Big Cats</h1><ul style={{ listStyle: 'none', padding: 0 }}>
            {cats.map(cat => (
                <SingleCat key={cat.id} cat={cat} />
            ))}
        </ul></>
    );
};

export default BigCats;