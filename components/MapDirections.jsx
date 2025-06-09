import React from "react";

const MapDirections = () => {
  const address = "H119, Sector 63 Rd, H Block, Noida, Uttar Pradesh 201301";
  const encodedAddress = encodeURIComponent(address);

  return (
    <section className="bg-[#99b4cb] py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Find Us</h2>
        <p className="mb-6 text-gray-600">
          Visit our office or get directions using Google Maps.
        </p>

        <div className="w-full h-[400px] mb-6">
          <iframe
            title="Our Location"
            className="w-full h-full rounded-xl shadow-lg"
            src={`https://maps.google.com/maps?q=${encodedAddress}&t=&z=17&ie=UTF8&iwloc=&output=embed`}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <a
          href={`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#ffd200] text-black font-semibold py-2 px-5 rounded-full shadow hover:bg-[#f7971e] transition"
        >
          Get Directions
        </a>
      </div>
    </section>
  );
};

export default MapDirections;
