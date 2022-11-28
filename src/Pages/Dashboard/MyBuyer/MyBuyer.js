import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import Spinner from "../../../components/Spinner/Spinner";
import ConfirmationModal from "../../Shared/ConfirmModal/ConfirmationModal";

const MyBuyer = () => {

    // const [buyers, setBuyers] = useState([])
    const [deleteUser, setDeleteUser] = useState(null);

    const closeModal = () => {
      setDeleteUser(null);
    };


    const {data: buyers = [], isLoading, refetch} = useQuery({
      queryKey: ["buyers"],
    queryFn: async () => {
      const res = await fetch('https://the-cozy-library-server.vercel.app/buyers', {
        headers: {
          authorization: `Bearer ${localStorage.getItem("bookAccessToken")}`,
        },
      });
      const data = res.json();
      return data;
    },
    })


    const handleDeleteSeller = (user) => {
      fetch(`https://the-cozy-library-server.vercel.app/my-buyer/${user._id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("bookAccessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Delete Buyer Successfully");
            refetch()
          }
        });
    };
  
    if(isLoading){
      return <Spinner></Spinner>
    }


  return (
    <section>
      {buyers?.length === 0 ? (
        <p className="text-3xl mt-10 font-bold">You have no products</p>
      ) : (
        <>
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
                  </tr>
                </thead>
                <tbody>
                  {buyers?.map((user) => (
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
                          onClick={() => setDeleteUser(user)}
                          htmlFor="confirmation-modal"
                          className="btn btn-sm btn-warning"
                        >
                          Delete
                        </label>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {deleteUser && (
              <ConfirmationModal
                title={`are you sure you want to delete`}
                message={`if you delete ${deleteUser.name}. it can't be undone`}
                closeModal={closeModal}
                successAction={handleDeleteSeller}
                modalData={deleteUser}
                successButton="Delete"
              ></ConfirmationModal>
            )}
          </div>
        </>
      )}
    </section>
  );
};

export default MyBuyer;
