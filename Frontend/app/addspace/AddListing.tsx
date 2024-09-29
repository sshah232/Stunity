// app/addspace/AddListing.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

export default function AddListing() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        address: "",
        dimensions: "",
        price: "",
        date: "",
    });

    const [width, setWidth] = useState(10); // Slider-controlled width
    const fixedRatio = 1.5;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newWidth = parseInt(e.target.value, 10);
        setWidth(newWidth);
        const newDimensions = `${newWidth}x${(newWidth * fixedRatio).toFixed(1)}`;
        setFormData({ ...formData, dimensions: newDimensions });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form data submitted:", formData);
    };

    return (
        <section>
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="py-12 md:py-20">
                    {/* Section header */}
                    <div className="pb-12 text-center">
                        <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
                            Add Your Storage Listing
                        </h1>
                    </div>
                    {/* Add Listing form */}
                    <form className="mx-auto max-w-[600px]" onSubmit={handleSubmit}>
                        <div className="space-y-5">
                            <div>
                                <label
                                    className="mb-1 block text-sm font-medium text-indigo-200/65"
                                    htmlFor="name"
                                >
                                    Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    className="form-input w-full"
                                    placeholder="Your name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    className="mb-1 block text-sm font-medium text-indigo-200/65"
                                    htmlFor="phone"
                                >
                                    Phone Number <span className="text-red-500">*</span>
                                </label>
                                <input
                                    id="phone"
                                    type="tel"
                                    className="form-input w-full"
                                    placeholder="Your phone number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    className="mb-1 block text-sm font-medium text-indigo-200/65"
                                    htmlFor="address"
                                >
                                    Address <span className="text-red-500">*</span>
                                </label>
                                <input
                                    id="address"
                                    type="text"
                                    className="form-input w-full"
                                    placeholder="Listing address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    className="mb-1 block text-sm font-medium text-indigo-200/65"
                                    htmlFor="dimensions"
                                >
                                    Dimensions (Approx) <span className="text-red-500">*</span>
                                </label>
                                <div>
                                    <input
                                        type="range"
                                        id="dimensions"
                                        min="5"
                                        max="50"
                                        value={width}
                                        onChange={handleSliderChange}
                                        className="w-full"
                                    />
                                    <p className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-2xl text-center mx-auto">
                                        Width: {width} feet, Length: {(width * fixedRatio).toFixed(1)} feet</p>
                                </div>
                            </div>
                            <div>
                                <label
                                    className="mb-1 block text-sm font-medium text-indigo-200/65"
                                    htmlFor="price"
                                >
                                    Pricing ($) / hour <span className="text-red-500">*</span>
                                </label>
                                <input
                                    id="price"
                                    type="number"
                                    className="form-input w-full"
                                    placeholder="Price in dollars"
                                    value={formData.price}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    className="mb-1 block text-sm font-medium text-indigo-200/65"
                                    htmlFor="date"
                                >
                                    Availability Date & Time <span className="text-red-500">*</span>
                                </label>
                                <input
                                    id="date"
                                    type="datetime-local"
                                    className="form-input w-full"
                                    value={formData.date}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="mt-6">
                            <button className="btn w-full bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%]">
                                Submit Listing
                            </button>
                        </div>
                    </form>
                    {/* Bottom link */}
                    <div className="mt-6 text-center text-sm text-indigo-200/65">
                        Want to go back?{" "}
                        <Link className="font-medium text-indigo-500" href="/dashboard">
                            Return to Dashboard
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
