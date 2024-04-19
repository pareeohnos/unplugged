import { useRef, useState } from "react";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export default function NewSchool() {
  const nameRef = useRef();
  const addressRef = useRef();
  const cityRef = useRef();
  const provinceRef = useRef();

  const [addingNewSchool, setAddingNewSchool] = useState(false);

  async function postSchoolData() {
    const nameValue = nameRef.current.value;
    if (nameValue.trim() === "") {
      alert("Please provide a school name");
      return;
    }
    const addressValue = addressRef.current.value;
    if (addressValue.trim() === "") {
      alert("Please provide a school address");
      return;
    }
    const cityValue = cityRef.current.value;
    if (cityValue.trim() === "") {
      alert("Please provide a school city");
      return;
    }
    const provinceValue = provinceRef.current.value;
    if (provinceValue.trim() === "") {
      alert("Please provide a province. E,g BC, ON");
      return;
    }

    [nameRef, addressRef, cityRef, provinceRef].map((refs) => {
      refs.current.value = "";
    });

    setAddingNewSchool(false);
    try {
      await axios.post(`http://127.0.0.1:8000/schools/`, {
        id: uuidv4().substring(0,20),
        name: nameValue,
        name_original: nameValue,
        address: addressValue,
        city: cityValue,
        province: provinceValue,
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  if (addingNewSchool === false) {
    return (
      <p className="mb-4 ">
        Can't find your Child's School? Add it here{" "}
        <Fab
          style={{ width: "36px", height: "30px", marginLeft: "1rem" }}
          color="primary"
          aria-label="add"
          onClick={() => setAddingNewSchool(true)}
        >
          <AddIcon style={{ color: "white" }} />
        </Fab>{" "}
      </p>
    );
  }
  return (
    <div>
      <p className="mb-4 ">
        Can't find your Child's School? Add it here{" "}
        <Fab
          style={{
            width: "36px",
            height: "30px",
            marginLeft: "1rem",
            backgroundColor: "rgb(100,100,100)",
          }}
          aria-label="cancel"
          // size="small"
          onClick={() => setAddingNewSchool(false)}
        >
          <CloseIcon style={{ color: "white" }} />
        </Fab>{" "}
        <Fab
          style={{ width: "36px", height: "30px", marginLeft: ".25rem" }}
          color="primary"
          aria-label="confirm"
          // size="small"
          onClick={() => postSchoolData()}
        >
          <CheckIcon style={{ color: "white" }} />
        </Fab>{" "}
      </p>
      <div className="transition-all duration-300 ease-in-out">
        <div className="w-full rounded-lg p-4 shadow-xl mb-6 bg-[rgba(235,235,235,.5)]">
          <label className="flex flex-col font-mincho text-[#2e4049] text-[16px]">
            School name
            <input
              ref={nameRef}
              className="bg-[rgba(117,215,210,0.33)] p-2 font-sans rounded-xl mt-2"
              type="text"
              placeholder="Type the school's name here ..."
            />
          </label>

          <label className="flex flex-col font-mincho text-[#2e4049] text-[16px]  mt-2">
            Address
            <input
              ref={addressRef}
              className="bg-[rgba(117,215,210,0.33)] p-2 font-sans rounded-xl mt-2"
              type="text"
              placeholder="Type the address of the school ..."
            />
          </label>

          <label className="flex flex-col font-mincho text-[#2e4049] text-[16px]  mt-2">
            City
            <input
              ref={cityRef}
              className="bg-[rgba(117,215,210,0.33)] p-2 font-sans rounded-xl mt-2"
              type="text"
              placeholder="Enter the City here ..."
            />
          </label>

          <label className="flex flex-col font-mincho text-[#2e4049] text-[16px] mt-2">
            Province
            <input
              ref={provinceRef}
              className="bg-[rgba(117,215,210,0.33)] p-2 font-sans rounded-xl mt-2"
              type="text"
              maxLength={2}
              placeholder="The province Identifier, BC, ON ..."
            />
          </label>
        </div>
      </div>
    </div>
  );

  //   {

  //     "name": "string",
  //     "address": "string",
  //     "city": "string",
  //     "province": "string"
  //   }
}
