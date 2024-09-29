"use client"; // Ensure this is a client-side component

import { useState } from "react";
import Link from "next/link";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Leaflet CSS
import L from "leaflet"; // Leaflet for handling markers
import { LatLngExpression } from "leaflet";
import Image from "next/image";

// Sample data structure for storage and parking spaces

const sampleSpaces = [
  {
    id: 1,
    title: "Spacious Garage in Downtown",
    size: "200 sq ft",
    price: "$150/month",
    image: "/images/dummy.png",
    coordinates: [33.421779751749206, -111.92139249303236] as LatLngExpression, // Ensure proper type
    category: "parking", // New category field
  },
  {
    id: 2,
    title: "Indoor Parking Near Airport",
    size: "300 sq ft",
    price: "$100/month",
    image: "/images/dummy.png",
    coordinates: [40.712739, -74.005974] as LatLngExpression, // Ensure proper type
    category: "parking", // New category field
  },
  {
    id: 3,
    title: "Small Storage Room",
    size: "200 sq ft",
    price: "$50/month",
    image: "/images/dummy.png",
    coordinates: [40.712776, -74.005974] as LatLngExpression,
    category: "storage", // New category field
  },
  {
    id: 4,
    title: "Outdoor Shed",
    size: "300 sq ft",
    price: "$80/month",
    image: "/images/dummy.png",
    coordinates: [40.7304, -73.935242] as LatLngExpression,
    category: "storage", // New category field
  },
];

