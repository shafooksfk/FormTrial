import React, { useState } from "react";
import img from "./assets/image-1@2x.jpg";
import "./App.css";

export default function Form(props) {
  const [imgPath, setimgPath] = useState(img);
  const [values, setvalues] = useState({});
  function handleImage(e) {
    console.log(e.target.files);
    setvalues({ ...values, img: e.target.files });
    setimgPath(URL.createObjectURL(e.target.files[0]));
  }

  function inputHandle(e) {
    const { name, value } = e.target;
    setvalues({ ...values, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(values);
  }
  return (
    <div className="tracking-wide text-xs font-light flex flex-col align-center my-3 mx-3 max-w-4xl setMargin ">
      <button
        type="button"
        className="ml-auto  bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
        data-dismiss-target="#toast-default"
        aria-label="Close"
        onClick={() => {
          props.setShow(false);
        }}
      >
        <span className="sr-only">Close</span>
        <svg
          aria-hidden="true"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      <h3 className="text-2xl font-semibold tracking-wider text-gray-900 dark:text-white">
        Publish your PoW
      </h3>
      <h4 className="text-lg tracking-wider text-gray-900 dark:text-white mb-3">
        Add your Project details
      </h4>
      <form action="" className="flex flex-col gap-6">
        <div className="flex gap-6">
          <img
            className="h-auto max-w-md"
            src={imgPath}
            alt="image description"
          />
          <div className="flex flex-col gap-6 justify-between flex-grow">
            <div className="col-span-6 sm:col-span-3 ">
              <label
                htmlFor="product-name"
                className="block text-sm font-normal text-gray-700"
              >
                Product name / Project Name *
              </label>
              <input
                type="text"
                name="productName"
                id="product-name"
                placeholder="Enter your work/Project title"
                autoComplete="given-name"
                className="mt-1 w-full block p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                value={values?.productName}
                onChange={inputHandle}
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="product-name"
                className="block text-sm font-normal text-gray-700"
              >
                Add Link
              </label>
              <input
                type="text"
                name="link"
                id="product-name"
                placeholder="Add Social Proof of your Work"
                autoComplete="given-name"
                className="mt-1 w-full block p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                value={values?.link}
                onChange={inputHandle}
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="product-name"
                className="block text-sm font-normal text-gray-700"
              >
                Add Preview Image *
              </label>
              <input
                className="block w-full p-3 text-sm text-gray-900 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="file_input"
                type="file"
                onChange={handleImage}
              />
            </div>
          </div>
        </div>
        {/* //description */}
        <div className="flex flex-col gap-6">
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="product-name"
              className="block text-sm font-normal text-gray-700"
            >
              Description *
            </label>
            <div className="mt-1">
              <textarea
                id="about"
                name="description"
                rows="3"
                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Write about Objective of this project | How long  it took you to build this? | How much would you charge for creating something like this? | Share about tools you've used | Have you done it on your own for for any organization"
                value={values?.description}
                onChange={inputHandle}
              ></textarea>
            </div>
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="product-name"
              className="block text-sm font-normal text-gray-700"
            >
              Invite Collaborators
            </label>
            <input
              type="text"
              name="collaborators"
              id="product-name"
              placeholder="Search your friend for collaborators"
              autoComplete="given-name"
              className="mt-1 w-full block p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={values?.collaborators}
              onChange={inputHandle}
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="product-name"
              className="block text-sm font-normal text-gray-700"
            >
              Keywords
            </label>
            <input
              type="text"
              name="keywords"
              id="product-name"
              placeholder="Coding, Developmet, Design..."
              autoComplete="given-name"
              className="mt-1 w-full block p-3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={values?.keywords}
              onChange={inputHandle}
            />
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <button
            type="button"
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-normal rounded-lg text-sm px-9 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            onClick={() => {
              props.setShow(false);
            }}
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-normal rounded-lg text-sm px-12 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Publish PoW
          </button>
        </div>
      </form>
    </div>
  );
}
