
import React, { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import api from "../../utils/axios-instance"

export default function DeveloperProjects() {
  const { id } = useParams()
  const [developer, setDeveloper] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getDeveloperProjects() {
      try {
        const response = await api.get("/developer")
        const selectedDeveloper = response.data.find(
          (item) => item.id === id
        )
        setDeveloper(selectedDeveloper || null)
      } catch (error) {
        console.log("Error fetching developer projects:", error)
      } finally {
        setLoading(false)
      }
    }
    getDeveloperProjects()
  }, [id])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    )
  }

  if (!developer) {
    return (
      <div className="text-center mt-20 text-[#8E1616]">
        Developer Not Found
      </div>
    )
  }

  return (
    <div className="w-full max-w-[1366px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">

      <div className="flex flex-col items-center justify-center">
        <h2 className="font-[Playfair] text-2xl sm:text-[28px] lg:text-[32px] font-semibold text-center mt-6 sm:mt-[40px]">
          {developer.name_en} Projects
        </h2>

        <div className="bg-[#C34B4B] h-[6px] w-[164px] mt-[4px] mb-8 sm:mb-[48px] rounded-[2px]"></div>
      </div>

      {/* Developer Image */}
      <div className="w-full h-[220px] sm:h-[350px] lg:h-[525px] mb-10 sm:mb-[61px] rounded-xl sm:rounded-2xl overflow-hidden">
        <img
          src={developer.images?.[0]}
          alt={developer.name_en}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Projects */}
      {developer.projects?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20 sm:mb-[183px]">
          {developer.projects.map((project) => (
            <div
              key={project.id}
              className="w-full min-w-0 border border-[#EAEAEA] rounded-2xl shadow-md overflow-hidden"
            >
              {/* Project Image */}
              <div className="h-[200px] sm:h-[230px]">
                <img
                  src={project.images?.[0]}
                  alt={project.name_en}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Information */}
              <div className="p-3 sm:p-4">
                <h3 className="font-[playfair] font-semibold text-lg sm:text-xl text-[#8E1616] break-words">
                  {project.name_en}
                </h3>

                <p className="text-sm text-[#847D7D] mt-2 line-clamp-3">
                  {project.description_en}
                </p>

                <Link
                  to={`/developers/${id}/projects/${project.id}`}
                  className="flex justify-center items-center border-[1px] border-[#8E1616] text-[#8E1616] py-[8px] rounded-lg mt-5 hover:bg-[#8E1616] hover:text-white transition duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center mb-20 text-[#847D7D] text-lg">
          No Projects Available
        </p>
      )}
    </div>
  )
}
