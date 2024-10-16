import { getAuth, updateProfile } from "firebase/auth";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { db } from "../firebase";
import { FcHome } from "react-icons/fc";
import ListingItem from "../components/ListingItem";

export default function Profile() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const { name, email } = formData;
  const [changeDetails, setChangeDetails] = useState(false);
  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);

  function handleChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  async function handleSubmit() {
    try {
      if (auth.currentUser.displayName !== name) {
        await updateProfile(auth.currentUser, {
          displayName: name,
        });

        const docRef = doc(db, "users", auth.currentUser.uid);
        await updateDoc(docRef, {
          name,
        });
        toast.success("Profile details updated.");
      }
    } catch (error) {
      toast.error("Error updating details.");
    }
  }
  function handleLogout() {
    auth.signOut();
    navigate("/");
    toast.success("Sign Out successful");
  }

  useEffect(() => {
    async function fetchUserListings() {
      const listingRef = collection(db, "listings");
      const q = query(
        listingRef,
        where("userRef", "==", auth.currentUser.uid),
        orderBy("timestamp", "desc")
      );
      const querySnap = await getDocs(q);
      let listings = [];
      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      setListings(listings);
      setLoading(false);
    }
    fetchUserListings();
  }, [auth.currentUser.uid]);

  async function onDelete(listingID){
    if(window.confirm("Are you sure you want to delete?")){
      await deleteDoc(doc(db,"listings",listingID));
      const updatedListings = listings.filter(
        (listing)=> listing.id !== listingID
      );
      setListings(updatedListings);
      toast.success("Successfully deleted listing.");
    }
  }
  function onEdit(listingId){
    navigate(`/edit-listing/${listingId}`);
  }
  return (
    <>
      <section className="max-w-6xl mx-auto flex flex-col justify-center items-center">
        <h1 className="text-3xl text-center mt-6">My Profile</h1>
        <div className="w-full md:w-[50%] mt-6 px-3">
          <form>
            <input
              type="text"
              id="name"
              value={name}
              disabled={!changeDetails}
              onChange={handleChange}
              className={`w-full px-4 py-2 text-xl text-gray-700 border border-gray-300 rounded transition duration-200 ease-in-out mb-6 bg-white ${
                changeDetails &&
                "bg-green-400 focus:bg-green-500 cursor-pointer"
              }`}
            />
            <input
              type="email"
              id="email"
              value={email}
              disabled
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-200 ease-in-out mb-6 cursor-not-allowed"
            />

            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6">
              <p className="flex items-center">
                Do you want to change your name?{" "}
                <span
                  onClick={() => {
                    changeDetails && handleSubmit();
                    setChangeDetails((prevState) => !prevState);
                  }}
                  className="text-red-600 hover:text-red-800 transition duration-200 ease-in-out ml-1 cursor-pointer"
                >
                  {changeDetails ? "Apply change" : "Edit"}
                </span>
              </p>
              <p
                onClick={handleLogout}
                className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out cursor-pointer"
              >
                Sign out
              </p>
            </div>
          </form>
          <Link to="/create-listing">
            <button
              type="submit"
              className="w-full bg-blue-600 rounded text-white uppercase px-7 py-3 text-sm font-medium shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800 flex justify-center items-center "
            >
              <FcHome className="mr-2 text-3xl bg-red-200 rounded-full p-0.5 border-2" />
              Sell or rent your property
            </button>
          </Link>
        </div>
      </section>

      <div className="max-w-7xl px-3 mt-6 mx-auto">
        {!loading && listings.length > 0 && (
          <>
            <h2 className="text-2xl text-center font-semibold mt-12 ">
              My Listings
            </h2>
            <ul className="sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 mt-6 mb-6">
              {listings.map((listing) => (
                <ListingItem
                  key={listing.id}
                  id={listing.id}
                  listing={listing.data}
                  onDelete={() => onDelete(listing.id)}
                  onEdit={() => onEdit(listing.id)}
                />
              ))}
            </ul>
          </>
        )}
      </div>
    </>
  );
}
