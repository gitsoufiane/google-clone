"use client";
import { useEffect, useState } from "react";

const API_KEY = process.env.NEXT_PUBLIC_IP_API_KEY;

export function CountryLookup() {
  const [country, setCountry] = useState("United States");

  useEffect(() => {
    fetch(`https://extreme-ip-lookup.com/json/?key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setCountry(data.country));
  }, []);

  return <div>{country}</div>;
}
