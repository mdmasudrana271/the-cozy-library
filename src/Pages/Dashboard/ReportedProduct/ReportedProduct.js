import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import Spinner from "../../../components/Spinner/Spinner";
import ConfirmationModal from "../../Shared/ConfirmModal/ConfirmationModal";

const ReportedProduct = () => {
  const [deleteProducts, setDeleteProducts] = useState(null);
  const closeModal = () => {
    setDeleteProducts(null);
  };

  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["report-product"],
    queryFn: async () => {
      const res = await fetch(
        "https://the-cozy-library-server.vercel.app/report-product",
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

  const handleDeleteProduct = (product) => {
    fetch(
      `https://the-cozy-library-server.vercel.app/report-product/${product._id}`,
      {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("bookAccessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Product deleted successfully");
          refetch();
        }
      });

    console.log(product);
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
                <th>Name</th>
                <th>Price</th>
                <th>Seller</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products?.map((product) => (
                <tr key={product._id}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={product.image} alt="Product img" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{product.name}</div>
                        <div className="text-sm opacity-50">United States</div>
                      </div>
                    </div>
                  </td>
                  <td>{product.price}</td>
                  <td>{product.sellerName}</td>
                  <td>{product.number}</td>
                  <td>
                    <label
                      onClick={() => setDeleteProducts(product)}
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

        {deleteProducts && (
          <ConfirmationModal
            title={`are you sure you want to delete`}
            message={`if you delete ${deleteProducts.name}. it can't be undone`}
            closeModal={closeModal}
            successAction={handleDeleteProduct}
            modalData={deleteProducts}
            successButton="Delete"
          ></ConfirmationModal>
        )}
      </div>
    </section>
  );
};

export default ReportedProduct;
