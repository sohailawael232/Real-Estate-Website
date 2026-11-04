import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
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
    <div className="max-w-[1366px] mx-[30px] px-5 py-10"> 
       <div className='flex flex-col items-center justify-center'  >
        <h2 className="font-[Playfair] text-[32px] font-semibold text-center mt-[40px]">{developer.name_en} Projects</h2>
        <div className="bg-[#C34B4B] h-[6px] w-[164px] mt-[4px] mb-[48px] rounded-[2px] "></div>
    </div>

      {/* Developer Image */}
      <div className="w-[1367px] h-[525px] mb-[61px] rounded-2xl overflow-hidden">
        <img
          src={developer.images?.[0]}
          alt={developer.name_en}
          className="w-full h-[525px] object-cover"
        />
      </div>
      {/* Projects */}
      {developer.projects?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 mb-[183px] lg:grid-cols-3 gap-5">
          {developer.projects.map((project) => (
            <div
              key={project.id}
              className="border border-[#EAEAEA] rounded-2xl shadow-md overflow-hidden"
            >
              {/* Project Image */}
              <div className="h-[230px]">
                <img
                  src={project.images?.[0]}
                  alt={project.name_en}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Project Information */}
              <div className="p-4">
                <h3 className="font-[playfair] font-semibold text-xl text-[#8E1616]">
                  {project.name_en}
                </h3>
                <p className="text-sm text-[#847D7D] mt-2 line-clamp-3">
                  {project.description_en}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center mb-[px] text-[#847D7D] text-lg">
          No Projects Available
        </p>
      )}
    </div>
  )
}