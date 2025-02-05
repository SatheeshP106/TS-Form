import React, { useState } from "react";
import DisplayDetails from "./DisplayDetails";

const Form: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [email, setEmail] = useState<string>("");
  const [city, setCity] = useState<string>("");

  interface formDetails {
    name: string;
    age: number;
    email: string;
    city: string;
  }

  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const details: formDetails = {
        name,
        age,
        email,
        city,
        };
        console.log(details);
    };


  return (
    <>
      <div className="container mx-auto mt-5">
        <h1 className="text-center font-bold text-xl">
          Enter Details Please :-)
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center border-2 border-gray-200 p-5">
          <label>
            Name:
            <input
              type="text"
              name="name"
              className="border-2 rounded-md my-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </label>
          <label>
            Age:
            <input
              type="number"
              name="age"
              className="border-2 rounded-md my-2"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
                placeholder="Enter your age"
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              className="border-2 rounded-md my-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
            />
          </label>
          <label>
            City:
            <input
              type="text"
              name="city"
              className="border-2 rounded-md my-2"
              value={city}
              onChange={(e) => setCity(e.target.value)}
                placeholder="Enter your city"
            />
          </label>
          <input
            type="submit"
            value="Submit"
            className="border-3 bg-red-700 my-2"
            
          />
        </form>

        {/* <div className="mt-5">
            <h1 className="text-center font-bold text-xl">Entered Details</h1>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Email: {email}</p>
            <p>City: {city}</p>
        </div> */}
        <DisplayDetails name={name} age={age} email={email} city={city} />
        
      </div>
    </>
  );
};

export default Form;
