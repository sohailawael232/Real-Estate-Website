
import React, { useState, useEffect } from 'react'
import zon from "../../assets/images/zone.png"
import Hero from "../../components/Hero"
import api from "../../utils/axios-instance"
import { Link } from "react-router-dom"

export default function Zones() {
  const [zones, setZones] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const getZones = async () => {
      try {
        const response = await api.get("/zone")
        setZones(response.data)
      } catch (error) {
        console.log("Error in zones:", error)
      } finally {
        setLoading(false)
      }
    }
    getZones()
  }, [])
  return (
    <>
      <Hero
        bg={zon}
        title={"Destinations Defined by Distinction"}
        disc={"From the quiet pulse of the shoreline to the vibrant energy of the metropolitan center, explore our guide to the neighborhoods that mirror your ambition and your aesthetic."}
        btnCont={"Explore"}
        btn={false}
        icons={true}
      />
      <div className="max-w-[1366px] mx-auto px-5 my-[87px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {loading ? (
          <p>Loading...</p>
        ) : (
          zones.map((zone) => (
            <Link
              to={`/zones/${zone.id}/projects`}
              key={zone.id}
              className="flex flex-col gap-3 hover:opacity-90 transition"
            >
              <img
                src={zone.images?.[0]}
                alt={zone.name_en}
                className="rounded-[8px] w-[327px] h-[221px] object-cover"
              />
            </Link>
          ))
        )}
      </div>
    </>
  )
}
