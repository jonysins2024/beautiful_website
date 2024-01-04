import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
const ManageClasses = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    try {
      if (data.P_url[0]) {
        const formData = new FormData();
        formData.append("image", data.P_url[0]);

        // Upload the image to ImgBB using axios
        const response = await axios.post(
          "https://api.imgbb.com/1/upload",
          formData,
          {
            params: {
              key: "3b9febd9f51955af4f4e36ea848f1f1e",
            },
          }
        );
        data.P_url = response.data.data.url;
      }
      else {

        data.P_url = ""

      }

      if (data.Doc_1_PC[0]) {
        const formData = new FormData();
        formData.append("image", data.Doc_1_PC[0]);

        // Upload the image to ImgBB using axios
        const response = await axios.post(
          "https://api.imgbb.com/1/upload",
          formData,
          {
            params: {
              key: "3b9febd9f51955af4f4e36ea848f1f1e",
            },
          }
        );

        // Update the data with the uploaded image URL
        data.Doc_1_PC = response.data.data.url;
        // console.log(response);
      } else {

        data.Doc_1_PC = ""

      }
      if (data.Doc_2_PC[0]) {
        const formData = new FormData();
        formData.append("image", data.Doc_2_PC[0]);

        // Upload the image to ImgBB using axios
        const response = await axios.post(
          "https://api.imgbb.com/1/upload",
          formData,
          {
            params: {
              key: "3b9febd9f51955af4f4e36ea848f1f1e",
            },
          }
        );

        // Update the data with the uploaded image URL
        data.Doc_2_PC = response.data.data.url;
        // console.log(response);
      } else {

        data.Doc_2_PC = ""

      }
      if (data.Doc_3_PC[0]) {
        const formData = new FormData();
        formData.append("image", data.Doc_3_PC[0]);

        // Upload the image to ImgBB using axios
        const response = await axios.post(
          "https://api.imgbb.com/1/upload",
          formData,
          {
            params: {
              key: "3b9febd9f51955af4f4e36ea848f1f1e",
            },
          }
        );

        // Update the data with the uploaded image URL
        data.Doc_3_PC = response.data.data.url;
        // console.log(response);
      } else {

        data.Doc_3_PC = ""

      }
      if (data.Doc_4_PC[0]) {
        const formData = new FormData();
        formData.append("image", data.Doc_4_PC[0]);

        // Upload the image to ImgBB using axios
        const response = await axios.post(
          "https://api.imgbb.com/1/upload",
          formData,
          {
            params: {
              key: "3b9febd9f51955af4f4e36ea848f1f1e",
            },
          }
        );

        // Update the data with the uploaded image URL
        data.Doc_4_PC = response.data.data.url;
        // console.log(response);
      } else {

        data.Doc_4_PC = ""

      }


      data.User_Hide = "No";
      data.Status = "Approved";
      // console.log({ data });

      // Make the axios POST request
      axios.post("https://backend-kappa-puce.vercel.app/cofees", data)
        .then((result) => {
          if (result.data.insertedId) {
            alert("New Product Added Successfully !!!", { autoClose: 2000 });
            reset();
          }
        })
        .catch((error) => {
          console.log("Error:", error.message);
        });
    } catch (error) {
      console.log("Error uploading images:", error.message);
    }
  };


  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-[800px] bg-slate-100 bg-gradient-to-r from-[#460eef] to-[#8d94d6] text-white mx-auto my-20 border-2 p-4 rounded-md shadow-md">
          {/* <DashboardInfoText title={'Add New Product'} /> */}
          <div className='grid md:grid-cols-2 grid-cols-1 w-full gap-4'>

            <div className="mb-2">
              <label className="block mb-1 font-medium">
                Enter Passport Number
              </label>
              <input
                type="text"
                {...register('id')}
                placeholder="Passport Number"
                required
                className="form-input w-full max-w-xs bg-[#fff] text-slate-600 py-3 rounded-md"
              />
            </div>

            {/* <div className="mb-2">
              <label className="block mb-1 font-medium">
                Product Image Upload*
              </label>
              <input type="file" required {...register('pImg')} className="file-input w-full max-w-xs bg-[#fff] text-slate-600" multiple />
            </div> */}

            <div className="mb-2">
              <label className="block mb-1 font-medium">
                Enter IRCC Number
              </label>
              <input
                type="text"
                {...register('IRCC_Num')}
                placeholder="IRCC Number"
                required
                className="form-input w-full max-w-xs bg-[#fff] text-slate-600 py-3 rounded-md"

              />
            </div>
            <div className="mb-2">
              <label className="block mb-1 font-medium">
                Enter Name
              </label>
              <input
                type="text"
                {...register('name')}
                placeholder="Name"
                required
                className="form-input w-full max-w-xs bg-[#fff] text-slate-600 py-3 rounded-md"

              />
            </div>
            <div className="mb-2">
              <label className="block mb-1 font-medium">
                Enter Fathers Name
              </label>
              <input
                type="text"
                {...register('F_name')}
                placeholder="Fathers Name"
                required
                className="form-input  w-full max-w-xs bg-[#fff] text-slate-600 py-3 rounded-md "

              />
            </div>
            <div className="mb-2">
              <label className="block mb-1 font-medium">
                Enter Mothers Name
              </label>
              <input
                type="text"
                {...register('M_name')}
                placeholder="Mothers Name"
                required
                className="form-input  w-full max-w-xs bg-[#fff] text-slate-600 py-3 rounded-md "

              />
            </div>
            <div className="mb-2">
              <label className="block mb-1 font-medium">
                Enter Address
              </label>
              <input
                type="text"
                {...register('Po_address')}
                placeholder="Address"
                required
                className="form-input  w-full max-w-xs bg-[#fff] text-slate-600 py-3 rounded-md "

              />
            </div>

            <div className="mb-2">
              <label className="block mb-1 font-medium">
                Enter Nationality
              </label>
              <input
                type="text"
                {...register('nationality')}
                placeholder="nationality"
                className="form-input  w-full max-w-xs bg-[#fff] text-slate-600 py-3 rounded-md "

              />
            </div>
            <div className="mb-2">
              <label className="block mb-1 font-medium">
                Upload Candidate Photo
              </label>
              <input type="file" {...register('P_url', { required: false })} className="file-input w-full max-w-xs bg-[#fff] text-slate-600" />
            </div>
            <div className="mb-2">
              <label className="block mb-1 font-medium">
                Upload Work Permit Certificate
              </label>
              <input type="file" {...register('Doc_1_PC', { required: false })} className="file-input w-full max-w-xs bg-[#fff] text-slate-600" />
            </div>
            <div className="mb-2">
              <label className="block mb-1 font-medium">
                Upload Visa Paper
              </label>
              <input type="file" {...register('Doc_2_PC', { required: false })} className="file-input w-full max-w-xs bg-[#fff] text-slate-600" />
            </div>
            <div className="mb-2">
              <label className="block mb-1 font-medium">
                Upload  Application Status
              </label>
              <input type="file" {...register('Doc_3_PC', { required: false })} className="file-input w-full max-w-xs bg-[#fff] text-slate-600" />
            </div>
            <div className="mb-2">
              <label className="block mb-1 font-medium">
                Upload LIMA Certificate
              </label>
              <input type="file" {...register('Doc_4_PC', { required: false })} className="file-input w-full max-w-xs bg-[#fff] text-slate-600" />
            </div>
          </div>

          <button type="submit" className="block w-full px-4 py-3 text-xl font-bold awesome-btn rounded-md  border-2 border-black bg-blue-950 hover:scale-105 duration-200" >Add new User</button>
        </form>
      </div>
    </>
  )
}

export default ManageClasses
