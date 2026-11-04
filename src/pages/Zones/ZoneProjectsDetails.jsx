
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import api from "../../utils/axios-instance"

export default function ProjectDetails() {

  const { id } = useParams()
  const [project, setProject] = useState(null)
  const [zone, setZone] = useState(null)
  const [selectedImage, setSelectedImage] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getProjectDetails = async () => {
      try {
        const response = await api.get("/zone")
        let foundProject = null
        let foundZone = null
        for (const item of response.data) {
          const selectedProject = item.projects?.find(
            (project) => project.id === id
          )
          if (selectedProject) {
            foundProject = selectedProject
            foundZone = item
            break
          }
        }
        setProject(foundProject)
        setZone(foundZone)
        if (foundProject?.images?.length > 0) {
          setSelectedImage(foundProject.images[0])
        }
      } catch (error) {
        console.log("Error fetching project details:", error)
      } finally {
        setLoading(false)
      }
    }
    getProjectDetails()
  }, [id])
  if (loading) {
    return <p className="text-center mt-20">Loading...</p>
  }
  if (!project) {
    return <p className="text-center mt-20">Project not found</p>
  }
  return (
    <div className="max-w-[1381px] mx-[45px] mt-[40px] mb-[131px]">
      {/* Project Name */} 
      <div className='flex flex-col items-center justify-center'  >
            <h2 className="font-[Playfair] text-[32px] font-semibold text-center mt-[40px]">{zone.name_en} Projects</h2>
            <div className="bg-[#C34B4B] h-[6px] w-[90px] mt-[4px] mb-[48px] rounded-[2px] "></div>
        </div>
      {/* Main Image */}
      <div className="w-full h-[562px] overflow-hidden rounded-2xl">
        <img
          src={selectedImage}
          alt={project.name_en}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Gallery */}
      <div className="flex gap-3 mt-3 overflow-x-auto">
        {project.images?.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${project.name_en} ${index + 1}`}
            onClick={() => setSelectedImage(image)}
            className={`w-[180px] h-[120px] object-cover rounded-lg cursor-pointer shrink-0 border-2 ${
              selectedImage === image
                ? "border-[#8E1616]"
                : "border-transparent"
            }`}
          />
        ))}
      </div>
      {/* Project Information */}
      <div className="mt-10">
        <div className="flex flex-col flex-wrap ">
          <h2 className="font-lato font-bold text-[40px] text-[#8E1616]">
            {project.name_en}
          </h2>
          <p className="text-[#847D7D] text-[20px]">
            {zone?.name_en}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          <div>
            <h3 className="font-bold text-[26px] mb-5">
              At a glance
            </h3>
            <ul className="list-disc pl-5 text-[#847D7D] text-[20px] space-y-4">
              <li>Project: {project.name_en}</li>
              <li>Zone: {zone?.name_en}</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-[26px] mb-5">
              Overview
            </h3>
            <p className="text-[#847D7D] text-[20px] leading-7">
              {project.description_en}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
