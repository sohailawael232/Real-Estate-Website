import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import uni from "../../assets/images/unit.png"
import Hero from "../../components/Hero"
import api from "../../utils/axios-instance"
import searchh from "./Group.svg"
import bed from "./bed.svg"
import bath from "./bath.svg"
import rul from "./rul.svg"


export default function Units() {
  const [units, setUnits] = useState([])
  const [loading, setLoading] = useState(true)

  const [search, setSearch] = useState("")
  const [price, setPrice] = useState("")
  const [bedrooms, setBedrooms] = useState("")
  const [developer, setDeveloper] = useState("")
  const [zone, setZone] = useState("")
  const [project, setProject] = useState("")
  const [status, setStatus] = useState("")

  const resetFilters = () => {
  setSearch("")
  setPrice("")
  setBedrooms("")
  setDeveloper("")
  setZone("")
  setProject("")
  setStatus("")
}

  
  useEffect(() => {
    const getUnits = async () => {
      try {
        const response = await api.get("/unit")
        setUnits(response.data)
      } catch (error) {
        console.log("Error in units:", error)
      } finally {
        setLoading(false)
      }
    }

    getUnits()
  }, [])

  
  const developers = [...new Set(units.map(unit => unit.developerName_en).filter(Boolean))]
  const zones = [...new Set(units.map(unit => unit.zoneName_en).filter(Boolean))]
  const projects = [...new Set(units.map(unit => unit.projectName_en).filter(Boolean))]
  const statuses = [...new Set(units.map(unit => unit.status).filter(Boolean))]

  // Filter Units
  const filteredUnits = units.filter(unit => {
    return (
      (unit.title_en || "").toLowerCase().includes(search.toLowerCase()) &&

      (price === "" || Number(unit.price) <= Number(price)) &&

      (bedrooms === "" || unit.bedrooms === Number(bedrooms)) &&

      (developer === "" || unit.developerName_en === developer) &&

      (zone === "" || unit.zoneName_en === zone) &&

      (project === "" || unit.projectName_en === project) &&

      (status === "" || unit.status === status)
    )
  })

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-2xl font-bold">Loading...</p>
      </div>
    )
  }

  return (
    <>
      <Hero
        bg={uni}
        title={"Where Visionary Design Meets Daily Life"}
        disc={"Experience a collection of residences designed as personal sanctuaries. Each unit balances expansive city views with artisanal textures and quiet, light-filled interiors to create the ultimate retreat from the world"}
        btnCont={"Explore"}
        btn={false}
        icons={true}
      />
{/* Search and Filters */}
<div className="max-w-[1366px] mx-auto mt-[100px] px-4 font-semibold text-[#BEBEBE]">
  <div className="w-full min-h-[58px] flex items-center border border-[#8E1616] rounded-[8px] bg-white overflow-x-auto">
    {/* Search Input */}
    <div className="min-w-[155px] flex-1 flex items-center px-3 border-r border-[#8E1616]">
      <input
        type="text"
        placeholder="Search Property"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full outline-none text-[18px]"
      />
      <div className="h-[30px] w-[30px] mt-[5px]">
        <img src={searchh} alt="" />
      </div>
      <div className="mt-[60px]"></div>
    </div>
    {/* Bedrooms */}
    <select
      value={bedrooms}
      onChange={(e) => setBedrooms(e.target.value)}
      className="min-w-[85px] flex-1 p-3 outline-none bg-transparent text-[18px] border-r border-[#8E1616]"
    >
      <option value="">Bedrooms</option>
      <option value="2">2 Bedrooms</option>
      <option value="3">3 Bedrooms</option>
      <option value="4">4 Bedrooms</option>
      <option value="12">12 Bedrooms</option>
    </select>
    {/* Developer */}
    <select
      value={developer}
      onChange={(e) => setDeveloper(e.target.value)}
      className="min-w-[85px] flex-1 p-3 outline-none bg-transparent text-[18px] border-r border-[#8E1616]"
    >
      <option value="">Developer</option>
      {developers.map((item) => (
        <option key={item} value={item}>{item}</option>
      ))}
    </select>
    {/* Zone */}
    <select
      value={zone}
      onChange={(e) => setZone(e.target.value)}
      className="min-w-[75px] flex-1 p-3 outline-none bg-transparent text-[18px] border-r border-[#8E1616]"
    >
      <option value="">Zone</option>
      {zones.map((item) => (
        <option key={item} value={item}>{item}</option>
      ))}
    </select>
    {/* Projects */}
    <select
      value={project}
      onChange={(e) => setProject(e.target.value)}
      className="min-w-[85px] flex-1 p-3 outline-none bg-transparent text-[18px] border-r border-[#8E1616]"
    >
      <option value="">Projects</option>
      {projects.map((item) => (
        <option key={item} value={item}>{item}</option>
      ))}
    </select>
    {/* Status */}
    <select
      value={status}
      onChange={(e) => setStatus(e.target.value)}
      className="min-w-[75px] flex-1 p-3 outline-none bg-transparent text-[18px] border-r border-[#8E1616]"
    >
      <option value="">Status</option>
      {statuses.map((item) => (
        <option key={item} value={item}>{item}</option>
      ))}
    </select>
    {/* Price */}
    <select
      value={price}
      onChange={(e) => setPrice(e.target.value)}
      className="min-w-[100px] flex-1 p-3 outline-none bg-transparent text-[18px]"
    >
      <option value="">Price Range</option>
      <option value="2000000">Up to 2M</option>
      <option value="5000000">Up to 5M</option>
      <option value="10000000">Up to 10M</option>
      <option value="20000000">Up to 20M</option>
    </select>
  </div>
  {/* Search and Reset Buttons */}
  <div className="flex justify-center items-center gap-4 mt-[61px]">
    <button
      onClick={() => setSearch(search.trim())}
      className="w-[350px] h-[57px] rounded-[6px] bg-gradient-to-r from-[#8E1616] to-[#C34B4B] text-white text-[20px] font-semibold"
    >Search</button>
    <button
      onClick={resetFilters}
      className="w-[200px] h-[57px] rounded-[6px] border border-[#8E1616] text-[#8E1616] text-[20px] font-semibold hover:bg-[#8E1616] hover:text-white transition"
    >Reset</button>
  </div>
</div>
{/* Units Cards */}
<div className="max-w-[1366px] mx-auto px-4 mt-[116px] mb-[142px]">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
    {filteredUnits.length > 0 ? (
      filteredUnits.map((unit) => (
        <div
          key={unit.id}
          className="w-[442px] min-h-[529px] flex flex-col border border-[#EAEAEA] rounded-[12px] shadow-[0px_3px_4px_rgba(0,0,0,0.2)] overflow-hidden"
        >
          {/* Image */}
          <div className="relative w-full h-[284px] shrink-0">
            <img
              src={unit.images?.[0]}
              alt={unit.title_en}
              className="w-full h-full object-cover"
            />
            <span className="absolute top-[13px] right-[6px] px-3 py-1 rounded-[3px] bg-[#21E008] text-white text-[14px] font-semibold">
              {unit.status}
            </span>
          </div>
          {/* Unit Information */}
          <div className="h-[42px] shrink-0 border-y border-[#CEC7C7] flex items-center justify-center">
            <div className="flex items-center justify-center gap-[4px] text-[16px] text-[#A18E77]">
              <div><img src={bed} alt="" /></div>
              <span>{unit.bedrooms} Bedrooms</span>
              <span className="border-l border-[#CEC7C7] h-[20px] mx-[22px]"></span>
              <div><img src={bath} alt="" /></div>
              <span>{unit.bathrooms} Bathrooms</span>
              <span className="border-l border-[#CEC7C7] h-[20px] mx-[22px]"></span>
              <div><img src={rul} alt="" /></div>
              <span>{unit.size}m</span>
            </div>
          </div>
          {/* Details */}
          <div className="flex flex-col flex-1 px-[10px] py-[10px]">
            <div className="flex justify-between items-center gap-2">
              <h3 className="font-[playfair] font-semibold text-[22px] text-[#8E1616] truncate">
                {unit.title_en}
              </h3>
              <p className="font-lato font-semibold text-[26px] text-[#A18E77] whitespace-nowrap">
                {Number(unit.price).toLocaleString()} EGP
              </p>
            </div>
            <p className="mt-[10px] text-[16px] text-[#847D7D] line-clamp-3">
              Experience the true meaning of modern living in this luxurious apartment featuring spacious rooms, elegant finishes, and breathtaking views.
            </p>
            {/* View Details */}
            <div className="mt-[24px] mb-[10px] mx-[14px] pt-[8px]">
              <Link
                to={`/units/${unit.id}`}
                className="w-full h-[35px] flex items-center justify-center border border-[#8E1616] rounded-[6px] text-[#8E1616] text-[16px] hover:bg-[#8E1616] hover:text-white transition"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))
    ) : (
      <p className="col-span-full text-center text-xl font-bold text-[#8E1616]">
        No Units found
      </p>
    )}
  </div>
</div>
    </>
  )
}