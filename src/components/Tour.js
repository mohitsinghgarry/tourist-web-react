import Card from './Card';
const Tour = ({ tours, removecard }) => {
    return (
        <div className='container'>
            <div>
                <h2 className='title' ><span id='title-tour'>Tour </span><span className='title' id='title-hub'>Hub</span></h2>
            </div>
            <div className='cards'>
                {
                    tours.map((tour) => {
                        return <Card key={tour.id} {...tour} removeCard={removecard}></Card>
                    })
                }
            </div>
        </div>
    );

}
export default Tour;