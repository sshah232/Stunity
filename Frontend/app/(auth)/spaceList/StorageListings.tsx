"use client"; // Ensure this is a client-side component

import { useState } from "react";
import Link from "next/link";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Leaflet CSS
import L from "leaflet"; // Leaflet for handling markers
import { LatLngExpression } from "leaflet";
import Image from "next/image";

// Sample data structure for storage spaces
const sampleSpaces = [
  {
    id: 1,
    title: "Spacious Garage in Downtown",
    size: "200 sq ft",
    price: "$150/month",
    image: "/images/garage1.jpg",
    coordinates: [40.73061, -73.935242] as LatLngExpression, // Ensure proper type
  },
  {
    id: 2,
    title: "Indoor Parking Near Airport",
    size: "300 sq ft",
    price: "$100/month",
    image: "/images/parking1.jpg",
    coordinates: [40.712776, -74.005974] as LatLngExpression, // Ensure proper type
  },
];
const storageSpaces = [
  {
    id: 1,
    title: "Spacious Garage",
    size: "400 sq ft",
    price: "$100/month",
    imageUrl: "/images/dummy.png",
  },
  {
    id: 2,
    title: "Small Storage Room",
    size: "200 sq ft",
    price: "$50/month",
    imageUrl: "/images/dummy.png",
  },
  {
    id: 3,
    title: "Outdoor Shed",
    size: "300 sq ft",
    price: "$80/month",
    imageUrl: "/images/dummy.png",
  },
];

export default function StorageListings() {
  const [spaces, setSpaces] = useState(sampleSpaces);

  // Custom marker for the map
  const icon = L.icon({
    iconUrl: "/images/marker-icon.png", // Customize the marker icon if needed
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="pb-12 text-center">
            <h1 className="text-3xl font-semibold">
              Available Storage & Parking Spaces
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column: List of storage spaces */}
            <div className="space-y-4">
              {spaces.map((space) => (
                <div
                  key={space.id}
                  className="border rounded-lg p-4 shadow-md flex space-x-4"
                >
                  <img
                    src={space.image}
                    alt={space.title}
                    className="w-24 h-24 rounded-lg object-cover"
                  />
                  <div>
                    <h2 className="text-lg font-semibold">{space.title}</h2>
                    <p className="text-sm text-gray-600">{space.size}</p>
                    <p className="text-sm text-gray-800">{space.price}</p>
                    <Link
                      href={`/space/${space.id}`}
                      className="text-indigo-600 hover:underline"
                    >
                      View details
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Map */}
            <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-md">
              <MapContainer
                center={[40.73061, -73.935242]} // NYC example
                zoom={12}
                scrollWheelZoom={false}
                className="h-full w-full"
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {spaces.map((space) => (
                  <Marker
                    key={space.id}
                    position={space.coordinates} // Properly typed coordinates
                    icon={icon}
                  >
                    <Popup>
                      <div className="text-sm">
                        <strong>{space.title}</strong>
                        <p>{space.size}</p>
                        <p>{space.price}</p>
                        <Link
                          href={`/space/${space.id}`}
                          className="text-indigo-600 hover:underline"
                        >
                          View Details
                        </Link>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center">
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Search Storage Spaces
            </h1>
            <p className="mt-4 text-lg text-gray-500">
              Find the perfect storage space for your needs.
            </p>
          </div>

          {/* Storage Spaces List */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {storageSpaces.map((space) => (
              <a
                key={space.id}
                href="#"
                className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px hover:shadow-lg transition-shadow"
              >
                <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                  {/* Image */}
                  <Image
                    className="inline-flex"
                    src={space.imageUrl}
                    width={350}
                    height={288}
                    alt={space.title}
                  />
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-200">
                      {space.title}
                    </h3>
                    <p className="text-gray-400 mt-2">Size: {space.size}</p>
                    <p className="text-gray-400">Price: {space.price}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
