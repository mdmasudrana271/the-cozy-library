import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider';

const BookingModal = ({booking, setBooking}) => {

    const {user}  = useContext(AuthContext)

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const productName = form.productName.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const price = form.price.value;
        const location = form.location.value;

        const order = {
            product: productName,
            clientName: name,
            email,
            phone,
            price,
            location
        }
        console.log(order);

        fetch('http://localhost:5000/bookings',{
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(order)
        })
        .then(res=> res.json())
        .then(data => {
          console.log(data)
          if(data.acknowledged){
            setBooking(null)
            toast.success('booking confirmed')
          }
          else{
            toast.error(data.message)
            setBooking(null)
          }
        })

        
    }
    return (
        <>
          <input type="checkbox" id="booking-modal" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative">
              <label
                htmlFor="booking-modal"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <h3 className="text-lg font-bold">
              </h3>
              <form onSubmit={handleBooking} className="grid grid-cols-1 gap-2 mt-6">
                <div>
                <label className="label">
                    <span className="label-text">Name</span>
                 </label>
                <input name='name' type="text" defaultValue={user?.displayName}  disabled className="input input-bordered w-full" />
                </div>
                <div>
                <label className="label">
                    <span className="label-text">Email</span>
                 </label>
                <input name='email' type="email" required defaultValue={user?.email} disabled className="input input-bordered w-full" />
                </div>
                <div>
                <label className="label">
                    <span className="label-text">Product Name</span>
                 </label>
                <input name='productName' type="text" required defaultValue={booking?.name} disabled  className="input input-bordered w-full" />
                </div>
                <div>
                <label className="label">
                    <span className="label-text">Price</span>
                 </label>
                <input name='price' type="text" required defaultValue={booking?.price} disabled className="input input-bordered w-full" />
                </div>
                <div>
                <label className="label">
                    <span className="label-text">Meeting Location</span>
                 </label>
                <input name='location' type="text" required placeholder="Meeting Location" className="input input-bordered w-full" />
                </div>
                <div>
                <label className="label">
                    <span className="label-text">Phone Number</span>
                 </label>
                <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full" />
                </div>
                <input type="submit"   className="btn btn-accent w-full" />
              </form>
            </div>
          </div>
        </>
      );
    };
    
    export default BookingModal;