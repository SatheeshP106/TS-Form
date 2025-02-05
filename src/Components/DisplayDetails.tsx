import React from "react";

interface formDetails {
    name: string;
    age: number;
    email: string;
    city?: string;
}
const DisplayDetails: React.FC<formDetails>= ({name,age,email,city}) => {
  return (
    <div>
        <h1 className="text-center font-bold text-xl">
            Displaying Details
        </h1>
        <div className="flex flex-col items-center justify-center border-2 border-gray-200 p-5">
            <p className="font-bold">Name: {name}</p>
            <p className="font-bold">Age: {age}</p>
            <p className="font-bold">Email: {email}</p>
            <p className="font-bold">City: {city}</p>
        </div>
    </div>
  );
};

export default DisplayDetails;
