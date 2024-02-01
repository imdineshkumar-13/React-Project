import { useState } from 'react'
import { mockData, locationData, colorData, noOfOwnersData } from '../../mockData/data'

const Filter = () => {

    const [originalData, setOriginaldata] = useState(mockData);
    const [displayOutput, setDisplayOutput] = useState(false)

    const handleLocation = (e: any) => {
        const filData = mockData.filter((data: any)=>data.location == e.target.value);
        setOriginaldata(filData);
    }

    const handleColor = (e: any) => {
        const filData = originalData.filter((data: any)=>data.color == e.target.value);
        setOriginaldata(filData);
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setDisplayOutput(true)
    }

    return ( 
        <>
            <form className="py-5" onSubmit={(e)=>handleSubmit(e)}>
                <div className="container">
                    <h1 className="d-flex align-items-center justify-content-center pb-2">Form</h1>
                    <div className="row">
                        <div className="col">
                            <div className="mb-3">
                                <label className="py-3">Location</label>
                                <select name="location" id="location" className="form-select" onChange={(e)=>handleLocation(e)}>
                                    {locationData.map((location: any, index: number)=>(
                                        <option value={location} key={index}>{location}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="py-1">Color</label>
                                {colorData.map((color: any, index: number)=>(
                                    <div className="form-check" key={index}>
                                        <input className="form-check-input" type="radio" value={color} onChange={(e)=>handleColor(e)} />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">{color}</label>
                                  </div>
                                ))}
                            </div>
                            <div className="mt-5 d-flex align-items-center justify-content-start">
                                <button type="submit" className="btn btn-primary px-4 py-2">Submit</button>
                            </div>
                        </div>
                    </div>
                    {displayOutput && <div className='container mt-5'>
                        {originalData.map((image: any, index: number)=>(
                            <div className='w-auto h-auto' key={index}>
                                <img src={image.photo} className='w-25 h-25' />
                            </div>
                        ))}
                    </div>}
                </div>
            </form>
        </>
     );
}
 
export default Filter;