import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import api from "../../utils/axios-instance"

export default function UnitDetails() {
  const { id } = useParams()
  const [unit, setUnit] = useState(null)
  const [loading, setLoading] = useState(true)
  const [activeImage, setActiveImage] = useState(0)
  // Get Selected Unit
  useEffect(() => {

    const getUnitDetails = async () => {
    try {
        const response = await api.get("/unit")
        const selectedUnit = response.data.find(
          (item) => item.id === id
        )
        setUnit(selectedUnit || null)
      } catch (error) {
        console.log("Error fetching unit:", error)
      } finally {
        setLoading(false)
      }
    }
    getUnitDetails()
  }, [id])
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-2xl font-bold">Loading...</p>
      </div>
    )
  }
  if (!unit) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-2xl text-[#8E1616] font-bold">
          Unit Not Found
        </p>
      </div>
    )
  }
  const phoneNumber = "201000000000"
  return (
    <div className="w-full max-w-[1400px] mb-[148px] mx-auto px-4 py-5">
      {/* Images Gallery */}
      <div className="w-full">
        {/* Main Image */}
        <div className="w-full h-[400px] rounded-xl overflow-hidden">
          <img
            src={unit.images?.[activeImage]}
            alt={unit.title_en}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Thumbnail Images */}
        <div className="flex gap-2 mt-2 overflow-x-auto">
          {unit.images?.map((image, index) => (
            <button
              key={index}
              onClick={() => setActiveImage(index)}
              className={`shrink-0 w-[130px] h-[90px] rounded-lg overflow-hidden border-2 ${
                activeImage === index
                  ? "border-[#8E1616]"
                  : "border-transparent"
              }`}
            >
              <img
                src={image}
                alt={`Unit ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
      {/* Unit Title and Price */}
      <div className="flex flex-wrap justify-between items-center gap-4 mt-8">
        <h1 className="text-2xl font-semibold text-[#8E1616]">
          {unit.title_en}
        </h1>
        <p className="text-2xl font-bold text-[#A18E77]">
          {Number(unit.price).toLocaleString()} EGP
        </p>
      </div>
      {/* Location */}
      <p className="text-sm text-gray-500 mt-2">
        <span className="mr-1">⌖</span>
        {unit.zoneName_en} – {unit.projectName_en}
      </p>
      {/* Details and Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
        {/* At a glance */}
        <div>
          <h2 className="font-bold text-xl mb-4">
            At a glance
          </h2>
          <ul className="list-disc pl-5 space-y-4 text-gray-500">
            <li>Plot size: {unit.size} m²</li>
            <li>Bedrooms: {unit.bedrooms}</li>
            <li>Bathrooms: {unit.bathrooms}</li>
            <li>Project: {unit.projectName_en}</li>
            <li>Developer: {unit.developerName_en}</li>
            <li>Zone: {unit.zoneName_en}</li>
            <li>Status: {unit.status}</li>
          </ul>
        </div>
        {/* Overview */}
        <div>
          <h2 className="font-bold text-xl mb-4">
            Overview
          </h2>
          <p className="text-gray-500 leading-7">
            {unit.description_en}
          </p>
          {/* Contact Buttons */}
          <div className="flex flex-wrap gap-3 mt-8">
            <a
              href={`https://wa.me/${phoneNumber}`}
              target="_blank"
              rel="noreferrer"
              className="flex-1 min-w-[150px] text-center bg-green-600 text-white py-3 rounded-md font-semibold"
            >
              Contact via WhatsApp
            </a>
            <a
              href={`tel:+${phoneNumber}`}
              className="flex-1 min-w-[150px] text-center border border-[#8E1616] text-[#8E1616] py-3 rounded-md font-semibold"
            >
              Call
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}