export default function StorageListings() {
  const [spaces, setSpaces] = useState(sampleSpaces);
  const [category, setCategory] = useState<string>("all");

  // Filter spaces based on the selected category
  const filteredSpaces = spaces.filter((space) =>
    category === "all" ? true : space.category === category
  );

  // Custom marker for the map
  const icon = L.icon({
    iconUrl: "/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="py-12 md:py-20">
        {/* Section header */}
        <div className="mx-auto max-w-3xl pb-12 text-center">
          <h2 className="text-4xl font-semibold text-white-800" style={{ color:  "beige", paddingBottom: "20px" }}>

            browse spaces
          </h2>
          <p className="text-sm text-white-400">
            find the perfect storage or parking space for your needs.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center pb-12 max-md:hidden md:pb-16">
          <div className="relative inline-flex flex-wrap justify-center rounded-[1.25rem] bg-gray-800/40 p-1">
            {/* View All Button */}
            <button
              className={`flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-200 ${
                category === "all"
                  ? "relative bg-gradient-to-b from-gray-900 via-gray-800/60 to-gray-900 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.indigo.500/0),theme(colors.indigo.500/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]"
                  : "opacity-65 transition-opacity hover:opacity-90"
              }`}
              aria-pressed={category === "all"}
              onClick={() => setCategory("all")}
            >
              <svg
                className={`fill-current ${
                  category === "all" ? "text-indigo-500" : "text-gray-600"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height={16}
              >
                <path d="M.062 10.003a1 1 0 0 1 1.947.455c-.019.08.01.152.078.19l5.83 3.333c.052.03.115.03.168 0l5.83-3.333a.163.163 0 0 0 .078-.188 1 1 0 0 1 1.947-.459 2.161 2.161 0 0 1-1.032 2.384l-5.83 3.331a2.168 2.168 0 0 1-2.154 0l-5.83-3.331a2.162 2.162 0 0 1-1.032-2.382Zm7.854-7.981-5.83 3.332a.17.17 0 0 0 0 .295l5.828 3.33c.054.031.118.031.17.002l5.83-3.333a.17.17 0 0 0 0-.294L8.085 2.023a.172.172 0 0 0-.17-.001ZM9.076.285l5.83 3.332c1.458.833 1.458 2.935 0 3.768l-5.83 3.333c-.667.38-1.485.38-2.153-.001l-5.83-3.332c-1.457-.833-1.457-2.935 0-3.767L6.925.285a2.173 2.173 0 0 1 2.15 0Z" />
              </svg>
              <span>View All</span>
            </button>
            {/* Storage Button */}
            <button
              className={`flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-200 ${
                category === "storage"
                  ? "relative bg-gradient-to-b from-gray-900 via-gray-800/60 to-gray-900 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.indigo.500/0),theme(colors.indigo.500/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]"
                  : "opacity-65 transition-opacity hover:opacity-90"
              }`}
              aria-pressed={category === "storage"}
              onClick={() => setCategory("storage")}
            >
              <svg
                className={`fill-current ${
                  category === "storage" ? "text-indigo-500" : "text-gray-600"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height={16}
              >
                <path d="M6.5 3.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM9 6.855A3.502 3.502 0 0 0 8 0a3.5 3.5 0 0 0-1 6.855v1.656L5.534 9.65a3.5 3.5 0 1 0 1.229 1.578L8 10.267l1.238.962a3.5 3.5 0 1 0 1.229-1.578L9 8.511V6.855Zm2.303 4.74c.005-.005.01-.01.013-.016l.012-.016a1.5 1.5 0 1 1-.025.032ZM3.5 11A1.497 1.497 0 0 1 5 12.5 1.5 1.5 0 1 1 3.5 11Z" />
              </svg>
              <span>Storage</span>
            </button>
            {/* Parking Button */}
            <button
              className={`flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-200 ${
                category === "parking"
                  ? "relative bg-gradient-to-b from-gray-900 via-gray-800/60 to-gray-900 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.indigo.500/0),theme(colors.indigo.500/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]"
                  : "opacity-65 transition-opacity hover:opacity-90"
              }`}
              aria-pressed={category === "parking"}
              onClick={() => setCategory("parking")}
            >
              <svg
                className={`fill-current ${
                  category === "parking" ? "text-indigo-500" : "text-gray-600"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height={16}
              >
                <path d="M2.428 10c.665-1.815 1.98-3.604 3.44-4.802-.6-1.807-1.443-3.079-2.29-3.18-1.91-.227-2.246 2.04-.174 2.962a1 1 0 1 1-.813 1.827C-1.407 5.028-.589-.491 3.815.032c1.605.191 2.925 1.811 3.79 4.07.979-.427 1.937-.51 2.735-.092.818.429 1.143 1.123 1.294 2.148.015.1.022.149.043.32.542-.537 1.003-.797 1.693-.622.64.162.894.493 1.195 1.147l.018.04a1 1 0 0 1 1.133 1.61c-.46.47-1.12.574-1.744.398a1.661 1.661 0 0 1-.87-.592 2.127 2.127 0 0 1-.224-.349 3.225 3.225 0 0 1-.55.477c-.377.253-.8.368-1.259.267-.993-.218-1.21-.779-1.367-2.05-.027-.22-.033-.262-.046-.353-.067-.452-.144-.617-.244-.67-.225-.118-.665-.013-1.206.278.297 1.243.475 2.587.516 3.941H15a1 1 0 0 1 0 2H8.68l-.025.285c-.173 1.918-.906 3.381-2.654 3.668-1.5.246-3.013-.47-3.677-1.858-.29-.637-.39-1.35-.342-2.095H1a1 1 0 0 1 0-2h1.428Zm2.11 0h2.175a18.602 18.602 0 0 0-.284-2.577c-.205.202-.408.42-.606.654A9.596 9.596 0 0 0 4.537 10Zm2.135 2H3.942c-.032.465.03.888.194 1.25.258.538.89.836 1.54.73.546-.09.888-.772.988-1.875L6.673 12Z" />
              </svg>
              <span>Parking</span>
            </button>
          </div>
        </div>

        {/* Map & Listings */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Map Container */}
          <div className="order-2 lg:order-1">
            <MapContainer
              center={[33.4230, -111.9278]}
              zoom={13}
              style={{ height: "400px" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
              />
              {filteredSpaces.map((space) => (
                <Marker key={space.id} position={space.coordinates} icon={icon}>
                  <Popup>{space.title}</Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>

          {/* Listings */}
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {filteredSpaces.map((space) => (
                <div
                  key={space.id}
                  className="bg-white shadow-md rounded-lg p-4"
                >
                  <Image
                    src={space.image}
                    alt={space.title}
                    width={400}
                    height={200}
                    className="rounded-lg"
                  />
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold">{space.title}</h3>
                    <p className="text-sm text-gray-600">Size: {space.size}</p>
                    <p className="text-sm text-gray-600">
                      Price: {space.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
