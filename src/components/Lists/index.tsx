const Lists = (props: any) => {

    const {carData} = props;

    return ( 
        <>
            <div className="row">
                <div className="col">
                    <ul className="list-group">
                        <li className="list-group-item">Model</li>
                        <li className="list-group-item">Color</li>
                        <li className="list-group-item">Year Of Manufacture</li>
                        <li className="list-group-item">Insurance Valid Upto</li>
                        <li className="list-group-item">Kms</li>
                        <li className="list-group-item">Location</li>
                        <li className="list-group-item">No Of Owners</li>
                        <li className="list-group-item">Transmission</li>
                        <li className="list-group-item">External Fitments</li>
                        <li className="list-group-item">Photo</li>
                    </ul>
                </div>
                <div className="col">
                    {carData.map((data: any, index: number)=>(
                        <ul className="list-group" key={index}>
                            <li className="list-group-item">{data.model || '-'}</li>
                            <li className="list-group-item">{data.color || '-'}</li>
                            <li className="list-group-item">{data.yearOfManufacture || '-'}</li>
                            <li className="list-group-item">{data.insuranceValidUpto || '-'}</li>
                            <li className="list-group-item">{data.kms || '-'}</li>
                            <li className="list-group-item">{data.location || '-'}</li>
                            <li className="list-group-item">{data.noOfOwners || '-'}</li>
                            <li className="list-group-item">{data.transmission || '-'}</li>
                            <li className="list-group-item">{data.externalFitments || '-'}</li>
                            <li className="list-group-item">{data.photo || '-'}</li>
                        </ul>
                    ))}
                </div>
            </div>
        </>
     );
}
 
export default Lists;