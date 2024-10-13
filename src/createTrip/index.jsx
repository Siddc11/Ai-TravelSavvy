import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { SelectBudgetOptions, SelectTravelerList } from "@/constants/Options";
import { Button } from "@/components/ui/button";
const CreateTrip = () => {
  const [place, setPlace] = useState();
  const [formData, setFormData] = useState([]);

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px10 px-5 mt-10">
      <h2 className="font-bold text-3xl">
        Tell Us Your Travel Preferences 🏕️🌴
      </h2>
      <p className="mt-3 text-gray-500 text-xl">
        Just provide some basic information, and our trip planner will generate
        a customized Itinerary based on your Preferences
      </p>

      <div className="mt-20 flex flex-col gap-10">
        <div>
          <h2 className="text-xl my-3 font-medium">
            What is Destination of Choice ?{" "}
          </h2>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            selectProps={{
              place,
              onChange: (v) => {
                setPlace(v);
                handleInputChange("location", v);
              },
            }}
          />
        </div>
        <div>
          <h2 className="text-xl my-3 font-medium">
            How many days are you planning your trip ?
          </h2>
          <Input
            placeholder={"Ex. 3"}
            type="number"
            onChange={(e) => handleInputChange("NoOfDays", e.target.value)}
          />
        </div>

        <div>
          <h2 className="text-xl my-3 font-medium">What is Your Budget ?</h2>
          <p className="text-md text-gray-500">
            *The budget is exclusively allocated for activities and dining
            purposes.
          </p>
          <div className="grid grid-cols-3 gap-5 mt-5 cursor-pointer">
            {SelectBudgetOptions.map((item, index) => (
              <div
                key={index}
                onClick={() => handleInputChange("budget", item.title)}
                className="p-5 border rounded-lg hover:shadow-lg"
              >
                <h2 className="text-4xl flex justify-center align-center">
                  {item.icon}
                </h2>
                <h2 className="font-bold text-lg flex justify-center align-center">
                  {item.title}
                </h2>
                <h2 className="text-sm text-gray-500 flex justify-center align-center">
                  {item.desc}
                </h2>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl my-3 font-medium">
            Who do you plan on travelling with on your next adventure ?
          </h2>
          <div className="grid grid-cols-3 gap-5 mt-5 cursor-pointer">
            {SelectTravelerList.map((item, index) => (
              <div
                key={index}
                onClick={() => handleInputChange("peoples", item.people)}
                className="p-5 border rounded-lg hover:shadow-lg"
              >
                <h2 className="text-4xl flex justify-center align-center">
                  {item.icon}
                </h2>
                <h2 className="font-bold text-lg flex justify-center align-center">
                  {item.title}
                </h2>
                <h2 className="text-sm text-gray-500 flex justify-center align-center">
                  {item.desc}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="my-10 flex justify-center">
        <Button>Generate Trip</Button>
      </div>
    </div>
  );
};

export default CreateTrip;
