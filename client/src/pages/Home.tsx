import { Button } from "@/components/ui/button";
import { ChevronRight, Music, BarChart3, Users, BookOpen, Microscope } from "lucide-react";
import { useState } from "react";

/**
 * NeuroConnect Research Lab - Homepage
 * Design: Research Lab Style (inspired by IBM Research)
 * Focus: MOCA measurement, benchmark baseline, Polar Bear Music Group,
 * VA Palo Alto music intervention, Stanford Medicine collaboration
 * Theme: Alzheimer's awareness and prevention through research
 */

export default function Home() {
  const [activeTab, setActiveTab] = useState("overview");

  const researchAreas = [
    {
      icon: BarChart3,
      title: "Longitudinal Data Collection",
      description: "Systematic MOCA assessment and cognitive health benchmarking over time, building a comprehensive Alzheimer's database.",
    },
    {
      icon: Music,
      title: "Behavioral Interventions",
      description: "Evidence-based music therapy and lifestyle interventions integrated into community programs with continuous outcome tracking.",
    },
    {
      icon: Users,
      title: "Community Engagement",
      description: "Intergenerational programs connecting youth volunteers with seniors, creating sustainable community participation in research.",
    },
    {
      icon: Microscope,
      title: "Computational Analysis",
      description: "AI-powered analysis of longitudinal data patterns to identify prevention strategies and predict cognitive trajectories.",
    },
  ];

  const programs = [
    {
      name: "Music Intervention Program",
      location: "San Francisco Bay Area & VA Palo Alto Health Care System",
      duration: "3+ Years (Twice Weekly)",
      description: "Polar Bear Music Group partners with VA Palo Alto for a longitudinal music therapy program. Youth-led intergenerational music engagement creating meaningful connections while demonstrating significant improvements in cognitive function and emotional health outcomes.",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663154342219/iAVdsrXvuKJhTtQa.png",
    },
    {
      name: "AI Computational Neuroscience Weekly Meetup",
      location: "Zoom",
      duration: "Weekly",
      description: "Collaborative research group exploring artificial intelligence applications in computational neuroscience. Bringing together researchers, students, and practitioners to advance understanding of neural mechanisms underlying cognitive aging and dementia prevention.",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/j649Y3dwr3FYAoDvIajrZP/sandbox/KhRx1k5X0Bpssf9OjcljKZ-img-1_1771554284000_na1fn_YWktbmV1cm9zY2llbmNlLXNpbXBsZQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvajY0OVkzZHdyM0ZZQW9EdklhanJaUC9zYW5kYm94L0toUngxazVYMEJwc3NmOU9qY2xqS1otaW1nLTFfMTc3MTU1NDI4NDAwMF9uYTFmbl9ZV2t0Ym1WMWNtOXpZMmxsYm1ObExYTnBiWEJzWlEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=pFb3tLpSwmH3hkZ-YBXlHDdcaavdy4QFL7Gyu4qzIM7qDTXYj0ag6LCX9WFtRRuWKdCqWUGus4wgXojISmBVbzjFQ7T8JnzOZSo5gpUeC3-UUebCCDDLx2Z3gafq5mRJE7mpghyGuNjjDNRfRe~BuGAazsK0xdz17w6r~bjfZ5oaqEFwv9qAPKR5X2fDvv8ySFP7DWj0ofWZ6TVvvkzpgoje3uEmOSJGoOxTTtk840ilghr8orELBAbqpwgnUFMGHWx2RxnbnXaCaB0DyC4iRY2YnbOG3~YRuJI-nyYIBPtwAvJkrfyGODkRvspvUswrA1h9K8BMm0~sIy7udKJv2g__",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
              <Microscope className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <span className="text-lg md:text-xl font-bold text-gray-900">NeuroDataCommunity</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#research" className="text-sm text-gray-700 hover:text-blue-600 transition">Research</a>
            <a href="#programs" className="text-sm text-gray-700 hover:text-blue-600 transition">Programs</a>
            <a href="#about" className="text-sm text-gray-700 hover:text-blue-600 transition">About</a>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white text-sm">Contact</Button>
          </div>
          
          <div className="md:hidden flex items-center gap-2">
            <a href="#programs" className="text-xs text-gray-700 hover:text-blue-600 transition">Programs</a>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white text-xs py-2">Contact</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-50 to-blue-50 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                Building a Longitudinal Community for Alzheimer's Research
              </h1>
              <p className="text-base md:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed">
                Our longitudinal community database integrates MOCA cognitive assessments, behavioral intervention outcomes, and demographic data across diverse populations. This comprehensive approach enables us to track cognitive trajectories, identify protective factors, and develop personalized prevention strategies for Alzheimer's disease.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 md:px-6 py-2 md:py-3 text-sm md:text-base">
                  Explore Research
                </Button>
                <Button variant="outline" className="border-gray-300 text-gray-900 px-4 md:px-6 py-2 md:py-3 text-sm md:text-base">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative order-first md:order-last">
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663154342219/yDsLuRBLZsnqGnkk.jpeg"
                alt="Research Lab"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>





      {/* Programs */}
      <section id="programs" className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="mb-8 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">Programs</h2>
            <p className="text-base md:text-lg text-gray-600">Evidence-based interventions demonstrating real-world impact on cognitive health and social well-being.</p>
          </div>
          
          <div className="space-y-8 md:space-y-12">
            {programs.map((program, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <img src={program.image} alt={program.name} className="w-full h-48 md:h-96 object-cover order-first md:order-none" />
                  <div className="p-4 md:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2 md:mb-3">
                        {idx === 0 ? (
                          <>
                            <Music className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                            <span className="text-xs md:text-sm font-semibold text-blue-600">Music Intervention</span>
                          </>
                        ) : (
                          <>
                            <Microscope className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                            <span className="text-xs md:text-sm font-semibold text-blue-600">Research Collaboration</span>
                          </>
                        )}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{program.name}</h3>
                      <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">{program.description}</p>
                      <div className="space-y-1 md:space-y-2 text-xs md:text-sm text-gray-600">
                        <p><strong>Location:</strong> {program.location}</p>
                        <p><strong>Duration:</strong> {program.duration}</p>
                      </div>
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white w-fit mt-4 md:mt-6 text-sm md:text-base py-2 md:py-3">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stanford Collaboration */}
      <section className="py-12 md:py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
            <div className="order-first md:order-none">
              <img 
                src="https://private-us-east-1.manuscdn.com/sessionFile/j649Y3dwr3FYAoDvIajrZP/sandbox/yYYC2A6grrIO1KzD5XC8qU-img-2_1771553676000_na1fn_c3RhbmZvcmQtbWVkaWNpbmUtY2FtcHVz.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvajY0OVkzZHdyM0ZZQW9EdklhanJaUC9zYW5kYm94L3lZWUMyQTZncnJJTzFLekQ1WEM4cVUtaW1nLTJfMTc3MTU1MzY3NjAwMF9uYTFmbl9jM1JoYm1admNtUXRiV1ZrYVdOcGJtVXRZMkZ0Y0hWei5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Gwq6tQulnwC-Vm9W2CuhsyOcPOLgkkR7UlKbcaA1gMBCBH5WuNIh6dAxWpdXelb-8NkfbbI7xyH2ViAjfeEogB0YnwpxiyIVrL6dzUe~5-G~5Hz93UDO1PWqfSh861BF5fcdPjnqO29lMpIRLli6uw9~rZg3LB0PcceWbxd1TWZtCtuaCqmKGuvepP0Z14eHN9X6dqXFBxjwtQ4l2C0U6Wz0LOUsMgHyr7vNweBxyGx8i-uLdSpOtC3diUYnhCXYGujLCRFL669nXZ82w8LvlsYsg3giPSpYrfVFbR5rZqf6I~nyODipKySTNut8UtM6Gc5E6Z5Jrr7nrGYrBjXb6g__"
                alt="Stanford School of Medicine"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">Stanford Medicine Partnership</h2>
              <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6 leading-relaxed">
                Our collaboration with Stanford School of Medicine focuses on understanding emotional and social health differences in aging populations. This partnership brings rigorous academic research methodology to our community-based interventions.
              </p>
              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                <div className="bg-white p-3 md:p-4 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">Research Focus</h4>
                  <p className="text-gray-600 text-sm md:text-base">Emotional and social health factors in cognitive aging</p>
                </div>
                <div className="bg-white p-3 md:p-4 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">Collaboration Model</h4>
                  <p className="text-gray-600 text-sm md:text-base">Joint publications, data sharing, and clinical integration</p>
                </div>
                <div className="bg-white p-3 md:p-4 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">Impact</h4>
                  <p className="text-gray-600 text-sm md:text-base">Evidence-based interventions advancing Alzheimer's awareness</p>
                </div>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white text-sm md:text-base py-2 md:py-3">View Publications</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Alzheimer's Awareness */}
      <section className="py-12 md:py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">Advancing Alzheimer's Awareness</h2>
            <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto">
              Our mission is to increase public understanding of cognitive health, dementia prevention, and the transformative power of evidence-based interventions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-gray-800 p-4 md:p-8 rounded-lg">
              <BookOpen className="w-10 h-10 md:w-12 md:h-12 text-blue-400 mb-3 md:mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Educational Resources</h3>
              <p className="text-gray-300">Free guides, webinars, and research summaries for caregivers and patients.</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <Users className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Community Programs</h3>
              <p className="text-gray-300">Accessible interventions connecting seniors with youth volunteers.</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <Microscope className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Research Collaboration</h3>
              <p className="text-gray-300">Partner with us to advance cognitive health research and innovation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Microscope className="w-6 h-6 text-blue-400" />
                <span className="font-bold text-white">NeuroDataCommunity</span>
              </div>
              <p className="text-sm">Advancing cognitive health through research and community engagement.</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Research</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition">MOCA Measurement</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Benchmark Data</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Publications</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Programs</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition">Polar Bear Music</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">VA Palo Alto</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Volunteer</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="mailto:jinxuejim@gmail.com" className="hover:text-blue-400 transition">jinxuejim@gmail.com</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2026 NeuroDataCommunity. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
