// app/addspace/page.tsx
import AddListing from "./AddListing";

export const metadata = {
  title: "Add Listing - Stunity",
  description: "Add a new listing for renting out storage space",
};

export default function AddSpacePage() {
  return <AddListing />;
}
