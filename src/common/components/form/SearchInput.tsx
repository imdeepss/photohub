"use client";

import React from "react";
import { SearchIcon } from "../icons";
import { useForm } from "react-hook-form";
import { getImagesUnsplashAPI } from "@/common/hooks";
import { SearchInputType } from "@/common/type";



const SearchInput = () => {
  const { handleSubmit, register, getValues, watch, resetField, control } =
    useForm<SearchInputType>({
      mode: "onChange",
    });
  const onChange = async (data: SearchInputType) => {
    const searchResult = await getImagesUnsplashAPI(data);
    console.log(searchResult);
  };

  return (
    <form
      onChange={handleSubmit(onChange)}
      autoComplete="off"
      aria-label="searchForm"
      name="searchForm"
    >
      <div className="items-center rounded-full bg-grey px-2 py-2 flex md:px-4 md:py-3 w-full">
        <SearchIcon />
        <input
          type="search"
          className="bg-transparent px-2 outline-none md:px-3 w-full"
          placeholder="search..."
          {...register("search")}
        />
      </div>
    </form>
  );
};

export default SearchInput;
