"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";
import { Input } from "@/components/ui/input";

interface AddressAutocompleteProps {
  onSelect: (place: any) => void;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  id?: string;
  name?: string;
}

export default function AddressAutocomplete({
  onSelect,
  value,
  onChange,
  required,
  id,
  name,
}: AddressAutocompleteProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!(window as any).google || !inputRef.current) return;

    const autocomplete = new (window as any).google.maps.places.Autocomplete(
      inputRef.current,
      {
        types: ["address"],
        componentRestrictions: { country: "us" },
      }
    );

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      if (onSelect) onSelect(place);
    });
  }, [onSelect]);

  return (
    <>
      <Input
        ref={inputRef}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder="Start typing your address..."
        className="w-full"
      />
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`}
        strategy="lazyOnload"
      />
    </>
  );
}
