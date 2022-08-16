import { useState } from "react";

function FormValidation() {

    const [data, setdata] = useState({
        name: "",
        phoneno: "",
        password: "",
        date: "",
        country:"",
        state:"",
        city:""
    })
    const [error, seterror] = useState({
        name: "",
        phoneno: "",
        password: "",
        date: ""
    })
    const handleinput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setdata({
            ...data,
            [name]: value
        })
        validation(name, value)
    }
   //country droupdwoun
    const[dcountry,setdcountry]=useState("")
    const handleCountry=(e)=>{
        const{name,value}=e.target
        setdcountry(e.target.value)
        setdata({
            ...data,
            country:value

        })
        console.log(dcountry);
    }
   //state droup
   const[dstate,setdstate]=useState("")
   const handleState=(e)=>{
    const {name,value}=e.target
    setdstate(e.target.value)
    setdata({
        ...data,
        state:value
    })

   }

   //city in gujrat

   const [gcity,setgcity]=useState("")
   const handleCity=(e)=>{
    const{name,value}=e.target
    setgcity(e.target.value)
    setdata({
        ...data,
        city:value
    })
   }
//validation//
const validation = (name, value) => {
        console.log("Validation ", name);
        switch (name) {
            case "name": {
                value.length < 4 ?
                    seterror({
                        ...error, name: "UseName atleast Have 5 Letters"
                    }) :
                    seterror({
                        ...error, name: ""
                    })
            }
                break;
            case "phoneno": {
                (!new RegExp(/^\+(?:[0-9] ?){6,14}[0-9]$/).test(value)) ?
                    seterror({
                        ...error, phoneno: "Envalid phon number"
                    })
                    :
                    seterror({
                        ...error, phoneno: ""
                    })
            }
                break;
            case "password": {
                (!new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(value)) ?
                    seterror({
                        ...error, password: "Envalid Password"
                    }) :
                    seterror({
                        ...error, password: ""
                    })
            }
        }
    }

    const handlSubmit = (e) => {
        e.preventDefault();
        setdata({
            ...data,
            name: "",
            phoneno: "",
            password: "",
            date:""
        })
        setdcountry({
            ...dcountry,
            country:" ",
        })
        setdstate({
            ...dstate,
            state:""
        })
        setgcity({
            ...gcity,
            city:""
        })
       console.log([data,dcountry,dstate,gcity]);
    }
   
    return (
        <div>
            <h1>Registration FormValidation</h1>
            <form onSubmit={handlSubmit}>
                <div>
                    <div><input type={"text"} name="name" placeholder="Enter You Name" value={data.name} onChange={handleinput} />
                        <p style={{ color: "red" }}>{error.name}</p>
                    </div>
                    <div><input type={"text"} name="phoneno" placeholder="Enter You Mobile Number" value={data.phoneno} onChange={handleinput} />
                        <p style={{ color: "red" }}>{error.phoneno}</p>
                    </div>
                </div>
                <div>
                    <div><input type={"password"} name="password" placeholder="Enter Password" value={data.password} onChange={handleinput} />
                        <p style={{ color: "red" }}>{error.password}</p>
                    </div>
                    <div><input type={"datetime-local"} name="date" placeholder="Enter BirthofDate" value={data.date} onChange={handleinput} />
                        <p style={{ color: "red" }}>{error.date}</p>
                    </div>
                </div>
                {/* droupdown */}
                   <div>
                    <select placeholder="Select Country" onChange={handleCountry} value={dcountry}>
                        <option name="country">Select Country</option>
                        <option name="india" value={"INDIA"}>INDIA</option>
                        <option name="usa" value={"USA"}>USA</option>
                    </select>
                   </div> 
                   {
                    data.country==="INDIA"?
                    <div>
                    <select placeholder="Select Country" onChange={handleState} value={dstate}>
                        <option name="state">Select State</option>
                        <option name="state" value={"GUJRAT"}>GUJRAT</option>
                        <option name="state" value={"MAHARASTRA"}>MAHARASTRA</option>
                    </select>
                   </div> 
                    :
                   <div>
                    <select placeholder="Select State" onChange={handleState} value={dstate}>
                        <option name="state">Select State</option>
                        <option name="state" value={"NEWYOURK"}>NEWYOURK</option>
                        <option name="state" value={"CALIFONOYA"}>CALIFONOYA</option>
                    </select>
                   </div> 
                   }
                   {(data.state==="GUJRAT")?
                    <div>
                    <select placeholder="Select City" onChange={handleCity} value={gcity}>
                        <option name="city">Select City</option>
                        <option name="city" value={"SURAT"}>SURAT</option>
                        <option name="city" value={"BARDOLI"}>BARDOLI</option>
                    </select>
                   </div> 
                   :(data.state==="MAHARASTRA")?
                   <div>
                    <select placeholder="Select City"  onChange={handleCity} value={gcity}>
                        <option name="city">Select City</option>
                        <option name="city" value={"PUNE"}>PUNE</option>
                        <option name="city" value={"NAGAPUR"}>NAGAPUR</option>
                    </select>
                   </div>
                    :(data.state==="NEWYOURK")?
                    <div>
                    <select placeholder="Select City"  onChange={handleCity} value={gcity}>
                        <option name="city">Select City</option>
                        <option name="city" value={"LEWIS"}>LEWIS</option>
                        <option name="city" value={"BOSTON"}>BOSTON</option>
                    </select>
                   </div>
                   :
                   <div>
                    <select placeholder="Select City"  onChange={handleCity} value={gcity}>
                        <option name="city">Select City</option>
                        <option name="city" value={"LOUISIANS"}>LOUISIANS</option>
                        <option name="city" value={"SANJOS"}>SANJOS</option>
                    </select>
                   </div>
                   
                   }
                 

                <button>Submit</button>
            </form>

        </div>
    );
}

export default FormValidation;