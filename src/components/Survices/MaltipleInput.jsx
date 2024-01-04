import React from 'react';
import { useForm } from 'react-hook-form';

const MaltipleInput = () => {
    const { register, handleSubmit, formState: { errors }, reset, } = useForm();

    const onSubmit = async (data) => {
        try {
            if (data.pImg.length > 0) {
                const formDataArray = [];

                for (const image of data.pImg) {
                    const formData = new FormData();
                    formData.append("image", image);
                    formDataArray.push(formData);
                }

                const uploadPromises = formDataArray.map((formData) =>
                    axios.post("https://api.imgbb.com/1/upload", formData, {
                        params: {
                            key: "658771f4f50c40c4f4f5149ea7db6bbf",
                        },
                    })
                );

                const responses = await Promise.all(uploadPromises);

                // Extract image URLs from responses
                const imageUrls = responses.map((response) => response.data.data.url);
                data.pImg = imageUrls;

                console.log("Uploaded Images URLs:", imageUrls);
            }

            if (data.brandLogo[0]) {
                const formData = new FormData();
                formData.append("image", data.brandLogo[0]);

                // Upload the image to ImgBB using axios
                const response = await axios.post(
                    "https://api.imgbb.com/1/upload",
                    formData,
                    {
                        params: {
                            key: "658771f4f50c40c4f4f5149ea7db6bbf",
                        },
                    }
                );

                // Update the data with the uploaded image URL
                data.brandLogo = response.data.data.url;
                // console.log(response);
            } else {
                data.brandLogo = ""
            }

            axios.post("https://shopnest.vercel.app/products", data)
                .then((result) => {
                    if (result.data.insertedId) {
                        toast("New Product Added Successfully !!!", { autoClose: 2000 });
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
        <div>
            <div className="max-w-2xl mx-auto">
                <form className="">




                    <div className="form-control mb-4">
                        <label className="label" htmlFor="image">
                            <span className="label-text text-base">Related Image</span>
                        </label>
                        <input
                            type="file"
                            id="image"
                            className="file-input border-2 border-[#2db11c] focus:border-[#73dc3eb5] w-full focus:outline-none"
                            {...register("image", { required: true })}
                        />
                        {errors.image && (
                            <span className="text-red-500 text-sm p-1">
                                Class Image is required
                            </span>
                        )}
                    </div>







                    <div className="form-control mb-4">
                        <label className="label" htmlFor="image">
                            <span className="label-text text-base">Related Image 2</span>
                        </label>
                        <input
                            type="file"
                            id="image"
                            className="file-input border-2 border-[#2db11c] focus:border-[#73dc3eb5] w-full focus:outline-none"
                            {...register("image2", { required: true })}
                        />
                        {errors.image && (
                            <span className="text-red-500 text-sm p-1">
                                Class Image is required
                            </span>
                        )}
                    </div>






                    <div className="form-control mb-6">
                        <button
                            // disabled={loading}
                            type="submit"
                            className="btn bg-[#2db11cba] hover:bg-[#2db11ce7] md:btn-lg normal-case md:text-xl disabled:text-white"
                        >
                            Post
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MaltipleInput;