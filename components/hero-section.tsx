import { Button } from "@/components/ui/button"
import { MessageCircle, Users, Shield } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/images/hennessy-main.png)",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="georgian-text text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            ჰენესების დინასტია
          </h1>
          <p className="georgian-text text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            ელიტარული ოჯახი და საზოგადოება  
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" asChild className="bg-red-600 hover:bg-red-700 text-lg px-8 py-4">
            <a href="https://discord.gg/AwyqxagxK5" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" />
              <span className="georgian-text">DISCORD სერვერი     </span>
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-4 bg-transparent"
          >
            <a href="/about">
              <Users className="w-5 h-5 mr-2" />
              <span className="georgian-text">ჩვენს შესახებ</span>
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-black/50 backdrop-blur-sm rounded-lg p-6 border border-red-900/20">
            <Users className="w-12 h-12 text-red-400 mx-auto mb-4" />
            <h3 className="georgian-text text-xl font-bold text-white mb-2">ოჯახური ერთობა</h3>
            <p className="georgian-text text-gray-300">მეგობრული გარემო და ურთიერთ დაფასება</p>
          </div>
          <div className="bg-black/50 backdrop-blur-sm rounded-lg p-6 border border-red-900/20">
            <Shield className="w-12 h-12 text-red-400 mx-auto mb-4" />
            <h3 className="georgian-text text-xl font-bold text-white mb-2">პატივისცემა</h3>
            <p className="georgian-text text-gray-300">ნდობა და ურთიერთ პატივისცემა</p>
          </div>
          <div className="bg-black/50 backdrop-blur-sm rounded-lg p-6 border border-red-900/20">
            <MessageCircle className="w-12 h-12 text-red-400 mx-auto mb-4" />
            <h3 className="georgian-text text-xl font-bold text-white mb-2">საზოგადოება</h3>
            <p className="georgian-text text-gray-300">შემოუერთდით ჩვენს Discord სერვერს!   </p>
          </div>
        </div>
      </div>
    </section>
  )
}
