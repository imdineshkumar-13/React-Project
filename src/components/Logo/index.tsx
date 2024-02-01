import { useState } from "react";
import Content from "../Content";
import FormComponent from "../Form";
import Lists from "../Lists";

const Logo = () => {

    const [showForm, setShowForm] = useState(false)
    const [disableForm, setDisableForm] = useState(true)
    const [carData, setCarData]: any = useState([]);

    return ( 
        <>
            <Content showForm={showForm} setShowForm={setShowForm} />
            {(showForm && disableForm) && <FormComponent carData={carData} setCarData={setCarData} setDisableForm={setDisableForm} />}
            {carData.length > 0 && <Lists carData={carData} />}
        </>
     );
}
 
export default Logo;