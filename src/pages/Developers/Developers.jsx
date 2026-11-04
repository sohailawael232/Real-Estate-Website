import devl from "../../assets/images/develop.png"
import Hero from "../../components/Hero"
import React, { useEffect, useState } from "react"
import api from "../../utils/axios-instance"
import { Link } from "react-router-dom"

export default function Developers() {
  const [developers, setDevelopers] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    async function getDevelopers() {
      try {
        const response = await api.get("/developer")
        setDevelopers(response.data)
      } catch (error) {
        console.log("Error fetching developers:", error)
      } finally {
        setLoading(false)
      }
    }
    getDevelopers()
  }, [])
  return (
    <>
      <Hero
        bg={devl}
        title={"Defining the Future Skyline."}
        disc={"Great developments require more than just capital; they require a narrative. We provide the elite marketing and specialized brokerage services needed to position your landmark projects in front of the world’s most discerning buyers."}
        btnCont={"Explore"}
        btn={false}
        icons={true}
      />
      {/* Developers Cards */}
      <div className="max-w-[1366px] mx-auto px-5 mt-[36px] mb-[100px]">
        {loading ? (
          <p className="text-center text-xl font-bold">
            Loading...
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] justify-items-center">
            {developers.map((developer) => (
              <div
                key={developer.id}
                className="flex flex-col w-full max-w-[442px] h-[426px] border border-[#EAEAEA] rounded-2xl shadow-md/25"
              >
                {/* Developer Image */}
                <div className="relative mx-[12px] mt-[13px] mb-[7px] w-auto h-[271px] shrink-0">
                  <img
                    src={developer.images?.[0]}
                    alt={developer.name_en}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  <span className="absolute top-[25px] right-[7px] bg-[#8E1616] px-[15px] py-1 rounded-[4px] text-white text-sm">
                    Developer
                  </span>
                </div>
                {/* Developer Information */}
                <div className="flex items-center gap-2 px-[13px] flex-1">
                  <div className="flex flex-col">
                    <h2 className="text-[#1D1616] font-semibold text-[20px]">
                      {developer.name_en}
                    </h2>
                    <p className="text-[#847D7D] text-[12px] font-semibold">
                      {developer.projects?.length || 0} Projects
                    </p>
                  </div>
                </div>
                {/* View Projects */}
                <Link
                  to={`/developers/${developer.id}/projects`}
                  className="flex items-center justify-center border border-[#8E1616] mx-[13px] mb-[9px] rounded-[8px] text-[#8E1616] h-[35px] hover:bg-[#8E1616] hover:text-white transition"
                >
                  View Projects
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}