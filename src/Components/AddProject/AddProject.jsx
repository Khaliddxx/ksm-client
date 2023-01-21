import React from "react";
import "./AddProject.scss";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

import { useHttpClient } from "../../shared/http-hook";

const animatedComponents = makeAnimated();

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const AddProject = () => {
  const httpClient = useHttpClient();
  const [loading, setLoading] = useState(false);
  const uploadImage = (img, idx) => {
    let resImg = null;
    const imgAPIKey = "826fbb1f90dacfa942f721a496d71950";
    let formData = new FormData();
    formData.append("image", img);
    const url = `https://api.imgbb.com/1/upload?key=${imgAPIKey}`;
    console.log(formData);
    fetch(url, {
      method: "POST",
      body:
        // JSON.stringify({
        formData,
      // })
    })
      .then((res) => res.json())
      .then((result) => {
        resImg = result.data.display_url;
        console.log(resImg);
        console.log("imgbb", result);
        let arr = imgStr;
        arr[idx] = resImg;
        setImgStr(arr);
        console.log(imgStr);
        return resImg;
      });
  };
  const [imgStr, setImgStr] = useState([]);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });

  const onSubmit = async (data) => {
    let arr = data;
    data = { ...arr, imgStr };
    console.log(data);

    try {
      const response = await httpClient.sendRequest(
        `https://kssm.herokuapp.com/projects/create`,
        "POST",
        JSON.stringify({
          name: data.projectTitle,
          category: data.projectCategories,
          donor: data.donor,
          date: data.date,
          mainImg: data.imgStr[0],
          description: data.description,
          price: data.price,
          //   data,
        }),
        {
          "Content-Type": "application/json",
        }
      );

      alert(
        "Successfully signed up, we will validate your account within 2 to 3 days!"
      );
      setLoading(false);
      // e.target.reset();
      // navigate("/");
    } catch (err) {
      console.log(httpClient.error);
    }
    // const newCats = data?.projectCategories.map((element) => element.value);
    // data = JSON.stringify({ ...arr, projectCategories: newCats }, imgStr);
  };
  //   console.log(errors);
  return (
    <div className="addproject">
      <form className="addform" onSubmit={handleSubmit(onSubmit)}>
        <label>Project Name*</label>
        <input
          type="text"
          placeholder="Type Here..."
          id="projectTitle"
          {...register("projectTitle", { required: true })}
        />

        <label>Project Category*</label>
        {/* <Controller
          control={control}
          name="projectCategories"
          render={({
            field: { onChange, onBlur, value, name, ref },
            formState,
          }) => (
            <Select
              //   closeMenuOnSelect={false}
              components={animatedComponents}
              //   defaultValue={[colourOptions[4], colourOptions[5]]}
              isMulti
              options={options}
              //   {...register("projectCategories", { required: true })}
              //   value={value ? value : []}
              value={value}
              name={name}
              ref={ref}
            />
          )}
        /> */}
        <select multiple {...register("projectCategories", { required: true })}>
          <option label="Choose..."></option>
          <option value="Construction">Construction</option>
          <option value="Electrical">Electrical</option>
          <option value=" AC"> AC</option>
          <option value="Plumbing">Plumbing</option>
          <option value="Solar">Solar</option>
          <option value="CCTV">CCTV</option>
          <option value="Alarm">Alarm</option>
          <option value="Maintenance">Maintenance</option>
        </select>

        <label>Donor*</label>
        <input
          type="text"
          placeholder="Type Here..."
          id="donor"
          {...register("donor", { required: true })}
        />

        <label>Date*</label>
        <input
          type="date"
          placeholder="Type Here..."
          id="date"
          {...register("date", { required: true })}
        />

        <label>Main Image*</label>
        <input
          style={{ border: "none" }}
          id="main-img"
          type="file"
          onChange={(e) => {
            uploadImage(e.target.files[0], 0);
            console.log(imgStr);
          }}
        />

        <label>Project Description*</label>
        <textarea
          id="description"
          placeholder="Type Here..."
          {...register("description", { required: true })}
        />
        <label>Price*</label>
        <input
          type="number"
          placeholder="Type Here..."
          id="price"
          {...register("price", { required: true })}
        />

        <input className="submit-btn" type="submit" />
      </form>
    </div>
  );
};

export default AddProject;
