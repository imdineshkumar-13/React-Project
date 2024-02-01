import { useState } from "react";

const FormComponent = (props: any) => {

    const [carDetails, setCarDetails] = useState({ 
        model: "", 
        color: "", 
        yearOfManufacture: "" ,
        insuranceValidUpto: "",
        kms: "",
        location: "",
        noOfOwners: "",
        transmission: "",
        externalFitments: "",
        photo: "",

    });
    const {carData, setCarData, setDisableForm} = props;

    const hanldeSubmit = (event: any) => {
        event.preventDefault();
        setCarData([...carData, carDetails]);
        setCarDetails({ model: "", color: "", yearOfManufacture: "", insuranceValidUpto: "", kms: "", location: "", noOfOwners: "", transmission: "", externalFitments: "", photo: ""});
        setDisableForm(false)
    }

    return ( 
        <>
            <form className="py-5" onSubmit={(e)=>hanldeSubmit(e)}>
                <div className="container">
                    <h1 className="d-flex align-items-center justify-content-center pb-2">Form</h1>
                    <div className="row">
                        <div className="col">
                            <div className="mb-3">
                                <label className="mb-2">Model</label>
                                <input type='text' className="form-control" value={carDetails.model} onChange={(event: any) => setCarDetails({...carDetails, model: event.target.value})} />
                            </div>
                            <div className="mb-3">
                                <label className="mb-2">Color</label>
                                <input type='text' className="form-control" value={carDetails.color} onChange={(event: any) => setCarDetails({...carDetails, color: event.target.value})} />
                            </div>
                            <div className="mb-3">
                                <label className="mb-2">Year of Manufacture</label>
                                <input type='text' className="form-control" value={carDetails.yearOfManufacture} onChange={(event: any) => setCarDetails({...carDetails, yearOfManufacture: event.target.value})} />
                            </div>
                            <div className="mb-3">
                                <label className="mb-2">Insurance Valid Upto</label>
                                <input type='text' className="form-control" value={carDetails.insuranceValidUpto} onChange={(event: any) => setCarDetails({...carDetails, insuranceValidUpto: event.target.value})} />
                            </div>
                            <div className="mb-3">
                                <label className="mb-2">Kms</label>
                                <input type='text' className="form-control" value={carDetails.kms} onChange={(event: any) => setCarDetails({...carDetails, kms: event.target.value})} />
                            </div>
                        </div>
                        <div className="col">
                            <div className="mb-3">
                                <label className="mb-2">Location</label>
                                <input type='text' className="form-control" value={carDetails.location} onChange={(event: any) => setCarDetails({...carDetails, location: event.target.value})} />
                            </div>
                            <div className="mb-3">
                                <label className="mb-2">No of Owners</label>
                                <input type='text' className="form-control" value={carDetails.noOfOwners} onChange={(event: any) => setCarDetails({...carDetails, noOfOwners: event.target.value})} />
                            </div>
                            <div className="mb-3">
                                <label className="mb-2">Transmission</label>
                                <input type='text' className="form-control" value={carDetails.transmission} onChange={(event: any) => setCarDetails({...carDetails, transmission: event.target.value})} />
                            </div>
                            <div className="mb-3">
                                <label className="mb-2">External Fitments</label>
                                <input type='text' className="form-control" value={carDetails.externalFitments} onChange={(event: any) => setCarDetails({...carDetails, externalFitments: event.target.value})} />
                            </div>
                            <div className="mb-3">
                                <label className="mb-2">Photo</label>
                                <input type='file' name='img' id="img" className="form-control" value={carDetails.photo} onChange={(event: any) => setCarDetails({...carDetails, photo: event.target.value})} />
                            </div>
                        </div>
                    </div>
                    <div className="mt-3 d-flex align-items-center justify-content-center">
                        <button type="submit" className="btn btn-primary px-4 py-2">Submit</button>
                    </div>
                </div>
            </form>
        </>
    );
}
 
export default FormComponent;