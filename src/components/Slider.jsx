import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import Spinner from "../components/Spinner";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import "swiper/css/bundle";
import { useNavigate } from "react-router-dom";
import { MdCurrencyRupee } from "react-icons/md";

SwiperCore.use([Navigation, Pagination, EffectFade]);

export default function Slider() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function getListings() {
      const listingsRef = collection(db, "listings");
      const q = query(listingsRef, orderBy("timestamp", "desc"), limit(5));
      const querySnap = await getDocs(q);
      let listings = [];
      querySnap.forEach((doc) => {
        listings.push({
          id: doc.id,
          data: doc.data(), // Save document data and ID
        });
      });
      setListings(listings);
      setLoading(false);
    }
    getListings();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (listings.length === 0) {
    return <></>; // Return an empty fragment if there are no listings
  }

  return (
    listings && (
      <>
        <Swiper
          slidesPerView={1}
          navigation
          pagination={{ type: "progressbar" }}
          effect="fade"
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          {listings.map(({ data, id }) => (
            <SwiperSlide
              key={id}
              onClick={() => navigate(`/category/${data.type}/${id}`)}
            >
              <div
                style={{
                  background:
                    data.imgUrls && data.imgUrls.length > 0
                      ? `url(${data.imgUrls[0]}) center no-repeat`
                      : "gray",
                  backgroundSize: "cover",
                }}
                className="relative w-full h-[450px]"
              ></div>
              <p className="text-[#f1faee] absolute top-3 left-1 font-semibold max-w-[90%] bg-[#457b9d] shadow-lg opacity-90 p-2 rounded-br-xl">
                {data.name}{" "}
              </p>
              <p className="text-[#f1faee] absolute bottom-3 left-1 font-semibold max-w-[90%] bg-red-600 shadow-lg opacity-90 p-2 rounded-tr-xl flex items-center">
                <MdCurrencyRupee className="text-sm " />
                {data.discountedPrice ?? data.regularPrice}
                {data.type === "rent" && " / Month"}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    )
  );
}
