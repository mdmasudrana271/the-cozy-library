import React from "react";

const MyOrders = () => {
  return (
    <section>
      <section>
      <h2 className="text-3xl font-bold">My Orders</h2>
        <div className="my-5">
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Action</th>
                  <th>Advertised</th>
                </tr>
              </thead>
              <tbody>
                {/* {products.map((product) => (
                  <ProductsRow
                    key={product._id}
                    product={product}
                  ></ProductsRow>
                ))} */}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </section>
  );
};

export default MyOrders;
