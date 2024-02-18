import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { CitySelect, CountrySelect, GetCountries, GetCity } from "react-country-state-city";

import "react-country-state-city/dist/react-country-state-city.css";
import { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const [countryid, setCountryid] = useState(0);
  const [cityid, setCityid] = useState(0);

  const [countriesList, setCountriesList] = useState([]);
  const [cityList, setCityList] = useState([]);

  useEffect(() => {
    GetCountries().then((result) => {
      setCountriesList(result);
    });
  }, []);


 const nameRef = useRef('')
 const emailRef = useRef('')
 const phoneRef = useRef('')
 const countryRef = useRef('')
 const cityRef = useRef('')
 const addressRef = useRef('')
 const employeesRef = useRef('')
 const descRef = useRef('')

 function handleSubmit(e) {
   e.preventDefault();
   console.log(nameRef.current.value);
   console.log(emailRef.current.value);
   console.log(phoneRef.current.state.formattedNumber);
   console.log();
   
 }



  return (
    <div className="wrapper">
      <h1 className="title">Kompaniya ma’lumotlari</h1>
      <p className="subtitle">Kompaniya haqidagi ma’lumotlarni kiriting</p>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="name">
          Kompaniya nomi <span>*</span>
        </label>
        <input
          className="form-control"
          type="text"
          id="name"
          placeholder="Kompaniya nomi"
          ref={nameRef}
        />

        <label htmlFor="email">
          Email <span>*</span>
        </label>
        <input
          className="form-control"
          type="email"
          id="email"
          placeholder="Email"
          ref={emailRef}
        />

        <label htmlFor="phone">
          Telefon raqami<span>*</span>
        </label>
        <PhoneInput
          id="phone"
          country={""}
          ref={phoneRef}
        />
        <div className="country-select">
          <div>
          <label htmlFor="country">
            Davlat <span>*</span>
          </label>
          <CountrySelect
            // onChange={(e) => {
            //   setCountryid(e.id);
            // }}
            
            id="country"
            // value={countryid}
            ref={countryRef}
            placeHolder="Select Country"
          />
          
          </div>
        
         <div>
         <label htmlFor="city">
            Shahar <span>*</span>
          </label>
          <CitySelect
            countryid={countryid}
            cityid={cityid}
            onChange={(e) => {
              setcityid(e);
            }}
            placeHolder="Select City"
          />
         </div>
        </div>
        <label htmlFor="address">
          Yashash joyi <span>*</span>
        </label>
        <input
          className="form-control"
          type="text"
          id="address"
          placeholder="Joy"
          ref={addressRef}/>
          <label htmlFor="employees">Hodimlar soni</label>
          <input
            className="form-control"
            type="number"
            id="employees"
            placeholder="Hodimlar soni"
            ref={employeesRef}/>

            <label htmlFor="desc">Izoh <span>*</span></label>
            <textarea
              className="form-control"
              type="text"
              name="desc"
              placeholder="Kompaniya haqida izoh qoldiring"
              ref={descRef}
            ></textarea>
           <button className="back">Ortga</button>
           <button className="next">Keyingisi</button>
      </form>
    </div>
  );
}

export default App;
