
import React, { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import api from "../../utils/axios-instance"

export default function ZoneProjects() {
  const { id } = useParams()
  const [zone, setZone] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getZoneProjects = async () => {
      try {
        const response = await api.get("/zone")
        const selectedZone = response.data.find(
          (item) => item.id === id
        )
        setZone(selectedZone || null)
      } catch (error) {
        console.log("Error fetching zone projects:", error)
      } finally {
        setLoading(false)
      }
    }
    getZoneProjects()
  }, [id])

  if (loading) {
    return <p className="text-center mt-20">Loading...</p>
  }

  if (!zone) {
    return <p className="text-center mt-20">Zone not found</p>
  }

  return (
    <div className="w-full max-w-[1366px] mx-auto px-4 sm:px-6 lg:px-9 mt-6 sm:mt-10 mb-20 sm:mb-[183px]">

      <div className="flex flex-col items-center justify-center">
        <h2 className="font-[Playfair] text-2xl sm:text-[28px] lg:text-[32px] font-semibold text-center mt-6 sm:mt-[40px]">
          {zone.name_en} Projects
        </h2>

        <div className="bg-[#C34B4B] h-[6px] w-[90px] mt-[4px] mb-8 sm:mb-[48px] rounded-[2px]"></div>
      </div>

      <img
        src={zone.images?.[0]}
        alt={zone.name_en}
        className="w-full h-[220px] sm:h-[350px] lg:h-[525px] object-cover rounded-xl sm:rounded-2xl mb-10 sm:mb-[61px]"
      />

      {zone.projects?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {zone.projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col w-full min-w-0 border border-[#EAEAEA] rounded-2xl shadow-md overflow-hidden"
            >
              <img
                src={project.images?.[0]}
                alt={project.name_en}
                className="w-full h-[200px] sm:h-[220px] object-cover"
              />

              <div className="flex flex-col p-3 flex-1">
                <h2 className="font-[playfair] font-semibold text-lg sm:text-xl text-[#8E1616] break-words">
                  {project.name_en}
                </h2>

                <p className="text-sm text-[#847D7D] mt-3">
                  {project.description_en}
                </p>
              </div>

              <Link
                to={`/projects/${project.id}`}
                className="flex items-center justify-center border border-[#8E1616] mx-3 mb-3 rounded-lg text-[#8E1616] h-[35px] hover:bg-[#8E1616] hover:text-white transition"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-lg sm:text-xl text-[#8E1616]">
          No Projects Available
        </p>
      )}
    </div>
  )
}
