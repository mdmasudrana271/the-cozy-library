import React from "react";

const AuthorsCard = ({author}) => {
    console.log(author)
  return (
    <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-orange-400 dark:text-gray-100 hover:scale-x-0">
      <img
        src={author.imge}
        alt=""
        className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
      />
      <div className="space-y-4 text-center divide-y divide-gray-700">
        <div className="my-2 space-y-1">
          <h2 className="text-xl font-semibold sm:text-2xl">{author.name}</h2>
        </div>
      </div>
    </div>
  );
};

export default AuthorsCard;
