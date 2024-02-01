import { mockData } from '../../mockData/data'

const Content = (props: any) => {

    const {showForm, setShowForm} = props;

    const showFormContent = () => {
        setShowForm(!showForm);
    }

    return ( 
        <>
            <div className="album py-5 bg-body-tertiary">
                <div className="container">
                    <div className="row gap-3">
                        {mockData.map((image: any, index: number)=>(
                            <div className='card' key={index} style={{width: '13rem'}} onClick={showFormContent}>
                                <img src={image.photo} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Content;