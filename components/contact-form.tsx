"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import AddressAutocomplete from "@/components/autocomplete";
import { createBrowserClient } from "@/lib/supabase";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyAddress: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddressSelect = (place: any) => {
    const address = place.formatted_address || place.name || "";
    setFormData((prev) => ({ ...prev, propertyAddress: address }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      const supabase = createBrowserClient();

      // Insert into seller_leads table
      const { data, error } = await supabase
        .from("seller_leads")
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            address: formData.propertyAddress,
            message: formData.message,
          },
        ])
        .select();

      if (error) {
        throw error;
      }

      // Success!
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        propertyAddress: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error: any) {
      console.error("Error submitting form:", error);
      setSubmitError(
        error.message ||
          "Failed to submit form. Please try again or contact us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
          >
            Name
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your full name"
            className="w-full"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
          >
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            placeholder="your.email@example.com"
            className="w-full"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
          >
            Phone
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="(555) 123-4567"
            className="w-full"
          />
        </div>

        <div>
          <label
            htmlFor="propertyAddress"
            className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
          >
            Property Address
          </label>
          <AddressAutocomplete
            id="propertyAddress"
            name="propertyAddress"
            required
            value={formData.propertyAddress}
            onChange={handleInputChange}
            onSelect={handleAddressSelect}
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
          >
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Tell us about your property..."
            rows={5}
            className="w-full"
          />
        </div>
      </div>

      {submitError && (
        <div className="rounded-lg bg-red-50 border border-red-200 p-4">
          <p className="text-sm text-red-800">{submitError}</p>
        </div>
      )}

      {submitSuccess && (
        <div className="rounded-lg bg-green-50 border border-green-200 p-4">
          <p className="text-sm text-green-800">
            Thank you for your submission! We&apos;ll get back to you within 24
            hours.
          </p>
        </div>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#00ad45] hover:bg-[#00ad45]/90 text-white"
        size="lg"
      >
        {isSubmitting ? "Submitting..." : "Get Your Cash Offer"}
      </Button>
    </form>
  );
}
