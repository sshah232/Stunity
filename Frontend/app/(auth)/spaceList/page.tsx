// This is a server-side component (default in Next.js), so no need for "use client"
export const metadata = {
  title: "Storage Listings - Open PRO",
  description: "Browse available storage and parking spaces.",
};

// Import the client-side component
import StorageListings from "./StorageListings";

export default function Page() {
  return <StorageListings />;
}
