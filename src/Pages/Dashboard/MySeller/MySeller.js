import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import Spinner from "../../../components/Spinner/Spinner";
import { AuthContext } from "../../../context/AuthProvider";
import ConfirmationModal from "../../Shared/ConfirmModal/ConfirmationModal";

const MySeller = () => {
  // const { user } = useContext(AuthContext);
  // const [seller, setSeller] = useState([]);

  const [deleteSeller, setDeleteSeller] = useState(null);
  const closeModal = () => {
    setDeleteSeller(null);
  };

  const {
    data: seller = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["seller"],
    queryFn: async () => {
      const res = await fetch(
        "https://the-cozy-library-server.vercel.app/seller",
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("bookAccessToken")}`,
          },
        }
      );
      const data = res.json();
      return data;
    },
  });

  // useEffect(() => {
  //   fetch("https://the-cozy-library-server.vercel.app/seller", {
  //     headers: {
  //       authorization: `Bearer ${localStorage.getItem("bookAccessToken")}`,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setSeller(data);
  //     });
  // }, []);

  const handleMakeVerified = (user) => {
    fetch(
      `https://the-cozy-library-server.vercel.app/verify-seller/${user._id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("bookAccessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Seller verified successfully");
          refetch();
        }
      });
  };

  const handleDeleteSeller = (user) => {
    fetch(`https://the-cozy-library-server.vercel.app/my-seller/${user._id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("bookAccessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Delete Seller Successfully");
          refetch();
        }
      });
  };

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <section>
      <h2 className="text-3xl font-bold">My Products</h2>
      <div className="my-5">
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Avatar</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
                <th>Verify</th>
              </tr>
            </thead>
            <tbody>
              {seller?.map((user) => (
                <tr key={user._id}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={user?.image} alt="Product img" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{user?.name}</td>
                  <td>{user?.email}</td>
                  <td>
                    <label
                      onClick={() => setDeleteSeller(user)}
                      htmlFor="confirmation-modal"
                      className="btn btn-sm btn-warning"
                    >
                      Delete
                    </label>
                  </td>
                  <th>
                    {user?.verified === "true" ? (
                      "Verified"
                    ) : (
                      <button
                        onClick={() => handleMakeVerified(user)}
                        className="btn btn-info btn-xs"
                      >
                        verify
                      </button>
                    )}
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {deleteSeller && (
          <ConfirmationModal
            title={`are you sure you want to delete`}
            message={`if you delete ${deleteSeller.name}. it can't be undone`}
            closeModal={closeModal}
            successAction={handleDeleteSeller}
            modalData={deleteSeller}
            successButton="Delete"
          ></ConfirmationModal>
        )}
      </div>
    </section>
  );
};

export default MySeller;
